import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Palette, Sparkles, Layers, Zap } from 'lucide-react';
import { sound } from '../../../utils/sound';

export const Stage2Frontend: React.FC = () => {
  const [activeLayer, setActiveLayer] = useState<'html' | 'css' | 'js'>('js');
  const [clicks, setClicks] = useState<number>(0);

  return (
    <div className="flex flex-col gap-4 font-mono select-none">
      {/* Stage Header */}
      <div className="flex items-center justify-between pb-2 border-b border-[#2e334a]">
        <div className="flex items-center gap-2">
          <Palette className="w-5 h-5 text-[#55FFFF]" />
          <h3 className="text-sm sm:text-base font-bold text-white font-sans uppercase">
            STAGE 02: FRONTEND — THE CLIENT-SIDE UI
          </h3>
        </div>
        <span className="text-xs text-[#55FFFF] font-bold hidden sm:inline">
          Runs directly in the visitor's browser (V8 Engine)
        </span>
      </div>

      {/* 3 Interactive Pillars Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {/* HTML */}
        <button
          onClick={() => { sound.click(); setActiveLayer('html'); }}
          className={`p-3 text-left transition-all border-2 cursor-pointer shadow-pixel ${
            activeLayer === 'html' ? 'bg-[#181b2c] border-[#FFAA00]' : 'bg-[#090a10] border-[#2e334a]'
          }`}
        >
          <div className="flex items-center justify-between mb-1">
            <span className="text-[10px] font-bold text-[#FFAA00]">01. HTML5</span>
            <Layers className="w-4 h-4 text-[#FFAA00]" />
          </div>
          <h4 className="text-xs font-bold text-white uppercase">The Skeleton</h4>
          <p className="text-[11px] text-zinc-300 mt-1">
            Defines buttons, inputs, headers & structure.
          </p>
          <code className="block mt-2 p-1.5 bg-[#000000] text-[10px] text-[#FFAA00]">
            &lt;button&gt;Save Note&lt;/button&gt;
          </code>
        </button>

        {/* CSS */}
        <button
          onClick={() => { sound.click(); setActiveLayer('css'); }}
          className={`p-3 text-left transition-all border-2 cursor-pointer shadow-pixel ${
            activeLayer === 'css' ? 'bg-[#181b2c] border-[#55FFFF]' : 'bg-[#090a10] border-[#2e334a]'
          }`}
        >
          <div className="flex items-center justify-between mb-1">
            <span className="text-[10px] font-bold text-[#55FFFF]">02. CSS3 / TAILWIND</span>
            <Palette className="w-4 h-4 text-[#55FFFF]" />
          </div>
          <h4 className="text-xs font-bold text-white uppercase">The Presentation</h4>
          <p className="text-[11px] text-zinc-300 mt-1">
            Pixel borders, cyan colors, and responsive layouts.
          </p>
          <code className="block mt-2 p-1.5 bg-[#000000] text-[10px] text-[#55FFFF]">
            bg-[#0088FF] border-2 shadow-pixel
          </code>
        </button>

        {/* JS / REACT */}
        <button
          onClick={() => { sound.click(); setActiveLayer('js'); }}
          className={`p-3 text-left transition-all border-2 cursor-pointer shadow-pixel ${
            activeLayer === 'js' ? 'bg-[#181b2c] border-[#55FF55]' : 'bg-[#090a10] border-[#2e334a]'
          }`}
        >
          <div className="flex items-center justify-between mb-1">
            <span className="text-[10px] font-bold text-[#55FF55]">03. REACT / JS</span>
            <Zap className="w-4 h-4 text-[#55FF55]" />
          </div>
          <h4 className="text-xs font-bold text-white uppercase">The Reactivity</h4>
          <p className="text-[11px] text-zinc-300 mt-1">
            Handles user clicks, state & API fetch calls.
          </p>
          <code className="block mt-2 p-1.5 bg-[#000000] text-[10px] text-[#55FF55]">
            onClick=&#123;() =&gt; saveNote()&#125;
          </code>
        </button>
      </div>

      {/* Interactive Live Sandbox Preview Box */}
      <div className="p-4 bg-[#090a10] border-2 border-[#55FFFF] shadow-pixel flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <span className="text-[10px] text-zinc-400 font-bold uppercase block">
            LIVE CLIENT-SIDE COMPONENT PREVIEW:
          </span>
          <p className="text-xs text-zinc-300 mt-0.5">
            Clicks recorded by browser state: <strong className="text-[#55FF55]">{clicks}</strong>
          </p>
        </div>

        <button
          onClick={() => {
            sound.click();
            setClicks(prev => prev + 1);
            if (clicks > 0 && clicks % 3 === 0) sound.success();
          }}
          className={`px-5 py-2.5 text-xs cursor-pointer flex items-center gap-2 transition-all ${
            activeLayer === 'html'
              ? 'bg-gray-300 text-black border border-gray-600 font-serif'
              : activeLayer === 'css'
              ? 'pixel-btn pixel-btn-primary'
              : 'pixel-btn pixel-btn-primary shadow-glow-diamond'
          }`}
        >
          <Sparkles className="w-4 h-4 text-[#55FFFF]" />
          <span>SAVE NOTE TO BROWSER</span>
        </button>
      </div>
    </div>
  );
};
