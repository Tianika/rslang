import { RootState } from '../../app/store';

export const getStatisticSelector = (state: RootState) => {
  return state.statistics.optional;
};
