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

export const Account: React.FC = () => (
  <WindowAuthorizationAccount>
    <TabEntrance type={'button'}>ВХОД</TabEntrance>
    <EmailTitle>ЭЛЕКТРОННАЯ ПОЧТА</EmailTitle>
    <EntryFieldEmail type={'email'} autoComplete="on" />
    <PasswordTitle>ПАРОЛЬ</PasswordTitle>
    <EntryFieldPassword type={'password'} autoComplete="on" />
    <ButtonAuthentication>ВОЙТИ</ButtonAuthentication>
  </WindowAuthorizationAccount>
);
