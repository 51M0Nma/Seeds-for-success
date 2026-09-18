import React, { useState, useEffect } from 'react';
import { ContentProvider } from './context/ContentContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { LessonsPage } from './pages/LessonsPage';
import { MillionaireAcademyPage } from './pages/MillionaireAcademyPage';
import { OurServicesPage } from './pages/OurServicesPage';
import { MoneyTalkPage } from './pages/MoneyTalkPage';
import { DonatePage } from './pages/DonatePage';
import { ContactPage } from './pages/ContactPage';
import { AboutPage } from './pages/AboutPage';
import { LoginPage } from './pages/LoginPage';
import { AdminDashboard } from './pages/AdminDashboard';

export function App() {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    return window.location.pathname || '/';
  });

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (path: string) => {
    if (path !== currentPath) {
      window.history.pushState({}, '', path);
      setCurrentPath(path);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const isAdminView = currentPath === '/admin' || currentPath === '/login';

  const renderPage = () => {
    switch (currentPath) {
      case '/':
        return <HomePage onNavigate={navigate} />;
      case '/lessons':
        return <LessonsPage onNavigate={navigate} />;
      case '/millionaire-academy':
        return <MillionaireAcademyPage onNavigate={navigate} />;
      case '/our-services':
        return <OurServicesPage onNavigate={navigate} />;
      case '/moneytalk':
        return <MoneyTalkPage onNavigate={navigate} />;
      case '/donate':
        return <DonatePage onNavigate={navigate} />;
      case '/contact':
        return <ContactPage onNavigate={navigate} />;
      case '/about':
        return <AboutPage onNavigate={navigate} />;
      case '/login':
        return <LoginPage onNavigate={navigate} />;
      case '/admin':
        return <AdminDashboard onNavigate={navigate} />;
      default:
        return <HomePage onNavigate={navigate} />;
    }
  };

  return (
    <ContentProvider>
      <div className="min-h-screen flex flex-col bg-white text-neutral-900 font-sans antialiased selection:bg-[#3ec48f] selection:text-neutral-950">
        {!isAdminView && <Header currentPath={currentPath} onNavigate={navigate} />}
        
        <main className="flex-1 w-full">
          {renderPage()}
        </main>

        {!isAdminView && <Footer onNavigate={navigate} />}
      </div>
    </ContentProvider>
  );
}

export default App;
