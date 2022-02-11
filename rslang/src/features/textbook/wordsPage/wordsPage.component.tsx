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

export const WordsPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const words = useAppSelector((state) => state.textBook.words);

  useEffect(() => {
    dispatch(fetchTextBookAction());
  }, []);

  console.log(words);
  return (
    <StyledCardSection>
      <StyledWrapper>
        <StyledCard>
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
      </StyledWrapper>
    </StyledCardSection>
  );
};
