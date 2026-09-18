import React from 'react';

interface LogoProps {
  variant?: 'white' | 'dark';
  className?: string;
  onClick?: () => void;
}

export const Logo: React.FC<LogoProps> = ({ variant = 'white', className = '', onClick }) => {
  const isWhite = variant === 'white';

  return (
    <div
      id="seeds-logo-brand"
      onClick={onClick}
      className={`inline-flex items-center gap-3 cursor-pointer select-none group ${className}`}
    >
      {/* Spherical Gradient Emblem */}
      <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-full flex-shrink-0 shadow-sm overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-[#2d4b45] via-[#3a7566] to-[#51c49f]" />
        {/* Soft highlight reflection */}
        <div className="absolute top-1 left-1.5 w-4 h-4 bg-white/30 rounded-full blur-[2px]" />
        <div className="absolute bottom-1 right-1 w-3 h-3 bg-emerald-300/20 rounded-full blur-[1px]" />
      </div>

      {/* Typography */}
      <div className="flex flex-col leading-none">
        <span
          className={`font-serif text-2xl sm:text-[26px] tracking-tight transition-colors duration-200 ${
            isWhite ? 'text-white group-hover:text-emerald-300' : 'text-neutral-900 group-hover:text-emerald-700'
          }`}
        >
          Seeds
        </span>
        <span
          className={`text-[9px] sm:text-[10px] uppercase font-semibold tracking-[0.26em] -mt-0.5 ${
            isWhite ? 'text-neutral-300' : 'text-neutral-600'
          }`}
        >
          FOR SUCCESS
        </span>
      </div>
    </div>
  );
};
