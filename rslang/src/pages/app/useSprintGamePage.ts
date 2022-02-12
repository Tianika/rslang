import React from 'react';
import { useAppSelector } from '../../app/hooks';
import { LoadingPage } from '../../components/loading';
import { SprintGame, SprintStartPage } from '../../features/sprint';
import { sprintGameStatus, sprintStatusSelector } from '../../features/sprint/sprint.selectors';
import { EmptyComponent, LoadingState } from '../../utils';

export const useSprintGamePage = (): React.FC => {
  //запущена ли игра и статус загрузки для спринта
  const isGame = useAppSelector(sprintGameStatus);
  const status = useAppSelector(sprintStatusSelector);

  //меняем элемент в зависимости от isGame и status
  if (!isGame) {
    return SprintStartPage;
  }
  if (isGame && status !== LoadingState.Success) {
    return LoadingPage;
  }

  if (isGame && status === LoadingState.Success) {
    return SprintGame;
  }

  return EmptyComponent;
};
