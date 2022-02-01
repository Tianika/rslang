import React from 'react';
import GlobalStyle from './styles';
import { hot } from 'react-hot-loader/root';
import { Footer } from '../../features/footer';
import { Account } from '../../features/account/account.component';
import Header from '../../features/header/header.component';
import { BrowserRouter } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />

      <BrowserRouter>
        <Header />
      </BrowserRouter>
      <Account />
      <Footer />
    </>
  );
};

export default hot(App);
