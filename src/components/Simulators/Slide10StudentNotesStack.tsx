import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Layout, Cpu, ArrowRightLeft, Database, Lock, Cloud, Globe, Sparkles } from 'lucide-react';
import { sound } from '../../utils/sound';
import { fireConfetti } from '../../utils/confetti';

interface Slide10Props {
  subStep?: number;
  onSubStepChange?: (subStep: number) => void;
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.07 },
  },
};

const blockVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8, y: 15 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 320, damping: 22 },
  },
};

export const Slide10StudentNotesStack: React.FC<Slide10Props> = ({
  subStep = 0,
  onSubStepChange,
}) => {
  const isRevealed = subStep >= 1;

  const pieces = [
    { name: '1. Frontend', role: 'UI buttons & editor', icon: Layout },
    { name: '2. Backend', role: 'Validates note sizes', icon: Cpu },
    { name: '3. API', role: 'HTTP messenger', icon: ArrowRightLeft },
    { name: '4. Database', role: 'Permanent storage', icon: Database },
    { name: '5. Auth', role: 'Account keycard', icon: Lock },
    { name: '6. Hosting', role: '24/7 online server', icon: Cloud },
    { name: '7. Domain', role: 'notes.dev address', icon: Globe },
  ];

  return (
    <div className="w-full flex flex-col gap-3 font-mono">
      {/* Case Study Goal */}
      <div className="pixel-box p-3 flex flex-col sm:flex-row items-center justify-between gap-2">
        <div>
          <span className="text-[10px] font-bold text-[#55FFFF]">QUEST OBJECTIVE</span>
          <p className="text-xs text-white mt-0.5">
            "Build a Student Notes App where users sign up, save homework, and access anywhere."
          </p>
        </div>

        <button
          onClick={() => {
            sound.success();
            fireConfetti();
            onSubStepChange?.(isRevealed ? 0 : 1);
          }}
          className="pixel-btn pixel-btn-primary px-3 py-1.5 text-xs cursor-pointer shrink-0 flex items-center gap-1"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>{isRevealed ? 'RESET' : 'REVEAL 7 LAYERS'}</span>
        </button>
      </div>

      {/* 7 Block Grid with Staggered Air Materialization */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isRevealed ? 'visible' : 'hidden'}
        className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs"
      >
        {pieces.map((p, idx) => {
          const Icon = p.icon;
          return (
            <motion.div
              key={idx}
              variants={blockVariants}
              className={`pixel-box p-2.5 transition-all ${
                isRevealed ? 'pixel-box-active' : 'opacity-20'
              }`}
            >
              <Icon className="w-5 h-5 mb-1 text-[#55FFFF]" />
              <h5 className="text-xs font-bold text-white uppercase">{p.name}</h5>
              <p className="text-[11px] text-zinc-400 mt-0.5">{p.role}</p>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};
