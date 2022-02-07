import React from 'react';
import { BlockGame, BlockGameAudio, BlockGameSprint } from './styles';
import logoAudioGame from '../../assets/svg/logoAudio.svg';
import logoSprintGame from '../../assets/svg/logoSprint.svg';
import { Link } from 'react-router-dom';

export const GamesPage: React.FC = () => (
  <BlockGame>
    <Link to="/games/audio">
      <BlockGameAudio>
        <img src={logoAudioGame} alt="logoAudio" width={438} height={275} />
      </BlockGameAudio>
    </Link>
    <Link to="/games/sprint">
      <BlockGameSprint>
        <img src={logoSprintGame} alt="logoAudio" width={438} height={275} />
      </BlockGameSprint>
    </Link>
  </BlockGame>
);
