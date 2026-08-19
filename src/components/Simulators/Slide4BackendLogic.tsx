import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Key,
  Users,
  Calculator,
  ShieldCheck,
  ShieldAlert,
  Lock,
  ArrowRight,
  CheckCircle2,
  XCircle,
  FolderLock,
  Server,
  Zap
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

  // Point 1 Automation: Alternates between Legitimacy Scanner and Workspace Routing
  const [authStage, setAuthStage] = useState<'scan' | 'workspace'>('scan');
  const [authCycle, setAuthCycle] = useState<'legit' | 'imposter'>('legit');
  const [activeUser, setActiveUser] = useState<'alex' | 'sam'>('alex');

  useEffect(() => {
    if (currentStep !== 0) return;
    const interval = setInterval(() => {
      setAuthStage(prev => (prev === 'scan' ? 'workspace' : 'scan'));
      setAuthCycle(prev => (prev === 'legit' ? 'imposter' : 'legit'));
      setActiveUser(prev => (prev === 'alex' ? 'sam' : 'alex'));
    }, 3200);
    return () => clearInterval(interval);
  }, [currentStep]);

  // Point 2 Automation: Price calculation phases
  const [calcPhase, setCalcPhase] = useState<number>(0);
  useEffect(() => {
    if (currentStep !== 1) return;
    const interval = setInterval(() => {
      setCalcPhase(prev => (prev + 1) % 3);
    }, 2200);
    return () => clearInterval(interval);
  }, [currentStep]);

  return (
    <div className="w-full flex flex-col gap-3.5 font-mono select-none">
      {/* 3-Point Top Hotbar Selector */}
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
            <span className="text-[10px] font-bold hidden sm:inline text-zinc-500">Identity & Workspaces</span>
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
            <span className="text-[10px] font-bold hidden sm:inline text-zinc-500">Rules & Calculations</span>
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
            <span className="text-[10px] font-bold hidden sm:inline text-zinc-500">Threat Filter</span>
          </button>
        </div>
      </div>

      {/* Main 2-Section Body Split */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* LEFT SECTION: Explanation & Blueprint */}
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
              {/* POINT 1: AUTHENTICATION (LEGITIMACY + WORKSPACE ISOLATION) */}
              {currentStep === 0 && (
                <>
                  <div className="flex items-center gap-2.5">
                    <span className="text-xs sm:text-sm font-black text-[#FFAA00] px-2.5 py-0.5 bg-[#FFAA00]/15 border border-[#FFAA00]/40">
                      #01
                    </span>
                    <h3 className="text-lg sm:text-xl font-black text-white font-sans uppercase">
                      Authentication: Identity & Workspaces
                    </h3>
                  </div>

                  <p className="text-sm sm:text-base text-zinc-100 font-semibold leading-relaxed">
                    Authentication in web backends solves <strong>two essential jobs</strong>:
                  </p>

                  <div className="space-y-2.5 text-xs">
                    {/* Job 1 */}
                    <div className="p-3 bg-[#090a10] border-l-4 border-[#FFAA00] border-y border-r border-[#2e334a]">
                      <strong className="text-xs font-black text-[#FFAA00] uppercase block mb-0.5">
                        1. Are They Legitimate?
                      </strong>
                      <p className="text-zinc-200 font-medium leading-relaxed">
                        Verifies login credentials (password, OTP, Google OAuth) to confirm the user is real and block fake bots.
                      </p>
                    </div>

                    {/* Job 2 */}
                    <div className="p-3 bg-[#090a10] border-l-4 border-[#55FFFF] border-y border-r border-[#2e334a]">
                      <strong className="text-xs font-black text-[#55FFFF] uppercase block mb-0.5">
                        2. Unique Identity & Workspaces
                      </strong>
                      <p className="text-zinc-200 font-medium leading-relaxed">
                        Assigns unique IDs (`user_101`) to strictly partition databases. User A only sees User A's private notes based on their access level.
                      </p>
                    </div>
                  </div>

                  <div className="p-2.5 bg-[#181b2c] border-l-4 border-[#55FF55] text-xs text-zinc-200 font-medium">
                    💡 <strong>Takeaway:</strong> Confirms who you are, then keeps your private files isolated.
                  </div>
                </>
              )}

              {/* POINT 2: BUSINESS LOGIC */}
              {currentStep === 1 && (
                <>
                  <div className="flex items-center gap-2.5">
                    <span className="text-xs sm:text-sm font-black text-[#55FFFF] px-2.5 py-0.5 bg-[#55FFFF]/15 border border-[#55FFFF]/40">
                      #02
                    </span>
                    <h3 className="text-lg sm:text-xl font-black text-white font-sans uppercase">
                      Business Logic & Rules Engine
                    </h3>
                  </div>

                  <p className="text-sm sm:text-base text-zinc-100 font-semibold leading-relaxed">
                    The backend is the <strong>Single Source of Truth</strong>. It calculates prices, checks stock inventory, and processes business rules that the client browser cannot tamper with.
                  </p>

                  <div className="p-3 bg-[#090a10] border border-[#2e334a] text-xs">
                    <span className="text-xs text-zinc-400 font-bold uppercase block mb-1">
                      WHY NOT ON FRONTEND?
                    </span>
                    <p className="text-zinc-200 font-medium leading-relaxed">
                      If price calculations ran on the frontend, anyone could open browser DevTools and change prices to $0.01 before paying.
                    </p>
                  </div>

                  <div className="p-2.5 bg-[#181b2c] border-l-4 border-[#55FFFF] text-xs text-zinc-200 font-medium">
                    💡 <strong>Takeaway:</strong> The server computes the true final price before charging credit cards.
                  </div>
                </>
              )}

              {/* POINT 3: SECURITY GUARD */}
              {currentStep === 2 && (
                <>
                  <div className="flex items-center gap-2.5">
                    <span className="text-xs sm:text-sm font-black text-[#55FF55] px-2.5 py-0.5 bg-[#55FF55]/15 border border-[#55FF55]/40">
                      #03
                    </span>
                    <h3 className="text-lg sm:text-xl font-black text-white font-sans uppercase">
                      Security Guard & Exploit Filter
                    </h3>
                  </div>

                  <p className="text-sm sm:text-base text-zinc-100 font-semibold leading-relaxed">
                    The golden rule of backend development: <strong>"Never Trust Client Input."</strong> The server sanitizes text inputs and blocks malicious scripts (XSS and SQL injections).
                  </p>

                  <div className="p-3 bg-[#090a10] border border-[#2e334a] text-xs">
                    <span className="text-xs text-zinc-400 font-bold uppercase block mb-1">
                      AUTOMATED SANITIZATION:
                    </span>
                    <p className="text-zinc-200 font-medium leading-relaxed">
                      Malicious tags like <code>{'<script>'}</code> are stripped or converted to harmless text before reaching the database.
                    </p>
                  </div>

                  <div className="p-2.5 bg-[#181b2c] border-l-4 border-[#55FF55] text-xs text-zinc-200 font-medium">
                    💡 <strong>Takeaway:</strong> Protects your website database and visitors from hacker exploits.
                  </div>
                </>
              )}
            </motion.div>
          </AnimatePresence>

          <div className="pt-3.5 border-t border-[#2e334a] text-xs sm:text-sm text-zinc-400 flex items-center justify-between font-bold">
            <span>Press Next or Hotbar to advance</span>
            <span className="text-[#55FFFF]">Module 03: Backend</span>
          </div>
        </div>

        {/* RIGHT SECTION: Self-Running Live Visual Automation */}
        <div className="bg-[#090a10] border-2 border-[#55FFFF] p-6 shadow-pixel flex flex-col justify-between">
          {/* Header */}
          <div className="flex items-center justify-between pb-3 border-b border-[#2e334a] text-xs sm:text-sm font-bold">
            <div className="flex items-center gap-2 text-zinc-300">
              <Server className="w-5 h-5 text-[#55FFFF]" />
              <span>LIVE SERVER VISUAL AUTOMATION</span>
            </div>
            <span className="text-xs text-[#55FF55] font-mono flex items-center gap-1 font-bold">
              <span className="w-2 h-2 rounded-full bg-[#55FF55] animate-ping" /> AUTO-RUNNING
            </span>
          </div>

          {/* Dynamic Animation Viewport */}
          <div className="py-6 flex flex-col items-center justify-center min-h-[220px]">
            {/* AUTOMATION 1: Authentication (Legitimacy Check + Workspace Router) */}
            {currentStep === 0 && (
              <div className="w-full space-y-3">
                <AnimatePresence mode="wait">
                  {authStage === 'scan' ? (
                    <motion.div
                      key="auth-scan"
                      initial={{ opacity: 0, scale: 0.96 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.96 }}
                      className="p-4 bg-[#121420] border-2 shadow-pixel text-center space-y-2.5"
                      style={{
                        borderColor: authCycle === 'legit' ? '#55FF55' : '#FF5555'
                      }}
                    >
                      <div className="flex items-center justify-between text-xs font-bold border-b border-[#2e334a] pb-1.5">
                        <span className="text-zinc-400">1. LEGITIMACY SCANNER:</span>
                        <span className={authCycle === 'legit' ? 'text-[#55FF55]' : 'text-[#FF5555]'}>
                          {authCycle === 'legit' ? 'Alex (Registered Student)' : 'Unknown IP (Brute Bot)'}
                        </span>
                      </div>

                      <div className="p-2.5 bg-[#090a10] border border-[#2e334a] flex items-center justify-center gap-2.5">
                        <Key className={`w-5 h-5 ${authCycle === 'legit' ? 'text-[#55FF55]' : 'text-[#FF5555]'}`} />
                        <code className="text-xs font-bold text-white font-mono">
                          {authCycle === 'legit' ? 'alex@school.edu : **********' : 'admin@school.edu : 123456'}
                        </code>
                      </div>

                      <div className={`p-2 text-xs font-black uppercase flex items-center justify-center gap-1.5 ${
                        authCycle === 'legit' ? 'bg-[#55FF55]/15 text-[#55FF55] border border-[#55FF55]' : 'bg-[#FF5555]/15 text-[#FF5555] border border-[#FF5555]'
                      }`}>
                        {authCycle === 'legit' ? (
                          <>
                            <CheckCircle2 className="w-4 h-4" />
                            <span>200 OK — Real User Verified!</span>
                          </>
                        ) : (
                          <>
                            <XCircle className="w-4 h-4" />
                            <span>401 Unauthorized — Imposter Blocked!</span>
                          </>
                        )}
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="auth-workspace"
                      initial={{ opacity: 0, scale: 0.96 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.96 }}
                      className="space-y-2.5"
                    >
                      <div className="p-2.5 bg-[#121420] border-2 border-[#55FFFF] text-xs flex items-center justify-between shadow-pixel">
                        <div className="flex items-center gap-2">
                          <Users className="w-4 h-4 text-[#55FFFF]" />
                          <span className="text-white font-bold">
                            2. Active User: <strong>{activeUser === 'alex' ? 'Alex (usr_101)' : 'Sam (usr_102)'}</strong>
                          </span>
                        </div>
                        <span className="text-[#55FF55] font-black text-[10px] px-1.5 py-0.5 bg-[#090a10] border border-[#55FF55]/40">
                          WORKSPACE ROUTED
                        </span>
                      </div>

                      <div className="grid grid-cols-2 gap-2 text-xs">
                        <div className={`p-2.5 border-2 transition-all ${
                          activeUser === 'alex'
                            ? 'bg-[#181b2c] border-[#55FFFF] shadow-glow-diamond'
                            : 'bg-[#090a10] border-[#2e334a] opacity-35'
                        }`}>
                          <div className="flex items-center justify-between mb-1">
                            <FolderLock className="w-4 h-4 text-[#55FFFF]" />
                            <span className="text-[10px] font-bold text-[#55FFFF]">ALEX VAULT</span>
                          </div>
                          <p className="text-xs text-white font-bold">• Calculus Notes</p>
                          <p className="text-xs text-white font-bold">• Physics Lab #3</p>
                        </div>

                        <div className={`p-2.5 border-2 transition-all ${
                          activeUser === 'sam'
                            ? 'bg-[#181b2c] border-[#FFAA00] shadow-glow-diamond'
                            : 'bg-[#090a10] border-[#2e334a] opacity-35'
                        }`}>
                          <div className="flex items-center justify-between mb-1">
                            <FolderLock className="w-4 h-4 text-[#FFAA00]" />
                            <span className="text-[10px] font-bold text-[#FFAA00]">SAM VAULT</span>
                          </div>
                          <p className="text-xs text-white font-bold">• History Essay</p>
                          <p className="text-xs text-white font-bold">• Biology Notes</p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <p className="text-center text-[11px] text-zinc-400">
                  ⚡ Auto-cycling: 1. Legitimacy check ➔ 2. Isolated workspace routing.
                </p>
              </div>
            )}

            {/* AUTOMATION 2: Business Logic Price Calculation Flow */}
            {currentStep === 1 && (
              <div className="w-full space-y-3">
                <div className="p-4 bg-[#121420] border-2 border-[#55FFFF] shadow-pixel text-xs space-y-2 font-mono">
                  <div className="flex justify-between border-b border-[#2e334a] pb-1.5">
                    <span className="text-zinc-400">2x Masterclass Passes:</span>
                    <strong className="text-white">$80.00</strong>
                  </div>
                  <div className="flex justify-between border-b border-[#2e334a] pb-1.5 text-[#55FF55]">
                    <span>Coupon [STUDENT20]:</span>
                    <strong>-$16.00</strong>
                  </div>
                  <div className="flex justify-between border-b border-[#2e334a] pb-1.5 text-zinc-400">
                    <span>Regional State Tax (5%):</span>
                    <strong>+$3.20</strong>
                  </div>
                  <div className="pt-1 flex justify-between items-center text-sm font-black text-[#55FF55]">
                    <span>CERTIFIED TOTAL:</span>
                    <span className="text-lg px-2.5 py-0.5 bg-[#090a10] border border-[#55FF55]">
                      $67.20 USD
                    </span>
                  </div>
                </div>

                <p className="text-center text-[11px] text-zinc-400">
                  ⚙️ Server rules calculate true charge amount securely before dispatching to Stripe.
                </p>
              </div>
            )}

            {/* AUTOMATION 3: Security Guard Threat Filter */}
            {currentStep === 2 && (
              <div className="w-full space-y-3">
                <div className="p-4 bg-[#121420] border-2 border-[#55FF55] shadow-pixel text-xs space-y-3">
                  <div>
                    <span className="text-[10px] text-[#FF5555] font-black uppercase block mb-1">
                      1. INCOMING DIRTY PAYLOAD:
                    </span>
                    <code className="p-2 bg-[#090a10] border border-[#FF5555]/60 text-[#FF5555] text-xs block font-mono">
                      {'<script>stealAllCookies()</script>'}
                    </code>
                  </div>

                  <div className="text-center text-[#55FFFF] text-xs font-bold">
                    ⬇ Server-Side DOMPurify & Regex Sanitizer ⬇
                  </div>

                  <div>
                    <span className="text-[10px] text-[#55FF55] font-black uppercase block mb-1">
                      2. CLEAN DATABASE STORAGE:
                    </span>
                    <code className="p-2 bg-[#090a10] border border-[#55FF55] text-[#55FF55] text-xs block font-mono">
                      {'&lt;script&gt;stealAllCookies()&lt;/script&gt;'}
                    </code>
                  </div>
                </div>

                <p className="text-center text-[11px] text-[#55FF55] font-bold">
                  ✓ Neutralized into harmless text. Scripts cannot execute in other users' browsers.
                </p>
              </div>
            )}
          </div>

          {/* Metrics Footer */}
          <div className="p-3 bg-[#121420] border border-[#2e334a] flex items-center justify-between text-xs font-bold text-zinc-300">
            <span>Server Process: Node.js / Express</span>
            <span className="text-[#55FFFF]">Status: Listening on Port 3000</span>
          </div>
        </div>
      </div>
    </div>
  );
};
