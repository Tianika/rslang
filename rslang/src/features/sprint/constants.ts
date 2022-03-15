import book1 from '../../assets/svg/book1.svg';
import book2 from '../../assets/svg/book2.svg';
import book3 from '../../assets/svg/book3.svg';
import book4 from '../../assets/svg/book4.svg';
import arrowLeft from '../../assets/svg/arrow-left.svg';
import arrowRight from '../../assets/svg/arrow-right.svg';

export const SPRINT_DESCRIPTION = [
  'Используйте мышь, чтобы выбрать ответ.',
  'Используйте клавиши влево или вправо.'
];

export const DIFFICULTY = [
  'сложность 1',
  'сложность 2',
  'сложность 3',
  'сложность 4',
  'сложность 5',
  'сложность 6'
];

export const HEADER_BG_COLOR = ['#ffffff', '#FFE320', '#FFA901', '#FF6849'];

export const BOOK_LINKS = [book1, book2, book3, book4];

export const ARROWS = [arrowLeft, arrowRight];

export enum KeyTypes {
  ArrowLeft = 'ArrowLeft',
  ArrowRight = 'ArrowRight'
}

export const GAME_TIME = 60;

export enum BorderColors {
  Red = 'red',
  Green = 'green'
}

export const MAX_SCORE_PER_WORD = 80;

export const MAX_LEVEL_SCORE = 4;

export const MAX_LEVEL_CHECKBOXES = 3;

export const MAX_REQUESTS_COUNT = 3;

export const MAX_PAGE_PER_GROUP = 30;
