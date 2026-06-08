import { Star, CheckCircle, ArrowRight } from 'lucide-react';
import { DEDICATED_REVIEWS } from './GalleryPage';

export default function Testimonials() {
  // Show Jim & Davi reviews as featured high-proof social social evidence on main page
  const featuredReviews = DEDICATED_REVIEWS.slice(0, 2);

  return (
    <section id="testimonials" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-x-0 bottom-0 top-1/2 bg-slate-50 opacity-40 -z-10" />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
              Real Client Feedback
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Cleanings Loved by Homes in Your Area
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl">
              Juliano Araujo and his cleaning crew have spent nearly a decade serving local clients with meticulous care. See our genuine feedback!
            </p>
          </div>
          
          <div className="lg:col-span-5 lg:text-right">
            <a 
              href="#/gallery" 
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold py-3.5 px-6 rounded-xl text-sm transition-all shadow-sm shadow-blue-200"
            >
              View Full Gallery & Before/Afters
              <ArrowRight className="w-4 h-4 shrink-0" />
            </a>
          </div>
        </div>

        {/* Featured reviews layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {featuredReviews.map((review, index) => (
            <div 
              key={index} 
              className="bg-slate-50 border border-slate-100 p-6 sm:p-8 rounded-3xl flex flex-col justify-between hover:shadow-xs transition-shadow relative"
            >
              <div className="space-y-4">
                <div className="flex gap-0.5">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-slate-700 text-base leading-relaxed italic">
                  "{review.content}"
                </p>
              </div>
              
              <div className="flex items-center gap-4 mt-8 pt-4 border-t border-slate-200/50">
                <img 
                  src={review.avatar} 
                  alt={review.name} 
                  className="w-11 h-11 rounded-full object-cover ring-2 ring-blue-100"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="font-bold text-slate-900 text-sm leading-tight flex items-center gap-1.5">
                    {review.name}
                    <CheckCircle className="w-3.5 h-3.5 text-blue-600 fill-blue-50" />
                  </h4>
                  <p className="text-xs text-slate-400 mt-0.5 font-medium">Verified Customer Review</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* High-converting inline trust indicator */}
        <div className="mt-16 text-center max-w-xl mx-auto bg-blue-50/50 border border-blue-100 rounded-2xl p-5 text-sm text-blue-700 font-semibold flex items-center justify-center gap-2.5">
          ⭐ Verified 5.0 Average Rating Over 10 Years of Professional Cleaning!
        </div>

      </div>
    </section>
  );
}
