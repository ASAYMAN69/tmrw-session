import React from 'react';
import { Database, HardDrive, Cpu, CheckCircle2, XCircle } from 'lucide-react';

export const Stage4Database: React.FC = () => {
  return (
    <div className="flex flex-col gap-4 font-mono select-none">
      {/* Header */}
      <div className="flex items-center justify-between pb-2 border-b border-[#2e334a]">
        <div className="flex items-center gap-2">
          <Database className="w-5 h-5 text-[#55FF55]" />
          <h3 className="text-sm sm:text-base font-bold text-white font-sans uppercase">
            04. DATABASE — PERMANENT MEMORY STORAGE
          </h3>
        </div>
        <span className="text-xs text-[#55FF55] font-bold">
          Survives Tab Closes & Power Loss
        </span>
      </div>

      {/* Unique Template: Dual Storage Matrix + CRUD Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Left: RAM vs Persistent Disk */}
        <div className="space-y-2.5">
          <div className="p-3 bg-[#090a10] border-2 border-[#FF5555]/60 shadow-pixel">
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs font-bold text-[#FF5555] uppercase">TEMPORARY RAM MEMORY</span>
              <Cpu className="w-4 h-4 text-[#FF5555]" />
            </div>
            <p className="text-[11px] text-zinc-300">
              Variables in JavaScript memory wipe immediately when the browser tab is refreshed or closed.
            </p>
          </div>

          <div className="p-3 bg-[#090a10] border-2 border-[#55FF55] shadow-pixel">
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs font-bold text-[#55FF55] uppercase">PERSISTENT CLOUD DISK</span>
              <HardDrive className="w-4 h-4 text-[#55FF55]" />
            </div>
            <p className="text-[11px] text-zinc-300">
              PostgreSQL writes records to permanent NVMe cloud drives with automated daily backups.
            </p>
          </div>
        </div>

        {/* Right: The 4 CRUD Actions */}
        <div className="p-3.5 bg-[#090a10] border-2 border-[#383e58] shadow-pixel flex flex-col justify-between">
          <span className="text-[10px] text-zinc-400 font-bold uppercase block mb-2">
            THE 4 FUNDAMENTAL DATABASE OPERATIONS (CRUD):
          </span>

          <div className="grid grid-cols-2 gap-2 text-xs">
            <div className="p-2 bg-[#121420] border border-[#2e334a]">
              <strong className="text-[#55FFFF] block font-bold">C — CREATE</strong>
              <code className="text-[10px] text-zinc-300">INSERT INTO notes...</code>
            </div>
            <div className="p-2 bg-[#121420] border border-[#2e334a]">
              <strong className="text-[#55FF55] block font-bold">R — READ</strong>
              <code className="text-[10px] text-zinc-300">SELECT * FROM notes...</code>
            </div>
            <div className="p-2 bg-[#121420] border border-[#2e334a]">
              <strong className="text-[#FFAA00] block font-bold">U — UPDATE</strong>
              <code className="text-[10px] text-zinc-300">UPDATE notes SET...</code>
            </div>
            <div className="p-2 bg-[#121420] border border-[#2e334a]">
              <strong className="text-[#FF5555] block font-bold">D — DELETE</strong>
              <code className="text-[10px] text-zinc-300">DELETE FROM notes...</code>
            </div>
          </div>

          <p className="text-[11px] text-zinc-400 mt-2">
            Every feature in modern web applications boils down to one of these four.
          </p>
        </div>
      </div>
    </div>
  );
};
