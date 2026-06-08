import { Sparkles, Menu, X, Calendar } from 'lucide-react';
import { useState } from 'react';

interface NavbarProps {
  currentTab: string;
  setCurrentTab: (tab: string) => void;
}

export default function Navbar({ currentTab, setCurrentTab }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navTo = (tabName: string) => {
    setCurrentTab(tabName);
    window.location.hash = `#/${tabName}`;
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md z-50 border-b border-slate-100 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo brand */}
          <button 
            onClick={() => navTo('home')} 
            className="flex items-center gap-2.5 group text-left focus:outline-none cursor-pointer"
          >
            <div className="bg-blue-600 p-2 rounded-xl group-hover:scale-105 transition-transform shadow-xs">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div>
              <span className="text-lg font-black text-slate-900 tracking-tight block">Araujo Cleaning</span>
              <span className="text-[10px] text-blue-600 font-bold uppercase tracking-wider block">Est. 2016</span>
            </div>
          </button>
          
          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8 text-sm font-semibold">
            <button 
              onClick={() => navTo('home')} 
              className={`transition-colors cursor-pointer ${currentTab === 'home' ? 'text-blue-600' : 'text-slate-600 hover:text-blue-600'}`}
            >
              Home
            </button>
            <button 
              onClick={() => navTo('gallery')} 
              className={`transition-colors cursor-pointer ${currentTab === 'gallery' ? 'text-blue-600' : 'text-slate-600 hover:text-blue-600'}`}
            >
              Proof Gallery
            </button>
            <button 
              onClick={() => navTo('estimator')} 
              className={`transition-colors cursor-pointer ${currentTab === 'estimator' ? 'text-blue-600' : 'text-slate-600 hover:text-blue-600'}`}
            >
              Pricing Estimator
            </button>
            <button 
              onClick={() => navTo('blog')} 
              className={`transition-colors cursor-pointer ${currentTab === 'blog' ? 'text-blue-600' : 'text-slate-600 hover:text-blue-600'}`}
            >
              Blog & Articles
            </button>
            <button 
              onClick={() => navTo('careers')} 
              className={`transition-colors cursor-pointer ${currentTab === 'careers' ? 'text-blue-600' : 'text-slate-600 hover:text-blue-600'}`}
            >
              Become a Cleaner
            </button>
            
            <a 
              href="https://calendly.com/araujocleaning-servicesinfo/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-500 text-white px-5 py-2.5 rounded-xl transition-all shadow-md shadow-blue-100 flex items-center gap-2 text-xs font-bold"
            >
              <Calendar className="w-4 h-4 shrink-0" />
              Book Consult (Calendly)
            </a>
          </div>

          {/* Mobile menu trigger */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600 hover:text-slate-900 p-2 focus:outline-none cursor-pointer">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-100 px-4 pt-2 pb-6 space-y-2.5 shadow-lg absolute w-full left-0 z-40 animate-in fade-in slide-in-from-top-4 duration-200">
          <button 
            onClick={() => navTo('home')} 
            className="block w-full text-left px-3 py-3 rounded-lg text-base font-semibold text-slate-700 hover:bg-slate-50 hover:text-blue-600 transition-all cursor-pointer"
          >
            Home
          </button>
          <button 
            onClick={() => navTo('gallery')} 
            className="block w-full text-left px-3 py-3 rounded-lg text-base font-semibold text-slate-700 hover:bg-slate-50 hover:text-blue-600 transition-all cursor-pointer"
          >
            Proof Gallery & Reviews
          </button>
          <button 
            onClick={() => navTo('estimator')} 
            className="block w-full text-left px-3 py-3 rounded-lg text-base font-semibold text-slate-700 hover:bg-slate-50 hover:text-blue-600 transition-all cursor-pointer"
          >
            Pricing Estimator
          </button>
          <button 
            onClick={() => navTo('blog')} 
            className="block w-full text-left px-3 py-3 rounded-lg text-base font-semibold text-slate-700 hover:bg-slate-50 hover:text-blue-600 transition-all cursor-pointer"
          >
            Blog & Articles
          </button>
          <button 
            onClick={() => navTo('careers')} 
            className="block w-full text-left px-3 py-3 rounded-lg text-base font-semibold text-slate-700 hover:bg-slate-50 hover:text-blue-600 transition-all cursor-pointer"
          >
            Become a Cleaner
          </button>
          
          <div className="pt-2">
            <a 
              href="https://calendly.com/araujocleaning-servicesinfo/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-xl text-base font-semibold shadow-md"
            >
              Book Consult (Calendly)
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
