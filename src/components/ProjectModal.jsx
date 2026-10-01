import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Github } from 'lucide-react';

export default function ProjectModal({ selectedProject, onClose }) {
  useEffect(() => {
    if (!selectedProject) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedProject, onClose]);

  if (typeof document === 'undefined') return null;

  return createPortal(
    <AnimatePresence>
      {selectedProject && (
        <div className="fixed inset-0 z-[9999] flex items-start sm:items-center justify-center p-4 sm:p-8 md:p-12 overflow-y-auto overscroll-contain">
          {/* Backdrop: Solid semi-transparan tanpa blur untuk performa ringan */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            style={{ willChange: 'opacity' }}
            className="fixed inset-0 bg-[#111111]/90 cursor-pointer"
          />

          {/* Modal Card: Mengambang di tengah (tidak memenuhi layar) dengan margin yang rapi */}
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 25, opacity: 0 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            style={{ willChange: 'opacity, transform' }}
            className="relative z-10 w-full max-w-4xl bg-[#F5F5F2] text-[#111111] shadow-2xl border border-[#111111]/20 overflow-hidden my-auto rounded-2xl"
          >
            {/* Close Button Minimalis */}
            <button
              onClick={onClose}
              className="absolute top-3.5 right-3.5 sm:top-5 sm:right-5 z-30 font-mono text-xs uppercase tracking-widest px-3 py-1.5 bg-[#F5F5F2] border border-[#111111]/20 hover:bg-[#111111] hover:text-[#F5F5F2] transition-colors duration-150 flex items-center gap-1 rounded shadow-sm"
              aria-label="Close modal"
            >
              <span>[ ✕ CLOSE ]</span>
            </button>

            {/* Konten Modal 2-Kolom Desktop / Stack Elegan Mobile */}
            <div className="flex flex-col md:flex-row max-h-[85vh] overflow-y-auto overscroll-contain">
              {/* Gambar Proyek */}
              <div className="w-full md:w-7/12 bg-[#E7E7E3] relative h-52 sm:h-72 md:h-auto min-h-[200px] md:min-h-[460px] overflow-hidden shrink-0">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.2em] bg-[#111111] text-[#F5F5F2] px-2.5 py-0.5 sm:px-3 sm:py-1 rounded">
                  INDEX {selectedProject.id} / {selectedProject.year}
                </div>
              </div>

              {/* Detail Teks & Stack */}
              <div className="w-full md:w-5/12 p-6 sm:p-8 md:p-10 flex flex-col justify-between">
                <div>
                  <div className="text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.2em] opacity-40 mb-2 sm:mb-3">
                    [{selectedProject.categoryLabel}]
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-normal tracking-tight leading-[1.1] mb-3 sm:mb-4">
                    {selectedProject.title}
                  </h2>
                  <p className="text-xs sm:text-sm leading-relaxed text-[#111111]/80 mb-6 font-light">
                    {selectedProject.description}
                  </p>

                  <div className="mb-6 sm:mb-8">
                    <p className="text-[9px] sm:text-[10px] font-mono uppercase tracking-[0.2em] opacity-40 mb-2 sm:mb-3">
                      [ STACK & ARCHITECTURE ]
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedProject.stack.map((tech) => (
                        <span
                          key={tech}
                          className="font-mono text-[10px] sm:text-[11px] uppercase tracking-wider px-2.5 py-1 bg-[#111111]/5 border border-[#111111]/10 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Tombol Aksi */}
                <div className="pt-4 sm:pt-6 border-t border-[#111111]/10 flex flex-wrap gap-3 font-mono text-xs uppercase tracking-widest">
                  {selectedProject.demo && (
                    <a
                      href={selectedProject.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1.5 px-4 py-2 sm:py-2.5 bg-[#111111] text-[#F5F5F2] hover:opacity-85 transition-opacity rounded"
                    >
                      <span>Launch View</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  )}
                  {selectedProject.github && (
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1.5 px-4 py-2 sm:py-2.5 border border-[#111111]/30 hover:bg-[#111111] hover:text-[#F5F5F2] transition-colors rounded"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>Source</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body
  );
}
