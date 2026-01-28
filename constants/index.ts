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
    desktop: '/feature_card/frame-1-new.svg', // Ensure these files exist in /public
    mobile: '/feature_card/frame-1-mobile.webp',
  },
  {
    desktop: '/feature_card/frame-2-new.svg',
    mobile: '/feature_card/frame-2-mobile.webp',
  },
  {
    desktop: '/feature_card/frame-3-new.svg',
    mobile: '/feature_card/frame-3-mobile.webp',
  },
] as const;

export const HIGHLIGHT_CARDS_DATA = [
  {
    imageSrc: '/highlight_card/Frame1-new.svg',
    alt: 'Cash Awards',
  },
  {
    imageSrc: '/highlight_card/Frame2-new.svg',
    alt: 'Cash Awards',
  },
  {
    imageSrc: '/highlight_card/Frame3-new.svg',
    alt: 'Cash Awards',
  },
  {
    imageSrc: '/highlight_card/Frame4-new.svg',
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
  '/historic_stakes_section/carousel/v3/item_9.png',
  '/historic_stakes_section/carousel/v3/item_10.png',
  '/historic_stakes_section/carousel/v3/item_11.png',
  '/historic_stakes_section/carousel/v3/item_12.png',
  '/historic_stakes_section/carousel/v3/item_13.png',
  '/historic_stakes_section/carousel/v3/item_14.png',
  '/historic_stakes_section/carousel/v3/item_15.png',
  '/historic_stakes_section/carousel/v3/item_16.png',
  '/historic_stakes_section/carousel/v3/item_17.png',
  '/historic_stakes_section/carousel/v3/item_18.png',
  '/historic_stakes_section/carousel/v3/item_19.png',
  '/historic_stakes_section/carousel/v3/item_20.png',
  '/historic_stakes_section/carousel/v3/item_21.png',
  '/historic_stakes_section/carousel/v3/item_22.png',
  '/historic_stakes_section/carousel/v3/item_23.png',
  '/historic_stakes_section/carousel/v3/item_24.png',
  '/historic_stakes_section/carousel/v3/item_25.png',
] as const;

export const CONTACT_DETAILS = {
  name: 'R1VALS Sports',
  number: '+63 917 507 4014',
  rawNumber: '+639175074014', // Clean number for dialer/vcard
} as const;
