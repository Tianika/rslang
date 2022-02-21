export const getRandomNumber = (maxNumber: number): number => {
  return Math.floor(Math.random() * maxNumber);
};
export const shuffleArray = (array: string[]): string[] => {
  return array.sort(() => Math.random() - 0.5);
};
