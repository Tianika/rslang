import React, { useEffect, useState } from 'react';
import {
  BlockGame,
  ButtonAudio,
  ButtonAudioMini,
  ImageWindowAnswer,
  WindowAnswer,
  WindowAnswerWord,
  WindowAnswerWordBlock
} from './styles';
import BlockButton from './block-buttom.component';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import {
  errorAnswersSelector,
  fakeWordsSelector,
  rightAnswersSelector,
  wordsSelector
} from './audio-call.selectors';
import { fetchAudioAction } from './audio-call.saga';
import { audioGameActions } from './audio-call.slice';
import { ResultGamePage } from '../result-game';
import { GameTypes, LoadingState } from '../../utils';
import { LoadingPage } from '../../components/loading';
import { loadingStatus } from './audio-call.selectors';
import { getRandomNumber, shuffleArray } from './utils';

const { addRightAnswers, addErrorAnswers, resetAnswerArrays } = audioGameActions;
const GameWindow = (props: { level: number }): React.ReactElement => {
  const status = useAppSelector(loadingStatus);
  const urlQuery = 'https://learnwords-team17.herokuapp.com/';
  const dispatch = useAppDispatch();
  const words = useAppSelector(wordsSelector);
  const fakeWords = useAppSelector(fakeWordsSelector);
  const rightAnswersArr = useAppSelector(rightAnswersSelector);
  const errorAnswersArr = useAppSelector(errorAnswersSelector);
  const [currentWordIndex, setCurrentWordIndex] = useState(-1);
  const [currentAudio, setCurrentAudio] = useState('');
  const [englishWord, setEnglishWord] = useState('');
  const [currentWord, setCurrentWord] = useState('');
  const [currentImage, setCurrentImage] = useState('');
  const [count, setCount] = useState(0);
  const [idCurrentWord, setIdCurrentWord] = useState('');
  const [longestSeries, setLongestSeries] = useState(0);
  const [currentLongestSeries, setCurrentLongestSeries] = useState(0);
  const [getAnswerButtonClick, setGetAnswerButtonClick] = useState(true);
  const arrayWordRightId = [];
  const [isLoading, setIsLoading] = useState(true);
  const [fakeWordsSection, setFakeWordsSection] = useState<string[]>([]);

  // eslint-disable-next-line @typescript-eslint/no-shadow
  const getWordsSectionArray = (currentWord: string) => {
    return shuffleArray([
      currentWord,
      fakeWords[getRandomNumber(80)]?.wordTranslate,
      fakeWords[getRandomNumber(80)]?.wordTranslate,
      fakeWords[getRandomNumber(80)]?.wordTranslate,
      fakeWords[getRandomNumber(80)]?.wordTranslate
    ]);
  };

  const disableIsLoading = () => {
    setIsLoading(false);
  };

  const soundPlay = (wordAudio: string) => {
    new Audio(`${urlQuery}${wordAudio}`).play();
    return false;
  };

  useEffect(() => {
    const word = words[0];
    if (word && !englishWord) {
      setEnglishWord(word.word);
      setCurrentAudio(word.audio);
      setCurrentWord(word.wordTranslate);
      setIdCurrentWord(word.id);
      setCurrentImage(urlQuery + word.image);
      disableIsLoading();
      soundPlay(word.audio);
    }
    return () => {};
  }, [words]);

  useEffect(() => {
    if (!fakeWordsSection.length && fakeWords.length && currentWord) {
      setFakeWordsSection(getWordsSectionArray(currentWord));
    }
  }, [fakeWords, fakeWordsSection.length]);

  console.log(fakeWordsSection);

  useEffect(() => {
    if (status === LoadingState.Success) {
      disableIsLoading();
    }
  }, [status]);

  //пока не догрузились данные страница Loading
  useEffect(() => {
    dispatch(fetchAudioAction(props.level));
    dispatch(resetAnswerArrays());
    setCurrentWordIndex(0);
  }, []);

  if (isLoading) return <LoadingPage />;
  const upCurrentWordIndex = () => {
    setCurrentWordIndex(currentWordIndex + 1);
  };

  console.log(words, currentWordIndex, currentWord);
  const changeCurrentWord = () => {
    const word = words[currentWordIndex + 1];
    if (word) {
      setEnglishWord(word.word);
      setCurrentAudio(word.audio);
      setCurrentWord(word.wordTranslate);
      setIdCurrentWord(word.id);
      setCurrentImage(urlQuery + word.image);
      soundPlay(word.audio);
    }
  };
  if (currentWordIndex === 20) {
    return (
      <ResultGamePage
        rightAnswers={rightAnswersArr}
        errorAnswers={errorAnswersArr}
        gameType={GameTypes.AudioCall}
        longestSeries={longestSeries}
      />
    );
  }
  //логика игры при нажатии на правильный ответ
  const audioGameRightAnswerHandler = () => {
    const word = words[currentWordIndex];
    dispatch(addRightAnswers(word));
    setCurrentLongestSeries(currentLongestSeries + 1);
    if (currentLongestSeries > longestSeries) {
      setLongestSeries(currentLongestSeries);
    }
  };

  //логика игры при нажатии на неверный ответ
  const audioGameErrorAnswerHandler = () => {
    const word = words[currentWordIndex];
    dispatch(addErrorAnswers(word));
    if (currentLongestSeries > longestSeries) {
      setLongestSeries(currentLongestSeries);
    }
    setCurrentLongestSeries(0);
  };
  const addRightWordIdArray = () => {
    arrayWordRightId.push(idCurrentWord);
  };

  return (
    <BlockGame>
      <ButtonAudio
        visible={getAnswerButtonClick}
        onClick={() => {
          new Audio(`${urlQuery}${currentAudio}`).play();
          return false;
        }}
      />
      <WindowAnswer visible={getAnswerButtonClick}>
        <ImageWindowAnswer linkImage={currentImage} />
        <WindowAnswerWordBlock>
          <ButtonAudioMini
            onClick={() => {
              new Audio(`${urlQuery}${currentAudio}`).play();
              return false;
            }}
          />
          <WindowAnswerWord>
            {englishWord} [ {currentWord} ]
          </WindowAnswerWord>
        </WindowAnswerWordBlock>
      </WindowAnswer>

      <BlockButton
        fakeArray={fakeWordsSection}
        showAnswer={setGetAnswerButtonClick}
        hideAnswer={setGetAnswerButtonClick}
        rightWord={currentWord}
        countChoice={setCount}
        changeCurrentWord={changeCurrentWord}
        setArrayWordRightId={addRightWordIdArray}
        idCurrentWord={idCurrentWord}
        count={count}
        updateFakeWords={() => {
          const word = words[currentWordIndex + 1]?.wordTranslate as string;
          setFakeWordsSection(getWordsSectionArray(word));
        }}
        upCurrentWordIndex={upCurrentWordIndex}
        audioGameErrorAnswerHandler={audioGameErrorAnswerHandler}
        audioGameRightAnswerHandler={audioGameRightAnswerHandler}
      />
    </BlockGame>
  );
};

export default GameWindow;
