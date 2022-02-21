import styled, { keyframes } from 'styled-components';

export const BlockAnswer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
`;
const AnimationAnswerText = keyframes`
  0% {
    background-position: 0 50%
  }
  50% {
    background-position: 100% 50%
  }
  100% {
    background-position: 0 50%
  }
`;

export const AnswerText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 300px;
  font-size: 350px;
  color: gold;
  margin-top: 100px;
  background: linear-gradient(to right, red, orange, yellow, green, cyan, blue, violet);
  background-size: 400% 400%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-animation: rainbow 10s ease infinite;
  animation: ${AnimationAnswerText} 10s ease infinite;
  line-height: 25px;
`;
export const AnswerTextError = styled.p`
  color: #d6d6d6;
  font-size: 8vh;
  font-weight: bold;
  line-height: 10vh;
  max-width: 600px;
  position: relative;
  margin: 0;
  &:after {
    content: attr(data-p);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    color: transparent;
    text-shadow: 1px 1px 2px transparentize(#fff, 0.5);
  }
`;
export const TextDescription = styled.p`
  color: #d6d6d6;
  font-size: 20px;
  font-weight: bold;
  line-height: 10vh;
  max-width: 600px;
  position: relative;
  margin-top: 0;
  &:after {
    content: attr(data-p);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    color: transparent;
    text-shadow: 1px 1px 2px transparentize(#fff, 0.5);
  }
`;
