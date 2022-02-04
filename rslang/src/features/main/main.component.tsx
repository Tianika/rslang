import { FC } from 'react';
import { StyledLearnTogether, StyledHeading, StyledHowToLearn } from './styles';

import learnTogetherImg from '../../assets/jpegs/learn-together.jpg';
import rememberImg from '../../assets/svg/remember.svg';
import learnImg from '../../assets/svg/learning.svg';
import analyzeImg from '../../assets/svg/analyze.svg';
import playImg from '../../assets/svg/play.svg';

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
    </main>
  );
};

export default Main;
