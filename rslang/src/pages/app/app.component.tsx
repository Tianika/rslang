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
import { GamesPage } from '../games/startPageGames.component';
import { SprintStartPage } from '../../features/sprint';
import { Textbook } from '../../features/textbook/textbook.component';
import { WordsPage } from '../../features/textbook/wordsPage/wordsPage.component';
import { Login } from '../../features/login';
import StartPageAudioCall from '../../features/audio-games/audio-game.component';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/textbook" element={<Textbook />} />
          <Route path="/statistic" element={<Statistics />} />
          <Route path="/account" element={<Account />} />
          <Route path="/account/login" element={<Login />} />
          <Route path="/account/signup" element={<Signup />} />
          <Route path="/games" element={<GamesPage />} />
          <Route path="/games/audio" element={<StartPageAudioCall />} />
          <Route path="/games/sprint" element={<SprintStartPage />} />
          <Route path="/textbook/wordspage" element={<WordsPage />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
};

export default hot(App);
