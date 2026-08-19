import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FileText,
  Layers,
  ShieldCheck,
  Lightbulb,
  CheckCircle2,
  XCircle,
  Server,
  Database,
  Lock,
  Globe,
  Sparkles
} from 'lucide-react';
import { sound } from '../../utils/sound';

interface Slide12Props {
  subStep?: number;
  onSubStepChange?: (subStep: number) => void;
}

export const Slide12ArchitectureCompare: React.FC<Slide12Props> = ({
  subStep = 0,
  onSubStepChange,
}) => {
  const currentStep = Math.min(2, Math.max(0, subStep));

  const archetypes = [
    {
      name: '1. Personal Portfolio',
      icon: FileText,
      badge: '#FFAA00',
      subtitle: 'Static Showcase & Resume',
      desc: 'Displaying your projects, contact links, and about page.',
      tech: ['React / HTML', 'Tailwind CSS', 'Vercel / GitHub Pages'],
      needs: { frontend: true, backend: false, database: false, auth: false },
      cost: '$0 / month forever',
      takeaway: 'Zero backend or database needed! Pure static frontend hosted free on edge CDNs.'
    },
    {
      name: '2. Dynamic Blog / Directory',
      icon: Layers,
      badge: '#55FFFF',
      subtitle: 'Read-Heavy Content Feed',
      desc: 'Publishing articles, tutorials, or public searchable directory items.',
      tech: ['React / Next.js', 'Headless CMS / DB', 'Edge Cache'],
      needs: { frontend: true, backend: true, database: true, auth: false },
      cost: '$0 - $5 / month',
      takeaway: 'Needs a database for articles, but visitors do NOT need user accounts or logins.'
    },
    {
      name: '3. Full-Stack SaaS Application',
      icon: ShieldCheck,
      badge: '#55FF55',
      subtitle: 'Private Accounts & User Data',
      desc: 'Interactive platform (like Student Notes or Notion) with private user data.',
      tech: ['React UI', 'Node.js / Express API', 'PostgreSQL DB', 'JWT Auth'],
      needs: { frontend: true, backend: true, database: true, auth: true },
      cost: '$5 - $20 / month',
      takeaway: 'Requires all 4 pillars: Frontend UI, Backend API, Database tables, and Auth security.'
    }
  ];

  const current = archetypes[currentStep];
  const CurrentIcon = current.icon;

  return (
    <div className="w-full flex flex-col gap-3.5 font-mono select-none">
      {/* 3 Main Points Top Hotbar */}
      <div className="bg-[#121420] border-2 border-[#2e334a] p-1.5 shadow-pixel">
        <div className="grid grid-cols-3 gap-2">
          {/* Blueprint 1 */}
          <button
            onClick={() => { sound.click(); onSubStepChange?.(0); }}
            className={`py-2.5 px-3 flex items-center justify-between cursor-pointer border-2 transition-all ${
              currentStep === 0
                ? 'bg-[#1e2640] border-[#FFAA00] text-[#FFAA00] shadow-pixel scale-[1.02]'
                : 'bg-[#090a10] border-[#22273a] text-zinc-400 hover:text-white'
            }`}
          >
            <div className="flex items-center gap-2">
              <FileText className="w-5 h-5 text-[#FFAA00]" />
              <span className="text-xs sm:text-sm font-black">01. PORTFOLIO</span>
            </div>
            <span className="text-[10px] font-bold hidden sm:inline text-zinc-500">Frontend Only</span>
          </button>

          {/* Blueprint 2 */}
          <button
            onClick={() => { sound.click(); onSubStepChange?.(1); }}
            className={`py-2.5 px-3 flex items-center justify-between cursor-pointer border-2 transition-all ${
              currentStep === 1
                ? 'bg-[#1e2640] border-[#55FFFF] text-[#55FFFF] shadow-pixel scale-[1.02]'
                : 'bg-[#090a10] border-[#22273a] text-zinc-400 hover:text-white'
            }`}
          >
            <div className="flex items-center gap-2">
              <Layers className="w-5 h-5 text-[#55FFFF]" />
              <span className="text-xs sm:text-sm font-black">02. BLOG & CMS</span>
            </div>
            <span className="text-[10px] font-bold hidden sm:inline text-zinc-500">Content Feed</span>
          </button>

          {/* Blueprint 3 */}
          <button
            onClick={() => { sound.click(); onSubStepChange?.(2); }}
            className={`py-2.5 px-3 flex items-center justify-between cursor-pointer border-2 transition-all ${
              currentStep === 2
                ? 'bg-[#1e2640] border-[#55FF55] text-[#55FF55] shadow-pixel scale-[1.02]'
                : 'bg-[#090a10] border-[#22273a] text-zinc-400 hover:text-white'
            }`}
          >
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[#55FF55]" />
              <span className="text-xs sm:text-sm font-black">03. FULL SAAS</span>
            </div>
            <span className="text-[10px] font-bold hidden sm:inline text-zinc-500">Complete Stack</span>
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
                  style={{ color: current.badge, borderColor: `${current.badge}60`, backgroundColor: `${current.badge}15` }}
                >
                  ARCHETYPE 0{currentStep + 1}
                </span>
                <h3 className="text-lg sm:text-xl font-black text-white font-sans uppercase">
                  {current.name}
                </h3>
              </div>

              <p className="text-sm sm:text-base text-zinc-100 font-semibold leading-relaxed">
                {current.desc}
              </p>

              {/* Recommended Stack Box */}
              <div className="p-3.5 bg-[#090a10] border border-[#2e334a] text-xs space-y-1.5 font-mono">
                <div className="flex items-center justify-between text-zinc-400 text-[10px] pb-1 border-b border-[#2e334a]">
                  <span>RECOMMENDED TOOLS:</span>
                  <span className="text-[#55FF55] font-bold">EST. COST: {current.cost}</span>
                </div>
                <div className="text-zinc-200">
                  {current.tech.map((t, idx) => (
                    <span key={idx} className="inline-block mr-2 text-[#55FFFF]">
                      • {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-3 bg-[#181b2c] border-l-4 text-xs sm:text-sm text-zinc-200 font-medium flex items-center gap-2" style={{ borderColor: current.badge }}>
                <Lightbulb className="w-4 h-4 shrink-0" style={{ color: current.badge }} />
                <span><strong>Takeaway:</strong> {current.takeaway}</span>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="pt-3.5 border-t border-[#2e334a] text-xs sm:text-sm text-zinc-400 flex items-center justify-between font-bold">
            <span>Press Next or Hotbar to advance</span>
            <span className="text-[#55FFFF]">Module 11: Architecture</span>
          </div>
        </div>

        {/* RIGHT SECTION: Visual Server Engine Preview */}
        <div className="bg-[#090a10] border-2 border-[#55FFFF] p-6 shadow-pixel flex flex-col">
          {/* Header */}
          <div className="flex items-center gap-2 pb-3 border-b border-[#2e334a] text-xs sm:text-sm font-bold text-zinc-300">
            <Server className="w-5 h-5 text-[#55FFFF]" />
            <span>REQUIRED STACK CHECKLIST</span>
          </div>

          {/* Dynamic Animation Viewport - Centered Vertically & Horizontally */}
          <div className="flex-1 flex flex-col items-center justify-center py-6 w-full my-auto">
            <div className="w-full max-w-md mx-auto space-y-3 font-mono">
              <div className="p-4 bg-[#121420] border-2 shadow-pixel space-y-3" style={{ borderColor: current.badge }}>
                <div className="flex items-center justify-between border-b border-[#2e334a] pb-2 text-xs">
                  <span className="text-zinc-400 font-bold">PILLARS NEEDED FOR:</span>
                  <span className="font-black text-xs uppercase" style={{ color: current.badge }}>
                    {current.name}
                  </span>
                </div>

                {/* 4 Pillar Checklist */}
                <div className="space-y-1.5 text-xs">
                  {/* 1. Frontend */}
                  <div className="p-2 bg-[#090a10] border border-[#2e334a] flex items-center justify-between">
                    <span className="text-zinc-200">1. Frontend (React / HTML / CSS)</span>
                    <span className="text-[#55FF55] font-black text-xs flex items-center gap-1">
                      <CheckCircle2 className="w-4 h-4" /> REQUIRED
                    </span>
                  </div>

                  {/* 2. Backend */}
                  <div className="p-2 bg-[#090a10] border border-[#2e334a] flex items-center justify-between">
                    <span className="text-zinc-200">2. Backend API (Node / Express)</span>
                    <span className={current.needs.backend ? 'text-[#55FF55] font-black text-xs flex items-center gap-1' : 'text-zinc-500 font-bold text-xs flex items-center gap-1'}>
                      {current.needs.backend ? <CheckCircle2 className="w-4 h-4" /> : <XCircle className="w-4 h-4" />}
                      {current.needs.backend ? 'REQUIRED' : 'NOT NEEDED ($0)'}
                    </span>
                  </div>

                  {/* 3. Database */}
                  <div className="p-2 bg-[#090a10] border border-[#2e334a] flex items-center justify-between">
                    <span className="text-zinc-200">3. Database (PostgreSQL)</span>
                    <span className={current.needs.database ? 'text-[#55FF55] font-black text-xs flex items-center gap-1' : 'text-zinc-500 font-bold text-xs flex items-center gap-1'}>
                      {current.needs.database ? <CheckCircle2 className="w-4 h-4" /> : <XCircle className="w-4 h-4" />}
                      {current.needs.database ? 'REQUIRED' : 'NOT NEEDED ($0)'}
                    </span>
                  </div>

                  {/* 4. Auth */}
                  <div className="p-2 bg-[#090a10] border border-[#2e334a] flex items-center justify-between">
                    <span className="text-zinc-200">4. User Authentication (JWT)</span>
                    <span className={current.needs.auth ? 'text-[#55FF55] font-black text-xs flex items-center gap-1' : 'text-zinc-500 font-bold text-xs flex items-center gap-1'}>
                      {current.needs.auth ? <CheckCircle2 className="w-4 h-4" /> : <XCircle className="w-4 h-4" />}
                      {current.needs.auth ? 'REQUIRED' : 'NOT NEEDED ($0)'}
                    </span>
                  </div>
                </div>

                <div className="p-2 bg-[#090a10] border border-[#2e334a] text-center text-xs font-bold text-[#55FF55] flex items-center justify-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Build minimal. Add complexity only when features demand it.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
