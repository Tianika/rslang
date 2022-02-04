import React from 'react';
import GlobalStyle from './styles';
import { hot } from 'react-hot-loader/root';
import { Footer } from '../../features/footer';
import { Account } from '../../components/account';
import Header from '../../features/header/header.component';
import { Main } from '../../features/main';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Statistic } from '../../components/statistic/statistic.component';
import { Signup } from '../../components/account/signup.component';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/statistic" element={<Statistic />} />
        <Route path="/account/login" element={<Account />} />
        <Route path="/account/signup" element={<Signup />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default hot(App);
