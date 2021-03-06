import React, { useCallback, useEffect, useState } from 'react';
import {
  EntryFieldEmail,
  EntryFieldPassword,
  PasswordTitle,
  EmailTitle,
  TabEntrance,
  ContainerButton,
  TabRecord,
  RecordTitle,
  WindowRecordAccount,
  ButtonRecord,
  PreloadLine,
  ButtonCloseErrorWindow,
  ErrorWindow
} from '../login/styles';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { newUserSelector, statusSelector } from './signup.selector';
import { signupActions } from './signup.slice';
import { fetchSignupAction } from './signup.saga';
import { AccountProps } from '../../utils';

//получаем экшены
const { changeName, changeEmail, changePassword } = signupActions;

export const Signup: React.FC = () => {
  const dispatch = useAppDispatch();

  //получаем данные для fetchSignupAction
  const signup = useAppSelector(newUserSelector);

  //получаем статус соединения с сервером
  const status = useAppSelector(statusSelector);

  //вкл-выкл кнопку при отправке запроса
  const [disable, setDisable] = useState(false);
  const [open, setOpen] = useState(false);

  const toggleDisable = useCallback(() => {
    setDisable(!disable);
  }, [disable]);

  //функции для отслеживания изменений
  const onNameChange: AccountProps['onNameChange'] = (event) => {
    const value = event.target.value;
    dispatch(changeName(value));
  };

  const onEmailChange: AccountProps['onEmailChange'] = (event) => {
    const value = event.target.value;
    dispatch(changeEmail(value));
  };

  const onPasswordChange: AccountProps['onPasswordChange'] = (event) => {
    const value = event.target.value;
    dispatch(changePassword(value));
  };

  //включаем кнопку при ошибке регистрации
  useEffect(() => {
    if (disable && status.status === 'Error') {
      setOpen(true);
      toggleDisable();
    }
  }, [status, disable, toggleDisable]);

  //запрос
  const fetchSignup = () => {
    toggleDisable();
    dispatch(fetchSignupAction(signup));
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
            (document.querySelectorAll('.inputValue')[2] as HTMLInputElement).value = '';
          }}
        />
        <p>Некорректный логин или пароль</p>
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
      <WindowRecordAccount>
        <RecordTitle>ИМЯ</RecordTitle>
        <EntryFieldEmail
          className="inputValue"
          onChange={onNameChange}
          type={'text'}
          autoComplete="on"
          placeholder="Имя"
        />
        <EmailTitle>ЭЛЕКТРОННАЯ ПОЧТА</EmailTitle>
        <EntryFieldEmail
          onChange={onEmailChange}
          type={'email'}
          autoComplete="on"
          className="inputValue"
          placeholder="Email"
        />
        <PasswordTitle>ПАРОЛЬ</PasswordTitle>
        <EntryFieldPassword
          onChange={onPasswordChange}
          type={'password'}
          autoComplete="on"
          className="inputValue"
          placeholder="Не менее 8 символов"
        />
        <ButtonRecord onClick={fetchSignup}>
          {!disable ? 'ЗАРЕГИСТРИРОВАТЬСЯ' : <PreloadDiv />}
        </ButtonRecord>
      </WindowRecordAccount>
    </div>
  );
};
