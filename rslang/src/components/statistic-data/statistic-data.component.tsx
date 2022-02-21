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
  useEffect(() => {
    dispatch(fetchGettingStatisticsAction());
  }, []);
  const statistic: any = useAppSelector(getStatisticSelector);
  const [audioCallWords, setAudioCallWords] = useState(0);
  const [audioCallCorrect, setAudioCallCorrect] = useState(0);
  const [audioCallWrong, setAudioCallWrong] = useState(0);
  const [audioCallLongSeries, setAudioCallLongSeries] = useState(0);
  const [sprintWords, setSprintWords] = useState(0);
  const [sprintWrong, setsprintWrong] = useState(0);
  const [sprintCorrect, setSprintCorrect] = useState(0);
  const [sprintLongSeries, setASprintLongSeries] = useState(0);
  const [totalWords, setTotalWords] = useState(0);
  const [totalCorrect, setTotalCorrect] = useState(0);
  const [totalLongSeries, setTotalLongSeries] = useState(0);
  useEffect(() => {
    setAudioCallWrong(statistic.optional.gameStatistics.audiocall.errorAnswers);
    setsprintWrong(statistic.optional.gameStatistics.sprint.errorAnswers);
    if (statistic.optional) {
      setAudioCallWords(statistic.optional.gameStatistics.audiocall.learnedWords);
      if (sprintWords > 0 && audioCallWords > 0 && audioCallCorrect > 0 && sprintCorrect > 0) {
        setAudioCallCorrect((audioCallWords * 0.1) / audioCallCorrect);
      }

      setAudioCallLongSeries(statistic.optional.gameStatistics.audiocall.longestSeries);
      setSprintWords(statistic.optional.gameStatistics.sprint.learnedWords);
      if (sprintWords > 0 && sprintWords > 0) {
        setSprintCorrect((sprintWords * 0.1) / sprintCorrect);
      }
      setASprintLongSeries(statistic.optional.gameStatistics.sprint.longestSeries);
      setTotalWords(audioCallWords + sprintWords);
      setTotalCorrect(audioCallCorrect + sprintCorrect);
      setTotalLongSeries(
        audioCallLongSeries > sprintLongSeries ? audioCallLongSeries : sprintLongSeries
      );
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
