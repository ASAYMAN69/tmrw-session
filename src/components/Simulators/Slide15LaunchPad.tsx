import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Award,
  Rocket,
  RotateCcw,
  Sparkles,
  CheckCircle2,
  Lightbulb,
  Server,
  User,
  ExternalLink
} from 'lucide-react';
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
    <div className="w-full flex flex-col gap-3.5 font-mono select-none">
      {/* Top Banner */}
      <div className="bg-[#121420] border-2 border-[#2e334a] p-3 shadow-pixel flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Award className="w-5 h-5 text-[#55FF55]" />
          <span className="text-xs sm:text-sm font-black text-white">
            MASTERCLASS COMPLETED: FROM IDEA TO LIVE WEBSITE
          </span>
        </div>
        <span className="text-xs font-black text-[#55FF55] px-2.5 py-0.5 bg-[#55FF55]/15 border border-[#55FF55]/40 hidden sm:inline">
          READY TO SHIP
        </span>
      </div>

      {/* Main 2-Section Body Split */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* LEFT SECTION: Key Takeaways & Action Plan */}
        <div className="bg-[#121420] border-2 border-[#383e58] p-6 shadow-pixel flex flex-col justify-between space-y-4">
          <div className="space-y-3.5">
            <div className="flex items-center gap-2.5">
              <span className="text-xs sm:text-sm font-black text-[#55FF55] px-2.5 py-0.5 bg-[#55FF55]/15 border border-[#55FF55]/40">
                #SUMMARY
              </span>
              <h3 className="text-lg sm:text-xl font-black text-white font-sans uppercase">
                Your 3 Golden Takeaways
              </h3>
            </div>

            <div className="space-y-2 text-xs">
              <div className="p-2.5 bg-[#090a10] border border-[#2e334a] flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#55FFFF] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">1. The Map Over Syntax:</strong>
                  <span className="text-zinc-300">You now know what Frontend, Backend, APIs, and Databases do. Syntax is just lookups.</span>
                </div>
              </div>

              <div className="p-2.5 bg-[#090a10] border border-[#2e334a] flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#FFAA00] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">2. The 1-4 Day Scope:</strong>
                  <span className="text-zinc-300">Ship a working prototype before adding complexity. Done is better than perfect.</span>
                </div>
              </div>

              <div className="p-2.5 bg-[#090a10] border border-[#2e334a] flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#55FF55] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">3. Always Deploy:</strong>
                  <span className="text-zinc-300">Push to GitHub and link to Vercel/Netlify for a live shareable URL.</span>
                </div>
              </div>
            </div>

            <div className="p-3 bg-[#181b2c] border-l-4 border-[#55FF55] text-xs sm:text-sm text-zinc-200 font-medium flex items-center gap-2">
              <Lightbulb className="w-4 h-4 text-[#55FF55] shrink-0" />
              <span><strong>Final Takeaway:</strong> You don't need to know everything today. Start with one small feature and ship!</span>
            </div>
          </div>

          <div className="pt-3.5 border-t border-[#2e334a] flex items-center justify-between">
            <button
              onClick={onRestart}
              className="px-3 py-1.5 bg-[#090a10] border-2 border-[#2e334a] hover:border-[#55FFFF] text-zinc-300 text-xs font-bold flex items-center gap-1.5 cursor-pointer transition-all"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>RESTART MASTERCLASS</span>
            </button>
            <span className="text-xs text-[#55FF55] font-bold">Good Luck Building!</span>
          </div>
        </div>

        {/* RIGHT SECTION: Interactive Mint Builder Badge */}
        <div className="bg-[#090a10] border-2 border-[#55FF55] p-6 shadow-pixel flex flex-col justify-between">
          <div className="flex items-center gap-2 pb-3 border-b border-[#2e334a] text-xs sm:text-sm font-bold text-zinc-300">
            <Award className="w-5 h-5 text-[#55FF55]" />
            <span>OFFICIAL GRADUATE BADGE</span>
          </div>

          <div className="my-auto py-4">
            {!minted ? (
              <form onSubmit={handleMint} className="space-y-3 max-w-sm mx-auto font-mono text-xs">
                <div>
                  <label className="block text-zinc-400 text-[11px] mb-1 font-bold">YOUR NAME:</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Alex Chen"
                    className="w-full px-3 py-2 bg-[#121420] border-2 border-[#2e334a] text-xs text-white focus:outline-none focus:border-[#55FF55]"
                    required
                  />
                </div>

                <div>
                  <label className="block text-zinc-400 text-[11px] mb-1 font-bold">FIRST PROJECT GOAL:</label>
                  <input
                    type="text"
                    value={project}
                    onChange={(e) => setProject(e.target.value)}
                    placeholder="e.g. Student Notes Web App"
                    className="w-full px-3 py-2 bg-[#121420] border-2 border-[#2e334a] text-xs text-white focus:outline-none focus:border-[#55FF55]"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 bg-[#55FF55] text-black text-xs font-black flex items-center justify-center gap-2 shadow-pixel hover:scale-105 transition-all cursor-pointer mt-2"
                >
                  <Rocket className="w-4 h-4" />
                  <span>MINT OFFICIAL BUILDER PASS</span>
                </button>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-5 bg-[#181b2c] border-2 border-[#55FF55] shadow-glow-diamond text-center space-y-2.5 max-w-sm mx-auto font-mono"
              >
                <div className="w-12 h-12 bg-[#55FF55]/20 border-2 border-[#55FF55] flex items-center justify-center text-[#55FF55] mx-auto">
                  <Award className="w-7 h-7" />
                </div>

                <span className="px-2 py-0.5 bg-[#55FF55]/20 border border-[#55FF55] text-[#55FF55] text-[10px] font-black">
                  VERIFIED FULL-STACK CREATOR
                </span>

                <h4 className="text-base font-black text-white uppercase">{name}</h4>
                <p className="text-xs text-[#55FFFF]">Pledged to build: "{project}"</p>

                <div className="pt-2">
                  <button
                    onClick={() => fireConfetti()}
                    className="px-4 py-1.5 bg-[#55FFFF] text-black text-xs font-black flex items-center justify-center gap-1.5 mx-auto shadow-glow-cyan hover:scale-105 transition-all cursor-pointer"
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>LAUNCH CONFETTI</span>
                  </button>
                </div>
              </motion.div>
            )}
          </div>

          <div className="p-2 bg-[#121420] border border-[#2e334a] text-center text-[11px] text-zinc-400 font-bold">
            ⚡ Web Development Mastery • From Idea to Live Website
          </div>
        </div>
      </div>
    </div>
  );
};
