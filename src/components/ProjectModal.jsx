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
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-8 md:p-12 overflow-y-auto">
          {/* Backdrop: Solid semi-transparan tanpa efek blur untuk penghematan GPU */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            style={{ willChange: 'opacity' }}
            className="fixed inset-0 bg-[#111111]/95 cursor-pointer"
          />

          {/* Modal Container: Super ringan (hanya y & opacity, tanpa scale) + Hardware Acceleration */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 30, opacity: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            style={{ willChange: 'opacity, transform' }}
            className="relative z-10 w-full max-w-5xl bg-[#F5F5F2] text-[#111111] shadow-2xl border border-[#111111]/20 overflow-hidden my-auto"
          >
            {/* Close Button: Warna solid tanpa blur */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 z-30 font-mono text-xs sm:text-sm uppercase tracking-widest px-4 py-2 bg-[#F5F5F2] border border-[#111111]/20 hover:bg-[#111111] hover:text-[#F5F5F2] transition-colors duration-150 flex items-center gap-1.5"
              aria-label="Close modal"
            >
              <span>[ ✕ CLOSE ]</span>
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-12 max-h-[88vh] overflow-y-auto">
              {/* Image Section */}
              <div className="lg:col-span-7 bg-[#E7E7E3] relative min-h-[300px] lg:min-h-[560px] overflow-hidden">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-4 left-4 font-mono text-[10px] uppercase tracking-[0.25em] bg-[#111111] text-[#F5F5F2] px-3 py-1">
                  INDEX {selectedProject.id} / {selectedProject.year}
                </div>
              </div>

              {/* Details Section */}
              <div className="lg:col-span-5 p-6 sm:p-10 md:p-12 flex flex-col justify-between">
                <div>
                  <div className="text-[11px] font-mono uppercase tracking-[0.25em] opacity-40 mb-3">
                    [{selectedProject.categoryLabel}]
                  </div>
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight leading-[1.05] mb-6">
                    {selectedProject.title}
                  </h2>
                  <p className="text-sm sm:text-base leading-relaxed text-[#111111]/80 mb-8 font-light">
                    {selectedProject.description}
                  </p>

                  <div className="mb-10">
                    <p className="text-[10px] font-mono uppercase tracking-[0.25em] opacity-40 mb-3">
                      [ STACK & ARCHITECTURE ]
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedProject.stack.map((tech) => (
                        <span
                          key={tech}
                          className="font-mono text-[11px] uppercase tracking-wider px-2.5 py-1 bg-[#111111]/5 border border-[#111111]/10"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-[#111111]/10 flex flex-wrap gap-4 font-mono text-xs uppercase tracking-widest">
                  {selectedProject.demo && (
                    <a
                      href={selectedProject.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1.5 px-4 py-2.5 bg-[#111111] text-[#F5F5F2] hover:opacity-85 transition-opacity"
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
                      className="flex items-center gap-1.5 px-4 py-2.5 border border-[#111111]/30 hover:bg-[#111111] hover:text-[#F5F5F2] transition-colors"
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
