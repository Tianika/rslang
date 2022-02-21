import { Game } from './types';
import logoAudioGame from '../../assets/svg/logoAudio.svg';
import logoSprintGame from '../../assets/svg/logoSprint.svg';

export const games: Record<string, Game> = {
  audio: {
    path: '/games/audio',
    logo: logoAudioGame
  },
  sprint: {
    path: '/games/sprint',
    logo: logoSprintGame
  }
};
