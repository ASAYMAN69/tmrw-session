import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GraduationCap, Briefcase, ShieldAlert, Check, X, ShieldCheck } from 'lucide-react';
import { sound } from '../../utils/sound';

interface Slide7Props {
  subStep?: number;
  onSubStepChange?: (subStep: number) => void;
}

export const Slide7AuthMatrix: React.FC<Slide7Props> = ({
  subStep = 0,
  onSubStepChange,
}) => {
  const roles = [
    { name: 'Student Role', icon: GraduationCap, canView: true, canEditOwn: true, canDeleteAll: false },
    { name: 'Teacher Role', icon: Briefcase, canView: true, canEditOwn: true, canDeleteAll: false },
    { name: 'System Admin', icon: ShieldAlert, canView: true, canEditOwn: true, canDeleteAll: true },
  ];

  const currentRole = roles[Math.min(2, Math.max(0, subStep))];

  return (
    <div className="w-full flex flex-col gap-3 font-mono">
      {/* 3 Keycard Tiers */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
        {roles.map((r, idx) => {
          const Icon = r.icon;
          return (
            <motion.button
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              onClick={() => {
                sound.click();
                onSubStepChange?.(idx);
              }}
              className={`pixel-box p-3 text-left cursor-pointer transition-all ${subStep === idx ? 'pixel-box-active' : ''}`}
            >
              <div className="flex items-center justify-between mb-1">
                <Icon className="w-5 h-5 text-[#55FFFF]" />
                <span className="text-[10px] font-bold text-[#55FFFF]">ROLE 0{idx + 1}</span>
              </div>
              <h4 className="text-xs font-bold text-white uppercase">{r.name}</h4>
            </motion.button>
          );
        })}
      </div>

      {/* Permissions Matrix with Smooth Role Switching */}
      <motion.div
        layout
        className="pixel-box p-4 bg-[#090a10] border-2 border-[#55FFFF]"
      >
        <div className="flex items-center justify-between pb-2 border-b border-[#2e334a] text-xs">
          <div className="flex items-center gap-1.5 text-[#55FF55] font-bold">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>ROLE ACCESS CONTROL: {currentRole.name}</span>
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentRole.name}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.15 }}
            className="mt-3 grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs"
          >
            <div className="p-2.5 bg-[#121420] border border-[#2e334a] flex items-center justify-between">
              <span>View Own Notes:</span>
              <span className="text-[#55FF55] font-bold flex items-center gap-1">
                <Check className="w-3 h-3" /> ALLOWED
              </span>
            </div>

            <div className="p-2.5 bg-[#121420] border border-[#2e334a] flex items-center justify-between">
              <span>Edit Own Notes:</span>
              <span className="text-[#55FF55] font-bold flex items-center gap-1">
                <Check className="w-3 h-3" /> ALLOWED
              </span>
            </div>

            <div className="p-2.5 bg-[#121420] border border-[#2e334a] flex items-center justify-between">
              <span>Delete Other Users:</span>
              <span className={currentRole.canDeleteAll ? 'text-[#55FF55] font-bold flex items-center gap-1' : 'text-[#FF5555] font-bold flex items-center gap-1'}>
                {currentRole.canDeleteAll ? <Check className="w-3 h-3" /> : <X className="w-3 h-3 text-[#FF5555]" />}
                {currentRole.canDeleteAll ? 'ALLOWED' : 'DENIED'}
              </span>
            </div>
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </div>
  );
};
