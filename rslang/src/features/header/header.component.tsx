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
            </ListItem>
            <ListItem>
              <Link to="/games">Мини-игры</Link>
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
