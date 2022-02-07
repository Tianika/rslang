import React from 'react';
import { BlockGame, BlockGameAudio, BlockGameSprint } from './styles';
import logoAudioGame from '../../assets/svg/logoAudio.svg';
import logoSprintGame from '../../assets/svg/logoSprint.svg';

export const GamesPage: React.FC = () => (
  <BlockGame>
    <BlockGameAudio>
      <img src={logoAudioGame} alt="logoAudio" width={438} height={275} />
    </BlockGameAudio>
    <BlockGameSprint>
      <img src={logoSprintGame} alt="logoAudio" width={438} height={275} />
    </BlockGameSprint>
  </BlockGame>
);
