import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const posts = [
  {
    slug: 'event-container-festival',
    tag: 'REFERENZ',
    title: 'Mobile Bar für Streetfood-Festival',
    excerpt: 'Ein voll ausgestatteter Bar-Container auf Anhänger – gebaut für den Dauereinsatz auf Deutschlands größten Streetfood-Festivals.',
    image: '/csm_Gruenbeck_Roadshow_Deutschland_02_7a30455b9f.jpg',
    date: '2025-01-15',
  },
  {
    slug: 'office-container-startup',
    tag: 'REFERENZ',
    title: 'Office-Container für Tech-Startup',
    excerpt: 'Klimatisiertes Büro mit Küche und WC – ein kompletter Arbeitsplatz auf 20m², geliefert und einsatzbereit in nur 8 Wochen.',
    image: '/Prefabricated-Office-Container.webp',
    date: '2024-11-20',
  },
  {
    slug: 'warum-container-statt-festbau',
    tag: 'RATGEBER',
    title: 'Container vs. Festbau: Was lohnt sich mehr?',
    excerpt: 'Flexibilität, Kosten, Genehmigungen – wir vergleichen modulare Container-Lösungen mit klassischem Bau und zeigen, wann sich was lohnt.',
    image: '/pro-spacecube-nudie-lg01.webp',
    date: '2024-10-05',
  },
  {
    slug: 'container-genehmigungen-deutschland',
    tag: 'RATGEBER',
    title: 'Container-Genehmigungen in Deutschland',
    excerpt: 'Welche Genehmigungen braucht man für einen Container? Von Straßenzulassung bis Baugenehmigung – alles was du wissen musst.',
    image: '/11.jpg',
    date: '2024-09-12',
  },
  {
    slug: 'nachhaltigkeit-container-bau',
    tag: 'EINBLICK',
    title: 'Nachhaltigkeit im Container-Bau',
    excerpt: 'Wie wir durch Upcycling, regionale Fertigung und langlebige Materialien unseren ökologischen Fußabdruck minimieren.',
    image: '/Shipping-container-bar-landing.webp',
    date: '2024-08-01',
  },
];

const tags = ['Alle', 'Referenz', 'Ratgeber', 'Einblick'];

const Blog: React.FC = () => {
  const [activeTag, setActiveTag] = useState('Alle');

  const filteredPosts = activeTag === 'Alle'
    ? posts
    : posts.filter(p => p.tag === activeTag.toUpperCase());

  return (
    <div className="pt-24 pb-16 md:pt-32 md:pb-24 bg-[#0F0F0F] min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <h2 className="font-mono text-[#D97706] text-xs font-bold uppercase tracking-[0.3em] mb-4">[ BLOG & REFERENZEN ]</h2>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-display font-black uppercase mb-6 leading-tight">
            Projekte, Wissen<br />& Einblicke
          </h1>
          <p className="font-mono text-[#9CA3AF] max-w-2xl text-lg leading-relaxed">
            Referenzen aus unserer Werkstatt, Ratgeber rund um Container und Einblicke in unsere Arbeitsweise.
          </p>
        </div>

        {/* Filter Tags */}
        <div className="flex gap-3 mb-12 flex-wrap">
          {tags.map(tag => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag)}
              className={`px-4 py-2 font-mono text-xs uppercase tracking-widest transition-all border ${
                activeTag === tag
                  ? 'bg-[#D97706] border-[#D97706] text-white'
                  : 'border-white/10 text-[#9CA3AF] hover:border-[#D97706]/50 hover:text-white'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post) => (
            <Link key={post.slug} to={`/blog/${post.slug}`}>
              <article className="group border border-white/10 hover:border-[#D97706]/50 transition-all overflow-hidden cursor-pointer h-full">
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#D97706] px-3 py-1 font-mono text-[10px] text-white uppercase tracking-widest">
                      {post.tag}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <time className="font-mono text-[10px] text-[#9CA3AF] uppercase tracking-widest">
                    {new Date(post.date).toLocaleDateString('de-DE', { day: '2-digit', month: 'long', year: 'numeric' })}
                  </time>
                  <h3 className="font-display font-black uppercase text-lg mt-2 mb-3 tracking-tight group-hover:text-[#D97706] transition-colors">
                    {post.title}
                  </h3>
                  <p className="font-mono text-[#9CA3AF] text-xs leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-2 text-[#D97706] font-mono text-xs uppercase tracking-widest group-hover:gap-3 transition-all">
                    Weiterlesen
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
