import React from 'react';
import { Palette, Layers, Zap, Monitor } from 'lucide-react';

export const Stage2Frontend: React.FC = () => {
  return (
    <div className="flex flex-col gap-4 font-mono select-none">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2.5 border-b border-[#2e334a]">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-[#55FFFF]/20 text-[#55FFFF] flex items-center justify-center border-2 border-[#55FFFF]">
            <Palette className="w-6 h-6" />
          </div>
          <h3 className="text-base sm:text-lg font-extrabold text-white font-sans uppercase">
            02. FRONTEND — THE 3-LAYER STACKED ANATOMY
          </h3>
        </div>
        <div className="flex items-center gap-2 text-xs font-bold text-[#55FFFF] px-2.5 py-1 bg-[#090a10] border border-[#55FFFF]/40 w-fit">
          <Monitor className="w-4 h-4" />
          <span>Runs in Visitor's Browser Engine</span>
        </div>
      </div>

      {/* 3-Layer Stacked Slices with Bold Headers */}
      <div className="flex flex-col gap-3">
        {/* Layer 1: HTML5 */}
        <div className="p-3.5 bg-[#090a10] border-l-4 border-[#FFAA00] border-y border-r border-[#2e334a] flex flex-col sm:flex-row sm:items-center justify-between gap-2 shadow-pixel">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-[#FFAA00]/20 text-[#FFAA00] flex items-center justify-center font-extrabold text-sm border border-[#FFAA00]">
              01
            </div>
            <div>
              <h4 className="text-sm font-extrabold text-white uppercase">HTML5 — Structure & Skeleton</h4>
              <p className="text-xs text-zinc-300 font-medium">Buttons, headings, forms, images, and text input boxes.</p>
            </div>
          </div>
          <span className="text-xs text-[#FFAA00] bg-[#121420] px-3 py-1 border border-[#383e58] shrink-0 font-extrabold">
            {'<button>Sign Up</button>'}
          </span>
        </div>

        {/* Layer 2: CSS3 */}
        <div className="p-3.5 bg-[#090a10] border-l-4 border-[#55FFFF] border-y border-r border-[#2e334a] flex flex-col sm:flex-row sm:items-center justify-between gap-2 shadow-pixel">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-[#55FFFF]/20 text-[#55FFFF] flex items-center justify-center font-extrabold text-sm border border-[#55FFFF]">
              02
            </div>
            <div>
              <h4 className="text-sm font-extrabold text-white uppercase">CSS3 / Tailwind — Presentation & Skin</h4>
              <p className="text-xs text-zinc-300 font-medium">Colors, dark mode, pixel borders, and responsive grid layouts.</p>
            </div>
          </div>
          <span className="text-xs text-[#55FFFF] bg-[#121420] px-3 py-1 border border-[#383e58] shrink-0 font-extrabold">
            {'bg-[#0088FF] border-2'}
          </span>
        </div>

        {/* Layer 3: JS / React */}
        <div className="p-3.5 bg-[#090a10] border-l-4 border-[#55FF55] border-y border-r border-[#2e334a] flex flex-col sm:flex-row sm:items-center justify-between gap-2 shadow-pixel">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-[#55FF55]/20 text-[#55FF55] flex items-center justify-center font-extrabold text-sm border border-[#55FF55]">
              03
            </div>
            <div>
              <h4 className="text-sm font-extrabold text-white uppercase">JavaScript / React — Muscle & Behavior</h4>
              <p className="text-xs text-zinc-300 font-medium">Click handling, live state updates, and API network requests.</p>
            </div>
          </div>
          <span className="text-xs text-[#55FF55] bg-[#121420] px-3 py-1 border border-[#383e58] shrink-0 font-extrabold">
            {'onClick={() => saveNote()}'}
          </span>
        </div>
      </div>

      {/* Bottom Summary Bar */}
      <div className="p-3 bg-[#121420] border border-[#2e334a] flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-zinc-200">
        <span>💡 <strong>Analogy:</strong> HTML builds the house, CSS paints the walls, JavaScript opens the garage door.</span>
        <span className="text-[#55FFFF] font-extrabold shrink-0">Tools: React, Vite, Tailwind CSS</span>
      </div>
    </div>
  );
};
