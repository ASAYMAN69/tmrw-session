import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Code2, CloudLightning } from 'lucide-react';
import { sound } from '../../utils/sound';

interface Slide13Props {
  subStep?: number;
  onSubStepChange?: (subStep: number) => void;
}

export const Slide13LearningTree: React.FC<Slide13Props> = ({
  subStep = 0,
  onSubStepChange,
}) => {
  const tiers = [
    {
      name: 'LEVEL 1: CORE FOUNDATIONS',
      icon: BookOpen,
      skills: ['HTML5 (Structure)', 'CSS3 (Flexbox & Styling)', 'JavaScript (DOM & Events)', 'Git & GitHub']
    },
    {
      name: 'LEVEL 2: INTERACTIVE APPS',
      icon: Code2,
      skills: ['React / Vite', 'Node.js & Express API', 'PostgreSQL / Supabase Database', 'Authentication']
    },
    {
      name: 'LEVEL 3: PRODUCTION DEPLOY',
      icon: CloudLightning,
      skills: ['Cloud Hosting (Vercel/Render)', 'Custom Domains & DNS', 'HTTPS & Env Secrets', 'Production Monitoring']
    }
  ];

  return (
    <div className="w-full flex flex-col gap-3 font-mono">
      {/* 3 Skill Levels */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
        {tiers.map((t, idx) => {
          const Icon = t.icon;
          return (
            <motion.button
              key={idx}
              layout
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0, scale: subStep === idx ? 1.02 : 1 }}
              transition={{ delay: idx * 0.05 }}
              onClick={() => {
                sound.click();
                onSubStepChange?.(idx);
              }}
              className={`pixel-box p-3 text-left cursor-pointer transition-all ${
                subStep === idx ? 'pixel-box-active shadow-glow-diamond' : 'opacity-60'
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <Icon className="w-5 h-5 text-[#55FFFF]" />
                <span className="text-[10px] font-bold text-[#55FFFF]">LVL 0{idx + 1}</span>
              </div>
              <h4 className="text-xs font-bold text-white uppercase">{t.name}</h4>

              <div className="mt-2 space-y-1">
                {t.skills.map((s, sIdx) => (
                  <div key={sIdx} className="p-1 bg-[#090a10] border border-[#2e334a] text-xs text-zinc-300">
                    ✓ {s}
                  </div>
                ))}
              </div>
            </motion.button>
          );
        })}
      </div>

      <p className="text-xs text-center text-[#55FF55] font-bold">
        &gt;&gt; "You don't need to learn everything today. Start with Level 1 and ship!"
      </p>
    </div>
  );
};
