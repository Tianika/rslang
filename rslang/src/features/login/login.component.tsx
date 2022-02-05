import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { userSelector } from './login.selectors';
import { fetchLoginAction } from './login.saga';
import { loginActions } from './login.slice';
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
import { AccountProps } from './types';

const { changeEmail, changePassword } = loginActions;

export const Login: React.FC = (props) => {
  const dispatch = useAppDispatch();

  const login = useAppSelector(userSelector);

  const [disable, setDisable] = useState(false);

  const toggleDisable = () => {
    setDisable(!disable);
  };

  const onEmailChange: AccountProps['onEmailChange'] = (event) => {
    const value = event.target.value;
    dispatch(changeEmail(value));
  };

  const onPasswordChange: AccountProps['onPasswordChange'] = (event) => {
    const value = event.target.value;
    dispatch(changePassword(value));
  };

  // const getUserData = async () => {
  //   toggleDisable();

  //   try {
  //     const rawResponse = await fetch('https://learnwords-team17.herokuapp.com/signin', {
  //       method: 'POST',
  //       headers: {
  //         Accept: 'application/json',
  //         'Content-Type': 'application/json'
  //       },

  //       body: JSON.stringify()
  //     });

  //     switch (rawResponse.status) {
  //       case 200:
  //         const content = await rawResponse.json();

  //         localStorage.rslangUserName = content.name;
  //         localStorage.rslangUserId = content.userId;
  //         localStorage.rslangUserToken = content.token;
  //         localStorage.rslangUserRefreshToken = content.refreshToken;

  //         location.href = location.origin;
  //         break;

  //       case 403:
  //         console.log('неверный пароль');
  //         break;

  //       case 404:
  //         console.log('пользователь не найден');

  //         break;

  //       default:
  //         console.log('попробуйте еще раз');
  //     }
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  return (
    <div>
      <WindowAuthorizationAccount>
        <EmailTitle>ЭЛЕКТРОННАЯ ПОЧТА</EmailTitle>
        <EntryFieldEmail onChange={onEmailChange} type={'email'} autoComplete="on" />
        <PasswordTitle>ПАРОЛЬ</PasswordTitle>
        <EntryFieldPassword onChange={onPasswordChange} type={'password'} autoComplete="on" />
        {!disable ? (
          <ButtonAuthentication
            disabled={disable}
            onClick={() => dispatch(fetchLoginAction(login))}
          >
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
