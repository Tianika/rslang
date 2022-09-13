import React, { useLayoutEffect, useState } from 'react';
import { SprintGame } from '.';
import { useAppSelector } from '../../app/hooks';
import { AccountProps } from '../../utils';
import { levelGameSelector, typeGameSelector } from '../wordsPage/wordsPage.selectors';
import { DIFFICULTY, LOCALES, SPRINT_DESCRIPTION } from './constants';
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

const DataDescription: string[] = SPRINT_DESCRIPTION;
const Difficulty: string[] = DIFFICULTY;

const SprintStartPage = (): React.ReactElement => {
  const [level, setLevel] = useState(0);
  const [isGame, setIsGame] = useState(false);

  const isUserGame = useAppSelector(typeGameSelector);
  const userLevelGame = useAppSelector(levelGameSelector);

  //меняем уровень игры
  const levelChange: AccountProps['onLevelChange'] = (event) => {
    const value = event.target.options.selectedIndex;
    setLevel(value);
  };

  useLayoutEffect(() => {
    setLevel(userLevelGame);
  }, [isUserGame]);

  if (isGame) {
    return <SprintGame level={level} />;
  }

  return (
    <BlockInfo>
      <TitleGame>{LOCALES.title}</TitleGame>
      <GameDescription>{LOCALES.description}</GameDescription>
      <ul>
        {DataDescription.map((text, index) => (
          <GameDescriptionElement key={index}>{text}</GameDescriptionElement>
        ))}
      </ul>
      <BlockSelect>
        {isUserGame ? null : (
          <MenuDifficultySelection>
            <MenuDifficultySelectionTitle>{LOCALES.difficulty}</MenuDifficultySelectionTitle>
            <ChoiceDifficulty onChange={levelChange}>
              {Difficulty.map((el, index) => (
                <option key={index}>{el}</option>
              ))}
            </ChoiceDifficulty>
          </MenuDifficultySelection>
        )}

        <ButtonPlay onClick={() => setIsGame(true)}>{LOCALES.start}</ButtonPlay>
      </BlockSelect>
    </BlockInfo>
  );
};

export default SprintStartPage;
