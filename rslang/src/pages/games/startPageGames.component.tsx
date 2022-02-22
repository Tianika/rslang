import React from 'react';
import { BlockGame, BlockGameElem } from './styles';
import { Link } from 'react-router-dom';
import { games } from './constant';

export const GamesPage: React.FC = () => (
  <BlockGame>
    {Object.values(games).map((game) => (
      <Link to={game.path} key={game.path}>
        <BlockGameElem colorSelection={game.path}>
          <img src={game.logo} alt="logo" width={438} height={275} />
        </BlockGameElem>
      </Link>
    ))}
  </BlockGame>
);
