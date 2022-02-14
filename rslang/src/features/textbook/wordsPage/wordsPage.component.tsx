/* eslint-disable @typescript-eslint/no-unused-expressions */
import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { fetchTextBookAction } from '../textbook.saga';
import { baseTheme } from '../../../utils';

const {
  firstBookColor,
  secondBookColor,
  thirdBookColor,
  fourthBookColor,
  fifthBookColor,
  sixthBookColor
} = baseTheme.colors;

import {
  StyledCardSection,
  StyledWrapper,
  StyledCard,
  StyledCardContent,
  StyledAudioBtn,
  StyledAddBtn,
  hex2rgba
} from './styles';

import cardIconAudio from '../../../assets/svg/card-icon-audio.svg';
import cardPlusIcon from '../../../assets/svg/card-plus-icon.svg';
import { baseUrl } from '../textbook.api';
import { useLocation, useParams } from 'react-router-dom';
import { IWord } from '../types';

export const WordsPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const words = useAppSelector((state) => {
    return state.textBook.words;
  });

  const { search } = useLocation();

  const searchParams = new URLSearchParams(search);

  const group = searchParams.get('group') ?? '0';
  const page = searchParams.get('page') ?? '0';

  useEffect(() => {
    dispatch(fetchTextBookAction({ group, page }));
  }, [group, page]);

  // задаю бекграунд разделу с карточками в зависимости от того на какой раздел кликнули
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
    }
  };

  const playAudio = async (event: React.MouseEvent, word: IWord): Promise<void> => {
    const target = (event.target as HTMLElement).closest('button');

    if (target) {
      const { audio, audioMeaning, audioExample } = word;
      const audioMean = await new Audio(`${baseUrl}/${audioMeaning}`);
      const audioExamp = await new Audio(`${baseUrl}/${audioExample}`);
      const audioWord = await new Audio(`${baseUrl}/${audio}`);

      audioWord.paused ? audioWord.play() : audioWord.pause();

      audioWord.addEventListener('ended', () => {
        audioMean.currentTime = 0;
        audioMean.paused ? audioMean.play() : audioMean.pause();

        audioMean.addEventListener('ended', () => {
          audioExamp.currentTime = 0;
          audioExamp.paused ? audioExamp.play() : audioExamp.pause();
        });
      });
    }
  };

  return (
    <StyledCardSection group={`${checkNumberOfGroup()}`}>
      <StyledWrapper>
        {words.map((word) => (
          <StyledCard key={word.id} imgUrl={`${baseUrl}/${word.image}`}>
            <StyledCardContent>
              <div>
                <p>{word.word}</p>
                <div>
                  <StyledAudioBtn onClick={(e: React.MouseEvent) => playAudio(e, word)}>
                    <img src={cardIconAudio} width="32" height="28" alt="audioButton" />
                  </StyledAudioBtn>
                  <StyledAddBtn>
                    <img src={cardPlusIcon} width="32" height="28" alt="add word" />
                  </StyledAddBtn>
                  <span>{word.wordTranslate}</span>
                  <span>{word.transcription}</span>
                </div>
              </div>
              <div>
                <p>{word.textMeaning.replace(/<\/?[^>]+(>|$)/gi, '').replace(/&nbsp;/gi, ' ')}</p>
                <p>{word.textExample.replace(/<\/?[^>]+(>|$)/gi, '').replace(/&nbsp;/gi, ' ')}</p>
              </div>
              <hr />
              <div>
                <p>{word.textExampleTranslate}</p>
                <p>{word.textMeaningTranslate}</p>
              </div>
            </StyledCardContent>
          </StyledCard>
        ))}
      </StyledWrapper>
    </StyledCardSection>
  );
};
