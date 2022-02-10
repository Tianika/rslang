import React, { useState } from 'react';

import {
  AnswerButton,
  AnswersButtonsContainer,
  Arrow,
  ArrowsContainer,
  BlockGame,
  CheckboxesContainer,
  EmptyCheckbox,
  GameHeader,
  GameScore,
  GameTimer,
  Level,
  ScorePerAnswer,
  Shelf,
  SprintGameContainer,
  StyledCheckedCheckbox,
  StyledLevelsContainer,
  Translation,
  Word
} from './styles';

import checkboxIcon from '../../assets/svg/checked-word-sprint.svg';
import book1 from '../../assets/svg/book1.svg';
import book2 from '../../assets/svg/book2.svg';
import book3 from '../../assets/svg/book3.svg';
import book4 from '../../assets/svg/book4.svg';
import arrowLeft from '../../assets/svg/arrow-left.svg';
import arrowRight from '../../assets/svg/arrow-right.svg';
import { sprintGameActions } from './game.slice';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { getLevel, getScore, getScorePerLevel } from './sprint.selectors';

const CheckedCheckbox: React.FC = () => {
  return (
    <StyledCheckedCheckbox>
      <img src={checkboxIcon} alt={checkboxIcon} width={40} height={40} />
    </StyledCheckedCheckbox>
  );
};

const LevelContainer: React.FC = () => {
  return (
    <StyledLevelsContainer>
      <Level className="book1">
        <img src={book1} alt={book1} width={125} height={160} />
      </Level>
      <Level className="book2">
        <img src={book2} alt={book2} width={125} height={160} />
      </Level>
      <Level className="book3">
        <img src={book3} alt={book3} width={125} height={160} />
      </Level>
      <Level className="book4">
        <img src={book4} alt={book4} width={125} height={160} />
      </Level>
    </StyledLevelsContainer>
  );
};

export const SprintGame: React.FC = () => {
  const { changeTotalScore } = sprintGameActions;

  const dispatch = useAppDispatch();

  //получаем данные из state
  const totalScore = useAppSelector(getScore);
  const scorePerLevel = useAppSelector(getScorePerLevel);
  const levelGame = useAppSelector(getLevel);

  //логика игры при нажатии на ответ
  const sprintGameHandler = () => {
    dispatch(changeTotalScore());
  };

  return (
    <SprintGameContainer>
      <GameScore>{totalScore}</GameScore>
      <BlockGame>
        <GameHeader>
          <CheckboxesContainer>
            <CheckedCheckbox />
            <EmptyCheckbox />
            <EmptyCheckbox />
          </CheckboxesContainer>
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
