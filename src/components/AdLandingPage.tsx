import { motion } from 'motion/react';
import { 
  Sparkles, Star, ShieldCheck, Clock, Calendar, 
  CheckCircle2, Phone, Mail, FileText, ArrowRight 
} from 'lucide-react';
import { DEDICATED_REVIEWS } from './GalleryPage';

export default function AdLandingPage() {
  const featuredReview = DEDICATED_REVIEWS[0]; // Jim Driscoll's review for top-tier trust proof

  return (
    <div className="pt-20 min-h-screen bg-slate-50">
      
      {/* High-Converting Ad Campaign Header */}
      <section className="bg-slate-900 py-16 sm:py-24 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <img 
            src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1200&auto=format&fit=crop" 
            alt="Pristine living room background" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 space-y-6">
          <div className="inline-flex items-center gap-1.5 bg-blue-600/30 text-blue-400 border border-blue-500/30 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            Special Ad Campaign Offer
          </div>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-tight">
            Premium Home Detailing <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-200">
              Without the Guesswork
            </span>
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Boston's top-rated, 100% owner-supervised cleaning team. Secure your exclusive walkthrough appointment instantly below to receive an exact, customized service estimate!
          </p>
          <div className="flex flex-wrap gap-4 justify-center text-xs text-slate-400 font-semibold pt-2">
            <span className="flex items-center gap-1.5 text-blue-400">✓ Fully Vetted & Insured Staff</span>
            <span className="flex items-center gap-1.5 text-blue-400">✓ Custom Materials Supplied</span>
            <span className="flex items-center gap-1.5 text-blue-400">✓ 10-Year Track Record</span>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Ad Conversion Bullet Points & Trust Evidence block (Left Side) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-xs border border-slate-200/80">
              <h2 className="text-xl font-bold text-slate-900 mb-6">Why Boston Homeowners Choose Araujo</h2>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="p-2.5 bg-blue-50 text-blue-600 h-fit rounded-xl font-bold">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm">Owner-Supervised Cleaning</h3>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                      Juliano Araujo personally oversees operations to ensure spotless fidelity that standard franchise agencies simply skip.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="p-2.5 bg-blue-50 text-blue-600 h-fit rounded-xl font-bold">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm">Punctual & Respectful Timeslots</h3>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                      We arrive and complete the deep cleaning inside strict milestones. Zero delays, full transparency.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="p-2.5 bg-blue-50 text-blue-600 h-fit rounded-xl font-bold">
                    <Star className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm">10-Year Neighborhood Legacy</h3>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                      Dozens of multi-year recurring residents depend on Araujo day after day to keep their properties in pristine shape.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Featured Social Proof Snippet */}
            <div className="bg-blue-600 text-white p-6 sm:p-8 rounded-3xl shadow-md space-y-4">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="italic text-slate-100 text-sm sm:text-base leading-relaxed">
                "{featuredReview.content}"
              </p>
              <div className="flex items-center gap-3 pt-2">
                <img 
                  src={featuredReview.avatar} 
                  alt={featuredReview.name} 
                  className="w-10 h-10 rounded-full object-cover ring-2 ring-blue-300"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="font-bold text-xs">{featuredReview.name}</h4>
                  <span className="text-[10px] text-blue-200">Verified Client • 10+ Year Partner</span>
                </div>
              </div>
            </div>

            {/* Direct contact line backup */}
            <div className="text-center bg-slate-100 p-4 rounded-2xl text-xs text-slate-600">
              Need immediate support? Call us directly: <strong className="text-slate-900">(978) 555-0143</strong>
            </div>
          </div>

          {/* Interactive Calendly Iframe Booking Panel (Right Side) */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl shadow-md border border-slate-200/85 overflow-hidden">
              <div className="p-5 sm:p-6 bg-slate-50 border-b border-slate-100 flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase font-black tracking-wider text-emerald-600 bg-emerald-50 px-2 py-1 rounded">
                    Direct Sync Active
                  </span>
                  <h3 className="font-bold text-slate-900 text-base mt-2">Book Walkthrough Direct</h3>
                </div>
                <div className="text-right">
                  <span className="text-[10px] text-slate-400 block font-semibold">EST. DURATION</span>
                  <span className="text-xs font-bold text-slate-700">30 Minutes</span>
                </div>
              </div>
              
              <div className="min-h-[550px] relative">
                <iframe 
                  src="https://calendly.com/araujocleaning-servicesinfo/30min" 
                  className="w-full h-[550px] border-none"
                  title="Secure Your Calendar Booking"
                />
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}
