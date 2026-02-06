'use client';

import { useState } from 'react';
import { DOCS_CONTENT } from '@/lib/docs-data';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, BookOpen, Terminal, Sparkles, Box } from 'lucide-react';

export default function DocsPage() {
    const [activeSlug, setActiveSlug] = useState(DOCS_CONTENT[0].slug);
    const activeDoc = DOCS_CONTENT.find(doc => doc.slug === activeSlug) || DOCS_CONTENT[0];

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col md:flex-row gap-12 pt-32">

            {/* Sidebar */}
            <aside className="w-full md:w-64 flex-shrink-0">
                <div className="sticky top-32 space-y-8">
                    <div>
                        <h3 className="text-brand-star text-xs font-bold uppercase tracking-widest mb-4 flex items-center gap-2">
                            <BookOpen size={14} /> Documentation
                        </h3>
                        <nav className="flex flex-col gap-2">
                            {DOCS_CONTENT.map(doc => (
                                <button
                                    key={doc.slug}
                                    onClick={() => setActiveSlug(doc.slug)}
                                    className={`flex items-center justify-between px-4 py-2 rounded-lg text-sm font-medium transition-all ${activeSlug === doc.slug
                                            ? 'bg-brand-star/20 text-brand-star border border-brand-star/30'
                                            : 'text-gray-400 hover:text-white hover:bg-white/5 border border-transparent'
                                        }`}
                                >
                                    {doc.title}
                                    {activeSlug === doc.slug && <ChevronRight size={14} />}
                                </button>
                            ))}
                        </nav>
                    </div>

                    <div className="glass-card p-4 rounded-xl border-brand-star/10">
                        <p className="text-xs text-brand-star mb-2 font-bold">Marketplace</p>
                        <a
                            href="https://marketplace.visualstudio.com/items?itemName=JoseDavidCarranzaAngarita.star-language"
                            target="_blank"
                            className="text-xs text-gray-300 hover:text-white flex items-center gap-2 transition-colors"
                        >
                            <Box size={14} /> Install VS Code Extension
                        </a>
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-grow min-w-0">
                <AnimatePresence mode="wait">
                    <motion.article
                        key={activeSlug}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                        className="prose prose-invert prose-brand-star max-w-none prose-headings:text-white prose-a:text-brand-star prose-table:border prose-table:border-white/10"
                    >
                        {/* Render direct content for simplicity, in a real app would use a MDX parser */}
                        <div className="doc-content">
                            {/* Converting the mock markdown-like content to simple HTML vibes */}
                            <div dangerouslySetInnerHTML={{ __html: formatDocs(activeDoc.content) }} />
                        </div>
                    </motion.article>
                </AnimatePresence>
            </main>
        </div>
    );
}

// Simple hack to make it look like documentation for now
function formatDocs(content: string) {
    return content
        .replace(/^# (.*$)/gim, '<h1 class="text-4xl font-extrabold mb-8">$1</h1>')
        .replace(/^### (.*$)/gim, '<h3 class="text-xl font-bold mt-8 mb-4 text-brand-star">$3</h3>')
        .replace(/^## (.*$)/gim, '<h2 class="text-2xl font-bold mt-12 mb-6 border-b border-white/10 pb-2">$1</h2>')
        .replace(/`(.*?)`/g, '<code class="bg-brand-accent px-1.5 py-0.5 rounded text-brand-star">$1</code>')
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/---/g, '<hr class="border-white/10 my-8" />')
        .split('\n').map(line => line.startsWith('|') ? line : `<p class="text-gray-400 mb-4 leading-relaxed">${line}</p>`).join('');
}
