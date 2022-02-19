import styled from 'styled-components';
import { baseTheme } from '../../utils';
export const StyledHeader = styled.header`
  min-width: 962px;
  margin: 0 auto;
  min-height: 50px;
  background-color: ${baseTheme.colors.bg};
  font-size: 26px;
  padding: 10px 10px 0 10px;
  border-bottom: 1px solid ${baseTheme.colors.secondary};
  width: 100%;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LeftSideBlock = styled.div`
  display: flex;
  align-items: center;
`;

export const List = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

export const ListItem = styled.li`
  display: inline-block;
  margin-left: 30px;
  transition: 1s;
  font-size: 22px;
  position: relative;
  z-index: 100;

  & > ul {
    position: absolute;
    top: 19px;
    background-color: transparent;
    min-width: 150px;
    left: -35px;
    padding-top: 19px;
    z-index: 50;
    min-height: 150px;
    margin-bottom: 5px;

    display: none;

    li:nth-child(2) {
      background-color: #ffa901;
    }

    li:nth-child(3) {
      background-color: #ffe320;
    }

    li:nth-child(4) {
      background-color: #70af46;
    }
    li:nth-child(5) {
      background-color: #6dc3ff;
    }
    li:last-child {
      background-color: #ba2dfc;
    }

    li {
      padding: 15px;
      min-width: 142px;
      height: 40px;
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;

      background: #ff6849;
      border-radius: 13px;
      text-align: center;
    }
  }

  &:nth-child(3) {
    ul li:first-child {
      background-color: #84dbff;
    }
    ul li:last-child {
      background-color: #ff7058;
    }
  }

  &:hover {
    color: #5984e2;

    & > ul {
      display: block;
    }
  }
`;

export const RigthSideBlock = styled.div`
  display: flex;
  align-items: center;
`;

export const UserName = styled.div`
  text-align: center;
  padding: 0 10px;
`;

export const Logout = styled.button`
  height: 50px;
  width: 50px;
  background-color: ${baseTheme.colors.bg};
  border: none;
  cursor: pointer;

  img {
    transition: 0.5s;
    &:hover {
      height: 45px;
      width: 45px;
    }
  }
`;

// export const StyledDropDownSection = styled.ul`
//   position: absolute;
//   top: 40px;
// `;
