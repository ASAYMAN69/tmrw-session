import React from 'react';
import { Rocket, Monitor, Server, Database, Globe, CheckCircle2 } from 'lucide-react';

export const Stage8Live: React.FC = () => {
  return (
    <div className="flex flex-col gap-4 font-mono select-none">
      {/* Header */}
      <div className="flex items-center justify-between pb-2 border-b border-[#2e334a]">
        <div className="flex items-center gap-2">
          <Rocket className="w-5 h-5 text-[#55FF55]" />
          <h3 className="text-sm sm:text-base font-bold text-white font-sans uppercase">
            08. LIVE WEBSITE — THE FULL SYNCHRONIZED CIRCUIT
          </h3>
        </div>
        <span className="text-xs text-[#55FF55] font-bold">
          All 7 Layers Working in Harmony
        </span>
      </div>

      {/* Unique Template: Connected 4-Node Full-Stack Circuit Strip */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 text-xs">
        {/* Node 1 */}
        <div className="p-3.5 bg-[#090a10] border-2 border-[#55FFFF] text-center shadow-pixel">
          <Monitor className="w-5 h-5 mx-auto mb-1 text-[#55FFFF]" />
          <span className="text-[10px] text-[#55FFFF] font-bold block">1. VISITOR CLIENT</span>
          <p className="text-[11px] text-zinc-300 mt-1">Renders React UI & captures clicks</p>
        </div>

        {/* Node 2 */}
        <div className="p-3.5 bg-[#090a10] border-2 border-[#FFAA00] text-center shadow-pixel">
          <Globe className="w-5 h-5 mx-auto mb-1 text-[#FFAA00]" />
          <span className="text-[10px] text-[#FFAA00] font-bold block">2. DOMAIN & CDN</span>
          <p className="text-[11px] text-zinc-300 mt-1">Resolves DNS & serves cached bundle</p>
        </div>

        {/* Node 3 */}
        <div className="p-3.5 bg-[#090a10] border-2 border-[#0088FF] text-center shadow-pixel">
          <Server className="w-5 h-5 mx-auto mb-1 text-[#0088FF]" />
          <span className="text-[10px] text-[#0088FF] font-bold block">3. BACKEND API</span>
          <p className="text-[11px] text-zinc-300 mt-1">Validates tokens & executes rules</p>
        </div>

        {/* Node 4 */}
        <div className="p-3.5 bg-[#090a10] border-2 border-[#55FF55] text-center shadow-pixel">
          <Database className="w-5 h-5 mx-auto mb-1 text-[#55FF55]" />
          <span className="text-[10px] text-[#55FF55] font-bold block">4. DATABASE VAULT</span>
          <p className="text-[11px] text-zinc-300 mt-1">Saves records permanently to disk</p>
        </div>
      </div>

      {/* Master Mental Model Banner */}
      <div className="p-3.5 bg-[#121420] border-2 border-[#55FFFF] shadow-pixel flex items-center justify-between gap-4">
        <div>
          <span className="text-[10px] text-[#55FFFF] font-bold uppercase block">
            THE FULL-STACK MENTAL MAP MASTERED
          </span>
          <p className="text-xs text-white mt-1 leading-relaxed">
            "Understanding the map is the hardest part. Once you see the full circuit, every line of code you write has a clear home."
          </p>
        </div>
        <span className="text-xs text-[#55FF55] font-bold px-3 py-1 bg-[#090a10] border border-[#55FF55] shrink-0 hidden sm:inline">
          ✓ READY TO BUILD
        </span>
      </div>
    </div>
  );
};
