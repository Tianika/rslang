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
import { AccountProps } from '../login/types';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { newUserSelector } from './signup.selector';
import { signupActions } from './signup.slice';
import { fetchSignupAction } from './signup.saga';

const { changeName, changeEmail, changePassword } = signupActions;

export const Signup: React.FC = (props) => {
  const dispatch = useAppDispatch();

  const signup = useAppSelector(newUserSelector);

  const [disable, setDisable] = useState(false);

  const toggleDisable = () => {
    setDisable(!disable);
  };

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

  // const createNewUser = async () => {
  //   toggleDisable();
  //   try {
  //     const rawResponse = await fetch('https://learnwords-team17.herokuapp.com/users', {
  //       method: 'POST',
  //       headers: {
  //         Accept: 'application/json',
  //         'Content-Type': 'application/json'
  //       },
  //       body: JSON.stringify(state)
  //     });

  //     switch (rawResponse.status) {
  //       case 200:
  //         const content = await rawResponse.json();

  //         location.href = location.origin;
  //         break;

  //       case 417:
  //         console.log('пользователь уже есть в базе');
  //         break;

  //       case 422:
  //         console.log('некорректный логин или пароль');

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
