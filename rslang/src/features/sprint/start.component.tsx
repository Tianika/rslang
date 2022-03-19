import React, { useState } from 'react';
import { SprintGame } from '.';
import { useAppSelector } from '../../app/hooks';
import { AccountProps } from '../../utils';
import { levelGameSelector, typeGameSelector } from '../wordsPage/wordsPage.selectors';
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

  const isUserGame = useAppSelector(typeGameSelector);
  const userLevelGame = useAppSelector(levelGameSelector);

  //меняем уровень игры
  let level = 0;

  const levelChange: AccountProps['onLevelChange'] = (event) => {
    const value = event.target.options.selectedIndex;
    level = value;
  };

  if (isUserGame) {
    level = userLevelGame;
  }

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
        {isUserGame ? null : (
          <MenuDifficultySelection>
            <MenuDifficultySelectionTitle>Сложность</MenuDifficultySelectionTitle>
            <ChoiceDifficulty onChange={levelChange}>
              {Difficulty.map((el, index) => (
                <option key={index}>{el}</option>
              ))}
            </ChoiceDifficulty>
          </MenuDifficultySelection>
        )}

        <ButtonPlay onClick={startGame}>Начать</ButtonPlay>
      </BlockSelect>
    </BlockInfo>
  );
};

export default SprintStartPage;
