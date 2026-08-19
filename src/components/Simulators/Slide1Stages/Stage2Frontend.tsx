import React from 'react';
import { Palette, Layers, Sparkles, Zap, Monitor, Smartphone } from 'lucide-react';

export const Stage2Frontend: React.FC = () => {
  return (
    <div className="flex flex-col gap-4 font-mono select-none">
      {/* Header */}
      <div className="flex items-center justify-between pb-2 border-b border-[#2e334a]">
        <div className="flex items-center gap-2">
          <Palette className="w-5 h-5 text-[#55FFFF]" />
          <h3 className="text-sm sm:text-base font-bold text-white font-sans uppercase">
            02. FRONTEND — THE 3-LAYER STACKED ANATOMY
          </h3>
        </div>
        <div className="flex items-center gap-2 text-xs text-[#55FFFF]">
          <Monitor className="w-4 h-4" />
          <span>Runs in Visitor's Browser</span>
        </div>
      </div>

      {/* Unique Template: 3-Layer Stacked Horizontal Slices */}
      <div className="flex flex-col gap-2.5">
        {/* Layer 1: HTML5 */}
        <div className="p-3 bg-[#090a10] border-l-4 border-[#FFAA00] border-y border-r border-[#2e334a] flex flex-col sm:flex-row sm:items-center justify-between gap-2 shadow-pixel">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 bg-[#FFAA00]/20 text-[#FFAA00] flex items-center justify-center font-bold text-xs border border-[#FFAA00]/40">
              01
            </div>
            <div>
              <h4 className="text-xs font-bold text-white uppercase">HTML5 — Structure & Skeleton</h4>
              <p className="text-[11px] text-zinc-400">Buttons, headings, forms, images, and text inputs.</p>
            </div>
          </div>
          <span className="text-[10px] text-[#FFAA00] bg-[#121420] px-2 py-0.5 border border-[#383e58] shrink-0 font-bold">
            &lt;button&gt;Sign Up&lt;/button&gt;
          </span>
        </div>

        {/* Layer 2: CSS3 */}
        <div className="p-3 bg-[#090a10] border-l-4 border-[#55FFFF] border-y border-r border-[#2e334a] flex flex-col sm:flex-row sm:items-center justify-between gap-2 shadow-pixel">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 bg-[#55FFFF]/20 text-[#55FFFF] flex items-center justify-center font-bold text-xs border border-[#55FFFF]/40">
              02
            </div>
            <div>
              <h4 className="text-xs font-bold text-white uppercase">CSS3 / Tailwind — Presentation & Skin</h4>
              <p className="text-[11px] text-zinc-400">Colors, dark mode, pixel borders, flexbox & responsive grid layouts.</p>
            </div>
          </div>
          <span className="text-[10px] text-[#55FFFF] bg-[#121420] px-2 py-0.5 border border-[#383e58] shrink-0 font-bold">
            bg-[#0088FF] border-2
          </span>
        </div>

        {/* Layer 3: JS / React */}
        <div className="p-3 bg-[#090a10] border-l-4 border-[#55FF55] border-y border-r border-[#2e334a] flex flex-col sm:flex-row sm:items-center justify-between gap-2 shadow-pixel">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 bg-[#55FF55]/20 text-[#55FF55] flex items-center justify-center font-bold text-xs border border-[#55FF55]/40">
              03
            </div>
            <div>
              <h4 className="text-xs font-bold text-white uppercase">JavaScript / React — Muscle & Behavior</h4>
              <p className="text-[11px] text-zinc-400">Click handling, state updates, modal popups, and API requests.</p>
            </div>
          </div>
          <span className="text-[10px] text-[#55FF55] bg-[#121420] px-2 py-0.5 border border-[#383e58] shrink-0 font-bold">
            onClick=&#123;saveNote&#125;
          </span>
        </div>
      </div>

      {/* Bottom Summary Bar */}
      <div className="p-2.5 bg-[#121420] border border-[#2e334a] flex items-center justify-between text-xs text-zinc-300">
        <span>💡 <strong>Analogy:</strong> HTML builds the house, CSS paints the walls, JavaScript opens the garage door.</span>
        <span className="text-[#55FFFF] font-bold hidden sm:inline">Tools: React, Vite, Tailwind CSS</span>
      </div>
    </div>
  );
};
