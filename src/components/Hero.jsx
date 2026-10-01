import React from 'react';
import { motion } from 'framer-motion';

export default function Hero({ totalEntries }) {
  return (
    <section className="relative min-h-[92svh] flex flex-col justify-between pt-32 pb-14 px-6 md:px-12 border-b border-[#111111]/10">
      <div className="flex justify-between items-start text-[11px] font-mono uppercase tracking-[0.25em] opacity-40">
        <span>[ ARCHIVE / 2024—2026 ]</span>
        <span className="hidden md:inline">VISUALS • SYSTEMS • INTELLIGENCE</span>
        <span>BALI, ID</span>
      </div>

      <div className="my-auto py-8">
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-[12.5vw] leading-[0.85] font-normal tracking-[-0.04em] uppercase select-none break-words"
        >
          HANURA /<br />
          SELECTED<br />
          ARCHIVE
        </motion.h1>
      </div>

      <div className="flex justify-between items-end text-[11px] font-mono uppercase tracking-[0.25em] opacity-40">
        <span>SCROLL TO EXPLORE ↓</span>
        <span>{totalEntries.toString().padStart(2, '0')} ENTRIES</span>
      </div>
    </section>
  );
}
