import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Database, Save, RefreshCw, FileText, CheckCircle2 } from 'lucide-react';
import { sound } from '../../utils/sound';

interface NoteItem {
  id: number;
  text: string;
}

export const Slide6DatabaseMemory: React.FC<{ subStep?: number; onSubStepChange?: (subStep: number) => void }> = () => {
  const [dbNotes, setDbNotes] = useState<NoteItem[]>([
    { id: 1, text: 'Math Calculus Homework' },
    { id: 2, text: 'Physics Optics Lab Report' }
  ]);
  const [inputText, setInputText] = useState<string>('');
  const [reloaded, setReloaded] = useState<boolean>(false);

  const addNote = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;
    sound.click();
    setDbNotes([...dbNotes, { id: Date.now(), text: inputText.trim() }]);
    setInputText('');
    sound.success();
  };

  const simulateReload = () => {
    sound.packetPing();
    setReloaded(true);
    setTimeout(() => {
      setReloaded(false);
      sound.success();
    }, 400);
  };

  return (
    <div className="w-full flex flex-col gap-3 font-mono">
      {/* Principle Strip */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="pixel-box p-3 flex flex-col sm:flex-row items-center justify-between gap-2"
      >
        <div className="flex items-center gap-2">
          <Database className="w-5 h-5 text-[#55FFFF]" />
          <span className="text-xs text-white">
            <strong>PERSISTENCE PRINCIPLE:</strong> RAM resets on tab reload. Database keeps records permanently.
          </span>
        </div>
        <button
          onClick={simulateReload}
          className="pixel-btn px-2.5 py-1 text-xs cursor-pointer text-[#55FFFF] flex items-center gap-1 shrink-0"
        >
          <RefreshCw className={`w-3 h-3 ${reloaded ? 'animate-spin' : ''}`} />
          <span>{reloaded ? 'RELOADED!' : 'RELOAD TAB'}</span>
        </button>
      </motion.div>

      {/* Database Storage Box with Materializing Items */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="pixel-box p-4 bg-[#090a10] border-2 border-[#55FFFF]"
      >
        <div className="flex items-center justify-between pb-2 border-b border-[#2e334a] text-xs">
          <div className="flex items-center gap-1.5 text-[#55FF55] font-bold">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>POSTGRESQL CLUSTER [{dbNotes.length} RECORDS SAVED]</span>
          </div>
        </div>

        {/* Input Form */}
        <form onSubmit={addNote} className="mt-3 flex gap-2">
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="INSERT INTO notes (title)..."
            className="flex-1 px-3 py-1.5 bg-[#121420] border-2 border-[#383e58] text-xs text-white focus:outline-none focus:border-[#55FFFF]"
          />
          <button type="submit" className="pixel-btn pixel-btn-primary px-3 py-1.5 text-xs cursor-pointer flex items-center gap-1">
            <Save className="w-3.5 h-3.5" />
            <span>SAVE</span>
          </button>
        </form>

        {/* Animated Item Stream */}
        <motion.div layout className="mt-3 space-y-1.5">
          <AnimatePresence>
            {dbNotes.map((n) => (
              <motion.div
                key={n.id}
                initial={{ opacity: 0, x: -15, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                className="p-2 bg-[#121420] border border-[#2e334a] flex items-center justify-between text-xs"
              >
                <div className="flex items-center gap-2 text-zinc-200">
                  <FileText className="w-3.5 h-3.5 text-[#55FFFF]" />
                  <span>{n.text}</span>
                </div>
                <span className="text-[10px] font-bold text-[#55FF55]">STORED IN DB</span>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </div>
  );
};
