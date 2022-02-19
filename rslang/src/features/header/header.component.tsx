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

const menuHeaderData = [
  {
    firstSectionLink: '0',
    firstTitle: 'Раздел №1'
  },
  {
    secondSectionLink: '1',
    secondTitle: 'Раздел №2'
  },
  {
    thirdSectionLink: '2',
    thirdTitle: 'Раздел №3'
  },
  {
    fourthSectionLink: '3',
    fourthTitle: 'Раздел №4'
  },
  {
    fifthSectionLink: '4',
    fifthTitle: 'Раздел №5'
  },
  {
    sixthSectionLink: '5',
    sixthTitle: 'Раздел №5'
  }
];

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
                {menuHeaderData.map((item, index) => {
                  return (
                    <li key={index}>
                      <Link to={`textbook/wordspage?group=${item.firstSectionLink}&page=0`}>
                        {item.firstTitle}
                      </Link>
                      <Link to={`textbook/wordspage?group=${item.secondSectionLink}&page=0`}>
                        {item.secondTitle}
                      </Link>
                      <Link to={`textbook/wordspage?group=${item.thirdSectionLink}&page=0`}>
                        {item.thirdTitle}
                      </Link>
                      <Link to={`textbook/wordspage?group=${item.fourthSectionLink}&page=0`}>
                        {item.fourthTitle}
                      </Link>
                      <Link to={`textbook/wordspage?group=${item.fifthSectionLink}&page=0`}>
                        {item.fifthTitle}
                      </Link>
                      <Link to={`textbook/wordspage?group=${item.sixthSectionLink}&page=0`}>
                        {item.sixthTitle}
                      </Link>
                    </li>
                  );
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
