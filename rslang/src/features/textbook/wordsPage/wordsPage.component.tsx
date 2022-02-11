import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { fetchTextBookAction } from '../textbook.saga';

import {
  StyledCardSection,
  StyledWrapper,
  StyledCard,
  StyledCardContent,
  StyledAudioBtn,
  StyledAddBtn
} from './styles';

import cardIconAudio from '../../../assets/svg/card-icon-audio.svg';
import cardPlusIcon from '../../../assets/svg/card-plus-icon.svg';
import { baseUrl } from '../textbook.api';
import { useLocation, useParams } from 'react-router-dom';

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

  return (
    <StyledCardSection>
      <StyledWrapper>
        {words.map((word) => (
          <StyledCard key={word.id} imgUrl={`${baseUrl}/${word.image}`}>
            <StyledCardContent>
              <div>
                <p>duck</p>
                <div>
                  <StyledAudioBtn>
                    <img src={cardIconAudio} width="32" height="28" alt="audioButton" />
                  </StyledAudioBtn>
                  <StyledAddBtn>
                    <img src={cardPlusIcon} width="32" height="28" alt="add word" />
                  </StyledAddBtn>
                  <span>утка</span>
                  <span>[dak]</span>
                </div>
              </div>
              <div>
                <p>A duck is small water bird.</p>
                <p>people feed ducks at the lake</p>
              </div>
              <hr />
              <div>
                <p>Утка - маленькая водяная птица.</p>
                <p>Люди кормят уток у озера</p>
              </div>
            </StyledCardContent>
          </StyledCard>
        ))}
      </StyledWrapper>
    </StyledCardSection>
  );
};
