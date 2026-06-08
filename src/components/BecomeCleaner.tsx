import { Heart, DollarSign, Calendar, Smile, ShieldCheck, ArrowUpRight } from 'lucide-react';

export default function BecomeCleaner() {
  const benefits = [
    {
      icon: DollarSign,
      title: 'Competitive Earnings',
      desc: 'Earn great hourly contract rates plus keep 100% of client tips.'
    },
    {
      icon: Calendar,
      title: 'Flexible Schedules',
      desc: 'Set your own hours. Work full-time, part-time, or only weekends.'
    },
    {
      icon: Smile,
      title: 'Friendly Operations',
      desc: 'Work with Juliano and a supportive local crew that treats you like family.'
    },
    {
      icon: ShieldCheck,
      title: 'Supplies & Coverage',
      desc: 'State-of-the-art cleaning equipment and premium materials are provided.'
    }
  ];

  return (
    <section id="become-cleaner-section" className="py-24 bg-gradient-to-b from-blue-50/50 to-white overflow-hidden border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Core Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Copy (Left Side) */}
          <div className="lg:col-span-6 space-y-6 md:space-y-8 text-left">
            <div className="inline-flex items-center gap-1.5 bg-blue-100/80 text-blue-700 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
              <Heart className="w-3.5 h-3.5 fill-blue-600 text-blue-600" />
              We Are Hiring Professional Cleaners
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              Earn Well. <br className="hidden sm:inline" />
              Work on Your Schedule. <br />
              <span className="text-blue-600">Join the Araujo Crew!</span>
            </h2>
            
            <p className="text-sm sm:text-base text-slate-600 max-w-xl leading-relaxed font-medium">
              Are you meticulous, honest, and dedicated to delivering pristine spaces? Araujo Cleaning Services pays top-tier contractor rates and provides flexible scheduling. Work directly under supportive owners.
            </p>

            {/* Mobile optimized interactive bullet points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              {benefits.map((benefit, idx) => {
                const Icon = benefit.icon;
                return (
                  <div key={idx} className="flex gap-3.5 items-start bg-slate-50 p-4 rounded-2xl border border-slate-100 shadow-xs">
                    <div className="p-2 bg-blue-600 text-white rounded-xl shrink-0 font-bold">
                      <Icon className="w-4.5 h-4.5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm">{benefit.title}</h4>
                      <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">{benefit.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Call-to-Action Card Block (Right Side) */}
          <div className="lg:col-span-6">
            <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-lg border border-slate-200/60 relative overflow-hidden flex flex-col justify-between">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full blur-2xl opacity-70 pointer-events-none" />
              
              <div className="relative z-10 space-y-6">
                <span className="text-[10px] uppercase font-black tracking-widest text-[#10b981] bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-100">
                  Easy Online Application
                </span>
                
                <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                  Start Your Cleaning Career Today
                </h3>
                
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  The application process is quick and simple! Complete our brief Google Forms questionnaire, and our hiring coordinator will review your application details in 24 to 48 hours.
                </p>

                {/* Specific local requirements block on mobile */}
                <div className="bg-slate-50 border border-slate-100 p-4 rounded-2xl text-xs text-slate-600 space-y-3">
                  <div className="font-bold text-slate-800 uppercase tracking-wider text-[10px]">Crew Requirements:</div>
                  <ul className="space-y-2 list-disc list-inside text-slate-600">
                    <li>Must be reliable and highly authorized to work inside MA</li>
                    <li>Sufficient access to clean transport or metro line transit</li>
                    <li>Attention to detail and customer care priority</li>
                  </ul>
                </div>

                <div className="pt-4">
                  <a 
                    id="apply-form-button"
                    href="https://docs.google.com/forms/d/e/1FAIpQLSdmm8eMFE-Vyebfr9pbSSyj2oFL54JAeu_u_0mhoYgUKX3k4g/viewform"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-[#10b981] hover:bg-emerald-600 text-white font-bold py-4 px-6 rounded-2xl transition-all flex items-center justify-center gap-2 text-sm shadow-md hover:shadow-lg focus:outline-none cursor-pointer min-h-[48px]"
                  >
                    Apply Now on Google Forms
                    <ArrowUpRight className="w-4 h-4 shrink-0" />
                  </a>
                </div>

                <p className="text-center text-[11px] text-slate-400 font-medium">
                  We are an equal opportunity contractor. Your information is 100% secure.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
