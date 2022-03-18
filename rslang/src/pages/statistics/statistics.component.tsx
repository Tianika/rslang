import Table from '../../components/statistic-data/statistic-data.component';
import { UnauthorizedUserStatistic } from '../../components/unauthorizedUserStatistic/unauthorizedUserStatistic.component';
import React from 'react';
import Charts from '../../components/statistic-data/charts.component';

export const Statistics = (): React.ReactElement => {
  if (localStorage.rslangUserId) {
    return (
      <div>
        <Table />
        <Charts />
      </div>
    );
  } else {
    return <UnauthorizedUserStatistic />;
  }
};
