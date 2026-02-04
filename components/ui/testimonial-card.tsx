import { Avatar, AvatarFallback, AvatarImage } from "./avatar"

export interface TestimonialAuthor {
    name: string
    handle: string
    avatar: string
}

interface TestimonialCardProps {
    author: TestimonialAuthor
    text: string
    href?: string
}

export function TestimonialCard({
    author,
    text,
    href
}: TestimonialCardProps) {
    const CardContent = (
        <div className="flex w-[280px] flex-col gap-4 rounded-xl border border-gray-800 bg-black/50 p-4 transition-colors hover:bg-gray-900/50 sm:w-[320px]">
            <div className="flex items-center gap-3">
                <Avatar className="h-10 w-10 border border-gray-800">
                    <AvatarImage src={author.avatar} alt={author.name} />
                    <AvatarFallback>{author.name[0]}</AvatarFallback>
                </Avatar>
                <div className="flex flex-col">
                    <span className="text-sm font-semibold text-white">{author.name}</span>
                    <span className="text-xs text-gray-400">{author.handle}</span>
                </div>
            </div>
            <p className="text-sm leading-relaxed text-gray-300">
                {text}
            </p>
        </div>
    )

    if (href) {
        return (
            <a href={href} target="_blank" rel="noopener noreferrer" className="block">
                {CardContent}
            </a>
        )
    }

    return CardContent
}
