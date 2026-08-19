import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, Cpu, Database, Check, X, HelpCircle } from 'lucide-react';
import { sound } from '../../utils/sound';

interface Slide2Props {
  subStep?: number;
  onSubStepChange?: (subStep: number) => void;
}

export const Slide2WhatMakesWebsite: React.FC<Slide2Props> = ({
  subStep = 0,
  onSubStepChange,
}) => {
  const [answered, setAnswered] = useState<boolean>(false);

  return (
    <div className="w-full flex flex-col gap-5 font-mono">
      {/* 3 Core Columns (Clean, Open) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Frontend */}
        <button
          onClick={() => { sound.click(); onSubStepChange?.(1); }}
          className={`p-4 text-left cursor-pointer transition-all border-b-2 ${
            subStep === 1 ? 'border-[#55FFFF] bg-[#121420]/50' : 'border-transparent hover:border-[#2e334a]'
          }`}
        >
          <div className="flex items-center gap-2 mb-2">
            <Eye className="w-5 h-5 text-[#55FFFF]" />
            <span className="text-xs font-bold text-[#55FFFF]">01. FRONTEND</span>
          </div>
          <p className="text-xs text-[#55FF55] font-bold">&gt; What you see</p>
          <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
            HTML structure, CSS colors, and React buttons running in your browser.
          </p>
        </button>

        {/* Backend */}
        <button
          onClick={() => { sound.click(); onSubStepChange?.(2); }}
          className={`p-4 text-left cursor-pointer transition-all border-b-2 ${
            subStep === 2 ? 'border-[#55FFFF] bg-[#121420]/50' : 'border-transparent hover:border-[#2e334a]'
          }`}
        >
          <div className="flex items-center gap-2 mb-2">
            <Cpu className="w-5 h-5 text-[#55FFFF]" />
            <span className="text-xs font-bold text-[#55FFFF]">02. BACKEND</span>
          </div>
          <p className="text-xs text-[#55FF55] font-bold">&gt; What happens</p>
          <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
            Server calculations, password checks, and business logic.
          </p>
        </button>

        {/* Database */}
        <button
          onClick={() => { sound.click(); onSubStepChange?.(3); }}
          className={`p-4 text-left cursor-pointer transition-all border-b-2 ${
            subStep === 3 ? 'border-[#55FFFF] bg-[#121420]/50' : 'border-transparent hover:border-[#2e334a]'
          }`}
        >
          <div className="flex items-center gap-2 mb-2">
            <Database className="w-5 h-5 text-[#55FFFF]" />
            <span className="text-xs font-bold text-[#55FFFF]">03. DATABASE</span>
          </div>
          <p className="text-xs text-[#55FF55] font-bold">&gt; What is saved</p>
          <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
            Permanent cloud storage saving user accounts and notes forever.
          </p>
        </button>
      </div>

      {/* Quick Check Question (Unboxed) */}
      <div className="border-t border-[#2e334a]/60 pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <div className="flex items-center gap-1.5 text-xs font-bold text-[#FFAA00]">
            <HelpCircle className="w-4 h-4" />
            <span>HOW DO THEY COMMUNICATE?</span>
          </div>
          <p className="text-xs text-zinc-300 mt-0.5">
            When you click a button in the browser, who validates your action?
          </p>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={() => {
              sound.click();
              sound.success();
              setAnswered(true);
            }}
            className="pixel-btn pixel-btn-primary px-3 py-1.5 cursor-pointer text-xs flex items-center gap-1.5"
          >
            <Check className="w-3.5 h-3.5 text-[#55FF55]" />
            <span>The Backend Server</span>
          </button>
          <button
            onClick={() => {
              sound.click();
              alert("Wrong! The browser is the frontend; it must send data to the backend server.");
            }}
            className="pixel-btn px-3 py-1.5 cursor-pointer text-xs flex items-center gap-1.5 text-zinc-400"
          >
            <X className="w-3.5 h-3.5 text-[#FF5555]" />
            <span>The Browser Locally</span>
          </button>
        </div>
      </div>

      {answered && (
        <p className="text-xs text-[#55FF55] font-bold flex items-center gap-1.5 -mt-2">
          <Check className="w-4 h-4" />
          <span>Correct! The frontend sends an API request to the backend, which validates and stores data.</span>
        </p>
      )}
    </div>
  );
};
