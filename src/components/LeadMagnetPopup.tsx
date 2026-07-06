import { useState, useEffect, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Mail, User, X, Printer, CheckCircle2 } from 'lucide-react';

const CHECKLIST_ITEMS = [
  'Dust all surfaces including shelves, furniture',
  'Clean mirrors and glass surfaces using a glass cleaner',
  'Vacuum carpets and area rugs',
  'Sweep and mop hard floors',
  'Clean and disinfect toilets, sinks, and showers',
  'Scrub and disinfect kitchen countertops and sinks',
  'Clean kitchen appliances such as stove, oven, fridge',
  'Wipe down cabinets and drawers in kitchen and bathroom',
  'Clean and disinfect light switches and doorknobs',
  'Wash and change bed linens',
  'Dust blinds and window sills',
  'Clean windows inside and out',
  'Clean and disinfect garbage cans',
  'Vacuum furniture and upholstery',
  'Clean and disinfect pet areas',
  'Wipe down baseboards and molding',
  'Dust ceiling fans and light fixtures',
  'Clean and disinfect computer keyboards and screens',
  'Organize and declutter living spaces',
  'Sweep and tidy outdoor areas such as porches and patios',
];

const SUBMITTED_KEY = 'acs_lead_magnet_submitted';
const SNOOZE_KEY = 'acs_lead_magnet_snoozed_until';
const SNOOZE_MS = 1000 * 60 * 60 * 24 * 7;

export default function LeadMagnetPopup() {
  const [visible, setVisible] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (localStorage.getItem(SUBMITTED_KEY)) return;
    const snoozedUntil = Number(localStorage.getItem(SNOOZE_KEY) || 0);
    if (Date.now() < snoozedUntil) return;

    const timer = setTimeout(() => setVisible(true), 5000);

    const handleExitIntent = (e: MouseEvent) => {
      if (e.clientY <= 0) setVisible(true);
    };
    document.addEventListener('mouseleave', handleExitIntent);

    return () => {
      clearTimeout(timer);
      document.removeEventListener('mouseleave', handleExitIntent);
    };
  }, []);

  const dismiss = () => {
    localStorage.setItem(SNOOZE_KEY, String(Date.now() + SNOOZE_MS));
    setVisible(false);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;
    setIsSubmitting(true);

    const submittedAt = new Date().toLocaleString();

    try {
      await fetch('/api/notify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          text: `🧹 *New Checklist Lead*\n*Name:* ${name}\n*Email:* ${email}\n*Submitted:* ${submittedAt}`,
        }),
      });
    } catch (err) {
      console.error('Lead magnet webhook dispatch failure:', err);
    }

    localStorage.setItem(SUBMITTED_KEY, '1');
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={dismiss}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-slate-900 rounded-3xl shadow-2xl border border-slate-800 w-full max-w-md relative overflow-hidden max-h-[90vh] flex flex-col"
          >
            <button
              onClick={dismiss}
              className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors z-10"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            {!submitted ? (
              <div className="p-8">
                <div className="flex items-center gap-2 mb-4 bg-blue-900/40 text-blue-300 border border-blue-800/60 px-3 py-1.5 rounded-xl text-xs font-semibold w-fit">
                  <Sparkles className="w-4 h-4" />
                  FREE DOWNLOAD
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Get Your Free Home Cleaning Checklist!</h3>
                <p className="text-slate-400 text-sm mb-6">20 tasks professional cleaners use every visit — yours free.</p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Name</label>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-3 flex items-center text-slate-500">
                        <User className="w-4 h-4" />
                      </span>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Your name"
                        className="w-full bg-slate-800 border border-slate-700 rounded-xl py-3 pl-10 pr-4 text-sm font-medium text-white focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-transparent placeholder-slate-500 transition-all"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Email</label>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-3 flex items-center text-slate-500">
                        <Mail className="w-4 h-4" />
                      </span>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@email.com"
                        className="w-full bg-slate-800 border border-slate-700 rounded-xl py-3 pl-10 pr-4 text-sm font-medium text-white focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-transparent placeholder-slate-500 transition-all"
                      />
                    </div>
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-3.5 px-6 rounded-xl transition-all text-sm shadow-md hover:shadow-lg disabled:opacity-70"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Me the Checklist'}
                  </button>
                </form>
              </div>
            ) : (
              <div className="flex flex-col overflow-hidden">
                <div className="p-8 pb-4 shrink-0">
                  <div className="bg-emerald-50 text-emerald-700 border border-emerald-100 px-3 py-1.5 rounded-full text-xs font-bold w-fit mb-4">
                    ✓ CHECKLIST UNLOCKED
                  </div>
                  <h3 className="text-xl font-bold text-white">Your Free Home Cleaning Checklist</h3>
                </div>
                <div className="px-8 overflow-y-auto flex-1 space-y-2.5 pb-4">
                  {CHECKLIST_ITEMS.map((item, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <div className="p-8 pt-4 border-t border-slate-800 shrink-0">
                  <button
                    onClick={() => window.print()}
                    className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-3.5 px-6 rounded-xl transition-all flex items-center justify-center gap-2 text-sm shadow-md hover:shadow-lg"
                  >
                    <Printer className="w-4 h-4" />
                    Save as PDF / Print
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
