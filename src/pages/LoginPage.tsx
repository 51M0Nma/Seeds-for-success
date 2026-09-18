import React, { useState } from 'react';
import { useContent } from '../context/ContentContext';
import { Logo } from '../components/Logo';
import { Lock, User, AlertCircle, ArrowLeft, Shield } from 'lucide-react';

interface LoginPageProps {
  onNavigate: (path: string) => void;
}

export const LoginPage: React.FC<LoginPageProps> = ({ onNavigate }) => {
  const { login, isAdmin } = useContent();
  const [username, setUsername] = useState('admin');
  const [password, setPassword] = useState('admin123');
  const [error, setError] = useState('');

  if (isAdmin) {
    // If already logged in, navigate straight to admin
    onNavigate('/admin');
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const success = login(username, password);
    if (success) {
      onNavigate('/admin');
    } else {
      setError('Invalid credentials. (Hint: username "admin", password "admin123")');
    }
  };

  const handleQuickDemoLogin = () => {
    login('admin', 'admin123');
    onNavigate('/admin');
  };

  return (
    <div id="login-page" className="min-h-screen bg-[#111314] flex flex-col justify-center py-12 sm:px-6 lg:px-8 relative text-white">
      {/* Background ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="sm:mx-auto sm:w-full sm:max-w-md text-center relative z-10">
        <div className="flex justify-center mb-6">
          <Logo variant="white" onClick={() => onNavigate('/')} />
        </div>
        <h2 className="font-serif text-3xl font-bold tracking-tight text-white">
          Admin Dashboard Login
        </h2>
        <p className="mt-2 text-sm text-neutral-400">
          Seeds for Success Visual CMS & Content Manager
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md relative z-10 px-4">
        <div className="bg-[#1a1d1e] py-8 px-6 shadow-2xl rounded-2xl border border-neutral-800 sm:px-10">
          {error && (
            <div className="mb-6 p-3 rounded-xl bg-red-950/60 border border-red-800/80 text-red-300 text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 flex-shrink-0" />
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5">
                Username
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-neutral-500">
                  <User className="w-4 h-4" />
                </div>
                <input
                  id="admin-login-username"
                  type="text"
                  required
                  value={username}
                  onChange={e => setUsername(e.target.value)}
                  className="block w-full pl-10 pr-3 py-2.5 bg-neutral-900 border border-neutral-700 rounded-xl text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#3ec48f] focus:ring-1 focus:ring-[#3ec48f]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-neutral-500">
                  <Lock className="w-4 h-4" />
                </div>
                <input
                  id="admin-login-password"
                  type="password"
                  required
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  className="block w-full pl-10 pr-3 py-2.5 bg-neutral-900 border border-neutral-700 rounded-xl text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#3ec48f] focus:ring-1 focus:ring-[#3ec48f]"
                />
              </div>
            </div>

            <div className="flex items-center justify-between text-xs text-neutral-400">
              <span className="flex items-center gap-1 text-emerald-400 font-mono text-[11px]">
                <Shield className="w-3 h-3" /> Default: admin / admin123
              </span>
            </div>

            <button
              id="admin-login-submit-btn"
              type="submit"
              className="w-full py-3 px-4 rounded-xl bg-[#3ec48f] hover:bg-[#34ad7d] text-neutral-950 font-bold text-xs uppercase tracking-wider transition-all shadow-md active:scale-98 cursor-pointer"
            >
              Sign In to CMS
            </button>
          </form>

          <div className="mt-6 pt-6 border-t border-neutral-800 text-center">
            <button
              onClick={handleQuickDemoLogin}
              className="text-xs text-emerald-400 hover:text-emerald-300 font-semibold underline cursor-pointer"
            >
              Instant 1-Click Demo Login
            </button>
          </div>
        </div>

        <div className="text-center mt-6">
          <button
            onClick={() => onNavigate('/')}
            className="inline-flex items-center gap-2 text-xs font-medium text-neutral-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to public website</span>
          </button>
        </div>
      </div>
    </div>
  );
};
