import { FC } from 'react';
import {
  StyledLearnTogether,
  StyledHeading,
  StyledHowToLearn,
  StyledTeam,
  StyledInnerWrap,
  StyledTeamMember,
  StyledDemo,
  BlockInfo,
  BlockInfoTitle,
  BlockInfoText,
  BlockInfoAuthor,
  Block
} from './styles';

import rememberImg from '../../assets/svg/remember.svg';
import learnImg from '../../assets/svg/learning.svg';
import analyzeImg from '../../assets/svg/analyze.svg';
import playImg from '../../assets/svg/play.svg';
import firstTeamMemberImg from '../../assets/png/team-member-1.png';
import secondTeamMemberImg from '../../assets/png/team-member-2.png';
import thirdTeamMemberImg from '../../assets/png/team-member-3.png';
import fourthTeamMemberImg from '../../assets/png/team-member-4.png';
import logor from '../../assets/svg/logo-r.svg';
import logot from '../../assets/svg/logo-t.svg';
import logoy from '../../assets/svg/logo-y.svg';
import logod from '../../assets/svg/logo-d.svg';
import { checkVerification } from '../login/verification';
import { Video } from '../../pages/app/styles';
import { BlockData, TeamInfo } from './constant';

const BlockInfoImg = [rememberImg, learnImg, analyzeImg, playImg];
const ImageIconGithub = [logor, logot, logoy, logod];
const ImageMember = [
  firstTeamMemberImg,
  secondTeamMemberImg,
  thirdTeamMemberImg,
  fourthTeamMemberImg
];

const Main: FC = () => {
  checkVerification();

  return (
    <div>
      <StyledHowToLearn>
        {BlockData.map((el, index) => (
          <Block key={el.textTitle}>
            <img src={BlockInfoImg[index]} alt="remember" />
            <BlockInfo>
              <BlockInfoTitle>{el.textTitle}</BlockInfoTitle>
              <BlockInfoText>{el.text}</BlockInfoText>
              <BlockInfoAuthor>{el.author}</BlockInfoAuthor>
            </BlockInfo>
          </Block>
        ))}
      </StyledHowToLearn>
      <StyledTeam>
        <h3>Команда</h3>
        <StyledInnerWrap>
          {TeamInfo.map((el, index) => (
            <StyledTeamMember key={el.name}>
              <img src={ImageMember[index]} alt="member" />
              <p>
                {el.name}
                <a href={el.linkGitHub} target="_blank">
                  <img src={ImageIconGithub[index]} width="20px" alt="icon" />
                </a>
              </p>

              <p>{el.contribution}</p>
            </StyledTeamMember>
          ))}
        </StyledInnerWrap>
      </StyledTeam>
      <StyledDemo>
        <Video
          src="https://www.youtube.com/embed/jdH9isOxDTs"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
        <p>
          Приложение для изучения иностранных слов с техникой интервального повторения, отслеживания
          индивидуального прогресса и мини-игр.
        </p>
      </StyledDemo>
    </div>
  );
};

export default Main;
