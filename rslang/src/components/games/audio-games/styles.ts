import styled from 'styled-components';

export const BlockInfo = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #6dc3ff;
  margin: 50px auto;
  border-radius: 13px;
  padding: 40px 50px;
  background: #fff;
`;
export const TitleGame = styled.h1`
  font-size: 60px;
  color: #6dc3ff;
  font-weight: 100;
  border-bottom: 1px solid #ff6849;
  width: 80%;
  text-align: center;
  padding-bottom: 20px;
`;
export const GameDescription = styled.p`
  font-size: 22px;
  font-weight: 100;
`;
export const GameDescriptionElement = styled.li`
  margin-left: 20px;
  font-size: 22px;
  margin-bottom: 10px;
`;
export const BlockSelect = styled.div`
  display: flex;
  align-items: center;
`;
export const MenuDifficultySelection = styled.fieldset`
  border-radius: 6px;
  border: 1px solid #6dc3ff;
  margin: 20px;
`;
export const MenuDifficultySelectionTitle = styled.legend`
  color: #ff6849;
`;
export const ChoiceDifficulty = styled.select`
  border: none;
`;

export const ButtonPlay = styled.button`
  background: #6dc3ff;
  color: #ffffff;
  font-size: 22px;
  border: none;
  border-radius: 6px;
  width: 113px;
  height: 48px;
  margin-top: 6px;
  transition: 1s;
  &:hover {
    background: #70af46;
  }
`;
