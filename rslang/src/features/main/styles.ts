import styled from 'styled-components';
import { baseTheme } from '../../utils';

export const Block = styled.div`
  margin: 0 auto;
  width: 50%;
  text-align: right;
`;
export const BlockInfo = styled.div`
  width: 50%;
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;
export const BlockInfoTitle = styled.h2`
  font-size: 30px;
  font-weight: 400;
`;
export const BlockInfoText = styled.p`
  font-family: DM Mono, sans-serif;
  font-size: 20px;
  font-weight: 100;
  font-style: italic;
`;
export const BlockInfoAuthor = styled.span`
  font-size: 15px;
  font-weight: 400;
`;
export const StyledLearnTogether = styled.section`
  max-width: ${baseTheme.sizes.container};
  width: 100%;
  margin: 0 auto;
  text-align: center;
  padding-top: 47px;
  img {
    display: inline-block;
    border-radius: 13px;
  }
`;

export const StyledHeading = styled.h1`
  font-size: 44px;
  text-align: center;
  font-weight: 400;
  color: ${baseTheme.colors.font};
  margin-bottom: 15px;
`;

export const StyledHowToLearn = styled.section`
  max-width: ${baseTheme.sizes.container};
  color: ${baseTheme.colors.font};
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;

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
      //text-align: left;
    }
  }

  & > div:nth-child(3) {
    justify-content: space-around;

    img {
      margin-left: -30px;
    }
  }
  @media (max-width: 768px) {
    flex-direction: column;
    img {
      width: 200px;
    }
  }
`;

export const StyledTeam = styled.section`
  max-width: ${baseTheme.sizes.container};
  color: ${baseTheme.colors.font};
  width: 100%;
  margin: 0 auto;
  padding: 20px 0;

  border: 1px solid #5984e2;
  border-radius: 13px;

  h3 {
    font-size: ${baseTheme.fonts.mainH3size};
    font-weight: 400;
    text-align: center;
    margin-top: 0;
  }
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 80%;
    padding: 10px 0;
  }
`;

export const StyledInnerWrap = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;

  font-size: ${baseTheme.fonts.teamSectionSize};

  max-width: 800px;
  margin: 0 auto;
  width: 100%;

  & > div:not(div:nth-child(2)) {
    & > img {
      border-radius: 100px;
      border: 1px solid #000000;
    }
  }
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 80%;
    padding: 10px 0;
  }
`;

export const StyledTeamMember = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  max-width: 300px;
  width: 100%;
  min-height: 300px;
  text-align: center;
  margin-bottom: 30px;

  p {
    display: flex;
    align-items: flex-start;
    margin: 10px;
    font-size: 20px;
    a {
      margin-left: 10px;
    }
  }
`;

export const StyledDemo = styled.section`
  max-width: ${baseTheme.sizes.container};
  color: ${baseTheme.colors.font};
  width: 100%;
  margin: 40px auto 0;

  text-align: center;

  h3 {
    font-size: ${baseTheme.fonts.mainH3size};
    font-weight: 400;
    text-align: center;
    margin-top: 30px;
    margin-bottom: 15px;
  }

  p {
    font-size: 20px;
    padding-bottom: 80px;
    width: 902px;
    margin: 0 auto;
  }
  @media (max-width: 768px) {
    padding: 10px;
    iframe {
      width: 90%;
      height: 300px;
    }
    p {
      font-size: 20px;
      padding-bottom: 80px;
      width: 400px;
      margin: 0 auto;
    }
  }
`;
