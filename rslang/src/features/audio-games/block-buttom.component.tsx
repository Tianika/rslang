import { BlockButtonAnswer, InitialStateButtonAnswer, StyledButton } from './styles';
import React, { useState } from 'react';
import { ButtonProps } from './types';
import { getRandomNumber, shuffleArray } from './utils';

const BlockButton: React.FC<ButtonProps> = ({
  fakeArray,
  rightWord,
  countChoice,
  changeCurrentWord,
  setArrayWordRightId,
  idCurrentWord,
  count,
  upCurrentWordIndex,
  audioGameErrorAnswerHandler,
  audioGameRightAnswerHandler
}): React.ReactElement => {
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(false);
  const [clickedButtonIndex, setClickedButtonIndex] = useState(-1);
  const [disable, setDisable] = useState(false);

  const arrayConfusedResponses = (fW: any[] | undefined): string[] | [] => {
    return fW !== undefined
      ? [
          fW[getRandomNumber(80)]?.wordTranslate,
          fW[getRandomNumber(80)]?.wordTranslate,
          fW[getRandomNumber(80)]?.wordTranslate,
          fW[getRandomNumber(80)]?.wordTranslate
        ]
      : [];
  };

  let answerArray: any[] = [];
  if (arrayConfusedResponses) {
    answerArray = [...arrayConfusedResponses(fakeArray), rightWord];
  }

  const responseCheck = (event: EventTarget) => {
    switch ((event as HTMLButtonElement).value) {
      case 'next':
        setClickedButtonIndex(-1);
        changeCurrentWord();
        audioGameErrorAnswerHandler();
        arrayConfusedResponses(fakeArray);
        break;
      case rightWord:
        setDisable(true);
        audioGameRightAnswerHandler();
        // setArrayWordRightId.push(idCurrentWord);
        break;
      case 'nextWord':
        setClickedButtonIndex(-1);
        changeCurrentWord();
        upCurrentWordIndex();
        setDisable(false);
        arrayConfusedResponses(fakeArray);
        break;
      default:
        setDisable(true);
        audioGameErrorAnswerHandler();
        break;
    }
  };
  console.log(rightWord);
  return (
    <BlockButtonAnswer>
      {shuffleArray(answerArray).map((el, index) => {
        return (
          <StyledButton
            disabled={disable}
            key={index}
            value={el}
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
        value={clickedButtonIndex > -1 ? 'nextWord' : 'next'}
        className="buttonNext"
        onClick={(event) => {
          responseCheck(event.target);
        }}
      >
        {clickedButtonIndex > -1 ? '→' : 'не знаю'}
      </InitialStateButtonAnswer>
    </BlockButtonAnswer>
  );
};

export default BlockButton;
