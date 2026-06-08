import { ArrowRight, Calendar } from 'lucide-react';

const posts = [
  {
    id: 1,
    title: '10 Essential Spring Cleaning Tips for a Spotless Home',
    excerpt: 'Get your home ready for the new season with our comprehensive spring cleaning checklist and expert tips.',
    category: 'Cleaning Guides',
    date: '2026-03-15',
    dateString: 'Mar 15, 2026',
    image: 'https://images.unsplash.com/photo-1584820927498-cafe2c1c969f?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 2,
    title: 'The Benefits of Eco-Friendly Cleaning Products',
    excerpt: 'Discover why switching to green cleaning products is better for your family, pets, and the environment.',
    category: 'Eco-Friendly',
    date: '2026-03-02',
    dateString: 'Mar 02, 2026',
    image: 'https://images.unsplash.com/photo-1585421514738-01798e348b17?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 3,
    title: 'How Often Should You Deep Clean Your Kitchen?',
    excerpt: 'A room-by-room breakdown of when and how to deep clean the most used spaces in your house.',
    category: 'Home Maintenance',
    date: '2026-02-18',
    dateString: 'Feb 18, 2026',
    image: 'https://images.unsplash.com/photo-1556910103-1c02745a872f?q=80&w=2070&auto=format&fit=crop'
  }
];

export default function Blog() {
  // Inject microdata schema dynamically for Google Web crawlers
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Araujo Cleaning Services Official Blog",
    "description": "Expert advice, cleaning hacks, and home maintenance tips from Boston's premium cleaning team.",
    "publisher": {
      "@type": "Organization",
      "name": "Araujo Cleaning Services"
    },
    "blogPost": posts.map(post => ({
      "@type": "BlogPosting",
      "headline": post.title,
      "description": post.excerpt,
      "image": post.image,
      "datePublished": post.date,
      "author": {
        "@type": "Organization",
        "name": "Araujo Cleaning Team"
      }
    }))
  };

  return (
    <section id="blog" className="py-24 bg-slate-50">
      <script type="application/ld+json">
        {JSON.stringify(blogSchema)}
      </script>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Cleaning Tips & Guides
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Expert advice, cleaning hacks, and home maintenance tips from our professional team.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article key={post.id} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-md transition-shadow flex flex-col">
              <div className="w-full h-48 relative overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center rounded-full bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-semibold text-blue-600 shadow-sm">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-2 text-sm text-slate-500 mb-3">
                  <Calendar className="w-4 h-4" />
                  <time dateTime={post.date}>{post.dateString}</time>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 line-clamp-2">
                  {post.title}
                </h3>
                 <p className="text-slate-600 mb-6 line-clamp-3 flex-grow">
                  {post.excerpt}
                </p>
                <div className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-500 transition-colors mt-auto">
                  Read Article
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
