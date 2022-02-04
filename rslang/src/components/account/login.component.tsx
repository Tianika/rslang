import React, { useEffect, useState } from 'react';
import { useAppDispatch } from '../../app/hooks';
import { addEmail, loginReducer } from './loginState';
import {
  WindowAuthorizationAccount,
  ButtonAuthentication,
  EntryFieldEmail,
  EntryFieldPassword,
  PasswordTitle,
  EmailTitle,
  ButtonAuthPreload,
  PreloadLine
} from './styles';
import { AccountProps, User } from './types';

export const Login: React.FC = (props) => {
  const [disable, setDisable] = useState(false);
  const toggleDisable = () => {
    setDisable(!disable);
  };

  const state: User = {
    email: '',
    password: ''
  };

  const onEmailChange: AccountProps['onEmailChange'] = (event) => {
    const value = event.target.value;
    state.email = value;
  };

  const onPasswordChange: AccountProps['onPasswordChange'] = (event) => {
    const value = event.target.value;
    state.password = value;
  };

  const getUserData = async () => {
    toggleDisable();

    try {
      const rawResponse = await fetch('https://learnwords-team17.herokuapp.com/signin', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },

        body: JSON.stringify(state)
      });

      switch (rawResponse.status) {
        case 200:
          const content = await rawResponse.json();

          localStorage.rslangUserName = content.name;
          localStorage.rslangUserId = content.userId;
          localStorage.rslangUserToken = content.token;
          localStorage.rslangUserRefreshToken = content.refreshToken;

          location.href = location.origin;
          break;

        case 403:
          console.log('неверный пароль');
          break;

        case 404:
          console.log('пользователь не найден');

          break;

        default:
          console.log('попробуйте еще раз');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <WindowAuthorizationAccount>
        <EmailTitle>ЭЛЕКТРОННАЯ ПОЧТА</EmailTitle>
        <EntryFieldEmail onChange={onEmailChange} type={'email'} autoComplete="on" />
        <PasswordTitle>ПАРОЛЬ</PasswordTitle>
        <EntryFieldPassword onChange={onPasswordChange} type={'password'} autoComplete="on" />
        {!disable ? (
          <ButtonAuthentication disabled={disable} onClick={getUserData}>
            ВОЙТИ
          </ButtonAuthentication>
        ) : (
          <ButtonAuthPreload disabled={disable}>
            <PreloadLine className="line1" />
            <PreloadLine className="line2" />
            <PreloadLine className="line3" />
          </ButtonAuthPreload>
        )}
      </WindowAuthorizationAccount>
    </div>
  );
};
