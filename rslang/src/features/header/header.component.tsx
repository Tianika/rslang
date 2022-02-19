import { FC } from 'react';
import { Link } from 'react-router-dom';

import {
  StyledHeader,
  Wrapper,
  LeftSideBlock,
  List,
  ListItem,
  RigthSideBlock,
  UserName,
  Logout
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

const Header: FC = () => {
  return (
    <StyledHeader>
      <Wrapper>
        <LeftSideBlock>
          <img src={logo} alt={logo} width={40} height={40} />
          <List>
            <ListItem>
              <Link to="/">Главная</Link>
            </ListItem>
            <ListItem>
              <Link to="/textbook">Учебник</Link>
              <ul>
                <li>
                  <Link to={'textbook/wordspage?group=0&page=0'}>Раздел №1</Link>
                </li>
                <li>
                  <Link to={'textbook/wordspage?group=1&page=0'}>Раздел №2</Link>
                </li>
                <li>
                  <Link to={'textbook/wordspage?group=2&page=0'}>Раздел №3</Link>
                </li>
                <li>
                  <Link to={'textbook/wordspage?group=3&page=0'}>Раздел №4</Link>
                </li>
                <li>
                  <Link to={'textbook/wordspage?group=4&page=0'}>Раздел №5</Link>
                </li>
                <li>
                  <Link to={'textbook/wordspage?group=5&page=0'}>Раздел №6</Link>
                </li>
              </ul>
            </ListItem>
            <ListItem>
              <Link to="/games">Мини-игры</Link>
              <ul>
                <li style={{ backgroundColor: '#84DBFF' }}>
                  <Link to={'/games/audio'}>Аудиовызов</Link>
                </li>
                <li style={{ backgroundColor: '#FF7058' }}>
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
