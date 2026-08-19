import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Database,
  HardDrive,
  Cpu,
  RefreshCw,
  Table,
  Layers,
  Terminal,
  CheckCircle2,
  Server,
  PlusCircle,
  Lightbulb,
  Search,
  Sparkles
} from 'lucide-react';
import { sound } from '../../utils/sound';

interface Slide6Props {
  subStep?: number;
  onSubStepChange?: (subStep: number) => void;
}

export const Slide6DatabaseMemory: React.FC<Slide6Props> = ({
  subStep = 0,
  onSubStepChange,
}) => {
  const currentStep = Math.min(2, Math.max(0, subStep));

  // --- AUTOMATION 1: The Reload Persistence Test ---
  const [ramNotes, setRamNotes] = useState<string[]>(['Calculus HW #4', 'Physics Lab']);
  const [dbNotes, setDbNotes] = useState<string[]>(['Calculus HW #4', 'Physics Lab']);
  const [isReloading, setIsReloading] = useState<boolean>(false);

  const triggerReload = () => {
    sound.packetPing?.();
    setIsReloading(true);
    // RAM clears to empty, DB retains everything
    setRamNotes([]);
    setTimeout(() => {
      setIsReloading(false);
      sound.success?.();
    }, 800);
  };

  // --- AUTOMATION 2: SQL Table Row Scanner ---
  const [scannedRow, setScannedRow] = useState<number>(0);
  useEffect(() => {
    if (currentStep !== 1) return;
    const interval = setInterval(() => {
      setScannedRow(prev => (prev + 1) % 3);
    }, 1800);
    return () => clearInterval(interval);
  }, [currentStep]);

  // --- AUTOMATION 3: Live SQL Query Execution ---
  const [queryIndex, setQueryIndex] = useState<number>(0);
  const queries = [
    {
      sql: 'INSERT INTO notes (title, user_id) VALUES ("Biology Notes", 101);',
      result: '✓ 1 row inserted (id: 103)',
      color: '#55FF55'
    },
    {
      sql: 'SELECT * FROM notes WHERE user_id = 101 ORDER BY created_at DESC;',
      result: '✓ 3 rows returned in 1.2ms',
      color: '#55FFFF'
    },
    {
      sql: 'UPDATE notes SET title = "Bio Ch 4" WHERE id = 103;',
      result: '✓ 1 row updated',
      color: '#FFAA00'
    }
  ];

  useEffect(() => {
    if (currentStep !== 2) return;
    const interval = setInterval(() => {
      setQueryIndex(prev => (prev + 1) % queries.length);
      sound.click?.();
    }, 2400);
    return () => clearInterval(interval);
  }, [currentStep, queries.length]);

  return (
    <div className="w-full flex flex-col gap-3.5 font-mono select-none">
      {/* 3 Main Points Top Hotbar */}
      <div className="bg-[#121420] border-2 border-[#2e334a] p-1.5 shadow-pixel">
        <div className="grid grid-cols-3 gap-2">
          {/* Point 1: RAM vs Disk */}
          <button
            onClick={() => { sound.click(); onSubStepChange?.(0); }}
            className={`py-2.5 px-3 flex items-center justify-between cursor-pointer border-2 transition-all ${
              currentStep === 0
                ? 'bg-[#1e2640] border-[#FFAA00] text-[#FFAA00] shadow-pixel scale-[1.02]'
                : 'bg-[#090a10] border-[#22273a] text-zinc-400 hover:text-white'
            }`}
          >
            <div className="flex items-center gap-2">
              <HardDrive className="w-5 h-5 text-[#FFAA00]" />
              <span className="text-xs sm:text-sm font-black">01. RAM VS DISK</span>
            </div>
            <span className="text-[10px] font-bold hidden sm:inline text-zinc-500">Persistence</span>
          </button>

          {/* Point 2: Structured Tables */}
          <button
            onClick={() => { sound.click(); onSubStepChange?.(1); }}
            className={`py-2.5 px-3 flex items-center justify-between cursor-pointer border-2 transition-all ${
              currentStep === 1
                ? 'bg-[#1e2640] border-[#55FFFF] text-[#55FFFF] shadow-pixel scale-[1.02]'
                : 'bg-[#090a10] border-[#22273a] text-zinc-400 hover:text-white'
            }`}
          >
            <div className="flex items-center gap-2">
              <Table className="w-5 h-5 text-[#55FFFF]" />
              <span className="text-xs sm:text-sm font-black">02. SQL TABLES</span>
            </div>
            <span className="text-[10px] font-bold hidden sm:inline text-zinc-500">Rows & Columns</span>
          </button>

          {/* Point 3: CRUD Queries */}
          <button
            onClick={() => { sound.click(); onSubStepChange?.(2); }}
            className={`py-2.5 px-3 flex items-center justify-between cursor-pointer border-2 transition-all ${
              currentStep === 2
                ? 'bg-[#1e2640] border-[#55FF55] text-[#55FF55] shadow-pixel scale-[1.02]'
                : 'bg-[#090a10] border-[#22273a] text-zinc-400 hover:text-white'
            }`}
          >
            <div className="flex items-center gap-2">
              <Database className="w-5 h-5 text-[#55FF55]" />
              <span className="text-xs sm:text-sm font-black">03. SQL QUERIES</span>
            </div>
            <span className="text-[10px] font-bold hidden sm:inline text-zinc-500">CRUD in Action</span>
          </button>
        </div>
      </div>

      {/* Main 2-Section Body Split */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* LEFT SECTION: Concept & Explanation */}
        <div className="bg-[#121420] border-2 border-[#383e58] p-6 shadow-pixel flex flex-col justify-between">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 8 }}
              transition={{ duration: 0.15 }}
              className="flex flex-col gap-3.5"
            >
              {/* POINT 1: RAM VS DISK */}
              {currentStep === 0 && (
                <>
                  <div className="flex items-center gap-2.5">
                    <span className="text-xs sm:text-sm font-black text-[#FFAA00] px-2.5 py-0.5 bg-[#FFAA00]/15 border border-[#FFAA00]/40">
                      #01
                    </span>
                    <h3 className="text-lg sm:text-xl font-black text-white font-sans uppercase">
                      RAM (Temporary) vs Database (Permanent)
                    </h3>
                  </div>

                  <p className="text-sm sm:text-base text-zinc-100 font-semibold leading-relaxed">
                    Browser variables live in <strong>RAM (Random Access Memory)</strong>. The second you refresh or close the tab, RAM is wiped clean.
                  </p>

                  <div className="p-3.5 bg-[#090a10] border border-[#2e334a] text-xs space-y-2">
                    <div className="flex items-start gap-2">
                      <strong className="text-[#FF5555] shrink-0">RAM Memory:</strong>
                      <span className="text-zinc-200">Super fast, but volatile. Loses state completely on reload.</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <strong className="text-[#55FF55] shrink-0">Disk Database:</strong>
                      <span className="text-zinc-200">Commits rows to persistent storage. Survives power loss and reloads.</span>
                    </div>
                  </div>

                  <div className="p-3 bg-[#181b2c] border-l-4 border-[#FFAA00] text-xs sm:text-sm text-zinc-200 font-medium flex items-center gap-2">
                    <Lightbulb className="w-4 h-4 text-[#FFAA00] shrink-0" />
                    <span><strong>Takeaway:</strong> The database is what makes your app persistent across sessions.</span>
                  </div>
                </>
              )}

              {/* POINT 2: STRUCTURED TABLES */}
              {currentStep === 1 && (
                <>
                  <div className="flex items-center gap-2.5">
                    <span className="text-xs sm:text-sm font-black text-[#55FFFF] px-2.5 py-0.5 bg-[#55FFFF]/15 border border-[#55FFFF]/40">
                      #02
                    </span>
                    <h3 className="text-lg sm:text-xl font-black text-white font-sans uppercase">
                      SQL Tables: Rows & Columns
                    </h3>
                  </div>

                  <p className="text-sm sm:text-base text-zinc-100 font-semibold leading-relaxed">
                    Relational databases (like <strong>PostgreSQL</strong>) organize information into structured tables with strict columns and unique primary keys (`id`).
                  </p>

                  <div className="p-3.5 bg-[#090a10] border border-[#2e334a] text-xs space-y-1.5 font-mono">
                    <span className="text-[10px] text-zinc-400 font-bold block mb-1">TABLE STRUCTURE: `notes`</span>
                    <div className="text-zinc-300">
                      • <strong className="text-[#FFAA00]">id</strong> (Primary Key, e.g. 101)<br />
                      • <strong className="text-[#55FFFF]">user_id</strong> (Foreign Key linking to user)<br />
                      • <strong className="text-white">title</strong> (Text content)<br />
                      • <strong className="text-[#55FF55]">created_at</strong> (Timestamp)
                    </div>
                  </div>

                  <div className="p-3 bg-[#181b2c] border-l-4 border-[#55FFFF] text-xs sm:text-sm text-zinc-200 font-medium flex items-center gap-2">
                    <Lightbulb className="w-4 h-4 text-[#55FFFF] shrink-0" />
                    <span><strong>Takeaway:</strong> Tables guarantee clean structure, indexes for speed, and data integrity.</span>
                  </div>
                </>
              )}

              {/* POINT 3: CRUD QUERIES */}
              {currentStep === 2 && (
                <>
                  <div className="flex items-center gap-2.5">
                    <span className="text-xs sm:text-sm font-black text-[#55FF55] px-2.5 py-0.5 bg-[#55FF55]/15 border border-[#55FF55]/40">
                      #03
                    </span>
                    <h3 className="text-lg sm:text-xl font-black text-white font-sans uppercase">
                      SQL Queries: Talking to the Database
                    </h3>
                  </div>

                  <p className="text-sm sm:text-base text-zinc-100 font-semibold leading-relaxed">
                    <strong>SQL (Structured Query Language)</strong> is the universal query language used to interact with relational databases.
                  </p>

                  <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                    <div className="p-2 bg-[#090a10] border border-[#55FF55]/60">
                      <strong className="text-[#55FF55] block">INSERT</strong>
                      <span className="text-zinc-300 text-[10px]">Add new row</span>
                    </div>
                    <div className="p-2 bg-[#090a10] border border-[#55FFFF]/60">
                      <strong className="text-[#55FFFF] block">SELECT</strong>
                      <span className="text-zinc-300 text-[10px]">Find & filter rows</span>
                    </div>
                    <div className="p-2 bg-[#090a10] border border-[#FFAA00]/60">
                      <strong className="text-[#FFAA00] block">UPDATE</strong>
                      <span className="text-zinc-300 text-[10px]">Modify row values</span>
                    </div>
                    <div className="p-2 bg-[#090a10] border border-[#FF5555]/60">
                      <strong className="text-[#FF5555] block">DELETE</strong>
                      <span className="text-zinc-300 text-[10px]">Purge row</span>
                    </div>
                  </div>

                  <div className="p-3 bg-[#181b2c] border-l-4 border-[#55FF55] text-xs sm:text-sm text-zinc-200 font-medium flex items-center gap-2">
                    <Lightbulb className="w-4 h-4 text-[#55FF55] shrink-0" />
                    <span><strong>Takeaway:</strong> Backend server runs SQL queries in milliseconds to fetch precisely what is needed.</span>
                  </div>
                </>
              )}
            </motion.div>
          </AnimatePresence>

          <div className="pt-3.5 border-t border-[#2e334a] text-xs sm:text-sm text-zinc-400 flex items-center justify-between font-bold">
            <span>Press Next or Hotbar to advance</span>
            <span className="text-[#55FFFF]">Module 05: Database</span>
          </div>
        </div>

        {/* RIGHT SECTION: Visual Server Engine Preview */}
        <div className="bg-[#090a10] border-2 border-[#55FFFF] p-6 shadow-pixel flex flex-col">
          {/* Header */}
          <div className="flex items-center gap-2 pb-3 border-b border-[#2e334a] text-xs sm:text-sm font-bold text-zinc-300">
            <Server className="w-5 h-5 text-[#55FFFF]" />
            <span>DATABASE STORAGE ENGINE</span>
          </div>

          {/* Dynamic Animation Viewport - Centered Vertically & Horizontally */}
          <div className="flex-1 flex flex-col items-center justify-center py-6 w-full my-auto">
            {/* AUTOMATION 1: The Reload Persistence Test */}
            {currentStep === 0 && (
              <div className="w-full max-w-md mx-auto space-y-3 font-mono">
                <div className="p-4 bg-[#121420] border-2 border-[#FFAA00] shadow-pixel space-y-3">
                  <div className="flex items-center justify-between border-b border-[#2e334a] pb-2">
                    <span className="text-xs text-zinc-400 font-bold">PERSISTENCE TEST</span>
                    <button
                      onClick={triggerReload}
                      className="px-2.5 py-1 bg-[#FFAA00] text-black text-xs font-black flex items-center gap-1.5 shadow-pixel hover:scale-105 transition-all cursor-pointer"
                    >
                      <RefreshCw className={`w-3.5 h-3.5 ${isReloading ? 'animate-spin' : ''}`} />
                      <span>{isReloading ? 'RELOADING...' : 'TEST TAB RELOAD'}</span>
                    </button>
                  </div>

                  {/* Split Memory Display */}
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    {/* Browser RAM */}
                    <div className="p-3 bg-[#090a10] border border-[#FF5555]/60 space-y-2">
                      <div className="flex items-center gap-1.5 text-[#FF5555] font-bold text-[11px]">
                        <Cpu className="w-4 h-4" />
                        <span>BROWSER RAM</span>
                      </div>
                      {ramNotes.length > 0 ? (
                        <div className="space-y-1">
                          {ramNotes.map((n, i) => (
                            <div key={i} className="p-1 bg-[#181b2c] text-zinc-300 text-[10px]">
                              {n}
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="p-2 bg-[#2a1010] text-[#FF8888] text-[10px] font-bold text-center border border-[#FF5555]/40">
                          CLEARED TO 0 BY RELOAD
                        </div>
                      )}
                    </div>

                    {/* Disk Database */}
                    <div className="p-3 bg-[#090a10] border border-[#55FF55] space-y-2">
                      <div className="flex items-center gap-1.5 text-[#55FF55] font-bold text-[11px]">
                        <HardDrive className="w-4 h-4" />
                        <span>DISK DATABASE</span>
                      </div>
                      <div className="space-y-1">
                        {dbNotes.map((n, i) => (
                          <div key={i} className="p-1 bg-[#091f14] text-[#55FF55] text-[10px] font-bold border border-[#55FF55]/30">
                            {n}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="p-2 bg-[#090a10] border border-[#2e334a] text-center text-[#55FF55] text-xs font-bold">
                    ✓ Database retains all records indefinitely.
                  </div>
                </div>
              </div>
            )}

            {/* AUTOMATION 2: SQL Table Row Scanner */}
            {currentStep === 1 && (
              <div className="w-full max-w-md mx-auto space-y-3 font-mono">
                <div className="p-4 bg-[#121420] border-2 border-[#55FFFF] shadow-pixel space-y-3">
                  <div className="flex items-center justify-between border-b border-[#2e334a] pb-2 text-xs">
                    <span className="text-zinc-400 font-bold">POSTGRESQL TABLE: `notes`</span>
                    <span className="text-[#55FFFF] font-bold">3 ROWS INDEXED</span>
                  </div>

                  {/* Table View */}
                  <div className="p-2 bg-[#090a10] border border-[#2e334a] space-y-1 text-xs">
                    <div className="grid grid-cols-4 gap-1 text-[10px] font-bold text-zinc-500 pb-1 border-b border-[#2e334a]">
                      <span>ID</span>
                      <span>USER_ID</span>
                      <span className="col-span-2">TITLE</span>
                    </div>

                    {/* Row 1 */}
                    <div className={`grid grid-cols-4 gap-1 p-1 text-[11px] font-mono transition-all ${
                      scannedRow === 0 ? 'bg-[#55FFFF]/20 border border-[#55FFFF] text-white font-bold' : 'text-zinc-300'
                    }`}>
                      <span className="text-[#FFAA00]">101</span>
                      <span>usr_101</span>
                      <span className="col-span-2">Calculus Ch 4</span>
                    </div>

                    {/* Row 2 */}
                    <div className={`grid grid-cols-4 gap-1 p-1 text-[11px] font-mono transition-all ${
                      scannedRow === 1 ? 'bg-[#55FFFF]/20 border border-[#55FFFF] text-white font-bold' : 'text-zinc-300'
                    }`}>
                      <span className="text-[#FFAA00]">102</span>
                      <span>usr_101</span>
                      <span className="col-span-2">Physics Lab #2</span>
                    </div>

                    {/* Row 3 */}
                    <div className={`grid grid-cols-4 gap-1 p-1 text-[11px] font-mono transition-all ${
                      scannedRow === 2 ? 'bg-[#55FFFF]/20 border border-[#55FFFF] text-white font-bold' : 'text-zinc-300'
                    }`}>
                      <span className="text-[#FFAA00]">103</span>
                      <span>usr_102</span>
                      <span className="col-span-2">Biology Intro</span>
                    </div>
                  </div>

                  <div className="p-2 bg-[#181b2c] border border-[#55FFFF]/40 text-center text-[#55FFFF] text-xs font-bold">
                    Primary Keys & foreign keys establish instant record lookups.
                  </div>
                </div>
              </div>
            )}

            {/* AUTOMATION 3: Live SQL Query Execution */}
            {currentStep === 2 && (
              <div className="w-full max-w-md mx-auto space-y-3 font-mono">
                <div className="p-4 bg-[#121420] border-2 border-[#55FF55] shadow-pixel space-y-3">
                  <div className="flex items-center justify-between border-b border-[#2e334a] pb-2 text-xs">
                    <span className="text-zinc-400 font-bold">SQL CONSOLE EXECUTION</span>
                    <span className="text-[#55FF55] font-bold">PORT 5432</span>
                  </div>

                  {/* SQL Execution Window */}
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={queryIndex}
                      initial={{ opacity: 0, scale: 0.96 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.96 }}
                      className="p-3 bg-[#090a10] border border-[#2e334a] space-y-2 text-xs font-mono"
                    >
                      <div className="text-zinc-400 text-[10px] font-bold">QUERY IN:</div>
                      <code className="text-[#55FFFF] block font-bold">
                        {queries[queryIndex].sql}
                      </code>

                      <div className="pt-2 border-t border-[#2e334a] flex items-center justify-between">
                        <span className="text-zinc-400 text-[10px]">OUTPUT:</span>
                        <span className="text-[#55FF55] font-bold text-xs">
                          {queries[queryIndex].result}
                        </span>
                      </div>
                    </motion.div>
                  </AnimatePresence>

                  <div className="p-2 bg-[#091f14] border border-[#55FF55]/50 text-center text-[#55FF55] text-xs font-bold flex items-center justify-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>ACID Compliant Transaction Safe</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
