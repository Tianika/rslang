import React from 'react';
import {
  WindowAuthorizationAccount,
  ButtonAuthentication,
  EntryFieldEmail,
  EntryFieldPassword,
  PasswordTitle,
  EmailTitle,
  TabEntrance,
  ContainerButton,
  TabRecord
} from './styles';
import { Link } from 'react-router-dom';

type AccountProps = {
  onEmailChange: (value: string) => void;
  onPasswordChange: (value: string) => void;
};

export const Account: React.FC = (props) => (
  <div style={{ paddingTop: '70px' }}>
    <ContainerButton>
      <Link to={'/account/login'}>
        <TabEntrance type={'button'}>ВХОД</TabEntrance>
      </Link>
      <Link to={'/account/signup'}>
        <TabRecord type={'button'}>РЕГИСТРАЦИЯ</TabRecord>
      </Link>
    </ContainerButton>
    <WindowAuthorizationAccount>
      <EmailTitle>ЭЛЕКТРОННАЯ ПОЧТА</EmailTitle>
      <EntryFieldEmail type={'email'} autoComplete="on" />
      <PasswordTitle>ПАРОЛЬ</PasswordTitle>
      <EntryFieldPassword type={'password'} autoComplete="on" />
      <ButtonAuthentication>ВОЙТИ</ButtonAuthentication>
    </WindowAuthorizationAccount>
  </div>
);