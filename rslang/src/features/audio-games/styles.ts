import styled from 'styled-components';
import { baseTheme } from '../../utils';
import audioButton from '../../assets/svg/audioButton.svg';
import audioButtonMini from '../../assets/svg/audioButtonMini.svg';
import { BlockVisible, ImageAnswer } from './types';

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
  @media (max-width: 500px) {
    width: 90%;
  }
`;
export const TitleGame = styled.h1`
  font-size: 60px;
  color: #6dc3ff;
  font-weight: 100;
  border-bottom: 1px solid #ff6849;
  width: 80%;
  text-align: center;
  padding-bottom: 20px;
  @media (max-width: 500px) {
    font-size: 30px;
  }
`;
export const GameDescription = styled.p`
  font-size: 22px;
  font-weight: 100;
  @media (max-width: 500px) {
    font-size: 20px;
  }
`;
export const GameDescriptionElement = styled.li`
  margin-left: 20px;
  font-size: 22px;
  margin-bottom: 10px;
  @media (max-width: 500px) {
    font-size: 20px;
  }
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

export const ButtonAudio = styled.div<BlockVisible>`
  background-image: url(${audioButton});
  display: ${(props) => (props.visible ? 'flex' : 'none')};
  width: 300px;
  height: 300px;
  border-radius: 50%;
  transition: 1s;
  margin: 40px;
  &:hover {
    box-shadow: 0 0 24px 0 ${baseTheme.colors.blue};
    transform: scale(1.1);
  }
  @media (max-width: 500px) {
    margin: 5px 40px;
    width: 200px;
    height: 200px;
    background-size: cover;
  }
`;
export const WindowAnswer = styled.div<BlockVisible>`
  margin: 40px;
  border: 1px solid ${baseTheme.colors.blue};
  width: 500px;
  height: 300px;
  border-radius: 13px;
  display: ${(props) => (props.visible ? 'none' : 'flex')};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 500px) {
    width: 360px;
    height: 270px;
    margin: 10px 40px;
  }
`;
export const ButtonAudioMini = styled.div`
  background-image: url(${audioButtonMini});
  width: 50px;
  height: 50px;
  border-radius: 50%;
  transition: 1s;
  margin-right: 10px;
  &:hover {
    box-shadow: 0 0 24px 0 ${baseTheme.colors.blue};
    transform: scale(1.1);
  }
`;
export const ImageWindowAnswer = styled.img<ImageAnswer>`
  background-image: url(${(props) => props.linkImage});
  object-fit: cover;
  border: 1px solid ${baseTheme.colors.blue};
  width: 200px;
  height: 200px;
  border-radius: 50%;
  display: flex;
`;
export const WindowAnswerWord = styled.p`
  font-size: 22px;
  @media (max-width: 500px) {
    font-size: 20px;
  }
`;
export const WindowAnswerWordBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const BlockButtonAnswer = styled.div`
  width: 80%;
  margin-top: 40px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  @media (max-width: 500px) {
    width: 100%;
    margin-top: 0;
    margin-bottom: 40px;
  }
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
  @media (max-width: 500px) {
    width: 150px;
    margin: 15px;
    font-size: 18px;
  }
`;
export const ButtonNextQuestions = styled.button`
  &:hover {
    cursor: pointer;
  }
`;
export const StyledButton = styled(InitialStateButtonAnswer)<{
  clickedButton: boolean;
  isAnswerCorrect: boolean;
}>`
  background: ${(props) => props.clickedButton && props.isAnswerCorrect && 'green'};
  background: ${(props) => props.clickedButton && !props.isAnswerCorrect && 'red'};
  &:hover {
    background: ${(props) => props.clickedButton && props.isAnswerCorrect && 'green'};
    background: ${(props) => props.clickedButton && !props.isAnswerCorrect && 'red'};
  }
`;
