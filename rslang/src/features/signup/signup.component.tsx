import React, { useState } from 'react';
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
  ButtonRecord
} from '../login/styles';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { newUserSelector } from './signup.selector';
import { signupActions } from './signup.slice';
import { fetchSignupAction } from './signup.saga';
import { AccountProps } from '../../utils/types';

const { changeName, changeEmail, changePassword } = signupActions;

export const Signup: React.FC = (props) => {
  const dispatch = useAppDispatch();

  const signup = useAppSelector(newUserSelector);

  // const [disable, setDisable] = useState(false);

  // const toggleDisable = () => {
  //   setDisable(!disable);
  // };

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

  return (
    <div>
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
        <EntryFieldEmail onChange={onNameChange} type={'text'} autoComplete="on" />
        <EmailTitle>ЭЛЕКТРОННАЯ ПОЧТА</EmailTitle>
        <EntryFieldEmail onChange={onEmailChange} type={'email'} autoComplete="on" />
        <PasswordTitle>ПАРОЛЬ</PasswordTitle>
        <EntryFieldPassword onChange={onPasswordChange} type={'password'} autoComplete="on" />
        <ButtonRecord onClick={() => dispatch(fetchSignupAction(signup))}>
          ЗАРЕГИСТРИРОВАТЬСЯ
        </ButtonRecord>
      </WindowRecordAccount>
    </div>
  );
};
