import React from 'react';
import { Cpu, ShieldCheck, Key, ArrowRight, Server, CheckCircle2 } from 'lucide-react';

export const Stage3Backend: React.FC = () => {
  return (
    <div className="flex flex-col gap-4 font-mono select-none">
      {/* Header */}
      <div className="flex items-center justify-between pb-2 border-b border-[#2e334a]">
        <div className="flex items-center gap-2">
          <Cpu className="w-5 h-5 text-[#0088FF]" />
          <h3 className="text-sm sm:text-base font-bold text-white font-sans uppercase">
            03. BACKEND — THE LOGIC & SECURITY PIPELINE
          </h3>
        </div>
        <span className="text-xs text-[#55FF55] font-bold">
          Server Authority • Never Trust Client Data
        </span>
      </div>

      {/* Unique Template: Sequential 4-Station Processing Pipeline */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 text-xs">
        {/* Station 1 */}
        <div className="p-3 bg-[#090a10] border-2 border-[#383e58] flex flex-col justify-between shadow-pixel">
          <div>
            <span className="text-[10px] text-[#55FFFF] font-bold block mb-1">STATION 01</span>
            <strong className="text-white text-xs block">HTTP REQUEST</strong>
            <p className="text-[11px] text-zinc-400 mt-1">
              Browser sends form payload: <code>POST /api/notes</code>
            </p>
          </div>
          <div className="mt-2 pt-2 border-t border-[#2e334a] text-[10px] text-[#55FFFF]">
            Arrival from Wire ➔
          </div>
        </div>

        {/* Station 2 */}
        <div className="p-3 bg-[#090a10] border-2 border-[#FF5555] flex flex-col justify-between shadow-pixel">
          <div>
            <span className="text-[10px] text-[#FF5555] font-bold block mb-1">STATION 02</span>
            <strong className="text-white text-xs block">SECURITY GUARD</strong>
            <p className="text-[11px] text-zinc-400 mt-1">
              Sanitizes hacker scripts and validates token headers.
            </p>
          </div>
          <div className="mt-2 pt-2 border-t border-[#2e334a] text-[10px] text-[#FF5555]">
            Blocks SQL Injections 🛡️
          </div>
        </div>

        {/* Station 3 */}
        <div className="p-3 bg-[#090a10] border-2 border-[#FFAA00] flex flex-col justify-between shadow-pixel">
          <div>
            <span className="text-[10px] text-[#FFAA00] font-bold block mb-1">STATION 03</span>
            <strong className="text-white text-xs block">BUSINESS RULES</strong>
            <p className="text-[11px] text-zinc-400 mt-1">
              Calculates prices, checks user permissions & hashes.
            </p>
          </div>
          <div className="mt-2 pt-2 border-t border-[#2e334a] text-[10px] text-[#FFAA00]">
            Bcrypt & Rule Engine ⚙️
          </div>
        </div>

        {/* Station 4 */}
        <div className="p-3 bg-[#090a10] border-2 border-[#55FF55] flex flex-col justify-between shadow-pixel">
          <div>
            <span className="text-[10px] text-[#55FF55] font-bold block mb-1">STATION 04</span>
            <strong className="text-white text-xs block">DISPATCH 200 OK</strong>
            <p className="text-[11px] text-zinc-400 mt-1">
              Queries database and returns clean JSON to browser.
            </p>
          </div>
          <div className="mt-2 pt-2 border-t border-[#2e334a] text-[10px] text-[#55FF55]">
            200 OK Success ✓
          </div>
        </div>
      </div>

      {/* Bottom Core Takeaway */}
      <div className="p-3 bg-[#121420] border border-[#2e334a] flex items-center justify-between text-xs text-zinc-300">
        <span>🔒 <strong>Why a Backend?</strong> Frontend code is public. The backend guarantees rules and passwords are protected.</span>
        <span className="text-[#55FFFF] font-bold hidden sm:inline">Tools: Node.js, Express, Python, FastAPI</span>
      </div>
    </div>
  );
};
