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
} from './styles';
import { Link } from 'react-router-dom';

type SignupProps = {
  onNameChange: (value: string) => void;
  onEmailChange: (value: string) => void;
  onPasswordChange: (value: string) => void;
};

type User = {
  name: string;
  email: string;
  password: string;
};

const state: User = {
  name: '',
  email: '',
  password: ''
};

const saveName = (event: React.ChangeEvent<HTMLInputElement>): void => {
  const value = event.target.value;
  state.name = value;
};

const saveEmail = (event: React.ChangeEvent<HTMLInputElement>): void => {
  const value = event.target.value;
  state.email = value;
};

const savePassword = (event: React.ChangeEvent<HTMLInputElement>): void => {
  const value = event.target.value;
  state.password = value;
};

const createNewUser = async (user: User) => {
  const rawResponse = await fetch('https://learnwords-team17.herokuapp.com/users', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  });
  const content = await rawResponse.json();

  console.log(content);
};

export const Signup: React.FC = (props) => (
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
      <EntryFieldEmail onChange={saveName} type={'text'} autoComplete="on" />
      <EmailTitle>ЭЛЕКТРОННАЯ ПОЧТА</EmailTitle>
      <EntryFieldEmail onChange={saveEmail} type={'email'} autoComplete="on" />
      <PasswordTitle>ПАРОЛЬ</PasswordTitle>
      <EntryFieldPassword onChange={savePassword} type={'password'} autoComplete="on" />
      <ButtonRecord onClick={() => createNewUser(state)}>ЗАРЕГИСТРИРОВАТЬСЯ</ButtonRecord>
    </WindowRecordAccount>
  </div>
);
