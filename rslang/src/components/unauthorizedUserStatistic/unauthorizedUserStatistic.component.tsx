import React from 'react';
import { AnswerText, AnswerTextError, BlockAnswer } from './style';

export const UnauthorizedUserStatistic: React.FC = () => (
  <BlockAnswer>
    <AnswerText>404</AnswerText>
    <AnswerTextError>NOT FOUND</AnswerTextError>
  </BlockAnswer>
);
