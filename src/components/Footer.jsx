import React from 'react';
import { ArrowUpRight, Github, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-[#111111]/10 px-4 sm:px-6 md:px-12 pt-14 sm:pt-20 pb-10 sm:pb-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-8 sm:gap-12 mb-14 sm:mb-20">
        <div>
          <p className="text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.25em] opacity-40 mb-3 sm:mb-4">
            [ INQUIRIES ]
          </p>
          <a
            href="mailto:hello@hanura.com"
            className="text-xl sm:text-2xl md:text-4xl font-normal hover:opacity-50 transition-opacity underline underline-offset-8 decoration-1 break-all"
          >
            hello@hanura.com
          </a>
        </div>

        <div className="flex flex-wrap gap-4 sm:gap-8 text-[11px] font-mono uppercase tracking-[0.2em]">
          <a
            href="https://github.com/Hanura-Made"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 hover:opacity-50 transition-opacity py-1"
          >
            <Github className="w-3.5 h-3.5" />
            <span>GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/made-hanura/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 hover:opacity-50 transition-opacity py-1"
          >
            <Linkedin className="w-3.5 h-3.5" />
            <span>LinkedIn</span>
          </a>
          <a
            href="https://hanuraporto90.vercel.app/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 hover:opacity-50 transition-opacity py-1"
          >
            <ArrowUpRight className="w-3.5 h-3.5" />
            <span>Legacy V1</span>
          </a>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 text-[9px] sm:text-[10px] font-mono uppercase tracking-[0.25em] opacity-35 pt-6 sm:pt-8 border-t border-[#111111]/5">
        <span>HANURA © 2026</span>
        <span>ALL RIGHTS RESERVED</span>
      </div>
    </footer>
  );
}
