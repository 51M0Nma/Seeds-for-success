import { SiteCopy, CurriculumModule, AlternatingBlock, PartnerLogo, BlogPost } from '../types';

export const initialSiteCopy: SiteCopy = {
  // Global
  phone: '(647) 285-4350',
  email: 'info@seedsforsuccess.academy',
  address: '5 Marine Parade Drive\nToronto, Ontario\nM8V4B4, Canada',
  copyright: '© 2026 Seeds for Success. All Rights Reserved.',

  // Home
  homeHeroPretitle: 'Financial Education Made Simple',
  homeHeroTitle: 'Financial\nLiteracy\nFor All',
  homeHeroSubtitle: 'Seeds for Success is a non-profit organization that teaches students how to build wealth and funds their first investments.',
  homeLessonsHeading: 'Financial Lessons',
  homeLessonsSubtitle: 'The lessons we offer have a life-long impact.',
  homeLessonsDescription: 'At the heart of our lessons are terms, methods, and practical examples demonstrating how to achieve financial freedom and generational wealth. Our lessons are taught by licensed financial professionals, business owners, and licensed teachers. We currently accept students between the ages of 7 to 18.',
  homeReachHeading: 'Help us reach 20,000 students',
  homeReachDescription: 'Seeds for Success offers students across Ontario a chance to start building a strong financial foundation early and at no cost. We believe introducing financial concepts to students backed by investment supports the development of their economic future while enhancing their overall confidence and self-esteem.',
  homeBannerTitle: "Let's invest in the future together.",
  homeBannerSubtitle: 'Future Builders. Investors. Mentor. Supporter.',
  homeCallout1Title: 'Free Online Lessons',
  homeCallout1Text: 'In an effort to make financial literacy accessible to all, we offer both free and affordable online lessons. Register and begin browsing our lessons today.',
  homeCallout2Title: 'In-School Workshops',
  homeCallout2Text: "Register your class for one of our interactive workshops where students learn financial concepts. Our workshops adhere to Ontario curriculum's specific and overall expectations.",
  homeCallout3Title: 'Summits',
  homeCallout3Text: 'Our seminars cover a wide range of topics including financial literacy and life skills. We believe introducing financial concepts early betters their economic future.',
  homePartnerTitle: 'Become a Partner',
  homePartnerSubtitle: 'Help us invest in our students and strengthen our communities.',

  // Lessons
  lessonsHeroPretitle: 'Enroll Today',
  lessonsHeroTitle: 'Online\nLessons',
  lessonsHeroSubtitle: 'Take advantage of free online lessons where we help students develop a wealth creation mindset. Lessons are hosted Every Saturday at 10AM.',
  lessonsGardenHeading: 'The Garden',
  lessonsGardenText: 'The garden is where you will find all of our financial literacy resources. Browse our library of lessons, worksheets and financial articles. Please return frequently as we plant new resources each week. The Garden was designed to provide a wide range of financial resources typically not available to students. The garden is our repository for financial learning. Whether you want to enrol in a course or enrol in individual financial lessons. We have something for every student.',
  lessonsCompoundingHeading: 'The Power of Compounding',
  lessonsCompoundingText: "The earlier you can plant a financial seed the longer it has to grow. Let's not only compound our children's investments, let's compound their knowledge.",
  lessonsWarrenBuffettQuote: '"Someone is sitting in the shade today because someone planted a tree a long time ago"',
  lessonsWarrenBuffettAuthor: '- Warren Buffett',
  lessonsVideoTitle: 'Securing their future early',
  lessonsVideoSubtitle: 'Hear what our students are learning from our lessons.',
  lessonsDifferenceHeading: 'We want to Make a Difference',
  lessonsDifferenceSubtitle: 'Helping to build a strong community',
  lessonsDifferenceText1: 'Our company was founded on the belief that each one must teach one. Seeds for Success donates one course for every course purchased by one of our supporters.',
  lessonsDifferenceText2: 'Our goal is to improve the lives of students everywhere. Each student should have an equal opportunity to health, wealth and financial literacy. We have dedicated our efforts to this worthy goal. Help us empower the next generation two students at a time.',

  // Millionaire Academy
  academyHeroTitle: 'The Millionaire Academy Course',
  academyHeroSubtitle: 'The Seeds millionaire Academy Course is our flagship course that contains over 100 hours of Financial literacy content. This revolutionary course consists of video, multiple choice, worksheets and real life scenarios that will help students grasp the concept of money.',
  academyReasonsHeading: 'Reasons to Join The Millionaire Academy',
  academyReasonsSubtitle: 'State of the art financial learning',
  academyReasonsText: "The Millionaire Academy Course covers all of the major financial topics needed for success in today's economy. This course has been designed to give students an in depth analysis of how to manage one's finances to create long term wealth. Some of the topics covered in this course are:",
  academyEnrollUrl: 'https://transactions.sendowl.com/products/78317247/7439E984/purchase',
  academyTestimonialQuote: 'The course was easy to understand. I liked the videos and the examples.',
  academyTestimonialAuthor: 'Kim P',
  academyTestimonialRole: 'Student',

  // Services
  servicesHeroTitle: 'Our Services',
  servicesHeroSubtitle: 'Whether you are just getting started on your financial journey or a financially expert, we have developed services to help you understand the principles of wealth creation.',
  servicesToolsHeading: 'Educational Tools Built For All',
  servicesToolsSubtitle: 'Financial literacy is imperative for wealth creation and the avoidance of debt. Only one third of adults consider themselves financially literate. Our services provide financial literacy for both children and adults',
  servicesRow1Title: 'In-School Workshops',
  servicesRow1Text: "Financial literacy will now play a larger part in the Ontario education Curriculum. Register your class for one of our interactive workshops where students learn financial concepts surrounding the Ontario curriculum's specific and overall expectations.",
  servicesRow2Title: 'In-Office Seminars',
  servicesRow2Text: 'Book one of our licensed financial advisors to help your staff grow, manage and protect their Investments. Our seminars cover topics such as retirement planning, estate planning, portfolio creation and life insurance.',
  servicesRow3Title: 'Financial Coaching',
  servicesRow3Text: 'Sit down with one of our licensed financial advisors to create a comprehensive financial plan based on your personal financial goals.',

  // MoneyTalk
  moneyTalkHeroPretitle: 'Financial Blog',
  moneyTalkHeroSubtitle: 'Interested in increasing your financial IQ? Read our Money Talk articles to learn everything money.',

  // Donate
  donateHeroTitle: 'Help us reach 20,000 students.',
  donateHeroSubtitle: 'Creating opportunities in the community.',
  donateCardHeading: 'Your contributions help us provide financial literacy lessons for our students.',
  donateCardSubheading: 'Thank you for your contribution.',

  // Contact
  contactHeroTitle: "Let's stay in contact!",
  contactHeroSubtitle: 'Please feel free to contact us with any questions or feedback you may have.',

  // Hero images & visual assets
  homeHeroImage: 'https://images.unsplash.com/photo-1621416894569-0f39ed31d247?auto=format&fit=crop&w=1920&q=80',
  lessonsHeroImage: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=1920&q=80',
  academyHeroImage: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1920&q=80',
  servicesHeroImage: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1920&q=80',
  moneyTalkHeroImage: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=1920&q=80',
  donateHeroImage: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=1920&q=80',
  compoundingBgImage: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1920&q=80',
  videoPosterImage: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1600&q=80'
};

export const initialCurriculumModules: CurriculumModule[] = [
  {
    id: 'stock-market',
    title: 'How The Stock Market Works',
    description: 'Learn the different types of stock analysis and why companies trade on the stock market.',
    iconName: 'TrendingUp'
  },
  {
    id: 'financial-behaviour',
    title: 'Identifying Financial Behaviour',
    description: 'Learn how our mental and emotional states affect our buying decisions.',
    iconName: 'UserCheck'
  },
  {
    id: 'net-worth',
    title: 'Assessing your Net worth',
    description: 'Learn why the measurement of your economic position can help you create wealth.',
    iconName: 'Gem'
  },
  {
    id: 'investment-options',
    title: 'Investment options',
    description: 'Examine the different types of investments available to the retail consumer.',
    iconName: 'Coins'
  },
  {
    id: 'auto-financing',
    title: 'Automobile Financing, Lease, and Loan Options',
    description: 'Learn about the different purchasing options that will fit your personal financial plan.',
    iconName: 'Car'
  },
  {
    id: 'cards',
    title: 'Debit Vs. Credit Cards',
    description: 'Students will examine the pros and cons of each payment method and how to use them to your advantage.',
    iconName: 'CreditCard'
  },
  {
    id: 'debt',
    title: 'Positive and Negative Debt',
    description: 'All debt is not bad. Learn how to effectively manage debt to your advantage.',
    iconName: 'Calculator'
  },
  {
    id: 'banking',
    title: 'Banking Essentials and Management',
    description: 'Having the right financial products and the right team of professionals is essential.',
    iconName: 'Building2'
  },
  {
    id: 'budgeting',
    title: 'Savings, Budgeting, and Expenses',
    description: 'Learn the importance of budgeting and automating your personal finances.',
    iconName: 'Wallet'
  },
  {
    id: 'taxes',
    title: 'Introduction to Taxes',
    description: 'Taxes have a major role in our finances. Learn how to effectively integrate taxes into your financial plan.',
    iconName: 'Receipt'
  },
  {
    id: 'estate-planning',
    title: 'Estate Planning',
    description: 'Students will learn about the different strategies we can use to pass our wealth to our heirs.',
    iconName: 'Home'
  },
  {
    id: 'insurance',
    title: 'Life Insurance and Risk Management',
    description: "Examine why life insurance should be in everyone's financial plan.",
    iconName: 'ShieldCheck'
  }
];

export const initialAlternatingBlocks: AlternatingBlock[] = [
  {
    id: 'block-1',
    title: 'Why Financial Education?',
    text: 'According to a 2014 survey conducted by the Canadian Financial Customer Agency, an astonishing 80% of Canadian youths were not confident in their financial knowledge.',
    image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Diverse students in front of chalkboard with smiling teacher'
  },
  {
    id: 'block-2',
    title: 'Creating Generational Freedom',
    text: 'Inspiring students to pass down knowledge, wealth and experience to the next generation.',
    image: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Generations sharing joy together',
    reverse: true
  },
  {
    id: 'block-3',
    title: 'Personal Independence',
    text: 'Giving students the skills to make wise decisions financially and socially.',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Student writing notes at desk'
  },
  {
    id: 'block-4',
    title: 'Seize the Moment',
    text: 'Teaching our youth to transform their skill to earn profits.',
    image: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Young person gaming with console controller',
    reverse: true
  },
  {
    id: 'block-5',
    title: 'Wealth Mentors',
    text: 'Supporting students with wisdom and experience to help them avoid costly financial mistakes.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Financial mentor advising young students over video conference'
  },
  {
    id: 'block-6',
    title: 'Crisis Ready',
    text: 'Preparing students with relevant skills to manoeuvre through economic ups and downs.',
    image: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Closed vintage sign indicating crisis resilience',
    reverse: true
  }
];

export const initialPartnerLogos: PartnerLogo[] = [
  { id: 'tdsb', name: 'Toronto District School Board', subtext: 'TDSB' },
  { id: 'peel', name: 'Peel District School Board', subtext: 'Peel Schools' },
  { id: 'dpcdsb', name: 'Dufferin-Peel Catholic District School Board', subtext: 'DPCDSB' },
  { id: 'tcdsb', name: 'Toronto Catholic District School Board', subtext: 'TCDSB' },
  { id: 'cpn', name: 'CPN FINANCIAL SERVICES LTD.', subtext: 'Financial Services' },
  { id: 'heard', name: 'THE HEARD', subtext: 'Community Initiative' },
  { id: 'ia', name: 'iA Financial Group', subtext: 'Industrial Alliance' },
  { id: 'hub', name: 'HUB International', subtext: 'Insurance & Risk' },
  { id: 'willful', name: 'willful.', subtext: 'Estate Planning' },
  { id: 'harris', name: 'THE HARRIS BRAND', subtext: '- ALL CANADIAN -' }
];

export const initialBlogPosts: BlogPost[] = [
  {
    id: 'post-1',
    title: 'What is Bitcoin?',
    slug: 'what-is-bitcoin',
    dateBadge: '6 Dec',
    author: 'Peter Simons',
    excerpt: 'Bitcoin may become the worlds reserve country.',
    content: 'Bitcoin is the pioneer cryptocurrency and the first decentralized digital currency. Created by Satoshi Nakamoto in 2009, it introduced blockchain technology to the world. In this article, Peter Simons explores whether Bitcoin could evolve into a global reserve asset and how young investors can understand its underlying mechanics safely.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
    category: 'Crypto'
  },
  {
    id: 'post-2',
    title: 'Is Ethereum the best Cryptocurrency?',
    slug: 'is-ethereum-the-best-cryptocurrency',
    dateBadge: '6 Dec',
    author: 'Peter Simons',
    excerpt: 'Do we need smart contracts?',
    content: 'Ethereum revolutionized decentralized applications by introducing programmable smart contracts. Unlike Bitcoin, which operates primarily as digital store-of-value, Ethereum powers decentralized finance (DeFi), tokenization, and digital agreements without intermediaries.',
    image: 'https://images.unsplash.com/photo-1622979135225-d2ba269bc1df?auto=format&fit=crop&w=800&q=80',
    category: 'Crypto'
  },
  {
    id: 'post-3',
    title: 'TFSA Basics',
    slug: 'tfsa-basics',
    dateBadge: '2 Mar',
    author: 'Peter Simons',
    excerpt: 'What you need to know about the TFSA',
    content: 'The Tax-Free Savings Account (TFSA) is one of the most powerful financial vehicles available to Canadians over 18. Any investment gains, dividends, and interest generated within a TFSA are completely tax-free upon withdrawal. Learn contribution limits and strategies for Canadian youth.',
    image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=800&q=80',
    category: 'Savings & Tax'
  },
  {
    id: 'post-4',
    title: 'Money Stressing you out?!',
    slug: 'money-stressing-you-out',
    dateBadge: '25 Feb',
    author: 'Peter Simons',
    excerpt: 'These few tips may help',
    content: 'Financial anxiety is remarkably common among young people stepping into adulthood. By organizing cash flows, building a small emergency buffer, and understanding the emotional psychology behind spending, students can regain control and calm.',
    image: 'https://images.unsplash.com/photo-1541199249251-f713e6145474?auto=format&fit=crop&w=800&q=80',
    category: 'Mindset'
  },
  {
    id: 'post-5',
    title: 'The Gretzky Philosophy',
    slug: 'the-gretzky-philosophy',
    dateBadge: '1 Oct',
    author: 'Peter Simons',
    excerpt: 'The Wayne Gretzky Philosophy and Investing',
    content: '"Skate to where the puck is going, not where it has been." This iconic quote by hockey legend Wayne Gretzky holds profound wisdom for young investors. Learn how forward-looking capital allocation beats chasing past performance.',
    image: 'https://images.unsplash.com/photo-1515703407324-5f753eed207b?auto=format&fit=crop&w=800&q=80',
    category: 'Investing'
  },
  {
    id: 'post-6',
    title: 'How to Benefit from Video Games',
    slug: 'how-to-benefit-from-video-games',
    dateBadge: '29 Sep',
    author: 'Peter Simons',
    excerpt: 'Does your Portfolio Include Video Games',
    content: 'Gaming is one of the largest entertainment industries in the world, eclipsing film and music combined. Young gamers have innate domain knowledge about game studios, hardware, and monetization models that can translate into savvy consumer awareness and strategic investing.',
    image: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&w=800&q=80',
    category: 'Industry Trends'
  },
  {
    id: 'post-7',
    title: 'Have You Taken A Bite Out of Apple?',
    slug: 'have-you-taken-a-bite-out-of-apple',
    dateBadge: '17 Sep',
    author: 'Peter Simons',
    excerpt: 'Apple Stock has a Split...So Now What?',
    content: 'Stock splits can be puzzling for new investors. When Apple splits its shares, the value of your holding does not magically increase or decrease, but accessibility increases. We break down the mechanics of share splits and what it means for long-term compound growth.',
    image: 'https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?auto=format&fit=crop&w=800&q=80',
    category: 'Stocks'
  }
];
