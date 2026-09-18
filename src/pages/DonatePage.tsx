import React, { useState } from 'react';
import { useContent } from '../context/ContentContext';
import { Heart, CheckCircle2, ShieldCheck, Sparkles, X } from 'lucide-react';

interface DonatePageProps {
  onNavigate: (path: string) => void;
}

export const DonatePage: React.FC<DonatePageProps> = ({ onNavigate: _onNavigate }) => {
  const { copy, addDonation } = useContent();
  const [amount, setAmount] = useState<number>(50);
  const [donorName, setDonorName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [isSuccessOpen, setIsSuccessOpen] = useState<boolean>(false);

  const presets = [10, 25, 50, 100, 250, 500];

  const handleDonate = (e: React.FormEvent) => {
    e.preventDefault();
    addDonation(amount, donorName || 'Generous Supporter', email || 'donor@seedsforsuccess.academy');
    setIsSuccessOpen(true);
  };

  return (
    <div id="donate-page" className="w-full bg-[#f8faf9] min-h-screen">
      {/* 1. HERO BANNER */}
      <section
        id="donate-hero-section"
        className="relative min-h-[70vh] flex items-center text-white bg-neutral-900 overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <img
            src={copy.donateHeroImage}
            alt="Smiling students supported by Seeds for Success"
            className="w-full h-full object-cover object-center brightness-[0.4]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-neutral-950/40 to-neutral-950/60" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center flex flex-col items-center">
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#23a976] mb-4 drop-shadow-md">
            {copy.donateHeroTitle}
          </h1>

          <p className="max-w-xl text-base sm:text-lg md:text-xl text-neutral-200 font-light leading-relaxed">
            {copy.donateHeroSubtitle}
          </p>
        </div>
      </section>

      {/* 2. DONATION FORM SECTION */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        {/* Intro text */}
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#394d54] font-semibold mb-3 leading-tight">
            {copy.donateCardHeading}
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 font-normal">
            {copy.donateCardSubheading}
          </p>
        </div>

        {/* Interactive Donation Card matching donate.png */}
        <div className="bg-white rounded-3xl shadow-sm border border-neutral-200/80 p-8 sm:p-14 max-w-2xl mx-auto">
          <form onSubmit={handleDonate} className="flex flex-col items-center">
            {/* Live Amount Display */}
            <div className="text-center mb-6">
              <span className="font-serif text-5xl sm:text-6xl font-bold text-neutral-900 tracking-tight">
                ${amount.toFixed(2)}
              </span>
              <p className="text-xs uppercase tracking-widest text-neutral-400 font-semibold mt-1">
                Amount
              </p>
            </div>

            {/* Range Slider */}
            <div className="w-full max-w-md my-4">
              <input
                id="donation-range-slider"
                type="range"
                min="10"
                max="500"
                step="5"
                value={amount}
                onChange={e => setAmount(Number(e.target.value))}
                className="w-full h-2 bg-neutral-200 rounded-lg appearance-none cursor-pointer accent-[#3ec48f]"
              />
              <p className="text-xs text-center text-neutral-400 mt-3">
                Drag the range slider to change the amount.
              </p>
            </div>

            {/* Preset Amount Chips */}
            <div className="flex flex-wrap justify-center gap-2.5 my-6">
              {presets.map(val => (
                <button
                  type="button"
                  key={val}
                  onClick={() => setAmount(val)}
                  className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                    amount === val
                      ? 'bg-[#3ec48f] text-neutral-950 shadow-sm'
                      : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                  }`}
                >
                  ${val}
                </button>
              ))}
            </div>

            {/* Optional Donor Info Inputs */}
            <div className="w-full space-y-4 my-4 max-w-md">
              <div>
                <label className="block text-xs font-semibold text-neutral-600 uppercase tracking-wider mb-1">
                  Full Name (Optional)
                </label>
                <input
                  type="text"
                  placeholder="e.g. Sarah Jenkins"
                  value={donorName}
                  onChange={e => setDonorName(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-neutral-300 text-sm focus:outline-none focus:border-[#3ec48f] focus:ring-1 focus:ring-[#3ec48f]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-600 uppercase tracking-wider mb-1">
                  Email for Tax Receipt
                </label>
                <input
                  type="email"
                  placeholder="name@domain.com"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-neutral-300 text-sm focus:outline-none focus:border-[#3ec48f] focus:ring-1 focus:ring-[#3ec48f]"
                />
              </div>
            </div>

            {/* Make Donation Button matching screenshot */}
            <button
              id="make-donation-btn"
              type="submit"
              className="mt-6 px-10 py-3.5 rounded-full bg-[#465f5b] hover:bg-[#384e4a] text-white font-semibold text-sm tracking-wider uppercase transition-all shadow-md active:scale-98 cursor-pointer flex items-center gap-2"
            >
              <Heart className="w-4 h-4 fill-white" />
              <span>Make Donation</span>
            </button>

            <div className="flex items-center gap-2 text-xs text-neutral-400 mt-6">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              <span>Secure 256-Bit SSL Encrypted Charitable Contribution</span>
            </div>
          </form>
        </div>

        {/* Impact Breakdown */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center max-w-3xl mx-auto">
          <div className="p-6 rounded-2xl bg-white border border-neutral-200/80">
            <span className="font-serif text-3xl font-bold text-[#23a976] block mb-1">$25</span>
            <p className="text-xs text-neutral-600">Funds financial learning worksheets and materials for 5 students</p>
          </div>
          <div className="p-6 rounded-2xl bg-white border border-neutral-200/80">
            <span className="font-serif text-3xl font-bold text-[#23a976] block mb-1">$50</span>
            <p className="text-xs text-neutral-600">Sponsors a student's full attendance in our Saturday workshop</p>
          </div>
          <div className="p-6 rounded-2xl bg-white border border-neutral-200/80">
            <span className="font-serif text-3xl font-bold text-[#23a976] block mb-1">$250</span>
            <p className="text-xs text-neutral-600">Funds first seed investment portfolio account for a classroom</p>
          </div>
        </div>
      </main>

      {/* Success Modal */}
      {isSuccessOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs">
          <div className="bg-white rounded-3xl p-8 sm:p-10 max-w-md w-full text-center shadow-2xl relative">
            <button
              onClick={() => setIsSuccessOpen(false)}
              className="absolute top-5 right-5 text-neutral-400 hover:text-neutral-700"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="w-16 h-16 rounded-full bg-emerald-100 text-[#23a976] flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <h3 className="font-serif text-2xl font-bold text-neutral-900 mb-2">
              Thank You for Your Support!
            </h3>

            <p className="text-sm text-neutral-600 mb-6">
              Your contribution of <strong className="text-neutral-900">${amount.toFixed(2)} CAD</strong> empowers Ontario students with the financial foundation to build generational freedom.
            </p>

            <div className="p-4 bg-neutral-50 rounded-xl text-left text-xs text-neutral-500 space-y-1 mb-6 border border-neutral-200">
              <p><strong>Organization:</strong> Seeds for Success Academy</p>
              <p><strong>Status:</strong> Completed</p>
              <p><strong>Reference:</strong> SEED-DON-{Date.now().toString().slice(-6)}</p>
            </div>

            <button
              onClick={() => setIsSuccessOpen(false)}
              className="w-full py-3 rounded-full bg-[#3ec48f] text-neutral-950 font-bold text-xs uppercase tracking-wider"
            >
              Done
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
