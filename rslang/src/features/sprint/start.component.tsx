import React from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { AccountProps } from '../../utils';
import { DIFFICULTY, SPRINT_DESCRIPTION } from './constants';
import { fetchSprintAction } from './sprint.saga';
import { gameStatus, selectedGroup } from './sprint.selectors';
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

  const { changeLevel, changeGameStatus } = sprintActions;

  const dispatch = useAppDispatch();

  const level = useAppSelector(selectedGroup);

  //получаем номер уровня
  const onLevelChange: AccountProps['onLevelChange'] = (event) => {
    const value = event.target.options.selectedIndex;
    dispatch(changeLevel(value));
  };

  //меняем статус игры
  const onChangeStatus = (): void => {
    dispatch(changeGameStatus());
  };

  //получаем слова для игры
  const getWords = () => {
    onChangeStatus();
    dispatch(fetchSprintAction(level));
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
          <ChoiceDifficulty onChange={onLevelChange}>
            {Difficulty.map((el, index) => (
              <option key={index}>{el}</option>
            ))}
          </ChoiceDifficulty>
        </MenuDifficultySelection>
        <ButtonPlay onClick={getWords}>Начать</ButtonPlay>
      </BlockSelect>
    </BlockInfo>
  );
};
export default SprintStartPage;
