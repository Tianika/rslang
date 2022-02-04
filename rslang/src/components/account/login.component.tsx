import React, { useState } from 'react';
import { useAppDispatch } from '../../app/hooks';
import { addEmail, loginReducer } from './loginState';
import {
  WindowAuthorizationAccount,
  ButtonAuthentication,
  EntryFieldEmail,
  EntryFieldPassword,
  PasswordTitle,
  EmailTitle
} from './styles';
import { AccountProps, User } from './types';

const state: User = {
  email: '',
  password: ''
};

// const [disable, setDisable] = useState(false);

// const toggleDisable = () => {
//   setDisable(!disable);
// };

const onEmailChange: AccountProps['onEmailChange'] = (event) => {
  const value = event.target.value;
  state.email = value;
};

const onPasswordChange: AccountProps['onPasswordChange'] = (event) => {
  const value = event.target.value;
  state.password = value;
};

const getUserData = async () => {
  try {
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
    localStorage.rslangUserName = content.name;
    localStorage.rslangUserId = content.userId;
    localStorage.rslangUserToken = content.token;
    localStorage.rslangUserRefreshToken = content.refreshToken;
  } catch (error) {
    console.error(error);
  }
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
