import { StyledMenu } from './styles';
import { Link } from 'react-router-dom';
import React from 'react';

const Menu = ({ open, setOpen }: { open: boolean; setOpen?: any }) => {
  return (
    <StyledMenu open={open}>
      <Link to="/" onClick={() => setOpen(!open)}>
        Главная
      </Link>
      <Link to="/textbook" onClick={() => setOpen(!open)}>
        Учебник
      </Link>
      <Link to="/games" onClick={() => setOpen(!open)}>
        Мини-игры
      </Link>
      <Link to="/statistic" onClick={() => setOpen(!open)}>
        Статистика
      </Link>
    </StyledMenu>
  );
};
export default Menu;
