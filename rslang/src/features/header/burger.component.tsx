import { StyledBurger } from './styles';

const Burger = ({ open, setOpen }: { open: boolean; setOpen?: any }) => {
  return (
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </StyledBurger>
  );
};
export default Burger;
