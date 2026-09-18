import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { Logo } from './Logo';
import { useContent } from '../context/ContentContext';

interface FooterProps {
  onNavigate: (path: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const { copy } = useContent();

  const footerLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Lessons', path: '/lessons' },
    { label: 'Our Services', path: '/our-services' },
    { label: 'MoneyTalk', path: '/moneytalk' },
    { label: 'Donate', path: '/donate' },
    { label: 'Contact', path: '/contact' }
  ];

  return (
    <footer id="main-site-footer" className="bg-[#000000] text-white pt-16 pb-8 border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-12 border-b border-neutral-800">
          {/* Col 1: Logo & Contact Info */}
          <div className="lg:col-span-5 space-y-6">
            <Logo variant="white" onClick={() => onNavigate('/')} />
            <p className="text-neutral-400 text-sm max-w-sm leading-relaxed">
              Seeds for Success is a non-profit organization that teaches students how to build wealth and funds their first investments.
            </p>

            <div className="space-y-3 pt-2 text-sm text-neutral-300">
              <a
                href={`tel:${copy.phone.replace(/[^0-9]/g, '')}`}
                className="flex items-center gap-3 hover:text-emerald-400 transition-colors group"
              >
                <div className="w-8 h-8 rounded-full bg-neutral-900 flex items-center justify-center text-neutral-400 group-hover:text-emerald-400 group-hover:bg-neutral-800">
                  <Phone className="w-4 h-4" />
                </div>
                <span>{copy.phone}</span>
              </a>

              <a
                href={`mailto:${copy.email}`}
                className="flex items-center gap-3 hover:text-emerald-400 transition-colors group"
              >
                <div className="w-8 h-8 rounded-full bg-neutral-900 flex items-center justify-center text-neutral-400 group-hover:text-emerald-400 group-hover:bg-neutral-800">
                  <Mail className="w-4 h-4" />
                </div>
                <span>{copy.email}</span>
              </a>

              <div className="flex items-start gap-3 text-neutral-400">
                <div className="w-8 h-8 rounded-full bg-neutral-900 flex items-center justify-center text-neutral-400 flex-shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div className="whitespace-pre-line text-sm leading-snug">
                  {copy.address}
                </div>
              </div>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-4 flex flex-col justify-start">
            <h3 className="text-xs uppercase tracking-widest text-neutral-400 font-semibold mb-6">
              Navigation
            </h3>
            <ul className="grid grid-cols-2 gap-y-3 text-sm text-neutral-300">
              {footerLinks.map(link => (
                <li key={link.path}>
                  <button
                    onClick={() => onNavigate(link.path)}
                    className="hover:text-emerald-400 transition-colors cursor-pointer text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => onNavigate('/admin')}
                  className="text-neutral-500 hover:text-emerald-400 transition-colors cursor-pointer text-left flex items-center gap-1.5"
                >
                  <span>Admin Login</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Social Connections */}
          <div className="lg:col-span-3 flex flex-col items-start lg:items-end">
            <h3 className="text-xs uppercase tracking-widest text-neutral-400 font-semibold mb-6">
              Follow Us
            </h3>
            <div className="flex items-center gap-3">
              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Seeds for Success on Facebook"
                className="w-10 h-10 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-white hover:bg-emerald-600 hover:border-emerald-500 transition-all duration-200"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Seeds for Success on Instagram"
                className="w-10 h-10 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-white hover:bg-emerald-600 hover:border-emerald-500 transition-all duration-200"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Sub-footer copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-400 gap-4">
          <p className="text-neutral-400">Powered by AutoPilot</p>
          <p className="text-neutral-400">{copy.copyright}</p>
        </div>
      </div>
    </footer>
  );
};
