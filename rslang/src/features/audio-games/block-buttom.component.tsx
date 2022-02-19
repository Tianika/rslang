import { BlockButtonAnswer, InitialStateButtonAnswer } from './styles';
import { ShuffleArray } from './utils';

import React from 'react';

const BlockButton = (props: { arrayAnswer: string[] }): React.ReactElement => {
  const array = ShuffleArray(props.arrayAnswer);
  return (
    <BlockButtonAnswer
      onClick={(event) => {
        console.log(event.target);
      }}
    >
      {array.map((el, index) => {
        return <InitialStateButtonAnswer key={index}>{el}</InitialStateButtonAnswer>;
      })}
      <InitialStateButtonAnswer>{'не знаю'}</InitialStateButtonAnswer>
    </BlockButtonAnswer>
  );
};

export default BlockButton;
