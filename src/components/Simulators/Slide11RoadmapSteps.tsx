import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Palette,
  Cpu,
  Rocket,
  CheckCircle2,
  Lightbulb,
  Server,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { sound } from '../../utils/sound';

interface Slide11Props {
  subStep?: number;
  onSubStepChange?: (subStep: number) => void;
}

export const Slide11RoadmapSteps: React.FC<Slide11Props> = ({
  subStep = 0,
  onSubStepChange,
}) => {
  const currentStep = Math.min(2, Math.max(0, subStep));

  const phases = [
    {
      title: 'PHASE 1: FRONTEND & UI',
      icon: Palette,
      badge: '#FFAA00',
      milestones: [
        { num: '01', name: 'Define the Core Problem', desc: 'Write down the single feature your app must do.' },
        { num: '02', name: 'Design Wireframe Screens', desc: 'Sketch UI layout before writing any code.' },
        { num: '03', name: 'Build React UI Prototype', desc: 'Create buttons, inputs, and dark mode styling.' }
      ]
    },
    {
      title: 'PHASE 2: SERVER & STORAGE',
      icon: Cpu,
      badge: '#55FFFF',
      milestones: [
        { num: '04', name: 'Write Backend API Routes', desc: 'Implement GET and POST endpoints in Express/Next.js.' },
        { num: '05', name: 'Create Database Tables', desc: 'Structure PostgreSQL rows, columns, and foreign keys.' },
        { num: '06', name: 'Add User Auth & Sessions', desc: 'Implement JWT tokens and secure password hashing.' }
      ]
    },
    {
      title: 'PHASE 3: CLOUD & LAUNCH',
      icon: Rocket,
      badge: '#55FF55',
      milestones: [
        { num: '07', name: 'Test Responsive & Errors', desc: 'Verify mobile screen sizes and test network errors.' },
        { num: '08', name: 'Deploy to Cloud (Vercel)', desc: 'Push Git commits to trigger automated edge builds.' },
        { num: '09', name: 'Connect Custom Domain', desc: 'Set up DNS A records for your custom .dev address.' }
      ]
    }
  ];

  const activePhase = phases[currentStep];
  const ActiveIcon = activePhase.icon;

  return (
    <div className="w-full flex flex-col gap-3.5 font-mono select-none">
      {/* 3 Main Points Top Hotbar */}
      <div className="bg-[#121420] border-2 border-[#2e334a] p-1.5 shadow-pixel">
        <div className="grid grid-cols-3 gap-2">
          {/* Phase 1 */}
          <button
            onClick={() => { sound.click(); onSubStepChange?.(0); }}
            className={`py-2.5 px-3 flex items-center justify-between cursor-pointer border-2 transition-all ${
              currentStep === 0
                ? 'bg-[#1e2640] border-[#FFAA00] text-[#FFAA00] shadow-pixel scale-[1.02]'
                : 'bg-[#090a10] border-[#22273a] text-zinc-400 hover:text-white'
            }`}
          >
            <div className="flex items-center gap-2">
              <Palette className="w-5 h-5 text-[#FFAA00]" />
              <span className="text-xs sm:text-sm font-black">01. UI & DESIGN</span>
            </div>
            <span className="text-[10px] font-bold hidden sm:inline text-zinc-500">Steps 1-3</span>
          </button>

          {/* Phase 2 */}
          <button
            onClick={() => { sound.click(); onSubStepChange?.(1); }}
            className={`py-2.5 px-3 flex items-center justify-between cursor-pointer border-2 transition-all ${
              currentStep === 1
                ? 'bg-[#1e2640] border-[#55FFFF] text-[#55FFFF] shadow-pixel scale-[1.02]'
                : 'bg-[#090a10] border-[#22273a] text-zinc-400 hover:text-white'
            }`}
          >
            <div className="flex items-center gap-2">
              <Cpu className="w-5 h-5 text-[#55FFFF]" />
              <span className="text-xs sm:text-sm font-black">02. SERVER & DB</span>
            </div>
            <span className="text-[10px] font-bold hidden sm:inline text-zinc-500">Steps 4-6</span>
          </button>

          {/* Phase 3 */}
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
              <span className="text-xs sm:text-sm font-black">03. CLOUD & LAUNCH</span>
            </div>
            <span className="text-[10px] font-bold hidden sm:inline text-zinc-500">Steps 7-9</span>
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
              <div className="flex items-center gap-2.5">
                <span
                  className="text-xs sm:text-sm font-black px-2.5 py-0.5 border"
                  style={{ color: activePhase.badge, borderColor: `${activePhase.badge}60`, backgroundColor: `${activePhase.badge}15` }}
                >
                  PHASE 0{currentStep + 1}
                </span>
                <h3 className="text-lg sm:text-xl font-black text-white font-sans uppercase">
                  {activePhase.title}
                </h3>
              </div>

              <p className="text-sm sm:text-base text-zinc-100 font-semibold leading-relaxed">
                {currentStep === 0 && 'Start with the user experience. Build the visual interface and interactions first before worrying about complex databases.'}
                {currentStep === 1 && 'Once your UI looks right, connect real logic. Write API endpoints to handle requests and commit data to SQL tables.'}
                {currentStep === 2 && 'Test across different devices, push your code to GitHub, and deploy automatically to global edge hosting with custom DNS.'}
              </p>

              {/* 3 Step List */}
              <div className="space-y-1.5 text-xs">
                {activePhase.milestones.map((m, idx) => (
                  <div key={idx} className="p-2.5 bg-[#090a10] border border-[#2e334a] flex items-start gap-2.5">
                    <span
                      className="font-black text-xs px-1.5 py-0.5 border shrink-0"
                      style={{ color: activePhase.badge, borderColor: `${activePhase.badge}60` }}
                    >
                      {m.num}
                    </span>
                    <div>
                      <strong className="text-white block">{m.name}</strong>
                      <span className="text-zinc-400 text-[11px]">{m.desc}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-3 bg-[#181b2c] border-l-4 text-xs sm:text-sm text-zinc-200 font-medium flex items-center gap-2" style={{ borderColor: activePhase.badge }}>
                <Lightbulb className="w-4 h-4 shrink-0" style={{ color: activePhase.badge }} />
                <span><strong>Takeaway:</strong> Don't try to build everything at once. Complete one milestone at a time!</span>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="pt-3.5 border-t border-[#2e334a] text-xs sm:text-sm text-zinc-400 flex items-center justify-between font-bold">
            <span>Press Next or Hotbar to advance</span>
            <span className="text-[#55FFFF]">Module 10: Roadmap</span>
          </div>
        </div>

        {/* RIGHT SECTION: Visual Server Engine Preview */}
        <div className="bg-[#090a10] border-2 border-[#55FFFF] p-6 shadow-pixel flex flex-col">
          {/* Header */}
          <div className="flex items-center gap-2 pb-3 border-b border-[#2e334a] text-xs sm:text-sm font-bold text-zinc-300">
            <Server className="w-5 h-5 text-[#55FFFF]" />
            <span>DEVELOPMENT PROGRESS ENGINE</span>
          </div>

          {/* Dynamic Animation Viewport - Centered Vertically & Horizontally */}
          <div className="flex-1 flex flex-col items-center justify-center py-6 w-full my-auto">
            <div className="w-full max-w-md mx-auto space-y-3 font-mono">
              <div className="p-4 bg-[#121420] border-2 shadow-pixel space-y-3" style={{ borderColor: activePhase.badge }}>
                <div className="flex items-center justify-between border-b border-[#2e334a] pb-2 text-xs">
                  <span className="text-zinc-400 font-bold">CURRENT FOCUS:</span>
                  <span className="font-black text-xs" style={{ color: activePhase.badge }}>
                    {activePhase.title}
                  </span>
                </div>

                {/* 3 Progress Bars */}
                <div className="space-y-2 text-xs">
                  <div className="space-y-1">
                    <div className="flex justify-between text-[11px]">
                      <span className="text-zinc-300">Phase 1: Frontend & UI</span>
                      <span className="text-[#FFAA00] font-bold">{currentStep >= 0 ? (currentStep === 0 ? 'IN PROGRESS (85%)' : '100% DONE') : '0%'}</span>
                    </div>
                    <div className="w-full bg-[#090a10] h-2.5 border border-[#2e334a] overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: currentStep >= 1 ? '100%' : '85%' }}
                        className="bg-[#FFAA00] h-full"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <div className="flex justify-between text-[11px]">
                      <span className="text-zinc-300">Phase 2: Server & Database</span>
                      <span className="text-[#55FFFF] font-bold">{currentStep >= 1 ? (currentStep === 1 ? 'IN PROGRESS (70%)' : '100% DONE') : '0%'}</span>
                    </div>
                    <div className="w-full bg-[#090a10] h-2.5 border border-[#2e334a] overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: currentStep >= 2 ? '100%' : currentStep === 1 ? '70%' : '0%' }}
                        className="bg-[#55FFFF] h-full"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <div className="flex justify-between text-[11px]">
                      <span className="text-zinc-300">Phase 3: Cloud & Launch</span>
                      <span className="text-[#55FF55] font-bold">{currentStep >= 2 ? 'IN PROGRESS (95%)' : '0%'}</span>
                    </div>
                    <div className="w-full bg-[#090a10] h-2.5 border border-[#2e334a] overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: currentStep >= 2 ? '95%' : '0%' }}
                        className="bg-[#55FF55] h-full"
                      />
                    </div>
                  </div>
                </div>

                <div className="p-2 bg-[#090a10] border border-[#2e334a] text-center text-xs font-bold text-[#55FF55] flex items-center justify-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Iterative milestone delivery prevents developer burnout.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
