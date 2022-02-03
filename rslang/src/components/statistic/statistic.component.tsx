import React from 'react';
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

export const Statistic: React.FC = () => (
  <div>
    {' '}
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
          <TableStatisticBodyTh>0</TableStatisticBodyTh>
          <TableStatisticBodyTh>0%</TableStatisticBodyTh>
          <TableStatisticBodyTh>0</TableStatisticBodyTh>
        </TableStatisticBodyTr>
        <TableStatisticBodyTr>
          <TableStatisticBodyThName>Спринт</TableStatisticBodyThName>
          <TableStatisticBodyTh>0</TableStatisticBodyTh>
          <TableStatisticBodyTh>0%</TableStatisticBodyTh>
          <TableStatisticBodyTh>0</TableStatisticBodyTh>
        </TableStatisticBodyTr>
        <TableStatisticBodyTrEnd>
          <TableStatisticBodyThName>Всего</TableStatisticBodyThName>
          <TableStatisticBodyTh>0</TableStatisticBodyTh>
          <TableStatisticBodyTh>0%</TableStatisticBodyTh>
          <TableStatisticHeadThEnd>0</TableStatisticHeadThEnd>
        </TableStatisticBodyTrEnd>
      </TableStatisticBody>
    </TableStatistic>
    <TableStatistic>
      <TableStatisticTitle>Долгосрочная статистика</TableStatisticTitle>
      <TableStatisticBodyTh>Данных пока нет Данных пока нет</TableStatisticBodyTh>
    </TableStatistic>
  </div>
);
