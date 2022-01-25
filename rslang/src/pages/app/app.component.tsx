import React from 'react';
import GlobalStyle from './styles';
import { hot } from 'react-hot-loader/root';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <div>Hello world</div>
    </>
  );
};

export default hot(App);
