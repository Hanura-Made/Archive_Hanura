import React from 'react';

export default function FilterBar({ categories, selectedCategory, onSelectCategory, onCursorReset }) {
  return (
    <section id="gallery" className="px-6 md:px-12 pt-20 pb-8">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between sm:items-center gap-6 border-b border-[#111111]/10 pb-6">
        <div className="text-[11px] font-mono uppercase tracking-[0.25em] opacity-40">
          [ ARCHIVE INDEX / FILTER ]
        </div>
        <div className="flex flex-wrap gap-2 md:gap-3">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                onMouseEnter={onCursorReset}
                className={`font-mono text-xs uppercase tracking-[0.2em] px-3.5 py-1.5 transition-all duration-300 border ${
                  isActive
                    ? 'bg-[#111111] text-[#F5F5F2] border-[#111111]'
                    : 'bg-transparent text-[#111111] border-[#111111]/20 hover:border-[#111111]'
                }`}
              >
                [ {cat.label} ]
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
