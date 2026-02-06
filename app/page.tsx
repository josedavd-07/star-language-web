'use client';

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Code, Terminal, Zap, Star, Layout, Github, Package, Download } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { getStarStats, GitHubStats } from "@/lib/github";

export default function Home() {
  const [stats, setStats] = useState<GitHubStats>({ stars: 0, version: 'v1.0.0' });

  useEffect(() => {
    // Initial fetch for stats
    getStarStats().then(setStats);
  }, []);

  return (
    <div className="flex flex-col gap-24 pb-20">

      {/* Hero Section */}
      <section className="relative pt-24 pb-32 overflow-hidden px-4">
        <div className="max-w-7xl mx-auto text-center relative z-10">



          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center mb-10 relative"
          >
            <div className="relative w-48 h-48 md:w-64 md:h-64 animate-float group">
              <Image src="/logo.png" alt="Star Logo" fill className="object-contain drop-shadow-[0_0_60px_rgba(255,255,0,0.2)] group-hover:drop-shadow-[0_0_80px_rgba(255,255,0,0.4)] transition-all" priority />
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-6xl md:text-8xl font-black tracking-tighter text-white mb-8 bg-clip-text"
          >
            Reach for the <span className="text-brand-star italic">Stars</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-400 mb-14 max-w-3xl mx-auto leading-relaxed"
          >
            An astronomical leap in language design.
            Native-speed compilation, space-themed semantics, and a developer-first CLI experience.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/download/linux"
                className="bg-brand-star text-black px-10 py-5 rounded-xl font-black text-xl hover:bg-white hover:scale-105 transition-all flex items-center gap-3 shadow-[0_15px_30px_-10px_rgba(255,255,0,0.3)]"
              >
                Inhale Discovery <Download size={22} />
              </Link>
              <Link
                href="/docs"
                className="px-10 py-5 rounded-xl font-bold text-xl text-white border-2 border-white/10 hover:bg-white/5 hover:border-brand-star/40 transition-all backdrop-blur-md"
              >
                Explore the Docs
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Code Preview Section */}
      <section className="max-w-6xl mx-auto px-4 w-full" id="demo">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-gray-500 uppercase tracking-widest mb-2">Beautiful Semantics</h2>
          <p className="text-4xl font-extrabold text-white">Code as elegant as the universe.</p>
        </div>
        <div className="glass-card rounded-2xl p-1 bg-gradient-to-br from-white/10 to-transparent shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] border border-white/5">
          <div className="flex items-center justify-between px-6 py-4 border-b border-white/5 bg-[#0B0E14]/80">
            <div className="flex gap-2.5">
              <div className="w-3.5 h-3.5 rounded-full bg-red-500/80 shadow-[0_0_10px_rgba(239,68,68,0.3)]" />
              <div className="w-3.5 h-3.5 rounded-full bg-yellow-500/80 shadow-[0_0_10px_rgba(234,179,8,0.3)]" />
              <div className="w-3.5 h-3.5 rounded-full bg-green-500/80 shadow-[0_0_10px_rgba(34,197,94,0.3)]" />
            </div>
            <div className="text-xs text-gray-500 font-mono tracking-wider flex items-center gap-2">
              <Terminal size={14} /> src/MissionControl.st
            </div>
          </div>
          <div className="p-8 md:p-12 overflow-x-auto bg-[#0B0E14]/90">
            <pre className="font-mono text-base md:text-lg leading-loose">
              <code>
                <span className="text-gray-500 italic">// Welcome to the Star System</span><br />
                <span className="text-purple-400">StarName</span> <span className="text-blue-300">Galaxy.LaunchPad</span>;<br />
                <br />
                <span className="text-brand-star font-black uppercase text-sm tracking-tighter">Constellation</span> <span className="text-yellow-200">Rocket</span> {'{'}<br />
                &nbsp;&nbsp;<span className="text-brand-star italic">Public</span> <span className="text-blue-400">Int</span> Fuel = 100;<br />
                <br />
                &nbsp;&nbsp;<span className="text-brand-star font-black uppercase text-sm tracking-tighter">StarFunction</span> <span className="text-blue-300">Ignite</span>() {'{'}<br />
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-brand-star italic">When</span> (Fuel &gt; 0) {'{'}<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-300">EmitLn</span>(<span className="text-green-400">"🚀 Ignition sequence start!"</span>);<br />
                &nbsp;&nbsp;&nbsp;&nbsp;{'}'}<br />
                &nbsp;&nbsp;{'}'}<br />
                {'}'}<br />
              </code>
            </pre>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-black text-white mb-4">Core Capacities</h2>
          <div className="w-24 h-1 bg-brand-star mx-auto rounded-full" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          <FeatureCard
            icon={<Zap className="text-brand-star" size={36} />}
            title="Native Compilation"
            description="High-performance binary generation using .NET AOT technology. Fast, standalone, and ready for deployment."
          />

          <FeatureCard
            icon={<Layout className="text-brand-star" size={36} />}
            title="Astronomical Syntax"
            description="Designed for developers who love space. Logic flows through orbits and constellations, not just classes and loops."
          />

          <FeatureCard
            icon={<Package className="text-brand-star" size={36} />}
            title="Integrated Prototyping"
            description="Built-in CLI for project scaffolding, dependency management, and instant execution of Galaxy missions."
          />

        </div>
      </section>

      {/* OS Badges */}
      <section className="text-center py-24 mb-20 bg-white/5 rounded-[4rem] mx-4 border border-white/5 backdrop-blur-sm">
        <p className="text-brand-star mb-10 uppercase tracking-[0.4em] font-black text-xs">Certified Interstellar OS</p>
        <div className="flex flex-wrap justify-center gap-16 md:gap-32 items-center">
          <Link href="/download/linux" className="flex flex-col items-center gap-4 group cursor-pointer">
            <span className="text-6xl grayscale transition-all group-hover:grayscale-0">🐧</span>
            <span className="text-white font-bold opacity-0 group-hover:opacity-100 transition-opacity">Linux</span>
          </Link>
          <Link href="/download/windows" className="flex flex-col items-center gap-4 group cursor-pointer">
            <span className="text-6xl grayscale transition-all group-hover:grayscale-0">🪟</span>
            <span className="text-white font-bold opacity-0 group-hover:opacity-100 transition-opacity">Windows</span>
          </Link>
          <Link href="/download/macos" className="flex flex-col items-center gap-4 group cursor-pointer">
            <span className="text-6xl grayscale transition-all group-hover:grayscale-0">🍎</span>
            <span className="text-white font-bold opacity-0 group-hover:opacity-100 transition-opacity">macOS</span>
          </Link>
        </div>
      </section>

    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      whileHover={{ y: -10 }}
      viewport={{ once: true }}
      className="glass-card p-10 rounded-[2.5rem] flex flex-col gap-6 text-left border-white/5"
    >
      <div className="w-16 h-16 rounded-2xl bg-brand-star/10 border border-brand-star/20 flex items-center justify-center flex-shrink-0 animate-pulse">
        {icon}
      </div>
      <div>
        <h3 className="text-2xl font-black text-white mb-3 tracking-tight">{title}</h3>
        <p className="text-gray-400 leading-relaxed text-lg">
          {description}
        </p>
      </div>
    </motion.div>
  );
}
