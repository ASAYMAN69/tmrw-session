import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, Rocket, RotateCcw, Sparkles } from 'lucide-react';
import { sound } from '../../utils/sound';
import { fireConfetti } from '../../utils/confetti';

interface Slide15Props {
  subStep?: number;
  onSubStepChange?: (subStep: number) => void;
  onRestart?: () => void;
}

export const Slide15LaunchPad: React.FC<Slide15Props> = ({ onRestart }) => {
  const [name, setName] = useState<string>('');
  const [project, setProject] = useState<string>('');
  const [minted, setMinted] = useState<boolean>(false);

  const handleMint = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !project.trim()) return;
    sound.success();
    setMinted(true);
    fireConfetti();
  };

  return (
    <div className="w-full flex flex-col gap-3 font-mono">
      {/* 10 Step Strip */}
      <div className="pixel-box p-3 text-center">
        <span className="text-[10px] font-bold text-[#55FFFF] uppercase">
          THE FULL-STACK ROADMAP COMPLETED
        </span>
        <h3 className="text-sm font-bold text-white mt-1 uppercase font-sans">
          YOU'RE READY TO BUILD & LAUNCH
        </h3>
        <p className="text-xs text-zinc-300 mt-1">
          "You don't need to understand everything today. You just need to know what comes next."
        </p>
      </div>

      {/* Mint Builder Badge */}
      <motion.div layout className="pixel-box p-4 bg-[#090a10] border-2 border-[#55FFFF] max-w-lg mx-auto w-full">
        {!minted ? (
          <form onSubmit={handleMint} className="space-y-2.5">
            <div className="flex items-center justify-center gap-1.5 text-xs font-bold text-white uppercase text-center">
              <Award className="w-4 h-4 text-[#55FFFF]" />
              <span>MINT OFFICIAL BUILDER BADGE</span>
            </div>

            <div>
              <label className="block text-[10px] text-zinc-400 mb-1">Your Name:</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Alex Chen"
                className="w-full px-3 py-1.5 bg-[#121420] border-2 border-[#383e58] text-xs text-white focus:outline-none focus:border-[#55FFFF]"
                required
              />
            </div>

            <div>
              <label className="block text-[10px] text-zinc-400 mb-1">Project Idea:</label>
              <input
                type="text"
                value={project}
                onChange={(e) => setProject(e.target.value)}
                placeholder="e.g. Student Notes Hub"
                className="w-full px-3 py-1.5 bg-[#121420] border-2 border-[#383e58] text-xs text-white focus:outline-none focus:border-[#55FFFF]"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full pixel-btn pixel-btn-primary py-2 text-xs cursor-pointer text-white mt-2 flex items-center justify-center gap-1.5"
            >
              <Rocket className="w-3.5 h-3.5" />
              <span>MINT BADGE</span>
            </button>
          </form>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className="text-center p-3 space-y-2"
          >
            <Award className="w-8 h-8 text-[#55FF55] mx-auto" />
            <span className="text-[10px] font-bold text-[#55FF55] block">OFFICIAL BUILDER PASS</span>
            <h4 className="text-base font-bold text-white uppercase">{name}</h4>
            <p className="text-xs text-[#55FFFF]">Ready to build: "{project}"</p>

            <div className="pt-2 flex justify-center gap-2">
              <button
                onClick={() => fireConfetti()}
                className="pixel-btn px-3 py-1.5 text-xs cursor-pointer text-[#55FFFF] flex items-center gap-1"
              >
                <Sparkles className="w-3 h-3" />
                <span>CELEBRATE</span>
              </button>
              {onRestart && (
                <button
                  onClick={onRestart}
                  className="pixel-btn px-3 py-1.5 text-xs cursor-pointer text-zinc-300 flex items-center gap-1"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>RESTART DECK</span>
                </button>
              )}
            </div>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};
