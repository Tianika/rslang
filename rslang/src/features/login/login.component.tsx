import React, { useCallback, useEffect, useState } from 'react';
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
  PreloadLine,
  ErrorWindow,
  ButtonCloseErrorWindow
} from './styles';
import { AccountProps, LoadingState } from '../../utils';
import { Link } from 'react-router-dom';
import { ContainerButton, TabEntrance, TabRecord } from '../../features/login/styles';

const { changeEmail, changePassword } = loginActions;

export const Login: React.FC = () => {
  const dispatch = useAppDispatch();

  const login = useAppSelector(userSelector);
  const status = useAppSelector(statusSelector);

  //вкл-выкл кнопку при отправке запроса
  const [disable, setDisable] = useState(false);
  const [open, setOpen] = useState(false);

  const toggleDisable = useCallback(() => {
    setDisable(!disable);
  }, [disable]);

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
    if (disable && status.status === LoadingState.Error) {
      setOpen(true);
      toggleDisable();
    }
  }, [status, disable, toggleDisable]);

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
      <ErrorWindow open={open}>
        <ButtonCloseErrorWindow
          onClick={() => {
            setOpen(false);
            (document.querySelectorAll('.inputValue')[0] as HTMLInputElement).value = '';
            (document.querySelectorAll('.inputValue')[1] as HTMLInputElement).value = '';
          }}
        />
        <p>Ошибка введенных данных.</p>
        <p>Повторите попытку</p>
      </ErrorWindow>
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
        <EntryFieldEmail
          className="inputValue"
          onChange={onEmailChange}
          type={'email'}
          autoComplete="on"
          placeholder="Email"
        />
        <PasswordTitle>ПАРОЛЬ</PasswordTitle>
        <EntryFieldPassword
          className="inputValue"
          onChange={onPasswordChange}
          type={'password'}
          autoComplete="on"
          placeholder="Не менее 8 символов"
        />
        <ButtonAuthentication disabled={disable} onClick={fetchLogin}>
          {!disable ? 'ВОЙТИ' : <PreloadDiv />}
        </ButtonAuthentication>
      </WindowAuthorizationAccount>
    </div>
  );
};
