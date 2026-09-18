import React, { useState } from 'react';
import { SiteCopy, AlternatingBlock, BlogPost } from '../types';
import { ImageFieldCard, COMMON_IMAGE_PRESETS } from './ImageFieldCard';
import { Image as ImageIcon, Filter, Layers, Check } from 'lucide-react';

interface AllImagesGalleryProps {
  copy: SiteCopy;
  alternatingBlocks: AlternatingBlock[];
  blogPosts: BlogPost[];
  onUpdateCopyField: (fieldKey: keyof SiteCopy, value: string) => void;
  onUpdateBlock: (blockId: string, updates: Partial<AlternatingBlock>) => void;
  onUpdateBlogPost?: (id: string, updates: Partial<BlogPost>) => void;
  onUploadImage: (file: File) => Promise<string>;
  onNotify: (msg: string) => void;
}

export const AllImagesGallery: React.FC<AllImagesGalleryProps> = ({
  copy,
  alternatingBlocks,
  blogPosts,
  onUpdateCopyField,
  onUpdateBlock,
  onUpdateBlogPost,
  onUploadImage,
  onNotify
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const handleUploadForCopy = async (fieldKey: keyof SiteCopy, file: File) => {
    try {
      const dataUrl = await onUploadImage(file);
      onUpdateCopyField(fieldKey, dataUrl);
      onNotify('Image uploaded successfully!');
    } catch {
      alert('Failed to upload image.');
    }
  };

  const handleUploadForBlock = async (blockId: string, file: File) => {
    try {
      const dataUrl = await onUploadImage(file);
      onUpdateBlock(blockId, { image: dataUrl });
      onNotify('Block image uploaded!');
    } catch {
      alert('Failed to upload image.');
    }
  };

  const handleUploadForBlogPost = async (postId: string, file: File) => {
    try {
      const dataUrl = await onUploadImage(file);
      onUpdateBlogPost?.(postId, { image: dataUrl });
      onNotify('Article image uploaded!');
    } catch {
      alert('Failed to upload image.');
    }
  };

  const categories = [
    { id: 'all', label: 'All Images' },
    { id: 'home', label: 'Home Page' },
    { id: 'lessons', label: 'Lessons Page' },
    { id: 'academy', label: 'Millionaire Academy' },
    { id: 'services', label: 'Our Services' },
    { id: 'about', label: 'About Page' },
    { id: 'moneytalk', label: 'MoneyTalk (Blog)' },
    { id: 'donate', label: 'Donate Page' },
    { id: 'contact', label: 'Contact Page' }
  ];

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="border-b border-neutral-800 pb-4 flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <ImageIcon className="w-6 h-6 text-[#3ec48f]" />
            <h2 className="font-serif text-2xl font-bold text-white">All Site Images Gallery</h2>
          </div>
          <p className="text-xs text-neutral-400 mt-1">
            Centralized media library for every single photograph and graphic across all pages of Seeds for Success.
          </p>
        </div>

        <div className="flex items-center gap-2 bg-neutral-900 p-1.5 rounded-xl border border-neutral-800 text-xs text-neutral-400">
          <Layers className="w-4 h-4 text-emerald-400" />
          <span>Every image supports instant URL paste and local file uploads</span>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin">
        <Filter className="w-4 h-4 text-neutral-500 flex-shrink-0" />
        {categories.map(cat => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
              selectedCategory === cat.id
                ? 'bg-[#3ec48f] text-neutral-950 shadow-xs'
                : 'bg-neutral-900 text-neutral-400 hover:text-white hover:bg-neutral-800'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Images List */}
      <div className="space-y-6">
        {/* HOME PAGE IMAGES */}
        {(selectedCategory === 'all' || selectedCategory === 'home') && (
          <div className="space-y-4">
            <h3 className="text-xs font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              Home Page Images
            </h3>

            <ImageFieldCard
              label="Home Hero Background"
              badge="Home • Hero"
              description="High-resolution hero banner background image with dark overlay"
              imageUrl={copy.homeHeroImage}
              onUrlChange={url => onUpdateCopyField('homeHeroImage', url)}
              onFileUpload={file => handleUploadForCopy('homeHeroImage', file)}
              recommendedDimensions="1920 × 1080px Landscape"
            />

            <ImageFieldCard
              label="Full-Width Classroom Banner"
              badge="Home • Banner"
              description="Displayed in the 'Let's invest in the future together' full-width section"
              imageUrl={copy.homeBannerImage}
              onUrlChange={url => onUpdateCopyField('homeBannerImage', url)}
              onFileUpload={file => handleUploadForCopy('homeBannerImage', file)}
              recommendedDimensions="1920 × 900px Wide Landscape"
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
              <ImageFieldCard
                label="Classroom Photo 1"
                badge="Home • Classroom Strip"
                imageUrl={copy.homeClassroomPhoto1}
                onUrlChange={url => onUpdateCopyField('homeClassroomPhoto1', url)}
                onFileUpload={file => handleUploadForCopy('homeClassroomPhoto1', file)}
                recommendedDimensions="600 × 400px"
              />
              <ImageFieldCard
                label="Classroom Photo 2"
                badge="Home • Classroom Strip"
                imageUrl={copy.homeClassroomPhoto2}
                onUrlChange={url => onUpdateCopyField('homeClassroomPhoto2', url)}
                onFileUpload={file => handleUploadForCopy('homeClassroomPhoto2', file)}
                recommendedDimensions="600 × 400px"
              />
              <ImageFieldCard
                label="Classroom Photo 3"
                badge="Home • Classroom Strip"
                imageUrl={copy.homeClassroomPhoto3}
                onUrlChange={url => onUpdateCopyField('homeClassroomPhoto3', url)}
                onFileUpload={file => handleUploadForCopy('homeClassroomPhoto3', file)}
                recommendedDimensions="600 × 400px"
              />
            </div>

            <div className="pt-4 space-y-3">
              <p className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">
                Home 6-Block Alternating Feature Images
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {alternatingBlocks.map((block, i) => (
                  <ImageFieldCard
                    key={block.id}
                    label={`Feature Block ${i + 1}: ${block.title}`}
                    badge={`Home • Block ${i + 1}`}
                    imageUrl={block.image}
                    onUrlChange={url => onUpdateBlock(block.id, { image: url })}
                    onFileUpload={file => handleUploadForBlock(block.id, file)}
                    recommendedDimensions="800 × 600px"
                  />
                ))}
              </div>
            </div>
          </div>
        )}

        {/* LESSONS PAGE IMAGES */}
        {(selectedCategory === 'all' || selectedCategory === 'lessons') && (
          <div className="space-y-4 pt-4 border-t border-neutral-800">
            <h3 className="text-xs font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              Lessons Page Images
            </h3>

            <ImageFieldCard
              label="Lessons Hero Background"
              badge="Lessons • Hero"
              description="Top banner photograph behind the Lessons headline"
              imageUrl={copy.lessonsHeroImage}
              onUrlChange={url => onUpdateCopyField('lessonsHeroImage', url)}
              onFileUpload={file => handleUploadForCopy('lessonsHeroImage', file)}
              recommendedDimensions="1920 × 1080px Landscape"
            />

            <ImageFieldCard
              label="Video Placeholder Poster"
              badge="Lessons • Video"
              description="Thumbnail poster behind the play button in 'Securing their future early'"
              imageUrl={copy.videoPosterImage}
              onUrlChange={url => onUpdateCopyField('videoPosterImage', url)}
              onFileUpload={file => handleUploadForCopy('videoPosterImage', file)}
              recommendedDimensions="1280 × 720px (16:9 Video Aspect)"
            />

            <ImageFieldCard
              label="Compounding Card Background"
              badge="Lessons • Compounding"
              description="Card background with dark green tint for 'The Power of Compounding'"
              imageUrl={copy.compoundingBgImage}
              onUrlChange={url => onUpdateCopyField('compoundingBgImage', url)}
              onFileUpload={file => handleUploadForCopy('compoundingBgImage', file)}
              recommendedDimensions="1000 × 700px"
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
              <ImageFieldCard
                label="Difference Photo 1"
                badge="Lessons • Difference"
                imageUrl={copy.lessonsDifferenceImage1}
                onUrlChange={url => onUpdateCopyField('lessonsDifferenceImage1', url)}
                onFileUpload={file => handleUploadForCopy('lessonsDifferenceImage1', file)}
                recommendedDimensions="600 × 400px"
              />
              <ImageFieldCard
                label="Difference Photo 2"
                badge="Lessons • Difference"
                imageUrl={copy.lessonsDifferenceImage2}
                onUrlChange={url => onUpdateCopyField('lessonsDifferenceImage2', url)}
                onFileUpload={file => handleUploadForCopy('lessonsDifferenceImage2', file)}
                recommendedDimensions="600 × 400px"
              />
              <ImageFieldCard
                label="Difference Photo 3"
                badge="Lessons • Difference"
                imageUrl={copy.lessonsDifferenceImage3}
                onUrlChange={url => onUpdateCopyField('lessonsDifferenceImage3', url)}
                onFileUpload={file => handleUploadForCopy('lessonsDifferenceImage3', file)}
                recommendedDimensions="600 × 400px"
              />
            </div>
          </div>
        )}

        {/* MILLIONAIRE ACADEMY IMAGES */}
        {(selectedCategory === 'all' || selectedCategory === 'academy') && (
          <div className="space-y-4 pt-4 border-t border-neutral-800">
            <h3 className="text-xs font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              Millionaire Academy Images
            </h3>

            <ImageFieldCard
              label="Millionaire Academy Hero Banner"
              badge="Academy • Hero"
              description="Hero banner photograph with dark atmospheric overlay"
              imageUrl={copy.academyHeroImage}
              onUrlChange={url => onUpdateCopyField('academyHeroImage', url)}
              onFileUpload={file => handleUploadForCopy('academyHeroImage', file)}
              recommendedDimensions="1920 × 1080px Landscape"
            />
          </div>
        )}

        {/* OUR SERVICES IMAGES */}
        {(selectedCategory === 'all' || selectedCategory === 'services') && (
          <div className="space-y-4 pt-4 border-t border-neutral-800">
            <h3 className="text-xs font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              Our Services Images
            </h3>

            <ImageFieldCard
              label="Services Hero Background"
              badge="Services • Hero"
              imageUrl={copy.servicesHeroImage}
              onUrlChange={url => onUpdateCopyField('servicesHeroImage', url)}
              onFileUpload={file => handleUploadForCopy('servicesHeroImage', file)}
              recommendedDimensions="1920 × 1080px Landscape"
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
              <ImageFieldCard
                label="Row 1: In-School Workshops"
                badge="Services • Workshops"
                description="Interactive youth finance classroom photograph"
                imageUrl={copy.servicesRow1Image}
                onUrlChange={url => onUpdateCopyField('servicesRow1Image', url)}
                onFileUpload={file => handleUploadForCopy('servicesRow1Image', file)}
                recommendedDimensions="800 × 600px"
              />

              <ImageFieldCard
                label="Row 2: In-Office Seminars"
                badge="Services • Seminars"
                description="Professional staff seminar and corporate training photograph"
                imageUrl={copy.servicesRow2Image}
                onUrlChange={url => onUpdateCopyField('servicesRow2Image', url)}
                onFileUpload={file => handleUploadForCopy('servicesRow2Image', file)}
                recommendedDimensions="800 × 600px"
              />

              <ImageFieldCard
                label="Row 3: Financial Coaching"
                badge="Services • Coaching"
                description="One-on-one personalized advisory and mentorship photo"
                imageUrl={copy.servicesRow3Image}
                onUrlChange={url => onUpdateCopyField('servicesRow3Image', url)}
                onFileUpload={file => handleUploadForCopy('servicesRow3Image', file)}
                recommendedDimensions="800 × 600px"
              />
            </div>
          </div>
        )}

        {/* ABOUT PAGE IMAGES */}
        {(selectedCategory === 'all' || selectedCategory === 'about') && (
          <div className="space-y-4 pt-4 border-t border-neutral-800">
            <h3 className="text-xs font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              About Page Images
            </h3>

            <ImageFieldCard
              label="About Hero Background"
              badge="About • Hero"
              description="Hero banner background for Mission & History"
              imageUrl={copy.aboutHeroImage}
              onUrlChange={url => onUpdateCopyField('aboutHeroImage', url)}
              onFileUpload={file => handleUploadForCopy('aboutHeroImage', file)}
              recommendedDimensions="1920 × 1080px Landscape"
            />

            <ImageFieldCard
              label="Our Story & Mission Photo"
              badge="About • Story"
              description="Featured photo displayed next to 'Building Financial Confidence from the Ground Up'"
              imageUrl={copy.aboutStoryImage}
              onUrlChange={url => onUpdateCopyField('aboutStoryImage', url)}
              onFileUpload={file => handleUploadForCopy('aboutStoryImage', file)}
              recommendedDimensions="1000 × 750px"
            />
          </div>
        )}

        {/* MONEYTALK BLOG IMAGES */}
        {(selectedCategory === 'all' || selectedCategory === 'moneytalk') && (
          <div className="space-y-4 pt-4 border-t border-neutral-800">
            <h3 className="text-xs font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              MoneyTalk Blog Images
            </h3>

            <ImageFieldCard
              label="MoneyTalk Hero Header"
              badge="MoneyTalk • Hero"
              imageUrl={copy.moneyTalkHeroImage}
              onUrlChange={url => onUpdateCopyField('moneyTalkHeroImage', url)}
              onFileUpload={file => handleUploadForCopy('moneyTalkHeroImage', file)}
              recommendedDimensions="1920 × 1080px Landscape"
            />

            <div className="pt-2 space-y-3">
              <p className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">
                Article Cover Images
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {blogPosts.map(post => (
                  <ImageFieldCard
                    key={post.id}
                    label={`Article: ${post.title}`}
                    badge={post.category}
                    imageUrl={post.image}
                    onUrlChange={url => onUpdateBlogPost?.(post.id, { image: url })}
                    onFileUpload={file => handleUploadForBlogPost(post.id, file)}
                    recommendedDimensions="800 × 500px"
                  />
                ))}
              </div>
            </div>
          </div>
        )}

        {/* DONATE PAGE IMAGES */}
        {(selectedCategory === 'all' || selectedCategory === 'donate') && (
          <div className="space-y-4 pt-4 border-t border-neutral-800">
            <h3 className="text-xs font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              Donate Page Images
            </h3>

            <ImageFieldCard
              label="Donate Hero Background"
              badge="Donate • Hero"
              description="Hero banner background for the Seeds for Success donation portal"
              imageUrl={copy.donateHeroImage}
              onUrlChange={url => onUpdateCopyField('donateHeroImage', url)}
              onFileUpload={file => handleUploadForCopy('donateHeroImage', file)}
              recommendedDimensions="1920 × 1080px Landscape"
            />
          </div>
        )}

        {/* CONTACT PAGE IMAGES */}
        {(selectedCategory === 'all' || selectedCategory === 'contact') && (
          <div className="space-y-4 pt-4 border-t border-neutral-800">
            <h3 className="text-xs font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              Contact Page Images
            </h3>

            <ImageFieldCard
              label="Contact Team & Workshop Photo"
              badge="Contact • Visual Card"
              description="Photo displayed under contact info on the Contact page"
              imageUrl={copy.contactHeroImage}
              onUrlChange={url => onUpdateCopyField('contactHeroImage', url)}
              onFileUpload={file => handleUploadForCopy('contactHeroImage', file)}
              recommendedDimensions="800 × 500px"
            />
          </div>
        )}
      </div>
    </div>
  );
};
