import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, CheckCircle2, XCircle, FileText, ArrowRight, Sparkles } from 'lucide-react';
import { sound } from '../../../utils/sound';

export const Stage1Idea: React.FC = () => {
  const [scopeMode, setScopeMode] = useState<'mvp' | 'bloated'>('mvp');

  return (
    <div className="flex flex-col gap-4 font-mono select-none">
      {/* Scope Selector Bar */}
      <div className="flex items-center justify-between pb-2 border-b border-[#2e334a]">
        <div className="flex items-center gap-2">
          <Lightbulb className="w-5 h-5 text-[#FFAA00]" />
          <h3 className="text-sm sm:text-base font-bold text-white font-sans uppercase">
            STAGE 01: DEFINING THE MVP (MINIMUM VIABLE PRODUCT)
          </h3>
        </div>
        <div className="flex gap-1">
          <button
            onClick={() => { sound.click(); setScopeMode('mvp'); }}
            className={`pixel-btn px-2.5 py-1 text-xs ${scopeMode === 'mvp' ? 'pixel-btn-primary text-white' : 'text-zinc-400'}`}
          >
            ✓ LEAN MVP (3 DAYS)
          </button>
          <button
            onClick={() => { sound.click(); setScopeMode('bloated'); }}
            className={`pixel-btn px-2.5 py-1 text-xs ${scopeMode === 'bloated' ? 'bg-[#FF5555]/20 text-[#FF5555] border-[#FF5555]' : 'text-zinc-400'}`}
          >
            ✗ OVER-ENGINEERED
          </button>
        </div>
      </div>

      {/* Main Visual Comparison & Wireframe */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Left: User Story & Problem Definition */}
        <div className="p-4 bg-[#090a10] border-2 border-[#383e58] flex flex-col justify-between gap-3 shadow-pixel">
          <div>
            <span className="text-[10px] text-zinc-400 font-bold uppercase block mb-1">
              THE GOLDEN USER STORY FORMULA:
            </span>
            <div className="p-3 bg-[#121420] border border-[#55FFFF]/40 text-xs text-white space-y-1">
              <p><span className="text-[#55FFFF] font-bold">AS A:</span> Student with busy homework schedules</p>
              <p><span className="text-[#55FF55] font-bold">I WANT TO:</span> Save class notes with due dates</p>
              <p><span className="text-[#FFAA00] font-bold">SO THAT:</span> I never miss an assignment deadline</p>
            </div>
          </div>

          <div className="space-y-1.5 text-xs">
            {scopeMode === 'mvp' ? (
              <div className="p-2 bg-[#55FF55]/10 border border-[#55FF55]/40 text-[#55FF55] flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>Scope: 1 Problem, 1 User, 2 Screens. Ship fast & get feedback!</span>
              </div>
            ) : (
              <div className="p-2 bg-[#FF5555]/10 border border-[#FF5555]/40 text-[#FF5555] flex items-center gap-2">
                <XCircle className="w-4 h-4 shrink-0" />
                <span>Scope Creep: 3D AI Chatbot + Crypto payments = Never finishes.</span>
              </div>
            )}
          </div>
        </div>

        {/* Right: 2-Screen Napkin Wireframe Blueprint */}
        <div className="p-4 bg-[#090a10] border-2 border-[#383e58] shadow-pixel flex flex-col justify-between">
          <span className="text-[10px] text-zinc-400 font-bold uppercase block mb-2">
            NAPKIN SCREEN BLUEPRINT (BEFORE CODING):
          </span>

          <div className="grid grid-cols-2 gap-3 text-xs">
            {/* Screen 1 */}
            <div className="p-2.5 bg-[#121420] border border-[#2e334a] flex flex-col gap-1.5 text-center">
              <span className="text-[9px] text-[#55FFFF] font-bold">SCREEN 01: DASHBOARD</span>
              <div className="h-6 bg-[#181b2c] border border-dashed border-[#383e58] flex items-center justify-center text-[10px] text-zinc-400">
                [ + New Note Button ]
              </div>
              <div className="h-10 bg-[#181b2c] border border-[#383e58] flex items-center justify-center text-[10px] text-zinc-300">
                Notes List (2 Cards)
              </div>
            </div>

            {/* Screen 2 */}
            <div className="p-2.5 bg-[#121420] border border-[#2e334a] flex flex-col gap-1.5 text-center">
              <span className="text-[9px] text-[#55FF55] font-bold">SCREEN 02: EDITOR</span>
              <div className="h-6 bg-[#181b2c] border border-[#383e58] flex items-center justify-center text-[10px] text-zinc-300">
                Title Input
              </div>
              <div className="h-10 bg-[#181b2c] border border-[#383e58] flex items-center justify-center text-[10px] text-zinc-300">
                Body Textarea
              </div>
            </div>
          </div>

          <p className="text-[11px] text-zinc-400 text-center mt-3">
            "Sketch the screens on paper first. Coding is 10x faster when you know what to build."
          </p>
        </div>
      </div>
    </div>
  );
};
