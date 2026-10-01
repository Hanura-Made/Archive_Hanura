import React, { useState, useEffect, useRef, useCallback, memo } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { CATEGORIES, ARCHIVE_ITEMS } from '../data/projects';
import ProjectModal from './ProjectModal';

export default function ProjectGallery({ lenisRef, onHoverItem, onLeaveItem }) {
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [selectedProject, setSelectedProject] = useState(null);

  // Lock scroll and pause Lenis strictly when modal is active
  useEffect(() => {
    if (selectedProject) {
      lenisRef?.current?.stop();
      document.body.style.overflow = 'hidden';
    } else {
      lenisRef?.current?.start();
      document.body.style.overflow = '';
    }

    return () => {
      lenisRef?.current?.start();
      document.body.style.overflow = '';
    };
  }, [selectedProject, lenisRef]);

  const handleSelectProject = useCallback((project) => {
    setSelectedProject(project);
  }, []);

  const handleCloseModal = useCallback(() => {
    setSelectedProject(null);
  }, []);

  const handleCategorySelect = useCallback((catId) => {
    setSelectedCategory(catId);
  }, []);

  const filteredItems = selectedCategory === 'ALL'
    ? ARCHIVE_ITEMS
    : ARCHIVE_ITEMS.filter((item) => item.categoryKey === selectedCategory);

  return (
    <>
      {/* Archive Index Filter Bar */}
      <FilterBar
        categories={CATEGORIES}
        selectedCategory={selectedCategory}
        onSelectCategory={handleCategorySelect}
        onLeaveItem={onLeaveItem}
      />

      {/* Memoized Gallery Grid - Will not re-render when modal opens */}
      <GalleryGrid
        items={filteredItems}
        onSelectProject={handleSelectProject}
        onHoverItem={onHoverItem}
        onLeaveItem={onLeaveItem}
      />

      {/* High-Performance Portal Modal */}
      <ProjectModal
        selectedProject={selectedProject}
        onClose={handleCloseModal}
      />
    </>
  );
}

const FilterBar = memo(function FilterBar({
  categories,
  selectedCategory,
  onSelectCategory,
  onLeaveItem,
}) {
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
                onMouseEnter={onLeaveItem}
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
});

const GalleryGrid = memo(function GalleryGrid({
  items,
  onSelectProject,
  onHoverItem,
  onLeaveItem,
}) {
  return (
    <section className="px-6 md:px-12 pb-32">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-12 gap-y-24 md:gap-x-12 md:gap-y-36">
          {items.map((item) => (
            <GalleryItem
              key={item.id}
              item={item}
              onSelect={onSelectProject}
              onMouseEnter={onHoverItem}
              onMouseLeave={onLeaveItem}
            />
          ))}
        </div>
      </div>
    </section>
  );
});

const GalleryItem = memo(function GalleryItem({
  item,
  onSelect,
  onMouseEnter,
  onMouseLeave,
}) {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const yParallax = useTransform(scrollYProgress, [0, 1], ['-6%', '6%']);

  return (
    <div
      className={`${item.span || 'col-span-12 md:col-span-6'} group`}
      ref={containerRef}
    >
      <div className="flex justify-between items-center text-[11px] font-mono uppercase tracking-[0.2em] mb-4 pb-2 border-b border-[#111111]/10">
        <span className="opacity-40">[{item.id}]</span>
        <span className="opacity-40">{item.categoryLabel}</span>
        <span className="opacity-40">{item.year}</span>
      </div>

      <div
        onClick={() => onSelect(item)}
        onMouseEnter={() => onMouseEnter?.(item.categoryKey)}
        onMouseLeave={onMouseLeave}
        className={`relative ${item.aspect || 'aspect-[16/10]'} w-full overflow-hidden bg-[#E7E7E3] cursor-pointer select-none`}
      >
        <motion.div
          style={{ y: yParallax }}
          className="w-full h-[116%] -top-[8%] relative will-change-transform"
        >
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover will-change-transform group-hover:scale-105 transition-transform duration-500 ease-out"
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
    </div>
  );
});
