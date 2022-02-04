import { FC } from 'react';
import { LearnTogetherBlockStyle, HeadingStyle } from './styles';

import learnTogetherImg from '../../assets/jpegs/learn-together.jpg';

const Main: FC = () => {
  return (
    <main>
      <LearnTogetherBlockStyle>
        <HeadingStyle>
          Изучай английский вместе <br /> с RS Lang
        </HeadingStyle>
        <img src={learnTogetherImg} alt="learnTogetherImg" width={611} height={364} />
      </LearnTogetherBlockStyle>
    </main>
  );
};

export default Main;
