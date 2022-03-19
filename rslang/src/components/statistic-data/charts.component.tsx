import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ChartBlock, ChartContainer } from './style';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartData
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
  const [data, setData] = useState<ChartData<'bar', number[], unknown>>({
    labels: [],
    datasets: []
  });
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
      if (response.status === 200 && response.data.optional) {
        const labels = Object.keys(response.data.optional.long);
        const dataDay: any = Object.values(response.data.optional.long);
        if (dataDay) {
          setData({
            labels,
            datasets: [
              {
                label: 'Новые слова',
                data: labels.map((el, i) => dataDay[i].newWords),
                backgroundColor: 'rgba(245,255,99,0.5)'
              },
              {
                label: 'Изученные слова',
                data: labels.map((el, i) => dataDay[i].learnedWords),
                backgroundColor: 'rgba(53, 162, 235, 0.5)'
              }
            ]
          });
        }
      }
    });
  }, []);
  return (
    <ChartBlock>
      <ChartContainer>
        <Bar options={options} data={data} />
      </ChartContainer>
    </ChartBlock>
  );
};
export default Charts;
