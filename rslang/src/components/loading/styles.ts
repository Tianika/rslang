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
  height: 200px;
  font-size: 80px;
  color: gold;
  background: linear-gradient(to right, red, orange, yellow, green, cyan, blue, violet);
  background-size: 400% 400%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-animation: rainbow 10s ease infinite;
  animation: ${AnimationLoadingText} 10s ease infinite;
  line-height: 25px;
`;
export const LoadingBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 800px;
  margin-top: 60px;
`;
export const LoadingImage = styled.div`
  width: 207px;
  height: 231px;
  background-image: url('${loadingLogo}');
  animation: ${AnimationImage} 10s ease infinite;
`;
