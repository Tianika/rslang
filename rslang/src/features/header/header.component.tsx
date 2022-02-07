import { FC } from 'react';
import { Link } from 'react-router-dom';

import { StyledHeader, Wrapper, LeftSideBlock, List, ListItem } from './styles';

import logo from '../../assets/icons/logo.svg';
import userIcon from '../../assets/icons/user-icon.svg';

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
              <Link to="/">Учебник</Link>
            </ListItem>
            <ListItem>
              <Link to="/games">Мини-игры</Link>
            </ListItem>
            <ListItem>
              <Link to="/statistic">Статистика</Link>
            </ListItem>
          </List>
        </LeftSideBlock>
        <Link to="/account/login">
          <img src={userIcon} alt="user-icon" width={40} height={40} />
        </Link>
      </Wrapper>
    </StyledHeader>
  );
};

export default Header;
