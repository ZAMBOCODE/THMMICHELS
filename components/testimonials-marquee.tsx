import { Quote } from 'lucide-react';

interface Testimonial {
    author: {
        name: string
        handle: string
        avatar: string
    }
    text: string
}

interface TestimonialsSectionProps {
    title: string
    description: string
    testimonials: Testimonial[]
}

function TestimonialCard({ author, text }: Testimonial) {
    return (
        <div className="group flex w-[300px] sm:w-[360px] flex-col gap-5 border border-white/10 hover:border-[#D97706]/50 p-6 sm:p-8 transition-colors bg-[#0F0F0F]">
            <Quote className="w-5 h-5 text-[#D97706] shrink-0" aria-hidden="true" />
            <p className="font-mono text-sm leading-relaxed text-[#9CA3AF]">
                {text}
            </p>
            <div className="flex items-center gap-4 mt-auto pt-4 border-t border-white/5">
                <img
                    src={author.avatar}
                    alt={author.name}
                    width={40}
                    height={40}
                    loading="lazy"
                    className="w-10 h-10 object-cover border border-white/10 grayscale group-hover:grayscale-0 transition-[filter] duration-300"
                />
                <div>
                    <span className="font-display font-bold text-sm text-white block">{author.name}</span>
                    <span className="font-mono text-[10px] text-[#D97706] uppercase tracking-widest">{author.handle}</span>
                </div>
            </div>
        </div>
    );
}

export function TestimonialsSection({
    title,
    description,
    testimonials,
}: TestimonialsSectionProps) {
    return (
        <section className="py-12 md:py-20 lg:py-24 bg-[#0F0F0F] overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 mb-10 md:mb-16 scroll-animate">
                <h2 className="font-mono text-[#D97706] text-xs font-bold uppercase tracking-[0.3em] mb-4">[ REFERENZEN ]</h2>
                <h3 className="text-fluid-section font-display font-black uppercase tracking-tight mb-4">
                    {title}
                </h3>
                <p className="text-[#9CA3AF] font-mono text-sm max-w-xl leading-relaxed">
                    {description}
                </p>
            </div>

            <div className="relative">
                {/* Edge fades */}
                <div className="pointer-events-none absolute inset-y-0 left-0 w-20 md:w-32 bg-gradient-to-r from-[#0F0F0F] to-transparent z-10"></div>
                <div className="pointer-events-none absolute inset-y-0 right-0 w-20 md:w-32 bg-gradient-to-l from-[#0F0F0F] to-transparent z-10"></div>

                {/* Marquee */}
                <div className="group flex overflow-hidden [--gap:1.5rem] [gap:var(--gap)] [--duration:45s]">
                    <div className="flex shrink-0 [gap:var(--gap)] animate-marquee group-hover:[animation-play-state:paused] motion-reduce:[animation-play-state:paused]">
                        {[...Array(4)].map((_, setIndex) => (
                            <div key={setIndex} className="flex shrink-0 [gap:var(--gap)]">
                                {testimonials.map((t, i) => (
                                    <TestimonialCard key={`${setIndex}-${i}`} author={t.author} text={t.text} />
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
