import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Layout,
  Cpu,
  ArrowRightLeft,
  Database,
  Lock,
  Cloud,
  Globe,
  Sparkles,
  CheckCircle2,
  Lightbulb,
  Rocket,
  Server
} from 'lucide-react';
import { sound } from '../../utils/sound';
import { fireConfetti } from '../../utils/confetti';

interface Slide10Props {
  subStep?: number;
  onSubStepChange?: (subStep: number) => void;
}

export const Slide10StudentNotesStack: React.FC<Slide10Props> = ({
  subStep = 0,
  onSubStepChange,
}) => {
  const currentStep = Math.min(2, Math.max(0, subStep));

  const pieces = [
    { name: '1. Frontend', role: 'React UI & note editor', icon: Layout, color: '#55FFFF' },
    { name: '2. Backend', role: 'API route handlers', icon: Cpu, color: '#FFAA00' },
    { name: '3. API', role: 'HTTP JSON courier', icon: ArrowRightLeft, color: '#55FFFF' },
    { name: '4. Database', role: 'PostgreSQL persistence', icon: Database, color: '#55FF55' },
    { name: '5. Auth', role: 'JWT student keycard', icon: Lock, color: '#FFAA00' },
    { name: '6. Hosting', role: 'Vercel edge cloud', icon: Cloud, color: '#55FFFF' },
    { name: '7. Domain', role: 'studentnotes.dev', icon: Globe, color: '#55FF55' },
  ];

  return (
    <div className="w-full flex flex-col gap-3.5 font-mono select-none">
      {/* 3 Main Points Top Hotbar */}
      <div className="bg-[#121420] border-2 border-[#2e334a] p-1.5 shadow-pixel">
        <div className="grid grid-cols-3 gap-2">
          {/* Point 1: User Story */}
          <button
            onClick={() => { sound.click(); onSubStepChange?.(0); }}
            className={`py-2.5 px-3 flex items-center justify-between cursor-pointer border-2 transition-all ${
              currentStep === 0
                ? 'bg-[#1e2640] border-[#FFAA00] text-[#FFAA00] shadow-pixel scale-[1.02]'
                : 'bg-[#090a10] border-[#22273a] text-zinc-400 hover:text-white'
            }`}
          >
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-[#FFAA00]" />
              <span className="text-xs sm:text-sm font-black">01. USER STORY</span>
            </div>
            <span className="text-[10px] font-bold hidden sm:inline text-zinc-500">Requirements</span>
          </button>

          {/* Point 2: 7-Layer Mapping */}
          <button
            onClick={() => { sound.click(); onSubStepChange?.(1); }}
            className={`py-2.5 px-3 flex items-center justify-between cursor-pointer border-2 transition-all ${
              currentStep === 1
                ? 'bg-[#1e2640] border-[#55FFFF] text-[#55FFFF] shadow-pixel scale-[1.02]'
                : 'bg-[#090a10] border-[#22273a] text-zinc-400 hover:text-white'
            }`}
          >
            <div className="flex items-center gap-2">
              <Layout className="w-5 h-5 text-[#55FFFF]" />
              <span className="text-xs sm:text-sm font-black">02. 7-LAYER MAP</span>
            </div>
            <span className="text-[10px] font-bold hidden sm:inline text-zinc-500">Stack Synthesis</span>
          </button>

          {/* Point 3: Production Launch */}
          <button
            onClick={() => { sound.click(); onSubStepChange?.(2); }}
            className={`py-2.5 px-3 flex items-center justify-between cursor-pointer border-2 transition-all ${
              currentStep === 2
                ? 'bg-[#1e2640] border-[#55FF55] text-[#55FF55] shadow-pixel scale-[1.02]'
                : 'bg-[#090a10] border-[#22273a] text-zinc-400 hover:text-white'
            }`}
          >
            <div className="flex items-center gap-2">
              <Rocket className="w-5 h-5 text-[#55FF55]" />
              <span className="text-xs sm:text-sm font-black">03. LIVE LAUNCH</span>
            </div>
            <span className="text-[10px] font-bold hidden sm:inline text-zinc-500">Go to Market</span>
          </button>
        </div>
      </div>

      {/* Main 2-Section Body Split */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* LEFT SECTION: Concept & Explanation */}
        <div className="bg-[#121420] border-2 border-[#383e58] p-6 shadow-pixel flex flex-col justify-between">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 8 }}
              transition={{ duration: 0.15 }}
              className="flex flex-col gap-3.5"
            >
              {/* POINT 1: USER STORY */}
              {currentStep === 0 && (
                <>
                  <div className="flex items-center gap-2.5">
                    <span className="text-xs sm:text-sm font-black text-[#FFAA00] px-2.5 py-0.5 bg-[#FFAA00]/15 border border-[#FFAA00]/40">
                      #01
                    </span>
                    <h3 className="text-lg sm:text-xl font-black text-white font-sans uppercase">
                      The Real-World Goal: Student Notes App
                    </h3>
                  </div>

                  <p className="text-sm sm:text-base text-zinc-100 font-semibold leading-relaxed">
                    "Build an online application where students sign in with Google, take lecture notes, search by subject tags, and access them from any phone or laptop."
                  </p>

                  <div className="p-3.5 bg-[#090a10] border border-[#2e334a] text-xs space-y-1.5">
                    <span className="text-zinc-400 font-bold block mb-1 text-[10px]">CORE FEATURE SPEC:</span>
                    <p className="text-zinc-200">• Fast note editor with auto-saving</p>
                    <p className="text-zinc-200">• Private password-less login</p>
                    <p className="text-zinc-200">• 99.9% uptime on custom URL</p>
                  </div>

                  <div className="p-3 bg-[#181b2c] border-l-4 border-[#FFAA00] text-xs sm:text-sm text-zinc-200 font-medium flex items-center gap-2">
                    <Lightbulb className="w-4 h-4 text-[#FFAA00] shrink-0" />
                    <span><strong>Takeaway:</strong> Every complex project starts with a simple human problem.</span>
                  </div>
                </>
              )}

              {/* POINT 2: 7-LAYER MAPPING */}
              {currentStep === 1 && (
                <>
                  <div className="flex items-center gap-2.5">
                    <span className="text-xs sm:text-sm font-black text-[#55FFFF] px-2.5 py-0.5 bg-[#55FFFF]/15 border border-[#55FFFF]/40">
                      #02
                    </span>
                    <h3 className="text-lg sm:text-xl font-black text-white font-sans uppercase">
                      Mapping Features to the 7 Layers
                    </h3>
                  </div>

                  <p className="text-sm sm:text-base text-zinc-100 font-semibold leading-relaxed">
                    Every single feature maps directly to one of the 7 puzzle pieces we learned today:
                  </p>

                  <div className="p-3.5 bg-[#090a10] border border-[#2e334a] text-xs space-y-1 font-mono">
                    <p className="text-zinc-200">1. <span className="text-[#55FFFF]">Note Editor:</span> React + Tailwind UI</p>
                    <p className="text-zinc-200">2. <span className="text-[#FFAA00]">Validation:</span> Express API Route</p>
                    <p className="text-zinc-200">3. <span className="text-[#55FF55]">Storage:</span> PostgreSQL Table</p>
                    <p className="text-zinc-200">4. <span className="text-[#55FFFF]">Hosting:</span> Vercel + studentnotes.dev</p>
                  </div>

                  <div className="p-3 bg-[#181b2c] border-l-4 border-[#55FFFF] text-xs sm:text-sm text-zinc-200 font-medium flex items-center gap-2">
                    <Lightbulb className="w-4 h-4 text-[#55FFFF] shrink-0" />
                    <span><strong>Takeaway:</strong> No magic! Every button click has a clear destination in the stack.</span>
                  </div>
                </>
              )}

              {/* POINT 3: PRODUCTION LAUNCH */}
              {currentStep === 2 && (
                <>
                  <div className="flex items-center gap-2.5">
                    <span className="text-xs sm:text-sm font-black text-[#55FF55] px-2.5 py-0.5 bg-[#55FF55]/15 border border-[#55FF55]/40">
                      #03
                    </span>
                    <h3 className="text-lg sm:text-xl font-black text-white font-sans uppercase">
                      Live Production Launch
                    </h3>
                  </div>

                  <p className="text-sm sm:text-base text-zinc-100 font-semibold leading-relaxed">
                    Once all 7 layers are wired, push your code to GitHub to trigger automated CI/CD builds:
                  </p>

                  <div className="p-3.5 bg-[#090a10] border border-[#2e334a] text-xs space-y-1.5 font-mono">
                    <div className="flex items-center justify-between text-zinc-300">
                      <span>✓ Build Bundle:</span>
                      <span className="text-[#55FF55]">0.45s (Vite)</span>
                    </div>
                    <div className="flex items-center justify-between text-zinc-300">
                      <span>✓ Edge DNS Linked:</span>
                      <span className="text-[#55FF55]">studentnotes.dev</span>
                    </div>
                    <div className="flex items-center justify-between text-zinc-300">
                      <span>✓ Status:</span>
                      <span className="text-[#55FF55] font-black">100% OPERATIONAL</span>
                    </div>
                  </div>

                  <div className="p-3 bg-[#181b2c] border-l-4 border-[#55FF55] text-xs sm:text-sm text-zinc-200 font-medium flex items-center gap-2">
                    <Lightbulb className="w-4 h-4 text-[#55FF55] shrink-0" />
                    <span><strong>Takeaway:</strong> Modern cloud tools deploy updates in seconds with zero downtime.</span>
                  </div>
                </>
              )}
            </motion.div>
          </AnimatePresence>

          <div className="pt-3.5 border-t border-[#2e334a] text-xs sm:text-sm text-zinc-400 flex items-center justify-between font-bold">
            <span>Press Next or Hotbar to advance</span>
            <span className="text-[#55FFFF]">Module 09: Case Study</span>
          </div>
        </div>

        {/* RIGHT SECTION: Visual Server Engine Preview */}
        <div className="bg-[#090a10] border-2 border-[#55FFFF] p-6 shadow-pixel flex flex-col">
          {/* Header */}
          <div className="flex items-center gap-2 pb-3 border-b border-[#2e334a] text-xs sm:text-sm font-bold text-zinc-300">
            <Server className="w-5 h-5 text-[#55FFFF]" />
            <span>CASE STUDY ARCHITECTURE</span>
          </div>

          {/* Dynamic Animation Viewport - Centered Vertically & Horizontally */}
          <div className="flex-1 flex flex-col items-center justify-center py-6 w-full my-auto">
            {/* AUTOMATION 1 & 2: 7-Layer Interactive Grid */}
            {currentStep <= 1 && (
              <div className="w-full max-w-md mx-auto space-y-3 font-mono">
                <div className="p-4 bg-[#121420] border-2 border-[#55FFFF] shadow-pixel space-y-3">
                  <div className="flex items-center justify-between border-b border-[#2e334a] pb-2 text-xs">
                    <span className="text-zinc-400 font-bold">7-PIECE STACK:</span>
                    <span className="text-[#55FFFF] font-bold">COMPLETE BLUEPRINT</span>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5 text-xs">
                    {pieces.map((p, idx) => {
                      const Icon = p.icon;
                      return (
                        <div
                          key={idx}
                          className="p-2 bg-[#090a10] border border-[#2e334a] hover:border-[#55FFFF] transition-all"
                        >
                          <Icon className="w-4 h-4 mb-1" style={{ color: p.color }} />
                          <strong className="block text-[11px] text-white">{p.name}</strong>
                          <span className="text-[9px] text-zinc-400">{p.role}</span>
                        </div>
                      );
                    })}
                  </div>

                  <div className="p-2 bg-[#091f14] border border-[#55FF55]/60 text-center text-[#55FF55] text-xs font-bold">
                    ✓ All 7 components verified and connected.
                  </div>
                </div>
              </div>
            )}

            {/* AUTOMATION 3: Launch Terminal Trigger */}
            {currentStep === 2 && (
              <div className="w-full max-w-md mx-auto space-y-3 font-mono">
                <div className="p-4 bg-[#121420] border-2 border-[#55FF55] shadow-pixel space-y-3">
                  <div className="flex items-center justify-between border-b border-[#2e334a] pb-2 text-xs">
                    <span className="text-zinc-400 font-bold">PRODUCTION STATUS</span>
                    <span className="text-[#55FF55] font-bold">LIVE ONLINE</span>
                  </div>

                  <div className="p-3 bg-[#090a10] border border-[#55FF55]/60 space-y-2 text-xs font-mono">
                    <div className="flex items-center gap-2 text-[#55FF55]">
                      <CheckCircle2 className="w-4 h-4" />
                      <span className="font-bold">Deployed to studentnotes.dev</span>
                    </div>

                    <div className="p-2 bg-[#121420] border border-[#2e334a] text-zinc-300 text-[11px]">
                      $ curl https://studentnotes.dev/api/health<br />
                      <span className="text-[#55FF55]">{"{ status: 200, uptime: '99.99%' }"}</span>
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      sound.success();
                      fireConfetti();
                    }}
                    className="w-full py-2 bg-[#55FF55] text-black text-xs font-black flex items-center justify-center gap-2 shadow-pixel hover:scale-105 transition-all cursor-pointer"
                  >
                    <Rocket className="w-4 h-4" />
                    <span>TRIGGER CELEBRATION CONFETTI</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
