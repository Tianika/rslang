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
    </div>
  );
};

export default Table;
