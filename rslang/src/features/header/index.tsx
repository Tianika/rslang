/* eslint-disable @typescript-eslint/no-var-requires */
import { FC } from 'react';
import styled from 'styled-components';

// import logo from '../../assets/logo.png';
const logo = require('../../assets/icons/logo.png');
const userIcon = require('../../assets/icons/user-icon.png');

const HeaderEl = styled.header`
  max-width: 962px;
  margin: 0 auto;
  min-height: 82px;
  background-color: #fff;
  font-size: 26px;
  padding: 10px 0;
`;

const HeaderFlexWrapEl = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HeaderLeftSideBlock = styled.div`
  display: flex;
  align-items: center;
`;

const Ul = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const Li = styled.li`
  display: inline-block;
  margin-left: 30px;
`;

const Header: FC = () => {
  return (
    <>
      <HeaderEl>
        <HeaderFlexWrapEl>
          <HeaderLeftSideBlock>
            <img src={logo} alt={logo} width={69} height={72} />
            <Ul>
              <Li>Главная</Li>
              <Li>Учебник</Li>
              <Li>Мини-игры</Li>
              <Li>Статистика</Li>
            </Ul>
          </HeaderLeftSideBlock>
          <img src={userIcon} alt="user-icon" width={60} height={60} />
        </HeaderFlexWrapEl>
      </HeaderEl>
    </>
  );
};

export default Header;
