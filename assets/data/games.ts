/* eslint-disable max-len */
export interface GameInt {
  title: string;
  releaseDate: string;
  description: string;
  itchUrl: string;
  itchEmbedUrl: string;
  published: boolean;
}

export const gameData: GameInt[] = [
  {
    title: 'Prologue',
    releaseDate: '18 December 2021',
    description:
      'A short adventure, the Prologue introduces you to the main characters and allows you to get a feel for who they are and how they interact. This is a great place to start if you are interested in getting in to the series.',
    itchUrl: 'https://nhcarrigan.itch.io/prologue',
    itchEmbedUrl: 'https://itch.io/embed/1267076?linkback=true&bg_color=e2cff6&fg_color=222222&link_color=ed4eff&border_color=68417c',
    published: true,
  },
  {
    title: 'Origins',
    releaseDate: 'TBA',
    description:
      'Origins gives players a look into Becca and Rosalia before they met. What were their childhoods like? How did they learn their skills? What motivates them?',
    itchUrl: 'https://nhcarrigan.itch.io/origins',
    itchEmbedUrl: 'https://itch.io/embed',
    published: false,
  },
];
