/* eslint-disable @typescript-eslint/no-var-requires */
import { FC } from 'react';
import { Link } from 'react-router-dom';

import { StyledHeader, Wrapper, LeftSideBlock, List, ListItem } from './styles';

// import logo from '../../assets/logo.png';
// import userIcon from '../../assets/icons/user-icon.png';
const logo = require('../../assets/icons/logo.png');
const userIcon = require('../../assets/icons/user-icon.png');

const Header: FC = () => {
  return (
    <StyledHeader>
      <Wrapper>
        <LeftSideBlock>
          <img src={logo} alt={logo} width={69} height={72} />
          <List>
            <ListItem>
              <Link to="/">Главная</Link>
            </ListItem>
            <ListItem>
              <Link to="/">Учебник</Link>
            </ListItem>
            <ListItem>
              <Link to="/">Мини-игры</Link>
            </ListItem>
            <ListItem>
              <Link to="/">Статистика</Link>
            </ListItem>
          </List>
        </LeftSideBlock>
        <img src={userIcon} alt="user-icon" width={60} height={60} />
      </Wrapper>
    </StyledHeader>
  );
};

export default Header;
