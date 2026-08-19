import React from 'react';
import { Cpu, ShieldCheck, ShieldAlert, Key, CheckCircle2 } from 'lucide-react';

export const Stage3Backend: React.FC = () => {
  return (
    <div className="flex flex-col gap-4 font-mono select-none">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2.5 border-b border-[#2e334a]">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-[#0088FF]/20 text-[#0088FF] flex items-center justify-center border-2 border-[#0088FF]">
            <Cpu className="w-6 h-6" />
          </div>
          <h3 className="text-base sm:text-lg font-extrabold text-white font-sans uppercase">
            03. BACKEND — THE LOGIC & SECURITY PIPELINE
          </h3>
        </div>
        <span className="text-xs text-[#55FF55] font-extrabold px-2.5 py-1 bg-[#090a10] border border-[#55FF55]/40 w-fit">
          Server Authority • Never Trust Client Data
        </span>
      </div>

      {/* 4-Station Processing Pipeline with Bigger, Bolder Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-2.5">
        {/* Station 1 */}
        <div className="p-3.5 bg-[#090a10] border-2 border-[#383e58] flex flex-col justify-between shadow-pixel">
          <div>
            <span className="text-xs text-[#55FFFF] font-extrabold block mb-1">STATION 01</span>
            <strong className="text-white text-sm block font-sans">HTTP REQUEST</strong>
            <p className="text-xs text-zinc-300 mt-1 leading-snug">
              Browser sends form payload: <code>POST /api/notes</code>
            </p>
          </div>
          <div className="mt-3 pt-2 border-t border-[#2e334a] text-xs text-[#55FFFF] font-bold">
            Arrival from Wire ➔
          </div>
        </div>

        {/* Station 2 */}
        <div className="p-3.5 bg-[#090a10] border-2 border-[#FF5555] flex flex-col justify-between shadow-pixel">
          <div>
            <span className="text-xs text-[#FF5555] font-extrabold block mb-1">STATION 02</span>
            <strong className="text-white text-sm block font-sans">SECURITY GUARD</strong>
            <p className="text-xs text-zinc-300 mt-1 leading-snug">
              Sanitizes hacker scripts and validates token headers.
            </p>
          </div>
          <div className="mt-3 pt-2 border-t border-[#2e334a] text-xs text-[#FF5555] font-bold">
            Blocks SQL Injections 🛡️
          </div>
        </div>

        {/* Station 3 */}
        <div className="p-3.5 bg-[#090a10] border-2 border-[#FFAA00] flex flex-col justify-between shadow-pixel">
          <div>
            <span className="text-xs text-[#FFAA00] font-extrabold block mb-1">STATION 03</span>
            <strong className="text-white text-sm block font-sans">BUSINESS RULES</strong>
            <p className="text-xs text-zinc-300 mt-1 leading-snug">
              Calculates prices, checks user permissions & hashes.
            </p>
          </div>
          <div className="mt-3 pt-2 border-t border-[#2e334a] text-xs text-[#FFAA00] font-bold">
            Bcrypt & Rule Engine ⚙️
          </div>
        </div>

        {/* Station 4 */}
        <div className="p-3.5 bg-[#090a10] border-2 border-[#55FF55] flex flex-col justify-between shadow-pixel">
          <div>
            <span className="text-xs text-[#55FF55] font-extrabold block mb-1">STATION 04</span>
            <strong className="text-white text-sm block font-sans">DISPATCH 200 OK</strong>
            <p className="text-xs text-zinc-300 mt-1 leading-snug">
              Queries database and returns clean JSON to browser.
            </p>
          </div>
          <div className="mt-3 pt-2 border-t border-[#2e334a] text-xs text-[#55FF55] font-bold">
            200 OK Success ✓
          </div>
        </div>
      </div>

      {/* Bottom Core Takeaway */}
      <div className="p-3 bg-[#121420] border border-[#2e334a] flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-zinc-200">
        <span>🔒 <strong>Why a Backend?</strong> Frontend code is public. The backend guarantees rules and passwords are protected.</span>
        <span className="text-[#55FFFF] font-extrabold shrink-0">Tools: Node.js, Express, Python, FastAPI</span>
      </div>
    </div>
  );
};
