import React from 'react';
import GlobalStyle from './styles';
import { hot } from 'react-hot-loader/root';

import Header from '../../features/header';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
    </>
  );
};

export default hot(App);
