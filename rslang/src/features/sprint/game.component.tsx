import React from 'react';

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
        <img src={book1} alt={book1} width={115} height={160} />
      </Level>
      <Level className="book2">
        <img src={book2} alt={book2} width={115} height={160} />
      </Level>
      <Level className="book3">
        <img src={book3} alt={book3} width={115} height={160} />
      </Level>
      <Level className="book4">
        <img src={book4} alt={book4} width={115} height={160} />
      </Level>
    </StyledLevelsContainer>
  );
};

export const SprintGame: React.FC = () => {
  return (
    <SprintGameContainer>
      <GameScore>0</GameScore>
      <BlockGame>
        <GameHeader>
          <CheckboxesContainer>
            <CheckedCheckbox />
            <EmptyCheckbox />
            <EmptyCheckbox />
          </CheckboxesContainer>
          <ScorePerAnswer>+10 очков за слово</ScorePerAnswer>
        </GameHeader>
        <LevelContainer />
        <Word>Слово</Word>
        <Translation>Перевод</Translation>
        <AnswersButtonsContainer>
          <AnswerButton className="wrong">НЕВЕРНО</AnswerButton>
          <AnswerButton className="right">ВЕРНО</AnswerButton>
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
