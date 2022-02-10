import React, { useState } from 'react';

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
  Word
} from './styles';

import checkboxIcon from '../../assets/svg/checked-word-sprint.svg';
import arrowLeft from '../../assets/svg/arrow-left.svg';
import arrowRight from '../../assets/svg/arrow-right.svg';
import { sprintGameActions } from './game.slice';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import {
  getCheckboxes,
  getCheckboxesLevel,
  getLevel,
  getScore,
  getScorePerLevel
} from './sprint.selectors';
import { BOOK_LINKS, HEADER_BG_COLOR } from './constants';

const CheckedCheckbox: React.FC = () => {
  return (
    <StyledCheckedCheckbox>
      <img src={checkboxIcon} alt={checkboxIcon} width={40} height={40} />
    </StyledCheckedCheckbox>
  );
};

const CheckboxesContainer: React.FC = () => {
  const checkboxes = useAppSelector(getCheckboxes);

  return (
    <StyledCheckboxesContainer>
      {checkboxes.map((checkbox) => {
        return checkbox ? <CheckedCheckbox /> : <EmptyCheckbox />;
      })}
    </StyledCheckboxesContainer>
  );
};

const LevelContainer: React.FC = () => {
  const levelAnswer = useAppSelector(getLevel);

  return (
    <StyledLevelsContainer>
      {BOOK_LINKS.map((link, index) => {
        const name = `book${index + 1}`;

        return index < levelAnswer ? (
          <Level key={name} className={name}>
            <img src={link} alt={link} width={125} height={160} />
          </Level>
        ) : null;
      })}
    </StyledLevelsContainer>
  );
};

export const SprintGame: React.FC = () => {
  const { changeTotalScore, upCheckboxesLevel } = sprintGameActions;

  const dispatch = useAppDispatch();

  //получаем данные из state
  const totalScore = useAppSelector(getScore);
  const scorePerLevel = useAppSelector(getScorePerLevel);
  const level = useAppSelector(getLevel);

  //логика игры при нажатии на ответ
  const sprintGameHandler = () => {
    dispatch(changeTotalScore());
    dispatch(upCheckboxesLevel());
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
        <Word>Слово</Word>
        <Translation>Перевод</Translation>
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
