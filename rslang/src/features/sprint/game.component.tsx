import React, { useEffect, useState } from 'react';

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
import { sprintGameActions } from './game.slice';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import {
  checkboxesSelector,
  currentWordSelector,
  wordSelector,
  levelSelector,
  scorePerLevelSelector,
  totalScoreSelector,
  currentTranslateSelector,
  isRightTranslateSelector
} from './sprint.selectors';
import { ARROWS, BOOK_LINKS, HEADER_BG_COLOR } from './constants';
import { Word } from './types';
import { sprintStartActions } from './sprint.slice';
import { LoadingState } from '../../utils';

const CheckedCheckbox: React.FC = () => {
  return (
    <StyledCheckedCheckbox>
      <img src={checkboxIcon} alt={checkboxIcon} width={40} height={40} />
    </StyledCheckedCheckbox>
  );
};

const CheckboxesContainer: React.FC = () => {
  const checkboxes = useAppSelector(checkboxesSelector);
  const level = useAppSelector(levelSelector);

  return (
    <StyledCheckboxesContainer>
      {level === 4 ? (
        <CheckedCheckbox />
      ) : (
        checkboxes.map((checkbox, index) => {
          return checkbox ? (
            <CheckedCheckbox key={`checkboxItem${index}`} />
          ) : (
            <EmptyCheckbox key={`checkboxItem${index}`} />
          );
        })
      )}
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
    setCurrentTranslate,
    changeIsRightTranslate,
    resetSprintGameLevel,
    resetSprintGame
  } = sprintGameActions;

  const dispatch = useAppDispatch();

  //устанавливаем первоначальные значения
  const currentWord: Word | undefined = useAppSelector(wordSelector);

  //получаем данные из state
  const totalScore = useAppSelector(totalScoreSelector);
  const scorePerLevel = useAppSelector(scorePerLevelSelector);
  const level = useAppSelector(levelSelector);
  const word = useAppSelector(currentWordSelector);
  const isRightTranslate = useAppSelector(isRightTranslateSelector);
  const translate = useAppSelector(currentTranslateSelector);

  const errorTranslate = 'error';

  useEffect(() => {
    if (currentWord) {
      console.log(currentWord);
      dispatch(setCurrentWord(currentWord.word));

      if (isRightTranslate) {
        dispatch(setCurrentTranslate(currentWord.wordTranslate));
      } else {
        dispatch(setCurrentTranslate(errorTranslate));
      }
    }
  }, [currentWord, dispatch, isRightTranslate, setCurrentTranslate, setCurrentWord]);

  //логика игры при нажатии на правильный ответ
  const sprintGameRightAnswerHandler = () => {
    dispatch(changeTotalScore());
    dispatch(upLevelForRightAnswer());
    dispatch(upCurrentWordIndex());
    dispatch(changeIsRightTranslate());
  };

  //логика игры при нажатии на неверный ответ
  const sprintGameErrorAnswerHandler = () => {
    dispatch(resetSprintGameLevel());
    dispatch(upCurrentWordIndex());
    dispatch(changeIsRightTranslate());
  };

  //таймер
  const [timer, setTimer] = useState(60);
  const { changeLoadingState, changeGameStatus } = sprintStartActions;

  useEffect(() => {
    if (timer === 0) {
      dispatch(changeGameStatus());
      dispatch(changeLoadingState(LoadingState.Initial));
      dispatch(resetSprintGameLevel());
      dispatch(resetSprintGame());
      return;
    }

    const timerFunction = setInterval(() => {
      setTimer((state) => (state = state - 1));
    }, 1000);

    return () => clearInterval(timerFunction);
  }, [timer]);

  const ANSWER_BUTTONS = [
    {
      className: 'wrong',
      content: 'НЕВЕРНО',
      handler: isRightTranslate ? sprintGameErrorAnswerHandler : sprintGameRightAnswerHandler
    },
    {
      className: 'right',
      content: 'ВЕРНО',
      handler: isRightTranslate ? sprintGameRightAnswerHandler : sprintGameErrorAnswerHandler
    }
  ];

  //управление ответами с клавиатуры
  document.body.onkeydown = (event) => {
    if (isRightTranslate) {
      if (event.keyCode == 37) {
        sprintGameErrorAnswerHandler();
      }
      if (event.keyCode == 39) {
        sprintGameRightAnswerHandler();
      }
    } else {
      if (event.keyCode == 37) {
        sprintGameRightAnswerHandler();
      }
      if (event.keyCode == 39) {
        sprintGameErrorAnswerHandler();
      }
    }
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
          {ANSWER_BUTTONS.map((button) => (
            <AnswerButton
              key={button.content}
              className={button.className}
              onClick={button.handler}
            >
              {button.content}
            </AnswerButton>
          ))}
        </AnswersButtonsContainer>
        <ArrowsContainer>
          {ARROWS.map((arrow) => (
            <Arrow key={arrow}>
              <img src={arrow} alt={arrow} width={110} height={50} />
            </Arrow>
          ))}
        </ArrowsContainer>
      </BlockGame>
      <GameTimer>{timer}</GameTimer>
    </SprintGameContainer>
  );
};
