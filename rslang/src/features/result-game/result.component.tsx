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
  TranslateItem,
  TransriptionItem,
  WordContainer,
  WordItem,
  WordsTitle
} from './styles';
import audioIcon from '../../assets/svg/soundIcon.svg';
import { Link } from 'react-router-dom';
import { ResultGame } from './types';
import { Word } from '../sprint/types';
import { AudioEventHandle } from '../../utils';

export const ResultGamePage = (props: ResultGame): React.ReactElement => {
  const playAudio: AudioEventHandle = (event) => {
    const target = event.target as HTMLElement;
    const url = target.dataset.url;
    const audio = new Audio(`https://learnwords-team17.herokuapp.com/${url}`);

    audio.play();
  };

  const renderWords = (answers: Array<Word | undefined>): (JSX.Element | undefined)[] => {
    return answers.map((answer) => {
      if (answer)
        return (
          <WordContainer key={answer.word}>
            <SoundIcon onClick={playAudio}>
              <img data-url={answer.audio} src={audioIcon} alt={answer.word} />
            </SoundIcon>
            <WordItem>{answer.word}</WordItem>
            <TransriptionItem>{answer.transcription}</TransriptionItem>
            <TranslateItem>{answer.wordTranslate}</TranslateItem>
          </WordContainer>
        );
    });
  };

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
            {renderWords(props.rightAnswers)}
          </ResultBlock>
          <ResultBlock>
            <WordsTitle>
              Я не знаю <ErrorWordsResult>{props.errorAnswers.length}</ErrorWordsResult> слов
            </WordsTitle>
            {renderWords(props.errorAnswers)}
          </ResultBlock>
        </ResultWrapper>
        <Link to="/games">
          <ExitButton>Закрыть</ExitButton>
        </Link>
      </Content>
    </BlockResult>
  );
};
