import { useState, useEffect, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Home, Sparkles, Droplets, Clock, CheckCircle2, 
  ChevronRight, Info, Mail, Phone, User, Calendar, ShieldCheck, HelpCircle
} from 'lucide-react';

// Pricing formula variables displayed openly for full transparency!
export const PRICING_METRICS = {
  base: 40, // Minimum base fee
  bedroom: 10, // cost per bedroom
  bathroom: 15, // cost per bathroom
  sqft: 0.03, // 3 cents per sqft
  cleaningType: {
    standard: 1.0, // multiplier
    deep: 1.5,
    moveInOut: 1.8,
  },
  extras: {
    fridge: 30,
    oven: 30,
    windows: 40,
    pets: 20,
    laundry: 15,
  }
};

export default function PriceEstimator() {
  const [bedrooms, setBedrooms] = useState(1);
  const [bathrooms, setBathrooms] = useState(1);
  const [sqft, setSqft] = useState(1000);
  const [cleaningType, setCleaningType] = useState<keyof typeof PRICING_METRICS.cleaningType>('standard');
  const [extras, setExtras] = useState<Record<string, boolean>>({
    fridge: false,
    oven: false,
    windows: false,
    pets: false,
    laundry: false,
  });
  
  // Lead info
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [quoteId, setQuoteId] = useState('');
  const [total, setTotal] = useState(0);

  // Vercel & Ad campaign integrations
  const [countdown, setCountdown] = useState(-1);

  useEffect(() => {
    // Calculate total pricing dynamically using transparent formulas
    let newTotal = PRICING_METRICS.base;
    newTotal += bedrooms * PRICING_METRICS.bedroom;
    newTotal += bathrooms * PRICING_METRICS.bathroom;
    newTotal += sqft * PRICING_METRICS.sqft;
    
    // Multipliers
    newTotal *= PRICING_METRICS.cleaningType[cleaningType];
    
    // Add-on extras
    Object.entries(extras).forEach(([key, isSelected]) => {
      if (isSelected) {
        newTotal += PRICING_METRICS.extras[key as keyof typeof PRICING_METRICS.extras];
      }
    });

    setTotal(Math.round(newTotal));
  }, [bedrooms, bathrooms, sqft, cleaningType, extras]);

  // Automated Calendly Forwarder
  useEffect(() => {
    if (countdown === 0) {
      window.location.href = 'https://calendly.com/araujocleaning-servicesinfo/30min';
    }
    if (countdown <= 0) return;

    const timer = setTimeout(() => {
      setCountdown(prev => prev - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [countdown]);

  const toggleExtra = (key: string) => {
    setExtras(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const handleLeadSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!name || !email || !phone) return;

    setIsSubmitting(true);
    const randomId = 'AC-' + Math.floor(100000 + Math.random() * 900000);
    setQuoteId(randomId);

    const activeExtras = Object.entries(extras)
      .filter(([_, v]) => v)
      .map(([k]) => k)
      .join(', ');

    // Post to Zapier Webhook URL for CRM automation
    try {
      await fetch('https://hooks.zapier.com/hooks/catch/17469172/4323t7g/', {
        method: 'POST',
        mode: 'no-cors', // bypass CORS protections for simple webhooks (Zapier, Discord, Make.com)
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          event: "New Cleaner Estimate Calculated",
          quoteId: randomId,
          name,
          email,
          phone,
          estimatedTotal: total,
          property: {
            bedrooms,
            bathrooms,
            sqft,
            type: cleaningType,
            addons: activeExtras || 'None'
          }
        })
      });
    } catch (err) {
      console.error('Webhook payload dispatch failure:', err);
    }

    // Direct automated CRM transition
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
      setCountdown(18); // Initiate automatic forward countdown
    }, 1200);
  };

  return (
    <section id="estimator" className="py-24 bg-gradient-to-b from-slate-50 to-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
            Contractor Rate Calculator
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mt-3">
            Instant Estimate Builder
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Configure your property details below. Pricing totals remain confidential until you request booking validation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main config choices (Left) */}
          <div className="lg:col-span-8 space-y-8">
            <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-sm border border-slate-200/60">
              <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <Home className="w-5 h-5 text-blue-600" />
                Step 1: Property Layout
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-sm font-semibold text-slate-700">
                      Bedrooms Count
                    </label>
                    <span className="text-blue-600 font-bold bg-blue-50 px-3 py-0.5 rounded-full text-xs">
                      {bedrooms} {bedrooms === 1 ? 'Bed' : 'Beds'}
                    </span>
                  </div>
                  <input 
                    type="range" 
                    min="1" max="8" 
                    value={bedrooms} 
                    onChange={(e) => setBedrooms(parseInt(e.target.value))}
                    className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-blue-600 focus:outline-none"
                  />
                  <div className="flex justify-between text-xs text-slate-400 mt-2 font-mono">
                    <span>1</span>
                    <span>4</span>
                    <span>8+</span>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-sm font-semibold text-slate-700">
                      Bathrooms Count
                    </label>
                    <span className="text-blue-600 font-bold bg-blue-50 px-3 py-0.5 rounded-full text-xs">
                      {bathrooms} {bathrooms === 1 ? 'Bath' : 'Baths'}
                    </span>
                  </div>
                  <input 
                    type="range" 
                    min="1" max="6" step="0.5"
                    value={bathrooms} 
                    onChange={(e) => setBathrooms(parseFloat(e.target.value))}
                    className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-blue-600 focus:outline-none"
                  />
                  <div className="flex justify-between text-xs text-slate-400 mt-2 font-mono">
                    <span>1</span>
                    <span>3</span>
                    <span>6+</span>
                  </div>
                </div>

                <div className="md:col-span-2">
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-sm font-semibold text-slate-700">
                      Home Area (Square Footage)
                    </label>
                    <span className="text-blue-600 font-bold bg-blue-50 px-3 py-0.5 rounded-full text-xs font-mono">
                      {sqft.toLocaleString()} sqft
                    </span>
                  </div>
                  <div className="flex items-center gap-4">
                    <input 
                      type="range" 
                      min="400" max="6000" step="100"
                      value={sqft} 
                      onChange={(e) => setSqft(parseInt(e.target.value))}
                      className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-blue-600 focus:outline-none"
                    />
                  </div>
                  <div className="flex justify-between text-xs text-slate-400 mt-2 font-mono">
                    <span>400 sqft</span>
                    <span>3,000 sqft</span>
                    <span>6,000+ sqft</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Custom Cleaning Mode Selection */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-sm border border-slate-200/60">
              <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-blue-600" />
                Step 2: Depth of Clean
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { id: 'standard', label: 'Standard Clean', desc: 'Maintenance dusting, vacuuming & sweep.' },
                  { id: 'deep', label: 'Deep Clean', desc: 'Adds baseboards, doors, detailed crevices.' },
                  { id: 'moveInOut', label: 'Move In/Out', desc: 'Empty house thorough cleaning.' }
                ].map((type) => (
                  <button
                    key={type.id}
                    type="button"
                    onClick={() => setCleaningType(type.id as any)}
                    className={`p-5 rounded-2xl border-2 text-left transition-all relative overflow-hidden ${
                      cleaningType === type.id 
                        ? 'border-blue-600 bg-blue-50/50 shadow-sm' 
                        : 'border-slate-200 hover:border-blue-200'
                    }`}
                  >
                    <div className="font-bold text-slate-900 text-base">{type.label}</div>
                    <div className="text-xs text-slate-500 mt-1 leading-relaxed">{type.desc}</div>
                    {cleaningType === type.id && (
                      <span className="absolute top-3 right-3 bg-blue-600 text-white p-0.5 rounded-full">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Upgrades panel */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-sm border border-slate-200/60">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                  <Droplets className="w-5 h-5 text-blue-600" />
                  Step 3: Add-on Upgrades
                </h3>
                <span className="text-xs font-semibold text-slate-400">Optional items</span>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { id: 'fridge', label: 'Inside Refrigerator', highlight: 'Clean drawers/shelf' },
                  { id: 'oven', label: 'Inside Oven', highlight: 'Grease baked restoration' },
                  { id: 'windows', label: 'Interior Window Sills', highlight: 'Track vacuum & polish' },
                  { id: 'pets', label: 'Heavy Pet Hair Care', highlight: 'Specialized brush care' },
                  { id: 'laundry', label: 'Wash & Fold Clothes', highlight: '1 full load loadout' }
                ].map((extra) => (
                  <button
                    key={extra.id}
                    type="button"
                    onClick={() => toggleExtra(extra.id)}
                    className={`p-4 rounded-xl border text-left transition-all flex flex-col justify-between ${
                      extras[extra.id]
                        ? 'border-blue-600 bg-blue-50/30 ring-1 ring-blue-600'
                        : 'border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <div>
                      <span className="font-semibold text-slate-900 text-sm block">{extra.label}</span>
                      <span className="text-xs text-slate-400 block mt-1 leading-normal">{extra.highlight}</span>
                    </div>
                    <div className="mt-3 flex items-center justify-between w-full">
                      <span className={`text-xs font-bold ${extras[extra.id] ? 'text-blue-600' : 'text-slate-500'}`}>
                        {extras[extra.id] ? 'Selected Upgrade' : 'Add Upgrade'}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Pricing Variables Blueprint (Request #4: Specifying formula metrics) */}
            <div className="bg-slate-900 text-slate-300 p-6 sm:p-8 rounded-3xl shadow-md border border-slate-800">
              <div className="flex items-center gap-2.5 mb-4">
                <HelpCircle className="w-5 h-5 text-blue-400 shrink-0" />
                <h4 className="text-base font-bold text-white">How This Estimate Is Prepared (Our Rate Formula)</h4>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed mb-6">
                Araujo Cleaning Services uses a completely modular contract pricing model. You can suggest modifications to any of the following parameters, and we will reprogram your customized rates!
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 text-xs border-t border-slate-800 pt-6">
                <div>
                  <span className="text-slate-500 block mb-1 uppercase tracking-wider font-semibold">Home Minimum</span>
                  <span className="text-white font-mono text-sm font-semibold">${PRICING_METRICS.base} flat</span>
                </div>
                <div>
                  <span className="text-slate-500 block mb-1 uppercase tracking-wider font-semibold">Bedroom Area</span>
                  <span className="text-white font-mono text-sm font-semibold">${PRICING_METRICS.bedroom} each</span>
                </div>
                <div>
                  <span className="text-slate-500 block mb-1 uppercase tracking-wider font-semibold">Bathroom Prep</span>
                  <span className="text-white font-mono text-sm font-semibold">${PRICING_METRICS.bathroom} each</span>
                </div>
                <div>
                  <span className="text-slate-500 block mb-1 uppercase tracking-wider font-semibold">Square Footage</span>
                  <span className="text-white font-mono text-sm font-semibold">${PRICING_METRICS.sqft} per sqft</span>
                </div>
                <div>
                  <span className="text-slate-500 block mb-1 uppercase tracking-wider font-semibold">Service Scaling</span>
                  <span className="text-white font-mono text-xs block leading-tight">Deep (1.5x) / Move-Out (1.8x)</span>
                </div>
                <div>
                  <span className="text-slate-500 block mb-1 uppercase tracking-wider font-semibold">Add-Ons Price</span>
                  <span className="text-white font-mono text-xs block leading-tight">Fridge (${PRICING_METRICS.extras.fridge}) / Oven (${PRICING_METRICS.extras.oven})</span>
                </div>
              </div>
            </div>
          </div>

          {/* Locked Pricing Funnel Sidebar (Right) */}
          <div className="lg:col-span-4 lg:sticky lg:top-24">
            <AnimatePresence mode="wait">
              {!formSubmitted ? (
                <motion.div 
                  key="calculator-lock"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="bg-slate-900 rounded-3xl p-6 sm:p-8 text-white shadow-xl border border-slate-800"
                >
                  <div className="flex items-center gap-2 mb-4 bg-blue-900/40 text-blue-300 border border-blue-800/60 px-3 py-1.5 rounded-xl text-xs font-semibold w-fit">
                    <ShieldCheck className="w-4 h-4 shrink-0 animate-pulse" />
                    PRICING INACTIVE
                  </div>
                  
                  <h3 className="text-2xl font-bold tracking-tight text-white mb-2">Estimate Validation</h3>
                  <p className="text-slate-400 text-xs leading-relaxed mb-6">
                    Enter your contact information below to calculate your estimated rate and coordinate booking validation.
                  </p>

                  <form onSubmit={handleLeadSubmit} className="space-y-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">Your Full Name</label>
                      <div className="relative">
                        <span className="absolute inset-y-0 left-3 flex items-center text-slate-500">
                          <User className="w-4 h-4" />
                        </span>
                        <input
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Juliano Araujo"
                          className="w-full bg-slate-800 border border-slate-700 rounded-xl py-3 pl-10 pr-4 text-xs font-medium text-white focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-transparent placeholder-slate-500 transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">Email Address</label>
                      <div className="relative">
                        <span className="absolute inset-y-0 left-3 flex items-center text-slate-500">
                          <Mail className="w-4 h-4" />
                        </span>
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="araujo@cleaning.com"
                          className="w-full bg-slate-800 border border-slate-700 rounded-xl py-3 pl-10 pr-4 text-xs font-medium text-white focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-transparent placeholder-slate-500 transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">Phone Number</label>
                      <div className="relative">
                        <span className="absolute inset-y-0 left-3 flex items-center text-slate-500">
                          <Phone className="w-4 h-4" />
                        </span>
                        <input
                          type="tel"
                          required
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="(555) 019-2834"
                          className="w-full bg-slate-800 border border-slate-700 rounded-xl py-3 pl-10 pr-4 text-xs font-medium text-white focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-transparent placeholder-slate-500 transition-all"
                        />
                      </div>
                    </div>

                    <div className="pt-4">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 px-6 rounded-xl transition-all flex items-center justify-center gap-2 text-sm shadow-md hover:shadow-lg focus:outline-none disabled:opacity-70"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                            Calculating Rates...
                          </>
                        ) : (
                          <>
                            Unlock My Instant Estimate
                            <ChevronRight className="w-4 h-4" />
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                  
                  <div className="mt-4 text-center">
                    <span className="text-[10px] text-slate-500">We respect client privacy. Rates are 100% confidential.</span>
                  </div>
                </motion.div>
              ) : (
                <motion.div 
                  key="calculator-results"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="bg-white rounded-3xl p-6 sm:p-8 text-slate-900 shadow-xl border border-blue-100 flex flex-col"
                >
                  <div className="bg-emerald-50 text-emerald-700 border border-emerald-100 px-3 py-1.5 rounded-full text-xs font-bold w-fit mb-4">
                    ✓ RATE ESTIMATE GENERATED
                  </div>

                  <h3 className="text-2xl font-bold tracking-tight text-slate-900">Custom Cleans Quote</h3>
                  <p className="text-xs text-slate-500 mt-1 mb-6">
                    Quote prepared exclusively for <span className="font-semibold text-slate-800">{name}</span>. Ref ID: <span className="font-mono font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded">{quoteId}</span>
                  </p>

                  <div className="space-y-3.5 mb-6 text-sm border-t border-b border-slate-100 py-6">
                    <div className="flex justify-between text-slate-600 font-medium">
                      <span>{bedrooms} {bedrooms === 1 ? 'Bed' : 'Beds'} / {bathrooms} {bathrooms === 1 ? 'Bath' : 'Baths'}</span>
                      <span className="text-slate-900 font-semibold font-mono">${Math.round(PRICING_METRICS.base + (bedrooms * PRICING_METRICS.bedroom) + (bathrooms * PRICING_METRICS.bathroom))}</span>
                    </div>
                    <div className="flex justify-between text-slate-600 font-medium">
                      <span>Area size adjustment ({sqft} sqft)</span>
                      <span className="text-slate-900 font-semibold font-mono">${Math.round(sqft * PRICING_METRICS.sqft)}</span>
                    </div>
                    <div className="flex justify-between text-slate-600 font-medium">
                      <span className="capitalize">{cleaningType} Cleaning tier</span>
                      <span className="text-slate-900 font-semibold font-mono">
                        {cleaningType === 'standard' ? 'Included' : `${Math.round((PRICING_METRICS.cleaningType[cleaningType] - 1) * 100)}% shift`}
                      </span>
                    </div>

                    {Object.entries(extras).some(([_, v]) => v) && (
                      <div className="border-t border-dashed border-slate-200/80 pt-4 mt-4 bg-slate-50/50 p-3 rounded-2xl">
                        <span className="text-xs font-bold text-slate-400 block mb-2 uppercase tracking-wider">Requested Upgrades:</span>
                        {Object.entries(extras).map(([key, isSelected]) => isSelected && (
                          <div key={key} className="flex justify-between text-slate-600 text-xs mb-1.5 font-medium last:mb-0">
                            <span className="capitalize flex items-center gap-1.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                              {key}
                            </span>
                            <span className="font-semibold font-mono text-slate-900">+${PRICING_METRICS.extras[key as keyof typeof PRICING_METRICS.extras]}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="bg-slate-900 text-white rounded-2xl p-5 mb-6 shadow-sm border border-slate-800">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-400 font-semibold uppercase tracking-wider">Estimated Total</span>
                      <span className="text-3xl font-black font-mono text-white">${total}</span>
                    </div>
                    <p className="text-[11px] text-slate-400 mt-2 leading-relaxed">
                      Please note: This represents an indicative clean rate base. Rates may vary a lot when we go to actually do the estimate because we don't know what the house actually looks like and its actual condition. We must schedule a quick walkthrough to provide the final locked amount.
                    </p>
                  </div>

                  {/* Automated forward banner */}
                  {countdown > 0 && (
                    <div className="mb-4 bg-amber-50 border border-amber-200 p-3 rounded-2xl flex items-center justify-between text-xs text-amber-800">
                      <span className="flex items-center gap-1.5 font-semibold">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-ping"></span>
                        Forwarding to Calendly in {countdown}s to lock in rate...
                      </span>
                      <button 
                        onClick={() => setCountdown(-1)}
                        className="bg-white hover:bg-slate-100 border border-amber-300 text-[10px] font-bold px-2 py-1 rounded-lg transition-all"
                      >
                        Stay Here
                      </button>
                    </div>
                  )}

                  {/* Calendly Booking (Request #3) */}
                  <div className="mt-2 space-y-4">
                    <div className="p-4 bg-yellow-50 border border-yellow-200/80 rounded-2xl text-xs text-yellow-800 leading-relaxed font-medium text-center">
                      ⚠️ <strong className="font-bold">Next Requirement:</strong> To officially lock in your ${total} rate, please select a booking slot below to schedule a quick 30-minute validation and walkthrough!
                    </div>
                    
                    <a 
                      href="https://calendly.com/araujocleaning-servicesinfo/30min"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-4 px-6 rounded-xl transition-all flex items-center justify-center gap-2.5 text-sm shadow cursor-pointer text-center"
                    >
                      <Calendar className="w-4 h-4 shrink-0" />
                      Book Walkthrough on Calendly
                    </a>
                    
                    <button 
                      onClick={() => setFormSubmitted(false)}
                      className="w-full text-center text-xs text-slate-400 hover:text-slate-600 font-semibold py-2 mt-2"
                    >
                      ← Reconfigure Property Details
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
