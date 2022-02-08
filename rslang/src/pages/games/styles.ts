import styled from 'styled-components';

export const BlockGame = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 50rem;
`;
export const BlockGameAudio = styled.section`
  background: #6dc3ff;
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
    border: 1px solid #6dc3ff;
    box-shadow: 4px 4px 8px 0 rgb(8, 101, 172);
  }
`;
export const BlockGameSprint = styled.section`
  background: #ff6849;
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
    border: 1px solid #ff6849;
    box-shadow: 4px 4px 8px 0 rgb(119, 50, 34);
  }
`;
