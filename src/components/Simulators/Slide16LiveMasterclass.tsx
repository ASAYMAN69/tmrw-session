import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Calendar, Video, Sparkles, Terminal } from 'lucide-react';

interface Slide16Props {
  subStep?: number;
  onSubStepChange?: (subStep: number) => void;
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 15, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: 'spring', stiffness: 280, damping: 24 },
  },
};

export const Slide16LiveMasterclass: React.FC<Slide16Props> = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="w-full flex flex-col gap-3.5 font-mono select-none"
    >
      {/* 1. Header Bar: ACC CodeLaunch 2026 x Adamjee Cantonment College IT Club */}
      <motion.div variants={itemVariants} className="pixel-box p-3 bg-[#121420] flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-[#181b2c] border border-[#00FF66] flex items-center justify-center text-[#00FF66] shadow-pixel-sm">
            <Terminal className="w-4 h-4" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-pixel text-[10px] text-white">ACC CODELAUNCH</span>
              <span className="font-pixel text-[10px] text-[#00FF66]">2026</span>
            </div>
            <span className="text-[10px] text-zinc-400">Adamjee Cantonment College IT Club</span>
          </div>
        </div>

        <div className="hidden sm:flex items-center gap-1.5 text-[10px] text-[#00FF66] bg-[#090a10] px-2.5 py-1 border border-[#00FF66]/30">
          <span className="w-2 h-2 rounded-full bg-[#00FF66] animate-pulse" />
          <span>LIVE VIRTUAL BOOTCAMP</span>
        </div>
      </motion.div>

      {/* 2. Main Title Banner (Minecraft Cyber Style) */}
      <motion.div
        variants={itemVariants}
        className="pixel-box p-6 sm:p-8 bg-[#090a10] border-2 border-[#00FF66] shadow-glow-neon text-center relative overflow-hidden"
      >
        <div className="inline-block px-3 py-0.5 mb-2 bg-[#00FF66] text-black font-pixel text-[9px] uppercase tracking-wider shadow-pixel-sm">
          ONLINE MASTERCLASS
        </div>

        <h2 className="font-pixel text-xl sm:text-3xl md:text-4xl text-white tracking-wide uppercase mt-1">
          WEB DEVELOPMENT <span className="text-[#00FF66]">BOOTCAMP</span>
        </h2>

        <p className="text-xs sm:text-base text-zinc-300 max-w-xl mx-auto mt-3 leading-relaxed font-mono">
          Learn the essentials of web development and turn your ideas into engaging, functional websites through practical learning.
        </p>

        <p className="text-[11px] sm:text-xs text-[#55FFFF] font-bold mt-2">
          *no previous experience required*
        </p>
      </motion.div>

      {/* 3. 3-Column Event Specs Strip */}
      <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
        <div className="pixel-box p-4 flex items-center gap-3 bg-[#121420] border-2 border-[#2e334a]">
          <div className="w-9 h-9 bg-[#181b2c] border border-[#55FFFF] flex items-center justify-center text-[#55FFFF] shrink-0">
            <Video className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[10px] text-zinc-400 block font-bold">PLATFORM</span>
            <strong className="text-white text-sm">Google Meet</strong>
          </div>
        </div>

        <div className="pixel-box p-4 flex items-center gap-3 bg-[#121420] border-2 border-[#2e334a]">
          <div className="w-9 h-9 bg-[#181b2c] border border-[#FFAA00] flex items-center justify-center text-[#FFAA00] shrink-0">
            <Calendar className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[10px] text-zinc-400 block font-bold">DATE RANGE</span>
            <strong className="text-white text-sm">08–21 September</strong>
          </div>
        </div>

        <div className="pixel-box p-4 flex items-center gap-3 bg-[#121420] border-2 border-[#2e334a]">
          <div className="w-9 h-9 bg-[#181b2c] border border-[#00FF66] flex items-center justify-center text-[#00FF66] shrink-0">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[10px] text-zinc-400 block font-bold">CURRICULUM</span>
            <strong className="text-[#00FF66] text-sm">8 Exclusive Sessions</strong>
          </div>
        </div>
      </motion.div>

      {/* 4. Bottom Slogan */}
      <motion.p variants={itemVariants} className="text-xs text-center text-zinc-400 font-bold tracking-widest pt-3 font-pixel">
        WE BRING THE FUTURE TO YOU
      </motion.p>
    </motion.div>
  );
};
