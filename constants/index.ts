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

export interface PolicySubsection {
  subTitle?: string;
  content?: string;
  extraText?: string;
  list?: { term: string; def: string }[];
}

export interface PolicySection {
  id: string;
  title?: string; // Optional, as the intro doesn't have a title
  type?: 'intro' | 'section';
  content?: string[];
  subsections?: PolicySubsection[];
}

export const PRIVACY_POLICY_CONTENT: PolicySection[] = [
  {
    id: 'intro',
    type: 'intro',
    content: [
      "This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.",
      "We use Your Personal Data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy."
    ]
  },
  {
    id: 'interpretation',
    title: 'Interpretation and Definitions',
    subsections: [
      {
        subTitle: 'Interpretation',
        content: "The words whose initial letters are capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural."
      },
      {
        subTitle: 'Definitions',
        content: "For the purposes of this Privacy Policy:",
        list: [
          { term: "Account", def: "means a unique account created for You to access our Service or parts of our Service." },
          { term: "Affiliate", def: "means an entity that controls, is controlled by, or is under common control with a party, where \"control\" means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority." },
          { term: "Company", def: "(referred to as either \"the Company\", \"We\", \"Us\" or \"Our\" in this Privacy Policy) refers to R1VALS." },
          { term: "Cookies", def: "are small files that are placed on Your computer, mobile device or any other device by a website, containing the details of Your browsing history on that website among its many uses." },
          { term: "Country", def: "refers to: Philippines" },
          { term: "Device", def: "means any device that can access the Service such as a computer, a cell phone or a digital tablet." },
          { term: "Personal Data", def: "(or \"Personal Information\") is any information that relates to an identified or identifiable individual." },
          { term: "Service", def: "refers to the Website." },
          { term: "Service Provider", def: "means any natural or legal person who processes the data on behalf of the Company." },
          { term: "Usage Data", def: "refers to data collected automatically, either generated by the use of the Service or from the Service infrastructure itself." },
          { term: "Website", def: "refers to R1VALS, accessible from www.r1vals.com." },
          { term: "You", def: "means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable." },
        ]
      }
    ]
  },
  {
    id: 'collecting',
    title: 'Collecting and Using Your Personal Data',
    subsections: [
      {
        subTitle: 'Types of Data Collected',
        content: "Personal Data:",
        extraText: "While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You. Personally identifiable information may include, but is not limited to: Email address, First name and last name, Phone number."
      },
      {
        subTitle: 'Usage Data',
        content: "Usage Data is collected automatically when using the Service. Usage Data may include information such as Your Device's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that You visit, the time and date of Your visit, the time spent on those pages, unique device identifiers and other diagnostic data.",
      }
    ]
  },
  {
    id: 'use-data',
    title: 'Use of Your Personal Data',
    content: [
      "The Company may use Personal Data for the following purposes:",
      "To provide and maintain our Service, including to monitor the usage of our Service.",
      "To manage Your Account: to manage Your registration as a user of the Service.",
      "For the performance of a contract: the development, compliance and undertaking of the purchase contract for the products, items or services You have purchased.",
      "To contact You: To contact You by email, telephone calls, SMS, or other equivalent forms of electronic communication.",
      "To provide You with news, special offers, and general information about other goods, services and events.",
      "To manage Your requests: To attend and manage Your requests to Us.",
      "For business transfers: We may use Your Personal Data to evaluate or conduct a merger, divestiture, restructuring, reorganization, dissolution, or other sale or transfer."
    ]
  },
  {
    id: 'retention',
    title: 'Retention of Your Personal Data',
    content: [
      "The Company will retain Your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use Your Personal Data to the extent necessary to comply with our legal obligations, resolve disputes, and enforce our legal agreements and policies.",
      "Usage Data is retained for a shorter period of time, except when this data is used to strengthen the security or to improve the functionality of Our Service."
    ]
  },
  {
    id: 'transfer',
    title: 'Transfer of Your Personal Data',
    content: [
      "Your information, including Personal Data, is processed at the Company's operating offices and in any other places where the parties involved in the processing are located. It means that this information may be transferred to — and maintained on — computers located outside of Your state, province, country or other governmental jurisdiction where the data protection laws may differ from those from Your jurisdiction.",
      "The Company will take all steps reasonably necessary to ensure that Your data is treated securely and in accordance with this Privacy Policy."
    ]
  },
  {
    id: 'delete',
    title: 'Delete Your Personal Data',
    content: [
      "You have the right to delete or request that We assist in deleting the Personal Data that We have collected about You.",
      "Our Service may give You the ability to delete certain information about You from within the Service.",
      "You may also contact Us to request access to, correct, or delete any Personal Data that You have provided to Us."
    ]
  },
  {
    id: 'disclosure',
    title: 'Disclosure of Your Personal Data',
    content: [
      "Business Transactions: If the Company is involved in a merger, acquisition or asset sale, Your Personal Data may be transferred.",
      "Law enforcement: Under certain circumstances, the Company may be required to disclose Your Personal Data if required to do so by law.",
      "Other legal requirements: The Company may disclose Your Personal Data in the good faith belief that such action is necessary to comply with a legal obligation or protect the rights or property of the Company."
    ]
  },
  {
    id: 'security',
    title: 'Security of Your Personal Data',
    content: [
      "The security of Your Personal Data is important to Us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While We strive to use commercially reasonable means to protect Your Personal Data, We cannot guarantee its absolute security."
    ]
  },
  {
    id: 'children',
    title: "Children's Privacy",
    content: [
      "Our Service does not address anyone under the age of 16. We do not knowingly collect personally identifiable information from anyone under the age of 16. If You are a parent or guardian and You are aware that Your child has provided Us with Personal Data, please contact Us."
    ]
  },
  {
    id: 'changes',
    title: 'Changes to this Privacy Policy',
    content: [
      "We may update Our Privacy Policy from time to time. We will notify You of any changes by posting the new Privacy Policy on this page.",
      "You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page."
    ]
  }
];

export const TERMS_CONDITIONS_CONTENT: PolicySection[] = [
  {
    id: 'intro',
    type: 'intro',
    content: [
      "Please read these terms and conditions carefully before using Our Service.",
      "By accessing or using the Service, You agree to be bound by these Terms. If You disagree with any part of these terms and conditions, then You may not access the Service."
    ]
  },
  {
    id: 'acknowledgment',
    title: 'Acknowledgment',
    content: [
      "These are the Terms and Conditions governing the use of this Service and the agreement that operates between You and the Company.",
      "Your access to and use of the Service is conditioned on Your acceptance of and compliance with these Terms and Conditions. These Terms and Conditions apply to all visitors, users and others who access or use the Service.",
      "Your access to and use of the Service is also conditioned on Your acceptance of and compliance with the Privacy Policy of the Company."
    ]
  },
  {
    id: 'user-accounts',
    title: 'User Accounts',
    content: [
      "When You create an account with Us, You must provide Us information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of Your account on Our Service."
    ],
    subsections: [
      {
        subTitle: 'Account Responsibilities',
        content: "You are responsible for safeguarding the password that You use to access the Service and for any activities or actions under Your password, whether Your password is with Our Service or a Third-Party Social Media Service."
      },
      {
        subTitle: 'Security',
        content: "You agree not to disclose Your password to any third party. You must notify Us immediately upon becoming aware of any breach of security or unauthorized use of Your account."
      }
    ]
  },
  {
    id: 'intellectual-property',
    title: 'Intellectual Property',
    content: [
      "The Service and its original content (excluding Content provided by You or other users), features and functionality are and will remain the exclusive property of R1VALS and its licensors.",
      "Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of the Company."
    ]
  },
  {
    id: 'termination',
    title: 'Termination',
    content: [
      "We may terminate or suspend Your Account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if You breach these Terms and Conditions.",
      "Upon termination, Your right to use the Service will cease immediately. If You wish to terminate Your account, You may simply discontinue using the Service."
    ]
  },
  {
    id: 'limitation-liability',
    title: 'Limitation of Liability',
    content: [
      "To the maximum extent permitted by applicable law, in no event shall the Company or its suppliers be liable for any special, incidental, indirect, or consequential damages whatsoever (including, but not limited to, damages for loss of profits, loss of data or other information, for business interruption, for personal injury, loss of privacy)."
    ]
  },
  {
    id: 'governing-law',
    title: 'Governing Law',
    content: [
      "The laws of the Philippines, excluding its conflicts of law rules, shall govern these Terms and Your use of the Service. Your use of the Application may also be subject to other local, state, national, or international laws."
    ]
  },
  {
    id: 'disputes',
    title: 'Disputes Resolution',
    content: [
      "If You have any concern or dispute about the Service, You agree to first try to resolve the dispute informally by contacting the Company."
    ]
  },
  {
    id: 'changes',
    title: 'Changes to These Terms and Conditions',
    content: [
      "We reserve the right, at Our sole discretion, to modify or replace these Terms at any time. If a revision is material We will make reasonable efforts to provide at least 30 days' notice prior to any new terms taking effect.",
      "By continuing to access or use Our Service after those revisions become effective, You agree to be bound by the revised terms. If You do not agree to the new terms, in whole or in part, please stop using the website and the Service."
    ]
  },
  {
    id: 'contact',
    title: 'Contact Us',
    content: [
      "If you have any questions about these Terms and Conditions, You can contact us:"
    ],
    subsections: [
      {
        content: "By visiting this page on our website: www.r1vals.com/contact"
      }
    ]
  }
];

import { Instagram, Mail, Phone } from 'lucide-react';

export const CONTACT_NUMBER = '+63 917 507 4014';

export const SOCIAL_LINKS = [
  {
    icon: Instagram,
    href: 'https://www.instagram.com/r1vals.sports',
    label: 'Instagram',
  },
  {
    icon: Mail,
    href: 'mailto:info@r1vals.com',
    label: 'Mail',
  },
  {
    icon: Phone,
    href: '#',
    label: 'Phone',
  },
];

export const LEGAL_LINKS = [
  {
    href: '/privacy-policy',
    label: 'Privacy',
  },
  {
    href: '/terms-and-conditions',
    label: 'Terms',
  },
];
