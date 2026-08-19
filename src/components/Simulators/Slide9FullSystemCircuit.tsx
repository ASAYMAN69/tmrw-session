import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Monitor,
  Server,
  Database,
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  XCircle,
  Lightbulb,
  Cpu,
  Layers,
  Sparkles
} from 'lucide-react';
import { sound } from '../../utils/sound';

interface Slide9Props {
  subStep?: number;
  onSubStepChange?: (subStep: number) => void;
}

export const Slide9FullSystemCircuit: React.FC<Slide9Props> = ({
  subStep = 0,
  onSubStepChange,
}) => {
  const currentStep = Math.min(2, Math.max(0, subStep));

  // --- AUTOMATION 1 & 2: Animated Request Packet Pipeline ---
  const [packetHop, setPacketHop] = useState<number>(0);
  useEffect(() => {
    if (currentStep > 1) return;
    const interval = setInterval(() => {
      setPacketHop(prev => (prev + 1) % 4);
      sound.packetPing?.();
    }, 1600);
    return () => clearInterval(interval);
  }, [currentStep]);

  // --- AUTOMATION 3: HTTP Status Code Cycler ---
  const [statusIdx, setStatusIdx] = useState<number>(0);
  const statusCodes = [
    { code: '200 OK', meaning: 'Success: Data retrieved or operation succeeded.', color: '#55FF55', icon: CheckCircle2 },
    { code: '201 CREATED', meaning: 'Success: New note record committed to database.', color: '#55FFFF', icon: CheckCircle2 },
    { code: '401 UNAUTHORIZED', meaning: 'Client Error: Missing or invalid JWT auth token.', color: '#FFAA00', icon: AlertTriangle },
    { code: '404 NOT FOUND', meaning: 'Client Error: Requested note ID does not exist in DB.', color: '#FF8888', icon: XCircle },
    { code: '500 SERVER ERROR', meaning: 'Server Error: Database crash or uncaught backend bug.', color: '#FF5555', icon: XCircle }
  ];

  useEffect(() => {
    if (currentStep !== 2) return;
    const interval = setInterval(() => {
      setStatusIdx(prev => (prev + 1) % statusCodes.length);
      sound.click?.();
    }, 2500);
    return () => clearInterval(interval);
  }, [currentStep, statusCodes.length]);

  const activeStatus = statusCodes[statusIdx];
  const StatusIcon = activeStatus.icon;

  return (
    <div className="w-full flex flex-col gap-3.5 font-mono select-none">
      {/* 3 Main Points Top Hotbar */}
      <div className="bg-[#121420] border-2 border-[#2e334a] p-1.5 shadow-pixel">
        <div className="grid grid-cols-3 gap-2">
          {/* Point 1: 3-Tier Architecture */}
          <button
            onClick={() => { sound.click(); onSubStepChange?.(0); }}
            className={`py-2.5 px-3 flex items-center justify-between cursor-pointer border-2 transition-all ${
              currentStep === 0
                ? 'bg-[#1e2640] border-[#FFAA00] text-[#FFAA00] shadow-pixel scale-[1.02]'
                : 'bg-[#090a10] border-[#22273a] text-zinc-400 hover:text-white'
            }`}
          >
            <div className="flex items-center gap-2">
              <Layers className="w-5 h-5 text-[#FFAA00]" />
              <span className="text-xs sm:text-sm font-black">01. THE 3 TIERS</span>
            </div>
            <span className="text-[10px] font-bold hidden sm:inline text-zinc-500">Master Blueprint</span>
          </button>

          {/* Point 2: Lifecycle */}
          <button
            onClick={() => { sound.click(); onSubStepChange?.(1); }}
            className={`py-2.5 px-3 flex items-center justify-between cursor-pointer border-2 transition-all ${
              currentStep === 1
                ? 'bg-[#1e2640] border-[#55FFFF] text-[#55FFFF] shadow-pixel scale-[1.02]'
                : 'bg-[#090a10] border-[#22273a] text-zinc-400 hover:text-white'
            }`}
          >
            <div className="flex items-center gap-2">
              <Cpu className="w-5 h-5 text-[#55FFFF]" />
              <span className="text-xs sm:text-sm font-black">02. REQUEST CYCLE</span>
            </div>
            <span className="text-[10px] font-bold hidden sm:inline text-zinc-500">Hop-by-Hop Flow</span>
          </button>

          {/* Point 3: Status Codes */}
          <button
            onClick={() => { sound.click(); onSubStepChange?.(2); }}
            className={`py-2.5 px-3 flex items-center justify-between cursor-pointer border-2 transition-all ${
              currentStep === 2
                ? 'bg-[#1e2640] border-[#55FF55] text-[#55FF55] shadow-pixel scale-[1.02]'
                : 'bg-[#090a10] border-[#22273a] text-zinc-400 hover:text-white'
            }`}
          >
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-[#55FF55]" />
              <span className="text-xs sm:text-sm font-black">03. STATUS CODES</span>
            </div>
            <span className="text-[10px] font-bold hidden sm:inline text-zinc-500">HTTP Results</span>
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
              {/* POINT 1: THE 3 TIERS */}
              {currentStep === 0 && (
                <>
                  <div className="flex items-center gap-2.5">
                    <span className="text-xs sm:text-sm font-black text-[#FFAA00] px-2.5 py-0.5 bg-[#FFAA00]/15 border border-[#FFAA00]/40">
                      #01
                    </span>
                    <h3 className="text-lg sm:text-xl font-black text-white font-sans uppercase">
                      The 3-Tier Architecture
                    </h3>
                  </div>

                  <p className="text-sm sm:text-base text-zinc-100 font-semibold leading-relaxed">
                    Modern web applications are divided into three clean, specialized layers:
                  </p>

                  <div className="p-3.5 bg-[#090a10] border border-[#2e334a] text-xs space-y-2">
                    <div className="flex items-start gap-2">
                      <strong className="text-[#55FFFF] shrink-0">1. Client (Frontend):</strong>
                      <span className="text-zinc-200">React UI running inside the user's browser. Captures clicks and renders views.</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <strong className="text-[#FFAA00] shrink-0">2. Server (Backend):</strong>
                      <span className="text-zinc-200">Node/Python server. Authenticates users, applies business logic, and prepares SQL.</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <strong className="text-[#55FF55] shrink-0">3. Database (Memory):</strong>
                      <span className="text-zinc-200">PostgreSQL/MySQL. Holds tables, indexes, and permanent disk records.</span>
                    </div>
                  </div>

                  <div className="p-3 bg-[#181b2c] border-l-4 border-[#FFAA00] text-xs sm:text-sm text-zinc-200 font-medium flex items-center gap-2">
                    <Lightbulb className="w-4 h-4 text-[#FFAA00] shrink-0" />
                    <span><strong>Takeaway:</strong> Each tier has a single responsibility. They communicate strictly over APIs.</span>
                  </div>
                </>
              )}

              {/* POINT 2: REQUEST LIFECYCLE */}
              {currentStep === 1 && (
                <>
                  <div className="flex items-center gap-2.5">
                    <span className="text-xs sm:text-sm font-black text-[#55FFFF] px-2.5 py-0.5 bg-[#55FFFF]/15 border border-[#55FFFF]/40">
                      #02
                    </span>
                    <h3 className="text-lg sm:text-xl font-black text-white font-sans uppercase">
                      The Complete Request Lifecycle
                    </h3>
                  </div>

                  <p className="text-sm sm:text-base text-zinc-100 font-semibold leading-relaxed">
                    Every user action follows this synchronized round-trip circuit in under 100 milliseconds:
                  </p>

                  <div className="p-3.5 bg-[#090a10] border border-[#2e334a] text-xs space-y-1.5 font-mono">
                    <div className="text-zinc-300">
                      1. <strong className="text-[#55FFFF]">User Click:</strong> Submits "Add Note"<br />
                      2. <strong className="text-[#FFAA00]">API Transit:</strong> POST /api/notes over HTTPS<br />
                      3. <strong className="text-[#FFAA00]">Backend Logic:</strong> Validates JWT & checks limits<br />
                      4. <strong className="text-[#55FF55]">SQL Commit:</strong> INSERT INTO notes table<br />
                      5. <strong className="text-[#55FFFF]">UI Update:</strong> React renders new card with 0 reload!
                    </div>
                  </div>

                  <div className="p-3 bg-[#181b2c] border-l-4 border-[#55FFFF] text-xs sm:text-sm text-zinc-200 font-medium flex items-center gap-2">
                    <Lightbulb className="w-4 h-4 text-[#55FFFF] shrink-0" />
                    <span><strong>Takeaway:</strong> The frontend never waits for full page reloads — React updates state in real time.</span>
                  </div>
                </>
              )}

              {/* POINT 3: STATUS CODES */}
              {currentStep === 2 && (
                <>
                  <div className="flex items-center gap-2.5">
                    <span className="text-xs sm:text-sm font-black text-[#55FF55] px-2.5 py-0.5 bg-[#55FF55]/15 border border-[#55FF55]/40">
                      #03
                    </span>
                    <h3 className="text-lg sm:text-xl font-black text-white font-sans uppercase">
                      HTTP Status Codes: Universal Answers
                    </h3>
                  </div>

                  <p className="text-sm sm:text-base text-zinc-100 font-semibold leading-relaxed">
                    Servers report exact results to browsers using standardized 3-digit status codes:
                  </p>

                  <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                    <div className="p-2 bg-[#090a10] border border-[#55FF55]/60">
                      <strong className="text-[#55FF55] block">2xx Success</strong>
                      <span className="text-zinc-300 text-[10px]">200 OK, 201 Created</span>
                    </div>
                    <div className="p-2 bg-[#090a10] border border-[#FFAA00]/60">
                      <strong className="text-[#FFAA00] block">4xx Client Error</strong>
                      <span className="text-zinc-300 text-[10px]">401 Auth, 404 Not Found</span>
                    </div>
                    <div className="p-2 bg-[#090a10] border border-[#FF5555]/60 col-span-2">
                      <strong className="text-[#FF5555] block">5xx Server Error</strong>
                      <span className="text-zinc-300 text-[10px]">500 Internal Error, 503 Gateway Down</span>
                    </div>
                  </div>

                  <div className="p-3 bg-[#181b2c] border-l-4 border-[#55FF55] text-xs sm:text-sm text-zinc-200 font-medium flex items-center gap-2">
                    <Lightbulb className="w-4 h-4 text-[#55FF55] shrink-0" />
                    <span><strong>Takeaway:</strong> 2xx = Good, 4xx = User mistake, 5xx = Developer / Server bug.</span>
                  </div>
                </>
              )}
            </motion.div>
          </AnimatePresence>

          <div className="pt-3.5 border-t border-[#2e334a] text-xs sm:text-sm text-zinc-400 flex items-center justify-between font-bold">
            <span>Press Next or Hotbar to advance</span>
            <span className="text-[#55FFFF]">Module 08: Full Circuit</span>
          </div>
        </div>

        {/* RIGHT SECTION: Visual Server Engine Preview */}
        <div className="bg-[#090a10] border-2 border-[#55FFFF] p-6 shadow-pixel flex flex-col">
          {/* Header */}
          <div className="flex items-center gap-2 pb-3 border-b border-[#2e334a] text-xs sm:text-sm font-bold text-zinc-300">
            <Server className="w-5 h-5 text-[#55FFFF]" />
            <span>FULL SYSTEM CIRCUIT PREVIEW</span>
          </div>

          {/* Dynamic Animation Viewport - Centered Vertically & Horizontally */}
          <div className="flex-1 flex flex-col items-center justify-center py-6 w-full my-auto">
            {/* AUTOMATION 1 & 2: 3-Tier Connected Circuit */}
            {currentStep <= 1 && (
              <div className="w-full max-w-md mx-auto space-y-3 font-mono">
                <div className="p-4 bg-[#121420] border-2 border-[#55FFFF] shadow-pixel space-y-3">
                  <div className="flex items-center justify-between border-b border-[#2e334a] pb-2 text-xs">
                    <span className="text-zinc-400 font-bold">PACKET FLOW:</span>
                    <span className="text-[#55FFFF] font-bold">45ms ROUND-TRIP</span>
                  </div>

                  {/* 3 Tier Cards */}
                  <div className="grid grid-cols-3 gap-2 text-center text-xs">
                    {/* Tier 1: Browser */}
                    <div className={`p-2.5 border transition-all ${
                      packetHop === 0 || packetHop === 3 ? 'bg-[#181b2c] border-[#55FFFF] text-white shadow-glow-cyan' : 'bg-[#090a10] border-[#2e334a] text-zinc-500'
                    }`}>
                      <Monitor className="w-5 h-5 mx-auto mb-1 text-[#55FFFF]" />
                      <strong className="block text-[11px]">1. BROWSER</strong>
                      <span className="text-[9px] text-zinc-400">React UI</span>
                    </div>

                    {/* Tier 2: Server */}
                    <div className={`p-2.5 border transition-all ${
                      packetHop === 1 ? 'bg-[#181b2c] border-[#FFAA00] text-white shadow-glow-diamond' : 'bg-[#090a10] border-[#2e334a] text-zinc-500'
                    }`}>
                      <Server className="w-5 h-5 mx-auto mb-1 text-[#FFAA00]" />
                      <strong className="block text-[11px]">2. SERVER</strong>
                      <span className="text-[9px] text-zinc-400">Node / API</span>
                    </div>

                    {/* Tier 3: Database */}
                    <div className={`p-2.5 border transition-all ${
                      packetHop === 2 ? 'bg-[#181b2c] border-[#55FF55] text-white shadow-glow-diamond' : 'bg-[#090a10] border-[#2e334a] text-zinc-500'
                    }`}>
                      <Database className="w-5 h-5 mx-auto mb-1 text-[#55FF55]" />
                      <strong className="block text-[11px]">3. DATABASE</strong>
                      <span className="text-[9px] text-zinc-400">PostgreSQL</span>
                    </div>
                  </div>

                  <div className="p-2 bg-[#090a10] border border-[#2e334a] text-center text-xs font-bold text-zinc-300">
                    {packetHop === 0 && '⚡ 1. User taps "Save Note" in React'}
                    {packetHop === 1 && '⚡ 2. API verifies JWT and prepares query'}
                    {packetHop === 2 && '⚡ 3. Database inserts row into disk table'}
                    {packetHop === 3 && '⚡ 4. 200 OK returned: UI renders card!'}
                  </div>
                </div>
              </div>
            )}

            {/* AUTOMATION 3: HTTP Status Code Cycler */}
            {currentStep === 2 && (
              <div className="w-full max-w-md mx-auto space-y-3 font-mono">
                <div className="p-4 bg-[#121420] border-2 border-[#55FF55] shadow-pixel space-y-3">
                  <div className="flex items-center justify-between border-b border-[#2e334a] pb-2 text-xs">
                    <span className="text-zinc-400 font-bold">STATUS CODE EMITTER:</span>
                    <span className="text-[#55FF55] font-bold">RFC COMPLIANT</span>
                  </div>

                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeStatus.code}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="p-3 bg-[#090a10] border border-[#2e334a] space-y-2 text-xs"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-zinc-400">RESPONSE CODE:</span>
                        <span
                          className="px-2 py-0.5 text-xs font-black border"
                          style={{ color: activeStatus.color, borderColor: activeStatus.color, backgroundColor: `${activeStatus.color}20` }}
                        >
                          {activeStatus.code}
                        </span>
                      </div>

                      <p className="text-zinc-200 text-xs leading-relaxed">
                        {activeStatus.meaning}
                      </p>
                    </motion.div>
                  </AnimatePresence>

                  <div className="p-2 bg-[#181b2c] border border-[#55FF55]/40 text-center text-[#55FF55] text-xs font-bold">
                    ✓ Browser UI inspects status code to display success or error alerts.
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
