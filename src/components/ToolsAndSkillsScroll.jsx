import React, { useState, useRef } from 'react';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { Code2, Cpu, Layout, ArrowRight } from 'lucide-react';

const SKILL_CATEGORIES = [
  {
    id: "01",
    key: "SYSTEMS",
    title: "SYSTEMS & DEV",
    headline: "Scalable Logic & Automated Web Engines",
    icon: Code2,
    tools: ["Python", "JavaScript", "PHP", "Laravel 11", "SQL / MySQL", "React", "REST APIs", "Git"],
    description: "Developing robust data pipelines, authenticated permission platforms, and resilient backend services with modern architectural separation.",
    metric: "06 CORE PLATFORMS",
  },
  {
    id: "02",
    key: "INTELLIGENCE",
    title: "INTELLIGENCE",
    headline: "Vision Transformers & Biometric AI",
    icon: Cpu,
    tools: ["PyTorch", "OpenCV", "Machine Learning", "Vision Transformer (ViT)", "CIELAB", "Scikit-Learn"],
    description: "Deep learning research on constrained ocular crops, self-attention maps rollout analysis, and uncalibrated camera colorimetry classification.",
    metric: "04 RESEARCH MODELS",
  },
  {
    id: "03",
    key: "VISUALS",
    title: "VISUALS & DESIGN",
    headline: "Tactile Systems & Spatial Prototyping",
    icon: Layout,
    tools: ["Adobe Illustrator", "Figma", "Canva", "UI/UX Design", "Design Systems", "Prototyping"],
    description: "Editorial typographic clamp scales, high-contrast brutalist minimalist frameworks, spatial mobile navigation, and design token architectures.",
    metric: "12+ DESIGN SYSTEMS",
  },
];

export default function ToolsAndSkillsScroll() {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Hook Scroll-Driven Progress
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Deteksi indeks aktif (0, 1, 2) berdasarkan scroll progresif
  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    if (latest < 0.33) {
      setActiveIndex(0);
    } else if (latest < 0.66) {
      setActiveIndex(1);
    } else {
      setActiveIndex(2);
    }
  });

  const activeCategory = SKILL_CATEGORIES[activeIndex];

  return (
    <section
      ref={containerRef}
      className="relative h-[250vh] sm:h-[300vh] w-full bg-[#111111]"
    >
      {/* Sticky Screen-Locked Container (Responsive h-[100svh] untuk mobile browsers) */}
      <div className="sticky top-0 h-[100svh] w-full bg-[#111111] text-[#F5F5F2] flex flex-col justify-between px-4 sm:px-10 md:px-16 py-6 sm:py-10 md:py-14 overflow-hidden border-t border-white/10">
        
        {/* Top Minimal Bar */}
        <div className="flex justify-between items-center border-b border-white/10 pb-3 sm:pb-5">
          <div className="flex items-center gap-2 sm:gap-3">
            <span className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.2em] text-[#F5F5F2]/40">
              [ 03 / CAPABILITIES ]
            </span>
            <span className="hidden sm:inline text-[#F5F5F2]/30">•</span>
            <span className="hidden sm:inline font-mono text-[10px] sm:text-xs uppercase tracking-[0.2em] text-[#F5F5F2]/60">
              SCROLL-DRIVEN INDEX
            </span>
          </div>

          {/* Stepped Progress Indicator */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            {SKILL_CATEGORIES.map((cat, idx) => (
              <button
                key={cat.id}
                onClick={() => setActiveIndex(idx)}
                aria-label={`Jump to ${cat.title}`}
                className={`h-1.5 transition-all duration-300 rounded-full cursor-pointer ${
                  idx === activeIndex
                    ? 'w-6 sm:w-8 bg-white'
                    : 'w-2 bg-white/20 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Center Main Split: Vertical List (Desktop) / Horizontal Tabs (Mobile) + Detail Panel */}
        <div className="my-auto grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-8 lg:gap-16 items-center">
          
          {/* Kolom Kiri: Baris Judul Kategori */}
          <div className="lg:col-span-7 flex flex-row lg:flex-col justify-between lg:justify-start gap-2 sm:gap-4 md:gap-8 overflow-x-auto pb-1 lg:pb-0">
            {SKILL_CATEGORIES.map((item, index) => {
              const isActive = index === activeIndex;
              const Icon = item.icon;

              return (
                <div
                  key={item.id}
                  onClick={() => setActiveIndex(index)}
                  className={`group flex items-center gap-2 sm:gap-4 lg:gap-6 cursor-pointer select-none transition-all duration-300 p-2 lg:p-0 rounded-lg lg:rounded-none shrink-0 ${
                    isActive
                      ? 'opacity-100 lg:translate-x-2 bg-white/5 lg:bg-transparent'
                      : 'opacity-35 hover:opacity-60'
                  }`}
                >
                  <span className="font-mono text-xs sm:text-sm lg:text-base tracking-widest text-[#F5F5F2]/50">
                    {item.id}
                  </span>

                  <h3 className="text-sm sm:text-2xl md:text-4xl lg:text-6xl font-normal tracking-tighter uppercase whitespace-nowrap lg:whitespace-normal">
                    {item.title}
                  </h3>

                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                        transition={{ type: 'spring', damping: 20, stiffness: 300 }}
                        className="w-6 h-6 sm:w-8 sm:h-8 lg:w-12 lg:h-12 rounded-full bg-[#F5F5F2] text-[#111111] flex items-center justify-center shrink-0 ml-1 sm:ml-2 shadow-lg"
                      >
                        <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 lg:w-6 lg:h-6" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Kolom Kanan: Kotak Detail & Tool Tags */}
          <div className="lg:col-span-5 bg-white/[0.03] border border-white/10 rounded-2xl sm:rounded-3xl p-4 sm:p-7 md:p-9 min-h-[240px] sm:min-h-[290px] flex flex-col justify-between">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className="flex flex-col justify-between h-full"
              >
                <div>
                  <div className="flex justify-between items-center font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-[#F5F5F2]/40 mb-2 sm:mb-3">
                    <span>STACK MATRIX</span>
                    <span>{activeCategory.metric}</span>
                  </div>

                  <h4 className="text-base sm:text-xl lg:text-2xl font-normal tracking-tight text-white mb-2 sm:mb-4">
                    {activeCategory.headline}
                  </h4>

                  <p className="text-xs sm:text-sm leading-relaxed text-[#F5F5F2]/75 font-light mb-4 sm:mb-6 line-clamp-3">
                    {activeCategory.description}
                  </p>
                </div>

                <div>
                  <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-[#F5F5F2]/40 block mb-2 sm:mb-3">
                    [ CORE TECHNOLOGIES ]
                  </span>
                  
                  {/* Tool Pill Tags */}
                  <div className="flex flex-wrap gap-1 sm:gap-1.5">
                    {activeCategory.tools.map((tool) => (
                      <span
                        key={tool}
                        className="font-mono text-[10px] sm:text-[11px] uppercase tracking-wider px-2 sm:px-3 py-1 sm:py-1.5 rounded-full bg-white/5 border border-white/15 text-[#F5F5F2]"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Bottom Status Navigation */}
        <div className="flex justify-between items-center text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] text-[#F5F5F2]/40 pt-3 sm:pt-4 border-t border-white/10">
          <div className="flex items-center gap-1.5 sm:gap-2">
            <span>SCROLL OR TAP TO SHIFT</span>
            <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 animate-pulse" />
          </div>
          <div>
            ACTIVE: [{activeCategory.title}]
          </div>
        </div>
      </div>
    </section>
  );
}
