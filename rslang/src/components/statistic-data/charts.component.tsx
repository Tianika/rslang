import React, { useEffect, useState } from 'react';
// import { Doughnut } from 'react-chartjs-2';
// import { Line } from 'react-chartjs-2';
import axios from 'axios';

const Charts = (): React.ReactElement => {
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
  return <div>Долгосрочная статистика</div>;
};
export default Charts;
