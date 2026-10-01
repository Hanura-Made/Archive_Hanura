import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function GalleryCard({ item, onSelect, onMouseEnter, onMouseLeave }) {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const yParallax = useTransform(scrollYProgress, [0, 1], ['-8%', '8%']);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.88 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.88 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={`${item.span || 'col-span-12 md:col-span-6'} group`}
      ref={containerRef}
    >
      <div className="flex justify-between items-center text-[11px] font-mono uppercase tracking-[0.2em] mb-4 pb-2 border-b border-[#111111]/10">
        <span className="opacity-40">[{item.id}]</span>
        <span className="opacity-40">{item.categoryLabel}</span>
        <span className="opacity-40">{item.year}</span>
      </div>

      <div
        onClick={onSelect}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        className={`relative ${item.aspect || 'aspect-[16/10]'} w-full overflow-hidden bg-[#E7E7E3] cursor-none select-none`}
      >
        <motion.div
          style={{ y: yParallax }}
          className="w-full h-[122%] -top-[11%] relative"
        >
          <motion.img
            layoutId={`project-image-${item.id}`}
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover will-change-transform"
            transition={{ type: 'spring', damping: 28, stiffness: 260 }}
            loading="lazy"
          />
        </motion.div>

        {/* Hover Masking Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/85 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 md:p-8 pointer-events-none">
          <div className="text-white">
            <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-[#F5F5F2]/70 block mb-1">
              [ CLICK TO INSPECT ]
            </span>
            <h3 className="text-2xl md:text-3xl font-normal tracking-tight">
              {item.title}
            </h3>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
