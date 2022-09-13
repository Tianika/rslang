import styled from 'styled-components';
import { baseTheme } from '../../utils';

export const GameTimer = styled.div`
  position: absolute;
  right: Calc(12.5vw - 75px);
  top: Calc(50vh - 200px);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 1px solid ${baseTheme.colors.blue};
  text-align: center;
  font-size: 60px;
  color: ${baseTheme.colors.blue};
  @media (max-width: 1000px) {
    right: Calc(12.5vw - 28px);
    top: Calc(50vh - 435px);
    width: 70px;
    height: 70px;
    font-size: 30px;
  }
`;
