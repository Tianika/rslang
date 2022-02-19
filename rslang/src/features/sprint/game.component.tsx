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
import { ARROWS, BOOK_LINKS, HEADER_BG_COLOR } from './constants';
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

  //получаем слова

  const words = useAppSelector(wordsSelector);
  const rightAnswersArr = useAppSelector(rightAnswersSelector);
  const errorAnswersArr = useAppSelector(errorAnswersSelector);

  //при включении игры
  useEffect(() => {
    dispatch(fetchSprintAction(props.level));
    dispatch(resetAnswerArrays());
    setCurrentWordIndex(0);
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
    if (levelAnswer < 4) {
      if (checkboxesLevel < 3) {
        setCheckboxesLevel(checkboxesLevel + 1);

        const copyCheckboxes = checkboxes.map((checkbox, index) => index <= checkboxesLevel);
        setCheckboxes(copyCheckboxes);
      } else {
        setCheckboxesLevel(0);
        setLevelAnswer(levelAnswer + 1);
        setCheckboxes([false, false, false]);

        if (scorePerWord < 80) {
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

      do {
        random = getRandomNumber(79);
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
    setBorderColor('green');
    disableButton();
    disableKeydown();

    const word = words[currentWordIndex];
    dispatch(addRightAnswers(word));

    changeTotalScore();
    upLevelForRightAnswer();

    upCurrentWordIndex();
  };

  //логика игры при нажатии на неверный ответ
  const sprintGameErrorAnswerHandler = () => {
    setBorderColor('red');
    disableButton();
    disableKeydown();

    const word = words[currentWordIndex];
    dispatch(addErrorAnswers(word));

    resetSprintGameLevel();

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
  const [timer, setTimer] = useState(60);

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
