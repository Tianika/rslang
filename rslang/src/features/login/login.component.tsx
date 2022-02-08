import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { statusSelector, userSelector } from './login.selectors';
import { fetchLoginAction } from './login.saga';
import { loginActions } from './login.slice';
import {
  WindowAuthorizationAccount,
  ButtonAuthentication,
  EntryFieldEmail,
  EntryFieldPassword,
  PasswordTitle,
  EmailTitle,
  PreloadLine
} from './styles';
import { AccountProps } from '../../utils';

const { changeEmail, changePassword } = loginActions;

export const Login: React.FC = (props) => {
  const dispatch = useAppDispatch();

  const login = useAppSelector(userSelector);
  const status = useAppSelector(statusSelector);

  //вкл-выкл кнопку при отправке запроса
  const [disable, setDisable] = useState(false);
  const toggleDisable = () => {
    setDisable(!disable);
  };

  //отслеживаем изменение полей ввода
  const onEmailChange: AccountProps['onEmailChange'] = (event) => {
    const value = event.target.value;
    dispatch(changeEmail(value));
  };

  const onPasswordChange: AccountProps['onPasswordChange'] = (event) => {
    const value = event.target.value;
    dispatch(changePassword(value));
  };

  //включаем кнопку при ошибке логина
  useEffect(() => {
    if (disable && status.status === 'Error') {
      toggleDisable();
    }
  }, [status]);

  //запрос
  const fetchLogin = () => {
    toggleDisable();
    dispatch(fetchLoginAction(login));
  };

  const PreloadDiv: React.FC = () => {
    return (
      <>
        <PreloadLine className="line1" />
        <PreloadLine className="line2" />
        <PreloadLine className="line3" />
      </>
    );
  };

  return (
    <div>
      <WindowAuthorizationAccount>
        <EmailTitle>ЭЛЕКТРОННАЯ ПОЧТА</EmailTitle>
        <EntryFieldEmail onChange={onEmailChange} type={'email'} autoComplete="on" />
        <PasswordTitle>ПАРОЛЬ</PasswordTitle>
        <EntryFieldPassword onChange={onPasswordChange} type={'password'} autoComplete="on" />
        <ButtonAuthentication disabled={disable} onClick={fetchLogin}>
          {!disable ? 'ВОЙТИ' : <PreloadDiv />}
        </ButtonAuthentication>
      </WindowAuthorizationAccount>
    </div>
  );
};
