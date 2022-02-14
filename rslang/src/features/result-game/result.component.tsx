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
              Я знаю <RightWordsResult>{props.rightAnswers.length}</RightWordsResult> слов
            </WordsTitle>
            {props.rightAnswers.map((answer) => {
              if (answer)
                return (
                  <WordContainer key={answer.word}>
                    <SoundIcon>
                      <img src={audio} alt={answer.word} />
                    </SoundIcon>
                    <WordItem>{answer.word}</WordItem>
                  </WordContainer>
                );
            })}
          </ResultBlock>
          <ResultBlock>
            <WordsTitle>
              Я не знаю <ErrorWordsResult>{props.errorAnswers.length}</ErrorWordsResult> слов
            </WordsTitle>
            {props.errorAnswers.map((answer) => {
              if (answer)
                return (
                  <WordContainer key={answer.word}>
                    <SoundIcon>
                      <img src={audio} alt={answer.word} />
                    </SoundIcon>
                    <WordItem>{answer.word}</WordItem>
                  </WordContainer>
                );
            })}
          </ResultBlock>
        </ResultWrapper>
        <Link to="/games">
          <ExitButton>Закрыть</ExitButton>
        </Link>
      </Content>
    </BlockResult>
  );
};
