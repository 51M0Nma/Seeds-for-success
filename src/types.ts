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
  homeHeroImage: string;
  homeLessonsHeading: string;
  homeLessonsSubtitle: string;
  homeLessonsDescription: string;
  homeReachHeading: string;
  homeReachDescription: string;
  homeBannerTitle: string;
  homeBannerSubtitle: string;
  homeBannerImage: string;
  homeCallout1Title: string;
  homeCallout1Text: string;
  homeCallout2Title: string;
  homeCallout2Text: string;
  homeCallout3Title: string;
  homeCallout3Text: string;
  homeClassroomPhoto1: string;
  homeClassroomPhoto2: string;
  homeClassroomPhoto3: string;
  homePartnerTitle: string;
  homePartnerSubtitle: string;

  // Lessons
  lessonsHeroPretitle: string;
  lessonsHeroTitle: string;
  lessonsHeroSubtitle: string;
  lessonsHeroImage: string;
  lessonsGardenHeading: string;
  lessonsGardenText: string;
  lessonsCompoundingHeading: string;
  lessonsCompoundingText: string;
  compoundingBgImage: string;
  lessonsWarrenBuffettQuote: string;
  lessonsWarrenBuffettAuthor: string;
  lessonsVideoTitle: string;
  lessonsVideoSubtitle: string;
  videoPosterImage: string;
  lessonsDifferenceHeading: string;
  lessonsDifferenceSubtitle: string;
  lessonsDifferenceText1: string;
  lessonsDifferenceText2: string;
  lessonsDifferenceImage1: string;
  lessonsDifferenceImage2: string;
  lessonsDifferenceImage3: string;

  // Millionaire Academy
  academyHeroTitle: string;
  academyHeroSubtitle: string;
  academyHeroImage: string;
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
  servicesHeroImage: string;
  servicesToolsHeading: string;
  servicesToolsSubtitle: string;
  servicesRow1Title: string;
  servicesRow1Text: string;
  servicesRow1Image: string;
  servicesRow2Title: string;
  servicesRow2Text: string;
  servicesRow2Image: string;
  servicesRow3Title: string;
  servicesRow3Text: string;
  servicesRow3Image: string;

  // MoneyTalk
  moneyTalkHeroPretitle: string;
  moneyTalkHeroSubtitle: string;
  moneyTalkHeroImage: string;

  // Donate
  donateHeroTitle: string;
  donateHeroSubtitle: string;
  donateHeroImage: string;
  donateCardHeading: string;
  donateCardSubheading: string;

  // Contact
  contactHeroTitle: string;
  contactHeroSubtitle: string;
  contactHeroImage: string;

  // About
  aboutHeroPretitle: string;
  aboutHeroTitle: string;
  aboutHeroSubtitle: string;
  aboutHeroImage: string;
  aboutStoryHeading: string;
  aboutStoryParagraph1: string;
  aboutStoryParagraph2: string;
  aboutStoryImage: string;
}
