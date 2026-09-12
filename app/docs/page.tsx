'use client';

import { useState } from 'react';
import { DOCS_CONTENT } from '@/lib/docs-data';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, BookOpen, Box, Download, Github, Package, Sparkles } from 'lucide-react';
import { STAR_MARKETPLACE, STAR_RELEASES, STAR_REPOSITORY, STARPACKAGES_REPOSITORY, STARSTUDIO_REPOSITORY } from '@/lib/github';

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
                        <p className="text-xs text-brand-star mb-2 font-bold">Download Star</p>
                        <a href={STAR_RELEASES} target="_blank" rel="noopener noreferrer" className="text-xs text-gray-300 hover:text-white flex items-center gap-2 transition-colors"><Download size={14} /> Open published releases</a>
                    </div>

                    <div className="glass-card p-4 rounded-xl border-brand-star/10">
                        <p className="text-xs text-brand-star mb-2 font-bold">Marketplace</p>
                        <a
                            href={STAR_MARKETPLACE}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs text-gray-300 hover:text-white flex items-center gap-2 transition-colors"
                        >
                            <Box size={14} /> Install VS Code Extension
                        </a>
                    </div>

                    <div className="glass-card p-4 rounded-xl border-white/5 space-y-3 text-xs">
                        <a href={STAR_REPOSITORY} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-brand-star flex items-center gap-2 transition-colors"><Github size={14} /> Star repository</a>
                        <a href={STARPACKAGES_REPOSITORY} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-brand-star flex items-center gap-2 transition-colors"><Package size={14} /> StarPackages</a>
                        <a href={STARSTUDIO_REPOSITORY} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-brand-star flex items-center gap-2 transition-colors"><Sparkles size={14} /> Star Studio</a>
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

function formatDocs(content: string) {
    const escapeHtml = (value: string) => value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    const inline = (value: string) => escapeHtml(value)
        .replace(/`(.*?)`/g, '<code class="bg-brand-accent px-1.5 py-0.5 rounded text-brand-star">$1</code>')
        .replace(/\*\*(.*?)\*\*/g, '<strong class="text-white">$1</strong>');

    const output: string[] = [];
    let codeLines: string[] = [];
    let codeLanguage = '';

    for (const line of content.split('\n')) {
        const fence = line.match(/^```(\w*)$/);
        if (fence) {
            if (codeLines.length > 0 || codeLanguage) {
                output.push(`<pre class="my-5 overflow-x-auto rounded-xl border border-white/10 bg-[#0B0E14] p-5"><code class="text-sm text-brand-star">${escapeHtml(codeLines.join('\n'))}</code></pre>`);
                codeLines = [];
                codeLanguage = '';
            } else {
                codeLanguage = fence[1] || 'text';
            }
            continue;
        }
        if (codeLanguage) {
            codeLines.push(line);
            continue;
        }
        if (!line) continue;
        if (line.startsWith('# ')) output.push(`<h1 class="text-4xl font-extrabold mb-8">${inline(line.slice(2))}</h1>`);
        else if (line.startsWith('## ')) output.push(`<h2 class="text-2xl font-bold mt-12 mb-5 border-b border-white/10 pb-2">${inline(line.slice(3))}</h2>`);
        else if (line.startsWith('- ')) output.push(`<p class="text-gray-300 mb-2 leading-relaxed pl-5 before:content-['•'] before:absolute before:-ml-4 before:text-brand-star relative">${inline(line.slice(2))}</p>`);
        else if (/^\d+\. /.test(line)) output.push(`<p class="text-gray-300 mb-2 leading-relaxed">${inline(line)}</p>`);
        else output.push(`<p class="text-gray-400 mb-4 leading-relaxed">${inline(line)}</p>`);
    }
    return output.join('');
}
