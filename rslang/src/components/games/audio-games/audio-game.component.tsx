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

const GameAudio: React.FC = () => {
  const DataDescription = [
    'Используте мышь, чтобы выбрать.',
    'Используте цифровые клавиши от 1 до 5 для выбора ответа.',
    ' Используте пробел для повторного изучения слова.',
    'Используте клавишу Enter для подсказки или перехода к следующему слову.'
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
      <TitleGame>АУДИОВЫЗОВ</TitleGame>
      <GameDescription>
        "Аудиовызов" - это тренировка, которая улучшает восприятие речи на слух.
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
export default GameAudio;
