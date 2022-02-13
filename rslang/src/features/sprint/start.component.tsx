import { useState } from 'react';
import { SprintGame } from '.';
import { AccountProps } from '../../utils';
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

const SprintStartPage = (): React.ReactElement => {
  const DataDescription: string[] = SPRINT_DESCRIPTION;
  const Difficulty: string[] = DIFFICULTY;

  //меняем уровень игры
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

  if (isGame) {
    return <SprintGame level={level} />;
  }

  return (
    <BlockInfo>
      <TitleGame>СПРИНТ</TitleGame>
      <GameDescription>
        "Спринт" - это тренировка для изучения слов из вашего словаря.
      </GameDescription>
      <ul>
        {DataDescription.map((text, index) => (
          <GameDescriptionElement key={index}>{text}</GameDescriptionElement>
        ))}
      </ul>
      <BlockSelect>
        <MenuDifficultySelection>
          <MenuDifficultySelectionTitle>Сложность</MenuDifficultySelectionTitle>
          <ChoiceDifficulty onChange={levelChange}>
            {Difficulty.map((el, index) => (
              <option key={index}>{el}</option>
            ))}
          </ChoiceDifficulty>
        </MenuDifficultySelection>
        <ButtonPlay onClick={startGame}>Начать</ButtonPlay>
      </BlockSelect>
    </BlockInfo>
  );
};

export default SprintStartPage;
