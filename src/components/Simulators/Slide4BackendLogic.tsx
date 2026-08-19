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
  Terminal,
  CornerDownLeft,
  Database,
  Flame,
  Sparkles
} from 'lucide-react';
import { sound } from '../../utils/sound';

interface Slide4Props {
  subStep?: number;
  onSubStepChange?: (subStep: number) => void;
}

// Crazy Motion Graphics Component for Input Sanitization
const SanitizationMotionGraphics: React.FC = () => {
  // Stages: 0 = type bad, 1 = enter bad, 2 = block bad, 3 = type good, 4 = enter good, 5 = pass good
  const [animStage, setAnimStage] = useState<number>(0);
  const [displayedText, setDisplayedText] = useState<string>('');

  const badPayload = '<script>stealAllData()</script>';
  const goodPayload = 'Calculus Chapter 4 Notes';

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (animStage === 0) {
      // Type bad payload fast
      let idx = 0;
      setDisplayedText('');
      const typeInterval = setInterval(() => {
        if (idx <= badPayload.length) {
          setDisplayedText(badPayload.slice(0, idx));
          idx++;
        } else {
          clearInterval(typeInterval);
          timer = setTimeout(() => setAnimStage(1), 300);
        }
      }, 35);
      return () => {
        clearInterval(typeInterval);
        clearTimeout(timer);
      };
    } else if (animStage === 1) {
      // Enter bad
      timer = setTimeout(() => {
        sound.error?.();
        setAnimStage(2);
      }, 350);
      return () => clearTimeout(timer);
    } else if (animStage === 2) {
      // Show blocked and sanitized state for 2.2s
      timer = setTimeout(() => setAnimStage(3), 2200);
      return () => clearTimeout(timer);
    } else if (animStage === 3) {
      // Type good payload fast
      let idx = 0;
      setDisplayedText('');
      const typeInterval = setInterval(() => {
        if (idx <= goodPayload.length) {
          setDisplayedText(goodPayload.slice(0, idx));
          idx++;
        } else {
          clearInterval(typeInterval);
          timer = setTimeout(() => setAnimStage(4), 300);
        }
      }, 35);
      return () => {
        clearInterval(typeInterval);
        clearTimeout(timer);
      };
    } else if (animStage === 4) {
      // Enter good
      timer = setTimeout(() => {
        sound.success?.();
        setAnimStage(5);
      }, 350);
      return () => clearTimeout(timer);
    } else if (animStage === 5) {
      // Show passed state for 2.2s then restart
      timer = setTimeout(() => setAnimStage(0), 2200);
      return () => clearTimeout(timer);
    }
  }, [animStage]);

  return (
    <div className="w-full max-w-md mx-auto space-y-3 font-mono">
      {/* Dynamic Motion Input Bar */}
      <motion.div
        animate={
          animStage === 2
            ? {
                x: [0, -12, 12, -9, 9, -5, 5, -2, 2, 0],
                rotate: [0, -1.5, 1.5, -1, 1, 0],
                borderColor: ['#FF2255', '#FF5555', '#FF2255'],
                boxShadow: [
                  '0 0 0px rgba(255,34,85,0)',
                  '0 0 25px rgba(255,34,85,0.7)',
                  '0 0 10px rgba(255,34,85,0.4)'
                ]
              }
            : animStage === 5
            ? {
                scale: [1, 1.02, 1],
                borderColor: ['#55FF55', '#00FF66', '#55FF55'],
                boxShadow: [
                  '0 0 0px rgba(85,255,85,0)',
                  '0 0 25px rgba(85,255,85,0.7)',
                  '0 0 10px rgba(85,255,85,0.4)'
                ]
              }
            : {
                x: 0,
                rotate: 0,
                borderColor: '#383e58',
                boxShadow: '0 0 0px rgba(0,0,0,0)'
              }
        }
        transition={{ duration: 0.45 }}
        className={`p-3.5 bg-[#090a10] border-2 rounded-none transition-all flex items-center justify-between gap-2 shadow-pixel ${
          animStage === 2
            ? 'bg-[#200a12]'
            : animStage === 5
            ? 'bg-[#0a1f14]'
            : ''
        }`}
      >
        <div className="flex items-center gap-2 flex-1 min-w-0">
          <Terminal
            className={`w-4 h-4 shrink-0 ${
              animStage === 2
                ? 'text-[#FF2255]'
                : animStage === 5
                ? 'text-[#55FF55]'
                : 'text-[#55FFFF]'
            }`}
          />
          <div className="flex items-center text-xs font-bold truncate">
            <span
              className={
                animStage === 2
                  ? 'text-[#FF5555] line-through'
                  : animStage === 5
                  ? 'text-[#55FF55]'
                  : 'text-white'
              }
            >
              {displayedText}
            </span>
            <span className="w-1.5 h-3.5 bg-[#55FFFF] animate-pulse ml-0.5" />
          </div>
        </div>

        {/* Enter key badge */}
        <motion.div
          animate={
            animStage === 1 || animStage === 4
              ? { scale: [1, 0.85, 1.1, 1], backgroundColor: '#55FFFF', color: '#000' }
              : {}
          }
          className="px-2 py-0.5 text-[10px] font-black border border-[#2e334a] bg-[#121420] text-zinc-400 flex items-center gap-1 shrink-0"
        >
          <span>ENTER</span>
          <CornerDownLeft className="w-3 h-3" />
        </motion.div>
      </motion.div>

      {/* Dynamic Status / Laser Inspection Viewport */}
      <AnimatePresence mode="wait">
        {/* MALICIOUS BLOCKED BANNER */}
        {animStage === 2 && (
          <motion.div
            key="blocked-status"
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            className="p-3.5 bg-[#1f0910] border-2 border-[#FF2255] shadow-pixel text-center space-y-2"
          >
            <div className="flex items-center justify-center gap-2 text-[#FF2255] font-black text-xs">
              <ShieldAlert className="w-5 h-5 animate-bounce" />
              <span>🚨 400 BLOCKED: MALICIOUS XSS SCRIPT</span>
            </div>

            <div className="p-2 bg-[#090a10] border border-[#FF2255]/50 text-[11px] text-left">
              <span className="text-zinc-400 block text-[9px] font-bold">LASER SANITIZED TO PLAIN TEXT:</span>
              <code className="text-[#FF8888] font-mono block truncate">
                &amp;lt;script&amp;gt;stealAllData()&amp;lt;/script&amp;gt;
              </code>
            </div>

            <p className="text-[10px] text-[#FF5555] font-bold">
              ✕ Execution prevented. Threat neutralized before touching database.
            </p>
          </motion.div>
        )}

        {/* CLEAN ACCEPTED BANNER */}
        {animStage === 5 && (
          <motion.div
            key="passed-status"
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            className="p-3.5 bg-[#091f14] border-2 border-[#55FF55] shadow-pixel text-center space-y-2"
          >
            <div className="flex items-center justify-center gap-2 text-[#55FF55] font-black text-xs">
              <CheckCircle2 className="w-5 h-5" />
              <span>✓ 201 CREATED: CLEAN STRING VALIDATED</span>
            </div>

            <div className="p-2 bg-[#090a10] border border-[#55FF55]/50 text-[11px] text-left flex items-center justify-between">
              <div>
                <span className="text-zinc-400 block text-[9px] font-bold">WRITTEN TO POSTGRESQL:</span>
                <code className="text-[#55FF55] font-mono">"Calculus Chapter 4 Notes"</code>
              </div>
              <Database className="w-5 h-5 text-[#55FF55] shrink-0 ml-2" />
            </div>

            <p className="text-[10px] text-[#55FF55] font-bold">
              ✓ Verified safe payload saved cleanly into student database record.
            </p>
          </motion.div>
        )}

        {/* TYPING / INSPECTING STATE */}
        {(animStage === 0 || animStage === 1 || animStage === 3 || animStage === 4) && (
          <motion.div
            key="inspecting-status"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="p-3 bg-[#121420] border border-[#2e334a] text-center text-xs text-zinc-400 space-y-1"
          >
            <div className="flex items-center justify-center gap-1.5 text-zinc-300 font-bold">
              <Sparkles className="w-4 h-4 text-[#55FFFF] animate-spin" />
              <span>Server-Side DOMPurify & Parameter Filter Active</span>
            </div>
            <p className="text-[10px] text-zinc-500 font-mono">
              Listening for incoming client payloads...
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const Slide4BackendLogic: React.FC<Slide4Props> = ({
  subStep = 0,
  onSubStepChange,
}) => {
  const currentStep = Math.min(3, Math.max(0, subStep));

  // Determine active main point (0: Auth, 1: Business Logic, 2: Security)
  const isAuth = currentStep === 0 || currentStep === 1;
  const isLogic = currentStep === 2;
  const isSecurity = currentStep === 3;

  // Automation state for Step 0 (Are They Legit Scanner)
  const [authCycle, setAuthCycle] = useState<'legit' | 'imposter'>('legit');
  useEffect(() => {
    if (currentStep !== 0) return;
    const interval = setInterval(() => {
      setAuthCycle(prev => (prev === 'legit' ? 'imposter' : 'legit'));
    }, 3000);
    return () => clearInterval(interval);
  }, [currentStep]);

  // Automation state for Step 1 (Workspace Router)
  const [activeUser, setActiveUser] = useState<'alex' | 'sam'>('alex');
  useEffect(() => {
    if (currentStep !== 1) return;
    const interval = setInterval(() => {
      setActiveUser(prev => (prev === 'alex' ? 'sam' : 'alex'));
    }, 2800);
    return () => clearInterval(interval);
  }, [currentStep]);

  return (
    <div className="w-full flex flex-col gap-3.5 font-mono select-none">
      {/* 3 Main Points Top Hotbar */}
      <div className="bg-[#121420] border-2 border-[#2e334a] p-1.5 shadow-pixel">
        <div className="grid grid-cols-3 gap-2">
          {/* Point 1: Authentication (encompasses subStep 0 and 1) */}
          <button
            onClick={() => {
              sound.click();
              onSubStepChange?.(isAuth ? (currentStep === 0 ? 1 : 0) : 0);
            }}
            className={`py-2.5 px-3 flex items-center justify-between cursor-pointer border-2 transition-all ${
              isAuth
                ? 'bg-[#1e2640] border-[#FFAA00] text-[#FFAA00] shadow-pixel scale-[1.02]'
                : 'bg-[#090a10] border-[#22273a] text-zinc-400 hover:text-white'
            }`}
          >
            <div className="flex items-center gap-2">
              <Key className="w-5 h-5 text-[#FFAA00]" />
              <span className="text-xs sm:text-sm font-black">01. AUTHENTICATION</span>
            </div>
            <span className="text-[10px] font-bold hidden sm:inline text-zinc-500">
              {currentStep === 0 ? 'Part 1: Legitimacy' : currentStep === 1 ? 'Part 2: Workspaces' : 'Identity'}
            </span>
          </button>

          {/* Point 2: Business Logic (subStep 2) */}
          <button
            onClick={() => { sound.click(); onSubStepChange?.(2); }}
            className={`py-2.5 px-3 flex items-center justify-between cursor-pointer border-2 transition-all ${
              isLogic
                ? 'bg-[#1e2640] border-[#55FFFF] text-[#55FFFF] shadow-pixel scale-[1.02]'
                : 'bg-[#090a10] border-[#22273a] text-zinc-400 hover:text-white'
            }`}
          >
            <div className="flex items-center gap-2">
              <Calculator className="w-5 h-5 text-[#55FFFF]" />
              <span className="text-xs sm:text-sm font-black">02. BUSINESS LOGIC</span>
            </div>
            <span className="text-[10px] font-bold hidden sm:inline text-zinc-500">Rules & Math</span>
          </button>

          {/* Point 3: Security Guard (subStep 3) */}
          <button
            onClick={() => { sound.click(); onSubStepChange?.(3); }}
            className={`py-2.5 px-3 flex items-center justify-between cursor-pointer border-2 transition-all ${
              isSecurity
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

      {/* When in Authentication (Point 1), show sub-point toggle pills */}
      {isAuth && (
        <div className="flex items-center justify-between bg-[#090a10] border border-[#2e334a] px-3 py-1.5 text-xs">
          <span className="text-zinc-400 font-bold text-[11px] uppercase">
            AUTHENTICATION SUB-STEPS:
          </span>
          <div className="flex items-center gap-2">
            <button
              onClick={() => { sound.click(); onSubStepChange?.(0); }}
              className={`px-3 py-0.5 border cursor-pointer font-bold text-xs transition-all ${
                currentStep === 0
                  ? 'bg-[#FFAA00]/20 text-[#FFAA00] border-[#FFAA00]'
                  : 'text-zinc-400 border-transparent hover:text-white'
              }`}
            >
              1.1 Are They Legit?
            </button>
            <span className="text-zinc-600">|</span>
            <button
              onClick={() => { sound.click(); onSubStepChange?.(1); }}
              className={`px-3 py-0.5 border cursor-pointer font-bold text-xs transition-all ${
                currentStep === 1
                  ? 'bg-[#55FFFF]/20 text-[#55FFFF] border-[#55FFFF]'
                  : 'text-zinc-400 border-transparent hover:text-white'
              }`}
            >
              1.2 What Can They Access?
            </button>
          </div>
        </div>
      )}

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
              {/* POINT 1.1: ARE THEY LEGITIMATE? */}
              {currentStep === 0 && (
                <>
                  <div className="flex items-center gap-2.5">
                    <span className="text-xs sm:text-sm font-black text-[#FFAA00] px-2.5 py-0.5 bg-[#FFAA00]/15 border border-[#FFAA00]/40">
                      #1.1
                    </span>
                    <h3 className="text-lg sm:text-xl font-black text-white font-sans uppercase">
                      Authentication: Are They Legitimate?
                    </h3>
                  </div>

                  <p className="text-sm sm:text-base text-zinc-100 font-semibold leading-relaxed">
                    The backend verifies identity before granting access. It checks provided login credentials (password, OTP, Google OAuth) against stored records.
                  </p>

                  <div className="space-y-2 text-xs font-mono">
                    <div className="p-3 bg-[#090a10] border border-[#2e334a]">
                      <span className="text-xs text-zinc-400 font-bold uppercase block mb-1">
                        THE LEGITIMACY PROTOCOL:
                      </span>
                      <p className="text-xs text-zinc-200">
                        • <strong>Valid Login:</strong> Real student verified ➔ Issues signed session token (200 OK).<br />
                        • <strong>Imposter / Bot:</strong> Invalid credentials ➔ Gate closes immediately (401 Unauthorized).
                      </p>
                    </div>
                  </div>

                  <div className="p-3 bg-[#181b2c] border-l-4 border-[#FFAA00] text-xs sm:text-sm text-zinc-200 font-medium">
                    💡 <strong>Takeaway:</strong> Keeps strangers and fake bots out of private accounts.
                  </div>
                </>
              )}

              {/* POINT 1.2: WHAT CAN THEY ACCESS / WORKSPACE ISOLATION */}
              {currentStep === 1 && (
                <>
                  <div className="flex items-center gap-2.5">
                    <span className="text-xs sm:text-sm font-black text-[#55FFFF] px-2.5 py-0.5 bg-[#55FFFF]/15 border border-[#55FFFF]/40">
                      #1.2
                    </span>
                    <h3 className="text-lg sm:text-xl font-black text-white font-sans uppercase">
                      Authentication: What Can They Access?
                    </h3>
                  </div>

                  <p className="text-sm sm:text-base text-zinc-100 font-semibold leading-relaxed">
                    The backend uniquely identifies each logged-in user with a unique ID (`user_101`) to strictly partition workspaces and data.
                  </p>

                  <div className="space-y-2 text-xs">
                    <div className="p-3 bg-[#090a10] border border-[#2e334a]">
                      <span className="text-xs text-zinc-400 font-bold uppercase block mb-1">
                        ACCESS LEVEL PARTITIONING:
                      </span>
                      <p className="text-xs text-zinc-200">
                        • <strong>Student Workspace:</strong> Can view & edit only their own private notes.<br />
                        • <strong>Teacher / Admin:</strong> Elevated access to view course analytics and submissions.
                      </p>
                    </div>
                  </div>

                  <div className="p-3 bg-[#181b2c] border-l-4 border-[#55FFFF] text-xs sm:text-sm text-zinc-200 font-medium">
                    💡 <strong>Takeaway:</strong> User A can never see User B's files. The backend keeps workspaces separated.
                  </div>
                </>
              )}

              {/* POINT 2: BUSINESS LOGIC */}
              {currentStep === 2 && (
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

                  <div className="p-3 bg-[#181b2c] border-l-4 border-[#55FFFF] text-xs text-zinc-200 font-medium">
                    💡 <strong>Takeaway:</strong> The server computes the true final price before charging cards.
                  </div>
                </>
              )}

              {/* POINT 3: SECURITY GUARD */}
              {currentStep === 3 && (
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

                  <div className="p-3 bg-[#181b2c] border-l-4 border-[#55FF55] text-xs text-zinc-200 font-medium">
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

        {/* RIGHT SECTION: Visual Server Engine Preview */}
        <div className="bg-[#090a10] border-2 border-[#55FFFF] p-6 shadow-pixel flex flex-col">
          {/* Header */}
          <div className="flex items-center gap-2 pb-3 border-b border-[#2e334a] text-xs sm:text-sm font-bold text-zinc-300">
            <Server className="w-5 h-5 text-[#55FFFF]" />
            <span>SERVER ENGINE PREVIEW</span>
          </div>

          {/* Dynamic Animation Viewport - Centered Vertically & Horizontally */}
          <div className="flex-1 flex flex-col items-center justify-center py-6 w-full my-auto">
            {/* AUTOMATION 1.1: Legitimacy Verification Scanner */}
            {currentStep === 0 && (
              <div className="w-full max-w-md mx-auto space-y-3">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={authCycle}
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    className="p-4 bg-[#121420] border-2 shadow-pixel text-center space-y-2.5"
                    style={{
                      borderColor: authCycle === 'legit' ? '#55FF55' : '#FF5555'
                    }}
                  >
                    <div className="flex items-center justify-between text-xs font-bold border-b border-[#2e334a] pb-1.5">
                      <span className="text-zinc-400">1.1 LEGITIMACY SCANNER:</span>
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
                </AnimatePresence>

                <p className="text-center text-[11px] text-zinc-400">
                  ⚡ Backend continuously checks visitor authenticity against stored records.
                </p>
              </div>
            )}

            {/* AUTOMATION 1.2: Workspace Partitioning & Data Isolation */}
            {currentStep === 1 && (
              <div className="w-full max-w-md mx-auto space-y-3">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeUser}
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    className="space-y-2.5"
                  >
                    <div className="p-2.5 bg-[#121420] border-2 border-[#55FFFF] text-xs flex items-center justify-between shadow-pixel">
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-[#55FFFF]" />
                        <span className="text-white font-bold">
                          1.2 Active User: <strong>{activeUser === 'alex' ? 'Alex (usr_101)' : 'Sam (usr_102)'}</strong>
                        </span>
                      </div>
                      <span className="text-[#55FF55] font-black text-[10px] px-1.5 py-0.5 bg-[#090a10] border border-[#55FF55]/40">
                        WORKSPACE ISOLATED
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
                </AnimatePresence>

                <p className="text-center text-[11px] text-zinc-400">
                  🔒 Zero data leaks: Queries filter by <code>WHERE user_id = current_user</code>.
                </p>
              </div>
            )}

            {/* AUTOMATION 2: Business Logic Price Calculation Flow */}
            {currentStep === 2 && (
              <div className="w-full max-w-md mx-auto space-y-3">
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

            {/* AUTOMATION 3: Security Guard Threat Filter (CRAZY MOTION GRAPHICS) */}
            {currentStep === 3 && (
              <SanitizationMotionGraphics />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
