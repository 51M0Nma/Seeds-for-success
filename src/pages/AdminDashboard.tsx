import React, { useState } from 'react';
import { useContent } from '../context/ContentContext';
import { Logo } from '../components/Logo';
import { BlogPost, SiteCopy } from '../types';
import {
  Layout,
  BookOpen,
  Award,
  Briefcase,
  FileText,
  Heart,
  Mail,
  Upload,
  Save,
  RotateCcw,
  Download,
  Plus,
  Trash2,
  ExternalLink,
  Check,
  Eye,
  Database,
  Users
} from 'lucide-react';

interface AdminDashboardProps {
  onNavigate: (path: string) => void;
}

export const AdminDashboard: React.FC<AdminDashboardProps> = ({ onNavigate }) => {
  const {
    copy,
    updateCopyField,
    updateBlock,
    alternatingBlocks,
    blogPosts,
    addBlogPost,
    deleteBlogPost,
    donations,
    contacts,
    uploadImage,
    resetToDefaults,
    exportDataJSON,
    logout,
    isAdmin
  } = useContent();

  const [activeTab, setActiveTab] = useState<string>('home');
  const [saveToast, setSaveToast] = useState<string | null>(null);

  // New Blog Post Form State
  const [isAddingPost, setIsAddingPost] = useState(false);
  const [newPostTitle, setNewPostTitle] = useState('');
  const [newPostBadge, setNewPostBadge] = useState('18 Sep');
  const [newPostAuthor, setNewPostAuthor] = useState('Peter Simons');
  const [newPostExcerpt, setNewPostExcerpt] = useState('');
  const [newPostContent, setNewPostContent] = useState('');
  const [newPostCategory, setNewPostCategory] = useState('Financial Literacy');
  const [newPostImage, setNewPostImage] = useState(
    'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=800&q=80'
  );

  const showNotification = (msg: string) => {
    setSaveToast(msg);
    setTimeout(() => setSaveToast(null), 3000);
  };

  const handleFileUpload = async (fieldKey: keyof SiteCopy, file: File) => {
    try {
      const dataUrl = await uploadImage(file);
      updateCopyField(fieldKey, dataUrl);
      showNotification('Image uploaded and live site updated!');
    } catch (err) {
      console.error(err);
      alert('Failed to upload image.');
    }
  };

  const handleBlockImageUpload = async (blockId: string, file: File) => {
    try {
      const dataUrl = await uploadImage(file);
      updateBlock(blockId, { image: dataUrl });
      showNotification('Block photo updated!');
    } catch (err) {
      console.error(err);
      alert('Failed to upload image.');
    }
  };

  const handleCreatePost = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPostTitle) return;

    addBlogPost({
      title: newPostTitle,
      slug: newPostTitle.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
      dateBadge: newPostBadge,
      author: newPostAuthor,
      excerpt: newPostExcerpt,
      content: newPostContent,
      category: newPostCategory,
      image: newPostImage
    });

    setIsAddingPost(false);
    setNewPostTitle('');
    setNewPostExcerpt('');
    setNewPostContent('');
    showNotification('New MoneyTalk article published!');
  };

  const handleExport = () => {
    const jsonStr = exportDataJSON();
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `seeds_for_success_content_${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    showNotification('CMS content exported as JSON.');
  };

  if (!isAdmin) {
    return (
      <div className="min-h-screen bg-neutral-900 text-white flex flex-col items-center justify-center p-6 text-center">
        <h2 className="text-2xl font-bold mb-4 font-serif">Admin Authentication Required</h2>
        <p className="text-neutral-400 mb-6">Please log in to access the visual editor and content manager.</p>
        <button
          onClick={() => onNavigate('/login')}
          className="px-6 py-2.5 rounded-full bg-[#3ec48f] text-neutral-950 font-bold text-xs uppercase"
        >
          Go to Login Screen
        </button>
      </div>
    );
  }

  const pages = [
    { id: 'home', label: 'Home Page', icon: Layout },
    { id: 'lessons', label: 'Lessons Page', icon: BookOpen },
    { id: 'academy', label: 'Millionaire Academy', icon: Award },
    { id: 'services', label: 'Our Services', icon: Briefcase },
    { id: 'moneytalk', label: 'MoneyTalk (Blog)', icon: FileText },
    { id: 'donate', label: 'Donate Page', icon: Heart },
    { id: 'contact', label: 'Contact & Submissions', icon: Mail },
    { id: 'database', label: 'Prisma SQLite DB', icon: Database }
  ];

  return (
    <div id="admin-dashboard-container" className="min-h-screen bg-[#0f1112] text-neutral-100 flex flex-col">
      {/* Toast Notification */}
      {saveToast && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#3ec48f] text-neutral-950 px-5 py-3 rounded-xl shadow-2xl font-bold text-xs flex items-center gap-2 animate-bounce">
          <Check className="w-4 h-4" />
          <span>{saveToast}</span>
        </div>
      )}

      {/* Top Admin Navbar */}
      <header className="bg-[#17191a] border-b border-neutral-800 px-6 py-4 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <Logo variant="white" onClick={() => onNavigate('/')} />
          <div className="h-6 w-px bg-neutral-700 hidden sm:block" />
          <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
            CMS Visual Editor
          </span>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => onNavigate('/')}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-200 text-xs font-medium transition-colors"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>View Live Site</span>
          </button>

          <button
            onClick={handleExport}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-200 text-xs font-medium transition-colors"
            title="Export full site content to JSON"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Export JSON</span>
          </button>

          <button
            onClick={() => {
              if (confirm('Reset all copy and media to Seeds for Success defaults?')) {
                resetToDefaults();
                showNotification('Reset to defaults complete!');
              }
            }}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-red-950/40 hover:bg-red-900/50 text-red-300 text-xs font-medium border border-red-800/40 transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset Defaults</span>
          </button>

          <button
            onClick={() => {
              logout();
              onNavigate('/');
            }}
            className="px-3.5 py-1.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-300 text-xs font-medium"
          >
            Logout
          </button>
        </div>
      </header>

      {/* Main Admin Workspace */}
      <div className="flex-1 flex flex-col md:flex-row">
        {/* Left Page Selector Sidebar */}
        <aside className="w-full md:w-64 bg-[#141617] border-r border-neutral-800 p-4 space-y-1">
          <p className="text-[11px] font-bold uppercase tracking-wider text-neutral-500 px-3 py-2">
            Select Page to Edit
          </p>
          {pages.map(page => {
            const Icon = page.icon;
            const isActive = activeTab === page.id;
            return (
              <button
                key={page.id}
                onClick={() => setActiveTab(page.id)}
                className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-semibold tracking-wide transition-all text-left ${
                  isActive
                    ? 'bg-[#3ec48f] text-neutral-950 shadow-md'
                    : 'text-neutral-400 hover:text-white hover:bg-neutral-800/60'
                }`}
              >
                <Icon className="w-4 h-4 flex-shrink-0" />
                <span>{page.label}</span>
              </button>
            );
          })}

          <div className="pt-8 px-3">
            <div className="p-3.5 rounded-xl bg-neutral-900/80 border border-neutral-800 text-xs text-neutral-400 space-y-2">
              <p className="font-semibold text-neutral-300 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Live Sync Active
              </p>
              <p className="text-[11px] leading-relaxed">
                Changes made here immediately persist to local database storage and update public pages in real-time.
              </p>
            </div>
          </div>
        </aside>

        {/* Right Editor Area */}
        <main className="flex-1 p-6 sm:p-10 overflow-y-auto max-w-5xl">
          {/* TAB 1: HOME PAGE EDITOR */}
          {activeTab === 'home' && (
            <div className="space-y-8 animate-fade-in">
              <div className="border-b border-neutral-800 pb-4">
                <h2 className="font-serif text-2xl font-bold text-white">Home Page Editor</h2>
                <p className="text-xs text-neutral-400">
                  Update hero banner copy, financial lessons section, 6-block alternating features, and partner reach section.
                </p>
              </div>

              {/* Hero Banner Section */}
              <div className="bg-[#17191a] p-6 rounded-2xl border border-neutral-800 space-y-4">
                <h3 className="text-sm font-bold text-emerald-400 uppercase tracking-wider">Hero Banner</h3>
                
                <div>
                  <label className="block text-xs font-semibold text-neutral-400 mb-1">Pre-title</label>
                  <input
                    type="text"
                    value={copy.homeHeroPretitle}
                    onChange={e => updateCopyField('homeHeroPretitle', e.target.value)}
                    className="w-full px-3.5 py-2 bg-neutral-900 border border-neutral-700 rounded-xl text-sm text-white focus:border-[#3ec48f]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-400 mb-1">Headline (Serif Display)</label>
                  <textarea
                    rows={2}
                    value={copy.homeHeroTitle}
                    onChange={e => updateCopyField('homeHeroTitle', e.target.value)}
                    className="w-full px-3.5 py-2 bg-neutral-900 border border-neutral-700 rounded-xl text-sm text-white focus:border-[#3ec48f]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-400 mb-1">Subtitle Description</label>
                  <textarea
                    rows={3}
                    value={copy.homeHeroSubtitle}
                    onChange={e => updateCopyField('homeHeroSubtitle', e.target.value)}
                    className="w-full px-3.5 py-2 bg-neutral-900 border border-neutral-700 rounded-xl text-sm text-white focus:border-[#3ec48f]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-400 mb-1">Hero Background Image</label>
                  <div className="flex gap-4 items-center">
                    <img
                      src={copy.homeHeroImage}
                      alt="Hero preview"
                      className="w-24 h-14 object-cover rounded-lg border border-neutral-700"
                    />
                    <div className="flex-1 space-y-2">
                      <input
                        type="text"
                        value={copy.homeHeroImage}
                        onChange={e => updateCopyField('homeHeroImage', e.target.value)}
                        placeholder="Image URL or upload below"
                        className="w-full px-3.5 py-1.5 bg-neutral-900 border border-neutral-700 rounded-lg text-xs text-neutral-300"
                      />
                      <label className="inline-flex items-center gap-1.5 px-3 py-1 bg-neutral-800 hover:bg-neutral-700 text-xs font-medium rounded-lg cursor-pointer text-emerald-400">
                        <Upload className="w-3.5 h-3.5" />
                        <span>Upload local image</span>
                        <input
                          type="file"
                          accept="image/*"
                          className="hidden"
                          onChange={e => e.target.files?.[0] && handleFileUpload('homeHeroImage', e.target.files[0])}
                        />
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              {/* Help us reach 20,000 students section */}
              <div className="bg-[#17191a] p-6 rounded-2xl border border-neutral-800 space-y-4">
                <h3 className="text-sm font-bold text-emerald-400 uppercase tracking-wider">
                  &quot;Help us reach 20,000 students&quot; Section
                </h3>

                <div>
                  <label className="block text-xs font-semibold text-neutral-400 mb-1">Heading</label>
                  <input
                    type="text"
                    value={copy.homeReachHeading}
                    onChange={e => updateCopyField('homeReachHeading', e.target.value)}
                    className="w-full px-3.5 py-2 bg-neutral-900 border border-neutral-700 rounded-xl text-sm text-white focus:border-[#3ec48f]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-400 mb-1">Description</label>
                  <textarea
                    rows={4}
                    value={copy.homeReachDescription}
                    onChange={e => updateCopyField('homeReachDescription', e.target.value)}
                    className="w-full px-3.5 py-2 bg-neutral-900 border border-neutral-700 rounded-xl text-sm text-white focus:border-[#3ec48f]"
                  />
                </div>
              </div>

              {/* 6-Block Alternating Feature Grid Editor */}
              <div className="bg-[#17191a] p-6 rounded-2xl border border-neutral-800 space-y-6">
                <h3 className="text-sm font-bold text-emerald-400 uppercase tracking-wider">
                  6-Block Alternating Feature Grid
                </h3>

                <div className="space-y-6">
                  {alternatingBlocks.map((block, i) => (
                    <div key={block.id} className="p-4 rounded-xl bg-neutral-900 border border-neutral-800 space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-neutral-400">Block {i + 1}</span>
                        <span className="text-[10px] text-emerald-400 uppercase font-mono">{block.id}</span>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-[11px] text-neutral-400 mb-1">Headline</label>
                          <input
                            type="text"
                            value={block.title}
                            onChange={e => updateBlock(block.id, { title: e.target.value })}
                            className="w-full px-3 py-1.5 bg-neutral-950 border border-neutral-700 rounded-lg text-xs text-white"
                          />
                        </div>
                        <div>
                          <label className="block text-[11px] text-neutral-400 mb-1">Description</label>
                          <input
                            type="text"
                            value={block.text}
                            onChange={e => updateBlock(block.id, { text: e.target.value })}
                            className="w-full px-3 py-1.5 bg-neutral-950 border border-neutral-700 rounded-lg text-xs text-white"
                          />
                        </div>
                      </div>

                      <div className="flex items-center gap-4 pt-1">
                        <img
                          src={block.image}
                          alt="Block visual"
                          className="w-16 h-12 object-cover rounded border border-neutral-700"
                        />
                        <label className="inline-flex items-center gap-1.5 px-3 py-1 bg-neutral-800 hover:bg-neutral-700 text-xs font-medium rounded-lg cursor-pointer text-emerald-400">
                          <Upload className="w-3.5 h-3.5" />
                          <span>Replace photo</span>
                          <input
                            type="file"
                            accept="image/*"
                            className="hidden"
                            onChange={e => e.target.files?.[0] && handleBlockImageUpload(block.id, e.target.files[0])}
                          />
                        </label>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: LESSONS PAGE EDITOR */}
          {activeTab === 'lessons' && (
            <div className="space-y-8 animate-fade-in">
              <div className="border-b border-neutral-800 pb-4">
                <h2 className="font-serif text-2xl font-bold text-white">Lessons Page Editor</h2>
                <p className="text-xs text-neutral-400">
                  Update online lessons copy, &quot;The Garden&quot; repository description, and &quot;Power of Compounding&quot; card.
                </p>
              </div>

              {/* Hero */}
              <div className="bg-[#17191a] p-6 rounded-2xl border border-neutral-800 space-y-4">
                <h3 className="text-sm font-bold text-emerald-400 uppercase tracking-wider">Lessons Hero</h3>
                <div>
                  <label className="block text-xs font-semibold text-neutral-400 mb-1">Pre-title</label>
                  <input
                    type="text"
                    value={copy.lessonsHeroPretitle}
                    onChange={e => updateCopyField('lessonsHeroPretitle', e.target.value)}
                    className="w-full px-3.5 py-2 bg-neutral-900 border border-neutral-700 rounded-xl text-sm text-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-neutral-400 mb-1">Title</label>
                  <textarea
                    rows={2}
                    value={copy.lessonsHeroTitle}
                    onChange={e => updateCopyField('lessonsHeroTitle', e.target.value)}
                    className="w-full px-3.5 py-2 bg-neutral-900 border border-neutral-700 rounded-xl text-sm text-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-neutral-400 mb-1">Subtitle</label>
                  <textarea
                    rows={3}
                    value={copy.lessonsHeroSubtitle}
                    onChange={e => updateCopyField('lessonsHeroSubtitle', e.target.value)}
                    className="w-full px-3.5 py-2 bg-neutral-900 border border-neutral-700 rounded-xl text-sm text-white"
                  />
                </div>
              </div>

              {/* The Garden */}
              <div className="bg-[#17191a] p-6 rounded-2xl border border-neutral-800 space-y-4">
                <h3 className="text-sm font-bold text-emerald-400 uppercase tracking-wider">The Garden Section</h3>
                <div>
                  <label className="block text-xs font-semibold text-neutral-400 mb-1">Heading</label>
                  <input
                    type="text"
                    value={copy.lessonsGardenHeading}
                    onChange={e => updateCopyField('lessonsGardenHeading', e.target.value)}
                    className="w-full px-3.5 py-2 bg-neutral-900 border border-neutral-700 rounded-xl text-sm text-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-neutral-400 mb-1">Repository Copy</label>
                  <textarea
                    rows={6}
                    value={copy.lessonsGardenText}
                    onChange={e => updateCopyField('lessonsGardenText', e.target.value)}
                    className="w-full px-3.5 py-2 bg-neutral-900 border border-neutral-700 rounded-xl text-sm text-white"
                  />
                </div>
              </div>

              {/* Power of Compounding */}
              <div className="bg-[#17191a] p-6 rounded-2xl border border-neutral-800 space-y-4">
                <h3 className="text-sm font-bold text-emerald-400 uppercase tracking-wider">Power of Compounding Card</h3>
                <div>
                  <label className="block text-xs font-semibold text-neutral-400 mb-1">Card Heading</label>
                  <input
                    type="text"
                    value={copy.lessonsCompoundingHeading}
                    onChange={e => updateCopyField('lessonsCompoundingHeading', e.target.value)}
                    className="w-full px-3.5 py-2 bg-neutral-900 border border-neutral-700 rounded-xl text-sm text-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-neutral-400 mb-1">Card Text</label>
                  <textarea
                    rows={3}
                    value={copy.lessonsCompoundingText}
                    onChange={e => updateCopyField('lessonsCompoundingText', e.target.value)}
                    className="w-full px-3.5 py-2 bg-neutral-900 border border-neutral-700 rounded-xl text-sm text-white"
                  />
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: MILLIONAIRE ACADEMY EDITOR */}
          {activeTab === 'academy' && (
            <div className="space-y-8 animate-fade-in">
              <div className="border-b border-neutral-800 pb-4">
                <h2 className="font-serif text-2xl font-bold text-white">Millionaire Academy Editor</h2>
                <p className="text-xs text-neutral-400">
                  Manage curriculum headlines, testimonial, and external purchase/enroll link.
                </p>
              </div>

              {/* SendOwl Enroll URL Box (User specified requirement) */}
              <div className="p-5 rounded-2xl bg-emerald-950/50 border border-emerald-600/40 space-y-2">
                <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
                  <ExternalLink className="w-4 h-4" />
                  <span>SendOwl Purchase Redirect URL</span>
                </div>
                <p className="text-xs text-neutral-300">
                  When users click &quot;Enroll Now&quot; on the Millionaire Academy page, they are redirected to this checkout destination.
                </p>
                <input
                  type="url"
                  value={copy.academyEnrollUrl}
                  onChange={e => updateCopyField('academyEnrollUrl', e.target.value)}
                  className="w-full px-3.5 py-2 bg-neutral-900 border border-emerald-700/60 rounded-xl text-xs text-emerald-300 font-mono"
                />
              </div>

              <div className="bg-[#17191a] p-6 rounded-2xl border border-neutral-800 space-y-4">
                <h3 className="text-sm font-bold text-emerald-400 uppercase tracking-wider">Course Overview</h3>
                <div>
                  <label className="block text-xs font-semibold text-neutral-400 mb-1">Headline</label>
                  <input
                    type="text"
                    value={copy.academyHeroTitle}
                    onChange={e => updateCopyField('academyHeroTitle', e.target.value)}
                    className="w-full px-3.5 py-2 bg-neutral-900 border border-neutral-700 rounded-xl text-sm text-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-neutral-400 mb-1">Course Summary</label>
                  <textarea
                    rows={4}
                    value={copy.academyHeroSubtitle}
                    onChange={e => updateCopyField('academyHeroSubtitle', e.target.value)}
                    className="w-full px-3.5 py-2 bg-neutral-900 border border-neutral-700 rounded-xl text-sm text-white"
                  />
                </div>
              </div>

              <div className="bg-[#17191a] p-6 rounded-2xl border border-neutral-800 space-y-4">
                <h3 className="text-sm font-bold text-emerald-400 uppercase tracking-wider">Testimonial</h3>
                <div>
                  <label className="block text-xs font-semibold text-neutral-400 mb-1">Quote</label>
                  <textarea
                    rows={2}
                    value={copy.academyTestimonialQuote}
                    onChange={e => updateCopyField('academyTestimonialQuote', e.target.value)}
                    className="w-full px-3.5 py-2 bg-neutral-900 border border-neutral-700 rounded-xl text-sm text-white"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-neutral-400 mb-1">Author</label>
                    <input
                      type="text"
                      value={copy.academyTestimonialAuthor}
                      onChange={e => updateCopyField('academyTestimonialAuthor', e.target.value)}
                      className="w-full px-3.5 py-2 bg-neutral-900 border border-neutral-700 rounded-xl text-sm text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-neutral-400 mb-1">Role / Badge</label>
                    <input
                      type="text"
                      value={copy.academyTestimonialRole}
                      onChange={e => updateCopyField('academyTestimonialRole', e.target.value)}
                      className="w-full px-3.5 py-2 bg-neutral-900 border border-neutral-700 rounded-xl text-sm text-white"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: OUR SERVICES EDITOR */}
          {activeTab === 'services' && (
            <div className="space-y-8 animate-fade-in">
              <div className="border-b border-neutral-800 pb-4">
                <h2 className="font-serif text-2xl font-bold text-white">Our Services Editor</h2>
                <p className="text-xs text-neutral-400">
                  Edit workshops, seminars, and coaching details.
                </p>
              </div>

              <div className="bg-[#17191a] p-6 rounded-2xl border border-neutral-800 space-y-6">
                <div>
                  <label className="block text-xs font-semibold text-neutral-400 mb-1">In-School Workshops Text</label>
                  <textarea
                    rows={3}
                    value={copy.servicesRow1Text}
                    onChange={e => updateCopyField('servicesRow1Text', e.target.value)}
                    className="w-full px-3.5 py-2 bg-neutral-900 border border-neutral-700 rounded-xl text-sm text-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-neutral-400 mb-1">In-Office Seminars Text</label>
                  <textarea
                    rows={3}
                    value={copy.servicesRow2Text}
                    onChange={e => updateCopyField('servicesRow2Text', e.target.value)}
                    className="w-full px-3.5 py-2 bg-neutral-900 border border-neutral-700 rounded-xl text-sm text-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-neutral-400 mb-1">Financial Coaching Text</label>
                  <textarea
                    rows={3}
                    value={copy.servicesRow3Text}
                    onChange={e => updateCopyField('servicesRow3Text', e.target.value)}
                    className="w-full px-3.5 py-2 bg-neutral-900 border border-neutral-700 rounded-xl text-sm text-white"
                  />
                </div>
              </div>
            </div>
          )}

          {/* TAB 5: MONEYTALK BLOG MANAGER */}
          {activeTab === 'moneytalk' && (
            <div className="space-y-8 animate-fade-in">
              <div className="flex items-center justify-between border-b border-neutral-800 pb-4">
                <div>
                  <h2 className="font-serif text-2xl font-bold text-white">MoneyTalk Blog Manager</h2>
                  <p className="text-xs text-neutral-400">
                    Publish new articles, edit excerpts, date badges, and article images.
                  </p>
                </div>
                <button
                  onClick={() => setIsAddingPost(!isAddingPost)}
                  className="px-4 py-2 rounded-xl bg-[#3ec48f] hover:bg-[#34ad7d] text-neutral-950 font-bold text-xs uppercase tracking-wider inline-flex items-center gap-1.5 cursor-pointer"
                >
                  <Plus className="w-4 h-4" />
                  <span>{isAddingPost ? 'Cancel' : 'New Article'}</span>
                </button>
              </div>

              {/* Add New Post Form */}
              {isAddingPost && (
                <form onSubmit={handleCreatePost} className="p-6 rounded-2xl bg-[#17191a] border border-emerald-500/30 space-y-4">
                  <h3 className="text-sm font-bold text-emerald-400 uppercase tracking-wider">Create New MoneyTalk Article</h3>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-neutral-400 mb-1">Title</label>
                      <input
                        type="text"
                        required
                        value={newPostTitle}
                        onChange={e => setNewPostTitle(e.target.value)}
                        placeholder="e.g. Understanding Compound Interest"
                        className="w-full px-3.5 py-2 bg-neutral-900 border border-neutral-700 rounded-xl text-sm text-white"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-neutral-400 mb-1">Date Badge (e.g. 18 Sep)</label>
                      <input
                        type="text"
                        required
                        value={newPostBadge}
                        onChange={e => setNewPostBadge(e.target.value)}
                        className="w-full px-3.5 py-2 bg-neutral-900 border border-neutral-700 rounded-xl text-sm text-white"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-neutral-400 mb-1">Author</label>
                      <input
                        type="text"
                        value={newPostAuthor}
                        onChange={e => setNewPostAuthor(e.target.value)}
                        className="w-full px-3.5 py-2 bg-neutral-900 border border-neutral-700 rounded-xl text-sm text-white"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-neutral-400 mb-1">Category</label>
                      <input
                        type="text"
                        value={newPostCategory}
                        onChange={e => setNewPostCategory(e.target.value)}
                        className="w-full px-3.5 py-2 bg-neutral-900 border border-neutral-700 rounded-xl text-sm text-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-400 mb-1">Excerpt</label>
                    <input
                      type="text"
                      required
                      value={newPostExcerpt}
                      onChange={e => setNewPostExcerpt(e.target.value)}
                      placeholder="Brief one-line teaser for card"
                      className="w-full px-3.5 py-2 bg-neutral-900 border border-neutral-700 rounded-xl text-sm text-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-400 mb-1">Full Content</label>
                    <textarea
                      rows={4}
                      required
                      value={newPostContent}
                      onChange={e => setNewPostContent(e.target.value)}
                      placeholder="Article body paragraph..."
                      className="w-full px-3.5 py-2 bg-neutral-900 border border-neutral-700 rounded-xl text-sm text-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-400 mb-1">Cover Image URL</label>
                    <input
                      type="url"
                      value={newPostImage}
                      onChange={e => setNewPostImage(e.target.value)}
                      className="w-full px-3.5 py-2 bg-neutral-900 border border-neutral-700 rounded-xl text-sm text-white"
                    />
                  </div>

                  <button
                    type="submit"
                    className="px-6 py-2 rounded-xl bg-[#3ec48f] text-neutral-950 font-bold text-xs uppercase"
                  >
                    Publish Post
                  </button>
                </form>
              )}

              {/* Existing Posts List */}
              <div className="space-y-4">
                {blogPosts.map(post => (
                  <div key={post.id} className="p-4 rounded-xl bg-[#17191a] border border-neutral-800 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-16 h-12 object-cover rounded-lg border border-neutral-700"
                      />
                      <div>
                        <h4 className="font-bold text-sm text-white">{post.title}</h4>
                        <p className="text-xs text-neutral-400">
                          {post.dateBadge} • By {post.author} • <span className="text-emerald-400">{post.category}</span>
                        </p>
                      </div>
                    </div>

                    <button
                      onClick={() => {
                        if (confirm(`Delete post "${post.title}"?`)) {
                          deleteBlogPost(post.id);
                          showNotification('Post deleted.');
                        }
                      }}
                      className="p-2 text-neutral-500 hover:text-red-400 transition-colors"
                      title="Delete Article"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 6: DONATE PAGE EDITOR */}
          {activeTab === 'donate' && (
            <div className="space-y-8 animate-fade-in">
              <div className="border-b border-neutral-800 pb-4">
                <h2 className="font-serif text-2xl font-bold text-white">Donate Page Editor</h2>
                <p className="text-xs text-neutral-400">
                  Update donation card headline, instructions, and thank-you messaging.
                </p>
              </div>

              <div className="bg-[#17191a] p-6 rounded-2xl border border-neutral-800 space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-neutral-400 mb-1">Headline</label>
                  <input
                    type="text"
                    value={copy.donateHeroTitle}
                    onChange={e => updateCopyField('donateHeroTitle', e.target.value)}
                    className="w-full px-3.5 py-2 bg-neutral-900 border border-neutral-700 rounded-xl text-sm text-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-neutral-400 mb-1">Card Instruction</label>
                  <input
                    type="text"
                    value={copy.donateCardHeading}
                    onChange={e => updateCopyField('donateCardHeading', e.target.value)}
                    className="w-full px-3.5 py-2 bg-neutral-900 border border-neutral-700 rounded-xl text-sm text-white"
                  />
                </div>
              </div>

              {/* Donation Activity Log */}
              <div className="bg-[#17191a] p-6 rounded-2xl border border-neutral-800 space-y-4">
                <h3 className="text-sm font-bold text-emerald-400 uppercase tracking-wider">
                  Recent Charitable Contributions
                </h3>
                <div className="space-y-2">
                  {donations.map(don => (
                    <div key={don.id} className="p-3 rounded-lg bg-neutral-900 flex items-center justify-between text-xs">
                      <div>
                        <span className="font-bold text-white">${don.amount.toFixed(2)} CAD</span>
                        <span className="text-neutral-400 ml-2">— {don.donorName} ({don.email})</span>
                      </div>
                      <span className="text-neutral-500 font-mono">{don.createdAt}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 7: CONTACT & SUBMISSIONS */}
          {activeTab === 'contact' && (
            <div className="space-y-8 animate-fade-in">
              <div className="border-b border-neutral-800 pb-4">
                <h2 className="font-serif text-2xl font-bold text-white">Contact & Inquiries</h2>
                <p className="text-xs text-neutral-400">
                  View incoming school workshop bookings, partner requests, and visitor inquiries.
                </p>
              </div>

              <div className="space-y-4">
                {contacts.length === 0 ? (
                  <p className="text-sm text-neutral-500">No contact submissions yet.</p>
                ) : (
                  contacts.map(item => (
                    <div key={item.id} className="p-5 rounded-2xl bg-[#17191a] border border-neutral-800 space-y-2">
                      <div className="flex items-center justify-between">
                        <h4 className="font-bold text-white text-sm">{item.fullName}</h4>
                        <span className="text-[11px] text-neutral-500 font-mono">{item.createdAt}</span>
                      </div>
                      <p className="text-xs text-emerald-400 font-mono">
                        {item.email} {item.phone && `• ${item.phone}`}
                      </p>
                      <p className="text-xs text-neutral-300 bg-neutral-900 p-3 rounded-xl leading-relaxed">
                        {item.message}
                      </p>
                    </div>
                  ))
                )}
              </div>
            </div>
          )}

          {/* TAB 8: PRISMA SQLITE DB STATUS */}
          {activeTab === 'database' && (
            <div className="space-y-8 animate-fade-in">
              <div className="border-b border-neutral-800 pb-4">
                <h2 className="font-serif text-2xl font-bold text-white">Database & Infrastructure Architecture</h2>
                <p className="text-xs text-neutral-400">
                  SQLite database file configuration, schema models, and deployment manifests.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                <div className="p-4 rounded-xl bg-neutral-900 border border-neutral-800">
                  <span className="text-xs text-neutral-400 uppercase">Driver</span>
                  <p className="text-base font-bold text-emerald-400 mt-1">Prisma + SQLite</p>
                </div>
                <div className="p-4 rounded-xl bg-neutral-900 border border-neutral-800">
                  <span className="text-xs text-neutral-400 uppercase">Local Database File</span>
                  <p className="text-base font-bold text-white mt-1">prisma/dev.db</p>
                </div>
                <div className="p-4 rounded-xl bg-neutral-900 border border-neutral-800">
                  <span className="text-xs text-neutral-400 uppercase">Deployment Ready</span>
                  <p className="text-base font-bold text-emerald-400 mt-1">Docker + Compose</p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-[#17191a] border border-neutral-800 space-y-3">
                <h3 className="text-xs uppercase font-bold text-neutral-400 tracking-wider">
                  Schema Architecture
                </h3>
                <pre className="text-xs font-mono text-neutral-300 bg-neutral-950 p-4 rounded-xl overflow-x-auto">
{`model AdminUser {
  id        String   @id @default(cuid())
  username  String   @unique
  password  String
}

model PageContent {
  id          String   @id @default(cuid())
  pageKey     String
  sectionKey  String
  fieldKey    String
  value       String
}

model BlogPost {
  id          String   @id @default(cuid())
  slug        String   @unique
  title       String
  dateBadge   String
  author      String
  excerpt     String
  content     String
  image       String
}

model Donation {
  id          String   @id @default(cuid())
  amount      Float
  donorName   String?
  createdAt   DateTime @default(now())
}`}
                </pre>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};
