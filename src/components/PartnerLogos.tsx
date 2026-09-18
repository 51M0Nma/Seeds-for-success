import React from 'react';

export const PartnerLogos: React.FC = () => {
  return (
    <div id="partner-logos-strip" className="w-full py-10">
      {/* 2-row clean responsive grid */}
      <div className="max-w-6xl mx-auto px-4">
        {/* Row 1: 6 logos */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8 items-center justify-items-center mb-8">
          {/* 1. Toronto District School Board */}
          <div className="flex flex-col items-center justify-center p-3 text-center grayscale opacity-85 hover:grayscale-0 hover:opacity-100 transition-all duration-200">
            <svg className="w-12 h-12 text-[#006699]" viewBox="0 0 100 100" fill="currentColor">
              <path d="M50 10 C30 35 25 55 25 70 C25 85 36 90 50 90 C64 90 75 85 75 70 C75 55 70 35 50 10 Z M50 25 C60 45 65 60 65 72 C65 80 58 84 50 84 C42 84 35 80 35 72 C35 60 40 45 50 25 Z" />
              <circle cx="50" cy="58" r="8" fill="#e65100" />
            </svg>
            <span className="text-[11px] font-bold text-neutral-800 tracking-tight mt-1.5 leading-tight">
              Toronto District<br />School Board
            </span>
          </div>

          {/* 2. Peel District School Board */}
          <div className="flex flex-col items-center justify-center p-3 text-center grayscale opacity-85 hover:grayscale-0 hover:opacity-100 transition-all duration-200">
            <div className="flex items-center gap-1">
              <span className="text-xl font-bold tracking-tighter text-[#005a9c]">peel</span>
              <span className="w-2.5 h-2.5 rounded-full bg-[#36c58e] inline-block" />
            </div>
            <span className="text-[10px] uppercase font-semibold tracking-wider text-neutral-600 mt-1">
              District School Board
            </span>
          </div>

          {/* 3. Dufferin-Peel Catholic District School Board */}
          <div className="flex flex-col items-center justify-center p-3 text-center grayscale opacity-85 hover:grayscale-0 hover:opacity-100 transition-all duration-200">
            <div className="relative w-10 h-10 flex items-center justify-center border-2 border-[#1a365d] rounded-full">
              <span className="text-base font-bold text-[#1a365d]">✝</span>
            </div>
            <span className="text-[10px] font-bold text-neutral-800 leading-tight mt-1.5">
              Dufferin-Peel<br />CDSB
            </span>
          </div>

          {/* 4. Toronto Catholic District School Board */}
          <div className="flex flex-col items-center justify-center p-3 text-center grayscale opacity-85 hover:grayscale-0 hover:opacity-100 transition-all duration-200">
            <div className="w-10 h-10 rounded-full bg-[#0a4060] flex items-center justify-center text-white text-xs font-bold shadow-sm">
              TCDSB
            </div>
            <span className="text-[10px] font-bold text-neutral-800 leading-tight mt-1.5">
              Toronto Catholic<br />School Board
            </span>
          </div>

          {/* 5. CPN Financial Services Ltd. */}
          <div className="flex flex-col items-center justify-center p-3 text-center grayscale opacity-85 hover:grayscale-0 hover:opacity-100 transition-all duration-200">
            <div className="flex items-center gap-1.5">
              <span className="text-lg font-black tracking-widest text-neutral-900 border-b-2 border-emerald-600 pb-0.5">
                CPN
              </span>
            </div>
            <span className="text-[9px] font-semibold text-neutral-600 tracking-wider mt-1 uppercase">
              Financial Services Ltd.
            </span>
          </div>

          {/* 6. The Heard */}
          <div className="flex flex-col items-center justify-center p-3 text-center grayscale opacity-85 hover:grayscale-0 hover:opacity-100 transition-all duration-200">
            <div className="w-11 h-11 rounded-full border-2 border-neutral-900 flex items-center justify-center p-1">
              <span className="text-[10px] font-black tracking-tighter uppercase text-neutral-900 text-center leading-none">
                THE<br />HEARD
              </span>
            </div>
          </div>
        </div>

        {/* Row 2: 4 logos */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-12 items-center justify-items-center max-w-4xl mx-auto pt-2 border-t border-neutral-100">
          {/* 7. iA Financial Group */}
          <div className="flex items-center gap-2 p-3 grayscale opacity-85 hover:grayscale-0 hover:opacity-100 transition-all duration-200">
            <div className="bg-[#b3142e] text-white px-2 py-1 rounded font-black text-sm tracking-tight">
              iA
            </div>
            <div className="flex flex-col text-left">
              <span className="text-xs font-bold text-neutral-900 tracking-tight leading-none">
                Financial Group
              </span>
              <span className="text-[9px] text-neutral-500 font-medium">Invest. Retire. Protect.</span>
            </div>
          </div>

          {/* 8. HUB International */}
          <div className="flex items-center gap-2 p-3 grayscale opacity-85 hover:grayscale-0 hover:opacity-100 transition-all duration-200">
            <div className="w-7 h-7 rounded-full border-4 border-[#333] flex items-center justify-center font-black text-xs text-neutral-900">
              O
            </div>
            <div className="flex flex-col text-left">
              <span className="text-sm font-black tracking-wider text-neutral-900 leading-none">HUB</span>
              <span className="text-[9px] font-bold text-neutral-500 tracking-widest uppercase">International</span>
            </div>
          </div>

          {/* 9. Willful */}
          <div className="flex items-center justify-center p-3 grayscale opacity-85 hover:grayscale-0 hover:opacity-100 transition-all duration-200">
            <span className="text-2xl font-bold tracking-tight text-[#1b2b3a] font-sans">
              willful<span className="text-emerald-500">.</span>
            </span>
          </div>

          {/* 10. The Harris Brand */}
          <div className="flex flex-col items-center justify-center p-3 text-center grayscale opacity-85 hover:grayscale-0 hover:opacity-100 transition-all duration-200">
            <div className="flex items-center gap-1">
              <span className="font-serif font-black text-base tracking-widest text-neutral-900">HB</span>
            </div>
            <span className="text-[10px] font-serif font-bold tracking-[0.15em] text-neutral-900 uppercase">
              The Harris Brand
            </span>
            <span className="text-[8px] font-semibold text-neutral-500 tracking-wider uppercase">
              - All Canadian -
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
