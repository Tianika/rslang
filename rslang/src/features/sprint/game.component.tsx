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
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import {
  errorAnswersSelector,
  loadingStatus,
  rightAnswersSelector,
  wordsSelector
} from './sprint.selectors';
import {
  ARROWS,
  BOOK_LINKS,
  BorderColors,
  GAME_TIME,
  HEADER_BG_COLOR,
  KeyTypes,
  MAX_LEVEL_CHECKBOXES,
  MAX_LEVEL_SCORE,
  MAX_SCORE_PER_WORD
} from './constants';
import { GameTypes, LoadingState } from '../../utils';
import { fetchSprintAction } from './sprint.saga';
import { LoadingPage } from '../../components/loading';
import { sprintGameActions } from './sprint.slice';
import { ResultGamePage } from '../result-game';
import { getRandomNumber } from './utils';

const { addRightAnswers, addErrorAnswers, resetAnswerArrays } = sprintGameActions;

export const SprintGame = (props: { level: number }): React.ReactElement => {
  const dispatch = useAppDispatch();

  const [totalScore, setTotalScore] = useState(0);
  const [scorePerWord, setScorePerWord] = useState(10);
  const [levelAnswer, setLevelAnswer] = useState(1);
  const [checkboxesLevel, setCheckboxesLevel] = useState(0);
  const [isRight, setIsRight] = useState(true);
  const [currentWordIndex, setCurrentWordIndex] = useState(-1);
  const [checkboxes, setCheckboxes] = useState([false, false, false]);
  const [currentWord, setCurrentWord] = useState('');
  const [currentTranslate, setCurrentTranslate] = useState('');
  const [borderColor, setBorderColor] = useState('');
  const [isDisableButton, setIsDisableButton] = useState(false);
  const [isDisableKeydown, setIsDisableKeydown] = useState(false);
  const [longestSeries, setLongestSeries] = useState(0);
  const [currentLongestSeries, setCurrentLongestSeries] = useState(0);

  //получаем слова
  const words = useAppSelector(wordsSelector);
  const rightAnswersArr = useAppSelector(rightAnswersSelector);
  const errorAnswersArr = useAppSelector(errorAnswersSelector);

  //при включении игры
  useEffect(() => {
    dispatch(resetAnswerArrays());
    setTimeout(() => {
      dispatch(fetchSprintAction(props.level));
      setCurrentWordIndex(0);
    });
  }, []);

  useEffect(() => {
    const word = words[0];

    if (word) {
      setCurrentWord(word.word);
      setCurrentTranslate(word.wordTranslate);
    }
  }, [words]);

  //откл кнопки при ответе
  const disableButton = () => {
    setIsDisableButton(true);
  };

  //откл отслеживание событий клавиатуры при ответе
  const disableKeydown = () => {
    setIsDisableKeydown(true);
  };

  //вкл кнопки
  const enableButton = () => {
    setIsDisableButton(false);
  };

  //откл отслеживание событий клавиатуры при ответе
  const enableKeydown = () => {
    setIsDisableKeydown(false);
  };

  //увеличить общее кол-во очков
  const changeTotalScore = () => {
    setTotalScore(totalScore + scorePerWord);
  };

  //повысить уровень при правильном ответе
  const upLevelForRightAnswer = () => {
    if (levelAnswer < MAX_LEVEL_SCORE) {
      if (checkboxesLevel < MAX_LEVEL_CHECKBOXES) {
        setCheckboxesLevel(checkboxesLevel + 1);

        const copyCheckboxes = checkboxes.map((checkbox, index) => index <= checkboxesLevel);
        setCheckboxes(copyCheckboxes);
      } else {
        setCheckboxesLevel(0);
        setLevelAnswer(levelAnswer + 1);
        setCheckboxes([false, false, false]);

        if (scorePerWord < MAX_SCORE_PER_WORD) {
          setScorePerWord(scorePerWord * 2);
        }
      }
    }
  };

  //изменить индекс
  const upCurrentWordIndex = () => {
    setCurrentWordIndex(currentWordIndex + 1);
  };

  //сброс уровня при неправильном ответе
  const resetSprintGameLevel = () => {
    setCheckboxesLevel(0);
    setLevelAnswer(1);
    setScorePerWord(10);
    setCheckboxes([false, false, false]);
  };

  //перевод
  const getTranslate = () => {
    const isRightTranslate = Math.random() >= 0.5;
    setIsRight(isRightTranslate);

    if (isRightTranslate) {
      const word = words[currentWordIndex];

      if (word) {
        setCurrentTranslate(word.wordTranslate);
      }
    } else {
      let random;
      const max = words.length - 1;

      do {
        random = getRandomNumber(max);
      } while (random === currentWordIndex);

      const word = words[random];
      if (word) {
        setCurrentTranslate(word.wordTranslate);
      }
    }
  };

  //поменять слово
  const changeCurrentWord = () => {
    const word = words[currentWordIndex];

    if (word) {
      setCurrentWord(word.word);
    }

    setTimeout(() => {
      setBorderColor('');
    }, 100);
  };

  //логика общее
  const changeAnswer = () => {
    changeCurrentWord();
    getTranslate();
    enableButton();
    enableKeydown();
  };

  //логика игры при нажатии на правильный ответ
  const sprintGameRightAnswerHandler = () => {
    setBorderColor(BorderColors.Green);
    disableButton();
    disableKeydown();

    const word = words[currentWordIndex];
    dispatch(addRightAnswers(word));

    changeTotalScore();
    upLevelForRightAnswer();

    setCurrentLongestSeries(currentLongestSeries + 1);

    upCurrentWordIndex();
  };

  //логика игры при нажатии на неверный ответ
  const sprintGameErrorAnswerHandler = () => {
    setBorderColor(BorderColors.Red);
    disableButton();
    disableKeydown();

    const word = words[currentWordIndex];
    dispatch(addErrorAnswers(word));

    resetSprintGameLevel();

    if (currentLongestSeries > longestSeries) {
      setLongestSeries(currentLongestSeries);
    }
    setCurrentLongestSeries(0);

    upCurrentWordIndex();
  };

  useEffect(() => {
    setTimeout(() => {
      changeAnswer();
    }, 500);
  }, [currentWordIndex, words]);

  //конец игры
  const [isEndGame, setIsEndGame] = useState(false);
  const enableIsEndGame = () => {
    setIsEndGame(true);
  };

  //таймер
  const [timer, setTimer] = useState(GAME_TIME);

  useEffect(() => {
    if (timer === 0) {
      enableIsEndGame();
      return;
    }

    const timerFunction = setInterval(() => {
      setTimer((time) => {
        return time - 1;
      });
    }, 1000);

    return () => clearInterval(timerFunction);
  }, [timer]);

  const ANSWER_BUTTONS = [
    {
      className: 'wrong',
      content: 'НЕВЕРНО',
      handler: isRight ? sprintGameErrorAnswerHandler : sprintGameRightAnswerHandler
    },
    {
      className: 'right',
      content: 'ВЕРНО',
      handler: isRight ? sprintGameRightAnswerHandler : sprintGameErrorAnswerHandler
    }
  ];

  //управление ответами с клавиатуры
  document.body.onkeydown = (event: KeyboardEvent) => {
    if (!isDisableButton && !isDisableKeydown) {
      if (isRight) {
        if (event.key === KeyTypes.ArrowLeft) {
          sprintGameErrorAnswerHandler();
        }
        if (event.key === KeyTypes.ArrowRight) {
          sprintGameRightAnswerHandler();
        }
      } else {
        if (event.key === KeyTypes.ArrowLeft) {
          sprintGameRightAnswerHandler();
        }
        if (event.key === KeyTypes.ArrowRight) {
          sprintGameErrorAnswerHandler();
        }
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

  //пока не догрузились данные страница Loading
  if (isLoading) return <LoadingPage />;

  //конец игры
  if (isEndGame) {
    return (
      <ResultGamePage
        score={totalScore}
        rightAnswers={rightAnswersArr}
        errorAnswers={errorAnswersArr}
        gameType={GameTypes.Sprint}
        longestSeries={longestSeries}
      />
    );
  }

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
        {levelAnswer === 4 ? (
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

          return index < levelAnswer ? (
            <Level key={name} className={name}>
              <img src={link} alt={link} width={115} height={140} />
            </Level>
          ) : null;
        })}
      </StyledLevelsContainer>
    );
  };

  return (
    <SprintGameContainer>
      <GameScore>{totalScore}</GameScore>
      <BlockGame className={borderColor}>
        <GameHeader style={{ backgroundColor: HEADER_BG_COLOR[levelAnswer - 1] }}>
          <CheckboxesContainer />
          <ScorePerAnswer>+{scorePerWord} очков за слово</ScorePerAnswer>
        </GameHeader>
        <LevelContainer />
        <Shelf />
        <WordText>{currentWord}</WordText>
        <Translation>{currentTranslate}</Translation>
        <AnswersButtonsContainer>
          {ANSWER_BUTTONS.map((button) => (
            <AnswerButton
              key={button.content}
              className={button.className}
              disabled={isDisableButton}
              onClick={() => button.handler()}
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
