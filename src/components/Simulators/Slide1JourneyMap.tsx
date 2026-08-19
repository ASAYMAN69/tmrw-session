import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Lightbulb,
  Palette,
  Cpu,
  Database,
  Lock,
  Cloud,
  Globe,
  Rocket
} from 'lucide-react';
import { sound } from '../../utils/sound';

// 8 Dedicated, Custom-Crafted Stage Simulators
import { Stage1Idea } from './Slide1Stages/Stage1Idea';
import { Stage2Frontend } from './Slide1Stages/Stage2Frontend';
import { Stage3Backend } from './Slide1Stages/Stage3Backend';
import { Stage4Database } from './Slide1Stages/Stage4Database';
import { Stage5Auth } from './Slide1Stages/Stage5Auth';
import { Stage6Hosting } from './Slide1Stages/Stage6Hosting';
import { Stage7Domain } from './Slide1Stages/Stage7Domain';
import { Stage8Live } from './Slide1Stages/Stage8Live';

const STAGES = [
  { id: 1, name: 'Idea', icon: Lightbulb },
  { id: 2, name: 'Frontend', icon: Palette },
  { id: 3, name: 'Backend', icon: Cpu },
  { id: 4, name: 'Database', icon: Database },
  { id: 5, name: 'Auth', icon: Lock },
  { id: 6, name: 'Hosting', icon: Cloud },
  { id: 7, name: 'Domain', icon: Globe },
  { id: 8, name: 'Live', icon: Rocket }
];

interface Slide1Props {
  subStep?: number;
  onSubStepChange?: (subStep: number) => void;
}

export const Slide1JourneyMap: React.FC<Slide1Props> = ({
  subStep = 0,
  onSubStepChange,
}) => {
  const activeIndex = Math.min(STAGES.length - 1, Math.max(0, subStep));

  const renderStageComponent = () => {
    switch (activeIndex) {
      case 0:
        return <Stage1Idea />;
      case 1:
        return <Stage2Frontend />;
      case 2:
        return <Stage3Backend />;
      case 3:
        return <Stage4Database />;
      case 4:
        return <Stage5Auth />;
      case 5:
        return <Stage6Hosting />;
      case 6:
        return <Stage7Domain />;
      case 7:
        return <Stage8Live />;
      default:
        return <Stage1Idea />;
    }
  };

  return (
    <div className="w-full flex flex-col gap-3 font-mono select-none">
      {/* 8-Slot Hotbar Navigation */}
      <div className="bg-[#121420] border-2 border-[#2e334a] p-1.5 shadow-pixel">
        <div className="grid grid-cols-4 sm:grid-cols-8 gap-1">
          {STAGES.map((s, idx) => {
            const Icon = s.icon;
            const isSelected = idx === activeIndex;
            const isDone = idx < activeIndex;

            return (
              <button
                key={s.id}
                onClick={() => {
                  sound.click();
                  onSubStepChange?.(idx);
                }}
                className={`py-2 px-1 flex flex-col items-center justify-center cursor-pointer transition-all border ${
                  isSelected
                    ? 'bg-[#1e2640] border-[#55FFFF] shadow-pixel-sm text-[#55FFFF]'
                    : isDone
                    ? 'bg-[#151828] border-[#383e58] text-zinc-300 hover:text-white'
                    : 'bg-[#0b0d16] border-[#22273a] text-zinc-600 hover:text-zinc-400'
                }`}
              >
                <Icon className="w-4 h-4 mb-1" />
                <span className="text-[10px] font-bold truncate w-full text-center">
                  0{s.id}. {s.name}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Dynamic Stage Viewport Card */}
      <div className="bg-[#121420] border-2 border-[#383e58] p-4 sm:p-6 shadow-pixel min-h-[360px] flex flex-col justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.15 }}
            className="w-full"
          >
            {renderStageComponent()}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};
