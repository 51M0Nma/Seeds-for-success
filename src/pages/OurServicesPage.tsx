import React from 'react';
import { useContent } from '../context/ContentContext';
import { ArrowRight, ChevronRight, BookOpen, Award } from 'lucide-react';

interface OurServicesPageProps {
  onNavigate: (path: string) => void;
}

export const OurServicesPage: React.FC<OurServicesPageProps> = ({ onNavigate }) => {
  const { copy } = useContent();

  return (
    <div id="our-services-page" className="w-full bg-white">
      {/* 1. HERO BANNER */}
      <section
        id="services-hero-section"
        className="relative min-h-[75vh] flex items-center text-white bg-neutral-900 overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <img
            src={copy.servicesHeroImage}
            alt="Children learning together"
            className="w-full h-full object-cover object-center brightness-[0.4]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-neutral-950/40 to-neutral-950/60" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center flex flex-col items-center">
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#23a976] mb-6 drop-shadow-md">
            {copy.servicesHeroTitle}
          </h1>

          <p className="max-w-2xl text-base sm:text-lg md:text-xl text-neutral-200 font-light leading-relaxed">
            {copy.servicesHeroSubtitle}
          </p>
        </div>
      </section>

      {/* 2. EDUCATIONAL TOOLS BUILT FOR ALL */}
      <section id="services-tools-section" className="py-20 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-20">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#23a976] mb-4">
            {copy.servicesToolsHeading}
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 leading-relaxed max-w-3xl mx-auto font-normal">
            {copy.servicesToolsSubtitle}
          </p>
        </div>

        {/* Alternating Service Rows */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 sm:space-y-28">
          {/* Row 1: In-School Workshops */}
          <div id="service-row-1" className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="space-y-6">
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-neutral-900">
                {copy.servicesRow1Title}
              </h3>
              <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-normal">
                {copy.servicesRow1Text}
              </p>
              <button
                onClick={() => onNavigate('/contact')}
                className="px-7 py-2.5 rounded-full bg-[#465f5b] hover:bg-[#384e4a] text-white font-semibold text-xs uppercase tracking-wider transition-all shadow-sm active:scale-98 cursor-pointer"
              >
                Contact Us
              </button>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-lg aspect-4/3">
              <img
                src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80"
                alt="In-School Workshop in Ontario classroom"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Row 2: In-Office Seminars (Image Left, Text Right) */}
          <div id="service-row-2" className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="relative rounded-2xl overflow-hidden shadow-lg aspect-4/3 md:order-1">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80"
                alt="In-Office Financial Seminar"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="space-y-6 md:order-2">
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-neutral-900">
                {copy.servicesRow2Title}
              </h3>
              <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-normal">
                {copy.servicesRow2Text}
              </p>
              <button
                onClick={() => onNavigate('/contact')}
                className="px-7 py-2.5 rounded-full bg-[#465f5b] hover:bg-[#384e4a] text-white font-semibold text-xs uppercase tracking-wider transition-all shadow-sm active:scale-98 cursor-pointer"
              >
                Contact Us
              </button>
            </div>
          </div>

          {/* Row 3: Financial Coaching */}
          <div id="service-row-3" className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="space-y-6">
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-neutral-900">
                {copy.servicesRow3Title}
              </h3>
              <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-normal">
                {copy.servicesRow3Text}
              </p>
              <button
                onClick={() => onNavigate('/contact')}
                className="px-7 py-2.5 rounded-full bg-[#465f5b] hover:bg-[#384e4a] text-white font-semibold text-xs uppercase tracking-wider transition-all shadow-sm active:scale-98 cursor-pointer"
              >
                Contact Us
              </button>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-lg aspect-4/3">
              <img
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80"
                alt="One on one Financial Coaching session"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. MONEYTALK CARBON BANNER */}
      <section id="services-moneytalk-banner" className="py-20 bg-[#161819] text-white relative overflow-hidden border-y border-neutral-800">
        <div className="absolute inset-0 bg-[radial-gradient(#2a2d30_1px,transparent_1px)] [background-size:16px_16px] opacity-40" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          <span className="text-xs uppercase tracking-[0.2em] text-neutral-400 font-semibold mb-4">
            Daily Financial Digest
          </span>

          {/* MoneyTalk Logo Styling */}
          <div className="flex items-baseline justify-center gap-1.5 mb-4">
            <span className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white font-bold tracking-tight">
              Money
            </span>
            <span className="font-script text-4xl sm:text-5xl lg:text-6xl text-[#3ec48f] -rotate-6">
              Talk
            </span>
          </div>

          <p className="text-sm sm:text-base text-neutral-300 max-w-xl mb-8 font-light">
            Interested in increasing your financial IQ? Subscribe to our money talk blog where we educate you on everything money.
          </p>

          <button
            id="services-view-all-posts-btn"
            onClick={() => onNavigate('/moneytalk')}
            className="px-8 py-3 rounded-full bg-[#465f5b] hover:bg-[#384e4a] text-white font-semibold text-xs uppercase tracking-wider transition-all shadow-md cursor-pointer"
          >
            View All Posts
          </button>
        </div>
      </section>

      {/* 4. TWO PROMO CARDS (Online Lessons & Millionaire Academy) */}
      <section id="services-promo-cards" className="py-20 bg-[#f9fafb]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Card 1: Online Lessons */}
            <div className="bg-white rounded-2xl p-8 sm:p-10 shadow-sm border border-neutral-200/80 flex flex-col justify-between hover:shadow-md transition-shadow">
              <div className="space-y-4 mb-8">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 text-[#23a976] flex items-center justify-center">
                  <BookOpen className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-neutral-900">
                  Online Lessons
                </h3>
                <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-normal">
                  Financial lessons made for everyone. Access our full library of financial lessons and materials designed for students and families to learn fundamental financial principles.
                </p>
              </div>
              <button
                onClick={() => onNavigate('/lessons')}
                className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-[#23a976] hover:text-emerald-700 cursor-pointer self-start"
              >
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Card 2: Millionaire Academy */}
            <div className="bg-white rounded-2xl p-8 sm:p-10 shadow-sm border border-neutral-200/80 flex flex-col justify-between hover:shadow-md transition-shadow">
              <div className="space-y-4 mb-8">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 text-[#23a976] flex items-center justify-center">
                  <Award className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-neutral-900">
                  Millionaire Academy
                </h3>
                <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-normal">
                  An in-depth course covering an array of principles. Take your learning to the next level by sharpening your financial education with our robust and empowering online course.
                </p>
              </div>
              <button
                onClick={() => onNavigate('/millionaire-academy')}
                className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-[#23a976] hover:text-emerald-700 cursor-pointer self-start"
              >
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
