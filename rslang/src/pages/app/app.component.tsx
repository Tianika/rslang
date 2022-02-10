import React from 'react';
import GlobalStyle from './styles';
import { hot } from 'react-hot-loader/root';
import { Footer } from '../../features/footer';
import { Signup } from '../../features/signup';
import { Header } from '../../features/header/';
import { Main } from '../../features/main';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Account } from '../account';
import { Statistics } from '../statistics/statistics.component';
import { GamesPage } from '../../components/games/startPageGames.component';
import { GameAudio } from '../../components/games/audio-games/audio-game.component';
import { SprintGame, SprintStartPage } from '../../features/sprint';
import { useAppSelector } from '../../app/hooks';
import { sprintGameStatus, sprintStatusSelector } from '../../features/sprint/sprint.selectors';
import { LoadingState } from '../../utils';
import { LoadingPage } from '../../components/loading/';

const App: React.FC = () => {
  //запущена ли игра и статус загрузки для спринта
  const isGame = useAppSelector(sprintGameStatus);
  const status = useAppSelector(sprintStatusSelector);

  //меняем элемент в зависимости от isGame и status
  const togglePageForSprintGame = () => {
    if (!isGame) {
      console.log(status, isGame);
      return <SprintStartPage />;
    }
    if (isGame && status !== LoadingState.Success) {
      console.log(status, isGame);
      return <LoadingPage />;
    }

    if (isGame && status === LoadingState.Success) {
      console.log(status, isGame);
      return <SprintGame />;
    }
  };

  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/statistic" element={<Statistics />} />
          <Route path="/account/login" element={<Account />} />
          <Route path="/account/signup" element={<Signup />} />
          <Route path="/games" element={<GamesPage />} />
          <Route path="/games/audio" element={<GameAudio />} />
          <Route path="/games/sprint" element={togglePageForSprintGame()} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
};

export default hot(App);
