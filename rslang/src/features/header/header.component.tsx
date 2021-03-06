import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import {
  StyledHeader,
  Wrapper,
  LeftSideBlock,
  List,
  ListItem,
  RigthSideBlock,
  UserName,
  Logout,
  Logo
} from './styles';

import logo from '../../assets/icons/logo.svg';
import userIcon from '../../assets/icons/user-icon.svg';
import logout from '../../assets/svg/logout.svg';

const logoutHandle = () => {
  localStorage.removeItem('rslangUserName');
  localStorage.removeItem('rslangUserId');
  localStorage.removeItem('rslangUserToken');
  localStorage.removeItem('rslangUserRefreshToken');

  location.href = location.origin;
};
import Burger from './burger.component';
import Menu from './menu.component';
import { checkVerification } from '../login/verification';

const menuHeaderData = [
  {
    sectionLink: '0',
    title: 'Раздел №1'
  },
  {
    sectionLink: '1',
    title: 'Раздел №2'
  },
  {
    sectionLink: '2',
    title: 'Раздел №3'
  },
  {
    sectionLink: '3',
    title: 'Раздел №4'
  },
  {
    sectionLink: '4',
    title: 'Раздел №5'
  },
  {
    sectionLink: '5',
    title: 'Раздел №6'
  },
  {
    sectionLink: '6',
    title: 'Сложные слова'
  }
];

const Header: FC = () => {
  const [open, setOpen] = React.useState(false);
  const node = React.useRef() as React.MutableRefObject<HTMLInputElement>;

  if (localStorage.userId) {
    checkVerification();
  }

  return (
    <StyledHeader>
      <Wrapper>
        <LeftSideBlock>
          <Logo src={logo} alt={logo} width={40} height={40} />
          <div ref={node}>
            <Burger open={open} setOpen={setOpen} />
            <Menu open={open} setOpen={setOpen} />
          </div>
          <List>
            <ListItem>
              <Link to="/">Главная</Link>
            </ListItem>
            <ListItem>
              <Link to="/textbook">Учебник</Link>
              <ul>
                {menuHeaderData.map((item, index) => {
                  return index < 6 ? (
                    <li key={item.sectionLink}>
                      <Link
                        key={item.title}
                        to={`textbook/wordspage?group=${item.sectionLink}&page=0`}
                      >
                        {item.title}
                      </Link>
                    </li>
                  ) : localStorage.rslangUserId && index == 6 ? (
                    <li key={item.sectionLink}>
                      <Link
                        key={item.title}
                        to={`textbook/wordspage?group=${item.sectionLink}&page=0`}
                      >
                        {item.title}
                      </Link>
                    </li>
                  ) : null;
                })}
              </ul>
            </ListItem>
            <ListItem>
              <Link to="/games">Мини-игры</Link>
              <ul>
                <li>
                  <Link to={'/games/audio'}>Аудиовызов</Link>
                </li>
                <li>
                  <Link to={'/games/sprint'}>Спринт</Link>
                </li>
              </ul>
            </ListItem>
            <ListItem>
              <Link to="/statistic">Статистика</Link>
            </ListItem>
          </List>
        </LeftSideBlock>
        <RigthSideBlock>
          <UserName>{localStorage.rslangUserName ?? null}</UserName>
          {!localStorage.rslangUserName ? (
            <Link to="/account/login">
              <img src={userIcon} alt="user-icon" width={40} height={40} />
            </Link>
          ) : null}
          {localStorage.rslangUserName ? (
            <Logout onClick={logoutHandle}>
              <img src={logout} alt={logout} width={40} height={40} />
            </Logout>
          ) : null}
        </RigthSideBlock>
      </Wrapper>
    </StyledHeader>
  );
};

export default Header;
