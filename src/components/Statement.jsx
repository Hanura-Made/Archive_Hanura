import React from 'react';
import { motion } from 'framer-motion';

export default function Statement() {
  return (
    <section id="statement" className="py-36 md:py-52 px-6 md:px-12">
      <div className="max-w-5xl mx-auto">
        <p className="text-[11px] font-mono uppercase tracking-[0.3em] opacity-40 mb-10">
          [ STATEMENT ]
        </p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal tracking-tight leading-[1.02]"
        >
          Hanura. Building visual and functional experiments.
        </motion.h2>
      </div>
    </section>
  );
}
