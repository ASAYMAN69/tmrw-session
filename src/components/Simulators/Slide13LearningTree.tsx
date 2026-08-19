import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  BookOpen,
  Code2,
  CloudLightning,
  CheckCircle2,
  Lightbulb,
  Server,
  Star,
  Sparkles
} from 'lucide-react';
import { sound } from '../../utils/sound';

interface Slide13Props {
  subStep?: number;
  onSubStepChange?: (subStep: number) => void;
}

export const Slide13LearningTree: React.FC<Slide13Props> = ({
  subStep = 0,
  onSubStepChange,
}) => {
  const currentStep = Math.min(2, Math.max(0, subStep));

  const tiers = [
    {
      name: 'LEVEL 1: WEB FOUNDATIONS',
      icon: BookOpen,
      badge: '#FFAA00',
      tagline: 'The Core Building Blocks',
      desc: 'Master the foundational trio of the web and version control before adding frameworks.',
      skills: [
        { name: 'HTML5 Semantic Elements', detail: 'Structure, buttons, forms, and accessibility' },
        { name: 'CSS3 & Responsive Layouts', detail: 'Flexbox, CSS Grid, media queries, and Tailwind CSS' },
        { name: 'Modern JavaScript (ES6+)', detail: 'DOM manipulation, event listeners, fetch() APIs, async/await' },
        { name: 'Git & GitHub Basics', detail: 'Commits, branching, and pushing code repositories' }
      ],
      takeaway: 'With Level 1 alone, you can already build and deploy stunning client portfolios and landing pages!'
    },
    {
      name: 'LEVEL 2: FULL-STACK APPS',
      icon: Code2,
      badge: '#55FFFF',
      tagline: 'Dynamic React & Server Logic',
      desc: 'Move from static pages to interactive, data-driven web applications with databases.',
      skills: [
        { name: 'React & Component State', detail: 'Hooks, re-usable component architecture, and JSX' },
        { name: 'Node.js & Express APIs', detail: 'RESTful endpoints, HTTP request/response lifecycles' },
        { name: 'PostgreSQL / Supabase', detail: 'Relational schemas, SQL queries, and table indexing' },
        { name: 'User Authentication', detail: 'JWT tokens, password hashing, and role permissions' }
      ],
      takeaway: 'Level 2 unlocks full-stack development — build custom SaaS products, notes apps, and dashboards.'
    },
    {
      name: 'LEVEL 3: PRODUCTION & DEVOPS',
      icon: CloudLightning,
      badge: '#55FF55',
      tagline: 'Scale, Security & Cloud',
      desc: 'Ship production-ready systems with automated deployment and global edge delivery.',
      skills: [
        { name: 'Automated CI/CD Pipelines', detail: 'GitHub Actions and automated test suites' },
        { name: 'Cloud & Edge Hosting', detail: 'Vercel, Render, Cloudflare Workers, and serverless compute' },
        { name: 'DNS, Domains & SSL', detail: 'A Records, CNAMEs, TLS certificates, and edge caching' },
        { name: 'Security & Secrets', detail: '.env configurations, rate limiting, and exploit sanitization' }
      ],
      takeaway: 'Level 3 transforms your projects into secure, 24/7 globally available products with 99.9% uptime.'
    }
  ];

  const currentTier = tiers[currentStep];
  const CurrentIcon = currentTier.icon;

  return (
    <div className="w-full flex flex-col gap-3.5 font-mono select-none">
      {/* 3 Main Points Top Hotbar */}
      <div className="bg-[#121420] border-2 border-[#2e334a] p-1.5 shadow-pixel">
        <div className="grid grid-cols-3 gap-2">
          {/* Level 1 */}
          <button
            onClick={() => { sound.click(); onSubStepChange?.(0); }}
            className={`py-2.5 px-3 flex items-center justify-between cursor-pointer border-2 transition-all ${
              currentStep === 0
                ? 'bg-[#1e2640] border-[#FFAA00] text-[#FFAA00] shadow-pixel scale-[1.02]'
                : 'bg-[#090a10] border-[#22273a] text-zinc-400 hover:text-white'
            }`}
          >
            <div className="flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-[#FFAA00]" />
              <span className="text-xs sm:text-sm font-black">01. FOUNDATIONS</span>
            </div>
            <span className="text-[10px] font-bold hidden sm:inline text-zinc-500">Level 1</span>
          </button>

          {/* Level 2 */}
          <button
            onClick={() => { sound.click(); onSubStepChange?.(1); }}
            className={`py-2.5 px-3 flex items-center justify-between cursor-pointer border-2 transition-all ${
              currentStep === 1
                ? 'bg-[#1e2640] border-[#55FFFF] text-[#55FFFF] shadow-pixel scale-[1.02]'
                : 'bg-[#090a10] border-[#22273a] text-zinc-400 hover:text-white'
            }`}
          >
            <div className="flex items-center gap-2">
              <Code2 className="w-5 h-5 text-[#55FFFF]" />
              <span className="text-xs sm:text-sm font-black">02. FULL-STACK</span>
            </div>
            <span className="text-[10px] font-bold hidden sm:inline text-zinc-500">Level 2</span>
          </button>

          {/* Level 3 */}
          <button
            onClick={() => { sound.click(); onSubStepChange?.(2); }}
            className={`py-2.5 px-3 flex items-center justify-between cursor-pointer border-2 transition-all ${
              currentStep === 2
                ? 'bg-[#1e2640] border-[#55FF55] text-[#55FF55] shadow-pixel scale-[1.02]'
                : 'bg-[#090a10] border-[#22273a] text-zinc-400 hover:text-white'
            }`}
          >
            <div className="flex items-center gap-2">
              <CloudLightning className="w-5 h-5 text-[#55FF55]" />
              <span className="text-xs sm:text-sm font-black">03. PRODUCTION</span>
            </div>
            <span className="text-[10px] font-bold hidden sm:inline text-zinc-500">Level 3</span>
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
                  style={{ color: currentTier.badge, borderColor: `${currentTier.badge}60`, backgroundColor: `${currentTier.badge}15` }}
                >
                  TIER 0{currentStep + 1}
                </span>
                <h3 className="text-lg sm:text-xl font-black text-white font-sans uppercase">
                  {currentTier.name}
                </h3>
              </div>

              <p className="text-sm sm:text-base text-zinc-100 font-semibold leading-relaxed">
                {currentTier.desc}
              </p>

              {/* Skills breakdown */}
              <div className="space-y-1.5 text-xs">
                {currentTier.skills.map((s, idx) => (
                  <div key={idx} className="p-2 bg-[#090a10] border border-[#2e334a] flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 shrink-0 mt-0.5" style={{ color: currentTier.badge }} />
                    <div>
                      <strong className="text-white block">{s.name}</strong>
                      <span className="text-zinc-400 text-[11px]">{s.detail}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-3 bg-[#181b2c] border-l-4 text-xs sm:text-sm text-zinc-200 font-medium flex items-center gap-2" style={{ borderColor: currentTier.badge }}>
                <Lightbulb className="w-4 h-4 shrink-0" style={{ color: currentTier.badge }} />
                <span><strong>Takeaway:</strong> {currentTier.takeaway}</span>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="pt-3.5 border-t border-[#2e334a] text-xs sm:text-sm text-zinc-400 flex items-center justify-between font-bold">
            <span>Press Next or Hotbar to advance</span>
            <span className="text-[#55FFFF]">Module 12: Roadmap Tree</span>
          </div>
        </div>

        {/* RIGHT SECTION: Visual Server Engine Preview */}
        <div className="bg-[#090a10] border-2 border-[#55FFFF] p-6 shadow-pixel flex flex-col">
          {/* Header */}
          <div className="flex items-center gap-2 pb-3 border-b border-[#2e334a] text-xs sm:text-sm font-bold text-zinc-300">
            <Server className="w-5 h-5 text-[#55FFFF]" />
            <span>PROGRESSION MASTERY ENGINE</span>
          </div>

          {/* Dynamic Animation Viewport - Centered Vertically & Horizontally */}
          <div className="flex-1 flex flex-col items-center justify-center py-6 w-full my-auto">
            <div className="w-full max-w-md mx-auto space-y-3 font-mono">
              <div className="p-4 bg-[#121420] border-2 shadow-pixel space-y-3" style={{ borderColor: currentTier.badge }}>
                <div className="flex items-center justify-between border-b border-[#2e334a] pb-2 text-xs">
                  <span className="text-zinc-400 font-bold">SKILL TREE STATUS:</span>
                  <span className="font-black text-xs uppercase" style={{ color: currentTier.badge }}>
                    {currentTier.tagline}
                  </span>
                </div>

                {/* 3 Tier Progression Cards */}
                <div className="space-y-1.5 text-xs">
                  <div className={`p-2.5 border transition-all ${
                    currentStep === 0 ? 'bg-[#181b2c] border-[#FFAA00] text-white shadow-glow-diamond' : 'bg-[#090a10] border-[#2e334a] text-zinc-400'
                  }`}>
                    <div className="flex items-center justify-between">
                      <span className="font-bold">LEVEL 1: CORE FOUNDATIONS</span>
                      <span className="text-[#FFAA00] font-black">{currentStep >= 0 ? 'UNLOCKED' : 'LOCKED'}</span>
                    </div>
                  </div>

                  <div className={`p-2.5 border transition-all ${
                    currentStep === 1 ? 'bg-[#181b2c] border-[#55FFFF] text-white shadow-glow-cyan' : 'bg-[#090a10] border-[#2e334a] text-zinc-400'
                  }`}>
                    <div className="flex items-center justify-between">
                      <span className="font-bold">LEVEL 2: FULL-STACK APPS</span>
                      <span className="text-[#55FFFF] font-black">{currentStep >= 1 ? 'UNLOCKED' : 'NEXT STEP'}</span>
                    </div>
                  </div>

                  <div className={`p-2.5 border transition-all ${
                    currentStep === 2 ? 'bg-[#181b2c] border-[#55FF55] text-white shadow-glow-diamond' : 'bg-[#090a10] border-[#2e334a] text-zinc-400'
                  }`}>
                    <div className="flex items-center justify-between">
                      <span className="font-bold">LEVEL 3: PRODUCTION DEVOPS</span>
                      <span className="text-[#55FF55] font-black">{currentStep >= 2 ? 'ACTIVE' : 'FUTURE'}</span>
                    </div>
                  </div>
                </div>

                <div className="p-2 bg-[#090a10] border border-[#2e334a] text-center text-xs font-bold text-[#55FF55] flex items-center justify-center gap-1.5">
                  <Sparkles className="w-4 h-4" />
                  <span>Focus on 1 project at your current level before moving up!</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
