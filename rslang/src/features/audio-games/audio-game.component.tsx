import React, { useState } from 'react';
import {
  BlockInfo,
  BlockSelect,
  ButtonPlay,
  ChoiceDifficulty,
  GameDescription,
  GameDescriptionElement,
  MenuDifficultySelection,
  MenuDifficultySelectionTitle,
  TitleGame
} from './styles';
import { AccountProps } from '../../utils';
import { AUDIO_DESCRIPTION, DIFFICULTY } from './constants';
import GameWindow from './game-window.component';

const StartPageAudioCall = (): React.ReactElement => {
  const [level, setLevel] = useState(0);
  const levelChange: AccountProps['onLevelChange'] = (event) => {
    const value = event.target.options.selectedIndex;
    setLevel(value);
    console.log(value);
  };
  //старт игры
  const [isGame, setIsGame] = useState(false);
  const startGame = () => {
    setIsGame(true);
  };

  if (isGame) {
    return <GameWindow level={level} />;
  }
  return (
    <BlockInfo>
      <TitleGame>АУДИОВЫЗОВ</TitleGame>
      <GameDescription>
        "Аудиовызов" - это тренировка, которая улучшает восприятие речи на слух.
      </GameDescription>
      <ul>
        {AUDIO_DESCRIPTION.map((el, index) => (
          <GameDescriptionElement key={index}>{el}</GameDescriptionElement>
        ))}
      </ul>
      <BlockSelect>
        <MenuDifficultySelection>
          <MenuDifficultySelectionTitle>Сложность</MenuDifficultySelectionTitle>
          <ChoiceDifficulty onChange={levelChange}>
            {DIFFICULTY.map((el, index) => (
              <option key={index}>{el}</option>
            ))}
          </ChoiceDifficulty>
        </MenuDifficultySelection>
        <ButtonPlay
          onClick={() => {
            startGame();
          }}
        >
          Начать
        </ButtonPlay>
      </BlockSelect>
    </BlockInfo>
  );
};
setInterval(() => {
  console.log(ChoiceDifficulty.selected);
}, 3000);

export default StartPageAudioCall;
