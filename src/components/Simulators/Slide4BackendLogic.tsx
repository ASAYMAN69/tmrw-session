import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Key,
  Calculator,
  ShieldCheck,
  ShieldAlert,
  Lock,
  ArrowRight,
  CheckCircle2,
  XCircle,
  FileCode,
  Sparkles,
  Server
} from 'lucide-react';
import { sound } from '../../utils/sound';

interface Slide4Props {
  subStep?: number;
  onSubStepChange?: (subStep: number) => void;
}

export const Slide4BackendLogic: React.FC<Slide4Props> = ({
  subStep = 0,
  onSubStepChange,
}) => {
  const currentStep = Math.min(2, Math.max(0, subStep));

  return (
    <div className="w-full flex flex-col gap-3.5 font-mono select-none">
      {/* 3-Pillar Top Hotbar Selector */}
      <div className="bg-[#121420] border-2 border-[#2e334a] p-1.5 shadow-pixel">
        <div className="grid grid-cols-3 gap-2">
          <button
            onClick={() => { sound.click(); onSubStepChange?.(0); }}
            className={`py-2.5 px-3 flex items-center justify-between cursor-pointer border-2 transition-all ${
              currentStep === 0
                ? 'bg-[#1e2640] border-[#FFAA00] text-[#FFAA00] shadow-pixel scale-[1.02]'
                : 'bg-[#090a10] border-[#22273a] text-zinc-400 hover:text-white'
            }`}
          >
            <div className="flex items-center gap-2">
              <Key className="w-5 h-5 text-[#FFAA00]" />
              <span className="text-xs sm:text-sm font-black">01. AUTHENTICATION</span>
            </div>
            <span className="text-[10px] font-bold hidden sm:inline text-zinc-500">Identity & Hash</span>
          </button>

          <button
            onClick={() => { sound.click(); onSubStepChange?.(1); }}
            className={`py-2.5 px-3 flex items-center justify-between cursor-pointer border-2 transition-all ${
              currentStep === 1
                ? 'bg-[#1e2640] border-[#55FFFF] text-[#55FFFF] shadow-pixel scale-[1.02]'
                : 'bg-[#090a10] border-[#22273a] text-zinc-400 hover:text-white'
            }`}
          >
            <div className="flex items-center gap-2">
              <Calculator className="w-5 h-5 text-[#55FFFF]" />
              <span className="text-xs sm:text-sm font-black">02. BUSINESS LOGIC</span>
            </div>
            <span className="text-[10px] font-bold hidden sm:inline text-zinc-500">Rules & Calculation</span>
          </button>

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
              <span className="text-xs sm:text-sm font-black">03. SECURITY GUARD</span>
            </div>
            <span className="text-[10px] font-bold hidden sm:inline text-zinc-500">Sanitization</span>
          </button>
        </div>
      </div>

      {/* Main Dynamic Viewport with 3 Completely Distinct Templates */}
      <AnimatePresence mode="wait">
        {/* SUB-SLIDE 1: AUTHENTICATION (LEGITIMACY & WORKSPACE ISOLATION) */}
        {currentStep === 0 && (
          <motion.div
            key="substep-auth"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.15 }}
            className="flex flex-col gap-3.5"
          >
            {/* Header */}
            <div className="flex items-center justify-between pb-2 border-b border-[#2e334a]">
              <div className="flex items-center gap-2.5">
                <span className="text-xs sm:text-sm font-black text-[#FFAA00] px-2.5 py-0.5 bg-[#FFAA00]/15 border border-[#FFAA00]/40">
                  #01
                </span>
                <h3 className="text-lg sm:text-xl font-black text-white font-sans uppercase">
                  AUTHENTICATION — IDENTITY VERIFICATION & WORKSPACE ISOLATION
                </h3>
              </div>
              <span className="text-xs font-bold text-[#FFAA00] hidden sm:inline">
                2 Core Responsibilities
              </span>
            </div>

            {/* Unique Template 1: 2-Column Split (Pillar 1: Legitimacy Check VS Pillar 2: Workspace Separation) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Left Column: Pillar 1 - Legitimacy Check */}
              <div className="p-5 bg-[#090a10] border-2 border-[#FFAA00] shadow-pixel flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs sm:text-sm text-[#FFAA00] font-black uppercase">
                      1. ARE THEY LEGITIMATE?
                    </span>
                    <Key className="w-5 h-5 text-[#FFAA00]" />
                  </div>
                  <p className="text-sm text-zinc-100 font-semibold mb-3 leading-relaxed">
                    The backend verifies if the person knocking on the door is real and owns the account before letting them inside.
                  </p>

                  <div className="space-y-2 text-xs font-mono">
                    <div className="p-2.5 bg-[#121420] border border-[#55FF55]/60 flex items-center justify-between">
                      <span className="text-zinc-300">Valid Password / Google Login:</span>
                      <strong className="text-[#55FF55] font-black">✓ ACCESS GRANTED</strong>
                    </div>

                    <div className="p-2.5 bg-[#121420] border border-[#FF5555]/60 flex items-center justify-between">
                      <span className="text-zinc-300">Wrong Password / Imposter:</span>
                      <strong className="text-[#FF5555] font-black">✗ 401 BLOCKED</strong>
                    </div>
                  </div>
                </div>

                <div className="mt-3 p-2 bg-[#181b2c] border-l-4 border-[#FFAA00] text-xs text-zinc-300 font-medium">
                  💡 <strong>Goal:</strong> Prevents unauthorized strangers from accessing private system data.
                </div>
              </div>

              {/* Right Column: Pillar 2 - Unique Identity & Workspace Separation */}
              <div className="p-5 bg-[#090a10] border-2 border-[#55FFFF] shadow-pixel flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs sm:text-sm text-[#55FFFF] font-black uppercase">
                      2. ISOLATING USER WORKSPACES
                    </span>
                    <Lock className="w-5 h-5 text-[#55FFFF]" />
                  </div>
                  <p className="text-sm text-zinc-100 font-semibold mb-3 leading-relaxed">
                    Uniquely identifies who is logged in so each person sees only their own data based on their access level.
                  </p>

                  <div className="space-y-2 text-xs">
                    <div className="p-2.5 bg-[#121420] border border-[#2e334a] flex items-center justify-between">
                      <div>
                        <span className="text-[#55FFFF] font-black block">Student Account (user_801):</span>
                        <span className="text-zinc-400 text-[11px]">Can only see & edit their own private notes.</span>
                      </div>
                      <span className="text-[#55FF55] font-black text-xs">ISOLATED</span>
                    </div>

                    <div className="p-2.5 bg-[#121420] border border-[#2e334a] flex items-center justify-between">
                      <div>
                        <span className="text-[#FFAA00] font-black block">Admin / Teacher Access:</span>
                        <span className="text-zinc-400 text-[11px]">Can view course stats & manage all submissions.</span>
                      </div>
                      <span className="text-[#FFAA00] font-black text-xs">ELEVATED</span>
                    </div>
                  </div>
                </div>

                <div className="mt-3 p-2 bg-[#181b2c] border-l-4 border-[#55FFFF] text-xs text-zinc-300 font-medium">
                  💡 <strong>Goal:</strong> User A can never see User B's files. The backend keeps workspaces separated.
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* SUB-SLIDE 2: BUSINESS LOGIC & CALCULATION ENGINE */}
        {currentStep === 1 && (
          <motion.div
            key="substep-logic"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.15 }}
            className="flex flex-col gap-3.5"
          >
            {/* Header */}
            <div className="flex items-center justify-between pb-2 border-b border-[#2e334a]">
              <div className="flex items-center gap-2.5">
                <span className="text-xs sm:text-sm font-black text-[#55FFFF] px-2.5 py-0.5 bg-[#55FFFF]/15 border border-[#55FFFF]/40">
                  #02
                </span>
                <h3 className="text-lg sm:text-xl font-black text-white font-sans uppercase">
                  BUSINESS LOGIC — THE SINGLE SOURCE OF TRUTH
                </h3>
              </div>
              <span className="text-xs font-bold text-[#55FFFF] hidden sm:inline">
                Never Let Clients Calculate Totals
              </span>
            </div>

            {/* Unique Template 2: 3-Station Flow Line with Live Price Audit */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {/* Box 1: Client Request */}
              <div className="p-4 bg-[#090a10] border-2 border-[#383e58] shadow-pixel flex flex-col justify-between">
                <div>
                  <span className="text-xs text-[#55FFFF] font-black block mb-1">STAGE 1: RAW INPUT</span>
                  <h4 className="text-sm font-black text-white uppercase">User Shopping Cart</h4>
                  <p className="text-xs text-zinc-300 mt-1">Client selects 2 items and applies a discount code.</p>
                </div>
                <div className="mt-3 p-2 bg-[#121420] border border-[#2e334a] text-xs space-y-1">
                  <div className="flex justify-between text-zinc-300">
                    <span>2x Course Pass:</span>
                    <span>$80.00</span>
                  </div>
                  <div className="flex justify-between text-[#55FFFF]">
                    <span>Coupon Code:</span>
                    <span>STUDENT20</span>
                  </div>
                </div>
              </div>

              {/* Box 2: Server Calculation Engine */}
              <div className="p-4 bg-[#090a10] border-2 border-[#55FFFF] shadow-pixel flex flex-col justify-between">
                <div>
                  <span className="text-xs text-[#55FFFF] font-black block mb-1">STAGE 2: SERVER RULES</span>
                  <h4 className="text-sm font-black text-white uppercase">Rule Computation</h4>
                  <p className="text-xs text-zinc-300 mt-1">Backend validates coupon validity and checks stock.</p>
                </div>
                <div className="mt-3 p-2 bg-[#121420] border border-[#55FFFF]/40 text-xs space-y-1 font-mono">
                  <div className="flex justify-between text-zinc-300">
                    <span>Base Subtotal:</span>
                    <span>$80.00</span>
                  </div>
                  <div className="flex justify-between text-[#55FF55]">
                    <span>- 20% Discount:</span>
                    <span>-$16.00</span>
                  </div>
                  <div className="flex justify-between text-zinc-400">
                    <span>+ 5% State Tax:</span>
                    <span>+$3.20</span>
                  </div>
                </div>
              </div>

              {/* Box 3: Certified Database Total */}
              <div className="p-4 bg-[#090a10] border-2 border-[#55FF55] shadow-pixel flex flex-col justify-between">
                <div>
                  <span className="text-xs text-[#55FF55] font-black block mb-1">STAGE 3: CHARGE & SAVE</span>
                  <h4 className="text-sm font-black text-white uppercase">Certified Total</h4>
                  <p className="text-xs text-zinc-300 mt-1">Charge payment gateway and write order to database.</p>
                </div>
                <div className="mt-3 p-3 bg-[#121420] border border-[#55FF55] text-center">
                  <span className="text-[10px] text-zinc-400 uppercase block font-bold">CERTIFIED FINAL AMOUNT</span>
                  <strong className="text-xl text-[#55FF55] font-black font-mono block mt-0.5">$67.20 USD</strong>
                </div>
              </div>
            </div>

            {/* Pro Tip Bottom Callout */}
            <div className="p-3 bg-[#181b2c] border-l-4 border-[#55FFFF] text-xs sm:text-sm text-zinc-200 font-semibold flex items-center justify-between">
              <span>💡 <strong>Why?</strong> If calculations ran on the frontend, anyone could open browser DevTools and change the price to $0.01!</span>
            </div>
          </motion.div>
        )}

        {/* SUB-SLIDE 3: SECURITY GUARD & INPUT SANITIZATION */}
        {currentStep === 2 && (
          <motion.div
            key="substep-security"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.15 }}
            className="flex flex-col gap-3.5"
          >
            {/* Header */}
            <div className="flex items-center justify-between pb-2 border-b border-[#2e334a]">
              <div className="flex items-center gap-2.5">
                <span className="text-xs sm:text-sm font-black text-[#55FF55] px-2.5 py-0.5 bg-[#55FF55]/15 border border-[#55FF55]/40">
                  #03
                </span>
                <h3 className="text-lg sm:text-xl font-black text-white font-sans uppercase">
                  SECURITY GUARD — INPUT SANITIZATION & EXPLOIT BLOCKER
                </h3>
              </div>
              <span className="text-xs font-bold text-[#FF5555] hidden sm:inline">
                Never Trust Client Input
              </span>
            </div>

            {/* Unique Template 3: Dual Exploit Neutralizer Matrix (XSS vs SQL Injection) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Exploit 1: XSS Attack */}
              <div className="p-4 bg-[#090a10] border-2 border-[#FF5555] shadow-pixel flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-[#FF5555] font-black uppercase">
                      THREAT 1: CROSS-SITE SCRIPTING (XSS)
                    </span>
                    <ShieldAlert className="w-4 h-4 text-[#FF5555]" />
                  </div>
                  <p className="text-xs text-zinc-200 font-semibold mb-2">
                    Hacker types JavaScript code into a note title to steal passwords from other users.
                  </p>

                  <div className="space-y-1.5 text-xs">
                    <div className="p-2 bg-[#121420] border border-[#FF5555]/50">
                      <span className="text-[10px] text-[#FF5555] font-bold block">MALICIOUS PAYLOAD:</span>
                      <code className="text-[#FF5555] font-mono text-[11px] block truncate">
                        {'<script>stealAllCookies()</script>'}
                      </code>
                    </div>
                    <div className="p-2 bg-[#121420] border border-[#55FF55]">
                      <span className="text-[10px] text-[#55FF55] font-bold block">SANITIZED OUTPUT:</span>
                      <code className="text-[#55FF55] font-mono text-[11px] block truncate">
                        {'&lt;script&gt;stealAllCookies()&lt;/script&gt;'}
                      </code>
                    </div>
                  </div>
                </div>

                <span className="text-[11px] text-[#55FF55] font-bold mt-2">
                  ✓ Stripped to harmless plain text before saving.
                </span>
              </div>

              {/* Exploit 2: SQL Injection Attack */}
              <div className="p-4 bg-[#090a10] border-2 border-[#55FFFF] shadow-pixel flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-[#55FFFF] font-black uppercase">
                      THREAT 2: SQL DATABASE INJECTION
                    </span>
                    <ShieldCheck className="w-4 h-4 text-[#55FFFF]" />
                  </div>
                  <p className="text-xs text-zinc-200 font-semibold mb-2">
                    Hacker tries to inject SQL commands into login form to delete all tables.
                  </p>

                  <div className="space-y-1.5 text-xs">
                    <div className="p-2 bg-[#121420] border border-[#FF5555]/50">
                      <span className="text-[10px] text-[#FF5555] font-bold block">ATTACK STRING:</span>
                      <code className="text-[#FF5555] font-mono text-[11px] block truncate">
                        {"' OR 1=1; DROP TABLE users; --"}
                      </code>
                    </div>
                    <div className="p-2 bg-[#121420] border border-[#55FFFF]">
                      <span className="text-[10px] text-[#55FFFF] font-bold block">PARAMETERIZED QUERY:</span>
                      <code className="text-[#55FFFF] font-mono text-[11px] block truncate">
                        {"db.query('SELECT * WHERE user = $1', [input])"}
                      </code>
                    </div>
                  </div>
                </div>

                <span className="text-[11px] text-[#55FF55] font-bold mt-2">
                  ✓ Treated as a harmless string literal. Table safe!
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
