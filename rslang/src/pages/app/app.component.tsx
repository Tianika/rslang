import React from 'react';
import GlobalStyle from './styles';
import { hot } from 'react-hot-loader/root';
import { Footer } from '../../features/footer';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />

      <Footer />
    </>
  );
};

export default hot(App);
