import {
  BlockResult,
  Content,
  ErrorWordsResult,
  ExitButton,
  Result,
  ResultBlock,
  ResultWrapper,
  RightWordsResult,
  SoundIcon,
  SubtitleGame,
  TitleGame,
  WordContainer,
  WordItem,
  WordsTitle
} from './styles';
import audio from '../../assets/svg/soundIcon.svg';
import { Link } from 'react-router-dom';
import { ResultGame } from './types';
import { useAppSelector } from '../../app/hooks';
import { errorAnswersSelector, rightAnswersSelector } from '../sprint/sprint.selectors';

export const ResultGamePage = (props: ResultGame): React.ReactElement => {
  console.log(props);

  return (
    <BlockResult>
      <TitleGame>Результаты</TitleGame>
      <SubtitleGame>
        Вы набрали <Result>{props.score}</Result> очков
      </SubtitleGame>
      <Content>
        <ResultWrapper>
          <ResultBlock>
            <WordsTitle>
              Я знаю <RightWordsResult>5</RightWordsResult> слов
            </WordsTitle>
            <WordContainer>
              <SoundIcon>
                <img src={audio} alt="word" />
              </SoundIcon>
              <WordItem>слово</WordItem>
            </WordContainer>
          </ResultBlock>
          <ResultBlock>
            <WordsTitle>
              Я не знаю <ErrorWordsResult>5</ErrorWordsResult> слов
            </WordsTitle>
            <WordContainer>
              <SoundIcon>
                <img src={audio} alt="word" />
              </SoundIcon>
              <WordItem>слово</WordItem>
            </WordContainer>
          </ResultBlock>
        </ResultWrapper>
        <ExitButton>
          <Link to="/games">Закрыть</Link>
        </ExitButton>
      </Content>
    </BlockResult>
  );
};
