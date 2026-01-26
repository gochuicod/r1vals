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

export const FEATURE_CARD_VARIANTS = [
  {
    desktop: '/ui/feature_card/frame-1-new.svg', // Ensure these files exist in /public
    mobile: '/ui/feature_card/frame-1-mobile.svg',
  },
  {
    desktop: '/ui/feature_card/frame-2-new.svg',
    mobile: '/ui/feature_card/frame-2-mobile.svg',
  },
  {
    desktop: '/ui/feature_card/frame-3-new.svg',
    mobile: '/ui/feature_card/frame-3-mobile.svg',
  },
] as const;

export const HIGHLIGHT_CARDS_DATA = [
  {
    imageSrc: '/highlight_card/Frame1.svg',
    alt: 'Cash Awards',
  },
  {
    imageSrc: '/highlight_card/Frame2.svg',
    alt: 'Cash Awards',
  },
  {
    imageSrc: '/highlight_card/Frame3.svg',
    alt: 'Cash Awards',
  },
  {
    imageSrc: '/highlight_card/Frame4.svg',
    alt: 'Cash Awards',
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
