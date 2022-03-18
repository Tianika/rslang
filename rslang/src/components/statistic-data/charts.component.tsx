import React, { useEffect, useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Line } from 'react-chartjs-2';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { fetchGettingStatisticsAction } from './statistis-data.saga';
import { getStatisticSelector } from './statistic-data.selectors';

const Charts = (): React.ReactElement => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchGettingStatisticsAction());
  }, []);
  const statistic: any = useAppSelector(getStatisticSelector);
  const [data, setData] = useState([]);
  useEffect(() => {
    console.log(statistic.optional);
  }, [statistic]);
  return <div>{data}</div>;
};
export default Charts;
