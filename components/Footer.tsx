import { Github, Heart, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { MOON_TECHNOLOGIES, STAR_MARKETPLACE, STAR_RELEASES, STAR_REPOSITORY } from '@/lib/github';

export default function Footer() {
    return (
        <footer className="relative z-10 border-t border-white/10 bg-[#11151f]">
            <div className="max-w-7xl mx-auto px-5 py-7">
                <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between text-sm">
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-3 text-gray-400">
                        <a href={MOON_TECHNOLOGIES} target="_blank" rel="noopener noreferrer" aria-label="Moon Technologies on GitHub" className="w-9 h-9 rounded-full border border-white/15 bg-cover bg-center hover:ring-2 hover:ring-brand-star transition-all" style={{ backgroundImage: 'url(https://github.com/Moon-TechnologiesCO.png?size=80)' }} />
                        <Link href="/" className="flex items-center gap-2 font-black text-white tracking-tight hover:text-brand-star transition-colors"><Sparkles size={16} className="text-brand-star" /> Star</Link>
                        <span className="hidden sm:block h-5 w-px bg-white/15" />
                        <span>A project by</span>
                        <a href={MOON_TECHNOLOGIES} target="_blank" rel="noopener noreferrer" className="font-bold text-brand-star hover:text-white transition-colors">Moon Technologies</a>
                    </div>
                    <nav aria-label="Footer navigation" className="flex flex-wrap gap-x-5 gap-y-2 text-xs text-gray-400">
                        <a href="/docs" className="hover:text-white transition-colors">Documentation</a>
                        <a href={STAR_RELEASES} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Download Star</a>
                        <a href={STAR_MARKETPLACE} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">VS Code extension</a>
                    </nav>
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-gray-400 lg:justify-end">
                        <span>Developed with</span><Heart size={12} className="fill-red-500 text-red-500" /><span>from Colombia</span><span className="text-white/20">•</span>
                        <a href={STAR_REPOSITORY} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-white transition-colors"><Github size={13} /> View on GitHub</a>
                        <span className="w-full lg:text-right text-gray-600">© 2026 Moon Technologies. All rights reserved.</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
