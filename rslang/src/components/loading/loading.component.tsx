import React from 'react';
import { LoadingBlock, LoadingImage, LoadingText } from './styles';

export const LoadingPage: React.FC = () => (
  <LoadingBlock>
    <LoadingText>Загрузка...</LoadingText>
    <LoadingImage />
  </LoadingBlock>
);
