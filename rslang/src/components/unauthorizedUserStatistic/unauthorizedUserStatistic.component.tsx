import React from 'react';
import { AnswerText, AnswerTextError, BlockAnswer, TextDescription } from './style';

export const UnauthorizedUserStatistic: React.FC = () => (
  <BlockAnswer>
    <AnswerText>404</AnswerText>
    <AnswerTextError>NOT FOUND</AnswerTextError>
    <TextDescription>Доступно только для зарегистрированных пользователей</TextDescription>
  </BlockAnswer>
);
