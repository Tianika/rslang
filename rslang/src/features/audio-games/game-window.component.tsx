import React, { useEffect, useState } from 'react';
import { BlockGame, ButtonAudio } from './styles';

import BlockButton from './block-buttom.component';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import {
  errorAnswersSelector,
  loadingStatus,
  rightAnswersSelector,
  wordsSelector
} from './audio-call.selectors';
import { LoadingState } from '../../utils';
import { fetchAudioAction } from './audio-call.saga';
import { LoadingPage } from '../../components/loading';
import { audioGameActions } from './audio-call.slice';
import { ResultGamePage } from '../result-game';
import { getRandomNumber } from './utils';

const { addRightAnswers, addErrorAnswers, resetAnswerArrays } = audioGameActions;
const GameWindow = (props: { level: number }): React.ReactElement => {
  const dispatch = useAppDispatch();
  const words = useAppSelector(wordsSelector);
  const rightAnswersArr = useAppSelector(rightAnswersSelector);
  const errorAnswersArr = useAppSelector(errorAnswersSelector);
  const [currentWordIndex, setCurrentWordIndex] = useState(-1);
  const [currentAudio, setCurrentAudio] = useState('');
  const [currentWord, setCurrentWord] = useState('');
  const [currentTranslate, setCurrentTranslate] = useState('');
  useEffect(() => {
    dispatch(fetchAudioAction(props.level));
    dispatch(resetAnswerArrays());
    setCurrentWordIndex(0);
  }, []);

  useEffect(() => {
    const word = words[0];

    if (word) {
      setCurrentWord(word.word);
      setCurrentAudio(word.audio);
      setCurrentTranslate(word.wordTranslate);
    }
  }, [words]);
  const answerArray = [currentTranslate];
  return (
    <BlockGame>
      <ButtonAudio
        onClick={() => {
          new Audio(`https://learnwords-team17.herokuapp.com/${currentAudio}`).play();
          return false;
        }}
      />

      <BlockButton arrayAnswer={answerArray} />
    </BlockGame>
  );
};

export default GameWindow;
