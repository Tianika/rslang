import React, { useEffect, useState } from 'react';
import { BlockGame, ButtonAudio } from './styles';
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
import { getRandomNumber } from './utils';

const { addRightAnswers, addErrorAnswers, resetAnswerArrays } = audioGameActions;
const GameWindow = (props: { level: number }): React.ReactElement => {
  const dispatch = useAppDispatch();
  const words = useAppSelector(wordsSelector);
  const fakeWords = useAppSelector(fakeWordsSelector);
  const rightAnswersArr = useAppSelector(rightAnswersSelector);
  const errorAnswersArr = useAppSelector(errorAnswersSelector);
  const [currentWordIndex, setCurrentWordIndex] = useState(-1);
  const [currentAudio, setCurrentAudio] = useState('');
  const [englishWord, setEnglishWord] = useState('');
  const [currentWord, setCurrentWord] = useState('');
  const [count, setCount] = useState(0);
  const [idCurrentWord, setIdCurrentWord] = useState('');
  //const [isDisableButton, setIsDisableButton] = useState(false);
  //const [wrongArray, setWrongArray] = useState([]);
  //const [fakeArray, setFakeArray] = useState([]);
  const arrayWordRightId = [];

  useEffect(() => {
    dispatch(fetchAudioAction(props.level));
    dispatch(resetAnswerArrays());
    setCurrentWordIndex(0);
  }, []);

  useEffect(() => {
    const word = words[0];
    if (word) {
      setEnglishWord(word.word);
      setCurrentAudio(word.audio);
      setCurrentWord(word.wordTranslate);
      setIdCurrentWord(word.id);
    }
  }, [words]);

  const upCurrentWordIndex = () => {
    setCurrentWordIndex(currentWordIndex + 1);
  };
  const changeCurrentWord = () => {
    const word = words[currentWordIndex];
    if (word) {
      setEnglishWord(word.word);
      setCurrentAudio(word.audio);
      setCurrentWord(word.wordTranslate);
      setIdCurrentWord(word.id);
    }
  };
  if (currentWordIndex === 20) {
    console.log(currentWordIndex);
    return <ResultGamePage errorAnswers={errorAnswersArr} rightAnswers={rightAnswersArr} />;
  }
  //логика игры при нажатии на правильный ответ
  const audioGameRightAnswerHandler = () => {
    const word = words[currentWordIndex];
    dispatch(addRightAnswers(word));
  };

  //логика игры при нажатии на неверный ответ
  const audioGameErrorAnswerHandler = () => {
    const word = words[currentWordIndex];
    dispatch(addErrorAnswers(word));
  };
  const addRightWordIdArray = () => {
    arrayWordRightId.push(idCurrentWord);
  };

  return (
    <BlockGame>
      <ButtonAudio
        onClick={() => {
          new Audio(`https://learnwords-team17.herokuapp.com/${currentAudio}`).play();
          return false;
        }}
      />

      <BlockButton
        fakeArray={fakeWords}
        rightWord={currentWord}
        countChoice={setCount}
        changeCurrentWord={changeCurrentWord}
        setArrayWordRightId={addRightWordIdArray}
        idCurrentWord={idCurrentWord}
        count={count}
        upCurrentWordIndex={upCurrentWordIndex}
        audioGameErrorAnswerHandler={audioGameErrorAnswerHandler}
        audioGameRightAnswerHandler={audioGameRightAnswerHandler}
      />
    </BlockGame>
  );
};

export default GameWindow;
