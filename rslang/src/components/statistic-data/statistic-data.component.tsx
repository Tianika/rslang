import React, { useEffect, useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Line } from 'react-chartjs-2';
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

  useEffect(() => {
    dispatch(fetchGettingStatisticsAction());
  }, []);

  const statistic: any = useAppSelector(getStatisticSelector);
  const [audioCallWords, setAudioCallWords] = useState(0);
  const [audioCallCorrect, setAudioCallCorrect] = useState(0);
  const [audioCallLongSeries, setAudioCallLongSeries] = useState(0);
  const [sprintWords, setSprintWords] = useState(0);
  const [sprintCorrect, setSprintCorrect] = useState(0);
  const [sprintLongSeries, setASprintLongSeries] = useState(0);
  const [totalWords, setTotalWords] = useState(0);
  const [totalCorrect, setTotalCorrect] = useState(0);
  const [totalLongSeries, setTotalLongSeries] = useState(0);

  useEffect(() => {
    if (statistic.optional.sprint && statistic.optional.audio) {
      setAudioCallLongSeries(statistic.optional.audiocall.longestSeries);
      setASprintLongSeries(statistic.optional.sprint.longestSeries);
      setTotalLongSeries(
        statistic.optional.sprint.longestSeries + statistic.optional.audiocall.longestSeries
      );
      setAudioCallWords(statistic.optional.audiocall.allWords);
      setSprintWords(statistic.optional.sprint.allWords);
      setTotalWords(statistic.optional.audiocall.allWords + statistic.optional.sprint.allWords);
      setAudioCallCorrect(
        Math.floor(
          statistic.optional.audiocall.correctAnswers /
            (statistic.optional.audiocall.allWords / 100)
        )
      );
      setSprintCorrect(
        Math.floor(
          statistic.optional.sprint.correctAnswers / (statistic.optional.sprint.allWords / 100)
        )
      );
      setTotalCorrect((sprintCorrect + audioCallCorrect) / 2);
    }
  }, [statistic]);

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
            <TableStatisticBodyTh>{audioCallWords}</TableStatisticBodyTh>
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
