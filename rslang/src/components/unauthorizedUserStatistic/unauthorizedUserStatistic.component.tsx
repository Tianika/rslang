import React from 'react';
import { AnswerText, BlockAnswer, Rainbow, RainbowBlock } from './style';

export const UnauthorizedUserStatistic: React.FC = () => (
  <BlockAnswer>
    <AnswerText>Чтобы получить статистику, зарегайся!</AnswerText>
    <RainbowBlock>
      <Rainbow />
      <Rainbow />
      <Rainbow />
      <Rainbow />
      <Rainbow />
      <Rainbow />
      <Rainbow />
      <Rainbow />
    </RainbowBlock>
  </BlockAnswer>
);
