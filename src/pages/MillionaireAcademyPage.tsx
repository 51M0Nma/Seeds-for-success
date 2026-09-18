import React from 'react';
import { useContent } from '../context/ContentContext';
import { CurriculumGrid } from '../components/CurriculumGrid';
import { ExternalLink, CheckCircle2, Award, Clock, BookOpen } from 'lucide-react';

interface MillionaireAcademyPageProps {
  onNavigate: (path: string) => void;
}

export const MillionaireAcademyPage: React.FC<MillionaireAcademyPageProps> = ({ onNavigate: _onNavigate }) => {
  const { copy, curriculum } = useContent();

  const handleEnrollClick = () => {
    // Exactly as requested: redirects to SendOwl purchase link
    window.location.href = copy.academyEnrollUrl || 'https://transactions.sendowl.com/products/78317247/7439E984/purchase';
  };

  return (
    <div id="millionaire-academy-page" className="w-full bg-white">
      {/* 1. HERO BANNER */}
      <section
        id="academy-hero-section"
        className="relative min-h-[80vh] flex items-center text-white bg-neutral-900 overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <img
            src={copy.academyHeroImage}
            alt="Teacher and students in academy classroom"
            className="w-full h-full object-cover object-center brightness-[0.38]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-neutral-950/50 to-neutral-950/70" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center flex flex-col items-center">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 text-xs font-semibold tracking-wider uppercase mb-6">
            <Award className="w-3.5 h-3.5" /> Flagship Course
          </span>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#23a976] mb-6 drop-shadow-md">
            {copy.academyHeroTitle}
          </h1>

          <p className="max-w-3xl text-base sm:text-lg md:text-xl text-neutral-200 font-light leading-relaxed mb-8">
            {copy.academyHeroSubtitle}
          </p>

          {/* Quick stats strip */}
          <div className="grid grid-cols-3 gap-4 sm:gap-8 max-w-lg mx-auto mb-10 pt-4 border-t border-white/10 text-center">
            <div>
              <p className="text-2xl sm:text-3xl font-bold text-white font-serif">100+</p>
              <p className="text-xs text-neutral-400 uppercase tracking-wider">Hours Content</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-bold text-white font-serif">12</p>
              <p className="text-xs text-neutral-400 uppercase tracking-wider">Core Modules</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-bold text-white font-serif">Ages 7-18</p>
              <p className="text-xs text-neutral-400 uppercase tracking-wider">All Students</p>
            </div>
          </div>

          <button
            id="academy-hero-enroll-btn"
            onClick={handleEnrollClick}
            className="px-9 py-3.5 rounded-full bg-[#3ec48f] hover:bg-[#32ab7b] text-neutral-950 font-bold text-sm tracking-wide uppercase transition-all shadow-xl hover:shadow-emerald-500/20 active:scale-98 inline-flex items-center gap-2 cursor-pointer"
          >
            <span>Enroll Now</span>
            <ExternalLink className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* 2. REASONS TO JOIN THE MILLIONAIRE ACADEMY */}
      <section id="academy-reasons-section" className="py-20 lg:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#23a976] mb-3">
              {copy.academyReasonsHeading}
            </h2>
            <h3 className="text-lg sm:text-xl font-medium text-neutral-800 mb-6">
              {copy.academyReasonsSubtitle}
            </h3>
            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
              {copy.academyReasonsText}
            </p>
          </div>

          {/* Curriculum Grid */}
          <CurriculumGrid modules={curriculum} />

          {/* Bottom Enroll CTA banner */}
          <div className="mt-20 pt-12 border-t border-neutral-200 text-center flex flex-col items-center">
            <p className="text-lg font-serif font-bold text-neutral-800 mb-4">
              Enrol to start learning online.
            </p>
            <button
              id="academy-curriculum-enroll-now-btn"
              onClick={handleEnrollClick}
              className="px-10 py-3.5 rounded-full bg-[#465f5b] hover:bg-[#384e4a] text-white font-semibold text-sm tracking-wider uppercase transition-all shadow-md active:scale-98 inline-flex items-center gap-2 cursor-pointer"
            >
              <span>Enroll Now</span>
              <ExternalLink className="w-4 h-4" />
            </button>
            <p className="text-xs text-neutral-400 mt-3">
              Instant access • Self-paced video & interactive worksheets
            </p>
          </div>
        </div>
      </section>

      {/* 3. TESTIMONIAL BLOCK */}
      <section id="academy-testimonial-section" className="py-20 sm:py-28 bg-[#1a1d1e] text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          <span className="text-xs uppercase tracking-[0.25em] text-neutral-400 font-semibold mb-8">
            TESTIMONIES
          </span>

          <blockquote className="font-serif text-2xl sm:text-3xl lg:text-4xl text-white font-normal leading-snug mb-8">
            &ldquo;{copy.academyTestimonialQuote}&rdquo;
          </blockquote>

          <div className="flex flex-col items-center">
            <cite className="font-bold text-base text-white not-italic">
              {copy.academyTestimonialAuthor}
            </cite>
            <span className="text-xs uppercase tracking-wider text-emerald-400 mt-0.5">
              {copy.academyTestimonialRole}
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};
