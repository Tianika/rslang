import React from 'react';
import GlobalStyle from './styles';
import { hot } from 'react-hot-loader/root';

import Header from '../../features/header/header.component';
import { BrowserRouter } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <Header />
      </BrowserRouter>
    </>
  );
};

export default hot(App);
