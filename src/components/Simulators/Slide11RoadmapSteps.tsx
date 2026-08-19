import React from 'react';
import { motion } from 'framer-motion';
import { Palette, Cpu, Rocket } from 'lucide-react';
import { sound } from '../../utils/sound';

interface Slide11Props {
  subStep?: number;
  onSubStepChange?: (subStep: number) => void;
}

export const Slide11RoadmapSteps: React.FC<Slide11Props> = ({
  subStep = 0,
  onSubStepChange,
}) => {
  const currentPhase = Math.min(2, Math.max(0, subStep));

  const phases = [
    {
      title: 'PHASE 1: FRONTEND & UI',
      icon: Palette,
      steps: ['01. IDEA — Define 1 problem to solve', '02. DESIGN — Sketch wireframe screens', '03. FRONTEND — Build buttons & layout in React']
    },
    {
      title: 'PHASE 2: SERVER & STORAGE',
      icon: Cpu,
      steps: ['04. BACKEND — Write API endpoints', '05. DATABASE — Create tables to store records', '06. AUTH — Add login passwords & tokens']
    },
    {
      title: 'PHASE 3: CLOUD & LAUNCH',
      icon: Rocket,
      steps: ['07. TEST — Test mobile screen sizes & errors', '08. DEPLOY — Push to GitHub & link to Vercel', '09. DOMAIN — Connect custom .dev address']
    }
  ];

  return (
    <div className="w-full flex flex-col gap-3 font-mono">
      {/* 3 Phase Cards with Spring Animation */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5">
        {phases.map((p, idx) => {
          const Icon = p.icon;
          const isSelected = currentPhase === idx;

          return (
            <motion.button
              key={idx}
              layout
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0, scale: isSelected ? 1.02 : 1 }}
              transition={{ delay: idx * 0.06 }}
              onClick={() => {
                sound.click();
                onSubStepChange?.(idx);
              }}
              className={`pixel-box p-3 text-left cursor-pointer transition-all ${
                isSelected ? 'pixel-box-active shadow-glow-diamond' : 'opacity-60'
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <Icon className="w-5 h-5 text-[#55FFFF]" />
                <span className="text-[10px] font-bold text-[#55FFFF]">PHASE 0{idx + 1}</span>
              </div>
              <h4 className="text-xs font-bold text-white uppercase">{p.title}</h4>

              <div className="mt-2.5 space-y-1">
                {p.steps.map((s, sIdx) => (
                  <div key={sIdx} className="p-1.5 bg-[#090a10] border border-[#2e334a] text-xs text-zinc-300">
                    {s}
                  </div>
                ))}
              </div>
            </motion.button>
          );
        })}
      </div>

      <p className="text-xs text-center text-[#55FF55] font-bold">
        &gt;&gt; "Don't build everything at once. Build one clean layer at a time."
      </p>
    </div>
  );
};
