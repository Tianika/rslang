import { Table } from '../../components/table/table.component';
import { UnauthorizedUserStatistic } from '../../components/unauthorizedUserStatistic/unauthorizedUserStatistic.component';
import React from 'react';

export const Statistics = (): JSX.Element => {
  if (localStorage.rslangUserId) {
    return <Table />;
  } else {
    return <UnauthorizedUserStatistic />;
  }
};
