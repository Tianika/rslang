import styled, { keyframes } from 'styled-components';

export const BlockAnswer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
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
const animation = keyframes`
  0% {
    transform: scaleX(1.2) translateY(-100px);
  }
  100% {
    transform: scaleX(.5) translateY(250px);
  }
`;
export const AnswerText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 150px;
  width: 100%;
  height: 200px;
  font-size: 80px;
  color: gold;
  background: linear-gradient(to right, red, orange, yellow, green, cyan, blue, violet);
  background-size: 400% 400%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-animation: rainbow 10s ease infinite;
  animation: ${AnimationAnswerText} 10s ease infinite;
  line-height: 25px;
`;
export const Rainbow = styled.div`
  animation: ${animation} 1.5s 0.1s infinite alternate cubic-bezier(0.5, 0.05, 1, 0.5);
  background: red;
  border-radius: 100%;
  grid-row: 1;
  grid-column: 1;
  height: 80vmin;
  margin: auto auto 0;
  opacity: 0.7;
  width: 80vmin;
  &:nth-of-type(2) {
    animation-delay: 0.5s;
    background: orange;
    height: 70vmin;
    width: 70vmin;
  }
  &:nth-of-type(3) {
    animation-delay: 0.4s;
    background: yellow;
    height: 60vmin;
    width: 60vmin;
  }
  &:nth-of-type(4) {
    animation-delay: 0.25s;
    background: green;
    height: 50vmin;
    width: 50vmin;
  }
  &:nth-of-type(5) {
    animation-delay: 0.3s;
    background: blue;
    height: 40vmin;
    width: 40vmin;
  }
  &:nth-of-type(6) {
    animation-delay: 0.15s;
    background: indigo;
    height: 30vmin;
    width: 30vmin;
  }
  &:nth-of-type(7) {
    animation-delay: 0.2s;
    background: violet;
    height: 20vmin;
    width: 20vmin;
  }
  &:nth-of-type(8) {
    animation-delay: 0.5s;
    background: white;
    border: 1px solid #ccc;
    height: 10vmin;
    opacity: 1;
    width: 10vmin;
  }
`;
export const RainbowBlock = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  height: 800px;
  position: relative;
  width: 100%;
`;
