import React from 'react';
import { DIFFICULTY, SPRINT_DESCRIPTION } from './constants';
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

const SprintStartPage: React.FC = () => {
  const DataDescription: string[] = SPRINT_DESCRIPTION;
  const Difficulty: string[] = DIFFICULTY;

  return (
    <BlockInfo>
      <TitleGame>СПРИНТ</TitleGame>
      <GameDescription>
        "Спринт" - это тренировка для повторения заученных слов из вашего словаря.
      </GameDescription>
      <ul>
        {DataDescription.map((el, index) => (
          <GameDescriptionElement key={index}>{el}</GameDescriptionElement>
        ))}
      </ul>
      <BlockSelect>
        <MenuDifficultySelection>
          <MenuDifficultySelectionTitle>Сложность</MenuDifficultySelectionTitle>
          <ChoiceDifficulty>
            {Difficulty.map((el, index) => (
              <option key={index}>{el}</option>
            ))}
          </ChoiceDifficulty>
        </MenuDifficultySelection>
        <ButtonPlay>Начать</ButtonPlay>
      </BlockSelect>
    </BlockInfo>
  );
};
export default SprintStartPage;
