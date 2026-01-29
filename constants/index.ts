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
    imageSrc: '/highlight_card/Frame1-new.webp',
    alt: 'Cash Awards',
  },
  {
    imageSrc: '/highlight_card/Frame2-new.webp',
    alt: 'Cash Awards',
  },
  {
    imageSrc: '/highlight_card/Frame3-new.webp',
    alt: 'Cash Awards',
  },
  {
    imageSrc: '/highlight_card/Frame4-new.webp',
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
  contentTitle?: string;
  content2?: string;
  extraText?: string;
  list?: { term: string; def: string }[];
}

export interface PolicySection {
  id: string;
  title?: string;
  contentTitle?: string;
  content2?: string[];
  type?: 'intro' | 'section';
  extraText?: string;
  content?: string[];
  subsections?: PolicySubsection[];
}

export const PRIVACY_POLICY_CONTENT: PolicySection[] = [
  {
    id: 'intro',
    type: 'intro',
    content: [
      'This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.',
      'We use Your Personal Data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy.',
    ],
  },
  {
    id: 'interpretation',
    title: 'Interpretation and Definitions',
    subsections: [
      {
        subTitle: 'Interpretation',
        content:
          'The words whose initial letters are capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.',
      },
      {
        subTitle: 'Definitions',
        contentTitle: 'For the purposes of this Privacy Policy:',
        list: [
          {
            term: 'Account',
            def: 'means a unique account created for You to access our Service or parts of our Service.',
          },
          {
            term: 'Affiliate',
            def: 'means an entity that controls, is controlled by, or is under common control with a party, where "control" means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority.',
          },
          {
            term: 'Company',
            def: '(referred to as either "the Company", "We", "Us" or "Our" in this Privacy Policy) refers to R1VALS.',
          },
          {
            term: 'Cookies',
            def: 'are small files that are placed on Your computer, mobile device or any other device by a website, containing the details of Your browsing history on that website among its many uses.',
          },
          { term: 'Country', def: 'refers to: Philippines' },
          {
            term: 'Device',
            def: 'means any device that can access the Service such as a computer, a cell phone or a digital tablet.',
          },
          {
            term: 'Personal Data',
            def: '(or "Personal Information") is any information that relates to an identified or identifiable individual. We use "Personal Data" and "Personal Information" interchangeably unless a law uses a specific term.',
          },
          { term: 'Service', def: 'refers to the Website.' },
          {
            term: 'Service Provider',
            def: 'means any natural or legal person who processes the data on behalf of the Company. It refers to third-party companies or individuals employed by the Company to facilitate the Service, to provide the Service on behalf of the Company, to perform services related to the Service or to assist the Company in analyzing how the Service is used.',
          },
          {
            term: 'Usage Data',
            def: 'refers to data collected automatically, either generated by the use of the Service or from the Service infrastructure itself (for example, the duration of a page visit).',
          },
          {
            term: 'Website',
            def: 'refers to R1VALS, accessible from www.r1vals.com.',
          },
          {
            term: 'You',
            def: 'means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.',
          },
        ],
      },
    ],
  },
  {
    id: 'collecting',
    title: 'Collecting and Using Your Personal Data',
    subsections: [
      {
        subTitle: 'Types of Data Collected',
        contentTitle: 'Personal Data:',
        extraText:
          'While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You. Personally identifiable information may include, but is not limited to: Email address, First name and last name, Phone number.',
      },
      {
        contentTitle: 'Usage Data',
        list: [
          {
            term: '',
            def: 'Usage Data is collected automatically when using the Service.',
          },
          {
            term: '',
            def: "Usage Data may include information such as Your Device's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that You visit, the time and date of Your visit, the time spent on those pages, unique device identifiers and other diagnostic data.",
          },
          {
            term: '',
            def: "When You access the Service by or through a mobile device, We may collect certain information automatically, including, but not limited to, the type of mobile device You use, Your mobile device's unique ID, the IP address of Your mobile device, Your mobile operating system, the type of mobile Internet browser You use, unique device identifiers and other diagnostic data.",
          },
          {
            term: '',
            def: 'We may also collect information that Your browser sends whenever You visit Our Service or when You access the Service by or through a mobile device.',
          },
        ],
      },
    ],
  },
  {
    id: 'use-data',
    title: 'Use of Your Personal Data',
    subsections: [
      {
        contentTitle:
          'The Company may use Personal Data for the following purposes:',
        list: [
          {
            term: '',
            def: 'To provide and maintain our Service, including to monitor the usage of our Service.',
          },
          {
            term: '',
            def: 'To manage Your Account: to manage Your registration as a user of the Service. The Personal Data You provide can give You access to different functionalities of the Service that are available to You as a registered user.',
          },
          {
            term: '',
            def: 'For the performance of a contract: the development, compliance and undertaking of the purchase contract for the products, items or services You have purchased or of any other contract with Us through the Service.',
          },
          {
            term: '',
            def: "To contact You: To contact You by email, telephone calls, SMS, or other equivalent forms of electronic communication, such as a mobile application's push notifications regarding updates or informative communications related to the functionalities, products or contracted services, including the security updates, when necessary or reasonable for their implementation.",
          },
          {
            term: '',
            def: 'To provide You with news, special offers, and general information about other goods, services and events which We offer that are similar to those that you have already purchased or inquired about unless You have opted not to receive such information.',
          },
          {
            term: '',
            def: 'To manage Your requests: To attend and manage Your requests to Us.',
          },
          {
            term: '',
            def: 'For business transfers: We may use Your Personal Data to evaluate or conduct a merger, divestiture, restructuring, reorganization, dissolution, or other sale or transfer of some or all of Our assets, whether as a going concern or as part of bankruptcy, liquidation, or similar proceeding, in which Personal Data held by Us about our Service users is among the assets transferred.',
          },
          {
            term: '',
            def: 'For other purposes: We may use Your information for other purposes, such as data analysis, identifying usage trends, determining the effectiveness of our promotional campaigns and to evaluate and improve our Service, products, services, marketing and your experience.',
          },
        ],
      },
      {
        contentTitle:
          'We may share Your Personal Data in the following situations:',
        list: [
          {
            term: '',
            def: 'With Service Providers: We may share Your Personal Data with Service Providers to monitor and analyze the use of our Service, to contact You.',
          },
          {
            term: '',
            def: 'For business transfers: We may share or transfer Your Personal Data in connection with, or during negotiations of, any merger, sale of Company assets, financing, or acquisition of all or a portion of Our business to another company.',
          },
          {
            term: '',
            def: 'With Affiliates: We may share Your Personal Data with Our affiliates, in which case we will require those affiliates to honor this Privacy Policy. Affiliates include Our parent company and any other subsidiaries, joint venture partners or other companies that We control or that are under common control with Us.',
          },
          {
            term: '',
            def: 'With business partners: We may share Your Personal Data with Our business partners to offer You certain products, services or promotions.',
          },
          {
            term: '',
            def: 'With other users: If Our Service offers public areas, when You share Personal Data or otherwise interact in the public areas with other users, such information may be viewed by all users and may be publicly distributed outside.',
          },
          {
            term: '',
            def: 'With Your consent: We may disclose Your Personal Data for any other purpose with Your consent.',
          },
        ],
      },
    ],
  },

  {
    id: 'retention',
    title: 'Retention of Your Personal Data',
    content2: [
      'The Company will retain Your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use Your Personal Data to the extent necessary to comply with our legal obligations (for example, if We are required to retain Your data to comply with applicable laws), resolve disputes, and enforce our legal agreements and policies.',
      'Where possible, We apply shorter retention periods and/or reduce identifiability by deleting, aggregating, or anonymizing data. Unless otherwise stated, the retention periods below are maximum periods ("up to") and We may delete or anonymize data sooner when it is no longer needed for the relevant purpose. We apply different retention periods to different categories of Personal Data based on the purpose of processing and legal obligations:',
    ],
    subsections: [
      {
        contentTitle: 'Account Information',
        list: [
          {
            term: 'User Accounts:',
            def: 'retained for the duration of your account relationship plus up to 24 months after account closure to handle any post-termination issues or resolve disputes.',
          },
        ],
      },
      {
        contentTitle: 'Customer Support Data',
        list: [
          {
            term: 'Support tickets and correspondence:',
            def: 'up to 24 months from the date of ticket closure to resolve follow-up inquiries, track service quality, and defend against potential legal claims',
          },
          {
            term: 'Chat transcripts:',
            def: 'up to 24 months for quality assurance and staff training purposes.',
          },
        ],
      },
      {
        contentTitle: 'Usage Data',
        list: [
          {
            term: 'Website analytics data (cookies, IP addresses, device identifiers):',
            def: 'up to 24 months from the date of collection, which allows us to analyze trends while respecting privacy principles.',
          },
          {
            term: 'Server logs (IP addresses, access times):',
            def: 'up to 24 months for security monitoring and troubleshooting purposes.',
          },
        ],
      },
      {
        content2:
          'Usage Data is retained in accordance with the retention periods described above, and may be retained longer only where necessary for security, fraud prevention, or legal compliance. We may retain Personal Data beyond the periods stated above for different reasons:',
        list: [
          {
            term: 'Legal obligation:',
            def: 'We are required by law to retain specific data (e.g., financial records for tax authorities).',
          },
          {
            term: 'Legal claims:',
            def: 'Data is necessary to establish, exercise, or defend legal claims.',
          },
          {
            term: 'Your explicit request:',
            def: 'You ask Us to retain specific information.',
          },
          {
            term: 'Technical limitations:',
            def: 'Data exists in backup systems that are scheduled for routine deletion.',
          },
        ],
        extraText:
          'You may request information about how long We will retain Your Personal Data by contacting Us. When retention periods expire, We securely delete or anonymize Personal Data according to the following procedures:\n\nDeletion: Personal Data is removed from Our systems and no longer actively processed.\nBackup retention: Residual copies may remain in encrypted backups for a limited period consistent with our backup retention schedule and are not restored except where necessary for security, disaster recovery, or legal compliance.\nAnonymization: In some cases, We convert Personal Data into anonymous statistical data that cannot be linked back to You. This anonymized data may be retained indefinitely for research and analytics.',
      },
    ],
  },
  {
    id: 'transfer',
    title: 'Transfer of Your Personal Data',
    content2: [
      "Your information, including Personal Data, is processed at the Company's operating offices and in any other places where the parties involved in the processing are located. It means that this information may be transferred to — and maintained on — computers located outside of Your state, province, country or other governmental jurisdiction where the data protection laws may differ from those from Your jurisdiction.",
      'Where required by applicable law, We will ensure that international transfers of Your Personal Data are subject to appropriate safeguards and supplementary measures where appropriate.',
      'The Company will take all steps reasonably necessary to ensure that Your data is treated securely and in accordance with this Privacy Policy and no transfer of Your Personal Data will take place to an organization or a country unless there are adequate controls in place including the security of Your data and other personal information.',
    ],
  },
  {
    id: 'delete',
    title: 'Delete Your Personal Data',
    content2: [
      'You have the right to delete or request that We assist in deleting the Personal Data that We have collected about You.',
      'Our Service may give You the ability to delete certain information about You from within the Service.',
      'You may update, amend, or delete Your information at any time by signing in to Your Account, if you have one, and visiting the account settings section that allows you to manage Your personal information. You may also contact Us to request access to, correct, or delete any Personal Data that You have provided to Us.',
      'Please note, however, that We may need to retain certain information when we have a legal obligation or lawful basis to do so.',
    ],
  },
  {
    id: 'disclosure',
    title: 'Disclosure of Your Personal Data',
    subsections: [
      {
        contentTitle: 'Business Transactions',
        content2:
          'If the Company is involved in a merger, acquisition or asset sale, Your Personal Data may be transferred. We will provide notice before Your Personal Data is transferred and becomes subject to a different Privacy Policy.',
      },
      {
        contentTitle: 'Law enforcement',
        content2:
          'Under certain circumstances, the Company may be required to disclose Your Personal Data if required to do so by law or in response to valid requests by public authorities (e.g. a court or a government agency).',
      },
      {
        contentTitle: 'Other legal requirements',
        content2:
          'The Company may disclose Your Personal Data in the good faith belief that such action is necessary to:',
        list: [
          { term: '', def: 'Comply with a legal obligation' },
          {
            term: '',
            def: 'Protect and defend the rights or property of the Company',
          },
          {
            term: '',
            def: 'Prevent or investigate possible wrongdoing in connection with the Service',
          },
          {
            term: '',
            def: 'Protect the personal safety of Users of the Service or the public',
          },
          { term: '', def: 'Protect against legal liability' },
        ],
      },
    ],
  },
  {
    id: 'security',
    title: 'Security of Your Personal Data',
    content2: [
      'The security of Your Personal Data is important to Us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While We strive to use commercially reasonable means to protect Your Personal Data, We cannot guarantee its absolute security.',
    ],
  },
  {
    id: 'children',
    title: "Children's Privacy",
    content2: [
      'Our Service does not address anyone under the age of 16. We do not knowingly collect personally identifiable information from anyone under the age of 16. If You are a parent or guardian and You are aware that Your child has provided Us with Personal Data, please contact Us.',
      'If We become aware that We have collected Personal Data from anyone under the age of 16 without verification of parental consent, We take steps to remove that information from Our servers.',
      "If We need to rely on consent as a legal basis for processing Your information and Your country requires consent from a parent, We may require Your parent's consent before We collect and use that information.",
    ],
  },
  {
    id: 'links',
    title: 'Links to Other Websites',
    content2: [
      "Our Service may contain links to other websites that are not operated by Us. If You click on a third party link, You will be directed to that third party's site. We strongly advise You to review the Privacy Policy of every site You visit.",
      'We have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites or services.',
    ],
  },
  {
    id: 'changes',
    title: 'Changes to this Privacy Policy',
    content2: [
      'We may update Our Privacy Policy from time to time. We will notify You of any changes by posting the new Privacy Policy on this page.',
      'We will let You know via email and/or a prominent notice on Our Service, prior to the change becoming effective and update the "Last updated" date at the top of this Privacy Policy.',
      'You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.',
    ],
  },
];

export const TERMS_CONDITIONS_CONTENT: PolicySection[] = [
  {
    id: 'intro',
    type: 'intro',
    content: [
      'Please read these terms and conditions carefully before using Our Service.',
      'By accessing or using the Service, You agree to be bound by these Terms. If You disagree with any part of these terms and conditions, then You may not access the Service.',
    ],
  },
  {
    id: 'acknowledgment',
    title: 'Acknowledgment',
    content: [
      'These are the Terms and Conditions governing the use of this Service and the agreement that operates between You and the Company.',
      'Your access to and use of the Service is conditioned on Your acceptance of and compliance with these Terms and Conditions. These Terms and Conditions apply to all visitors, users and others who access or use the Service.',
      'Your access to and use of the Service is also conditioned on Your acceptance of and compliance with the Privacy Policy of the Company.',
    ],
  },
  {
    id: 'user-accounts',
    title: 'User Accounts',
    content: [
      'When You create an account with Us, You must provide Us information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of Your account on Our Service.',
    ],
    subsections: [
      {
        subTitle: 'Account Responsibilities',
        content:
          'You are responsible for safeguarding the password that You use to access the Service and for any activities or actions under Your password, whether Your password is with Our Service or a Third-Party Social Media Service.',
      },
      {
        subTitle: 'Security',
        content:
          'You agree not to disclose Your password to any third party. You must notify Us immediately upon becoming aware of any breach of security or unauthorized use of Your account.',
      },
    ],
  },
  {
    id: 'intellectual-property',
    title: 'Intellectual Property',
    content: [
      'The Service and its original content (excluding Content provided by You or other users), features and functionality are and will remain the exclusive property of R1VALS and its licensors.',
      'Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of the Company.',
    ],
  },
  {
    id: 'termination',
    title: 'Termination',
    content: [
      'We may terminate or suspend Your Account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if You breach these Terms and Conditions.',
      'Upon termination, Your right to use the Service will cease immediately. If You wish to terminate Your account, You may simply discontinue using the Service.',
    ],
  },
  {
    id: 'limitation-liability',
    title: 'Limitation of Liability',
    content: [
      'To the maximum extent permitted by applicable law, in no event shall the Company or its suppliers be liable for any special, incidental, indirect, or consequential damages whatsoever (including, but not limited to, damages for loss of profits, loss of data or other information, for business interruption, for personal injury, loss of privacy).',
    ],
  },
  {
    id: 'governing-law',
    title: 'Governing Law',
    content: [
      'The laws of the Philippines, excluding its conflicts of law rules, shall govern these Terms and Your use of the Service. Your use of the Application may also be subject to other local, state, national, or international laws.',
    ],
  },
  {
    id: 'disputes',
    title: 'Disputes Resolution',
    content: [
      'If You have any concern or dispute about the Service, You agree to first try to resolve the dispute informally by contacting the Company.',
    ],
  },
  {
    id: 'changes',
    title: 'Changes to These Terms and Conditions',
    content: [
      "We reserve the right, at Our sole discretion, to modify or replace these Terms at any time. If a revision is material We will make reasonable efforts to provide at least 30 days' notice prior to any new terms taking effect.",
      'By continuing to access or use Our Service after those revisions become effective, You agree to be bound by the revised terms. If You do not agree to the new terms, in whole or in part, please stop using the website and the Service.',
    ],
  },
  {
    id: 'contact',
    title: 'Contact Us',
    content: [
      'If you have any questions about these Terms and Conditions, You can contact us:',
    ],
    subsections: [
      {
        content: 'By visiting this page on our website: www.r1vals.com/contact',
      },
    ],
  },
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
