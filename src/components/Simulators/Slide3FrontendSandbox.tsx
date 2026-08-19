import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Layers, Palette, Zap, Sparkles } from 'lucide-react';
import { sound } from '../../utils/sound';
import { fireConfetti } from '../../utils/confetti';

interface Slide3Props {
  subStep?: number;
  onSubStepChange?: (subStep: number) => void;
}

export const Slide3FrontendSandbox: React.FC<Slide3Props> = ({
  subStep = 0,
  onSubStepChange,
}) => {
  const hasHTML = true;
  const hasCSS = subStep >= 1;
  const hasJS = subStep >= 2;

  const [clicks, setClicks] = useState<number>(0);

  const handleClick = () => {
    if (!hasJS) {
      sound.click();
      alert("JavaScript is disabled! The button doesn't have an active event listener yet.");
      return;
    }
    sound.success();
    setClicks(prev => prev + 1);
    fireConfetti();
  };

  return (
    <div className="w-full flex flex-col gap-3 font-mono">
      {/* 3 Building Layers */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
        <motion.button
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
          onClick={() => { sound.click(); onSubStepChange?.(0); }}
          className={`pixel-box p-3 text-left cursor-pointer transition-all ${subStep === 0 ? 'pixel-box-active' : ''}`}
        >
          <div className="flex items-center justify-between mb-1">
            <span className="text-xs font-bold text-[#FFAA00]">01. HTML</span>
            <Layers className="w-4 h-4 text-[#FFAA00]" />
          </div>
          <p className="text-xs text-white font-bold">Structure (Skeleton)</p>
          <p className="text-[11px] text-zinc-400">&lt;button&gt;Sign Up&lt;/button&gt;</p>
        </motion.button>

        <motion.button
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          onClick={() => { sound.click(); onSubStepChange?.(1); }}
          className={`pixel-box p-3 text-left cursor-pointer transition-all ${subStep === 1 ? 'pixel-box-active' : ''}`}
        >
          <div className="flex items-center justify-between mb-1">
            <span className="text-xs font-bold text-[#55FFFF]">02. CSS</span>
            <Palette className="w-4 h-4 text-[#55FFFF]" />
          </div>
          <p className="text-xs text-white font-bold">Styling (Colors & Layout)</p>
          <p className="text-[11px] text-zinc-400">btn &#123; bg: #0066CC; &#125;</p>
        </motion.button>

        <motion.button
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          onClick={() => { sound.click(); onSubStepChange?.(2); }}
          className={`pixel-box p-3 text-left cursor-pointer transition-all ${subStep === 2 ? 'pixel-box-active' : ''}`}
        >
          <div className="flex items-center justify-between mb-1">
            <span className="text-xs font-bold text-[#FF5555]">03. JAVASCRIPT</span>
            <Zap className="w-4 h-4 text-[#FF5555]" />
          </div>
          <p className="text-xs text-white font-bold">Behavior (Interactivity)</p>
          <p className="text-[11px] text-zinc-400">btn.onClick(createAccount);</p>
        </motion.button>
      </div>

      {/* Interactive Sandbox with Dynamic Element Morphing */}
      <motion.div
        layout
        className="pixel-box p-6 flex flex-col items-center justify-center text-center relative overflow-hidden"
      >
        <span className="text-[10px] font-bold text-zinc-500 uppercase mb-4">
          LIVE CLIENT-SIDE BROWSER TEST
        </span>

        <motion.div
          layout
          transition={{ type: 'spring', stiffness: 350, damping: 25 }}
        >
          {!hasCSS ? (
            <motion.button
              key="raw-html"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              onClick={handleClick}
              className="cursor-pointer px-4 py-1.5 bg-gray-300 text-black border-2 border-gray-500 font-serif text-xs"
            >
              Create Account
            </motion.button>
          ) : (
            <motion.button
              key="styled-css"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onClick={handleClick}
              className={`pixel-btn pixel-btn-primary px-6 py-2.5 text-xs cursor-pointer flex items-center gap-2 ${
                hasJS ? 'shadow-glow-diamond' : ''
              }`}
            >
              <Sparkles className="w-4 h-4 text-[#55FFFF]" />
              <span>CREATE ACCOUNT</span>
            </motion.button>
          )}
        </motion.div>

        <div className="mt-4 text-xs text-zinc-400">
          User Clicks Processed: <strong className="text-[#55FF55]">{clicks}</strong>
          {hasJS && clicks > 0 && <span className="text-[#55FFFF] ml-2">• Event Listener Dispatched</span>}
        </div>
      </motion.div>
    </div>
  );
};
