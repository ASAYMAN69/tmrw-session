import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, Layers, ShieldCheck, Lightbulb } from 'lucide-react';
import { sound } from '../../utils/sound';

interface Slide12Props {
  subStep?: number;
  onSubStepChange?: (subStep: number) => void;
}

export const Slide12ArchitectureCompare: React.FC<Slide12Props> = ({
  subStep = 0,
  onSubStepChange,
}) => {
  const archetypes = [
    {
      name: '1. Personal Portfolio',
      icon: FileText,
      desc: 'Static portfolio showcase or resume.',
      stack: 'Frontend + Free Hosting (Vercel)',
      takeaway: 'Zero backend or database needed! ($0/mo)'
    },
    {
      name: '2. Dynamic Blog / News',
      icon: Layers,
      desc: 'Articles & posts fetched from database.',
      stack: 'Frontend + Database + Hosting',
      takeaway: 'Needs a database, but no user auth required.'
    },
    {
      name: '3. SaaS Web Application',
      icon: ShieldCheck,
      desc: 'Interactive platform with private user accounts & data.',
      stack: 'Frontend + Server + Database + Auth',
      takeaway: 'Requires full stack: UI, Server, DB, and Auth!'
    }
  ];

  const current = archetypes[Math.min(2, Math.max(0, subStep))];

  return (
    <div className="w-full flex flex-col gap-3 font-mono">
      {/* 3 Blueprints */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
        {archetypes.map((a, idx) => {
          const Icon = a.icon;
          return (
            <motion.button
              key={idx}
              layout
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              onClick={() => {
                sound.toggle();
                onSubStepChange?.(idx);
              }}
              className={`pixel-box p-3 text-left cursor-pointer transition-all ${
                subStep === idx ? 'pixel-box-active' : ''
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <Icon className="w-5 h-5 text-[#55FFFF]" />
                <span className="text-[10px] font-bold text-[#55FFFF]">BLUEPRINT 0{idx + 1}</span>
              </div>
              <h4 className="text-xs font-bold text-white uppercase">{a.name}</h4>
            </motion.button>
          );
        })}
      </div>

      {/* Blueprint Visualizer Box with Dynamic Morphing */}
      <motion.div
        layout
        className="pixel-box p-4 bg-[#090a10] border-2 border-[#55FFFF]"
      >
        <div className="flex items-center justify-between pb-2 border-b border-[#2e334a]">
          <span className="text-xs font-bold text-[#55FF55]">
            BLUEPRINT SPECIFICATION: {current.name}
          </span>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={current.name}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.15 }}
            className="mt-3 space-y-2 text-xs"
          >
            <p className="text-white"><strong>Purpose:</strong> {current.desc}</p>
            <p className="text-zinc-300"><strong>Required Stack:</strong> <span className="text-[#55FFFF]">{current.stack}</span></p>
            <div className="p-2 bg-[#121420] border border-[#55FF55] text-[#55FF55] text-xs font-bold flex items-center gap-1.5">
              <Lightbulb className="w-4 h-4 text-[#55FF55] shrink-0" />
              <span>{current.takeaway}</span>
            </div>
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </div>
  );
};
