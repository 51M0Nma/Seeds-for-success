import React, { useState } from 'react';
import { useContent } from '../context/ContentContext';
import { VideoModal } from '../components/VideoModal';
import { Play, Sparkles, Heart, Users, ChevronRight } from 'lucide-react';

interface LessonsPageProps {
  onNavigate: (path: string) => void;
}

export const LessonsPage: React.FC<LessonsPageProps> = ({ onNavigate }) => {
  const { copy } = useContent();
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <div id="lessons-page" className="w-full bg-white">
      {/* 1. HERO BANNER */}
      <section
        id="lessons-hero-section"
        className="relative min-h-[85vh] lg:min-h-[90vh] flex items-center text-white bg-neutral-900 overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <img
            src={copy.lessonsHeroImage}
            alt="Young boy learning on computer"
            className="w-full h-full object-cover object-center brightness-[0.45] contrast-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-transparent" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-32 w-full">
          <div className="max-w-2xl">
            <span className="text-sm sm:text-base font-semibold tracking-wider text-emerald-400 uppercase mb-3 block">
              {copy.lessonsHeroPretitle}
            </span>

            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-none mb-6 whitespace-pre-line drop-shadow-md">
              {copy.lessonsHeroTitle}
            </h1>

            <p className="text-base sm:text-lg text-neutral-200 font-light leading-relaxed mb-8 max-w-xl">
              {copy.lessonsHeroSubtitle}
            </p>

            <button
              id="lessons-enroll-now-btn"
              onClick={() => onNavigate('/millionaire-academy')}
              className="px-8 py-3.5 rounded-full bg-[#3ec48f] hover:bg-[#32ab7b] text-neutral-950 font-bold text-sm tracking-wide uppercase transition-all shadow-lg hover:shadow-emerald-500/20 active:scale-98 cursor-pointer"
            >
              Enroll Now
            </button>
          </div>
        </div>
      </section>

      {/* 2. THREE-COLUMN STATS / FEATURES */}
      <section id="lessons-three-stats" className="py-16 sm:py-20 bg-white border-b border-neutral-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14">
            {/* Life Skills */}
            <div id="stat-life-skills" className="flex flex-col items-start space-y-3">
              <div className="w-10 h-10 rounded-full bg-emerald-50 text-[#23a976] flex items-center justify-center">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-[#23a976]">
                Life Skills
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed font-normal">
                Engage your child in our life skills lessons that range from public speaking to dining table etiquette.
              </p>
            </div>

            {/* Healthy Habits */}
            <div id="stat-healthy-habits" className="flex flex-col items-start space-y-3">
              <div className="w-10 h-10 rounded-full bg-emerald-50 text-[#23a976] flex items-center justify-center">
                <Heart className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-[#23a976]">
                Healthy Habits
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed font-normal">
                Developing healthy relationships with money to foster long term economic and social growth.
              </p>
            </div>

            {/* Seeds Community */}
            <div id="stat-seeds-community" className="flex flex-col items-start space-y-3">
              <div className="w-10 h-10 rounded-full bg-emerald-50 text-[#23a976] flex items-center justify-center">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-[#23a976]">
                Seeds Community
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed font-normal">
                Help us reach 20,000 students and build a strong inclusive economic community for all.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. THE GARDEN SECTION */}
      <section id="the-garden-section" className="py-20 lg:py-28 bg-[#fbfdfc]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#23a976] mb-8">
            {copy.lessonsGardenHeading}
          </h2>

          <div className="text-sm sm:text-base md:text-lg text-neutral-700 leading-relaxed space-y-4 font-normal text-left sm:text-center max-w-3xl mb-10">
            {copy.lessonsGardenText.split('\n\n').map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          <button
            id="enter-the-garden-btn"
            onClick={() => onNavigate('/millionaire-academy')}
            className="px-9 py-3 rounded-full bg-[#465f5b] hover:bg-[#384e4a] text-white font-semibold text-sm tracking-wider uppercase transition-all shadow-sm active:scale-98 cursor-pointer inline-flex items-center gap-2"
          >
            <span>Enter the Garden</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* 4. THE POWER OF COMPOUNDING FLOATING CARD */}
      <section
        id="power-of-compounding-section"
        className="relative py-24 sm:py-32 bg-neutral-900 overflow-hidden flex items-center justify-center"
      >
        <div className="absolute inset-0 z-0">
          <img
            src={copy.compoundingBgImage}
            alt="Bitcoins and currency notes"
            className="w-full h-full object-cover object-center brightness-[0.35]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]" />
        </div>

        <div className="relative z-10 max-w-3xl mx-4 sm:mx-6 w-full">
          <div className="bg-white/95 backdrop-blur-md rounded-2xl p-8 sm:p-12 text-center shadow-2xl border border-white/40">
            <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#23a976] mb-4 leading-tight">
              {copy.lessonsCompoundingHeading}
            </h3>
            <p className="text-base sm:text-lg text-neutral-700 leading-relaxed font-normal max-w-2xl mx-auto">
              {copy.lessonsCompoundingText}
            </p>
          </div>
        </div>
      </section>

      {/* 5. DARK WARREN BUFFETT QUOTE BANNER */}
      <section id="quote-buffett-section" className="py-16 sm:py-20 bg-[#222425] text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center justify-between">
            {/* Left side */}
            <div className="space-y-4">
              <p className="font-serif text-2xl sm:text-3xl text-neutral-100 leading-snug">
                Through our lessons, courses, and events, students are given the opportunity to learn life skills, in addition to finance.
              </p>
              <p className="text-xs uppercase tracking-widest text-emerald-400 font-semibold">
                Scroll left to view more
              </p>
            </div>

            {/* Right side quote */}
            <div className="border-l-2 border-emerald-500/50 pl-6 sm:pl-8 py-2">
              <blockquote className="font-serif text-xl sm:text-2xl text-white italic leading-relaxed mb-3">
                {copy.lessonsWarrenBuffettQuote}
              </blockquote>
              <cite className="text-sm font-semibold tracking-wider text-emerald-300 uppercase not-italic block">
                {copy.lessonsWarrenBuffettAuthor}
              </cite>
            </div>
          </div>
        </div>
      </section>

      {/* 6. VIDEO PLACEHOLDER ("Securing their future early") */}
      <section
        id="video-student-story-section"
        className="relative min-h-[500px] sm:min-h-[600px] flex items-center justify-center text-white bg-neutral-900 overflow-hidden group cursor-pointer"
        onClick={() => setIsVideoOpen(true)}
      >
        <div className="absolute inset-0 z-0">
          <img
            src={copy.videoPosterImage}
            alt="Student raising hand in classroom"
            className="w-full h-full object-cover object-center brightness-[0.4] group-hover:scale-105 transition-transform duration-700"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/60" />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center flex flex-col items-center">
          {/* Cyan Play Button */}
          <div
            id="video-play-btn"
            className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#00e6b8] hover:bg-[#1cf2c5] text-neutral-950 flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-all duration-300 mb-8 cursor-pointer"
          >
            <Play className="w-9 h-9 sm:w-11 sm:h-11 fill-neutral-950 ml-1" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#00e6b8] mb-3 leading-tight drop-shadow-md">
            {copy.lessonsVideoTitle}
          </h2>
          <p className="text-base sm:text-xl text-neutral-200 font-light drop-shadow-sm">
            {copy.lessonsVideoSubtitle}
          </p>
        </div>
      </section>

      {/* 7. WE WANT TO MAKE A DIFFERENCE SECTION */}
      <section id="make-a-difference-section" className="py-20 lg:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#23a976] mb-3">
            {copy.lessonsDifferenceHeading}
          </h2>
          <h3 className="text-lg font-medium text-neutral-700 mb-8">
            {copy.lessonsDifferenceSubtitle}
          </h3>

          <div className="text-sm sm:text-base text-neutral-600 leading-relaxed space-y-4 max-w-3xl mx-auto">
            <p>{copy.lessonsDifferenceText1}</p>
            <p>{copy.lessonsDifferenceText2}</p>
          </div>
        </div>

        {/* 3 Photo Strip with cyan underline */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="relative rounded-xl overflow-hidden shadow-md">
              <img
                src={copy.lessonsDifferenceImage1}
                alt="Mother helping child with learning"
                className="w-full h-64 object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="relative rounded-xl overflow-hidden shadow-md">
              <img
                src={copy.lessonsDifferenceImage2}
                alt="Teacher helping student write"
                className="w-full h-64 object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="relative rounded-xl overflow-hidden shadow-md">
              <img
                src={copy.lessonsDifferenceImage3}
                alt="Parent and child smiling at screen"
                className="w-full h-64 object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="h-1.5 w-full bg-[#00e6b8] absolute bottom-0 left-0" />
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      <VideoModal
        isOpen={isVideoOpen}
        onClose={() => setIsVideoOpen(false)}
        title={copy.lessonsVideoTitle}
      />
    </div>
  );
};
