import { CheckCircle2, Sparkles, Home, Briefcase } from 'lucide-react';

const services = [
  {
    title: 'Standard Cleaning',
    description: 'Perfect for keeping your home consistently clean and fresh.',
    icon: Home,
    features: [
      'Dusting all surfaces',
      'Vacuuming and mopping floors',
      'Cleaning bathrooms (toilets, showers, sinks)',
      'Wiping down kitchen counters and appliances',
      'Emptying trash bins',
      'Making beds'
    ]
  },
  {
    title: 'Deep Cleaning',
    description: 'A thorough top-to-bottom clean for a pristine home.',
    icon: Sparkles,
    features: [
      'Everything in Standard Cleaning',
      'Baseboards and door frames',
      'Inside window sills',
      'Detailed dusting of blinds and ceiling fans',
      'Scrubbing grout lines',
      'Wiping down cabinet fronts'
    ]
  },
  {
    title: 'Move In/Out Cleaning',
    description: 'Ensure the home is spotless for the next residents.',
    icon: Briefcase,
    features: [
      'Everything in Deep Cleaning',
      'Inside all cabinets and drawers',
      'Inside the refrigerator',
      'Inside the oven',
      'Spot cleaning walls',
      'Removing minor scuff marks'
    ]
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Our Cleaning Services
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Choose the level of clean that fits your needs. We bring all our own supplies and equipment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index}
                className="flex flex-col bg-white rounded-3xl p-8 shadow-sm border border-slate-100 hover:shadow-md transition-shadow relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                  <Icon className="w-32 h-32 text-blue-600" />
                </div>
                
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7 text-blue-600" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">{service.title}</h3>
                  <p className="text-slate-600 mb-8 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-4 mb-8 flex-grow">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                        <span className="text-slate-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
