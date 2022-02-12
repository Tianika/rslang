import React, { useEffect } from 'react';

import {
  AnswerButton,
  AnswersButtonsContainer,
  Arrow,
  ArrowsContainer,
  BlockGame,
  EmptyCheckbox,
  GameHeader,
  GameScore,
  GameTimer,
  Level,
  ScorePerAnswer,
  Shelf,
  SprintGameContainer,
  StyledCheckboxesContainer,
  StyledCheckedCheckbox,
  StyledLevelsContainer,
  Translation,
  WordText
} from './styles';

import checkboxIcon from '../../assets/svg/checked-word-sprint.svg';
import arrowLeft from '../../assets/svg/arrow-left.svg';
import arrowRight from '../../assets/svg/arrow-right.svg';
import { sprintGameActions } from './game.slice';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import {
  checkboxesSelector,
  currentWordSelector,
  wordSelector,
  levelSelector,
  scorePerLevelSelector,
  totalScoreSelector,
  currentTranslateSelector
} from './sprint.selectors';
import { BOOK_LINKS, HEADER_BG_COLOR } from './constants';
import { Word } from './types';

const CheckedCheckbox: React.FC = () => {
  return (
    <StyledCheckedCheckbox>
      <img src={checkboxIcon} alt={checkboxIcon} width={40} height={40} />
    </StyledCheckedCheckbox>
  );
};

const CheckboxesContainer: React.FC = () => {
  const checkboxes = useAppSelector(checkboxesSelector);

  return (
    <StyledCheckboxesContainer>
      {checkboxes.map((checkbox, index) => {
        return checkbox ? (
          <CheckedCheckbox key={`checkboxItem${index}`} />
        ) : (
          <EmptyCheckbox key={`checkboxItem${index}`} />
        );
      })}
    </StyledCheckboxesContainer>
  );
};

const LevelContainer: React.FC = () => {
  const levelAnswer = useAppSelector(levelSelector);

  return (
    <StyledLevelsContainer>
      {BOOK_LINKS.map((link, index) => {
        const name = `book${index + 1}`;

        return index < levelAnswer ? (
          <Level key={name} className={name}>
            <img src={link} alt={link} width={115} height={140} />
          </Level>
        ) : null;
      })}
    </StyledLevelsContainer>
  );
};

export const SprintGame: React.FC = () => {
  const {
    changeTotalScore,
    upLevelForRightAnswer,
    upCurrentWordIndex,
    setCurrentWord,
    setCurrentTranslate
  } = sprintGameActions;

  const dispatch = useAppDispatch();

  //устанавливаем первоначальные значения
  const currentWord: Word | undefined = useAppSelector(wordSelector);

  //получаем данные из state
  const totalScore = useAppSelector(totalScoreSelector);
  const scorePerLevel = useAppSelector(scorePerLevelSelector);
  const level = useAppSelector(levelSelector);
  const word = useAppSelector(currentWordSelector);
  const translate = useAppSelector(currentTranslateSelector);

  useEffect(() => {
    if (currentWord) {
      console.log(currentWord);
      dispatch(setCurrentWord(currentWord.word));
      dispatch(setCurrentTranslate(currentWord.wordTranslate));
    }
  }, [currentWord]);

  //логика игры при нажатии на ответ
  const sprintGameHandler = () => {
    dispatch(changeTotalScore());
    dispatch(upLevelForRightAnswer());
    dispatch(upCurrentWordIndex());
  };

  return (
    <SprintGameContainer>
      <GameScore>{totalScore}</GameScore>
      <BlockGame>
        <GameHeader style={{ backgroundColor: HEADER_BG_COLOR[level - 1] }}>
          <CheckboxesContainer />
          <ScorePerAnswer>+{scorePerLevel} очков за слово</ScorePerAnswer>
        </GameHeader>
        <LevelContainer />
        <Shelf />
        <WordText>{word}</WordText>
        <Translation>{translate}</Translation>
        <AnswersButtonsContainer>
          <AnswerButton className="wrong" onClick={sprintGameHandler}>
            НЕВЕРНО
          </AnswerButton>
          <AnswerButton className="right" onClick={sprintGameHandler}>
            ВЕРНО
          </AnswerButton>
        </AnswersButtonsContainer>
        <ArrowsContainer>
          <Arrow>
            <img src={arrowLeft} alt={arrowLeft} width={110} height={50} />
          </Arrow>
          <Arrow>
            <img src={arrowRight} alt={arrowRight} width={110} height={50} />
          </Arrow>
        </ArrowsContainer>
      </BlockGame>
      <GameTimer>60</GameTimer>
    </SprintGameContainer>
  );
};
