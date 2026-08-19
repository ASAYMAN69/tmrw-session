import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Dices, Check, X, Clock } from 'lucide-react';
import { sound } from '../../utils/sound';
import { fireConfetti } from '../../utils/confetti';

const QUESTS = [
  { title: 'Personal Developer Portfolio', time: '1-2 Days', stack: 'HTML + CSS (or React)', desc: 'Showcase your bio and 3 project links.' },
  { title: 'Student Homework Tracker', time: '2-3 Days', stack: 'React + Supabase', desc: 'Add assignments with due dates and checkboxes.' },
  { title: 'Coffee Brew Timer & Ratio Calc', time: '1-2 Days', stack: 'HTML + CSS + JS Timer', desc: 'Calculates water-to-coffee ratio and runs timer.' },
  { title: 'Daily Expense Log', time: '3-4 Days', stack: 'React + PostgreSQL', desc: 'Record daily purchases and compute totals.' }
];

export const Slide14FirstProjectPicker: React.FC<{ subStep?: number; onSubStepChange?: (subStep: number) => void }> = () => {
  const [quest, setQuest] = useState(QUESTS[0]);
  const [rolling, setRolling] = useState(false);

  const rollQuest = () => {
    sound.click();
    setRolling(true);
    let count = 0;
    const interval = setInterval(() => {
      const random = QUESTS[Math.floor(Math.random() * QUESTS.length)];
      setQuest(random);
      sound.packetPing();
      count++;
      if (count > 5) {
        clearInterval(interval);
        setRolling(false);
        sound.success();
        fireConfetti();
      }
    }, 90);
  };

  return (
    <div className="w-full flex flex-col gap-3 font-mono">
      {/* 2 Column: Good vs Avoid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
        <div className="pixel-box p-3 border-2 border-[#55FF55]">
          <div className="flex items-center gap-1.5 text-[#55FF55] font-bold mb-1">
            <Check className="w-4 h-4" />
            <span>RECOMMENDED FIRST PROJECTS (1-4 DAYS)</span>
          </div>
          <p className="text-zinc-300">Developer Portfolio, To-Do App, Study Tracker</p>
        </div>

        <div className="pixel-box p-3 border-2 border-[#FF5555]">
          <div className="flex items-center gap-1.5 text-[#FF5555] font-bold mb-1">
            <X className="w-4 h-4" />
            <span>AVOID AS FIRST PROJECT (BURNOUT TRAPS)</span>
          </div>
          <p className="text-zinc-300">"The Next TikTok", 3D MMO Game, Multi-vendor Marketplace</p>
        </div>
      </div>

      {/* Quest Generator */}
      <motion.div layout className="pixel-box p-4 bg-[#090a10] border-2 border-[#55FFFF]">
        <div className="flex items-center justify-between pb-2 border-b border-[#2e334a]">
          <div className="flex items-center gap-1.5 text-[#55FFFF] font-bold text-xs">
            <Dices className="w-4 h-4" />
            <span>STARTER PROJECT GENERATOR</span>
          </div>
          <button
            onClick={rollQuest}
            disabled={rolling}
            className="pixel-btn pixel-btn-primary px-3 py-1 text-xs cursor-pointer text-white flex items-center gap-1.5"
          >
            <Dices className={`w-3.5 h-3.5 ${rolling ? 'animate-spin' : ''}`} />
            <span>ROLL IDEA</span>
          </button>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={quest.title}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.1 }}
            className="mt-3 space-y-1.5 text-xs"
          >
            <h4 className="text-sm font-bold text-white uppercase">{quest.title}</h4>
            <p className="text-zinc-300">{quest.desc}</p>
            <div className="flex gap-2 pt-1">
              <span className="p-1 bg-[#121420] border border-[#2e334a] text-xs text-[#55FFFF]">
                Stack: {quest.stack}
              </span>
              <span className="p-1 bg-[#121420] border border-[#2e334a] text-xs text-[#55FF55] flex items-center gap-1">
                <Clock className="w-3 h-3" />
                <span>Duration: {quest.time}</span>
              </span>
            </div>
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </div>
  );
};
