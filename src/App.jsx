import React, { useEffect, useState, useRef } from 'react';
import { useSpring, useMotionValue } from 'framer-motion';
import Lenis from '@studio-freight/lenis';

import { ARCHIVE_ITEMS } from './data/projects';
import CustomCursor from './components/CustomCursor';
import Header from './components/Header';
import Hero from './components/Hero';
import ProjectShowcase from './components/ProjectShowcase';
import ToolsAndSkillsScroll from './components/ToolsAndSkillsScroll';
import MarqueeSection from './components/MarqueeSection';
import Statement from './components/Statement';
import Footer from './components/Footer';

export default function App() {
  const [cursorVariant, setCursorVariant] = useState('default');
  const [cursorMetadata, setCursorMetadata] = useState(null);

  const lenisRef = useRef(null);
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 28, stiffness: 300, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothTouch: false,
    });
    lenisRef.current = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      lenis.destroy();
    };
  }, [mouseX, mouseY]);

  const handleHoverItem = (categoryKey) => {
    setCursorVariant('gallery');
    setCursorMetadata(categoryKey);
  };

  const handleLeaveItem = () => {
    setCursorVariant('default');
    setCursorMetadata(null);
  };

  return (
    <div className="bg-[#F5F5F2] text-[#111111] min-h-screen selection:bg-[#111111] selection:text-[#F5F5F2] font-sans antialiased w-full">
      <CustomCursor
        smoothX={smoothX}
        smoothY={smoothY}
        cursorVariant={cursorVariant}
        cursorMetadata={cursorMetadata}
      />

      <Header />

      <Hero totalEntries={ARCHIVE_ITEMS.length} />

      {/* Stacked Sticky Cards Showcase */}
      <ProjectShowcase
        onHoverItem={handleHoverItem}
        onLeaveItem={handleLeaveItem}
      />

      {/* Scroll-Driven Tools & Capabilities Section */}
      <ToolsAndSkillsScroll />

      <MarqueeSection />

      <Statement />

      <Footer />
    </div>
  );
}
