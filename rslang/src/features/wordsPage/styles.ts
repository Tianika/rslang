import styled from 'styled-components';
import { baseTheme } from '../../utils';
import audio from '../../assets/svg/miniLogoAudio.svg';
import sprint from '../../assets/svg/miniSprintLogo.svg';

export const hex2rgba = (hex: string, alpha = 1): string => {
  const [r, g, b] = (hex.match(/\w\w/g) as Array<string>).map((x) => parseInt(x, 16));
  return `rgba(${r},${g},${b},${alpha})`;
};

const { font, bg } = baseTheme.colors;

export const StyledCardSection = styled.section<{ group: string }>`
  background-color: ${(props) => props.group};
  color: ${font};
  min-height: 100vh;
  padding: 50px;
  @media (max-width: 1000px) {
    padding: 10px 0;
  }
`;

export const StyledWrapper = styled.div`
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, auto));
  max-width: 1800px;
  width: 100%;
  gap: 40px;
  padding-bottom: 115px;
  @media (max-width: 1000px) {
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(360px, auto));
    max-width: 1800px;
    width: 100%;
    gap: 40px;
    padding-bottom: 115px;
    justify-items: center;
  }
`;

export const StyledCard = styled.div<{ imgUrl: string }>`
  background-image: url(${(props) => props.imgUrl});
  min-height: 420px;
  min-width: 400px;
  width: 100%;
  position: relative;
  z-index: 1;
  color: #fff;
  border-radius: 13px;
  background-repeat: no-repeat;
  background-size: cover;
  object-fit: cover;
  padding: 10px;
  font-size: 20px;
  color: #fff;
  transition: all 0.2s;
  @media (max-width: 1000px) {
    width: 90%;
    min-width: 200px;
  }
  &:hover {
    box-shadow: 5px 5px 15px 5px #fff;
    transform: scale(1.01);
    transition: all 0.2s;
  }

  &::before {
    content: '';
    position: absolute;
    min-height: 100%;
    width: 100%;
    bottom: 0;
    left: 0;
    background: linear-gradient(
      180deg,
      rgba(196, 196, 196, 0) 0%,
      rgba(196, 196, 196, 0.0753941) -7.85%,
      rgba(196, 196, 196, 0.4) -40.67%,
      #c4c4c4 100%
    );
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    border-radius: 13px;
    z-index: -1;
    transition: all 0.2s;
  }

  &.difficult {
    &::before {
      outline: ${baseTheme.colors.sevenBookColor} 5px solid;
    }

    &:hover {
      box-shadow: 5px 5px 15px 5px ${baseTheme.colors.sevenBookColor};
    }
  }

  &.learned {
    &::before {
      outline: ${baseTheme.colors.learned} 5px solid;
    }

    &:hover {
      box-shadow: 5px 5px 15px 5px ${baseTheme.colors.learned};
    }
  }
`;

export const StyledCardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  text-align: right;

  position: absolute;
  bottom: 0;
  right: 15px;
  font-size: 18px;
  font-weight: 500;
  color: ${font};

  & > div:first-child {
    margin-bottom: 15px;

    p {
      font-size: 41px;
      margin: 0;
    }

    div {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      justify-content: center;
      min-width: 200px;
    }
  }

  & > div:nth-child(2) {
    p {
      margin: 0;
    }
  }

  & > div:nth-child(3) {
    p {
      margin: 0;
    }
  }

  hr {
    width: 100%;
    border: 1px solid #676161;
    margin-bottom: 20px;
    @media (max-width: 1000px) {
      width: 90%;
    }
  }

  hr + div {
    padding-bottom: 20px;

    p {
      margin: 0;
      margin-bottom: 5px;
    }
  }

  span {
    display: inline-block;
    margin-left: 15px;
  }
`;

const StyledClearBtn = styled.button`
  padding: 0;
  cursor: pointer;
  border: none;
  background-color: transparent;
  padding: 5px;
  display: inline-block;

  &:hover {
    background-color: rgb(255 255 255 / 60%);
    border-radius: 5px;
  }
`;

export const StyledAudioBtn = styled(StyledClearBtn)``;

export const StyledAddBtn = styled(StyledClearBtn)`
  display: ${localStorage.getItem('rslangUserName') ? '' : 'none'};
  img {
    pointer-events: none;
  }
`;

export const StyledRemoveBtn = styled(StyledClearBtn)`
  display: ${localStorage.getItem('rslangUserName') ? '' : 'none'};
  img {
    pointer-events: none;
  }
`;

export const StyledPagination = styled.div`
  max-width: 1534px;
  width: 100%;
  margin: 0 auto;
  min-height: 94px;
  border-radius: 70px 70px 0px 0px;
  background: rgba(196, 196, 196, 0.5);
  backdrop-filter: blur(4px);
  z-index: 4;
  position: fixed;
  bottom: 50px;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 1000px) {
    height: 10px;
    min-height: 55px;
  }
  div:first-child {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    max-width: 270px;
    width: 100%;
    margin: 0 auto;
    font-size: 30px;
    position: relative;
    @media (max-width: 1000px) {
      font-size: 20px;
      padding-left: 50px;
      width: 63%;
    }
  }

  div:nth-child(2) {
    position: relative;
  }

  button {
    font-size: 30px;
  }
`;

const StyledClearPaginationBtn = styled.button`
  padding: 0;
  cursor: pointer;
  border: none;
  background-color: transparent;
  display: inline-block;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.2);
    transition: transform 0.2s;
  }
`;

export const StyledGroupNumber = styled.span<{ group: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 64px;
  height: 64px;
  background-color: ${(props) => props.group};
  border: 3px solid ${bg};
  color: ${bg};
  font-size: 26px;
  border-radius: 50%;
  position: absolute;
  right: 65px;
  top: -55px;
  color: #000;
  cursor: pointer;
  @media (max-width: 1000px) {
    width: 40px;
    height: 40px;
    font-size: 20px;
    border: 2px solid ${bg};
    top: -32px;
    right: 30px;
  }
  &:hover {
    ul {
      display: block;
      opacity: 1;
      width: auto;
      height: auto;
      bottom: 35px;
      @media (max-width: 1000px) {
        bottom: 20px;
      }
    }
  }
  ul {
    margin: 0;
    position: absolute;
    bottom: -400px;
    opacity: 1;
    width: 0;
    height: 0;
    padding-bottom: 30px;
    li {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 64px;
      height: 64px;
      border: 3px solid ${bg};
      border-radius: 50%;
      @media (max-width: 1000px) {
        width: 40px;
        height: 40px;
        font-size: 20px;
        border: 2px solid ${bg};
        bottom: -300px;
      }
    }
    li:last-child {
      background-color: ${baseTheme.colors.red};
    }
    li:nth-child(5) {
      background-color: ${baseTheme.colors.orange};
    }
    li:nth-child(4) {
      background-color: ${baseTheme.colors.yellow};
    }
    li:nth-child(3) {
      background-color: ${baseTheme.colors.green};
    }
    li:nth-child(2) {
      background-color: ${baseTheme.colors.blue};
    }
    li:first-child {
      background-color: ${baseTheme.colors.purple};
    }
  }
`;

export const StyledPrevGroupBtn = styled(StyledClearPaginationBtn)``;
export const StyledPrevPageBtn = styled(StyledClearPaginationBtn)``;
export const StyledNextGroupBtn = styled(StyledClearPaginationBtn)``;
export const StyledNextPageBtn = styled(StyledClearPaginationBtn)``;

export const ButtonAudioGame = styled.button`
  position: fixed;
  width: 50px;
  height: 50px;
  z-index: 1000;
  border: none;
  background: transparent url(${audio});
  background-size: cover;
  bottom: 8%;
  left: 13%;
  transition: 1s;
  &:hover {
    transform: scale(1.1);
  }
  @media (max-width: 1000px) {
    left: 6%;
    bottom: 6%;
    width: 40px;
    height: 40px;
  }
  @media (max-height: 750px) {
    bottom: 8%;
  }
`;
export const ButtonSprintGame = styled.button`
  position: fixed;
  width: 51px;
  height: 50px;
  z-index: 1000;
  border: none;
  background: transparent url(${sprint});
  background-size: cover;
  bottom: 8%;
  left: 17%;
  transition: 1s;
  margin-left: 10px;
  &:hover {
    transform: scale(1.1);
  }
  @media (max-width: 1000px) {
    left: 11%;
    bottom: 6%;
    width: 41px;
    height: 40px;
  }
  @media (max-width: 600px) {
    left: 15%;
  }
  @media (max-height: 750px) {
    bottom: 8%;
  }
`;
