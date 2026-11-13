export interface NavLink {
  label: string;
  href: string;
}

export const siteConfig = {
  name: 'Jaseem Abbasi',
  title: 'Jaseem Abbasi - Technical Project, Product & Delivery Manager',
  description:
    'Jaseem Abbasi is a Technical Project Manager, Certified Scrum Master, and Product Manager with six years of experience leading enterprise CMS, mobile, web, and game initiatives across MENA, North America, and Europe.',
  siteUrl: 'https://thejaseemabbasi.com',
  language: 'en',
  locale: 'en_US',
  dateLocale: 'en-US',
  socialImage: '/og-image.png',

  author: {
    name: 'Jaseem Abbasi',
    role: 'Technical Project, Product & Delivery Manager',
    location: 'Karachi, Pakistan',
    email: 'thejaseemabbasi@gmail.com',
  },

  /** The pill above the homepage headline. Set `enabled: false` to remove it. */
  availability: {
    enabled: true,
    label: 'Available for Senior PM, Scrum & Product Leadership',
  },

  /** The button at the end of the header and in the mobile menu. */
  action: { label: 'Get in touch', href: 'mailto:thejaseemabbasi@gmail.com' },

  /** A PDF in `public/`, offered on the resume page. Leave empty to hide the button. */
  resumePdf: '/JaseemAbbasi-ProjectManager.pdf',

  /** The banner and preferences dialog. Set `enabled: false` to remove both. */
  cookieConsent: {
    enabled: true,
  },

  socials: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/jaseemabbasi/' },
    { label: 'WhatsApp', href: 'https://wa.me/923331335258' },
  ] satisfies NavLink[],
};

export const navigation: NavLink[] = [
  { label: 'Work', href: '/work/' },
  { label: 'About', href: '/about/' },
  { label: 'Resume', href: '/resume/' },
];

export const legalLinks: NavLink[] = [
  { label: 'Privacy', href: '/privacy/' },
  { label: 'Terms', href: '/terms/' },
  { label: 'Cookies', href: '/cookies/' },
];
