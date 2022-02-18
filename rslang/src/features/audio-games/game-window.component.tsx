import React, { useEffect, useState } from 'react';
import { BlockGame, ButtonAudio } from './styles';
import BlockIndicator from './block-indicator.component';
import audioButton from '../../assets/svg/audioButton.svg';
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
  const [checkboxes, setCheckboxes] = useState([false, false, false]);
  const [currentWord, setCurrentWord] = useState('');
  const [currentTranslate, setCurrentTranslate] = useState('');
  console.log(words);
  console.log(rightAnswersArr);
  console.log(errorAnswersArr);
  useEffect(() => {
    dispatch(fetchAudioAction(props.level));
    dispatch(resetAnswerArrays());
    setCurrentWordIndex(0);
  }, []);

  useEffect(() => {
    const word = words[0];
    console.log(word);
    if (word) {
      setCurrentWord(word.word);
      setCurrentTranslate(word.wordTranslate);
    }
  }, [words]);

  return (
    <BlockGame>
      <BlockIndicator />
      <ButtonAudio src={audioButton} />
      <BlockButton />
    </BlockGame>
  );
};

export default GameWindow;
