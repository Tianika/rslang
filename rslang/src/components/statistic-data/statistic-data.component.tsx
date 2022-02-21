import React, { useEffect, useState } from 'react';
import {
  TableStatistic,
  TableStatisticBody,
  TableStatisticHead,
  TableStatisticHeadTr,
  TableStatisticHeadTh,
  TableStatisticTitle,
  TableStatisticBodyTh,
  TableStatisticBodyThName,
  TableStatisticBodyTr,
  TableStatisticHeadThStart,
  TableStatisticBodyTrEnd,
  TableStatisticHeadThEnd
} from './style';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { fetchGettingStatisticsAction } from './statistis-data.saga';
import { getStatisticSelector } from './statistic-data.selectors';

const Table = (): React.ReactElement => {
  const dispatch = useAppDispatch();
  dispatch(fetchGettingStatisticsAction());
  const statistic: object = useAppSelector(getStatisticSelector);
  const [audioCallWords, setAudioCallWords] = useState('');
  const [audioCallCorrect, setAudioCallCorrect] = useState('');
  const [audioCallLongSeries, setAudioCallLongSeries] = useState('');
  const [sprintWords, setSprintWords] = useState('');
  const [sprintCorrect, setSprintCorrect] = useState('');
  const [sprintLongSeries, setASprintongSeries] = useState('');
  const [totalWords, setTotalWords] = useState('');
  const [totalCorrect, setTotalCorrect] = useState('');
  const [totalLongSeries, setTotalLongSeries] = useState('');
  //setAudioCallWords(statistic.optional.gameStatistics.audiocall.correctAnswers);

  return (
    <div>
      <TableStatistic>
        <TableStatisticTitle>Статистика за сегодня</TableStatisticTitle>
        <TableStatisticHead>
          <TableStatisticHeadTr>
            <TableStatisticHeadThStart>Игра</TableStatisticHeadThStart>
            <TableStatisticHeadTh>Изучено слов</TableStatisticHeadTh>
            <TableStatisticHeadTh>Правильно (%)</TableStatisticHeadTh>
            <TableStatisticHeadThEnd>Самая длинная серия</TableStatisticHeadThEnd>
          </TableStatisticHeadTr>
        </TableStatisticHead>
        <TableStatisticBody>
          <TableStatisticBodyTr>
            <TableStatisticBodyThName>Аудиовызов</TableStatisticBodyThName>
            <TableStatisticBodyTh>audioCallWords</TableStatisticBodyTh>
            <TableStatisticBodyTh>{audioCallCorrect}%</TableStatisticBodyTh>
            <TableStatisticBodyTh>{audioCallLongSeries}</TableStatisticBodyTh>
          </TableStatisticBodyTr>
          <TableStatisticBodyTr>
            <TableStatisticBodyThName>Спринт</TableStatisticBodyThName>
            <TableStatisticBodyTh>{sprintWords}</TableStatisticBodyTh>
            <TableStatisticBodyTh>{sprintCorrect}%</TableStatisticBodyTh>
            <TableStatisticBodyTh>{sprintLongSeries}</TableStatisticBodyTh>
          </TableStatisticBodyTr>
          <TableStatisticBodyTrEnd>
            <TableStatisticBodyThName>Всего</TableStatisticBodyThName>
            <TableStatisticBodyTh>{totalWords}</TableStatisticBodyTh>
            <TableStatisticBodyTh>{totalCorrect}%</TableStatisticBodyTh>
            <TableStatisticHeadThEnd>{totalLongSeries}</TableStatisticHeadThEnd>
          </TableStatisticBodyTrEnd>
        </TableStatisticBody>
      </TableStatistic>
      <TableStatistic>
        <TableStatisticTitle>Долгосрочная статистика</TableStatisticTitle>
        <TableStatisticBodyTh>Данных пока нет Данных пока нет</TableStatisticBodyTh>
      </TableStatistic>
    </div>
  );
};

export default Table;
