import { Dispatch, useEffect, useState } from 'react';
import { useAppDispatch } from '../../app/hooks';
import { sprintGameActions } from '../../features/sprint/sprint.slice';
import { GameTimer } from './styles';

type TimerProp = {
  setIsEndGame: Dispatch<React.SetStateAction<boolean>>;
};

const { resetSprintWordsArray } = sprintGameActions;

export const Timer = ({ setIsEndGame }: TimerProp) => {
  const dispatch = useAppDispatch();
  const [timer, setTimer] = useState(-1);

  useEffect(() => {
    setTimer(60);
  }, []);

  useEffect(() => {
    if (timer > 0) {
      setTimeout(() => {
        setTimer(timer - 1);
      }, 1000);
    }

    if (timer === 0) {
      dispatch(resetSprintWordsArray());
      setIsEndGame(true);
    }
  }, [timer]);

  return <GameTimer>{timer}</GameTimer>;
};
