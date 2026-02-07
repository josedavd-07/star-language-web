'use client';

import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { Terminal, Download, Copy, Check, ChevronLeft, Github, Package, ShieldCheck, History, Calendar } from 'lucide-react';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { getReleaseHistory, Release } from '@/lib/github';

const OS_DATA: Record<string, any> = {
    linux: {
        title: "Star for Linux",
        icon: "🐧",
        exts: [".deb", ".tar.gz"],
        description: "Standard Debian-based distributions (Ubuntu, Debian, Mint) and Tarballs for other distros.",
        downloads: [
            { name: "Debian Package (.deb)", link: "https://github.com/josedavd-07/Star/releases/latest/download/star-language_1.0.0_amd64.deb", size: "2.4MB" },
            { name: "Linux Tarball (.tar.gz)", link: "https://github.com/josedavd-07/Star/releases/latest/download/star-language-v1.0.0-linux.tar.gz", size: "1.8MB" }
        ],
        commands: [
            {
                label: "One-liner Install (Easiest)",
                code: `curl -fsSL https://josedavd-07.github.io/star-apt-repo./install.sh | sudo bash`
            },
            {
                label: "Manual APT Setup",
                code: `# Import GPG key\nwget -qO - https://josedavd-07.github.io/star-apt-repo./key.gpg | sudo apt-key add -\n\n# Add repo\necho "deb [arch=amd64] https://josedavd-07.github.io/star-apt-repo./ stable main" | sudo tee /etc/apt/sources.list.d/star-language.list\n\n# Install\nsudo apt update && sudo apt install star-language`
            }
        ]
    },
    windows: {
        title: "Star for Windows",
        icon: "🪟",
        exts: [".zip", ".exe"],
        description: "Modern Windows environment support with native binary execution.",
        downloads: [
            { name: "Windows Setup (.zip)", link: "https://github.com/josedavd-07/Star/releases/latest/download/star-language-v1.0.0-windows.zip", size: "3.2MB" }
        ],
        commands: [
            {
                label: "PowerShell Installation",
                code: `iwr https://josedavd-07.github.io/star-apt-repo./install-windows.ps1 -useb | iex`
            }
        ]
    },
    macos: {
        title: "Star for macOS",
        icon: "🍎",
        exts: [".tar.gz", ".pkg"],
        description: "Optimized for Apple Silicon and Intel Macs via standalone binaries or Homebrew.",
        downloads: [
            { name: "macOS Universal (.tar.gz)", link: "https://github.com/josedavd-07/Star/releases/latest/download/star-language-v1.0.0-macos.tar.gz", size: "2.1MB" }
        ],
        commands: [
            {
                label: "Homebrew (Recommended)",
                code: `brew tap josedavd-07/star-apt-repo.\nbrew install star`
            },
            {
                label: "Manual Install Script",
                code: `curl -fsSL https://josedavd-07.github.io/star-apt-repo./install-mac.sh | bash`
            }
        ]
    }
};

export default function DownloadOS() {
    const params = useParams();
    const os = (params.os as string) || 'linux';
    const data = OS_DATA[os] || OS_DATA.linux;
    const [copied, setCopied] = useState<string | null>(null);
    const [history, setHistory] = useState<Release[]>([]);

    useEffect(() => {
        getReleaseHistory().then(setHistory);
    }, []);

    const handleCopy = (code: string, id: string) => {
        navigator.clipboard.writeText(code);
        setCopied(id);
        setTimeout(() => setCopied(null), 2000);
    };

    return (
        <div className="max-w-4xl mx-auto px-6 py-24 pt-32">
            <Link href="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-brand-star mb-12 transition-colors font-bold uppercase tracking-widest text-xs">
                <ChevronLeft size={16} /> Back to Orbit
            </Link>

            <header className="mb-16">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-7xl mb-6"
                >
                    {data.icon}
                </motion.div>
                <h1 className="text-5xl font-black text-white mb-4">{data.title}</h1>
                <p className="text-xl text-gray-400 leading-relaxed max-w-2xl">{data.description}</p>
            </header>

            <div className="grid gap-12">
                {/* Download Section */}
                <section>
                    <h2 className="text-xs font-black text-brand-star uppercase tracking-[0.3em] mb-6 flex items-center gap-2">
                        <Download size={14} /> Direct Downloads
                    </h2>
                    <div className="grid sm:grid-cols-2 gap-4">
                        {data.downloads.map((dl: any, idx: number) => (
                            <a
                                key={idx}
                                href={dl.link}
                                className="glass-card p-6 rounded-2xl flex items-center justify-between group border-white/5 hover:border-brand-star/40"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-brand-star/20 transition-colors">
                                        <Package className="text-gray-400 group-hover:text-brand-star" />
                                    </div>
                                    <div>
                                        <p className="font-bold text-white">{dl.name}</p>
                                        <p className="text-xs text-gray-500">{dl.size}</p>
                                    </div>
                                </div>
                                <Download size={20} className="text-gray-600 group-hover:text-brand-star transition-all group-hover:translate-y-1" />
                            </a>
                        ))}
                    </div>
                </section>

                {/* Commands Section */}
                {data.commands && (
                    <section>
                        <h2 className="text-xs font-black text-brand-star uppercase tracking-[0.3em] mb-6 flex items-center gap-2">
                            <Terminal size={14} /> Mission Control Commands
                        </h2>
                        <div className="space-y-6">
                            {data.commands.map((cmd: any, idx: number) => (
                                <div key={idx} className="glass-card rounded-2xl overflow-hidden border-white/5 bg-[#0B0E14]">
                                    <div className="flex items-center justify-between px-6 py-3 border-b border-white/5 bg-white/5">
                                        <span className="text-xs font-bold text-gray-400 tracking-wider flex items-center gap-2">
                                            <ShieldCheck size={14} className="text-brand-star" /> {cmd.label}
                                        </span>
                                        <button
                                            onClick={() => handleCopy(cmd.code, `cmd-${idx}`)}
                                            className="text-gray-500 hover:text-brand-star transition-colors"
                                        >
                                            {copied === `cmd-${idx}` ? <Check size={18} /> : <Copy size={18} />}
                                        </button>
                                    </div>
                                    <pre className="p-6 overflow-x-auto">
                                        <code className="text-brand-star font-mono text-sm leading-relaxed block whitespace-pre">
                                            {cmd.code}
                                        </code>
                                    </pre>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {/* Version History Section */}
                <section>
                    <h2 className="text-xs font-black text-brand-star uppercase tracking-[0.3em] mb-6 flex items-center gap-2">
                        <History size={14} /> Mission History (Releases)
                    </h2>
                    <div className="space-y-4">
                        {history.length > 0 ? (
                            history.map((release) => (
                                <div key={release.tag_name} className="glass-card p-6 rounded-2xl border-white/5 flex flex-col md:flex-row md:items-center justify-between gap-6">
                                    <div className="flex flex-col gap-1">
                                        <div className="flex items-center gap-3">
                                            <span className="px-2 py-0.5 rounded bg-brand-star/10 text-brand-star text-xs font-bold uppercase tracking-widest">{release.tag_name}</span>
                                            <h3 className="text-lg font-bold text-white">{release.name || release.tag_name}</h3>
                                        </div>
                                        <div className="flex items-center gap-2 text-xs text-gray-500">
                                            <Calendar size={12} /> {new Date(release.published_at).toLocaleDateString()}
                                        </div>
                                    </div>

                                    <div className="flex flex-wrap gap-2">
                                        {release.assets
                                            .filter(asset => data.exts.some((ext: string) => asset.name.toLowerCase().endsWith(ext)))
                                            .map(asset => (
                                                <a
                                                    key={asset.name}
                                                    href={asset.browser_download_url}
                                                    className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/5 rounded-lg text-sm transition-all text-gray-300 hover:text-white"
                                                >
                                                    <Download size={14} /> {asset.name.split('-').pop()}
                                                </a>
                                            ))
                                        }
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="text-gray-600 italic text-sm py-4">Scanning archives for previous missions...</div>
                        )}
                    </div>
                </section>

                {/* Extra Links */}
                <section className="pt-8 border-t border-white/5">
                    <div className="flex flex-wrap gap-8 text-sm">
                        <a href="https://github.com/josedavd-07/Star" className="text-gray-400 hover:text-white flex items-center gap-2 font-bold transition-colors">
                            <Github size={16} /> Source Code
                        </a>
                        <Link href="/docs" className="text-gray-400 hover:text-white flex items-center gap-2 font-bold transition-colors">
                            <Terminal size={16} /> CLI Reference
                        </Link>
                    </div>
                </section>
            </div>
        </div>
    );
}
