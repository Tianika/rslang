import { BlockButtonAnswer, InitialStateButtonAnswer } from './styles';

import React from 'react';

const BlockButton = (): React.ReactElement => {
  return (
    <BlockButtonAnswer>
      <InitialStateButtonAnswer>Вариант 1</InitialStateButtonAnswer>
      <InitialStateButtonAnswer>Вариант 1</InitialStateButtonAnswer>
      <InitialStateButtonAnswer>Вариант 1</InitialStateButtonAnswer>
      <InitialStateButtonAnswer>Вариант 1</InitialStateButtonAnswer>
      <InitialStateButtonAnswer>Вариант 1</InitialStateButtonAnswer>
      <InitialStateButtonAnswer>{'---->'}</InitialStateButtonAnswer>
    </BlockButtonAnswer>
  );
};

export default BlockButton;
