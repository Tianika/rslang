import React, { useEffect, useState } from 'react';
import {
  TableStatistic,
  TableStatisticTitle,
  TableStatisticHeader,
  TableAudioRow,
  Column1,
  Column2,
  Column3,
  Column4,
  TableSprintRow,
  TableTotalRow
} from './style';
import axios from 'axios';

const Table = (): React.ReactElement => {
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.rslangUserToken}`
    }
  };
  const id = localStorage.rslangUserId;
  const request = axios.get(
    `https://learnwords-team17.herokuapp.com/users/${id}/statistics`,
    config
  );
  const [audioCallWords, setAudioCallWords] = useState(0);
  const [audioCallCorrect, setAudioCallCorrect] = useState(0);
  const [audioCallLongSeries, setAudioCallLongSeries] = useState(0);
  const [sprintWords, setSprintWords] = useState(0);
  const [sprintCorrect, setSprintCorrect] = useState(0);
  const [sprintLongSeries, setASprintLongSeries] = useState(0);
  const [totalWords, setTotalWords] = useState([]);
  const [totalCorrect, setTotalCorrect] = useState(0);
  const [totalLongSeries, setTotalLongSeries] = useState(0);

  useEffect(() => {
    request.then(function (response) {
      if (response.status === 200) {
        const objAudio = response.data.optional.audiocall;
        const objSprint = response.data.optional.sprint;
        setAudioCallWords(objAudio.allWords);
        setAudioCallCorrect(Math.floor(objAudio.correctAnswers / (objAudio.allWords / 100)));
        setAudioCallLongSeries(objAudio.longestSeries);
        setSprintWords(objSprint.allWords);
        setSprintCorrect(Math.floor(objSprint.correctAnswers / (objSprint.allWords / 100)));
        setASprintLongSeries(objSprint.longestSeries);
        setTotalWords(objAudio.allWords + objSprint.allWords);
        setTotalCorrect(
          (Math.floor(objAudio.correctAnswers / (objAudio.allWords / 100)) +
            Math.floor(objSprint.correctAnswers / (objSprint.allWords / 100))) /
            2
        );
        if (objAudio.longestSeries > objSprint.longestSeries) {
          setTotalLongSeries(objAudio.longestSeries);
        } else {
          setTotalLongSeries(objSprint.longestSeries);
        }
      }
    });
  }, []);

  return (
    <TableStatistic>
      <TableStatisticTitle>Статистика за сегодня</TableStatisticTitle>
      <TableStatisticHeader>
        <Column1>Игра</Column1>
        <Column2>Изучено слов</Column2>
        <Column3>Правильно (%)</Column3>
        <Column4>Самая длинная серия</Column4>
      </TableStatisticHeader>

      <TableAudioRow>
        <Column1>Аудиовызов</Column1>
        <Column2>{audioCallWords}</Column2>
        <Column3>{audioCallCorrect}%</Column3>
        <Column4>{audioCallLongSeries}</Column4>
      </TableAudioRow>
      <TableSprintRow>
        <Column1>Спринт</Column1>
        <Column2>{sprintWords}</Column2>
        <Column3>{sprintCorrect}%</Column3>
        <Column4>{sprintLongSeries}</Column4>
      </TableSprintRow>
      <TableTotalRow>
        <Column1>Всего</Column1>
        <Column2>{totalWords}</Column2>
        <Column3>{totalCorrect}%</Column3>
        <Column4>{totalLongSeries}</Column4>
      </TableTotalRow>
    </TableStatistic>
  );
};

export default Table;
