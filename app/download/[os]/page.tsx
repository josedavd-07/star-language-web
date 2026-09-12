'use client';

import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { ChevronLeft, ExternalLink, Github, Package, Rocket, Terminal } from 'lucide-react';
import Link from 'next/link';
import { STAR_DOWNLOADS, STAR_RELEASES, STAR_REPOSITORY, STARPACKAGES_REPOSITORY, SupportedOS } from '@/lib/github';

interface OperatingSystem {
    title: string;
    icon: string;
    description: string;
    packageLabel: string;
}

const OS_DATA: Record<string, OperatingSystem> = {
    linux: { title: 'Star for Linux', icon: '🐧', description: 'Use the official StarPackages hub for Linux guidance, including its maintained APT instructions.', packageLabel: 'Open Linux installation guide' },
    windows: { title: 'Star for Windows', icon: '🪟', description: 'Use the official StarPackages hub for the current Windows and PowerShell installation guidance.', packageLabel: 'Open Windows installation guide' },
    macos: { title: 'Star for macOS', icon: '🍎', description: 'Use the official StarPackages hub for the current macOS and Homebrew installation guidance.', packageLabel: 'Open macOS installation guide' },
};

export default function DownloadOS() {
    const params = useParams();
    const requestedOs = Array.isArray(params.os) ? params.os[0] : params.os;
    const selectedOs: SupportedOS = requestedOs === 'windows' || requestedOs === 'macos' ? requestedOs : 'linux';
    const data = OS_DATA[selectedOs];
    const download = STAR_DOWNLOADS[selectedOs];

    return (
        <div className="max-w-4xl mx-auto px-6 py-24 pt-32">
            <Link href="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-brand-star mb-12 transition-colors font-bold uppercase tracking-widest text-xs">
                <ChevronLeft size={16} /> Back to orbit
            </Link>

            <header className="mb-16">
                <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="text-7xl mb-6">{data.icon}</motion.div>
                <p className="text-brand-star text-xs font-black uppercase tracking-[0.3em] mb-4">Star 1.1.0</p>
                <h1 className="text-5xl font-black text-white mb-4">{data.title}</h1>
                <p className="text-xl text-gray-400 leading-relaxed max-w-2xl">{data.description}</p>
            </header>

            <div className="grid gap-6">
                <section className="glass-card p-8 rounded-3xl border-white/5">
                    <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-brand-star/10 flex items-center justify-center shrink-0"><Package className="text-brand-star" /></div>
                        <div><h2 className="text-xl font-black text-white">Download the installer</h2><p className="text-gray-400 mt-2 leading-relaxed">Download the published package for your platform. The file name is shown before the download starts.</p></div>
                    </div>
                    <a href={download.url} className="mt-6 inline-flex items-center gap-2 bg-brand-star text-black px-5 py-3 rounded-xl font-black text-sm hover:bg-white transition-colors">Download {download.fileName} <ExternalLink size={16} /></a>
                    <a href={STARPACKAGES_REPOSITORY} target="_blank" rel="noopener noreferrer" className="mt-4 flex w-fit items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors">{data.packageLabel} <ExternalLink size={14} /></a>
                </section>

                <section className="glass-card p-8 rounded-3xl border-white/5">
                    <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center shrink-0"><Rocket className="text-brand-star" /></div>
                        <div><h2 className="text-xl font-black text-white">Published releases</h2><p className="text-gray-400 mt-2 leading-relaxed">No file names or direct asset URLs are assumed here. Browse Star Releases to see the assets actually published by the project.</p></div>
                    </div>
                    <a href={STAR_RELEASES} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-2 text-brand-star font-bold hover:text-white transition-colors">View Star releases <ExternalLink size={16} /></a>
                </section>

                <section className="pt-8 border-t border-white/5 flex flex-wrap gap-8 text-sm">
                    <a href={STAR_REPOSITORY} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white flex items-center gap-2 font-bold transition-colors"><Github size={16} /> Star source</a>
                    <Link href="/docs" className="text-gray-400 hover:text-white flex items-center gap-2 font-bold transition-colors"><Terminal size={16} /> Documentation</Link>
                </section>
            </div>
        </div>
    );
}
