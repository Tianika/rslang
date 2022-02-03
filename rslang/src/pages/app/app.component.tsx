import React from 'react';
import GlobalStyle from './styles';
import { hot } from 'react-hot-loader/root';
import { Footer } from '../../features/footer';
import { Account, Signup } from '../../components/account';
import { Header } from '../../features/header/';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Statistic } from '../../components/statistic/statistic.component';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/statistic" element={<Statistic />} />
        <Route path="/account/login" element={<Account />} />
        <Route path="/account/signup" element={<Signup />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default hot(App);
