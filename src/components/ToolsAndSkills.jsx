import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Code2,
  Cpu,
  Database,
  Sparkles,
  Layout,
  Palette,
  GitBranch,
} from 'lucide-react';

const SKILL_ROWS = [
  {
    id: "01",
    category: "SYSTEMS & DEV",
    title: "PYTHON & REACT",
    tools: "Python • JavaScript • React • Vite",
    icon: Code2,
    description: "Scalable frontend architectures, state lifecycle orchestration, reactive interfaces, and data automation.",
  },
  {
    id: "02",
    category: "SYSTEMS & DEV",
    title: "PHP & LARAVEL",
    tools: "PHP • Laravel 11 • MySQL • REST APIs",
    icon: Database,
    description: "Robust relational databases, authenticated internal governance systems, and automated Telegram bot webhooks.",
  },
  {
    id: "03",
    category: "INTELLIGENCE / AI",
    title: "PYTORCH & OPENCV",
    tools: "PyTorch • Vision Transformer (ViT) • OpenCV",
    icon: Cpu,
    description: "Deep learning models, self-attention rollout maps, biometric ocular feature pipelines, and computer vision algorithms.",
  },
  {
    id: "04",
    category: "INTELLIGENCE / AI",
    title: "MACHINE LEARNING",
    tools: "Scikit-Learn • Naive Bayes • CIELAB Colorimetry",
    icon: Sparkles,
    description: "Reflectance extraction, automated roast level classifiers, data preprocessing, and statistical evaluation.",
  },
  {
    id: "05",
    category: "VISUALS & DESIGN",
    title: "FIGMA & UI/UX",
    tools: "Figma • Spatial Design • Design Systems • Wireframing",
    icon: Layout,
    description: "Clean typography clamp scales, tactile micro-interactions, responsive grid logic, and high-fidelity interactive prototypes.",
  },
  {
    id: "06",
    category: "VISUALS & DESIGN",
    title: "ILLUSTRATOR & CANVA",
    tools: "Adobe Illustrator • Vector Graphic • Canva • Branding",
    icon: Palette,
    description: "Vector iconography, brutalist editorial assets, brand identities, and high-contrast digital exhibition media.",
  },
  {
    id: "07",
    category: "SYSTEMS & DEV",
    title: "GIT & VERSIONING",
    tools: "Git • GitHub • CI/CD Pipelines • CLI",
    icon: GitBranch,
    description: "Branching workflows, version control discipline, multi-environment deployments, and repository maintenance.",
  },
];

export default function ToolsAndSkills() {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section id="tools" className="relative w-full bg-[#111111] text-[#F5F5F2] py-28 md:py-40 px-6 md:px-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between md:items-end gap-6 pb-12 border-b border-white/15">
          <div>
            <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#F5F5F2]/40 block mb-3">
              [ CAPABILITIES & STACK ]
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight">
              Tools & Technical Craft
            </h2>
          </div>
          <div className="font-mono text-xs uppercase tracking-[0.2em] text-[#F5F5F2]/40">
            SYSTEMS • INTELLIGENCE • VISUALS
          </div>
        </div>

        {/* Skill Rows */}
        <div className="divide-y divide-white/10 mt-4">
          {SKILL_ROWS.map((row) => {
            const Icon = row.icon;
            const isHovered = hoveredId === row.id;

            return (
              <motion.div
                key={row.id}
                onMouseEnter={() => setHoveredId(row.id)}
                onMouseLeave={() => setHoveredId(null)}
                className={`py-8 md:py-10 grid grid-cols-1 md:grid-cols-12 items-center gap-6 transition-colors duration-300 cursor-default ${
                  isHovered ? 'bg-white/[0.03]' : ''
                }`}
              >
                {/* Kolom Kiri: Nomor & Judul Keahlian */}
                <div className="md:col-span-5 flex items-baseline gap-4 md:gap-6">
                  <span className="font-mono text-xs text-[#F5F5F2]/40 tracking-wider">
                    {row.id}
                  </span>
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#F5F5F2]/40 block mb-1">
                      {row.category}
                    </span>
                    <h3 className={`text-2xl sm:text-3xl md:text-4xl font-normal tracking-tighter transition-colors duration-300 ${
                      isHovered ? 'text-white' : 'text-[#F5F5F2]/80'
                    }`}>
                      {row.title}
                    </h3>
                  </div>
                </div>

                {/* Kolom Tengah: Ikon Melingkar Minimalis Dinamis */}
                <div className="md:col-span-2 flex items-center md:justify-center">
                  <motion.div
                    animate={{
                      scale: isHovered ? 1.15 : 1,
                      rotate: isHovered ? 8 : 0,
                      backgroundColor: isHovered ? '#F5F5F2' : 'transparent',
                      color: isHovered ? '#111111' : '#F5F5F2',
                      borderColor: isHovered ? '#F5F5F2' : 'rgba(255, 255, 255, 0.2)',
                    }}
                    transition={{ type: 'spring', damping: 20, stiffness: 280 }}
                    className="w-12 h-12 rounded-full border flex items-center justify-center text-[#F5F5F2]/70 shadow-sm"
                  >
                    <Icon className="w-5 h-5" />
                  </motion.div>
                </div>

                {/* Kolom Kanan: Tools & Deskripsi Singkat */}
                <div className="md:col-span-5 flex flex-col justify-center">
                  <div className="font-mono text-xs uppercase tracking-wider text-[#F5F5F2]/50 mb-2">
                    {row.tools}
                  </div>
                  <motion.p
                    animate={{
                      opacity: isHovered ? 1 : 0.65,
                      x: isHovered ? 4 : 0,
                    }}
                    transition={{ duration: 0.25 }}
                    className="text-sm font-light leading-relaxed text-[#F5F5F2] max-w-lg"
                  >
                    {row.description}
                  </motion.p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Footer Meta Summary */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-xs font-mono uppercase tracking-[0.2em] text-[#F5F5F2]/40">
          <span>EXPERTISE ARCHIVE / CONTINUOUS ITERATION</span>
          <span>AVAILABLE FOR FULL-STACK & ML COLLABORATION</span>
        </div>
      </div>
    </section>
  );
}
