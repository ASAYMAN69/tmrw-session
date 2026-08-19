import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, Server, Database } from 'lucide-react';
import { sound } from '../../utils/sound';

interface Slide9Props {
  subStep?: number;
  onSubStepChange?: (subStep: number) => void;
}

export const Slide9FullSystemCircuit: React.FC<Slide9Props> = ({
  subStep = 0,
  onSubStepChange,
}) => {
  return (
    <div className="w-full flex flex-col gap-3 font-mono">
      {/* Circuit Box */}
      <div className="pixel-box p-4">
        <div className="flex items-center justify-between pb-2 border-b border-[#2e334a]">
          <span className="text-xs font-bold text-[#55FFFF]">
            END-TO-END SYSTEM ARCHITECTURE
          </span>
          <div className="flex gap-1">
            <button
              onClick={() => { sound.click(); onSubStepChange?.(0); }}
              className={`pixel-btn px-2 py-1 text-xs ${subStep === 0 ? 'pixel-btn-primary' : ''}`}
            >
              1. BROWSER
            </button>
            <button
              onClick={() => { sound.click(); onSubStepChange?.(1); }}
              className={`pixel-btn px-2 py-1 text-xs ${subStep === 1 ? 'pixel-btn-primary' : ''}`}
            >
              2. SERVER
            </button>
            <button
              onClick={() => { sound.click(); onSubStepChange?.(2); }}
              className={`pixel-btn px-2 py-1 text-xs ${subStep === 2 ? 'pixel-btn-primary' : ''}`}
            >
              3. DATABASE
            </button>
          </div>
        </div>

        {/* 3 Step Connected Wire */}
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
          <motion.div
            layout
            animate={{ scale: subStep === 0 ? 1.03 : 1 }}
            className={`p-3 border text-center transition-all ${
              subStep >= 0 ? 'bg-[#181b2c] border-[#55FFFF] shadow-pixel-sm' : 'bg-[#090a10] border-[#2e334a] opacity-40'
            }`}
          >
            <Monitor className="w-6 h-6 mx-auto mb-1 text-[#55FFFF]" />
            <span className="text-[10px] font-bold text-[#55FFFF] block">1. VISITOR CLIENT</span>
            <p className="text-[11px] text-zinc-300 mt-1">Loads frontend bundle in browser</p>
          </motion.div>

          <motion.div
            layout
            animate={{ scale: subStep === 1 ? 1.03 : 1 }}
            className={`p-3 border text-center transition-all ${
              subStep >= 1 ? 'bg-[#181b2c] border-[#55FFFF] shadow-pixel-sm' : 'bg-[#090a10] border-[#2e334a] opacity-40'
            }`}
          >
            <Server className="w-6 h-6 mx-auto mb-1 text-[#55FFFF]" />
            <span className="text-[10px] font-bold text-[#55FFFF] block">2. BACKEND API</span>
            <p className="text-[11px] text-zinc-300 mt-1">Checks user auth & calculates rules</p>
          </motion.div>

          <motion.div
            layout
            animate={{ scale: subStep === 2 ? 1.03 : 1 }}
            className={`p-3 border text-center transition-all ${
              subStep >= 2 ? 'bg-[#181b2c] border-[#55FF55] shadow-pixel-sm' : 'bg-[#090a10] border-[#2e334a] opacity-40'
            }`}
          >
            <Database className="w-6 h-6 mx-auto mb-1 text-[#55FF55]" />
            <span className="text-[10px] font-bold text-[#55FF55] block">3. DATABASE VAULT</span>
            <p className="text-[11px] text-zinc-300 mt-1">Saves & returns records permanently</p>
          </motion.div>
        </div>

        <p className="text-xs text-zinc-400 text-center mt-3">
          "Every click, page load, and login is a message flowing through this system."
        </p>
      </div>
    </div>
  );
};
