import styled from 'styled-components';
import { baseTheme } from '../../utils/theme';

export const BlockResult = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid ${baseTheme.colors.blue};
  margin: 20px auto;
  border-radius: 13px;
  background: ${baseTheme.colors.bg};
`;

export const TitleGame = styled.h1`
  font-size: 40px;
  line-height: 46px;
  color: ${baseTheme.colors.font};
  font-weight: 400;
  text-align: center;
`;

export const SubtitleGame = styled.div`
  font-size: 22px;
  line-height: 26px;
  font-weight: 400;
  color: ${baseTheme.colors.font};
  border-bottom: 1px solid ${baseTheme.colors.purple};
  width: 480px;
  text-align: center;
  padding: 10px 0 20px;
`;

export const Result = styled.span`
  font-size: 22px;
  font-weight: 400;
  color: ${baseTheme.colors.green};
`;

export const Content = styled.div`
  color: ${baseTheme.colors.font};
  width: 500px;
  padding-bottom: 20px;
`;

export const ResultBlock = styled.div`
  display: flex;
  flex-direction: column;
  color: ${baseTheme.colors.font};
  width: 500px;
  font-size: 22px;
  font-weight: 400;
  margin-bottom: 10px;
`;

export const ResultWrapper = styled.div`
  overflow-x: hidden;
  overflow-y: auto;
  max-height: 57vh;
  scrollbar-width: auto;
  scrollbar-color: ${baseTheme.colors.purple} #c4c4c4;
  margin: 10px 0;

  &::-webkit-scrollbar {
    height: auto;
    width: auto;
    border-radius: 50px;
  }
  &::-webkit-scrollbar-track {
    background: #c4c4c4;
    border-radius: 50px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${baseTheme.colors.purple};
    border-radius: 50px;
  }
`;

export const WordsTitle = styled.h4`
  display: flex;
  align-items: center;
  color: ${baseTheme.colors.font};
  font-size: 22px;
  line-height: 26px;
  font-weight: 400;
`;

export const RightWordsResult = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 22px;
  line-height: 26px;
  font-weight: 400;
  color: ${baseTheme.colors.bg};
  background-color: ${baseTheme.colors.green};
  width: 70px;
  height: 40px;
  border-radius: 50px;
  margin: 0 10px;
`;

export const ErrorWordsResult = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 22px;
  line-height: 26px;
  font-weight: 400;
  color: ${baseTheme.colors.bg};
  background-color: ${baseTheme.colors.red};
  width: 70px;
  height: 40px;
  border-radius: 50px;
  margin: 0 10px;
`;

export const WordContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;

export const SoundIcon = styled.button`
  width: 32px;
  height: 28px;
  margin-right: 20px;
  background-color: ${baseTheme.colors.bg};
  border: none;
  cursor: pointer;
`;

export const WordItem = styled.div`
  font-size: 22px;
  line-height: 26px;
  font-weight: 400;
  color: ${baseTheme.colors.font};
`;

export const TransriptionItem = styled.div`
  font-size: 20px;
  line-height: 26px;
  font-weight: 400;
  color: #c4c4c4;
  margin: 0 10px;
`;

export const TranslateItem = styled.div`
  font-size: 22px;
  line-height: 26px;
  font-weight: 400;
  color: ${baseTheme.colors.font};
`;

export const ExitButton = styled.button`
  display: block;
  float: right;
  right: 0;
  width: 146px;
  height: 50px;
  font-size: 22px;
  line-height: 26px;
  font-weight: 400;
  color: ${baseTheme.colors.bg};
  border-radius: 13px;
  border: none;
  background-color: ${baseTheme.colors.darkBlue};
  transition: 500ms;
  cursor: pointer;
  &:hover {
    background-color: ${baseTheme.colors.green};
  }
`;
