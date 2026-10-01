import React from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor({ smoothX, smoothY, cursorVariant, cursorMetadata }) {
  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full mix-blend-difference hidden md:flex flex-col items-center justify-center -translate-x-1/2 -translate-y-1/2"
      style={{
        x: smoothX,
        y: smoothY,
      }}
      animate={{
        width: cursorVariant === 'gallery' ? 100 : cursorVariant === 'hidden' ? 0 : 8,
        height: cursorVariant === 'gallery' ? 100 : cursorVariant === 'hidden' ? 0 : 8,
        backgroundColor: '#FFFFFF',
        color: '#111111',
        opacity: cursorVariant === 'hidden' ? 0 : 1,
      }}
      transition={{ type: 'spring', damping: 25, stiffness: 280 }}
    >
      {cursorVariant === 'gallery' && (
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.7 }}
          className="flex flex-col items-center justify-center text-center px-2 pointer-events-none"
        >
          <span className="font-mono font-bold text-[10px] tracking-widest uppercase">
            EXPLORE
          </span>
          {cursorMetadata && (
            <span className="font-mono text-[8px] tracking-[0.2em] opacity-60 uppercase mt-0.5">
              [{cursorMetadata}]
            </span>
          )}
        </motion.div>
      )}
    </motion.div>
  );
}
