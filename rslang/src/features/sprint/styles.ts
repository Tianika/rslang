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
  cursor: pointer;
  &:hover {
    background: #70af46;
  }
`;

export const SprintGameContainer = styled.div`
  position: relative;
  margin-bottom: 80px;
`;

export const GameScore = styled.div`
  text-align: center;
  font-size: 46px;
  margin-top: 20px;
`;

export const BlockGame = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #6dc3ff;
  margin: 20px auto;
  border-radius: 13px;
  padding: 0 0 30px;
  background: #fff;
`;

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
  border: 1px solid #6dc3ff;
  text-align: center;
  font-size: 60px;
  color: #6dc3ff;
`;

export const GameHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  border-radius: 13px 13px 0 0;
  padding-top: 10px;
  margin-bottom: 30px;
`;

export const StyledCheckboxesContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  margin: 10px 0;
`;

export const EmptyCheckbox = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 2px solid #c4c4c4;
  margin: 0 10px;
`;

export const ScorePerAnswer = styled.div`
  width: 300px;
  text-align: center;
  font-size: 24px;
  padding-bottom: 30px;
`;

export const StyledCheckedCheckbox = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin: 0 10px;
`;

export const StyledLevelsContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  text-align: center;
  width: 250px;
  height: 140px;
`;

export const Level = styled.div`
  position: absolute;
  text-align: center;
  width: 115px;
  height: 160px;
  &.book1 {
    left: 0;
  }
  &.book2 {
    left: 45px;
  }
  &.book3 {
    left: 90px;
  }
  &.book4 {
    left: 135px;
  }
`;

export const Shelf = styled.div`
  width: 350px;
  height: 16px;
  background-color: #008000;
  margin-bottom: 30px;
  border: 2px solid #000;
  border-radius: 3px;
`;

export const WordText = styled.div`
  font-size: 47px;
  margin-bottom: 40px;
`;

export const Translation = styled.div`
  font-size: 30px;
  margin-bottom: 50px;
`;

export const AnswersButtonsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
`;

export const AnswerButton = styled.button`
  width: 200px;
  height: 60px;
  font-size: 24px;
  border-radius: 13px;
  border: none;
  color: #fff;
  cursor: pointer;
  &.wrong {
    background-color: #ff6849;
  }
  &.right {
    background-color: #70af46;
  }
`;

export const ArrowsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  margin-bottom: 30px;
`;

export const Arrow = styled.div`
  display: flex;
  justify-content: center;
  width: 110px;
  height: 20px;
`;
