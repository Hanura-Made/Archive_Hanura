import React from 'react';
import { ArrowUpRight, Github, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-[#111111]/10 px-6 md:px-12 pt-20 pb-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-12 mb-20">
        <div>
          <p className="text-[11px] font-mono uppercase tracking-[0.25em] opacity-40 mb-4">
            [ INQUIRIES ]
          </p>
          <a
            href="mailto:hello@hanura.com"
            className="text-2xl md:text-4xl font-normal hover:opacity-50 transition-opacity underline underline-offset-8 decoration-1"
          >
            hello@hanura.com
          </a>
        </div>

        <div className="flex flex-wrap gap-8 text-[11px] font-mono uppercase tracking-[0.2em]">
          <a
            href="https://github.com/Hanura-Made"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 hover:opacity-50 transition-opacity"
          >
            <Github className="w-3.5 h-3.5" />
            <span>GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/made-hanura/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 hover:opacity-50 transition-opacity"
          >
            <Linkedin className="w-3.5 h-3.5" />
            <span>LinkedIn</span>
          </a>
          <a
            href="https://hanuraporto90.vercel.app/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 hover:opacity-50 transition-opacity"
          >
            <ArrowUpRight className="w-3.5 h-3.5" />
            <span>Legacy V1</span>
          </a>
        </div>
      </div>

      <div className="flex justify-between items-center text-[10px] font-mono uppercase tracking-[0.25em] opacity-35 pt-8 border-t border-[#111111]/5">
        <span>HANURA © 2026</span>
        <span>ALL RIGHTS RESERVED</span>
      </div>
    </footer>
  );
}
