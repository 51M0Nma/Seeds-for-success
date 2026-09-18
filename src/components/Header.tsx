import React, { useState, useEffect } from 'react';
import { Menu, Shield } from 'lucide-react';
import { Logo } from './Logo';
import { OffCanvasMenu } from './OffCanvasMenu';
import { useContent } from '../context/ContentContext';

interface HeaderProps {
  currentPath: string;
  onNavigate: (path: string) => void;
  onOpenMenu?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPath, onNavigate, onOpenMenu }) => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isAdmin } = useContent();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Lessons', path: '/lessons' },
    { label: 'Our Services', path: '/our-services' },
    { label: 'MoneyTalk', path: '/moneytalk' },
    { label: 'Donate', path: '/donate' }
  ];

  const handleOpenMenu = () => {
    if (onOpenMenu) {
      onOpenMenu();
    } else {
      setIsMenuOpen(true);
    }
  };

  return (
    <>
      <header
        id="main-header"
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-[#121415]/95 backdrop-blur-md py-3 shadow-lg border-b border-white/5'
            : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <Logo variant="white" onClick={() => onNavigate('/')} />

          {/* Desktop Navigation */}
          <div className="flex items-center gap-8">
            <nav className="hidden md:flex items-center gap-7 lg:gap-9 text-sm font-medium tracking-wide">
              {navLinks.map(link => {
                const isActive = currentPath === link.path;
                return (
                  <button
                    key={link.path}
                    id={`nav-link-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                    onClick={() => onNavigate(link.path)}
                    className={`relative py-1 transition-colors duration-200 cursor-pointer ${
                      isActive
                        ? 'text-[#3ec48f] font-semibold'
                        : 'text-white/90 hover:text-white'
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#3ec48f] rounded-full" />
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Admin badge if logged in */}
            {isAdmin && (
              <button
                id="header-admin-badge"
                onClick={() => onNavigate('/admin')}
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 rounded-full hover:bg-emerald-500/30 transition-colors cursor-pointer"
              >
                <Shield className="w-3.5 h-3.5" />
                <span>Admin CMS</span>
              </button>
            )}

            {/* Hamburger Menu Trigger */}
            <button
              id="hamburger-menu-button"
              onClick={handleOpenMenu}
              aria-label="Open Navigation Menu"
              className="p-2 rounded-lg text-white hover:text-emerald-400 hover:bg-white/10 transition-colors flex items-center justify-center cursor-pointer"
            >
              <Menu className="w-7 h-7 stroke-[2]" />
            </button>
          </div>
        </div>
      </header>

      {/* Off-canvas menu drawer */}
      <OffCanvasMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        currentPath={currentPath}
        onNavigate={path => {
          setIsMenuOpen(false);
          onNavigate(path);
        }}
      />
    </>
  );
};
