import { FC } from 'react';
import {
  StyledLearnTogether,
  StyledHeading,
  StyledHowToLearn,
  StyledTeam,
  StyledInnerWrap,
  StyledTeamMember
} from './styles';

import learnTogetherImg from '../../assets/jpegs/learn-together.jpg';
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

const Main: FC = () => {
  return (
    <main>
      <StyledLearnTogether>
        <StyledHeading>
          Изучай английский вместе <br /> с RS Lang
        </StyledHeading>
        <img src={learnTogetherImg} alt="learnTogetherImg" width={611} height={364} />
      </StyledLearnTogether>
      <StyledHowToLearn>
        <div>
          <img src={rememberImg} alt="remember" />
          <div>
            <h3>Запоминай</h3>
            <p>
              Память сохраняет только то, что вы сами даёте ей на сохранение. <br /> <br />{' '}
              <span>Д. Писарев</span>
            </p>
          </div>
        </div>
        <div>
          <img src={learnImg} alt="learn" />
          <div>
            <h3>Изучай</h3>
            <p>
              Тот, кто не знает иностранных языков, не знает ничего о самом себе.
              <br /> <br /> <span>Иоганн Вольфганг фон Гёте</span>
            </p>
          </div>
        </div>
        <div>
          <img src={analyzeImg} alt="analyze" />
          <div>
            <h3>Анализируй</h3>
            <p>Подробная статистика твоих достижений, изученных слов и ошибок.</p>
          </div>
        </div>
        <div>
          <img src={playImg} alt="play" />
          <div>
            <h3>Играй</h3>
            <p>Для лучшего запоминания информации играй в игры</p>
          </div>
        </div>
      </StyledHowToLearn>
      <StyledTeam>
        <h3>Команда</h3>
        <StyledInnerWrap>
          <StyledTeamMember>
            <img src={firstTeamMemberImg} alt="first-team-member" />
            <p>Roman Lickevich</p>
            <a href="https://github.com/lickevich" target="_blank">
              <img src={logor} alt="firstmember" />
            </a>
          </StyledTeamMember>
          <StyledTeamMember>
            <img src={secondTeamMemberImg} alt="first-team-member" />
            <p>Татьяна Цыбина</p>
            <a href="https://github.com/tianika" target="_blank">
              <img src={logot} alt="firstmember" />
            </a>
          </StyledTeamMember>
          <StyledTeamMember>
            <img src={thirdTeamMemberImg} alt="first-team-member" />
            <p>Евгений Жуков</p>
            <a href="https://github.com/nobodynoticed" target="_blank">
              <img src={logoy} alt="firstmember" />
            </a>
          </StyledTeamMember>
          <StyledTeamMember>
            <img src={fourthTeamMemberImg} alt="first-team-member" />
            <p>Дарья Малина</p>
            <a href="https://github.com/DariaMalina" target="_blank">
              <img src={logod} alt="firstmember" />
            </a>
          </StyledTeamMember>
        </StyledInnerWrap>
      </StyledTeam>
    </main>
  );
};

export default Main;
