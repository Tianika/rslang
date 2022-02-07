import React from 'react';
import { Link } from 'react-router-dom';
import { Login } from '../../features/login';
import { ContainerButton, TabEntrance, TabRecord } from '../../features/login/styles';

export const Account: React.FC = (props) => (
  <div>
    <ContainerButton>
      <Link to={'/account/login'}>
        <TabEntrance type={'button'}>ВХОД</TabEntrance>
      </Link>
      <Link to={'/account/signup'}>
        <TabRecord type={'button'}>РЕГИСТРАЦИЯ</TabRecord>
      </Link>
    </ContainerButton>
    <Login />
  </div>
);
