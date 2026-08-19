import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Dices,
  CheckCircle2,
  XCircle,
  Clock,
  Rocket,
  Lightbulb,
  Server,
  Sparkles,
  GitBranch,
  Globe
} from 'lucide-react';
import { sound } from '../../utils/sound';
import { fireConfetti } from '../../utils/confetti';

interface Slide14Props {
  subStep?: number;
  onSubStepChange?: (subStep: number) => void;
}

const QUESTS = [
  {
    id: 1,
    title: 'Developer Portfolio & Resume',
    time: '1-2 Days',
    stack: 'React + Tailwind + Vercel',
    category: 'Portfolio',
    desc: 'Showcase your biography, skills, GitHub repositories, and an interactive dark/light mode toggle.',
    color: '#FFAA00'
  },
  {
    id: 2,
    title: 'Student Homework & Exam Tracker',
    time: '2-3 Days',
    stack: 'React + Supabase / PostgreSQL',
    category: 'Productivity',
    desc: 'Add assignments with course tags, due dates, priority filters, and persistent completion checkboxes.',
    color: '#55FFFF'
  },
  {
    id: 3,
    title: 'Coffee Brew Ratio & Pour Timer',
    time: '1-2 Days',
    stack: 'React + Web Audio API',
    category: 'Utility Tool',
    desc: 'Input coffee beans in grams, automatically compute water ratio, and play audible countdown beeps.',
    color: '#55FF55'
  },
  {
    id: 4,
    title: 'Daily Expense & Subscription Log',
    time: '2-4 Days',
    stack: 'React + Express API + DB',
    category: 'Finance',
    desc: 'Record daily purchases by category (Food, Tech, Books) and calculate total monthly spending metrics.',
    color: '#FFAA00'
  },
  {
    id: 5,
    title: 'Movie & Anime Watchlist Hub',
    time: '2-3 Days',
    stack: 'React + TMDB / Public API',
    category: 'Entertainment',
    desc: 'Search for movies and shows, view ratings, trailer embeds, and bookmark favorites to local storage.',
    color: '#55FFFF'
  },
  {
    id: 6,
    title: 'Markdown Note Vault & Live Editor',
    time: '2-3 Days',
    stack: 'React + Markdown Parser',
    category: 'Productivity',
    desc: 'Split-screen real-time markdown editor with syntax highlighting, tag search, and one-click copy.',
    color: '#55FF55'
  },
  {
    id: 7,
    title: 'Pomodoro Focus Room + Lo-Fi Audio',
    time: '1-2 Days',
    stack: 'React + Audio Player',
    category: 'Wellness',
    desc: '25-minute focus session timer with customizable break intervals and relaxing background sound loops.',
    color: '#FFAA00'
  },
  {
    id: 8,
    title: 'Interactive Web Dev Quiz Arena',
    time: '2-3 Days',
    stack: 'React + OpenTrivia API',
    category: 'Gaming',
    desc: '10-question rapid quiz with countdown clock, instant feedback, score multiplier, and end celebration.',
    color: '#55FFFF'
  },
  {
    id: 9,
    title: 'Linktree-Style Personal Bio Page',
    time: '1 Day',
    stack: 'HTML + Tailwind CSS',
    category: 'Social',
    desc: 'Custom-branded responsive links hub with social media icons, animated hover cards, and avatar.',
    color: '#55FF55'
  },
  {
    id: 10,
    title: 'Live Currency & Crypto Exchange',
    time: '1-2 Days',
    stack: 'React + ExchangeRate API',
    category: 'Finance',
    desc: 'Real-time exchange rate calculator for 30+ fiat currencies and crypto tokens with instant search.',
    color: '#FFAA00'
  }
];

export const Slide14FirstProjectPicker: React.FC<Slide14Props> = ({
  subStep = 0,
  onSubStepChange,
}) => {
  const currentStep = Math.min(2, Math.max(0, subStep));

  const [questIndex, setQuestIndex] = useState<number>(0);
  const [rolling, setRolling] = useState<boolean>(false);

  const currentQuest = QUESTS[questIndex];

  const rollQuest = () => {
    sound.click();
    setRolling(true);
    let count = 0;
    const maxTicks = 12;

    const interval = setInterval(() => {
      setQuestIndex((prev) => {
        let next = Math.floor(Math.random() * QUESTS.length);
        if (next === prev) next = (next + 1) % QUESTS.length;
        return next;
      });
      sound.packetPing?.();
      count++;

      if (count >= maxTicks) {
        clearInterval(interval);
        setRolling(false);
        sound.success?.();
        fireConfetti();
      }
    }, 70);
  };

  const handlePrev = () => {
    sound.click();
    setQuestIndex((prev) => (prev > 0 ? prev - 1 : QUESTS.length - 1));
  };

  const handleNext = () => {
    sound.click();
    setQuestIndex((prev) => (prev < QUESTS.length - 1 ? prev + 1 : 0));
  };

  return (
    <div className="w-full flex flex-col gap-3.5 font-mono select-none">
      {/* 3 Main Points Top Hotbar */}
      <div className="bg-[#121420] border-2 border-[#2e334a] p-1.5 shadow-pixel">
        <div className="grid grid-cols-3 gap-2">
          {/* Point 1: Scope */}
          <button
            onClick={() => { sound.click(); onSubStepChange?.(0); }}
            className={`py-2.5 px-3 flex items-center justify-between cursor-pointer border-2 transition-all ${
              currentStep === 0
                ? 'bg-[#1e2640] border-[#FFAA00] text-[#FFAA00] shadow-pixel scale-[1.02]'
                : 'bg-[#090a10] border-[#22273a] text-zinc-400 hover:text-white'
            }`}
          >
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-[#FFAA00]" />
              <span className="text-xs sm:text-sm font-black">01. SCOPE & TIME</span>
            </div>
            <span className="text-[10px] font-bold hidden sm:inline text-zinc-500">1-4 Day Rule</span>
          </button>

          {/* Point 2: Generator */}
          <button
            onClick={() => { sound.click(); onSubStepChange?.(1); }}
            className={`py-2.5 px-3 flex items-center justify-between cursor-pointer border-2 transition-all ${
              currentStep === 1
                ? 'bg-[#1e2640] border-[#55FFFF] text-[#55FFFF] shadow-pixel scale-[1.02]'
                : 'bg-[#090a10] border-[#22273a] text-zinc-400 hover:text-white'
            }`}
          >
            <div className="flex items-center gap-2">
              <Dices className="w-5 h-5 text-[#55FFFF]" />
              <span className="text-xs sm:text-sm font-black">02. IDEA ROLLER</span>
            </div>
            <span className="text-[10px] font-bold hidden sm:inline text-zinc-500">{QUESTS.length} Ideas Ready</span>
          </button>

          {/* Point 3: Done Checklist */}
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
              <span className="text-xs sm:text-sm font-black">03. DEFINITION OF DONE</span>
            </div>
            <span className="text-[10px] font-bold hidden sm:inline text-zinc-500">Ship to Prod</span>
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
              {/* POINT 1: SCOPE & SWEET SPOT */}
              {currentStep === 0 && (
                <>
                  <div className="flex items-center gap-2.5">
                    <span className="text-xs sm:text-sm font-black text-[#FFAA00] px-2.5 py-0.5 bg-[#FFAA00]/15 border border-[#FFAA00]/40">
                      #01
                    </span>
                    <h3 className="text-lg sm:text-xl font-black text-white font-sans uppercase">
                      The 1-4 Day Project Rule
                    </h3>
                  </div>

                  <p className="text-sm sm:text-base text-zinc-100 font-semibold leading-relaxed">
                    The #1 reason beginners quit coding is <strong>scope creep</strong> — trying to build a giant platform on day one.
                  </p>

                  <div className="p-3.5 bg-[#090a10] border border-[#2e334a] text-xs space-y-2">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#55FF55] shrink-0" />
                      <div>
                        <strong className="text-[#55FF55]">Great First Projects (1-4 Days):</strong>
                        <p className="text-zinc-300">Portfolio resume, Pomodoro study timer, Quiz app, Simple notes list.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <XCircle className="w-4 h-4 text-[#FF5555] shrink-0" />
                      <div>
                        <strong className="text-[#FF5555]">Burnout Traps (Avoid):</strong>
                        <p className="text-zinc-300">"The Next TikTok", 3D MMO Game, Multi-vendor Marketplace.</p>
                      </div>
                    </div>
                  </div>

                  <div className="p-3 bg-[#181b2c] border-l-4 border-[#FFAA00] text-xs sm:text-sm text-zinc-200 font-medium flex items-center gap-2">
                    <Lightbulb className="w-4 h-4 text-[#FFAA00] shrink-0" />
                    <span><strong>Takeaway:</strong> A finished small project on your resume beats 10 unfinished giant ideas!</span>
                  </div>
                </>
              )}

              {/* POINT 2: IDEA ROLLER */}
              {currentStep === 1 && (
                <>
                  <div className="flex items-center gap-2.5">
                    <span className="text-xs sm:text-sm font-black text-[#55FFFF] px-2.5 py-0.5 bg-[#55FFFF]/15 border border-[#55FFFF]/40">
                      #02
                    </span>
                    <h3 className="text-lg sm:text-xl font-black text-white font-sans uppercase">
                      Starter Project Generator
                    </h3>
                  </div>

                  <p className="text-sm sm:text-base text-zinc-100 font-semibold leading-relaxed">
                    Pick a project you can finish in 1-4 days. Each project uses the full circuit we learned today:
                  </p>

                  <div className="p-3.5 bg-[#090a10] border border-[#2e334a] text-xs space-y-2 font-mono">
                    <div className="flex items-center justify-between text-zinc-400 text-[10px]">
                      <span>STARTER BLUEPRINT:</span>
                      <span className="text-[#55FFFF] font-bold">[{currentQuest.category}]</span>
                    </div>

                    <strong className="text-white text-sm block">{currentQuest.title}</strong>
                    <p className="text-zinc-300 text-xs">{currentQuest.desc}</p>

                    <div className="flex items-center gap-2 pt-1">
                      <span className="px-2 py-0.5 bg-[#121420] border border-[#2e334a] text-[10px] text-[#55FFFF]">
                        {currentQuest.stack}
                      </span>
                      <span className="px-2 py-0.5 bg-[#121420] border border-[#2e334a] text-[10px] text-[#55FF55]">
                        ⏱️ {currentQuest.time}
                      </span>
                    </div>
                  </div>

                  <div className="p-3 bg-[#181b2c] border-l-4 border-[#55FFFF] text-xs sm:text-sm text-zinc-200 font-medium flex items-center gap-2">
                    <Lightbulb className="w-4 h-4 text-[#55FFFF] shrink-0" />
                    <span><strong>Takeaway:</strong> Build something you will personally use every day.</span>
                  </div>
                </>
              )}

              {/* POINT 3: DEFINITION OF DONE */}
              {currentStep === 2 && (
                <>
                  <div className="flex items-center gap-2.5">
                    <span className="text-xs sm:text-sm font-black text-[#55FF55] px-2.5 py-0.5 bg-[#55FF55]/15 border border-[#55FF55]/40">
                      #03
                    </span>
                    <h3 className="text-lg sm:text-xl font-black text-white font-sans uppercase">
                      The "Definition of Done"
                    </h3>
                  </div>

                  <p className="text-sm sm:text-base text-zinc-100 font-semibold leading-relaxed">
                    How do you know when your project is officially complete and ready for your portfolio?
                  </p>

                  <div className="space-y-2 text-xs">
                    <div className="p-2.5 bg-[#090a10] border border-[#2e334a] flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#55FF55]" />
                      <span className="text-zinc-200">1. <strong>Working UI:</strong> The core feature works with zero console errors.</span>
                    </div>
                    <div className="p-2.5 bg-[#090a10] border border-[#2e334a] flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#55FF55]" />
                      <span className="text-zinc-200">2. <strong>Public GitHub Repo:</strong> Clean commits and a helpful README.md.</span>
                    </div>
                    <div className="p-2.5 bg-[#090a10] border border-[#2e334a] flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#55FF55]" />
                      <span className="text-zinc-200">3. <strong>Live Public URL:</strong> Hosted on Vercel/Netlify that anyone can click.</span>
                    </div>
                  </div>

                  <div className="p-3 bg-[#181b2c] border-l-4 border-[#55FF55] text-xs sm:text-sm text-zinc-200 font-medium flex items-center gap-2">
                    <Lightbulb className="w-4 h-4 text-[#55FF55] shrink-0" />
                    <span><strong>Takeaway:</strong> If it's only on localhost, it doesn't exist yet. Always deploy to a live URL!</span>
                  </div>
                </>
              )}
            </motion.div>
          </AnimatePresence>

          <div className="pt-3.5 border-t border-[#2e334a] text-xs sm:text-sm text-zinc-400 flex items-center justify-between font-bold">
            <span>Press Next or Hotbar to advance</span>
            <span className="text-[#55FFFF]">Module 12: Project Picker</span>
          </div>
        </div>

        {/* RIGHT SECTION: Visual Server Engine Preview */}
        <div className="bg-[#090a10] border-2 border-[#55FFFF] p-6 shadow-pixel flex flex-col">
          {/* Header */}
          <div className="flex items-center gap-2 pb-3 border-b border-[#2e334a] text-xs sm:text-sm font-bold text-zinc-300">
            <Server className="w-5 h-5 text-[#55FFFF]" />
            <span>PROJECT LAUNCHPAD ROULETTE</span>
          </div>

          {/* Dynamic Animation Viewport - Centered Vertically & Horizontally */}
          <div className="flex-1 flex flex-col items-center justify-center py-6 w-full my-auto">
            {/* AUTOMATION 1 & 2: Interactive Quest Generator Wheel */}
            {currentStep <= 1 && (
              <div className="w-full max-w-md mx-auto space-y-3 font-mono">
                <div
                  className="p-4 bg-[#121420] border-2 shadow-pixel space-y-3 transition-colors duration-300"
                  style={{ borderColor: currentQuest.color }}
                >
                  <div className="flex items-center justify-between border-b border-[#2e334a] pb-2 text-xs">
                    <span className="text-zinc-400 font-bold">PROJECT GENERATOR</span>

                    <button
                      onClick={rollQuest}
                      disabled={rolling}
                      className="px-3 py-1 bg-[#55FFFF] text-black text-xs font-black flex items-center gap-1.5 shadow-pixel hover:scale-105 transition-all cursor-pointer"
                    >
                      <Dices className={`w-3.5 h-3.5 ${rolling ? 'animate-spin' : ''}`} />
                      <span>{rolling ? 'SPINNING...' : 'SPIN IDEA'}</span>
                    </button>
                  </div>

                  {/* Active Quest Card */}
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentQuest.id}
                      initial={{ opacity: 0, scale: 0.92, y: 8 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.92, y: -8 }}
                      transition={{ duration: 0.15 }}
                      className="p-3 bg-[#090a10] border border-[#2e334a] space-y-2 text-xs"
                    >
                      <div className="flex items-center justify-between">
                        <h4 className="text-sm font-black text-white uppercase">{currentQuest.title}</h4>
                        <span
                          className="px-2 py-0.5 text-[10px] font-black border"
                          style={{
                            color: currentQuest.color,
                            borderColor: currentQuest.color,
                            backgroundColor: `${currentQuest.color}20`
                          }}
                        >
                          {currentQuest.time}
                        </span>
                      </div>

                      <p className="text-zinc-300 text-xs leading-relaxed">{currentQuest.desc}</p>

                      <div className="p-1.5 bg-[#121420] border border-[#2e334a] text-zinc-400 text-[11px] flex items-center justify-between">
                        <span>Stack: <strong className="text-[#55FFFF]">{currentQuest.stack}</strong></span>
                        <span className="text-[10px] text-zinc-500 font-bold">#{currentQuest.category}</span>
                      </div>
                    </motion.div>
                  </AnimatePresence>

                  <div className="p-2 bg-[#091f14] border border-[#55FF55]/60 text-center text-[#55FF55] text-xs font-bold flex items-center justify-center gap-1.5">
                    <Sparkles className="w-4 h-4" />
                    <span>Spin the generator to pick your starter project blueprint!</span>
                  </div>
                </div>
              </div>
            )}

            {/* AUTOMATION 3: Definition of Done Live Trophy Card */}
            {currentStep === 2 && (
              <div className="w-full max-w-md mx-auto space-y-3 font-mono">
                <div className="p-4 bg-[#121420] border-2 border-[#55FF55] shadow-pixel space-y-3">
                  <div className="flex items-center justify-between border-b border-[#2e334a] pb-2 text-xs">
                    <span className="text-zinc-400 font-bold">SHIP READY CRITERIA</span>
                    <span className="text-[#55FF55] font-black text-xs">3 / 3 COMPLETED</span>
                  </div>

                  <div className="space-y-1.5 text-xs font-mono">
                    <div className="p-2 bg-[#090a10] border border-[#55FF55] flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#55FF55]" />
                        <span className="text-white font-bold">1. Functional Frontend UI</span>
                      </div>
                      <span className="text-[#55FF55] font-bold">PASS</span>
                    </div>

                    <div className="p-2 bg-[#090a10] border border-[#55FF55] flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <GitBranch className="w-4 h-4 text-[#55FF55]" />
                        <span className="text-white font-bold">2. Public GitHub Repository</span>
                      </div>
                      <span className="text-[#55FF55] font-bold">PASS</span>
                    </div>

                    <div className="p-2 bg-[#090a10] border border-[#55FF55] flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Globe className="w-4 h-4 text-[#55FF55]" />
                        <span className="text-white font-bold">3. Live Vercel / Cloud URL</span>
                      </div>
                      <span className="text-[#55FF55] font-bold">PASS</span>
                    </div>
                  </div>

                  <div className="p-2 bg-[#181b2c] border border-[#55FF55]/40 text-center text-[#55FF55] text-xs font-bold">
                    🎓 Congratulations! You now understand the full circuit from idea to live website.
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
