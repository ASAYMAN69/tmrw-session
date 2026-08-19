import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  HelpCircle,
  Heart,
  Sparkles,
  Flame,
  Rocket,
  ThumbsUp,
  MessageSquare,
  Smile,
  Zap,
  Hand,
  PartyPopper
} from 'lucide-react';
import { sound } from '../../utils/sound';
import { fireConfetti } from '../../utils/confetti';

interface Slide13Props {
  subStep?: number;
  onSubStepChange?: (subStep: number) => void;
}

export const Slide13QuestionsFeedback: React.FC<Slide13Props> = ({
  subStep = 0,
  onSubStepChange,
}) => {
  const currentStep = Math.min(1, Math.max(0, subStep));

  // Live reaction counters for interactive fun
  const [loveCount, setLoveCount] = useState<number>(42);
  const [fireCount, setFireCount] = useState<number>(38);
  const [rocketCount, setRocketCount] = useState<number>(55);
  const [questionCount, setQuestionCount] = useState<number>(12);

  // Trigger confetti when switching to feedback step
  useEffect(() => {
    if (currentStep === 1) {
      fireConfetti();
      sound.success?.();
    }
  }, [currentStep]);

  const handleReaction = (type: 'love' | 'fire' | 'rocket' | 'question') => {
    sound.click();
    sound.packetPing?.();
    fireConfetti();

    if (type === 'love') setLoveCount(prev => prev + 1);
    if (type === 'fire') setFireCount(prev => prev + 1);
    if (type === 'rocket') setRocketCount(prev => prev + 1);
    if (type === 'question') setQuestionCount(prev => prev + 1);
  };

  return (
    <div className="w-full flex flex-col gap-4 font-mono select-none">
      {/* 2-Step Top Hotbar */}
      <div className="bg-[#121420] border-2 border-[#2e334a] p-1.5 shadow-pixel">
        <div className="grid grid-cols-2 gap-2">
          {/* Tab 1: Questions */}
          <button
            onClick={() => { sound.click(); onSubStepChange?.(0); }}
            className={`py-2.5 px-3 flex items-center justify-between cursor-pointer border-2 transition-all ${
              currentStep === 0
                ? 'bg-[#1e2640] border-[#55FFFF] text-[#55FFFF] shadow-pixel scale-[1.01]'
                : 'bg-[#090a10] border-[#22273a] text-zinc-400 hover:text-white'
            }`}
          >
            <div className="flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-[#55FFFF]" />
              <span className="text-xs sm:text-sm font-black">01. QUESTIONS</span>
            </div>
            <span className="text-[10px] font-bold hidden sm:inline text-zinc-500">Ask Anything :P</span>
          </button>

          {/* Tab 2: Feedback */}
          <button
            onClick={() => { sound.click(); onSubStepChange?.(1); }}
            className={`py-2.5 px-3 flex items-center justify-between cursor-pointer border-2 transition-all ${
              currentStep === 1
                ? 'bg-[#1e2640] border-[#55FF55] text-[#55FF55] shadow-pixel scale-[1.01]'
                : 'bg-[#090a10] border-[#22273a] text-zinc-400 hover:text-white'
            }`}
          >
            <div className="flex items-center gap-2">
              <Heart className="w-5 h-5 text-[#FF5555] fill-[#FF5555]" />
              <span className="text-xs sm:text-sm font-black">02. FEEDBACK</span>
            </div>
            <span className="text-[10px] font-bold hidden sm:inline text-[#55FF55]">Loved It? :D</span>
          </button>
        </div>
      </div>

      {/* Main Interactive Stage */}
      <div className="bg-[#121420] border-2 border-[#383e58] p-8 sm:p-12 shadow-pixel flex flex-col items-center justify-center min-h-[380px] text-center relative overflow-hidden">
        {/* Background Ambient Glow */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: currentStep === 0 ? [0.15, 0.25, 0.15] : [0.25, 0.4, 0.25]
          }}
          transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
          className={`absolute inset-0 rounded-full blur-3xl pointer-events-none ${
            currentStep === 0 ? 'bg-[#55FFFF]/20' : 'bg-[#55FF55]/20'
          }`}
        />

        <AnimatePresence mode="wait">
          {/* STEP 0: Any questions? :P */}
          {currentStep === 0 && (
            <motion.div
              key="questions"
              initial={{ opacity: 0, scale: 0.9, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: -15 }}
              transition={{ type: 'spring', damping: 20, stiffness: 300 }}
              className="flex flex-col items-center gap-6 relative z-10 max-w-2xl mx-auto"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#55FFFF]/10 border border-[#55FFFF]/40 text-[#55FFFF] text-xs font-bold">
                <HelpCircle className="w-4 h-4 text-[#55FFFF] animate-bounce" />
                <span>OPEN FLOOR DISCUSSION</span>
              </div>

              <motion.h1
                animate={{ scale: [1, 1.02, 1] }}
                transition={{ repeat: Infinity, duration: 2.5 }}
                className="text-4xl sm:text-6xl md:text-7xl font-black text-white font-sans tracking-tight"
              >
                Any questions? <span className="text-[#55FFFF]">:P</span>
              </motion.h1>

              <p className="text-base sm:text-lg text-zinc-300 font-medium max-w-lg leading-relaxed">
                Ask about HTML/CSS, React, Node.js, databases, cloud hosting, or how to start your first project!
              </p>

              {/* Interactive Question Prompts */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 w-full pt-2">
                <button
                  onClick={() => handleReaction('question')}
                  className="p-3 bg-[#090a10] border-2 border-[#2e334a] hover:border-[#55FFFF] text-zinc-200 hover:text-white transition-all cursor-pointer shadow-pixel flex flex-col items-center gap-1.5 hover:scale-105 active:scale-95"
                >
                  <Hand className="w-5 h-5 text-[#FFAA00]" />
                  <span className="text-xs font-bold">Raise Hand</span>
                </button>

                <button
                  onClick={() => handleReaction('question')}
                  className="p-3 bg-[#090a10] border-2 border-[#2e334a] hover:border-[#55FFFF] text-zinc-200 hover:text-white transition-all cursor-pointer shadow-pixel flex flex-col items-center gap-1.5 hover:scale-105 active:scale-95"
                >
                  <MessageSquare className="w-5 h-5 text-[#55FFFF]" />
                  <span className="text-xs font-bold">Frontend Q</span>
                </button>

                <button
                  onClick={() => handleReaction('question')}
                  className="p-3 bg-[#090a10] border-2 border-[#2e334a] hover:border-[#55FFFF] text-zinc-200 hover:text-white transition-all cursor-pointer shadow-pixel flex flex-col items-center gap-1.5 hover:scale-105 active:scale-95"
                >
                  <Zap className="w-5 h-5 text-[#55FF55]" />
                  <span className="text-xs font-bold">Backend Q</span>
                </button>

                <button
                  onClick={() => handleReaction('question')}
                  className="p-3 bg-[#090a10] border-2 border-[#2e334a] hover:border-[#55FFFF] text-zinc-200 hover:text-white transition-all cursor-pointer shadow-pixel flex flex-col items-center gap-1.5 hover:scale-105 active:scale-95"
                >
                  <Rocket className="w-5 h-5 text-[#FF5555]" />
                  <span className="text-xs font-bold">Career Q</span>
                </button>
              </div>

              <div className="pt-2 text-xs text-zinc-500 font-bold">
                Click <strong>Next</strong> or the top tab when ready!
              </div>
            </motion.div>
          )}

          {/* STEP 1: Loved the session? :D */}
          {currentStep === 1 && (
            <motion.div
              key="feedback"
              initial={{ opacity: 0, scale: 0.85, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.85, y: -20 }}
              transition={{ type: 'spring', damping: 18, stiffness: 280 }}
              className="flex flex-col items-center gap-6 relative z-10 max-w-2xl mx-auto"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#55FF55]/10 border border-[#55FF55]/40 text-[#55FF55] text-xs font-bold">
                <PartyPopper className="w-4 h-4 text-[#55FF55] animate-bounce" />
                <span>COMMUNITY REACTION</span>
              </div>

              <motion.h1
                animate={{ scale: [1, 1.03, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="text-4xl sm:text-6xl md:text-7xl font-black text-white font-sans tracking-tight"
              >
                Loved the session? <span className="text-[#55FF55]">:D</span>
              </motion.h1>

              <p className="text-base sm:text-lg text-zinc-300 font-medium max-w-lg leading-relaxed">
                Drop your reactions! We loved building and exploring the full stack with you today.
              </p>

              {/* Big Interactive Live Reaction Buttons */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full pt-2">
                <button
                  onClick={() => handleReaction('love')}
                  className="p-3.5 bg-[#090a10] border-2 border-[#FF5555] hover:bg-[#FF5555]/15 text-white transition-all cursor-pointer shadow-pixel flex flex-col items-center gap-1.5 hover:scale-108 active:scale-95 group"
                >
                  <Heart className="w-6 h-6 text-[#FF5555] fill-[#FF5555] group-hover:scale-125 transition-transform" />
                  <span className="text-xs font-black">LOVED IT!</span>
                  <span className="text-[10px] text-zinc-400 font-bold">{loveCount} ❤️</span>
                </button>

                <button
                  onClick={() => handleReaction('fire')}
                  className="p-3.5 bg-[#090a10] border-2 border-[#FFAA00] hover:bg-[#FFAA00]/15 text-white transition-all cursor-pointer shadow-pixel flex flex-col items-center gap-1.5 hover:scale-108 active:scale-95 group"
                >
                  <Flame className="w-6 h-6 text-[#FFAA00] fill-[#FFAA00] group-hover:scale-125 transition-transform" />
                  <span className="text-xs font-black">10 / 10</span>
                  <span className="text-[10px] text-zinc-400 font-bold">{fireCount} 🔥</span>
                </button>

                <button
                  onClick={() => handleReaction('rocket')}
                  className="p-3.5 bg-[#090a10] border-2 border-[#55FFFF] hover:bg-[#55FFFF]/15 text-white transition-all cursor-pointer shadow-pixel flex flex-col items-center gap-1.5 hover:scale-108 active:scale-95 group"
                >
                  <Rocket className="w-6 h-6 text-[#55FFFF] group-hover:scale-125 transition-transform" />
                  <span className="text-xs font-black">READY TO BUILD</span>
                  <span className="text-[10px] text-zinc-400 font-bold">{rocketCount} 🚀</span>
                </button>

                <button
                  onClick={() => handleReaction('love')}
                  className="p-3.5 bg-[#090a10] border-2 border-[#55FF55] hover:bg-[#55FF55]/15 text-white transition-all cursor-pointer shadow-pixel flex flex-col items-center gap-1.5 hover:scale-108 active:scale-95 group"
                >
                  <Sparkles className="w-6 h-6 text-[#55FF55] group-hover:scale-125 transition-transform" />
                  <span className="text-xs font-black">MIND BLOWN</span>
                  <span className="text-[10px] text-zinc-400 font-bold">100% ✨</span>
                </button>
              </div>

              <div className="pt-2 text-xs text-[#55FF55] font-bold flex items-center gap-1.5">
                <Sparkles className="w-4 h-4" />
                <span>Next up: ACC CodeLaunch Bootcamp Official Announcement!</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
