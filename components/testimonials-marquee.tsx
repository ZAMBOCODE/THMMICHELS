import { cn } from "../lib/utils"
import { TestimonialCard, TestimonialAuthor } from "./ui/testimonial-card"
import { useTheme } from "../context/ThemeContext"

interface TestimonialsSectionProps {
    title: string
    description: string
    testimonials: Array<{
        author: TestimonialAuthor
        text: string
        href?: string
    }>
    className?: string
}

export function TestimonialsSection({
    title,
    description,
    testimonials,
    className
}: TestimonialsSectionProps) {
    const { mode } = useTheme()
    const isDark = mode === 'dark'
    return (
        <section className={cn(
            "text-white py-12 md:py-20 lg:py-24 px-0 overflow-hidden",
            className
        )}>
            <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 text-center sm:gap-16">
                <div className="flex flex-col items-center gap-4 px-4 sm:gap-8">
                    <h2 className="max-w-[720px] text-2xl font-semibold leading-tight sm:text-4xl sm:leading-tight font-display">
                        {title}
                    </h2>
                    <p className="text-md max-w-[600px] font-medium text-gray-400 sm:text-xl">
                        {description}
                    </p>
                </div>

                <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
                    <div className="group flex overflow-hidden p-2 [--gap:1rem] [gap:var(--gap)] flex-row [--duration:80s]">
                        <div className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row group-hover:[animation-play-state:paused]">
                            {[...Array(4)].map((_, setIndex) => (
                                <div key={setIndex} className="flex shrink-0 justify-around [gap:var(--gap)] flex-row">
                                    {testimonials.map((testimonial, i) => (
                                        <TestimonialCard
                                            key={`${setIndex}-${i}`}
                                            author={testimonial.author}
                                            text={testimonial.text}
                                            href={testimonial.href}
                                        />
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>

                    {isDark && <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-1/3 bg-gradient-to-r from-[#0F0F0F] to-transparent sm:block"></div>}
                    {isDark && <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/3 bg-gradient-to-l from-[#0F0F0F] to-transparent sm:block"></div>}
                </div>
            </div>
        </section>
    )
}
