import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Key, Calculator, ShieldAlert, Terminal } from 'lucide-react';
import { sound } from '../../utils/sound';

interface Slide4Props {
  subStep?: number;
  onSubStepChange?: (subStep: number) => void;
}

export const Slide4BackendLogic: React.FC<Slide4Props> = ({
  subStep = 0,
  onSubStepChange,
}) => {
  const [output, setOutput] = useState<string>('Select a backend pipeline action to inspect...');

  const runLogic = (type: 'auth' | 'calc' | 'security') => {
    sound.packetPing();
    if (type === 'auth') {
      setOutput('[AUTH]: Checking password hash -> Stored bcrypt hash matches -> JWT Token issued. (200 OK)');
    } else if (type === 'calc') {
      setOutput('[CALC]: Subtotal $100.00 - Promo 20% + State Tax $7.00 = Final Total $87.00 (200 OK)');
    } else {
      setOutput('[SECURITY]: Stripped malicious <script> tag -> Sanitized payload saved: "Math Notes" (201 Created)');
    }
    sound.success();
  };

  return (
    <div className="w-full flex flex-col gap-3 font-mono">
      {/* 3 Backend Pipeline Actions */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
        <motion.button
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
          onClick={() => {
            sound.click();
            onSubStepChange?.(0);
            runLogic('auth');
          }}
          className={`pixel-box p-3 text-left cursor-pointer transition-all ${subStep === 0 ? 'pixel-box-active' : ''}`}
        >
          <div className="flex items-center justify-between mb-1">
            <span className="text-[10px] font-bold text-[#FFAA00]">01. LOGIN CHECK</span>
            <Key className="w-4 h-4 text-[#FFAA00]" />
          </div>
          <p className="text-xs text-white font-bold">Password Hash</p>
          <p className="text-[11px] text-zinc-400">Verifies user credentials</p>
        </motion.button>

        <motion.button
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          onClick={() => {
            sound.click();
            onSubStepChange?.(1);
            runLogic('calc');
          }}
          className={`pixel-box p-3 text-left cursor-pointer transition-all ${subStep === 1 ? 'pixel-box-active' : ''}`}
        >
          <div className="flex items-center justify-between mb-1">
            <span className="text-[10px] font-bold text-[#55FFFF]">02. BUSINESS RULES</span>
            <Calculator className="w-4 h-4 text-[#55FFFF]" />
          </div>
          <p className="text-xs text-white font-bold">Price Calculation</p>
          <p className="text-[11px] text-zinc-400">Taxes, cart discounts</p>
        </motion.button>

        <motion.button
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          onClick={() => {
            sound.click();
            onSubStepChange?.(2);
            runLogic('security');
          }}
          className={`pixel-box p-3 text-left cursor-pointer transition-all ${subStep === 2 ? 'pixel-box-active' : ''}`}
        >
          <div className="flex items-center justify-between mb-1">
            <span className="text-[10px] font-bold text-[#FF5555]">03. SECURITY GUARD</span>
            <ShieldAlert className="w-4 h-4 text-[#FF5555]" />
          </div>
          <p className="text-xs text-white font-bold">Input Sanitization</p>
          <p className="text-[11px] text-zinc-400">Blocks hacker exploits</p>
        </motion.button>
      </div>

      {/* Terminal Output with Stream Animation */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="pixel-box p-4 bg-[#090a10] border-2 border-[#55FFFF]"
      >
        <div className="flex items-center justify-between pb-2 border-b border-[#2e334a] text-xs">
          <div className="flex items-center gap-1.5 text-[#55FF55] font-bold">
            <Terminal className="w-3.5 h-3.5" />
            <span>NODE_SERVER_PROCESS [STDOUT]</span>
          </div>
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={output}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            transition={{ duration: 0.15 }}
            className="mt-3 text-xs text-[#55FFFF] leading-relaxed"
          >
            &gt; {output}
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </div>
  );
};
