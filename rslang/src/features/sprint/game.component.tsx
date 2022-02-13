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
import { sprintGameActions } from './sprint.slice';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import {
  checkboxesSelector,
  currentWordSelector,
  wordSelector,
  levelSelector,
  scorePerLevelSelector,
  totalScoreSelector,
  currentTranslateSelector,
  isRightTranslateSelector,
  loadingStatus,
  currentIndex
} from './sprint.selectors';
import { ARROWS, BOOK_LINKS, HEADER_BG_COLOR } from './constants';
import { Word } from './types';
import { LoadingState } from '../../utils';
import { fetchSprintAction } from './sprint.saga';
import { LoadingPage } from '../../components/loading';

export const SprintGame = (props: { level: number }): React.ReactElement => {
  const {
    changeTotalScore,
    upLevelForRightAnswer,
    upCurrentWordIndex,
    setCurrentWord,
    setCurrentTranslate,
    changeIsRightTranslate,
    resetSprintGameLevel,
    resetSprintGame,
    resetWordIndex
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
  const checkboxes = useAppSelector(checkboxesSelector);
  const wordIndex = useAppSelector(currentIndex);

  const errorTranslate = 'error';

  //запрос слов
  useEffect(() => {
    console.log(props);
    dispatch(fetchSprintAction(props.level));
  }, []);

  // useEffect(() => {
  //   if (wordIndex === 19) {
  //     dispatch(fetchSprintAction(props.level));
  //     dispatch(resetWordIndex());
  //   }
  // }, [wordIndex]);

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
  }, [currentWord]);

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

  useEffect(() => {
    if (timer === 0) {
      // dispatch(changeGameStatus());
      // dispatch(changeLoadingState(LoadingState.Initial));
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
  document.body.onkeydown = (event: KeyboardEvent) => {
    if (isRightTranslate) {
      if (event.key === 'ArrowLeft') {
        sprintGameErrorAnswerHandler();
      }
      if (event.key === 'ArrowRight') {
        sprintGameRightAnswerHandler();
      }
    } else {
      if (event.key === 'ArrowLeft') {
        sprintGameRightAnswerHandler();
      }
      if (event.key === 'ArrowRight') {
        sprintGameErrorAnswerHandler();
      }
    }
  };

  //отслеживаем статус загрузки
  const status = useAppSelector(loadingStatus);

  const [isLoading, setIsLoading] = useState(true);
  const disableIsLoading = () => {
    setIsLoading(false);
  };

  useEffect(() => {
    if (status === LoadingState.Success) {
      disableIsLoading();
    }
  }, [status]);

  const CheckedCheckbox: React.FC = () => {
    return (
      <StyledCheckedCheckbox>
        <img src={checkboxIcon} alt={checkboxIcon} width={40} height={40} />
      </StyledCheckedCheckbox>
    );
  };

  const CheckboxesContainer: React.FC = () => {
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
    return (
      <StyledLevelsContainer>
        {BOOK_LINKS.map((link, index) => {
          const name = `book${index + 1}`;

          return index < level ? (
            <Level key={name} className={name}>
              <img src={link} alt={link} width={115} height={140} />
            </Level>
          ) : null;
        })}
      </StyledLevelsContainer>
    );
  };

  //пока не догрузились данные страница Loading
  if (isLoading) return <LoadingPage />;

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
