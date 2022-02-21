import styled, { keyframes } from 'styled-components';
import loadingLogo from '../../assets/svg/loadingLogo.svg';

const AnimationLoadingText = keyframes`
  0% { background-position: 0 50% }
  50% { background-position: 100% 50% }
  100% { background-position: 0 50% }
`;
const AnimationImage = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }`;
export const LoadingText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  font-size: 80px;
  color: gold;
  height: 30%;
  background: linear-gradient(to right, red, orange, yellow, green, cyan, blue, violet);
  background-size: 400% 400%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-animation: rainbow 20s ease infinite;
  animation: ${AnimationLoadingText} 20s ease infinite;
  line-height: 25px;
`;
export const LoadingBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  margin-top: 60px;
`;
export const LoadingImage = styled.div`
  background-image: url('${loadingLogo}');
  height: 50%;
  animation: 1s linear 0s normal none infinite running ${AnimationImage};
`;
