import styled from 'styled-components';
import { baseTheme } from '../../utils';

export const LearnTogetherBlockStyle = styled.section`
  max-width: 1130px;
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
