'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Github, Moon, Sun, Download, Rocket } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className="absolute w-full z-50 bg-transparent py-10">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-4 group">
                        <div className="relative w-12 h-12 transition-all duration-1000 group-hover:rotate-[360deg] group-hover:scale-110">
                            <Image src="/extension-logo.png" alt="Star Logo" fill className="object-contain" />
                        </div>
                        <div className="flex flex-col gap-0 leading-none">
                            <span className="text-2xl font-black tracking-tighter text-white">STAR</span>
                        </div>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex items-center gap-10">
                        <NavLink href="/#features">Exploration</NavLink>
                        <NavLink href="/docs">Orbit Docs</NavLink>
                        <NavLink href="https://github.com/josedavd-07/Star/releases/latest">Deploy</NavLink>

                        <div className="h-4 w-px bg-white/10 mx-2" />

                        <div className="flex items-center gap-6">
                            <a href="https://github.com/josedavd-07/Star" target="_blank" rel="noopener noreferrer"
                                className="text-gray-400 hover:text-brand-star transition-all">
                                <Github size={20} />
                            </a>
                            <Link href="https://github.com/josedavd-07/Star/releases/latest"
                                className="flex items-center gap-2 px-5 py-2.5 bg-brand-star text-black font-black text-xs rounded-lg hover:bg-white transition-all shadow-sm"
                            >
                                <Rocket size={14} /> START MISSION
                            </Link>
                        </div>
                    </div>

                    {/* Mobile Toggle */}
                    <div className="lg:hidden">
                        <button onClick={() => setIsOpen(!isOpen)} className="p-2 rounded-xl bg-white/5 text-white hover:text-brand-star transition-colors">
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="lg:hidden absolute top-full left-0 w-full bg-background/95 backdrop-blur-2xl border-b border-white/5 overflow-hidden shadow-2xl"
                    >
                        <div className="flex flex-col p-8 space-y-6">
                            <MobileNavLink href="/#features" onClick={() => setIsOpen(false)}>Exploration</MobileNavLink>
                            <MobileNavLink href="/docs" onClick={() => setIsOpen(false)}>Orbit Docs</MobileNavLink>
                            <MobileNavLink href="https://github.com/josedavd-07/Star/releases/latest" onClick={() => setIsOpen(false)}>Deploy</MobileNavLink>
                            <div className="h-px w-full bg-white/5" />
                            <div className="flex items-center justify-between">
                                <a href="https://github.com/josedavd-07/Star" target="_blank" className="text-gray-400 flex items-center gap-2 font-bold hover:text-brand-star transition-colors">
                                    <Github size={20} /> GitHub Repo
                                </a>
                                <Link href="https://github.com/josedavd-07/Star/releases/latest" className="bg-brand-star p-4 rounded-full text-black shadow-lg shadow-brand-star/20">
                                    <Rocket size={20} />
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}

const NavLink = ({ href, children }: { href: string, children: React.ReactNode }) => (
    <Link href={href} className="text-gray-400 hover:text-white font-black text-xs uppercase tracking-[0.2em] transition-all relative group">
        {children}
        <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-1 bg-brand-star rounded-full transition-all group-hover:w-4"></span>
    </Link>
);

const MobileNavLink = ({ href, onClick, children }: { href: string, onClick: () => void, children: React.ReactNode }) => (
    <Link href={href} onClick={onClick} className="block text-2xl font-black tracking-tight text-white hover:text-brand-star">
        {children}
    </Link>
);
