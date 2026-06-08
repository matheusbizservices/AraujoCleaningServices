import { Sparkles, Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

interface FooterProps {
  setCurrentTab: (tab: string) => void;
}

export default function Footer({ setCurrentTab }: FooterProps) {
  const navTo = (tabName: string) => {
    setCurrentTab(tabName);
    window.location.hash = `#/${tabName}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-300 py-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-blue-600 p-2 rounded-xl">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white tracking-tight">Araujo Cleaning</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Professional, reliable, and thorough house cleaning services tailored to your needs. Making homes happier, one clean at a time.
            </p>
            <div className="flex gap-4">
              <span className="text-slate-400 hover:text-white transition-colors cursor-pointer">
                <Facebook className="w-5 h-5" />
              </span>
              <span className="text-slate-400 hover:text-white transition-colors cursor-pointer">
                <Twitter className="w-5 h-5" />
              </span>
              <span className="text-slate-400 hover:text-white transition-colors cursor-pointer">
                <Instagram className="w-5 h-5" />
              </span>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Services</h3>
            <ul className="space-y-4 text-sm">
              <li><button onClick={() => navTo('home')} className="hover:text-blue-400 transition-colors text-left cursor-pointer">Standard Cleaning</button></li>
              <li><button onClick={() => navTo('home')} className="hover:text-blue-400 transition-colors text-left cursor-pointer">Deep Cleaning</button></li>
              <li><button onClick={() => navTo('home')} className="hover:text-blue-400 transition-colors text-left cursor-pointer">Move In/Out Cleaning</button></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Company Pages</h3>
            <ul className="space-y-4 text-sm">
              <li><button onClick={() => navTo('home')} className="hover:text-blue-400 transition-colors text-left cursor-pointer">Home</button></li>
              <li><button onClick={() => navTo('gallery')} className="hover:text-blue-400 transition-colors text-left cursor-pointer">Proof & Before-After Gallery</button></li>
              <li><button onClick={() => navTo('estimator')} className="hover:text-blue-400 transition-colors text-left cursor-pointer">Pricing Estimator</button></li>
              <li><button onClick={() => navTo('blog')} className="hover:text-blue-400 transition-colors text-left cursor-pointer">Blog & Articles</button></li>
              <li><button onClick={() => navTo('careers')} className="hover:text-amber-300 text-slate-400 font-semibold transition-colors text-left cursor-pointer">Become a Cleaner</button></li>
              <li className="pt-2 border-t border-slate-800">
                <button 
                  onClick={() => navTo('promo')} 
                  className="hover:text-amber-300 text-slate-500 font-semibold text-xs flex items-center gap-1 transition-colors text-left cursor-pointer"
                >
                  ⚡ Active Ad Landing Offer
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Direct Contact</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-500 shrink-0" />
                <span>Boston and Surrounding Metro Areas<br />Massachusetts, USA</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-500 shrink-0" />
                <span>(978) 555-0143</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-500 shrink-0" />
                <span>hello@araujocleaning.com</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} Araujo Cleaning Services. All rights reserved.</p>
          <div className="flex gap-6">
            <span className="hover:text-white transition-colors cursor-pointer">Privacy</span>
            <span className="hover:text-white transition-colors cursor-pointer">Terms</span>
            <span className="hover:text-white transition-colors cursor-pointer">Sitemap</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
