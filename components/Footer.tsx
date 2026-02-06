import { Github, Linkedin, Heart } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="relative z-10 py-12 border-t border-white/10 bg-brand-space/80 backdrop-blur-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    {/* Brand */}
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                            <span className="text-brand-star">✦</span> Star
                        </h3>
                        <p className="text-gray-400 text-sm max-w-xs">
                            A modern, space-themed programming language designed for the next generation of explorers.
                        </p>
                    </div>

                    {/* Links */}
                    <div className="space-y-4">
                        <h4 className="text-white font-semibold">Resources</h4>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><a href="#" className="hover:text-brand-star transition-colors">Documentation</a></li>
                            <li><a href="#" className="hover:text-brand-star transition-colors">API Reference</a></li>
                            <li><a href="#" className="hover:text-brand-star transition-colors">Release Notes</a></li>
                        </ul>
                    </div>

                    {/* Social */}
                    <div className="space-y-4">
                        <h4 className="text-white font-semibold">Connect</h4>
                        <div className="flex gap-4">
                            <a href="https://github.com/josedavd-07" target="_blank" className="p-2 bg-white/5 rounded-full hover:bg-brand-star/20 hover:text-brand-star transition-all">
                                <Github size={20} />
                            </a>
                            <a href="https://www.linkedin.com/in/jose-david-carranza-angarita-unity-developer/" target="_blank" className="p-2 bg-white/5 rounded-full hover:bg-brand-star/20 hover:text-brand-star transition-all">
                                <Linkedin size={20} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
                    <p>© 2026 Star Language. All rights reserved.</p>
                    <div className="flex items-center gap-1">
                        <span>Created with</span>
                        <Heart size={12} className="text-red-500 fill-red-500" />
                        <span>by Jose David Carranza Angarita in Colombia 🇨🇴</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
