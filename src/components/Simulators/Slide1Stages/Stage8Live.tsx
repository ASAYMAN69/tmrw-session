import React from 'react';
import { Rocket, Monitor, Server, Database, Globe } from 'lucide-react';

export const Stage8Live: React.FC = () => {
  return (
    <div className="flex flex-col gap-4 font-mono select-none">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-[#2e334a]">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#55FF55]/20 text-[#55FF55] flex items-center justify-center border-2 border-[#55FF55]">
            <Rocket className="w-6 h-6" />
          </div>
          <h3 className="text-lg sm:text-xl font-black text-white font-sans uppercase">
            08. LIVE WEBSITE — THE FULL SYNCHRONIZED CIRCUIT
          </h3>
        </div>
        <span className="text-xs sm:text-sm text-[#55FF55] font-black px-3 py-1 bg-[#090a10] border border-[#55FF55]/40 w-fit">
          All 7 Layers Working in Harmony
        </span>
      </div>

      {/* Connected 4-Node Full-Stack Circuit Strip with Large Fonts */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-xs">
        {/* Node 1 */}
        <div className="p-4 bg-[#090a10] border-2 border-[#55FFFF] text-center shadow-pixel">
          <Monitor className="w-6 h-6 mx-auto mb-1.5 text-[#55FFFF]" />
          <span className="text-xs sm:text-sm text-[#55FFFF] font-black block">1. VISITOR CLIENT</span>
          <p className="text-xs sm:text-sm text-zinc-100 mt-1 font-semibold leading-snug">Renders React UI & captures clicks</p>
        </div>

        {/* Node 2 */}
        <div className="p-4 bg-[#090a10] border-2 border-[#FFAA00] text-center shadow-pixel">
          <Globe className="w-6 h-6 mx-auto mb-1.5 text-[#FFAA00]" />
          <span className="text-xs sm:text-sm text-[#FFAA00] font-black block">2. DOMAIN & CDN</span>
          <p className="text-xs sm:text-sm text-zinc-100 mt-1 font-semibold leading-snug">Resolves DNS & serves cached bundle</p>
        </div>

        {/* Node 3 */}
        <div className="p-4 bg-[#090a10] border-2 border-[#0088FF] text-center shadow-pixel">
          <Server className="w-6 h-6 mx-auto mb-1.5 text-[#0088FF]" />
          <span className="text-xs sm:text-sm text-[#0088FF] font-black block">3. BACKEND API</span>
          <p className="text-xs sm:text-sm text-zinc-100 mt-1 font-semibold leading-snug">Validates tokens & executes rules</p>
        </div>

        {/* Node 4 */}
        <div className="p-4 bg-[#090a10] border-2 border-[#55FF55] text-center shadow-pixel">
          <Database className="w-6 h-6 mx-auto mb-1.5 text-[#55FF55]" />
          <span className="text-xs sm:text-sm text-[#55FF55] font-black block">4. DATABASE VAULT</span>
          <p className="text-xs sm:text-sm text-zinc-100 mt-1 font-semibold leading-snug">Saves records permanently to disk</p>
        </div>
      </div>

      {/* Master Mental Model Banner */}
      <div className="p-4 bg-[#121420] border-2 border-[#55FFFF] shadow-pixel flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span className="text-xs sm:text-sm text-[#55FFFF] font-black uppercase block mb-1">
            THE FULL-STACK MENTAL MAP MASTERED
          </span>
          <p className="text-sm sm:text-base text-white font-bold leading-relaxed font-sans">
            "Understanding the map is the hardest part. Once you see the full circuit, every line of code you write has a clear home."
          </p>
        </div>
        <span className="text-xs sm:text-sm text-[#55FF55] font-black px-3 py-1.5 bg-[#090a10] border border-[#55FF55] shrink-0 w-fit">
          ✓ READY TO BUILD
        </span>
      </div>
    </div>
  );
};
