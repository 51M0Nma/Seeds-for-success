import React, { useState } from 'react';
import { useContent } from '../context/ContentContext';
import { BlogPost } from '../types';
import { ArrowLeft, Calendar, User, Clock, Share2, Tag } from 'lucide-react';

interface MoneyTalkPageProps {
  onNavigate: (path: string) => void;
}

export const MoneyTalkPage: React.FC<MoneyTalkPageProps> = ({ onNavigate: _onNavigate }) => {
  const { copy, blogPosts } = useContent();
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  return (
    <div id="moneytalk-page" className="w-full bg-[#fbfcfc] min-h-screen">
      {/* 1. HERO BANNER */}
      <section
        id="moneytalk-hero-section"
        className="relative py-28 sm:py-36 bg-[#17191a] text-white overflow-hidden border-b border-neutral-800"
      >
        <div className="absolute inset-0 bg-[radial-gradient(#2b2f32_1px,transparent_1px)] [background-size:16px_16px] opacity-45" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          <span className="text-xs uppercase tracking-[0.25em] text-neutral-400 font-semibold mb-4">
            {copy.moneyTalkHeroPretitle}
          </span>

          <div className="flex items-baseline justify-center gap-2 mb-6">
            <span className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white">
              Money
            </span>
            <span className="font-script text-5xl sm:text-6xl lg:text-7xl text-[#3ec48f] -rotate-6">
              Talk
            </span>
          </div>

          <p className="max-w-2xl text-base sm:text-lg text-neutral-300 font-light leading-relaxed">
            {copy.moneyTalkHeroSubtitle}
          </p>
        </div>
      </section>

      {/* 2. MAIN CONTENT AREA */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        {selectedPost ? (
          /* Full Article Reader View */
          <article id="single-post-view" className="max-w-3xl mx-auto bg-white rounded-2xl shadow-sm border border-neutral-200 overflow-hidden">
            <div className="p-6 sm:p-10 border-b border-neutral-100">
              <button
                onClick={() => setSelectedPost(null)}
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#23a976] hover:text-emerald-800 mb-6 cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to all articles</span>
              </button>

              <div className="flex items-center gap-4 text-xs text-neutral-500 mb-4">
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 text-[#23a976] font-semibold">
                  {selectedPost.category || 'Financial Literacy'}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" /> {selectedPost.dateBadge}
                </span>
                <span className="flex items-center gap-1">
                  <User className="w-3.5 h-3.5" /> By {selectedPost.author}
                </span>
              </div>

              <h1 className="font-serif text-3xl sm:text-4xl text-neutral-900 font-bold leading-tight mb-4">
                {selectedPost.title}
              </h1>
              <p className="text-lg text-neutral-600 font-normal leading-relaxed italic">
                {selectedPost.excerpt}
              </p>
            </div>

            <div className="relative aspect-video w-full">
              <img
                src={selectedPost.image}
                alt={selectedPost.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="p-6 sm:p-10 prose prose-neutral max-w-none text-neutral-700 leading-relaxed space-y-4">
              <p className="text-base sm:text-lg">{selectedPost.content}</p>
              <p className="text-base sm:text-lg">
                At Seeds for Success, we encourage every student to ask critical questions about financial markets, personal budgeting, and saving vehicles. Knowledge is the first seed that compounds into generational freedom.
              </p>
            </div>

            <div className="p-6 sm:p-10 bg-neutral-50 border-t border-neutral-100 flex items-center justify-between">
              <span className="text-xs text-neutral-500">Seeds for Success • MoneyTalk Blog</span>
              <button
                onClick={() => {
                  navigator.clipboard?.writeText(window.location.href);
                  alert('Link copied to clipboard!');
                }}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-700 hover:text-emerald-600"
              >
                <Share2 className="w-3.5 h-3.5" /> Share Article
              </button>
            </div>
          </article>
        ) : (
          /* 2-Column Grid matching screenshot */
          <div id="moneytalk-posts-grid" className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {blogPosts.map(post => (
              <div
                key={post.id}
                id={`post-card-${post.id}`}
                onClick={() => setSelectedPost(post)}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-neutral-200 flex flex-col group cursor-pointer"
              >
                {/* Image with round date badge on top left */}
                <div className="relative h-56 sm:h-64 overflow-hidden bg-neutral-900">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />

                  {/* Round Teal Date Badge */}
                  <div className="absolute top-4 left-4 w-14 h-14 rounded-full bg-[#3ec48f] text-neutral-950 flex flex-col items-center justify-center font-bold shadow-lg leading-tight text-center">
                    <span className="text-xs uppercase font-extrabold">
                      {post.dateBadge.split(' ')[0]}
                    </span>
                    <span className="text-[10px] uppercase tracking-wider font-semibold">
                      {post.dateBadge.split(' ')[1] || 'DEC'}
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <h2 className="font-serif text-2xl sm:text-[26px] font-bold text-neutral-900 group-hover:text-[#23a976] transition-colors leading-snug mb-2">
                      {post.title}
                    </h2>

                    <p className="text-xs uppercase tracking-wider text-neutral-400 font-medium mb-3">
                      By {post.author}
                    </p>

                    <p className="text-sm text-neutral-600 leading-relaxed font-normal">
                      {post.excerpt}
                    </p>
                  </div>

                  <div className="pt-6 mt-4 flex items-center justify-between text-xs font-semibold text-[#23a976] group-hover:text-emerald-700">
                    <span>Read Full Article &rarr;</span>
                    {post.category && (
                      <span className="text-neutral-400 font-normal">{post.category}</span>
                    )}
                  </div>
                </div>

                {/* Distinct Teal Bottom Border Bar matching screenshot */}
                <div className="h-1.5 w-full bg-[#3ec48f]" />
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};
