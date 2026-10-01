import React from 'react';
import Marquee from 'react-fast-marquee';

export default function MarqueeSection() {
  return (
    <div className="py-12 border-y border-[#111111]/10 overflow-hidden select-none opacity-20 hover:opacity-50 transition-opacity duration-700">
      <Marquee autoFill speed={35} gradient={false}>
        <span className="text-[6vw] font-light uppercase tracking-tighter mx-10 text-[#111111]">
          COMPUTER VISION — MACHINE LEARNING — INTERACTION DESIGN — PYTHON — PYTORCH — LARAVEL —
        </span>
      </Marquee>
    </div>
  );
}
