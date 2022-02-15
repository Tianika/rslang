import React from 'react';
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
import { DIFFICULTY, AUDIO_DESCRIPTION } from './constants';

const StartPageAudioCall = (): React.ReactElement => {
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
          <ChoiceDifficulty>
            {DIFFICULTY.map((el, index) => (
              <option key={index}>{el}</option>
            ))}
          </ChoiceDifficulty>
        </MenuDifficultySelection>
        <ButtonPlay>Начать</ButtonPlay>
      </BlockSelect>
    </BlockInfo>
  );
};
export default StartPageAudioCall;
