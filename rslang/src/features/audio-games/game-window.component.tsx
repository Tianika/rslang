import React, { useEffect, useState } from 'react';
import { BlockGame, ButtonAudio } from './styles';

import BlockButton from './block-buttom.component';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { errorAnswersSelector, rightAnswersSelector, wordsSelector } from './audio-call.selectors';
import { fetchAudioAction } from './audio-call.saga';
import { audioGameActions } from './audio-call.slice';
import { ResultGamePage } from '../result-game';

const { addRightAnswers, addErrorAnswers, resetAnswerArrays } = audioGameActions;
const GameWindow = (props: { level: number }): React.ReactElement => {
  const dispatch = useAppDispatch();
  const words = useAppSelector(wordsSelector);
  const rightAnswersArr = useAppSelector(rightAnswersSelector);
  const errorAnswersArr = useAppSelector(errorAnswersSelector);
  const [currentWordIndex, setCurrentWordIndex] = useState(-1);
  const [currentAudio, setCurrentAudio] = useState('');
  const [englishWord, setEnglishWord] = useState('');
  const [currentWord, setCurrentWord] = useState('');
  const [count, setCount] = useState(0);
  const [IdCurrentWord, setIdCurrentWord] = useState('');
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
  // TODO поменять слово
  const changeCurrentWord = () => {
    const word = words[currentWordIndex];
    if (word) {
      setEnglishWord(word.word);
      setCurrentAudio(word.audio);
      setCurrentWord(word.wordTranslate);
      setIdCurrentWord(word.id);
    }
  };
  if (count === 20) {
    return <ResultGamePage errorAnswers={errorAnswersArr} rightAnswers={rightAnswersArr} />;
  }
  const answerArray = [
    currentWord,
    'не правильный',
    'не правильный',
    'не правильный',
    'не правильный'
  ];
  return (
    <BlockGame>
      <ButtonAudio
        onClick={() => {
          new Audio(`https://learnwords-team17.herokuapp.com/${currentAudio}`).play();
          return false;
        }}
      />

      <BlockButton
        arrayAnswer={answerArray}
        rightWord={currentWord}
        countChoice={setCount}
        function={changeCurrentWord}
        count={count}
        functionWorn={upCurrentWordIndex}
      />
    </BlockGame>
  );
};

export default GameWindow;
