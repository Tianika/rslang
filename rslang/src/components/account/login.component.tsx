import React from 'react';
import {
  WindowAuthorizationAccount,
  ButtonAuthentication,
  EntryFieldEmail,
  EntryFieldPassword,
  PasswordTitle,
  EmailTitle,
  TabEntrance
} from './styles';

type AccountProps = {
  onEmailChange: (value: string) => void;
  onPasswordChange: (value: string) => void;
};

export const Account: React.FC = (props) => (
  <WindowAuthorizationAccount>
    <TabEntrance type={'button'}>ВХОД</TabEntrance>
    <EmailTitle>ЭЛЕКТРОННАЯ ПОЧТА</EmailTitle>
    <EntryFieldEmail type={'email'} autoComplete="on" />
    <PasswordTitle>ПАРОЛЬ</PasswordTitle>
    <EntryFieldPassword type={'password'} autoComplete="on" />
    <ButtonAuthentication>ВОЙТИ</ButtonAuthentication>
  </WindowAuthorizationAccount>
);
