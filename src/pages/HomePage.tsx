import React from 'react';
import { useContent } from '../context/ContentContext';
import { CurriculumGrid } from '../components/CurriculumGrid';
import { PartnerLogos } from '../components/PartnerLogos';
import { ArrowRight, BookOpen, GraduationCap, Users } from 'lucide-react';

interface HomePageProps {
  onNavigate: (path: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const { copy, curriculum, alternatingBlocks } = useContent();

  return (
    <div id="home-page" className="w-full bg-white">
      {/* 1. HERO BANNER */}
      <section
        id="home-hero-section"
        className="relative min-h-[90vh] lg:min-h-screen flex items-center justify-center text-white bg-neutral-900 overflow-hidden"
      >
        {/* Background Image with Dark Vignette */}
        <div className="absolute inset-0 z-0">
          <img
            src={copy.homeHeroImage}
            alt="Financial wealth and coins background"
            className="w-full h-full object-cover object-center brightness-[0.38] contrast-110"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/75" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center flex flex-col items-center">
          <span className="text-sm sm:text-base font-medium tracking-wide text-neutral-300 uppercase mb-4 drop-shadow-sm">
            {copy.homeHeroPretitle}
          </span>

          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-white leading-[1.08] mb-6 drop-shadow-md whitespace-pre-line">
            {copy.homeHeroTitle}
          </h1>

          <p className="max-w-2xl text-base sm:text-lg md:text-xl text-neutral-200 font-light leading-relaxed mb-10 drop-shadow-sm">
            {copy.homeHeroSubtitle}
          </p>

          <div className="flex flex-wrap gap-4 items-center justify-center">
            <button
              id="hero-upcoming-events-btn"
              onClick={() => onNavigate('/lessons')}
              className="px-8 py-3.5 rounded-full bg-[#3ec48f] hover:bg-[#34ad7d] text-neutral-950 font-bold text-sm tracking-wide uppercase transition-all shadow-lg hover:shadow-emerald-500/20 active:scale-98 cursor-pointer"
            >
              Upcoming Events
            </button>
            <button
              id="hero-enroll-lessons-btn"
              onClick={() => onNavigate('/millionaire-academy')}
              className="px-8 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-sm tracking-wide uppercase backdrop-blur-sm border border-white/25 transition-all cursor-pointer"
            >
              The Millionaire Academy
            </button>
          </div>
        </div>
      </section>

      {/* 2. FINANCIAL LESSONS SECTION */}
      <section id="financial-lessons-section" className="py-20 lg:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Heading */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#23a976] mb-3">
              {copy.homeLessonsHeading}
            </h2>
            <h3 className="text-lg sm:text-xl font-medium text-neutral-800 mb-6">
              {copy.homeLessonsSubtitle}
            </h3>
            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
              {copy.homeLessonsDescription}
            </p>
          </div>

          {/* Curriculum Grid */}
          <CurriculumGrid modules={curriculum} />

          {/* Bottom Callout & Button */}
          <div className="mt-16 text-center pt-8 border-t border-neutral-100 flex flex-col items-center">
            <p className="text-base font-medium text-neutral-700 mb-4">
              Register for one of our sessions.
            </p>
            <button
              id="home-get-started-btn"
              onClick={() => onNavigate('/lessons')}
              className="px-8 py-3 rounded-full bg-[#465f5b] hover:bg-[#384e4a] text-white font-semibold text-sm tracking-wide uppercase transition-all shadow-sm active:scale-98 cursor-pointer"
            >
              Get Started
            </button>
          </div>
        </div>
      </section>

      {/* 3. 6-BLOCK ALTERNATING GREEN / PHOTO GRID */}
      <section id="alternating-feature-grid" className="w-full bg-[#f4f7f5]">
        <div className="max-w-7xl mx-auto">
          {alternatingBlocks.map((block, idx) => {
            const isEven = idx % 2 === 1;
            return (
              <div
                key={block.id}
                id={`block-${block.id}`}
                className="grid grid-cols-1 md:grid-cols-2 items-stretch"
              >
                {/* Content Box (Emerald Green) */}
                <div
                  className={`p-8 sm:p-12 lg:p-16 flex flex-col justify-center text-white ${
                    isEven ? 'md:order-2' : 'md:order-1'
                  } bg-[#3ebd8c]`}
                >
                  <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-4 text-white leading-tight">
                    {block.title}
                  </h3>
                  <p className="text-base sm:text-lg text-emerald-50/95 font-light leading-relaxed">
                    {block.text}
                  </p>
                </div>

                {/* Photo Box */}
                <div
                  className={`relative min-h-[280px] sm:min-h-[360px] lg:min-h-[420px] overflow-hidden ${
                    isEven ? 'md:order-1' : 'md:order-2'
                  }`}
                >
                  <img
                    src={block.image}
                    alt={block.imageAlt}
                    className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. HELP US REACH 20,000 STUDENTS & 10 PARTNER LOGOS */}
      <section id="reach-20000-section" className="py-20 lg:py-28 bg-white border-b border-neutral-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#23a976] mb-6">
            {copy.homeReachHeading}
          </h2>
          <p className="text-base sm:text-lg text-neutral-700 leading-relaxed max-w-3xl mx-auto mb-12">
            {copy.homeReachDescription}
          </p>

          {/* 10 Partner Logos Strip */}
          <PartnerLogos />
        </div>
      </section>

      {/* 5. "LET'S INVEST IN THE FUTURE TOGETHER" BANNER */}
      <section
        id="invest-future-banner"
        className="relative py-28 sm:py-36 text-white overflow-hidden bg-neutral-900"
      >
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1920&q=80"
            alt="Teacher and students classroom"
            className="w-full h-full object-cover object-center brightness-[0.35]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-neutral-950/60" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white mb-4 leading-tight">
            {copy.homeBannerTitle}
          </h2>
          <p className="text-lg sm:text-xl text-neutral-300 font-light tracking-wide">
            {copy.homeBannerSubtitle}
          </p>
        </div>
      </section>

      {/* 6. THREE CALLOUTS (Dark Charcoal Background) */}
      <section id="three-callouts-section" className="py-16 lg:py-24 bg-[#1f2224] text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {/* Callout 1 */}
            <div id="callout-1" className="flex flex-col space-y-3">
              <div className="w-10 h-10 rounded-full bg-emerald-950 text-emerald-400 flex items-center justify-center mb-2">
                <BookOpen className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-white font-serif">
                {copy.homeCallout1Title}
              </h3>
              <p className="text-sm text-neutral-300 leading-relaxed font-light">
                {copy.homeCallout1Text}
              </p>
              <button
                onClick={() => onNavigate('/lessons')}
                className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#3ec48f] hover:text-emerald-300 pt-2"
              >
                <span>Browse Lessons</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Callout 2 */}
            <div id="callout-2" className="flex flex-col space-y-3">
              <div className="w-10 h-10 rounded-full bg-emerald-950 text-emerald-400 flex items-center justify-center mb-2">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-white font-serif">
                {copy.homeCallout2Title}
              </h3>
              <p className="text-sm text-neutral-300 leading-relaxed font-light">
                {copy.homeCallout2Text}
              </p>
              <button
                onClick={() => onNavigate('/our-services')}
                className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#3ec48f] hover:text-emerald-300 pt-2"
              >
                <span>View Workshops</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Callout 3 */}
            <div id="callout-3" className="flex flex-col space-y-3">
              <div className="w-10 h-10 rounded-full bg-emerald-950 text-emerald-400 flex items-center justify-center mb-2">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-white font-serif">
                {copy.homeCallout3Title}
              </h3>
              <p className="text-sm text-neutral-300 leading-relaxed font-light">
                {copy.homeCallout3Text}
              </p>
              <button
                onClick={() => onNavigate('/contact')}
                className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#3ec48f] hover:text-emerald-300 pt-2"
              >
                <span>Inquire Summits</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 7. THREE CLASSROOM PHOTOS STRIP */}
      <section id="classroom-photos-strip" className="grid grid-cols-1 sm:grid-cols-3 w-full">
        <div className="relative h-64 sm:h-72 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=700&q=80"
            alt="Students in classroom"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative h-64 sm:h-72 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=700&q=80"
            alt="Teacher leading workshop discussion"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative h-64 sm:h-72 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=700&q=80"
            alt="Students engaged in worksheet study"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            referrerPolicy="no-referrer"
          />
        </div>
      </section>

      {/* 8. BECOME A PARTNER SECTION */}
      <section id="become-partner-section" className="py-14 sm:py-20 bg-[#25292a] text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="font-serif text-3xl sm:text-4xl text-white mb-2">
              {copy.homePartnerTitle}
            </h2>
            <p className="text-neutral-300 text-sm sm:text-base font-light">
              {copy.homePartnerSubtitle}
            </p>
          </div>
          <button
            id="partner-donate-now-btn"
            onClick={() => onNavigate('/donate')}
            className="px-8 py-3.5 rounded-full bg-[#3ec48f] hover:bg-[#32ab7b] text-neutral-950 font-bold text-sm tracking-wide uppercase transition-all shadow-md active:scale-98 flex-shrink-0 cursor-pointer"
          >
            Donate Now
          </button>
        </div>
      </section>
    </div>
  );
};
