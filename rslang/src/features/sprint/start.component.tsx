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

const SprintStartPage: React.FC = () => {
  const DataDescription = [
    'Используте мышь, чтобы выбрать.',
    'Используте клавиши влево или вправо.'
  ];
  const Difficulty = [
    'сложность 1',
    'сложность 2',
    'сложность 3',
    'сложность 4',
    'сложность 5',
    'сложность 6'
  ];
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
