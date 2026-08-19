import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Database, RefreshCw, Plus, HardDrive, Cpu } from 'lucide-react';
import { sound } from '../../../utils/sound';

export const Stage4Database: React.FC = () => {
  const [dbRows, setDbRows] = useState([
    { id: 1, title: 'Calculus Notes', user: 'Alex', time: '10:14 AM' },
    { id: 2, title: 'Physics Lab', user: 'Sam', time: '11:30 AM' }
  ]);
  const [ramNotes, setRamNotes] = useState<string[]>(['Calculus Notes', 'Physics Lab']);
  const [reloading, setReloading] = useState(false);

  const simulateReload = () => {
    sound.packetPing();
    setReloading(true);
    setRamNotes([]); // RAM is wiped!

    setTimeout(() => {
      setReloading(false);
      setRamNotes(['Calculus Notes', 'Physics Lab']); // DB rehydrates UI!
      sound.success();
    }, 500);
  };

  const insertRow = () => {
    sound.click();
    const newId = dbRows.length + 1;
    const item = { id: newId, title: `Assignment #${newId}`, user: 'Alex', time: 'Just now' };
    setDbRows([...dbRows, item]);
    setRamNotes([...ramNotes, item.title]);
    sound.success();
  };

  return (
    <div className="flex flex-col gap-4 font-mono select-none">
      {/* Header */}
      <div className="flex items-center justify-between pb-2 border-b border-[#2e334a]">
        <div className="flex items-center gap-2">
          <Database className="w-5 h-5 text-[#55FF55]" />
          <h3 className="text-sm sm:text-base font-bold text-white font-sans uppercase">
            STAGE 04: DATABASE — PERMANENT CLOUD STORAGE
          </h3>
        </div>
        <button
          onClick={simulateReload}
          className="pixel-btn px-2.5 py-1 text-xs cursor-pointer text-[#55FFFF] flex items-center gap-1.5"
        >
          <RefreshCw className={`w-3.5 h-3.5 ${reloading ? 'animate-spin' : ''}`} />
          <span>SIMULATE TAB RELOAD</span>
        </button>
      </div>

      {/* RAM vs Persistent Storage Side-by-Side */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Left: Volatile RAM */}
        <div className="p-4 bg-[#090a10] border-2 border-[#FF5555]/50 shadow-pixel flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] text-[#FF5555] font-bold uppercase">
                BROWSER RAM (TEMPORARY)
              </span>
              <Cpu className="w-4 h-4 text-[#FF5555]" />
            </div>
            <p className="text-[11px] text-zinc-400 mb-2">
              Variables in JavaScript memory wipe instantly upon closing or refreshing the tab.
            </p>

            <div className="p-2.5 bg-[#121420] border border-[#2e334a] min-h-[70px] flex items-center justify-center text-xs">
              {reloading ? (
                <span className="text-[#FF5555] font-bold animate-pulse">
                  [ ⚠️ RAM WIPED TO 0 BYTES ON REFRESH ]
                </span>
              ) : (
                <span className="text-zinc-300">
                  {ramNotes.length} cached items active in local memory
                </span>
              )}
            </div>
          </div>

          <span className="text-[10px] text-[#FF5555] font-bold mt-2">
            Result: Cannot rely on RAM alone for user data!
          </span>
        </div>

        {/* Right: PostgreSQL Database Vault */}
        <div className="p-4 bg-[#090a10] border-2 border-[#55FF55] shadow-pixel flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] text-[#55FF55] font-bold uppercase">
                POSTGRESQL VAULT (PERMANENT)
              </span>
              <button
                onClick={insertRow}
                className="pixel-btn pixel-btn-primary px-2 py-0.5 text-[10px] flex items-center gap-1 cursor-pointer"
              >
                <Plus className="w-3 h-3" />
                <span>INSERT ROW</span>
              </button>
            </div>

            {/* Table Matrix */}
            <div className="p-2 bg-[#121420] border border-[#2e334a] space-y-1 text-[11px]">
              <div className="grid grid-cols-3 font-bold text-[#55FFFF] border-b border-[#2e334a] pb-1">
                <span>ID</span>
                <span>TITLE</span>
                <span>STATUS</span>
              </div>
              {dbRows.slice(-3).map((r) => (
                <div key={r.id} className="grid grid-cols-3 text-zinc-300">
                  <span>0{r.id}</span>
                  <span className="truncate">{r.title}</span>
                  <span className="text-[#55FF55]">✓ STORED</span>
                </div>
              ))}
            </div>
          </div>

          <span className="text-[10px] text-[#55FF55] font-bold mt-2">
            Result: Saved to NVMe cloud disks with automated daily backups.
          </span>
        </div>
      </div>
    </div>
  );
};
