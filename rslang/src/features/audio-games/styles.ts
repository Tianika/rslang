import styled from 'styled-components';
import { baseTheme } from '../../utils';
import audioButton from '../../assets/svg/audioButton.svg';

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

  &:focus {
    border: none;
  }
`;

export const ButtonPlay = styled.button`
  background: ${baseTheme.colors.blue};
  color: ${baseTheme.colors.bg};
  font-size: 22px;
  border: none;
  border-radius: 6px;
  width: 113px;
  height: 48px;
  margin-top: 6px;
  transition: 1s;

  &:hover {
    cursor: pointer;
    background: ${baseTheme.colors.green};
  }
`;

export const ButtonOptionAnswer = styled.div`
  background: ${baseTheme.colors.blue};
  color: ${baseTheme.colors.bg};
  font-size: 22px;
  border: none;
  border-radius: 6px;
  width: 113px;
  height: 48px;
  margin-top: 6px;
  transition: 1s;

  &:hover {
    background: ${baseTheme.colors.yellow};
  }
`;

export const ElemCorrectAnswer = styled.div`
  background: ${baseTheme.colors.green};
  color: ${baseTheme.colors.bg};
  font-size: 22px;
  border: none;
  border-radius: 6px;
  width: 113px;
  height: 48px;
  margin-top: 6px;
  transition: 1s;
`;

export const ElemWrongAnswer = styled.div`
  background: ${baseTheme.colors.red};
  color: ${baseTheme.colors.bg};
  font-size: 22px;
  border: none;
  border-radius: 6px;
  width: 113px;
  height: 48px;
  margin-top: 6px;
  transition: 1s;
`;

export const BlockGame = styled.div`
  flex-direction: column;
  display: flex;
  align-items: center;
`;

export const BlockIndicatorAnswer = styled.div`
  margin: 40px;
  width: 70%;
  display: flex;
  justify-content: space-evenly;
`;

export const InitialIndicatorAnswer = styled.span`
  border-radius: 50%;
  width: 25px;
  height: 25px;
  background: ${baseTheme.colors.gray};
  border: none;
`;

export const ButtonAudio = styled.div`
  background-image: url(${audioButton});
  width: 250px;
  height: 250px;
  border-radius: 50%;
  transition: 1s;
  margin-top: 40px;
  &:hover {
    box-shadow: 0 0 24px 0 ${baseTheme.colors.blue};
    transform: scale(1.1);
  }
`;
export const BlockButtonAnswer = styled.div`
  margin-top: 40px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
export const RightButtonAnswer = styled.button`
  border-radius: 13px;
  margin: 20px;
  color: ${baseTheme.colors.bg};
  width: 300px;
  height: 100px;
  background: ${baseTheme.colors.green};
  border: none;
`;
export const WrongButtonAnswer = styled.button`
  border-radius: 13px;
  margin: 20px;
  color: ${baseTheme.colors.bg};
  width: 300px;
  height: 100px;
  background: ${baseTheme.colors.red};
  border: none;
`;
export const InitialStateButtonAnswer = styled.button`
  border-radius: 13px;
  margin: 20px;
  color: ${baseTheme.colors.bg};
  width: 300px;
  height: 100px;
  font-size: ${baseTheme.fonts.mainParagraphSize};
  background: ${baseTheme.colors.blue};
  border: none;
  &:hover {
    background: ${baseTheme.colors.purple};
  }
`;
export const ButtonNextQuestions = styled.button`
  &:hover {
    cursor: pointer;
  }
`;
export const StyledButton = styled(InitialStateButtonAnswer)<{
  correct?: boolean;
  isAnswerChosen: boolean;
}>`
  background: ${(props) => !props.correct && props.isAnswerChosen && 'red'};
`;
