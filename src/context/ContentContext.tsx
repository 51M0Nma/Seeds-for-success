import React, { createContext, useContext, useState, useEffect } from 'react';
import { SiteCopy, CurriculumModule, AlternatingBlock, PartnerLogo, BlogPost, DonationRecord, ContactSubmission } from '../types';
import { initialSiteCopy, initialCurriculumModules, initialAlternatingBlocks, initialPartnerLogos, initialBlogPosts } from '../data/initialContent';

interface ContentContextType {
  copy: SiteCopy;
  curriculum: CurriculumModule[];
  alternatingBlocks: AlternatingBlock[];
  partnerLogos: PartnerLogo[];
  blogPosts: BlogPost[];
  donations: DonationRecord[];
  contacts: ContactSubmission[];
  isAdmin: boolean;
  activeAdminPage: string;
  setActiveAdminPage: (page: string) => void;
  login: (user: string, pass: string) => boolean;
  logout: () => void;
  updateCopyField: (key: keyof SiteCopy, value: string) => void;
  updateCopy: (updates: Partial<SiteCopy>) => void;
  updateBlock: (id: string, updates: Partial<AlternatingBlock>) => void;
  addBlogPost: (post: Omit<BlogPost, 'id'>) => void;
  updateBlogPost: (id: string, post: Partial<BlogPost>) => void;
  deleteBlogPost: (id: string) => void;
  addDonation: (amount: number, donorName?: string, email?: string) => void;
  addContact: (data: Omit<ContactSubmission, 'id' | 'createdAt'>) => void;
  uploadImage: (file: File) => Promise<string>;
  resetToDefaults: () => void;
  exportDataJSON: () => string;
  importDataJSON: (jsonStr: string) => boolean;
}

const ContentContext = createContext<ContentContextType | undefined>(undefined);

const STORAGE_KEYS = {
  COPY: 'seeds_site_copy_v1',
  CURRICULUM: 'seeds_curriculum_v1',
  BLOCKS: 'seeds_blocks_v1',
  POSTS: 'seeds_posts_v1',
  DONATIONS: 'seeds_donations_v1',
  CONTACTS: 'seeds_contacts_v1',
  AUTH: 'seeds_admin_auth_v1'
};

export const ContentProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [copy, setCopy] = useState<SiteCopy>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.COPY);
      return saved ? { ...initialSiteCopy, ...JSON.parse(saved) } : initialSiteCopy;
    } catch {
      return initialSiteCopy;
    }
  });

  const [curriculum, setCurriculum] = useState<CurriculumModule[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.CURRICULUM);
      return saved ? JSON.parse(saved) : initialCurriculumModules;
    } catch {
      return initialCurriculumModules;
    }
  });

  const [alternatingBlocks, setAlternatingBlocks] = useState<AlternatingBlock[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.BLOCKS);
      return saved ? JSON.parse(saved) : initialAlternatingBlocks;
    } catch {
      return initialAlternatingBlocks;
    }
  });

  const [partnerLogos] = useState<PartnerLogo[]>(initialPartnerLogos);

  const [blogPosts, setBlogPosts] = useState<BlogPost[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.POSTS);
      return saved ? JSON.parse(saved) : initialBlogPosts;
    } catch {
      return initialBlogPosts;
    }
  });

  const [donations, setDonations] = useState<DonationRecord[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.DONATIONS);
      return saved ? JSON.parse(saved) : [
        { id: 'don-1', amount: 50, donorName: 'Sarah Jenkins', email: 'sarah@example.com', createdAt: '2026-03-12' },
        { id: 'don-2', amount: 250, donorName: 'Ontario Community Trust', email: 'giving@oct.org', createdAt: '2026-03-08' },
        { id: 'don-3', amount: 100, donorName: 'Marcus Vance', email: 'marcus.v@gmail.com', createdAt: '2026-02-28' }
      ];
    } catch {
      return [];
    }
  });

  const [contacts, setContacts] = useState<ContactSubmission[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.CONTACTS);
      return saved ? JSON.parse(saved) : [
        {
          id: 'cnt-1',
          fullName: 'Elena Rostova',
          email: 'elena.rostova@peelschools.org',
          phone: '(416) 555-0192',
          message: 'Interested in booking an In-School Workshop for our Grade 8 class this spring semester.',
          createdAt: '2026-03-10'
        }
      ];
    } catch {
      return [];
    }
  });

  const [isAdmin, setIsAdmin] = useState<boolean>(() => {
    try {
      return localStorage.getItem(STORAGE_KEYS.AUTH) === 'true';
    } catch {
      return false;
    }
  });

  const [activeAdminPage, setActiveAdminPage] = useState<string>('home');

  // Persistence effects
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.COPY, JSON.stringify(copy));
    } catch (e) {
      console.warn('Storage quota reached', e);
    }
  }, [copy]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.BLOCKS, JSON.stringify(alternatingBlocks));
    } catch (e) {
      console.warn('Storage quota reached', e);
    }
  }, [alternatingBlocks]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.POSTS, JSON.stringify(blogPosts));
    } catch (e) {
      console.warn('Storage quota reached', e);
    }
  }, [blogPosts]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.DONATIONS, JSON.stringify(donations));
    } catch (e) {
      console.warn('Storage quota reached', e);
    }
  }, [donations]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.CONTACTS, JSON.stringify(contacts));
    } catch (e) {
      console.warn('Storage quota reached', e);
    }
  }, [contacts]);

  const login = (user: string, pass: string): boolean => {
    // Admin credentials matching prompt specifications
    if ((user === 'admin' && pass === 'admin123') || (user === 'admin' && pass === 'password') || pass === 'admin123') {
      setIsAdmin(true);
      localStorage.setItem(STORAGE_KEYS.AUTH, 'true');
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAdmin(false);
    localStorage.removeItem(STORAGE_KEYS.AUTH);
  };

  const updateCopyField = (key: keyof SiteCopy, value: string) => {
    setCopy(prev => ({ ...prev, [key]: value }));
  };

  const updateCopy = (updates: Partial<SiteCopy>) => {
    setCopy(prev => ({ ...prev, ...updates }));
  };

  const updateBlock = (id: string, updates: Partial<AlternatingBlock>) => {
    setAlternatingBlocks(prev =>
      prev.map(b => (b.id === id ? { ...b, ...updates } : b))
    );
  };

  const addBlogPost = (post: Omit<BlogPost, 'id'>) => {
    const newPost: BlogPost = {
      ...post,
      id: `post-${Date.now()}`
    };
    setBlogPosts(prev => [newPost, ...prev]);
  };

  const updateBlogPost = (id: string, postUpdates: Partial<BlogPost>) => {
    setBlogPosts(prev =>
      prev.map(p => (p.id === id ? { ...p, ...postUpdates } : p))
    );
  };

  const deleteBlogPost = (id: string) => {
    setBlogPosts(prev => prev.filter(p => p.id !== id));
  };

  const addDonation = (amount: number, donorName?: string, email?: string) => {
    const newDonation: DonationRecord = {
      id: `don-${Date.now()}`,
      amount,
      donorName: donorName || 'Generous Supporter',
      email: email || 'supporter@community.org',
      createdAt: new Date().toISOString().split('T')[0]
    };
    setDonations(prev => [newDonation, ...prev]);
  };

  const addContact = (data: Omit<ContactSubmission, 'id' | 'createdAt'>) => {
    const newContact: ContactSubmission = {
      ...data,
      id: `cnt-${Date.now()}`,
      createdAt: new Date().toISOString().split('T')[0]
    };
    setContacts(prev => [newContact, ...prev]);
  };

  const uploadImage = async (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        if (typeof reader.result === 'string') {
          resolve(reader.result);
        } else {
          reject(new Error('Failed to read file as data URL'));
        }
      };
      reader.onerror = error => reject(error);
      reader.readAsDataURL(file);
    });
  };

  const resetToDefaults = () => {
    setCopy(initialSiteCopy);
    setCurriculum(initialCurriculumModules);
    setAlternatingBlocks(initialAlternatingBlocks);
    setBlogPosts(initialBlogPosts);
    localStorage.removeItem(STORAGE_KEYS.COPY);
    localStorage.removeItem(STORAGE_KEYS.BLOCKS);
    localStorage.removeItem(STORAGE_KEYS.POSTS);
  };

  const exportDataJSON = (): string => {
    return JSON.stringify(
      {
        copy,
        alternatingBlocks,
        blogPosts,
        curriculum
      },
      null,
      2
    );
  };

  const importDataJSON = (jsonStr: string): boolean => {
    try {
      const data = JSON.parse(jsonStr);
      if (data.copy) setCopy(data.copy);
      if (data.alternatingBlocks) setAlternatingBlocks(data.alternatingBlocks);
      if (data.blogPosts) setBlogPosts(data.blogPosts);
      if (data.curriculum) setCurriculum(data.curriculum);
      return true;
    } catch {
      return false;
    }
  };

  return (
    <ContentContext.Provider
      value={{
        copy,
        curriculum,
        alternatingBlocks,
        partnerLogos,
        blogPosts,
        donations,
        contacts,
        isAdmin,
        activeAdminPage,
        setActiveAdminPage,
        login,
        logout,
        updateCopyField,
        updateCopy,
        updateBlock,
        addBlogPost,
        updateBlogPost,
        deleteBlogPost,
        addDonation,
        addContact,
        uploadImage,
        resetToDefaults,
        exportDataJSON,
        importDataJSON
      }}
    >
      {children}
    </ContentContext.Provider>
  );
};

export const useContent = (): ContentContextType => {
  const context = useContext(ContentContext);
  if (!context) {
    throw new Error('useContent must be used within a ContentProvider');
  }
  return context;
};
