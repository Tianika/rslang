import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ChartBlock } from './style';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);
const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const
    },
    title: {
      display: true,
      text: 'Долгосрочная статистика'
    }
  }
};

const Charts = (): React.ReactElement => {
  let labels;
  const [data, setData] = useState({});
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
  useEffect(() => {
    request.then(function (response) {
      if (response.status === 200) {
        labels = Object.keys(response.data.optional.long);
        const dataDay: any = Object.values(response.data.optional.long);
        setData({
          labels,
          datasets: [
            {
              label: 'Новые слова',
              data: labels.map((el, i) => dataDay[i].newWord),
              backgroundColor: 'rgba(245,255,99,0.5)'
            },
            {
              label: 'Всего слов',
              data: labels.map((el, i) => dataDay[i].learnedWords),
              backgroundColor: 'rgba(53, 162, 235, 0.5)'
            }
          ]
        });
      }
    });
  }, []);
  return (
    <ChartBlock>
      <Bar options={options} data={data} />
      <div>график</div>
    </ChartBlock>
  );
};
export default Charts;
