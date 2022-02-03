import React from 'react';
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
import { NewUser, AccountProps } from './types';

const state: NewUser = {
  name: '',
  email: '',
  password: ''
};

const onNameChange: AccountProps['onNameChange'] = (event) => {
  const value = event.target.value;
  state.name = value;
};

const onEmailChange: AccountProps['onEmailChange'] = (event) => {
  const value = event.target.value;
  state.email = value;
};

const onPasswordChange: AccountProps['onPasswordChange'] = (event) => {
  const value = event.target.value;
  state.password = value;
};

const createNewUser = async (user: NewUser) => {
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
      <EntryFieldEmail onChange={onNameChange} type={'text'} autoComplete="on" />
      <EmailTitle>ЭЛЕКТРОННАЯ ПОЧТА</EmailTitle>
      <EntryFieldEmail onChange={onEmailChange} type={'email'} autoComplete="on" />
      <PasswordTitle>ПАРОЛЬ</PasswordTitle>
      <EntryFieldPassword onChange={onPasswordChange} type={'password'} autoComplete="on" />
      <ButtonRecord onClick={() => createNewUser(state)}>ЗАРЕГИСТРИРОВАТЬСЯ</ButtonRecord>
    </WindowRecordAccount>
  </div>
);
