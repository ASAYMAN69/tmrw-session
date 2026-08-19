import React from 'react';
import { Database, HardDrive, Cpu } from 'lucide-react';

export const Stage4Database: React.FC = () => {
  return (
    <div className="flex flex-col gap-4 font-mono select-none">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-[#2e334a]">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#55FF55]/20 text-[#55FF55] flex items-center justify-center border-2 border-[#55FF55]">
            <Database className="w-6 h-6" />
          </div>
          <h3 className="text-lg sm:text-xl font-black text-white font-sans uppercase">
            04. DATABASE — PERMANENT MEMORY STORAGE
          </h3>
        </div>
        <span className="text-xs sm:text-sm text-[#55FF55] font-black px-3 py-1 bg-[#090a10] border border-[#55FF55]/40 w-fit">
          Survives Tab Closes & Power Loss
        </span>
      </div>

      {/* Dual Storage Matrix + CRUD Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Left: RAM vs Persistent Disk */}
        <div className="space-y-3.5">
          <div className="p-4 bg-[#090a10] border-2 border-[#FF5555] shadow-pixel">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-sm sm:text-base font-black text-[#FF5555] uppercase">TEMPORARY RAM MEMORY</span>
              <Cpu className="w-5 h-5 text-[#FF5555]" />
            </div>
            <p className="text-xs sm:text-sm text-zinc-200 font-semibold leading-relaxed">
              Variables inside JavaScript memory wipe immediately the moment the browser tab is refreshed or closed.
            </p>
          </div>

          <div className="p-4 bg-[#090a10] border-2 border-[#55FF55] shadow-pixel">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-sm sm:text-base font-black text-[#55FF55] uppercase">PERSISTENT CLOUD DISK</span>
              <HardDrive className="w-5 h-5 text-[#55FF55]" />
            </div>
            <p className="text-xs sm:text-sm text-zinc-200 font-semibold leading-relaxed">
              PostgreSQL writes records to permanent NVMe cloud drives with automated continuous backups.
            </p>
          </div>
        </div>

        {/* Right: The 4 CRUD Actions */}
        <div className="p-4 bg-[#090a10] border-2 border-[#383e58] shadow-pixel flex flex-col justify-between">
          <span className="text-xs sm:text-sm text-zinc-200 font-black uppercase block mb-2">
            THE 4 FUNDAMENTAL DATABASE OPERATIONS (CRUD):
          </span>

          <div className="grid grid-cols-2 gap-2.5">
            <div className="p-3 bg-[#121420] border border-[#2e334a]">
              <strong className="text-[#55FFFF] block font-black text-sm sm:text-base">C — CREATE</strong>
              <code className="text-xs sm:text-sm text-zinc-300 font-bold">INSERT INTO notes...</code>
            </div>
            <div className="p-3 bg-[#121420] border border-[#2e334a]">
              <strong className="text-[#55FF55] block font-black text-sm sm:text-base">R — READ</strong>
              <code className="text-xs sm:text-sm text-zinc-300 font-bold">SELECT * FROM notes...</code>
            </div>
            <div className="p-3 bg-[#121420] border border-[#2e334a]">
              <strong className="text-[#FFAA00] block font-black text-sm sm:text-base">U — UPDATE</strong>
              <code className="text-xs sm:text-sm text-zinc-300 font-bold">UPDATE notes SET...</code>
            </div>
            <div className="p-3 bg-[#121420] border border-[#2e334a]">
              <strong className="text-[#FF5555] block font-black text-sm sm:text-base">D — DELETE</strong>
              <code className="text-xs sm:text-sm text-zinc-300 font-bold">DELETE FROM notes...</code>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-zinc-400 mt-2 font-semibold">
            Every feature in modern web applications boils down to one of these four.
          </p>
        </div>
      </div>
    </div>
  );
};
