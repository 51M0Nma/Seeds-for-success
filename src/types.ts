export interface NavItem {
  label: string;
  href: string;
  isExternal?: boolean;
}

export interface CurriculumModule {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface AlternatingBlock {
  id: string;
  title: string;
  text: string;
  image: string;
  imageAlt: string;
  reverse?: boolean;
}

export interface PartnerLogo {
  id: string;
  name: string;
  logoSvg?: string;
  subtext?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  dateBadge: string;
  author: string;
  excerpt: string;
  content: string;
  image: string;
  category?: string;
}

export interface DonationRecord {
  id: string;
  amount: number;
  donorName?: string;
  email?: string;
  createdAt: string;
}

export interface ContactSubmission {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  message: string;
  createdAt: string;
}

export interface SiteCopy {
  // Global
  phone: string;
  email: string;
  address: string;
  copyright: string;
  
  // Home
  homeHeroPretitle: string;
  homeHeroTitle: string;
  homeHeroSubtitle: string;
  homeLessonsHeading: string;
  homeLessonsSubtitle: string;
  homeLessonsDescription: string;
  homeReachHeading: string;
  homeReachDescription: string;
  homeBannerTitle: string;
  homeBannerSubtitle: string;
  homeCallout1Title: string;
  homeCallout1Text: string;
  homeCallout2Title: string;
  homeCallout2Text: string;
  homeCallout3Title: string;
  homeCallout3Text: string;
  homePartnerTitle: string;
  homePartnerSubtitle: string;

  // Lessons
  lessonsHeroPretitle: string;
  lessonsHeroTitle: string;
  lessonsHeroSubtitle: string;
  lessonsGardenHeading: string;
  lessonsGardenText: string;
  lessonsCompoundingHeading: string;
  lessonsCompoundingText: string;
  lessonsWarrenBuffettQuote: string;
  lessonsWarrenBuffettAuthor: string;
  lessonsVideoTitle: string;
  lessonsVideoSubtitle: string;
  lessonsDifferenceHeading: string;
  lessonsDifferenceSubtitle: string;
  lessonsDifferenceText1: string;
  lessonsDifferenceText2: string;

  // Millionaire Academy
  academyHeroTitle: string;
  academyHeroSubtitle: string;
  academyReasonsHeading: string;
  academyReasonsSubtitle: string;
  academyReasonsText: string;
  academyEnrollUrl: string;
  academyTestimonialQuote: string;
  academyTestimonialAuthor: string;
  academyTestimonialRole: string;

  // Services
  servicesHeroTitle: string;
  servicesHeroSubtitle: string;
  servicesToolsHeading: string;
  servicesToolsSubtitle: string;
  servicesRow1Title: string;
  servicesRow1Text: string;
  servicesRow2Title: string;
  servicesRow2Text: string;
  servicesRow3Title: string;
  servicesRow3Text: string;

  // MoneyTalk
  moneyTalkHeroPretitle: string;
  moneyTalkHeroSubtitle: string;

  // Donate
  donateHeroTitle: string;
  donateHeroSubtitle: string;
  donateCardHeading: string;
  donateCardSubheading: string;

  // Contact
  contactHeroTitle: string;
  contactHeroSubtitle: string;

  // Hero Images
  homeHeroImage: string;
  lessonsHeroImage: string;
  academyHeroImage: string;
  servicesHeroImage: string;
  moneyTalkHeroImage: string;
  donateHeroImage: string;
  compoundingBgImage: string;
  videoPosterImage: string;
}
