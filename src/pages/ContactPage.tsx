import React, { useState } from 'react';
import { useContent } from '../context/ContentContext';
import { CheckCircle2, ArrowRight, BookOpen, Award } from 'lucide-react';

interface ContactPageProps {
  onNavigate: (path: string) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  const { copy, addContact } = useContent();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email) return;

    addContact({
      fullName,
      email,
      phone,
      message
    });

    setIsSubmitted(true);
  };

  return (
    <div id="contact-page" className="w-full bg-white min-h-screen">
      {/* 1. MAIN CONTACT SECTION */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-28 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column matching screenshot */}
          <div className="lg:col-span-5 space-y-6">
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#23a976] font-bold leading-tight">
              {copy.contactHeroTitle}
            </h1>

            <p className="text-base sm:text-lg text-neutral-600 leading-relaxed font-normal">
              {copy.contactHeroSubtitle}
            </p>

            {/* Circular Social Buttons in Teal */}
            <div className="flex items-center gap-3 pt-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Seeds for Success Facebook"
                className="w-10 h-10 rounded-full bg-[#3ec48f] text-neutral-950 hover:bg-[#34ad7d] flex items-center justify-center transition-transform hover:scale-105 shadow-sm"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Seeds for Success Instagram"
                className="w-10 h-10 rounded-full bg-[#3ec48f] text-neutral-950 hover:bg-[#34ad7d] flex items-center justify-center transition-transform hover:scale-105 shadow-sm"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>

            {/* Visual Team/Support Photo */}
            <div className="relative rounded-2xl overflow-hidden shadow-sm border border-neutral-200 aspect-16/10 mt-6">
              <img
                src={copy.contactHeroImage}
                alt="Seeds for Success team and workshop"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 bg-[#fbfcfc] p-8 sm:p-10 rounded-2xl border border-neutral-200 shadow-xs">
            {isSubmitted ? (
              <div className="py-12 text-center">
                <div className="w-14 h-14 rounded-full bg-emerald-100 text-[#23a976] flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-neutral-900 mb-2">
                  Message Sent Successfully
                </h3>
                <p className="text-sm text-neutral-600 max-w-sm mx-auto mb-6">
                  Thank you for reaching out to Seeds for Success. Our team will review your message and reply shortly.
                </p>
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setFullName('');
                    setEmail('');
                    setPhone('');
                    setMessage('');
                  }}
                  className="px-6 py-2 rounded-full bg-[#465f5b] text-white text-xs font-semibold uppercase tracking-wider"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-600 mb-1.5">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={e => setFullName(e.target.value)}
                    placeholder="Jane Doe"
                    className="w-full px-4 py-3 rounded-xl border border-neutral-300 text-sm focus:outline-none focus:border-[#3ec48f] focus:ring-1 focus:ring-[#3ec48f] bg-white"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-600 mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      placeholder="jane@example.com"
                      className="w-full px-4 py-3 rounded-xl border border-neutral-300 text-sm focus:outline-none focus:border-[#3ec48f] focus:ring-1 focus:ring-[#3ec48f] bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-600 mb-1.5">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={e => setPhone(e.target.value)}
                      placeholder="(647) 000-0000"
                      className="w-full px-4 py-3 rounded-xl border border-neutral-300 text-sm focus:outline-none focus:border-[#3ec48f] focus:ring-1 focus:ring-[#3ec48f] bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-600 mb-1.5">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                    placeholder="Tell us about your school, organization, or questions..."
                    className="w-full px-4 py-3 rounded-xl border border-neutral-300 text-sm focus:outline-none focus:border-[#3ec48f] focus:ring-1 focus:ring-[#3ec48f] bg-white"
                  />
                </div>

                <p className="text-[11px] text-neutral-500 leading-relaxed">
                  By clicking &quot;Submit&quot;, you grant Seeds for Success permission to communicate with you electronically about products, services, news, and promotions via the contact information provided.
                </p>

                <button
                  id="contact-form-submit-btn"
                  type="submit"
                  className="px-8 py-3 rounded-full bg-[#465f5b] hover:bg-[#384e4a] text-white font-semibold text-xs uppercase tracking-wider transition-all shadow-sm active:scale-98 cursor-pointer"
                >
                  Submit
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* 2. MONEYTALK BANNER */}
      <section className="py-20 bg-[#161819] text-white relative overflow-hidden border-y border-neutral-800">
        <div className="absolute inset-0 bg-[radial-gradient(#2a2d30_1px,transparent_1px)] [background-size:16px_16px] opacity-40" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          <span className="text-xs uppercase tracking-[0.2em] text-neutral-400 font-semibold mb-4">
            Daily Financial Digest
          </span>

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
            onClick={() => onNavigate('/moneytalk')}
            className="px-8 py-3 rounded-full bg-[#465f5b] hover:bg-[#384e4a] text-white font-semibold text-xs uppercase tracking-wider transition-all shadow-md cursor-pointer"
          >
            View All Posts
          </button>
        </div>
      </section>

      {/* 3. TWO PROMO CARDS */}
      <section className="py-20 bg-[#f9fafb]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            <div className="bg-white rounded-2xl p-8 sm:p-10 shadow-sm border border-neutral-200/80 flex flex-col justify-between">
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

            <div className="bg-white rounded-2xl p-8 sm:p-10 shadow-sm border border-neutral-200/80 flex flex-col justify-between">
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
