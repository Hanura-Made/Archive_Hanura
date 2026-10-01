import React from 'react';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 md:px-12 py-6 mix-blend-difference text-white pointer-events-none">
      <span className="font-mono text-xs uppercase tracking-[0.25em] font-semibold pointer-events-auto">
        HANURA
      </span>
      <nav className="flex gap-8 text-[11px] font-mono uppercase tracking-[0.2em] pointer-events-auto">
        <a href="#gallery" className="hover:opacity-60 transition-opacity">Archive</a>
        <a href="#statement" className="hover:opacity-60 transition-opacity">Index</a>
        <a href="#contact" className="hover:opacity-60 transition-opacity">Contact</a>
      </nav>
    </header>
  );
}
