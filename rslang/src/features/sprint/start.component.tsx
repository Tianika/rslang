import React from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { ChangeEventHandle } from '../../utils';
import { DIFFICULTY, SPRINT_DESCRIPTION } from './constants';
import { selectedGroup } from './sprint.selectors';
import { sprintActions } from './sprint.slice';
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

  const { changeLevel } = sprintActions;

  const dispatch = useAppDispatch();

  const level = useAppSelector(selectedGroup);

  //получаем номер уровня
  const onLevelChange: ChangeEventHandle = (event) => {
    const value = event.target.value;
    dispatch(changeLevel(value));

    console.log(level);
  };

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
