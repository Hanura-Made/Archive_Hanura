import React, { useState, useCallback, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Github } from 'lucide-react';
import { CATEGORIES, ARCHIVE_ITEMS } from '../data/projects';
import ProjectModal from './ProjectModal';

// Skema warna kontras bergantian untuk ilusi tumpukan folder
const CARD_THEMES = [
  {
    bg: 'bg-[#111111]',
    text: 'text-[#F5F5F2]',
    subText: 'text-[#F5F5F2]/50',
    border: 'border-white/15',
    tagBg: 'bg-white/10',
    accentText: 'text-[#F5F5F2]/80',
    btnBg: 'bg-[#F5F5F2]',
    btnText: 'text-[#111111]',
  },
  {
    bg: 'bg-[#F5F5F2]',
    text: 'text-[#111111]',
    subText: 'text-[#111111]/50',
    border: 'border-black/15',
    tagBg: 'bg-black/5',
    accentText: 'text-[#111111]/80',
    btnBg: 'bg-[#111111]',
    btnText: 'text-[#F5F5F2]',
  },
  {
    bg: 'bg-[#1A1A1C]',
    text: 'text-[#F5F5F2]',
    subText: 'text-[#F5F5F2]/50',
    border: 'border-white/15',
    tagBg: 'bg-white/10',
    accentText: 'text-[#F5F5F2]/80',
    btnBg: 'bg-[#F5F5F2]',
    btnText: 'text-[#111111]',
  },
  {
    bg: 'bg-[#EAEAE4]',
    text: 'text-[#111111]',
    subText: 'text-[#111111]/50',
    border: 'border-black/15',
    tagBg: 'bg-black/5',
    accentText: 'text-[#111111]/80',
    btnBg: 'bg-[#111111]',
    btnText: 'text-[#F5F5F2]',
  },
  {
    bg: 'bg-[#0E0E10]',
    text: 'text-[#F5F5F2]',
    subText: 'text-[#F5F5F2]/50',
    border: 'border-white/15',
    tagBg: 'bg-white/10',
    accentText: 'text-[#F5F5F2]/80',
    btnBg: 'bg-[#F5F5F2]',
    btnText: 'text-[#111111]',
  },
  {
    bg: 'bg-[#FFFFFF]',
    text: 'text-[#111111]',
    subText: 'text-[#111111]/50',
    border: 'border-black/15',
    tagBg: 'bg-black/5',
    accentText: 'text-[#111111]/80',
    btnBg: 'bg-[#111111]',
    btnText: 'text-[#F5F5F2]',
  },
];

export default function ProjectShowcase({ onHoverItem, onLeaveItem }) {
  const [activeFilter, setActiveFilter] = useState('ALL');
  const [selectedProject, setSelectedProject] = useState(null);

  const handleSelectProject = useCallback((project) => {
    setSelectedProject(project);
  }, []);

  const handleCloseModal = useCallback(() => {
    setSelectedProject(null);
  }, []);

  // Filter dinamis
  const filteredProjects = activeFilter === 'ALL'
    ? ARCHIVE_ITEMS
    : ARCHIVE_ITEMS.filter((item) => item.categoryKey === activeFilter);

  return (
    <section id="gallery" className="relative w-full">
      {/* Intro Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 pt-16 sm:pt-24 pb-8 sm:pb-10 flex flex-col sm:flex-row justify-between sm:items-end gap-3 sm:gap-4 border-b border-[#111111]/10">
        <div>
          <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.25em] opacity-40 block mb-1.5 sm:mb-2">
            [ STACKED ARCHIVE ]
          </span>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-normal tracking-tight">
            Selected Works
          </h2>
        </div>
        <div className="font-mono text-[11px] sm:text-xs uppercase tracking-[0.2em] opacity-40">
          SHOWING [{filteredProjects.length.toString().padStart(2, '0')}/{ARCHIVE_ITEMS.length.toString().padStart(2, '0')}]
        </div>
      </div>

      {/* Floating / Sticky Filter Navigation Pill */}
      <div className="sticky top-4 sm:top-6 z-[60] flex justify-center w-full py-2.5 sm:py-4 pointer-events-none px-3 sm:px-4">
        <div className="pointer-events-auto bg-[#111111] text-[#F5F5F2] border border-[#111111]/30 rounded-full p-1 sm:p-1.5 shadow-[0_10px_30px_rgba(0,0,0,0.25)] flex flex-wrap justify-center items-center gap-1 max-w-[95vw]">
          {CATEGORIES.map((cat) => {
            const isActive = activeFilter === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                className={`font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.14em] sm:tracking-[0.18em] px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full transition-all duration-200 ${
                  isActive
                    ? 'bg-[#F5F5F2] text-[#111111] font-semibold shadow-sm'
                    : 'text-[#F5F5F2]/60 hover:text-[#F5F5F2] hover:bg-white/10'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Sticky Stacking Container */}
      <div className="relative w-full">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((item, index) => {
            const theme = CARD_THEMES[index % CARD_THEMES.length];
            const zIndex = (index + 1) * 10;
            // Responsive top offset agar tidak terpotong pada mobile
            const topOffset = `calc(clamp(52px, 8vh, 76px) + ${index * 16}px)`;

            return (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  zIndex,
                  top: topOffset,
                }}
                className="sticky h-screen w-full flex flex-col items-center justify-start px-3 sm:px-6 md:px-12 pt-3 sm:pt-6 pointer-events-none"
              >
                {/* Kartu Proyek Utama */}
                <div
                  onClick={() => handleSelectProject(item)}
                  onMouseEnter={() => onHoverItem?.(item.categoryKey)}
                  onMouseLeave={onLeaveItem}
                  className={`pointer-events-auto w-full max-w-7xl h-[82vh] sm:h-[80vh] rounded-2xl sm:rounded-3xl ${theme.bg} ${theme.text} ${theme.border} border shadow-[0_-10px_35px_rgba(0,0,0,0.15)] overflow-hidden cursor-pointer select-none flex flex-col justify-between transition-transform duration-300 hover:-translate-y-1`}
                >
                  {/* Folder Tab Header */}
                  <div className={`px-4 sm:px-10 py-3 sm:py-4 border-b ${theme.border} flex justify-between items-center text-[11px] sm:text-xs font-mono uppercase tracking-[0.2em]`}>
                    <div className="flex items-center gap-2.5 sm:gap-4">
                      <span className="font-bold text-xs sm:text-sm">[{item.id}]</span>
                      <span className={theme.subText}>{item.categoryKey}</span>
                    </div>
                    <div className="flex items-center gap-2 sm:gap-3">
                      <span className={theme.subText}>[ {item.year} ]</span>
                      <span className="hidden sm:inline opacity-30">•</span>
                      <span className="font-mono text-[9px] sm:text-[10px] tracking-widest opacity-75">
                        INSPECT ↗
                      </span>
                    </div>
                  </div>

                  {/* Body Konten Kartu (Responsive: Stack di mobile, 2 kolom di desktop) */}
                  <div className="p-4 sm:p-8 md:p-10 flex flex-col lg:grid lg:grid-cols-12 gap-4 sm:gap-6 lg:gap-12 flex-1 justify-between overflow-y-auto lg:overflow-hidden">
                    {/* Visual Preview (Di mobile di atas agar mata langsung menangkap gambar) */}
                    <div className="w-full lg:col-span-6 relative rounded-xl sm:rounded-2xl overflow-hidden bg-black/10 h-36 sm:h-52 lg:h-full max-h-[380px] shrink-0 order-first lg:order-last">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover will-change-transform group-hover:scale-105 transition-transform duration-700 ease-out"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 pointer-events-none" />
                      <div className="absolute bottom-2.5 right-2.5 sm:bottom-4 sm:right-4 font-mono text-[8px] sm:text-[9px] uppercase tracking-[0.2em] bg-black/75 text-white px-2 py-0.5 rounded pointer-events-none">
                        INDEX [{item.id}/{ARCHIVE_ITEMS.length.toString().padStart(2, '0')}]
                      </div>
                    </div>

                    {/* Sisi Kiri: Teks & Metadata */}
                    <div className="w-full lg:col-span-6 flex flex-col justify-between py-1 sm:py-2">
                      <div>
                        <span className={`font-mono text-[10px] sm:text-xs uppercase tracking-[0.22em] ${theme.subText} block mb-1.5 sm:mb-3`}>
                          {item.categoryLabel}
                        </span>

                        <h3 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight leading-[1.1] mb-2 sm:mb-4">
                          {item.title}
                        </h3>

                        <p className={`text-xs sm:text-sm md:text-base leading-relaxed ${theme.accentText} max-w-md font-light mb-3 sm:mb-6 line-clamp-2 sm:line-clamp-3`}>
                          {item.description}
                        </p>
                      </div>

                      <div>
                        {/* Tech Stack Chips */}
                        <div className="flex flex-wrap gap-1 sm:gap-1.5 mb-3 sm:mb-6">
                          {item.stack.slice(0, 4).map((tech) => (
                            <span
                              key={tech}
                              className={`font-mono text-[9px] sm:text-[10px] uppercase tracking-wider px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full ${theme.tagBg} ${theme.border} border`}
                            >
                              {tech}
                            </span>
                          ))}
                          {item.stack.length > 4 && (
                            <span className={`font-mono text-[9px] sm:text-[10px] uppercase px-1.5 py-0.5 opacity-50`}>
                              +{item.stack.length - 4}
                            </span>
                          )}
                        </div>

                        {/* CTA Button */}
                        <div className="flex items-center gap-2.5 sm:gap-3">
                          <span className={`font-mono text-[11px] sm:text-xs uppercase tracking-widest px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-full ${theme.btnBg} ${theme.btnText} font-medium flex items-center gap-1.5 sm:gap-2 group`}>
                            <span>Inspect</span>
                            <ArrowUpRight className="w-3 sm:w-3.5 h-3 sm:h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                          </span>
                          {item.github && (
                            <a
                              href={item.github}
                              target="_blank"
                              rel="noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className={`p-2 sm:p-2.5 rounded-full ${theme.tagBg} ${theme.border} border hover:opacity-70 transition-opacity`}
                              aria-label="View Github"
                            >
                              <Github className="w-3.5 sm:w-4 h-3.5 sm:h-4" />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Lightweight Deep Dive Portal Modal */}
      <ProjectModal
        selectedProject={selectedProject}
        onClose={handleCloseModal}
      />
    </section>
  );
}
