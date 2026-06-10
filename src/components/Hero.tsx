import { motion } from 'motion/react';
import { Sparkles, Star, ShieldCheck, Clock, Calendar, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  setCurrentTab: (tab: string) => void;
}

export default function Hero({ setCurrentTab }: HeroProps) {
  const handleNav = (tabName: string) => {
    setCurrentTab(tabName);
    window.location.hash = `#/${tabName}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative overflow-hidden bg-white pt-24 pb-32">
      
      {/* Visual background decorations */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=2070&auto=format&fit=crop"
          alt="Clean modern living room"
          className="h-full w-full object-cover opacity-10"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/85 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Banner with google rating */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl"
        >
          <div className="inline-flex items-center gap-2.5 rounded-full bg-blue-50 px-4 py-2 text-xs font-bold text-blue-700 mb-8 border border-blue-100 shadow-xs">
            <span className="flex items-center gap-0.5">
              <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
              <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
              <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
              <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
              <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
            100% 5-Star Family Owned cleaning service
          </div>
          
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-slate-900 mb-6 leading-tight">
            Araujo Cleaning<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-500">
              Premium Home Cleaning
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed font-medium">
            Over a decade of meticulous, highly reliable premium home cleaning based in Georgia. Calculate your estimate in minutes or secure a free consultation instantly.
          </p>
          
          {/* Landing conversion triggers */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
            <button
              onClick={() => handleNav('estimator')}
              className="inline-flex items-center justify-center rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 px-8 text-sm shadow-md shadow-blue-100 transition-all w-full cursor-pointer"
            >
              Configure Instant Estimate
            </button>
            <a
              href="https://calendly.com/araujocleaning-servicesinfo/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold py-4 px-8 text-sm shadow-md transition-all w-full gap-2 cursor-pointer"
            >
              <Calendar className="w-4.5 h-4.5 shrink-0" />
              Book Consult (Calendly)
            </a>
          </div>

          {/* Social dynamic proof snippet */}
          <p className="text-xs text-slate-400 mt-4 font-semibold">
            ✓ Free walkthrough included • ✓ Fully insured crew • ✓ Decades of service
          </p>
        </motion.div>

        {/* Triple pillars card layouts */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-3 max-w-4xl mx-auto"
        >
          <div className="flex flex-col items-center p-6 bg-white rounded-3xl shadow-sm border border-slate-100 relative overflow-hidden group hover:border-blue-100 transition-colors">
            <div className="p-3.5 bg-blue-50 text-blue-600 rounded-2xl mb-4 group-hover:scale-105 transition-transform">
              <ShieldCheck className="w-7 h-7" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-1.5">Experienced Veterans</h3>
            <p className="text-slate-500 text-xs leading-relaxed text-center">Juliano and crew bring unparalleled detail, trustworthiness, and vetting to every room.</p>
          </div>
          
          <div className="flex flex-col items-center p-6 bg-white rounded-3xl shadow-sm border border-slate-100 relative overflow-hidden group hover:border-blue-100 transition-colors">
            <div className="p-3.5 bg-blue-50 text-blue-600 rounded-2xl mb-4 group-hover:scale-105 transition-transform">
              <Sparkles className="w-7 h-7" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-1.5">Miraculous Clean</h3>
            <p className="text-slate-500 text-xs leading-relaxed text-center">Specialized oven restores, grout line scrubbing, and thorough detail deep cleans.</p>
          </div>
          
          <div className="flex flex-col items-center p-6 bg-white rounded-3xl shadow-sm border border-slate-100 relative overflow-hidden group hover:border-blue-100 transition-colors">
            <div className="p-3.5 bg-blue-50 text-blue-600 rounded-2xl mb-4 group-hover:scale-105 transition-transform">
              <Clock className="w-7 h-7" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-1.5">Time Consideration</h3>
            <p className="text-slate-500 text-xs leading-relaxed text-center">Punctual arrivals, structured walkthrough validations, and highly reliable timeslots.</p>
          </div>
        </motion.div>

        {/* Landing Page Calendly Embedded Widget (Request #6 - high converting landing page separate from booking integrating Calendly) */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-24 max-w-4xl mx-auto text-left"
        >
          <div className="bg-slate-50 border border-slate-200/80 rounded-4xl p-6 sm:p-10 shadow-sm relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5 space-y-4">
                <div className="bg-emerald-50 text-emerald-700 border border-emerald-100 font-bold px-3 py-1.5 rounded-full text-xs w-fit flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                  HIGH CONVERTING DIRECT SECURE
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900 leading-tight">
                  Prefer a Direct Appointment?
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  Skip online calculation. You can book an inspection walkthrough directly with Juliano inside this landing page. Select a fast 30-minute consult to get a precise in-person quote.
                </p>
                
                {/* Instant trust ratings */}
                <div className="pt-2">
                  <span className="text-xs text-slate-400 block font-semibold">Araujo Clean SLA</span>
                  <div className="flex gap-4 mt-2 text-xs text-slate-700 font-bold">
                    <span className="flex items-center gap-1 text-blue-600">✓ Instant Sync</span>
                    <span className="flex items-center gap-1 text-blue-600">✓ 100% Free</span>
                  </div>
                </div>
              </div>
              
              <div className="lg:col-span-7 bg-white rounded-3xl overflow-hidden shadow-xs border border-slate-100 min-h-[500px]">
                <iframe 
                  src="https://calendly.com/araujocleaning-servicesinfo/30min" 
                  className="w-full h-[500px] border-none"
                  title="Schedule Clean Walkthrough"
                />
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
