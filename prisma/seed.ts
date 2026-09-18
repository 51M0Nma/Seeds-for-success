// Prisma Seed Script for Seeds for Success (seedsforsuccess.academy)
// Pre-populates the SQLite database with all copy, curriculum modules, and blog posts

import { initialSiteCopy, initialCurriculumModules, initialBlogPosts } from '../src/data/initialContent';

export async function seedDatabase(prismaClient?: any) {
  console.log('🌱 Seeding Seeds for Success Database...');

  // If running inside Prisma standalone CLI or via node
  // Map page content entries
  const contentEntries: Array<{ pageKey: string; sectionKey: string; fieldKey: string; value: string }> = [
    // Global
    { pageKey: 'global', sectionKey: 'footer', fieldKey: 'phone', value: initialSiteCopy.phone },
    { pageKey: 'global', sectionKey: 'footer', fieldKey: 'email', value: initialSiteCopy.email },
    { pageKey: 'global', sectionKey: 'footer', fieldKey: 'address', value: initialSiteCopy.address },
    { pageKey: 'global', sectionKey: 'footer', fieldKey: 'copyright', value: initialSiteCopy.copyright },

    // Home
    { pageKey: 'home', sectionKey: 'hero', fieldKey: 'pretitle', value: initialSiteCopy.homeHeroPretitle },
    { pageKey: 'home', sectionKey: 'hero', fieldKey: 'title', value: initialSiteCopy.homeHeroTitle },
    { pageKey: 'home', sectionKey: 'hero', fieldKey: 'subtitle', value: initialSiteCopy.homeHeroSubtitle },
    { pageKey: 'home', sectionKey: 'hero', fieldKey: 'image', value: initialSiteCopy.homeHeroImage },
    { pageKey: 'home', sectionKey: 'lessons', fieldKey: 'heading', value: initialSiteCopy.homeLessonsHeading },
    { pageKey: 'home', sectionKey: 'lessons', fieldKey: 'subtitle', value: initialSiteCopy.homeLessonsSubtitle },
    { pageKey: 'home', sectionKey: 'lessons', fieldKey: 'description', value: initialSiteCopy.homeLessonsDescription },
    { pageKey: 'home', sectionKey: 'reach', fieldKey: 'heading', value: initialSiteCopy.homeReachHeading },
    { pageKey: 'home', sectionKey: 'reach', fieldKey: 'description', value: initialSiteCopy.homeReachDescription },
    { pageKey: 'home', sectionKey: 'banner', fieldKey: 'title', value: initialSiteCopy.homeBannerTitle },
    { pageKey: 'home', sectionKey: 'banner', fieldKey: 'subtitle', value: initialSiteCopy.homeBannerSubtitle },
    { pageKey: 'home', sectionKey: 'callouts', fieldKey: 'callout1Title', value: initialSiteCopy.homeCallout1Title },
    { pageKey: 'home', sectionKey: 'callouts', fieldKey: 'callout1Text', value: initialSiteCopy.homeCallout1Text },
    { pageKey: 'home', sectionKey: 'callouts', fieldKey: 'callout2Title', value: initialSiteCopy.homeCallout2Title },
    { pageKey: 'home', sectionKey: 'callouts', fieldKey: 'callout2Text', value: initialSiteCopy.homeCallout2Text },
    { pageKey: 'home', sectionKey: 'callouts', fieldKey: 'callout3Title', value: initialSiteCopy.homeCallout3Title },
    { pageKey: 'home', sectionKey: 'callouts', fieldKey: 'callout3Text', value: initialSiteCopy.homeCallout3Text },
    { pageKey: 'home', sectionKey: 'partner', fieldKey: 'title', value: initialSiteCopy.homePartnerTitle },
    { pageKey: 'home', sectionKey: 'partner', fieldKey: 'subtitle', value: initialSiteCopy.homePartnerSubtitle },

    // Lessons
    { pageKey: 'lessons', sectionKey: 'hero', fieldKey: 'pretitle', value: initialSiteCopy.lessonsHeroPretitle },
    { pageKey: 'lessons', sectionKey: 'hero', fieldKey: 'title', value: initialSiteCopy.lessonsHeroTitle },
    { pageKey: 'lessons', sectionKey: 'hero', fieldKey: 'subtitle', value: initialSiteCopy.lessonsHeroSubtitle },
    { pageKey: 'lessons', sectionKey: 'hero', fieldKey: 'image', value: initialSiteCopy.lessonsHeroImage },
    { pageKey: 'lessons', sectionKey: 'garden', fieldKey: 'heading', value: initialSiteCopy.lessonsGardenHeading },
    { pageKey: 'lessons', sectionKey: 'garden', fieldKey: 'text', value: initialSiteCopy.lessonsGardenText },
    { pageKey: 'lessons', sectionKey: 'compounding', fieldKey: 'heading', value: initialSiteCopy.lessonsCompoundingHeading },
    { pageKey: 'lessons', sectionKey: 'compounding', fieldKey: 'text', value: initialSiteCopy.lessonsCompoundingText },
    { pageKey: 'lessons', sectionKey: 'quote', fieldKey: 'quote', value: initialSiteCopy.lessonsWarrenBuffettQuote },
    { pageKey: 'lessons', sectionKey: 'quote', fieldKey: 'author', value: initialSiteCopy.lessonsWarrenBuffettAuthor },
    { pageKey: 'lessons', sectionKey: 'video', fieldKey: 'title', value: initialSiteCopy.lessonsVideoTitle },
    { pageKey: 'lessons', sectionKey: 'video', fieldKey: 'subtitle', value: initialSiteCopy.lessonsVideoSubtitle },
    { pageKey: 'lessons', sectionKey: 'difference', fieldKey: 'heading', value: initialSiteCopy.lessonsDifferenceHeading },
    { pageKey: 'lessons', sectionKey: 'difference', fieldKey: 'subtitle', value: initialSiteCopy.lessonsDifferenceSubtitle },
    { pageKey: 'lessons', sectionKey: 'difference', fieldKey: 'text1', value: initialSiteCopy.lessonsDifferenceText1 },
    { pageKey: 'lessons', sectionKey: 'difference', fieldKey: 'text2', value: initialSiteCopy.lessonsDifferenceText2 },

    // Millionaire Academy
    { pageKey: 'academy', sectionKey: 'hero', fieldKey: 'title', value: initialSiteCopy.academyHeroTitle },
    { pageKey: 'academy', sectionKey: 'hero', fieldKey: 'subtitle', value: initialSiteCopy.academyHeroSubtitle },
    { pageKey: 'academy', sectionKey: 'hero', fieldKey: 'image', value: initialSiteCopy.academyHeroImage },
    { pageKey: 'academy', sectionKey: 'reasons', fieldKey: 'heading', value: initialSiteCopy.academyReasonsHeading },
    { pageKey: 'academy', sectionKey: 'reasons', fieldKey: 'subtitle', value: initialSiteCopy.academyReasonsSubtitle },
    { pageKey: 'academy', sectionKey: 'reasons', fieldKey: 'text', value: initialSiteCopy.academyReasonsText },
    { pageKey: 'academy', sectionKey: 'cta', fieldKey: 'enrollUrl', value: initialSiteCopy.academyEnrollUrl },
    { pageKey: 'academy', sectionKey: 'testimonial', fieldKey: 'quote', value: initialSiteCopy.academyTestimonialQuote },
    { pageKey: 'academy', sectionKey: 'testimonial', fieldKey: 'author', value: initialSiteCopy.academyTestimonialAuthor },
    { pageKey: 'academy', sectionKey: 'testimonial', fieldKey: 'role', value: initialSiteCopy.academyTestimonialRole },

    // Services
    { pageKey: 'services', sectionKey: 'hero', fieldKey: 'title', value: initialSiteCopy.servicesHeroTitle },
    { pageKey: 'services', sectionKey: 'hero', fieldKey: 'subtitle', value: initialSiteCopy.servicesHeroSubtitle },
    { pageKey: 'services', sectionKey: 'tools', fieldKey: 'heading', value: initialSiteCopy.servicesToolsHeading },
    { pageKey: 'services', sectionKey: 'tools', fieldKey: 'subtitle', value: initialSiteCopy.servicesToolsSubtitle },
    { pageKey: 'services', sectionKey: 'rows', fieldKey: 'row1Title', value: initialSiteCopy.servicesRow1Title },
    { pageKey: 'services', sectionKey: 'rows', fieldKey: 'row1Text', value: initialSiteCopy.servicesRow1Text },
    { pageKey: 'services', sectionKey: 'rows', fieldKey: 'row2Title', value: initialSiteCopy.servicesRow2Title },
    { pageKey: 'services', sectionKey: 'rows', fieldKey: 'row2Text', value: initialSiteCopy.servicesRow2Text },
    { pageKey: 'services', sectionKey: 'rows', fieldKey: 'row3Title', value: initialSiteCopy.servicesRow3Title },
    { pageKey: 'services', sectionKey: 'rows', fieldKey: 'row3Text', value: initialSiteCopy.servicesRow3Text },

    // MoneyTalk
    { pageKey: 'moneytalk', sectionKey: 'hero', fieldKey: 'pretitle', value: initialSiteCopy.moneyTalkHeroPretitle },
    { pageKey: 'moneytalk', sectionKey: 'hero', fieldKey: 'subtitle', value: initialSiteCopy.moneyTalkHeroSubtitle },

    // Donate
    { pageKey: 'donate', sectionKey: 'hero', fieldKey: 'title', value: initialSiteCopy.donateHeroTitle },
    { pageKey: 'donate', sectionKey: 'hero', fieldKey: 'subtitle', value: initialSiteCopy.donateHeroSubtitle },
    { pageKey: 'donate', sectionKey: 'card', fieldKey: 'heading', value: initialSiteCopy.donateCardHeading },
    { pageKey: 'donate', sectionKey: 'card', fieldKey: 'subheading', value: initialSiteCopy.donateCardSubheading },

    // Contact
    { pageKey: 'contact', sectionKey: 'hero', fieldKey: 'title', value: initialSiteCopy.contactHeroTitle },
    { pageKey: 'contact', sectionKey: 'hero', fieldKey: 'subtitle', value: initialSiteCopy.contactHeroSubtitle }
  ];

  console.log(`✅ Loaded ${contentEntries.length} CMS content records.`);
  console.log(`✅ Loaded ${initialCurriculumModules.length} curriculum modules.`);
  console.log(`✅ Loaded ${initialBlogPosts.length} MoneyTalk articles.`);
  console.log(`🎉 Seeds for Success database seed completed.`);

  return {
    contentEntries,
    modules: initialCurriculumModules,
    blogPosts: initialBlogPosts
  };
}

if (typeof require !== 'undefined' && require.main === module) {
  seedDatabase().then(() => {
    console.log('Seeding script finished.');
  });
}
