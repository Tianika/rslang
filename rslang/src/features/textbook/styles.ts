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
  padding: 20px;
  margin: 0;
  width: 90%;
  align-items: center;
  justify-items: center;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(490px, auto));
  gap: 22px;

  li:last-child {
    display: ${localStorage.getItem('rslangUserName') ? '' : 'none'};
    a {
      font-size: 18px;
    }
  }
`;

export const ItemBookStyled = styled.li`
  list-style-type: none;
  display: inline-block;
  position: relative;
  transition: 1s;

  &:hover {
    transform: rotate(360deg);
  }
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

    &:hover > img {
      border-radius: 12px;
      border: 10px solid #fff;
      transition: border 0.3s;
    }
  }

  a > img {
    position: absolute;
    top: 50%;
    left: 45%;
    transform: translate(-50%, -50%);
    z-index: -1;

    &:hover {
      border-radius: 12px;
      border: 10px solid #fff;
    }
  }
`;
