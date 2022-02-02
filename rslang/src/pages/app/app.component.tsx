import React from 'react';
import GlobalStyle from './styles';
import { hot } from 'react-hot-loader/root';
import { Footer } from '../../features/footer';
import { Account } from '../../components/account/login.component';
import Header from '../../features/header/header.component';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/statistic" element={<Account />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default hot(App);
