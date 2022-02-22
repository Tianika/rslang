import styled from 'styled-components';
import { GameElement } from './types';

export const BlockGame = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 50rem;
`;
export const BlockGameElem = styled.section<GameElement>`
  background: ${(props) => (props.colorSelection === '/games/audio' ? '#6dc3ff' : '#ff6849')};
  width: 700px;
  height: 500px;
  transition: 1s;
  border-radius: 13px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    cursor: pointer;
    transform: scale(1.05);
    background: #ffffff;
    border: ${(props) =>
      props.colorSelection === '/games/audio' ? '1px solid #6dc3ff' : '1px solid #ff6849'};
    box-shadow: ${(props) =>
      props.colorSelection === '/games/audio'
        ? '4px 4px 8px 0 rgb(8, 101, 172)'
        : '14px 4px 8px 0 rgb(119, 50, 34)'};
  }
`;
