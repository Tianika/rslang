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

export const ResultGamePage: React.FC = () => (
  <BlockResult>
    <TitleGame>Результаты</TitleGame>
    <SubtitleGame>
      Вы набрали <Result>340</Result> очков
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
      <ExitButton>Закрыть</ExitButton>
    </Content>
  </BlockResult>
);
