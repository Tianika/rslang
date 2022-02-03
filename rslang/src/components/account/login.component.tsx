import React from 'react';
import {
  WindowAuthorizationAccount,
  ButtonAuthentication,
  EntryFieldEmail,
  EntryFieldPassword,
  PasswordTitle,
  EmailTitle
} from './styles';

type AccountProps = {
  onEmailChange: (value: string) => void;
  onPasswordChange: (value: string) => void;
};

type User = {
  email: string;
  password: string;
};

const state: User = {
  email: '',
  password: ''
};

const onEmailChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
  const value = event.target.value;
  state.email = value;
};

const onPasswordChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
  const value = event.target.value;
  state.password = value;
};

const getUserData = async () => {
  const rawResponse = await fetch('https://learnwords-team17.herokuapp.com/signin', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(state)
  });
  const content = await rawResponse.json();

  console.log(content);
};

export const Login: React.FC = (props) => (
  <div>
    <WindowAuthorizationAccount>
      <EmailTitle>ЭЛЕКТРОННАЯ ПОЧТА</EmailTitle>
      <EntryFieldEmail onChange={onEmailChange} type={'email'} autoComplete="on" />
      <PasswordTitle>ПАРОЛЬ</PasswordTitle>
      <EntryFieldPassword onChange={onPasswordChange} type={'password'} autoComplete="on" />
      <ButtonAuthentication onClick={getUserData}> ВОЙТИ</ButtonAuthentication>
    </WindowAuthorizationAccount>
  </div>
);
