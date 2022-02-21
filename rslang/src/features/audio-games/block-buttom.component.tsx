import { BlockButtonAnswer, InitialStateButtonAnswer, StyledButton } from './styles';
import React, { useState } from 'react';
import { ButtonProps } from './types';
import { getRandomNumber, shuffleArray } from './utils';
import { VALUEBUTTONNEXT, VALUEBUTTONNOSAVVY, VALUENEXT, VALUENEXTWORD } from './constants';

const BlockButton: React.FC<ButtonProps> = ({
  updateCurrentLongestSeries,
  fakeArray,
  showAnswer,
  hideAnswer,
  rightWord,
  countChoice,
  changeCurrentWord,
  setArrayWordRightId,
  idCurrentWord,
  count,
  upCurrentWordIndex,
  audioGameErrorAnswerHandler,
  audioGameRightAnswerHandler,
  updateFakeWords
}): React.ReactElement => {
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(false);
  const [clickedButtonIndex, setClickedButtonIndex] = useState(-1);
  const [disable, setDisable] = useState(false);

  const responseCheck = (event: EventTarget) => {
    switch ((event as HTMLButtonElement).value) {
      case VALUENEXT:
        setClickedButtonIndex(-1);
        changeCurrentWord();
        upCurrentWordIndex();
        audioGameErrorAnswerHandler();
        showAnswer(false);
        updateFakeWords();
        setTimeout(() => {
          showAnswer(true);
        }, 1000);
        break;
      case rightWord:
        setDisable(true);
        audioGameRightAnswerHandler();
        updateCurrentLongestSeries();
        showAnswer(false);
        break;
      case VALUENEXTWORD:
        setClickedButtonIndex(-1);
        changeCurrentWord();
        upCurrentWordIndex();
        updateFakeWords();
        setDisable(false);
        showAnswer(true);
        break;
      default:
        setDisable(true);
        audioGameErrorAnswerHandler();
        updateCurrentLongestSeries(0);
        showAnswer(false);

        break;
    }
  };
  return (
    <BlockButtonAnswer>
      {fakeArray.map((el: any, index: number) => {
        return (
          <StyledButton
            disabled={disable}
            key={index}
            value={el}
            id={idCurrentWord}
            clickedButton={index === clickedButtonIndex}
            isAnswerCorrect={isAnswerCorrect}
            onClick={(event: any) => {
              setClickedButtonIndex(index);
              setIsAnswerCorrect(el === rightWord);
              responseCheck(event.target);
              countChoice(count + 1);
            }}
          >
            {el}
          </StyledButton>
        );
      })}
      <InitialStateButtonAnswer
        value={clickedButtonIndex > -1 ? VALUENEXTWORD : VALUENEXT}
        onClick={(event) => {
          responseCheck(event.target);
        }}
      >
        {clickedButtonIndex > -1 ? VALUEBUTTONNEXT : VALUEBUTTONNOSAVVY}
      </InitialStateButtonAnswer>
    </BlockButtonAnswer>
  );
};

export default BlockButton;
