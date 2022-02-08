import styled from 'styled-components';
import { baseTheme } from '../../utils';

export const TextbookStyled = styled.section`
  background-color: ${baseTheme.colors.bg};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 50px 0 100px;
`;

export const BooksListStyled = styled.ul`
  padding: 0;
  margin: 0;
  width: 100%;
  align-items: center;
  justify-items: center;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(490px, auto));
  gap: 22px;
`;

export const ItemBookStyled = styled.li`
  list-style-type: none;
  display: inline-block;
  position: relative;

  img {
    display: inline-block;
  }

  a {
    display: inline-block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
    font-size: 26px;
    color: ${baseTheme.colors.bg};
  }

  a > img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
  }
`;
