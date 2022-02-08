import React from 'react';
import { TextbookStyled, BooksListStyled, ItemBookStyled } from './styles';
import './styles';

import firstBooksSection from '../../assets/svg/firstSection.svg';
import secondBooksSection from '../../assets/svg/secondSection.svg';
import thirdBooksSection from '../../assets/svg/thirdSection.svg';
import fourthBooksSection from '../../assets/svg/fourthSection.svg';
import fifthBooksSection from '../../assets/svg/fifthSection.svg';
import sixthBooksSection from '../../assets/svg/sixthSection.svg';

import firstBook from '../../assets/svg/firstBook.svg';
import secondBook from '../../assets/svg/secondBook.svg';
import thirdBook from '../../assets/svg/thirdBook.svg';
import fourthBook from '../../assets/svg/fourthBook.svg';
import fifthBook from '../../assets/svg/fifthBook.svg';
import sixthBook from '../../assets/svg/sixthBook.svg';

export const Textbook: React.FC = () => {
  return (
    <TextbookStyled>
      <BooksListStyled>
        <ItemBookStyled>
          <img src={firstBooksSection} alt="firstBooksSection" />
          <a href="#">
            РАЗДЕЛ 1
            <img src={firstBook} alt="firstbook" width={170} />
          </a>
        </ItemBookStyled>
        <ItemBookStyled>
          <img src={secondBooksSection} alt="secondBooksSection" />
          <a href="#">
            РАЗДЕЛ 2
            <img src={secondBook} alt="secondbook" width={170} />
          </a>
        </ItemBookStyled>
        <ItemBookStyled>
          <img src={thirdBooksSection} alt="thirdBooksSection" />
          <a href="#">
            РАЗДЕЛ 3
            <img src={thirdBook} alt="thirdbook" width={170} />
          </a>
        </ItemBookStyled>
        <ItemBookStyled>
          <img src={fourthBooksSection} alt="fourthBooksSection" />
          <a href="#">
            РАЗДЕЛ 4
            <img src={fourthBook} alt="fourthbook" width={170} />
          </a>
        </ItemBookStyled>
        <ItemBookStyled>
          <img src={fifthBooksSection} alt="fifthBooksSection" />
          <a href="#">
            РАЗДЕЛ 5
            <img src={fifthBook} alt="fifthbook" width={170} />
          </a>
        </ItemBookStyled>
        <ItemBookStyled>
          <img src={sixthBooksSection} alt="sixthBooksSection" />
          <a href="#">
            РАЗДЕЛ 6
            <img src={sixthBook} alt="sixthbook" width={170} />
          </a>
        </ItemBookStyled>
      </BooksListStyled>
    </TextbookStyled>
  );
};
