import React from 'react';
import { X, User, ShieldCheck } from 'lucide-react';
import { useContent } from '../context/ContentContext';

interface OffCanvasMenuProps {
  isOpen: boolean;
  onClose: () => void;
  currentPath: string;
  onNavigate: (path: string) => void;
}

export const OffCanvasMenu: React.FC<OffCanvasMenuProps> = ({
  isOpen,
  onClose,
  currentPath,
  onNavigate
}) => {
  const { isAdmin } = useContent();

  if (!isOpen) return null;

  const menuItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Lessons', path: '/lessons' },
    { label: 'Our Services', path: '/our-services' },
    { label: 'Millionaire Academy', path: '/millionaire-academy' },
    { label: 'MoneyTalk', path: '/moneytalk' },
    { label: 'Donate', path: '/donate' },
    { label: 'Contact', path: '/contact' }
  ];

  const handleLinkClick = (path: string) => {
    onNavigate(path);
    onClose();
  };

  return (
    <div id="offcanvas-menu-overlay" className="fixed inset-0 z-50 flex justify-end">
      {/* Dimmed backdrop with page preview visible underneath */}
      <div
        id="offcanvas-backdrop"
        onClick={onClose}
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity duration-300"
      />

      {/* Slide-out drawer from right */}
      <div
        id="offcanvas-drawer"
        className="relative w-full max-w-sm sm:max-w-md bg-[#181a1b] text-white h-full shadow-2xl z-10 flex flex-col justify-between overflow-y-auto transform transition-transform duration-300"
      >
        <div>
          {/* Header */}
          <div className="flex items-center justify-between px-8 py-7 border-b border-neutral-800">
            <h2 className="text-xl font-bold tracking-wider uppercase text-neutral-100 font-sans">
              MENU
            </h2>
            <button
              id="offcanvas-close-button"
              onClick={onClose}
              aria-label="Close menu"
              className="w-9 h-9 rounded-full border border-neutral-700 flex items-center justify-center text-neutral-300 hover:text-white hover:border-neutral-400 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Account Login Item */}
          <div className="px-8 py-5 border-b border-neutral-800/80 bg-neutral-900/50">
            <button
              id="menu-account-login-link"
              onClick={() => handleLinkClick(isAdmin ? '/admin' : '/login')}
              className="flex items-center gap-3 text-emerald-400 hover:text-emerald-300 transition-colors font-medium text-base group w-full text-left"
            >
              <div className="w-8 h-8 rounded-full bg-emerald-950/80 border border-emerald-600/40 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-800/50">
                {isAdmin ? <ShieldCheck className="w-4 h-4 text-emerald-300" /> : <User className="w-4 h-4" />}
              </div>
              <span>{isAdmin ? 'Admin Dashboard (Active)' : 'Account Login'}</span>
            </button>
          </div>

          {/* Navigation Items */}
          <nav className="px-8 py-6 flex flex-col space-y-4">
            {menuItems.map(item => {
              const isActive = currentPath === item.path;
              return (
                <button
                  key={item.path}
                  id={`menu-item-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                  onClick={() => handleLinkClick(item.path)}
                  className={`text-left text-lg font-medium tracking-wide transition-all py-1.5 flex items-center justify-between ${
                    isActive
                      ? 'text-[#3ec48f] font-semibold pl-2 border-l-2 border-[#3ec48f]'
                      : 'text-neutral-300 hover:text-white hover:pl-1'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#3ec48f]" />}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Footer info in drawer */}
        <div className="p-8 border-t border-neutral-800 text-xs text-neutral-400 space-y-2">
          <p className="font-semibold text-neutral-300">Seeds for Success</p>
          <p>Financial Literacy For All</p>
          <p className="text-emerald-400/90 font-mono">(647) 285-4350</p>
        </div>
      </div>
    </div>
  );
};
