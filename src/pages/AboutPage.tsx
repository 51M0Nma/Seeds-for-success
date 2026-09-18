import React from 'react';
import { useContent } from '../context/ContentContext';
import { PartnerLogos } from '../components/PartnerLogos';
import { Target, Heart, Sparkles, CheckCircle2 } from 'lucide-react';

interface AboutPageProps {
  onNavigate: (path: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  const { copy } = useContent();

  return (
    <div id="about-page" className="w-full bg-white">
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center text-white bg-neutral-900 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={copy.aboutHeroImage}
            alt="About Seeds for Success"
            className="w-full h-full object-cover brightness-[0.35]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-neutral-950/40 to-neutral-950/60" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center flex flex-col items-center">
          <span className="text-xs uppercase tracking-[0.25em] text-emerald-400 font-semibold mb-4">
            {copy.aboutHeroPretitle}
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#23a976] mb-6 drop-shadow-md">
            {copy.aboutHeroTitle}
          </h1>
          <p className="max-w-2xl text-base sm:text-lg text-neutral-200 font-light leading-relaxed">
            {copy.aboutHeroSubtitle}
          </p>
        </div>
      </section>

      {/* Story & Philosophy */}
      <section className="py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <h2 className="font-serif text-3xl sm:text-4xl text-[#23a976]">
              {copy.aboutStoryHeading}
            </h2>
            <p className="text-base sm:text-lg leading-relaxed text-neutral-700">
              {copy.aboutStoryParagraph1}
            </p>
            <p className="text-base sm:text-lg leading-relaxed text-neutral-700">
              {copy.aboutStoryParagraph2}
            </p>
          </div>
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-neutral-200 aspect-4/3 lg:aspect-square">
              <img
                src={copy.aboutStoryImage}
                alt="Seeds for Success in action"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="p-8 rounded-2xl bg-neutral-50 border border-neutral-200">
            <Target className="w-8 h-8 text-[#23a976] mb-4" />
            <h3 className="font-serif text-xl font-bold text-neutral-900 mb-2">Our Goal</h3>
            <p className="text-sm text-neutral-600">Reaching 20,000 students across Ontario with free, high-impact financial lessons.</p>
          </div>
          <div className="p-8 rounded-2xl bg-neutral-50 border border-neutral-200">
            <Heart className="w-8 h-8 text-[#23a976] mb-4" />
            <h3 className="font-serif text-xl font-bold text-neutral-900 mb-2">One-for-One Model</h3>
            <p className="text-sm text-neutral-600">We donate one course to an underserved student for every course purchased by a supporter.</p>
          </div>
          <div className="p-8 rounded-2xl bg-neutral-50 border border-neutral-200">
            <Sparkles className="w-8 h-8 text-[#23a976] mb-4" />
            <h3 className="font-serif text-xl font-bold text-neutral-900 mb-2">Licensed Educators</h3>
            <p className="text-sm text-neutral-600">All workshops are taught by certified teachers and licensed financial professionals.</p>
          </div>
        </div>
      </section>

      {/* Partner Logos */}
      <section className="py-16 bg-[#fbfcfc] border-t border-neutral-100">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h3 className="font-serif text-2xl text-neutral-900 font-bold mb-8">Trusted by School Boards & Partners</h3>
          <PartnerLogos />
        </div>
      </section>
    </div>
  );
};
