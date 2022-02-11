import styled from 'styled-components';
import { baseTheme } from '../../../utils';
// import cardImg from '../../../assets/png/duck.png';

const hex2rgba = (hex: string, alpha = 1): string => {
  const [r, g, b] = (hex.match(/\w\w/g) as Array<string>).map((x) => parseInt(x, 16));
  return `rgba(${r},${g},${b},${alpha})`;
};

const { firstBookColor, font } = baseTheme.colors;

export const StyledCardSection = styled.section`
  background-color: ${hex2rgba(firstBookColor, 0.5)}};
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
  padding-bottom: 50px;
`;

export const StyledCard = styled.div`
  background-image: url('https://learnwords-team17.herokuapp.com/files/01_0002.jpg');
  min-height: 420px;
  max-width: 400px;
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

  &:hover {
    box-shadow: 5px 5px 15px 5px ${firstBookColor};
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
      rgba(196, 196, 196, 0.0753941) 16.15%,
      rgba(196, 196, 196, 0.142857) 33.33%,
      #c4c4c4 100%
    );
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    border-radius: 13px;
    z-index: -1;
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

export const StyledAddBtn = styled(StyledClearBtn)``;
