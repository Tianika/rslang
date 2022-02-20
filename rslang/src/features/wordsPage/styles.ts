import styled from 'styled-components';
import { baseTheme } from '../../utils';

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
`;

export const StyledWrapper = styled.div`
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, auto));
  max-width: 1800px;
  width: 100%;
  gap: 40px;
  padding-bottom: 115px;
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
  outline: transparent;
  border: none;
  font-size: 20px;
  overflow: hidden;
  color: #fff;
  transition: all 0.2s;
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
      justify-content: space-between;
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

  div:first-child {
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    max-width: 270px;
    width: 100%;
    margin: 0 auto;
    font-size: 30px;

    position: relative;
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
`;

export const StyledPrevGroupBtn = styled(StyledClearPaginationBtn)``;
export const StyledPrevPageBtn = styled(StyledClearPaginationBtn)``;
export const StyledNextGroupBtn = styled(StyledClearPaginationBtn)``;
export const StyledNextPageBtn = styled(StyledClearPaginationBtn)``;
