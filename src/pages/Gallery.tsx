import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import SEO from '../../components/SEO';

const Gallery: React.FC = () => {
    const { mode } = useTheme();
    const isDark = mode === 'dark';
    const projects = [
        {
            id: 1,
            slug: 'rooftop-gin-bar',
            title: 'The Rooftop Gin Bar',
            category: 'Event-Container',
            image: '/csm_Gruenbeck_Roadshow_Deutschland_02_7a30455b9f.jpg',
            specs: ['6m x 2m', 'Hydraulik', 'LED-Beleuchtung'],
        },
        {
            id: 2,
            slug: 'mobile-office-unit',
            title: 'Mobile Office Unit',
            category: 'Office-Container',
            image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800',
            specs: ['8m x 2m', 'Klimaanlage', 'Vollausstattung'],
        },
        {
            id: 3,
            slug: 'street-food-trailer',
            title: 'Street Food Trailer',
            category: 'Event-Container',
            image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=800',
            specs: ['4m x 2m', 'Küche', 'SARIS Trailer'],
        },
        {
            id: 4,
            slug: 'pop-up-store',
            title: 'Pop-up Store',
            category: 'Nudie-Container',
            image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800',
            specs: ['3m x 2m', 'Custom Branding', 'Schaufenster'],
        },
        {
            id: 5,
            slug: 'eiswagen-deluxe',
            title: 'Eiswagen Deluxe',
            category: 'Event-Container',
            image: 'https://images.unsplash.com/photo-1501443762994-82bd5dace89a?auto=format&fit=crop&q=80&w=800',
            specs: ['4m x 2m', 'Kühlung', 'Retro-Design'],
        },
        {
            id: 6,
            slug: 'festival-bar',
            title: 'Festival Bar',
            category: 'Anhänger mieten',
            image: 'https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&q=80&w=800',
            specs: ['6m x 2m', 'Zapfanlage', 'Outdoor-Ready'],
        },
    ];

    return (
        <div className="pt-24 pb-16 md:pt-32 md:pb-24 px-6 min-h-screen bg-[#0F0F0F] text-white">
            <SEO
                title="Galerie | Unsere Container-Projekte"
                description="Entdecke unsere realisierten Container-Projekte: Event-Bars, Office-Container, Food-Trucks und Pop-up Stores. Jeder Container erzählt seine eigene Geschichte."
            />
            <div className="max-w-7xl mx-auto">
                {/* Hero */}
                <div className="mb-16">
                    <span className="font-mono text-[#D97706] text-xs font-bold uppercase tracking-[0.3em] mb-4 block">[ GALERIE ]</span>
                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-display font-black uppercase mb-6 leading-tight">Unsere Projekte</h1>
                    <p className="font-mono text-[#9CA3AF] max-w-2xl text-lg leading-relaxed">
                        Jeder Container erzählt seine eigene Geschichte. Hier siehst du eine Auswahl unserer bisherigen Arbeiten – von der kompakten Bar bis zum voll ausgestatteten Event-Trailer.
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                    {projects.map((project) => (
                        <Link key={project.id} to={`/galerie/${project.slug}`}>
                            <div className="group relative overflow-hidden border border-white/10 hover:border-[#D97706]/50 transition-[border-color] duration-500 cursor-pointer">
                                <img
                                    src={project.image}
                                    alt={`${project.title} – ${project.category} von THM Michels`}
                                    loading="lazy"
                                    className="w-full h-80 md:h-72 object-cover grayscale group-hover:grayscale-0 transition-[filter,transform] duration-700 group-hover:scale-105"
                                />
                                {isDark && <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F] via-[#0F0F0F]/40 to-transparent z-10"></div>}
                                <div className="absolute inset-0 p-6 flex flex-col justify-end z-20">
                                    <span className="font-mono text-[#D97706] text-[10px] tracking-widest mb-2">{project.category.toUpperCase()}</span>
                                    <h3 className="text-xl font-display font-black uppercase mb-3 group-hover:text-[#D97706] transition-colors">{project.title}</h3>
                                    <div className="hidden md:flex gap-2 flex-wrap">
                                        {project.specs.map((spec, i) => (
                                            <span key={i} className="px-2 py-1 bg-white/10 text-[10px] font-mono text-[#9CA3AF]">{spec}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* CTA */}
                <div className="text-center py-16 border-t border-white/10">
                    <h3 className="text-2xl font-display font-black uppercase mb-4">Dein Projekt könnte hier stehen</h3>
                    <p className="font-mono text-[#9CA3AF] mb-8">Erzähl uns von deiner Idee – wir machen daraus Realität.</p>
                    <Link
                        to="/kontakt"
                        className="btn-press inline-block bg-[#D97706] hover:bg-[#B45309] text-white px-10 py-5 font-black text-sm uppercase tracking-widest transition-[background-color,transform] duration-300"
                    >
                        Jetzt Projekt anfragen
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Gallery;
