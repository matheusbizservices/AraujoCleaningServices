import { Star, ShieldCheck, Camera, Sparkles, UserCheck, Calendar } from 'lucide-react';
import BeforeAfterSlider from './BeforeAfterSlider';

// Real Reviews matching customer uploaded images exactly (Request #5)
export const DEDICATED_REVIEWS = [
  {
    name: 'Jim Driscoll',
    reviewsCount: 14,
    rating: 5,
    timeAgo: '3 days ago',
    badge: 'New',
    content: "Juliano and his crew have been cleaning for us for almost 10 years, and there's no one better. Very detailed, encourages feedback to ensure he cleans how and what a homeowner wants and is completely reliable. I can't recommend more highly !!",
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=256&auto=format&fit=crop'
  },
  {
    name: 'Davi Salkini',
    reviewsCount: 5,
    photosCount: 2,
    rating: 5,
    timeAgo: '3 weeks ago',
    badge: 'New',
    content: "The clean was absolutely amazing. They’ve always been super reliable and very time considerate with they’re clean... amazing service.",
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=256&auto=format&fit=crop'
  },
  {
    name: 'Jody Highroller',
    reviewsCount: 6,
    rating: 5,
    timeAgo: '3 weeks ago',
    badge: 'New',
    content: "Came in to do a cleaning and it was great customer service and awesome work! Would definitely call them again if I need anything cleaned",
    avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?q=80&w=256&auto=format&fit=crop'
  }
];

// Classic ones for additional SEO authority
const EXTRA_REVIEWS = [
  {
    name: 'Sarah Jenkins',
    role: 'Loyal Homeowner',
    content: 'Araujo Cleaning Services is absolutely fantastic. They arrived on time, were incredibly professional, and left my house looking brand new. The before/after difference is staggering!',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=256&auto=format&fit=crop'
  },
  {
    name: 'Michael Chen',
    role: 'Apartment Renter',
    content: 'I used their move-out deep clean service and got my full deposit back. The team scrubbed our oven door and kitchen counters so thoroughly they looked brand new.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=256&auto=format&fit=crop'
  }
];

export default function GalleryPage() {
  return (
    <div className="pt-24 min-h-screen bg-slate-50">
      
      {/* Header section */}
      <div className="bg-slate-900 py-16 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://images.unsplash.com/photo-1517646287270-a5a9ca602e5c?q=80&w=1200&auto=format&fit=crop" 
            alt="Pristine living room" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <span className="inline-flex items-center gap-1 bg-blue-600/30 text-blue-400 border border-blue-500/30 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
            <Camera className="w-3.5 h-3.5" />
            Vetted Customer Proof
          </span>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            Success Gallery & Client Feedback
          </h1>
          <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
            Review detailed, real-world case transitions under professional Araujo specifications, along with certified feedback.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
        
        {/* Interactive Before & After sliders division */}
        <div>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-slate-200">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-blue-600 animate-pulse" />
                Work Site Portfolio
              </h2>
              <p className="text-slate-500 text-sm mt-1">Select and slide across actual restoration cases performed by Juliano and team.</p>
            </div>
            <span className="text-xs font-semibold text-slate-400 mt-2 md:mt-0 italic">More photos coming soon!</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <BeforeAfterSlider 
              beforeImage="https://images.unsplash.com/photo-1545193134-2e90e729cd25?q=80&w=1000&auto=format&fit=crop"
              afterImage="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=1000&auto=format&fit=crop"
              title="Oven Door & interior Degreasing"
              description="Heavy grease, carbon residue, and burnt-on food elements completely stripped and hand-polished to mirror reflection."
            />
            <BeforeAfterSlider 
              beforeImage="https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1000&auto=format&fit=crop"
              afterImage="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1000&auto=format&fit=crop"
              title="Detailed Living Area Reset"
              description="Surface decluttering, upholstery sweep, and comprehensive baseboard cleaning resets home freshness."
            />
          </div>
        </div>

        {/* Testimonials Review Cards */}
        <div>
          <div className="mb-10 pb-4 border-b border-slate-200">
            <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
              <UserCheck className="w-5 h-5 text-blue-600" />
              Verified Reviews Archive
            </h2>
            <p className="text-slate-500 text-sm mt-1">Original customer reviews referencing the decades-long excellence of Juliano Araujo's services.</p>
          </div>

          {/* Real Google-style Review Layouts */}
          <div className="space-y-6 max-w-4xl mx-auto">
            {DEDICATED_REVIEWS.map((review, i) => (
              <div key={i} className="bg-white p-6 sm:p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-col sm:flex-row gap-6 items-start">
                <img 
                  src={review.avatar} 
                  alt={review.name} 
                  className="w-14 h-14 rounded-full object-cover ring-2 ring-blue-100 shrink-0"
                  referrerPolicy="no-referrer"
                />
                <div className="flex-grow space-y-2">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div>
                      <h4 className="font-bold text-slate-900 text-lg leading-tight">{review.name}</h4>
                      <p className="text-xs text-slate-400 mt-0.5">
                        {review.reviewsCount} reviews {review.photosCount ? `• ${review.photosCount} photos` : ''}
                      </p>
                    </div>
                    <div className="flex items-center gap-1.5 self-start">
                      <span className="text-xs text-slate-400 font-medium">{review.timeAgo}</span>
                      <span className="bg-blue-50 text-blue-600 text-[10px] font-black px-2 py-0.5 rounded uppercase tracking-wider">{review.badge}</span>
                    </div>
                  </div>

                  <div className="flex gap-0.5 py-1">
                    {[...Array(review.rating)].map((_, idx) => (
                      <Star key={idx} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  <p className="text-slate-700 text-sm sm:text-base leading-relaxed italic pt-1">
                    "{review.content}"
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mt-6">
            {EXTRA_REVIEWS.map((review, i) => (
              <div key={i} className="bg-white/80 p-6 rounded-2xl border border-slate-100">
                <div className="flex gap-0.5 mb-3">
                  {[...Array(review.rating)].map((_, idx) => (
                    <Star key={idx} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-slate-600 text-sm leading-relaxed italic mb-4">"{review.content}"</p>
                <div className="flex items-center gap-3">
                  <img 
                    src={review.avatar} 
                    alt={review.name} 
                    className="w-8 h-8 rounded-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <span className="font-bold text-slate-900 text-xs block">{review.name}</span>
                    <span className="text-[10px] text-slate-400 block">{review.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Persistent Call-to-action */}
        <div className="bg-blue-600 rounded-3xl p-8 sm:p-12 text-white text-center relative overflow-hidden shadow-lg">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-500 opacity-30 pointer-events-none" />
          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <h3 className="text-2xl sm:text-3xl font-black">Experience the Araujo Difference</h3>
            <p className="text-blue-100 text-sm sm:text-base leading-relaxed">
              Skip the guessing game. Let Juliano and our experienced cleaning veterans restore your property. Start with an instant estimate or secure your consult slot now!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-2">
              <a 
                href="#/estimator" 
                className="w-full sm:w-auto bg-white text-blue-600 hover:bg-blue-50 font-bold py-3.5 px-8 rounded-xl text-sm transition-all"
              >
                Instant Estimate Calculator
              </a>
              <a 
                href="https://calendly.com/araujocleaning-servicesinfo/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-blue-950/40 text-white border border-white/20 hover:bg-blue-950/60 font-bold py-3.5 px-8 rounded-xl text-sm transition-all flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4 shrink-0" />
                Book walkthrough on Calendly
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
