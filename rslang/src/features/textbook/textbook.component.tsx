import React from 'react';
import { TextbookStyled, BooksListStyled, ItemBookStyled } from './styles';
import './styles';

import firstBooksSection from '../../assets/svg/firstSection.svg';
import secondBooksSection from '../../assets/svg/secondSection.svg';
import thirdBooksSection from '../../assets/svg/thirdSection.svg';
import fourthBooksSection from '../../assets/svg/fourthSection.svg';
import fifthBooksSection from '../../assets/svg/fifthSection.svg';
import sixthBooksSection from '../../assets/svg/sixthSection.svg';
import difficultSection from '../../assets/svg/difficultSection.svg';

import firstBook from '../../assets/svg/firstBook.svg';
import secondBook from '../../assets/svg/secondBook.svg';
import thirdBook from '../../assets/svg/thirdBook.svg';
import fourthBook from '../../assets/svg/fourthBook.svg';
import fifthBook from '../../assets/svg/fifthBook.svg';
import sixthBook from '../../assets/svg/sixthBook.svg';
import difficultBook from '../../assets/svg/difficultBook.svg';

import { Link } from 'react-router-dom';

export const textBookSection = [
  {
    imgLink: firstBooksSection,
    alt: 'firstBooksSection',
    link: '/textbook/wordspage?group=0&page=0',
    altForImg: 'firstbook',
    titleSection: 'РАЗДЕЛ 1',
    linkBook: firstBook
  },

  {
    imgLink: secondBooksSection,
    alt: 'secondBooksSection',
    link: '/textbook/wordspage?group=1&page=0',
    altForImg: 'secondbook',
    titleSection: 'РАЗДЕЛ 2',
    linkBook: secondBook
  },

  {
    imgLink: thirdBooksSection,
    alt: 'thirdBooksSection',
    link: '/textbook/wordspage?group=2&page=0',
    altForImg: 'secondbook',
    titleSection: 'РАЗДЕЛ 3',
    linkBook: thirdBook
  },

  {
    imgLink: fourthBooksSection,
    alt: 'fourthBooksSection',
    link: '/textbook/wordspage?group=3&page=0',
    altForImg: 'fourthbook',
    titleSection: 'РАЗДЕЛ 4',
    linkBook: fourthBook
  },

  {
    imgLink: fifthBooksSection,
    alt: 'fifthBooksSection',
    link: '/textbook/wordspage?group=4&page=0',
    altForImg: 'fifthbook',
    titleSection: 'РАЗДЕЛ 5',
    linkBook: fifthBook
  },

  {
    imgLink: sixthBooksSection,
    alt: 'sixthBooksSection',
    link: '/textbook/wordspage?group=5&page=0',
    altForImg: 'fifthbook',
    titleSection: 'РАЗДЕЛ 6',
    linkBook: sixthBook
  },

  {
    imgLink: difficultSection,
    alt: 'difficultWord',
    link: '/textbook/wordspage?group=6&page=0',
    altForImg: 'difficult words',
    titleSection: 'Сложные слова',
    linkBook: difficultBook
  }
];

export const Textbook: React.FC = () => {
  return (
    <TextbookStyled>
      <BooksListStyled>
        {textBookSection.map((item) => {
          const { imgLink, alt, link, altForImg, titleSection, linkBook } = item;

          return (
            <ItemBookStyled key={item.alt}>
              <img src={imgLink} alt={alt} className="background" />
              <Link to={link}>
                {titleSection}
                <img src={linkBook} alt={altForImg} width={170} />
              </Link>
            </ItemBookStyled>
          );
        })}
      </BooksListStyled>
    </TextbookStyled>
  );
};
