import styled from 'styled-components';
import { baseTheme } from '../../utils';
import burgerOpen from '../../assets/svg/burgerOpen.svg';
import { StyledBurgerOpen, StyledMenuOpen } from './types';

export const StyledHeader = styled.header`
  min-width: 962px;
  margin: 0 auto;
  min-height: 50px;
  background-color: ${baseTheme.colors.bg};
  font-size: 26px;
  padding: 10px 10px 0 10px;
  border-bottom: 1px solid ${baseTheme.colors.secondary};
  width: 100%;
  @media (max-width: 1000px) {
    min-width: 360px;
  }
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
  @media (max-width: 1000px) {
    display: none;
  }
`;
export const Logo = styled.img`
  display: flex;
  @media (max-width: 1000px) {
    display: none;
  }
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
    @media (max-width: 1000px) {
      padding-top: 69px;
    }

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

    li:nth-child(6) {
      background-color: #ba2dfc;
    }

    li:nth-child(7) {
      background-color: ${baseTheme.colors.sevenBookColor};
      font-size: 18px;
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

export const StyledMenu = styled.nav<StyledMenuOpen>`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background: #b8ddff;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};
  height: 100vh;
  text-align: left;
  padding: 3rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  z-index: 999;
  @media (max-width: 576px) {
    width: 100%;
  }

  a {
    font-size: 1rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: #ffffff;
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: 576px) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: #343078;
    }
  }
`;
export const StyledBurger = styled.button<StyledBurgerOpen>`
  position: absolute;
  top: 15px;
  left: 1rem;
  display: none;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 1000;

  @media (max-width: 1000px) {
    display: flex;
  }
  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: ${({ open }) => (open ? '#ffffff' : '#6dc3ff')};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
    z-index: 1000;
    :first-child {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? '0' : '1')};
      transform: ${({ open }) => (open ? 'translateX(20px)' : 'translateX(0)')};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`;
