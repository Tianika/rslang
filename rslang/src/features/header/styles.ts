import styled from 'styled-components';

export const StyledHeader = styled.header`
  max-width: 962px;
  margin: 0 auto;
  min-height: 82px;
  background-color: #fff;
  font-size: 26px;
  padding: 10px 0;
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
`;
