/* eslint-disable max-len */
export interface GameInt {
  title: string;
  releaseDate: string;
  description: string;
  itchUrl?: string;
  steamUrl?: string;
}

export const gameData: GameInt[] = [
  {
    title: 'Prologue',
    releaseDate: 'Coming Soon!',
    description:
      'A short adventure, the Prologue introduces you to the main characters and allows you to get a feel for who they are and how they interact. This is a great place to start if you are interested in getting in to the series.',
  },
  {
    title: 'Origins',
    releaseDate: 'TBA',
    description:
      'Origins gives players a look into Becca and Rosalia before they met. What were their childhoods like? How did they learn their skills? What motivates them?',
  },
];
