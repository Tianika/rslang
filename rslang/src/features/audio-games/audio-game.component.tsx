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
import { useAppSelector } from '../../app/hooks';
import { typeGameSelector } from '../wordsPage/wordsPage.selectors';

const StartPageAudioCall = (): React.ReactElement => {
  const [level, setLevel] = useState(0);
  const levelChange: AccountProps['onLevelChange'] = (event) => {
    const value = event.target.options.selectedIndex;
    setLevel(value);
  };
  //старт игры
  const [isGame, setIsGame] = useState(false);
  const startGame = () => {
    setIsGame(true);
  };

  const isUserGameValue = useAppSelector(typeGameSelector);

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
        {isUserGameValue ? null : (
          <MenuDifficultySelection>
            <MenuDifficultySelectionTitle>Сложность</MenuDifficultySelectionTitle>
            <ChoiceDifficulty onChange={levelChange}>
              {DIFFICULTY.map((el, index) => (
                <option key={index}>{el}</option>
              ))}
            </ChoiceDifficulty>
          </MenuDifficultySelection>
        )}

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

export default StartPageAudioCall;
