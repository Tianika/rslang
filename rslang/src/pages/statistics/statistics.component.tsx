import { Table } from '../../components/table/table.component';
import { UnauthorizedUserStatistic } from '../../components/unauthorizedUserStatistic/unauthorizedUserStatistic.component';

export const Statistics = () => {
  if (localStorage.rslangUserId) {
    return <Table />;
  } else {
    return <UnauthorizedUserStatistic />;
  }
};
