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
  &:hover {
    color: #5984e2;
  }
`;
