import { StyledMenu } from './styles';
import { Link } from 'react-router-dom';
import React from 'react';

const Menu = ({ open, setOpen }: { open: boolean; setOpen?: any }) => {
  return (
    <StyledMenu open={open}>
      <Link to="/">Главная</Link>
      <Link to="/textbook">Учебник</Link>
      <Link to="/games">Мини-игры</Link>
      <Link to="/statistic">Статистика</Link>
    </StyledMenu>
  );
};
export default Menu;
