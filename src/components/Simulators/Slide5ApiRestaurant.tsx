import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MousePointer, ArrowRightLeft, Server, CheckCircle2, Package } from 'lucide-react';
import { sound } from '../../utils/sound';

interface Slide5Props {
  subStep?: number;
  onSubStepChange?: (subStep: number) => void;
}

export const Slide5ApiRestaurant: React.FC<Slide5Props> = ({
  subStep = 0,
  onSubStepChange,
}) => {
  const step = Math.min(3, Math.max(0, subStep));

  return (
    <div className="w-full flex flex-col gap-3 font-mono">
      {/* 4 Pipeline Stages */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
        <motion.button
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
          onClick={() => { sound.click(); onSubStepChange?.(0); }}
          className={`pixel-box p-3 text-left cursor-pointer transition-all ${step === 0 ? 'pixel-box-active' : ''}`}
        >
          <div className="flex items-center justify-between mb-1">
            <span className="text-[10px] font-bold text-[#FFAA00]">01. USER ACTION</span>
            <MousePointer className="w-4 h-4 text-[#FFAA00]" />
          </div>
          <p className="text-xs text-white font-bold">Frontend Click</p>
          <p className="text-[11px] text-zinc-400">fetch('/api/notes')</p>
        </motion.button>

        <motion.button
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          onClick={() => { sound.click(); onSubStepChange?.(1); }}
          className={`pixel-box p-3 text-left cursor-pointer transition-all ${step === 1 ? 'pixel-box-active' : ''}`}
        >
          <div className="flex items-center justify-between mb-1">
            <span className="text-[10px] font-bold text-[#55FFFF]">02. API WAITER</span>
            <ArrowRightLeft className="w-4 h-4 text-[#55FFFF]" />
          </div>
          <p className="text-xs text-white font-bold">HTTP Request Pipe</p>
          <p className="text-[11px] text-zinc-400">Headers + Bearer Token</p>
        </motion.button>

        <motion.button
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          onClick={() => { sound.click(); onSubStepChange?.(2); }}
          className={`pixel-box p-3 text-left cursor-pointer transition-all ${step === 2 ? 'pixel-box-active' : ''}`}
        >
          <div className="flex items-center justify-between mb-1">
            <span className="text-[10px] font-bold text-[#FF5555]">03. SERVER & DB</span>
            <Server className="w-4 h-4 text-[#FF5555]" />
          </div>
          <p className="text-xs text-white font-bold">Backend Query</p>
          <p className="text-[11px] text-zinc-400">SELECT * FROM notes</p>
        </motion.button>

        <motion.button
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          onClick={() => { sound.click(); onSubStepChange?.(3); }}
          className={`pixel-box p-3 text-left cursor-pointer transition-all ${step === 3 ? 'pixel-box-active' : ''}`}
        >
          <div className="flex items-center justify-between mb-1">
            <span className="text-[10px] font-bold text-[#55FF55]">04. RESPONSE</span>
            <CheckCircle2 className="w-4 h-4 text-[#55FF55]" />
          </div>
          <p className="text-xs text-white font-bold">200 OK Delivered</p>
          <p className="text-[11px] text-zinc-400">UI renders items</p>
        </motion.button>
      </div>

      {/* JSON Payload Inspection Box with Dynamic Slide-in */}
      <motion.div
        layout
        className="pixel-box p-4 bg-[#090a10] border-2 border-[#383e58]"
      >
        <div className="flex items-center justify-between pb-2 border-b border-[#2e334a] text-xs">
          <div className="flex items-center gap-1.5 text-[#55FFFF] font-bold">
            <Package className="w-3.5 h-3.5" />
            <span>PAYLOAD INSPECTOR [JSON]</span>
          </div>
          <span className="text-[10px] font-bold text-[#55FF55]">
            {step >= 2 ? 'STATUS: 200 OK' : 'AWAITING DISPATCH...'}
          </span>
        </div>
        <AnimatePresence mode="wait">
          <motion.pre
            key={step >= 2 ? 'delivered' : 'pending'}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mt-3 text-xs text-[#55FFFF] leading-relaxed"
          >
            {step >= 2
              ? `{\n  "status": "success",\n  "user": "Alex",\n  "savedNotes": [\n    "1. Math Homework - Calculus",\n    "2. Physics Lab Report"\n  ]\n}`
              : '// Advance to Step 3 or 4 to deliver JSON package across the wire...'}
          </motion.pre>
        </AnimatePresence>
      </motion.div>
    </div>
  );
};
