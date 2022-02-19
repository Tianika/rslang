import { BlockButtonAnswer, InitialStateButtonAnswer, WrongButtonAnswer } from './styles';
import { ShuffleArray } from './utils';
import { StyledButton } from './styles';
import React, { useState } from 'react';

const BlockButton = (props: {
  arrayAnswer: string[];
  rightWord: string;
  countChoice: any;
  function: any;
  count: number;
  functionWorn: any;
}): React.ReactElement => {
  const array = ShuffleArray(props.arrayAnswer);
  const [isAnswerChosen, setIsAnswerChosen] = useState(false);
  return (
    <BlockButtonAnswer>
      {array.map((el, index) => {
        return (
          <StyledButton
            key={index}
            value={el}
            correct={el === props.rightWord}
            isAnswerChosen={isAnswerChosen}
            onClick={() => {
              setIsAnswerChosen(true);
              props.countChoice(props.count + 1);
            }}
          >
            {el}
          </StyledButton>
        );
      })}
      <InitialStateButtonAnswer
        value="next"
        onClick={() => {
          props.function();
          props.functionWorn();
        }}
      >
        {'не знаю'}
      </InitialStateButtonAnswer>
    </BlockButtonAnswer>
  );
};

export default BlockButton;
