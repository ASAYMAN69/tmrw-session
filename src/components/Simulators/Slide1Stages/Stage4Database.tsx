import React from 'react';
import { Database, HardDrive, Cpu } from 'lucide-react';

export const Stage4Database: React.FC = () => {
  return (
    <div className="flex flex-col gap-4 font-mono select-none">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2.5 border-b border-[#2e334a]">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-[#55FF55]/20 text-[#55FF55] flex items-center justify-center border-2 border-[#55FF55]">
            <Database className="w-6 h-6" />
          </div>
          <h3 className="text-base sm:text-lg font-extrabold text-white font-sans uppercase">
            04. DATABASE — PERMANENT MEMORY STORAGE
          </h3>
        </div>
        <span className="text-xs text-[#55FF55] font-extrabold px-2.5 py-1 bg-[#090a10] border border-[#55FF55]/40 w-fit">
          Survives Tab Closes & Power Loss
        </span>
      </div>

      {/* Dual Storage Matrix + CRUD Grid with Bold Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Left: RAM vs Persistent Disk */}
        <div className="space-y-3">
          <div className="p-3.5 bg-[#090a10] border-2 border-[#FF5555] shadow-pixel">
            <div className="flex items-center justify-between mb-1">
              <span className="text-sm font-extrabold text-[#FF5555] uppercase">TEMPORARY RAM MEMORY</span>
              <Cpu className="w-5 h-5 text-[#FF5555]" />
            </div>
            <p className="text-xs text-zinc-200 leading-relaxed">
              Variables inside JavaScript memory wipe immediately the moment the browser tab is refreshed or closed.
            </p>
          </div>

          <div className="p-3.5 bg-[#090a10] border-2 border-[#55FF55] shadow-pixel">
            <div className="flex items-center justify-between mb-1">
              <span className="text-sm font-extrabold text-[#55FF55] uppercase">PERSISTENT CLOUD DISK</span>
              <HardDrive className="w-5 h-5 text-[#55FF55]" />
            </div>
            <p className="text-xs text-zinc-200 leading-relaxed">
              PostgreSQL writes records to permanent NVMe cloud drives with automated continuous backups.
            </p>
          </div>
        </div>

        {/* Right: The 4 CRUD Actions */}
        <div className="p-4 bg-[#090a10] border-2 border-[#383e58] shadow-pixel flex flex-col justify-between">
          <span className="text-xs text-zinc-300 font-extrabold uppercase block mb-2">
            THE 4 FUNDAMENTAL DATABASE OPERATIONS (CRUD):
          </span>

          <div className="grid grid-cols-2 gap-2 text-xs">
            <div className="p-2.5 bg-[#121420] border border-[#2e334a]">
              <strong className="text-[#55FFFF] block font-extrabold text-sm">C — CREATE</strong>
              <code className="text-xs text-zinc-300">INSERT INTO notes...</code>
            </div>
            <div className="p-2.5 bg-[#121420] border border-[#2e334a]">
              <strong className="text-[#55FF55] block font-extrabold text-sm">R — READ</strong>
              <code className="text-xs text-zinc-300">SELECT * FROM notes...</code>
            </div>
            <div className="p-2.5 bg-[#121420] border border-[#2e334a]">
              <strong className="text-[#FFAA00] block font-extrabold text-sm">U — UPDATE</strong>
              <code className="text-xs text-zinc-300">UPDATE notes SET...</code>
            </div>
            <div className="p-2.5 bg-[#121420] border border-[#2e334a]">
              <strong className="text-[#FF5555] block font-extrabold text-sm">D — DELETE</strong>
              <code className="text-xs text-zinc-300">DELETE FROM notes...</code>
            </div>
          </div>

          <p className="text-xs text-zinc-400 mt-2 font-medium">
            Every feature in modern web applications boils down to one of these four.
          </p>
        </div>
      </div>
    </div>
  );
};
