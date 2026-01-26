// All of the constants used in the application are defined here.
// Something where repetitive data takes place
// e.g. constant card variables
// [
//   {
//     id: "1",
//     name: "Card 1",
//     description: "This is card 1"
//   },
//   {
//     id: "2",
//     name: "Card 2",
//     description: "This is card 2"
//   },
//   {
//     id: "3",
//     name: "Card 3",
//     description: "This is card 3"
//   }
// ]

export const HIGHLIGHT_CARDS_DATA = [
  {
    imageSrc: '/highlight_card/cash-awards.webp',
    title: 'CASH AWARDS',
    description: 'for both players and fans.',
    variant: 'blue',
  },
  {
    imageSrc: '/highlight_card/youth.webp',
    title: 'Youth Mentorship',
    description: 'and elite football clinics.',
    variant: 'red',
  },
  {
    imageSrc: '/highlight_card/global.webp',
    title: 'Community Charity',
    description: 'initiatives to pay it forward.',
    variant: 'blue',
  },
  {
    imageSrc: '/highlight_card/community.webp',
    title: 'Global Expansion',
    description: 'creating international pathways.',
    variant: 'red',
  },
] as const;

export const CAROUSEL_IMAGES = [
  '/historic_stakes_section/carousel/v3/item_1.png',
  '/historic_stakes_section/carousel/v3/item_2.png',
  '/historic_stakes_section/carousel/v3/item_3.png',
  '/historic_stakes_section/carousel/v3/item_4.png',
  '/historic_stakes_section/carousel/v3/item_5.png',
  '/historic_stakes_section/carousel/v3/item_6.png',
  '/historic_stakes_section/carousel/v3/item_7.png',
  '/historic_stakes_section/carousel/v3/item_8.png',
] as const;
