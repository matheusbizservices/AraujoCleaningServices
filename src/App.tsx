import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import PriceEstimator from './components/PriceEstimator';
import Testimonials from './components/Testimonials';
import GalleryPage from './components/GalleryPage';
import Blog from './components/Blog';
import Footer from './components/Footer';
import AdLandingPage from './components/AdLandingPage';
import BecomeCleaner from './components/BecomeCleaner';

export default function App() {
  const [currentTab, setCurrentTab] = useState('home');

  useEffect(() => {
    // Parse current location hash for dynamic, native URL route support
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#/gallery')) {
        setCurrentTab('gallery');
      } else if (hash.startsWith('#/estimator')) {
        setCurrentTab('estimator');
      } else if (hash.startsWith('#/blog')) {
        setCurrentTab('blog');
      } else if (hash.startsWith('#/promo')) {
        setCurrentTab('promo');
      } else if (hash.startsWith('#/careers')) {
        setCurrentTab('careers');
      } else {
        setCurrentTab('home');
      }
      window.scrollTo({ top: 0 });
    };

    // Initial load check
    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-blue-200 selection:text-blue-900 antialiased">
      <Navbar currentTab={currentTab} setCurrentTab={setCurrentTab} />
      
      <main className="transition-all duration-300">
        {currentTab === 'home' && (
          <>
            <Hero setCurrentTab={setCurrentTab} />
            <Services />
            <Testimonials />
            <BecomeCleaner />
          </>
        )}
        
        {currentTab === 'gallery' && <GalleryPage />}
        
        {currentTab === 'estimator' && <PriceEstimator />}
        
        {currentTab === 'blog' && <Blog />}

        {currentTab === 'promo' && <AdLandingPage />}

        {currentTab === 'careers' && <BecomeCleaner />}
      </main>
      
      <Footer setCurrentTab={setCurrentTab} />
    </div>
  );
}
