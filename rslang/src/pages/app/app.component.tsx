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

const App: React.FC = () => {
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
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
};

export default hot(App);
