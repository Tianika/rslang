import Table from '../../components/statistic-data/statistic-data.component';
import { UnauthorizedUserStatistic } from '../../components/unauthorizedUserStatistic/unauthorizedUserStatistic.component';
import React from 'react';

export const Statistics = (): React.ReactElement => {
  if (localStorage.rslangUserId) {
    return <Table />;
  } else {
    return <UnauthorizedUserStatistic />;
  }
};
