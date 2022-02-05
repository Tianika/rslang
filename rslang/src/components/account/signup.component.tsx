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

type RecordProps = {
  onEmailChange: (value: string) => void;
  onPasswordChange: (value: string) => void;
};

export const Signup: React.FC = (props) => (
  <div style={{ paddingTop: '70px' }}>
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
      <EntryFieldEmail type={'text'} autoComplete="on" />
      <EmailTitle>ЭЛЕКТРОННАЯ ПОЧТА</EmailTitle>
      <EntryFieldEmail type={'email'} autoComplete="on" />
      <PasswordTitle>ПАРОЛЬ</PasswordTitle>
      <EntryFieldPassword type={'password'} autoComplete="on" />
      <ButtonRecord>ЗАРЕГИСТРИРОВАТЬСЯ</ButtonRecord>
    </WindowRecordAccount>
  </div>
);
