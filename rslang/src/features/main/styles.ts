import styled from 'styled-components';
import { baseTheme } from '../../utils';

export const LearnTogetherBlockStyle = styled.section`
  max-width: ${baseTheme.sizes.container};
  width: 100%;
  margin: 0 auto;
  text-align: center;
  img {
    display: inline-block;
    border-radius: 13px;
  }
`;

export const HeadingStyle = styled.h1`
  font-size: 44px;
  text-align: center;
  font-weight: 400;
  color: ${baseTheme.colors.font};
  margin-bottom: 15px;
`;

export const HowToLearnWrapperStyle = styled.section`
  max-width: ${baseTheme.sizes.container};
  color: ${baseTheme.colors.font};
  width: 100%;
  margin: 0 auto;

  h3 {
    font-size: ${baseTheme.fonts.mainH3size};
    font-weight: 400;
  }

  p {
    font-size: ${baseTheme.fonts.mainParagraphSize};
    font-style: italic;
    max-width: 450px;

    span {
      font-style: normal;
    }
  }

  & > div {
    display: flex;
    align-items: center;
  }

  & > div:nth-child(odd) {
    div {
      text-align: right;
      max-width: 450px;
    }
  }

  & > div:nth-child(even) {
    justify-content: space-evenly;
    img {
      order: 1;
      display: inline-block;
    }
    div {
      text-align: left;
    }
  }

  & > div:nth-child(3) {
    justify-content: space-around;

    img {
      margin-left: -30px;
    }
  }
`;
