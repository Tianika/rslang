/* eslint-disable @typescript-eslint/no-unused-expressions */
import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { baseTheme, LoadingState, TypeUserWords } from '../../utils';
import {
  StyledCardSection,
  StyledWrapper,
  StyledCard,
  StyledCardContent,
  StyledAudioBtn,
  StyledAddBtn,
  hex2rgba,
  StyledPagination,
  StyledGroupNumber,
  StyledRemoveBtn
} from './styles';
import cardIconAudio from '../../assets/svg/card-icon-audio.svg';
import cardPlusIcon from '../../assets/svg/card-plus-icon.svg';
import removeIcon from '../../assets/svg/remove.svg';
import learnedIcon from '../../assets/svg/learned-word-icon.svg';
import removeLearned from '../../assets/svg/remove-learned.svg';
import { Link, useLocation } from 'react-router-dom';
import { IWord } from '../textbook/types';
import {
  deleteUserWordAction,
  fetchTextBookAction,
  getDifficultWordsAction,
  getLearnedWordsAction,
  getUserWordAction
} from './wordsPage.saga';

import { LoadingPage } from '../../components/loading';
import {
  difficultWordsSelector,
  learnedWordsSelector,
  statusSelector,
  wordsSelector
} from './wordsPage.selectors';
import { baseUrl } from './wordsPage.api';
import { dropDownMenu } from './wordsPage.constants';

const {
  firstBookColor,
  secondBookColor,
  thirdBookColor,
  fourthBookColor,
  fifthBookColor,
  sixthBookColor,
  sevenBookColor
} = baseTheme.colors;

export const WordsPage: React.FC = () => {
  const dispatch = useAppDispatch();

  //слова
  const words = useAppSelector(wordsSelector);
  const difficultWords = useAppSelector(difficultWordsSelector);
  const learnedWords = useAppSelector(learnedWordsSelector);

  //роутинг
  const { search } = useLocation();

  const searchParams = new URLSearchParams(search);

  const group = searchParams.get('group') ?? '0';
  const page = searchParams.get('page') ?? '0';

  let copyPrevGroup = +group;
  copyPrevGroup += 1;

  const changePrevGroup = () => {
    let groupNumber = +group;
    groupNumber === 0 ? 0 : (groupNumber -= 1);

    return `?group=${groupNumber}&page=0`;
  };

  const changeNextGroup = () => {
    let groupNumber = +group;

    if (localStorage.rslangUserId) {
      groupNumber === 6 ? 6 : (groupNumber += 1);
    } else {
      groupNumber === 5 ? 5 : (groupNumber += 1);
    }

    return `?group=${groupNumber}&page=0`;
  };

  const changePrevPage = () => {
    let pageNumber = +page;
    pageNumber === 0 ? 0 : (pageNumber -= 1);

    return `?group=${group}&page=${pageNumber}`;
  };

  let copyPrevPage = +page;
  copyPrevPage += 1;

  const changeNextPage = () => {
    let pageNumber = +page;
    pageNumber === 29 ? 29 : (pageNumber += 1);
    return `?group=${group}&page=${pageNumber}`;
  };

  useEffect(() => {
    console.log(group, page);
    dispatch(getDifficultWordsAction());
    dispatch(getLearnedWordsAction({ group, page }));
  }, []);

  useEffect(() => {
    dispatch(fetchTextBookAction({ group, page }));

    dispatch(getDifficultWordsAction());
    dispatch(getLearnedWordsAction({ group, page }));
  }, [group, page]);

  const checkNumberOfGroup = () => {
    switch (group) {
      case '0':
        return hex2rgba(firstBookColor, 0.5);

      case '1':
        return hex2rgba(secondBookColor, 0.5);

      case '2':
        return hex2rgba(thirdBookColor, 0.5);

      case '3':
        return hex2rgba(fourthBookColor, 0.5);

      case '4':
        return hex2rgba(fifthBookColor, 0.5);

      case '5':
        return hex2rgba(sixthBookColor, 0.5);

      case '6':
        return hex2rgba(sevenBookColor, 0.5);
    }
  };

  const playAudio = async (event: React.MouseEvent, word: IWord): Promise<void> => {
    const target = (event.target as HTMLElement).closest('button');

    if (target) {
      const { audio, audioMeaning, audioExample } = word;
      const audioMean = await new Audio(`${baseUrl}/${audioMeaning}`);
      const audioExamp = await new Audio(`${baseUrl}/${audioExample}`);
      const audioWord = await new Audio(`${baseUrl}/${audio}`);

      audioWord.paused ? await audioWord.play() : audioWord.pause();
      target.style.pointerEvents = 'none';

      audioWord.addEventListener('ended', async () => {
        audioMean.currentTime = 0;
        audioMean.paused ? await audioMean.play() : audioMean.pause();

        audioMean.addEventListener('ended', async () => {
          audioExamp.currentTime = 0;
          audioExamp.paused ? await audioExamp.play() : audioExamp.pause();
        });
      });

      audioExamp.addEventListener('ended', () => {
        target.style.pointerEvents = 'auto';
      });
    }
  };

  const handleUserWord = (wordId: string) => {
    const type = TypeUserWords.Hard;

    dispatch(getUserWordAction({ wordId, type }));
    dispatch(getDifficultWordsAction());
  };

  const removeUserWord = (wordId: string | undefined) => {
    if (wordId) {
      dispatch(deleteUserWordAction(wordId));
      dispatch(fetchTextBookAction({ group, page }));
    }
  };

  const addLearnedWord = (wordId: string) => {
    const type = TypeUserWords.Learned;

    dispatch(getUserWordAction({ wordId, type }));
    dispatch(getDifficultWordsAction());
    dispatch(getLearnedWordsAction({ group, page }));
  };

  const removeLearnedWord = (wordId: string) => {
    dispatch(deleteUserWordAction(wordId));
    dispatch(getLearnedWordsAction({ group, page }));
  };

  const toggleClassType = (id: string) => {
    const typeClassForWord = difficultWords.includes(id)
      ? 'difficult'
      : learnedWords.includes(id)
      ? 'learned'
      : '';

    return typeClassForWord;
  };

  //загрузка
  const status = useAppSelector(statusSelector);

  const [isLoading, setIsLoading] = useState(true);
  const disableIsLoading = () => {
    setIsLoading(false);
  };

  useEffect(() => {
    if (status.status === LoadingState.Success) {
      disableIsLoading();
    }
  }, [status]);

  if (isLoading) return <LoadingPage />;

  return (
    <StyledCardSection group={`${checkNumberOfGroup()}`}>
      <StyledWrapper>
        {words
          .slice()
          .sort((a, b) => a.word.localeCompare(b.word))
          .map((word: IWord) => {
            return (
              <StyledCard
                className={toggleClassType(word.id)}
                key={word.word}
                imgUrl={`${baseUrl}/${word.image}`}
              >
                <StyledCardContent>
                  <div>
                    <p>{word.word}</p>
                    <div>
                      <StyledAudioBtn
                        onClick={(e: React.MouseEvent) => playAudio(e, word)}
                        title={'Послушать'}
                      >
                        <img src={cardIconAudio} width="32" height="28" alt="audioButton" />
                      </StyledAudioBtn>

                      {+group < 6 ? (
                        <StyledAddBtn
                          title={'Добавить в сложные слова'}
                          onClick={() => handleUserWord(word.id)}
                        >
                          <img src={cardPlusIcon} width="32" height="28" alt="add word" />
                        </StyledAddBtn>
                      ) : (
                        <StyledRemoveBtn
                          title={'Удалить из сложных слов'}
                          onClick={() => removeUserWord(word._id)}
                        >
                          <img src={removeIcon} width="32" height="28" alt="remove word" />
                        </StyledRemoveBtn>
                      )}

                      {learnedWords.includes(word.id) ? (
                        <StyledRemoveBtn
                          title={'Удалить из изученных слов'}
                          onClick={() => removeLearnedWord(word.id)}
                        >
                          <img src={removeLearned} width="32" height="28" alt="remove word" />
                        </StyledRemoveBtn>
                      ) : +group !== 6 ? (
                        <StyledAddBtn
                          title={'Добавить в изученные слова'}
                          onClick={() => addLearnedWord(word.id)}
                        >
                          <img src={learnedIcon} width="32" height="28" alt="add word" />
                        </StyledAddBtn>
                      ) : null}

                      <span>{word.wordTranslate}</span>
                      <span>{word.transcription}</span>
                    </div>
                  </div>
                  <div>
                    <p>
                      {word.textMeaning.replace(/<\/?[^>]+(>|$)/gi, '').replace(/&nbsp;/gi, ' ')}
                    </p>
                    <p>
                      {word.textExample.replace(/<\/?[^>]+(>|$)/gi, '').replace(/&nbsp;/gi, ' ')}
                    </p>
                  </div>
                  <hr />
                  <div>
                    <p>{word.textMeaningTranslate}</p>
                    <p>{word.textExampleTranslate}</p>
                  </div>
                </StyledCardContent>
              </StyledCard>
            );
          })}
        <StyledPagination>
          <div>
            <Link to={changePrevGroup()} title={group === '0' ? '' : 'следующий раздел'}>
              {'<<'}
            </Link>

            {+group < 6 ? (
              <>
                <Link to={changePrevPage()} title={page === '0' ? '' : 'предыдущая страница'}>
                  {'<'}
                </Link>
                <span>{`${copyPrevPage}`}/30</span>
                <Link to={changeNextPage()} title={page === '29' ? '' : 'следующая страница'}>
                  {'>'}
                </Link>
              </>
            ) : null}

            <Link to={changeNextGroup()} title={group === '5' ? '' : 'следующий раздел'}>
              {'>>'}
            </Link>
          </div>
          <div>
            <StyledGroupNumber group={`${checkNumberOfGroup()}`}>
              {`${copyPrevGroup}`}
              <ul>
                {dropDownMenu.map((linkElem, index) => {
                  return (
                    <li key={index}>
                      <Link
                        to={`?group=${linkElem.groupNum}&page=0`}
                        style={{ padding: '15px', display: 'inline-block' }}
                      >
                        {linkElem.text}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </StyledGroupNumber>
          </div>
        </StyledPagination>
      </StyledWrapper>
    </StyledCardSection>
  );
};
