import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Key,
  ShieldCheck,
  ShieldAlert,
  Lock,
  Unlock,
  User,
  GraduationCap,
  Briefcase,
  Check,
  X,
  Lightbulb,
  Server,
  Fingerprint,
  FileText,
  Trash2,
  Edit3,
  Sparkles,
  Shield
} from 'lucide-react';
import { sound } from '../../utils/sound';

interface Slide7Props {
  subStep?: number;
  onSubStepChange?: (subStep: number) => void;
}

export const Slide7AuthMatrix: React.FC<Slide7Props> = ({
  subStep = 0,
  onSubStepChange,
}) => {
  const currentStep = Math.min(2, Math.max(0, subStep));

  // --- AUTOMATION 1: Keycard Gate Scanner ---
  const [gatePhase, setGatePhase] = useState<number>(0);
  useEffect(() => {
    if (currentStep !== 0) return;
    const interval = setInterval(() => {
      setGatePhase(prev => (prev + 1) % 3);
      sound.packetPing?.();
    }, 2000);
    return () => clearInterval(interval);
  }, [currentStep]);

  // --- AUTOMATION 2: JWT Token Minting & Verification ---
  const [jwtPhase, setJwtPhase] = useState<number>(0);
  useEffect(() => {
    if (currentStep !== 1) return;
    const interval = setInterval(() => {
      setJwtPhase(prev => (prev + 1) % 3);
      sound.click?.();
    }, 2400);
    return () => clearInterval(interval);
  }, [currentStep]);

  // --- AUTOMATION 3: Live Role Matrix Switcher ---
  const [activeRoleIndex, setActiveRoleIndex] = useState<number>(0);
  const roles = [
    { name: 'Student', icon: GraduationCap, canRead: true, canGrade: false, canDeleteAll: false, color: '#55FFFF' },
    { name: 'Teacher', icon: Briefcase, canRead: true, canGrade: true, canDeleteAll: false, color: '#FFAA00' },
    { name: 'Admin', icon: ShieldAlert, canRead: true, canGrade: true, canDeleteAll: true, color: '#55FF55' }
  ];

  useEffect(() => {
    if (currentStep !== 2) return;
    const interval = setInterval(() => {
      setActiveRoleIndex(prev => (prev + 1) % roles.length);
      sound.packetPing?.();
    }, 2600);
    return () => clearInterval(interval);
  }, [currentStep, roles.length]);

  const activeRole = roles[activeRoleIndex];
  const ActiveRoleIcon = activeRole.icon;

  return (
    <div className="w-full flex flex-col gap-3.5 font-mono select-none">
      {/* 3 Main Points Top Hotbar */}
      <div className="bg-[#121420] border-2 border-[#2e334a] p-1.5 shadow-pixel">
        <div className="grid grid-cols-3 gap-2">
          {/* Point 1: AuthN vs AuthZ */}
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
              <span className="text-xs sm:text-sm font-black">01. AUTHN VS AUTHZ</span>
            </div>
            <span className="text-[10px] font-bold hidden sm:inline text-zinc-500">Identity vs Access</span>
          </button>

          {/* Point 2: JWT Tokens */}
          <button
            onClick={() => { sound.click(); onSubStepChange?.(1); }}
            className={`py-2.5 px-3 flex items-center justify-between cursor-pointer border-2 transition-all ${
              currentStep === 1
                ? 'bg-[#1e2640] border-[#55FFFF] text-[#55FFFF] shadow-pixel scale-[1.02]'
                : 'bg-[#090a10] border-[#22273a] text-zinc-400 hover:text-white'
            }`}
          >
            <div className="flex items-center gap-2">
              <Fingerprint className="w-5 h-5 text-[#55FFFF]" />
              <span className="text-xs sm:text-sm font-black">02. JWT TOKENS</span>
            </div>
            <span className="text-[10px] font-bold hidden sm:inline text-zinc-500">Digital Wristband</span>
          </button>

          {/* Point 3: Role Matrix */}
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
              <span className="text-xs sm:text-sm font-black">03. ROLE MATRIX</span>
            </div>
            <span className="text-[10px] font-bold hidden sm:inline text-zinc-500">Permission Check</span>
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
              {/* POINT 1: AUTHN VS AUTHZ */}
              {currentStep === 0 && (
                <>
                  <div className="flex items-center gap-2.5">
                    <span className="text-xs sm:text-sm font-black text-[#FFAA00] px-2.5 py-0.5 bg-[#FFAA00]/15 border border-[#FFAA00]/40">
                      #01
                    </span>
                    <h3 className="text-lg sm:text-xl font-black text-white font-sans uppercase">
                      Authentication vs Authorization
                    </h3>
                  </div>

                  <p className="text-sm sm:text-base text-zinc-100 font-semibold leading-relaxed">
                    Security in web development is split into two essential questions:
                  </p>

                  <div className="p-3.5 bg-[#090a10] border border-[#2e334a] text-xs space-y-2">
                    <div className="flex items-start gap-2">
                      <strong className="text-[#FFAA00] shrink-0">1. Authentication (AuthN):</strong>
                      <span className="text-zinc-200">"Who are you?" Proving your identity with a login password.</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <strong className="text-[#55FFFF] shrink-0">2. Authorization (AuthZ):</strong>
                      <span className="text-zinc-200">"What can you enter?" Checking which doors your keycard unlocks.</span>
                    </div>
                  </div>

                  <div className="p-3 bg-[#181b2c] border-l-4 border-[#FFAA00] text-xs sm:text-sm text-zinc-200 font-medium flex items-center gap-2">
                    <Lightbulb className="w-4 h-4 text-[#FFAA00] shrink-0" />
                    <span><strong>Takeaway:</strong> Passport = AuthN (Identity). Boarding Pass = AuthZ (Seat Permission).</span>
                  </div>
                </>
              )}

              {/* POINT 2: JWT TOKENS */}
              {currentStep === 1 && (
                <>
                  <div className="flex items-center gap-2.5">
                    <span className="text-xs sm:text-sm font-black text-[#55FFFF] px-2.5 py-0.5 bg-[#55FFFF]/15 border border-[#55FFFF]/40">
                      #02
                    </span>
                    <h3 className="text-lg sm:text-xl font-black text-white font-sans uppercase">
                      JWT: The Digital Wristband
                    </h3>
                  </div>

                  <p className="text-sm sm:text-base text-zinc-100 font-semibold leading-relaxed">
                    Instead of checking your password on every click, the server gives you a signed token (like a festival wristband).
                  </p>

                  <div className="p-3.5 bg-[#090a10] border border-[#2e334a] text-xs space-y-1.5 font-mono">
                    <span className="text-[10px] text-zinc-400 font-bold block mb-1">TOKEN PARTS:</span>
                    <div className="text-zinc-300">
                      • <strong className="text-[#FF5555]">Header:</strong> Type & settings<br />
                      • <strong className="text-[#FFAA00]">Payload:</strong> User ID & Role (Student)<br />
                      • <strong className="text-[#55FF55]">Signature:</strong> Server security seal
                    </div>
                  </div>

                  <div className="p-3 bg-[#181b2c] border-l-4 border-[#55FFFF] text-xs sm:text-sm text-zinc-200 font-medium flex items-center gap-2">
                    <Lightbulb className="w-4 h-4 text-[#55FFFF] shrink-0" />
                    <span><strong>Takeaway:</strong> If a hacker modifies their role, the signature breaks instantly.</span>
                  </div>
                </>
              )}

              {/* POINT 3: ROLE MATRIX */}
              {currentStep === 2 && (
                <>
                  <div className="flex items-center gap-2.5">
                    <span className="text-xs sm:text-sm font-black text-[#55FF55] px-2.5 py-0.5 bg-[#55FF55]/15 border border-[#55FF55]/40">
                      #03
                    </span>
                    <h3 className="text-lg sm:text-xl font-black text-white font-sans uppercase">
                      Role-Based Access
                    </h3>
                  </div>

                  <p className="text-sm sm:text-base text-zinc-100 font-semibold leading-relaxed">
                    Different users get different permissions based on their role:
                  </p>

                  <div className="p-3.5 bg-[#090a10] border border-[#2e334a] text-xs space-y-1.5">
                    <p className="text-zinc-200">• <strong className="text-[#55FFFF]">Student:</strong> Can read & write own homework.</p>
                    <p className="text-zinc-200">• <strong className="text-[#FFAA00]">Teacher:</strong> Can grade student assignments.</p>
                    <p className="text-zinc-200">• <strong className="text-[#55FF55]">Admin:</strong> Full access to manage system.</p>
                  </div>

                  <div className="p-3 bg-[#181b2c] border-l-4 border-[#55FF55] text-xs sm:text-sm text-zinc-200 font-medium flex items-center gap-2">
                    <Lightbulb className="w-4 h-4 text-[#55FF55] shrink-0" />
                    <span><strong>Takeaway:</strong> Always verify roles on the server before granting access.</span>
                  </div>
                </>
              )}
            </motion.div>
          </AnimatePresence>

          <div className="pt-3.5 border-t border-[#2e334a] text-xs sm:text-sm text-zinc-400 flex items-center justify-between font-bold">
            <span>Press Next or Hotbar to advance</span>
            <span className="text-[#55FFFF]">Module 06: Auth</span>
          </div>
        </div>

        {/* RIGHT SECTION: Visual Server Engine Preview */}
        <div className="bg-[#090a10] border-2 border-[#55FFFF] p-6 shadow-pixel flex flex-col">
          {/* Header */}
          <div className="flex items-center gap-2 pb-3 border-b border-[#2e334a] text-xs sm:text-sm font-bold text-zinc-300">
            <Server className="w-5 h-5 text-[#55FFFF]" />
            <span>SECURITY GATE ENGINE</span>
          </div>

          {/* Dynamic Animation Viewport - Centered Vertically & Horizontally */}
          <div className="flex-1 flex flex-col items-center justify-center py-6 w-full my-auto">
            {/* ANIMATION 1: Keycard Scanner & Door Check */}
            {currentStep === 0 && (
              <div className="w-full max-w-md mx-auto space-y-3 font-mono">
                <div className="p-4 bg-[#121420] border-2 border-[#FFAA00] shadow-pixel space-y-3">
                  {/* Keycard Element */}
                  <motion.div
                    animate={{ y: [0, -3, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="p-3 bg-[#181b2c] border-2 border-[#FFAA00] flex items-center justify-between"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 bg-[#FFAA00]/20 border border-[#FFAA00] flex items-center justify-center text-[#FFAA00]">
                        <User className="w-4 h-4" />
                      </div>
                      <div>
                        <strong className="text-white text-xs block">Alex (Student)</strong>
                        <span className="text-[10px] text-[#FFAA00]">ID: #usr_101</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-1 px-2 py-1 bg-[#090a10] border border-[#FFAA00] text-[#FFAA00] text-[10px] font-bold">
                      <Key className="w-3 h-3" />
                      <span>{gatePhase === 0 ? 'SCANNING...' : 'VERIFIED'}</span>
                    </div>
                  </motion.div>

                  {/* 2 Animated Access Doors */}
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    {/* Door 1: Student Room */}
                    <motion.div
                      animate={{
                        borderColor: gatePhase >= 1 ? '#55FF55' : '#2e334a',
                        backgroundColor: gatePhase >= 1 ? 'rgba(85, 255, 85, 0.1)' : '#090a10'
                      }}
                      className="p-3 border-2 flex flex-col items-center justify-center text-center gap-1.5 transition-colors"
                    >
                      <Unlock className={`w-5 h-5 ${gatePhase >= 1 ? 'text-[#55FF55]' : 'text-zinc-500'}`} />
                      <strong className="text-white text-[11px]">STUDENT ROOM</strong>
                      <span className={`text-[10px] font-bold px-1.5 py-0.5 border ${
                        gatePhase >= 1 ? 'bg-[#55FF55]/20 text-[#55FF55] border-[#55FF55]' : 'text-zinc-500 border-zinc-700'
                      }`}>
                        {gatePhase >= 1 ? 'DOOR OPEN' : 'LOCKED'}
                      </span>
                    </motion.div>

                    {/* Door 2: Admin Server Vault */}
                    <motion.div
                      animate={{
                        borderColor: gatePhase === 2 ? '#FF5555' : '#2e334a',
                        backgroundColor: gatePhase === 2 ? 'rgba(255, 85, 85, 0.1)' : '#090a10'
                      }}
                      className="p-3 border-2 flex flex-col items-center justify-center text-center gap-1.5 transition-colors"
                    >
                      <Lock className={`w-5 h-5 ${gatePhase === 2 ? 'text-[#FF5555]' : 'text-zinc-500'}`} />
                      <strong className="text-white text-[11px]">SERVER VAULT</strong>
                      <span className={`text-[10px] font-bold px-1.5 py-0.5 border ${
                        gatePhase === 2 ? 'bg-[#FF5555]/20 text-[#FF5555] border-[#FF5555]' : 'text-zinc-500 border-zinc-700'
                      }`}>
                        {gatePhase === 2 ? 'ACCESS DENIED' : 'LOCKED'}
                      </span>
                    </motion.div>
                  </div>

                  <div className="p-2 bg-[#090a10] border border-[#2e334a] text-center text-xs font-bold text-zinc-300">
                    {gatePhase === 0 && '⚡ Step 1: Scanning Keycard Identity...'}
                    {gatePhase === 1 && '✓ Step 2: Student room unlocks for Alex'}
                    {gatePhase === 2 && '🔒 Step 3: Server room blocks unauthorized access'}
                  </div>
                </div>
              </div>
            )}

            {/* ANIMATION 2: Live JWT Wristband Split & Signature Check */}
            {currentStep === 1 && (
              <div className="w-full max-w-md mx-auto space-y-3 font-mono">
                <div className="p-4 bg-[#121420] border-2 border-[#55FFFF] shadow-pixel space-y-3">
                  {/* Token Container */}
                  <div className="space-y-1.5 text-xs">
                    {/* Header */}
                    <motion.div
                      animate={{ scale: jwtPhase === 0 ? 1.02 : 1 }}
                      className={`p-2.5 border transition-all flex items-center justify-between ${
                        jwtPhase === 0 ? 'bg-[#1a0f0f] border-[#FF5555] text-white shadow-glow-diamond' : 'bg-[#090a10] border-[#2e334a] text-zinc-400'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#FF5555]" />
                        <strong className="text-[11px]">HEADER</strong>
                      </div>
                      <span className="text-[#FF8888] text-[10px]">Algorithm: Safe</span>
                    </motion.div>

                    {/* Payload */}
                    <motion.div
                      animate={{ scale: jwtPhase === 1 ? 1.02 : 1 }}
                      className={`p-2.5 border transition-all flex items-center justify-between ${
                        jwtPhase === 1 ? 'bg-[#1f190f] border-[#FFAA00] text-white shadow-glow-diamond' : 'bg-[#090a10] border-[#2e334a] text-zinc-400'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#FFAA00]" />
                        <strong className="text-[11px]">PAYLOAD</strong>
                      </div>
                      <span className="text-[#FFAA00] text-[10px] font-bold">User: Alex (Student)</span>
                    </motion.div>

                    {/* Signature */}
                    <motion.div
                      animate={{ scale: jwtPhase === 2 ? 1.02 : 1 }}
                      className={`p-2.5 border transition-all flex items-center justify-between ${
                        jwtPhase === 2 ? 'bg-[#0f1f15] border-[#55FF55] text-white shadow-glow-diamond' : 'bg-[#090a10] border-[#2e334a] text-zinc-400'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#55FF55]" />
                        <strong className="text-[11px]">SIGNATURE</strong>
                      </div>
                      <span className="text-[#55FF55] text-[10px] font-bold flex items-center gap-1">
                        <ShieldCheck className="w-3 h-3" /> Valid Seal
                      </span>
                    </motion.div>
                  </div>

                  <div className="p-2 bg-[#091f14] border border-[#55FF55]/60 text-center text-[#55FF55] text-xs font-bold">
                    ✓ Tamper-proof digital wristband verified by server.
                  </div>
                </div>
              </div>
            )}

            {/* ANIMATION 3: Live Role Matrix Switcher */}
            {currentStep === 2 && (
              <div className="w-full max-w-md mx-auto space-y-3 font-mono">
                <div
                  className="p-4 bg-[#121420] border-2 shadow-pixel space-y-3 transition-colors duration-300"
                  style={{ borderColor: activeRole.color }}
                >
                  <div className="flex items-center justify-between border-b border-[#2e334a] pb-2 text-xs">
                    <span className="text-zinc-400 font-bold">ACTIVE KEYCARD:</span>
                    <div
                      className="px-2.5 py-0.5 text-xs font-black border flex items-center gap-1.5"
                      style={{ color: activeRole.color, borderColor: activeRole.color, backgroundColor: `${activeRole.color}20` }}
                    >
                      <ActiveRoleIcon className="w-3.5 h-3.5" />
                      <span>{activeRole.name.toUpperCase()}</span>
                    </div>
                  </div>

                  {/* 3 Interactive Action Bars */}
                  <div className="space-y-1.5 text-xs">
                    {/* Action 1: Read Notes */}
                    <div className="p-2 bg-[#090a10] border border-[#2e334a] flex items-center justify-between">
                      <div className="flex items-center gap-2 text-white">
                        <FileText className="w-4 h-4 text-[#55FFFF]" />
                        <span>Read Homework Notes</span>
                      </div>
                      <span className="text-[#55FF55] font-black text-[10px] flex items-center gap-1 px-1.5 py-0.5 bg-[#55FF55]/15 border border-[#55FF55]">
                        <Check className="w-3 h-3" /> ALLOWED
                      </span>
                    </div>

                    {/* Action 2: Grade Assignments */}
                    <div className="p-2 bg-[#090a10] border border-[#2e334a] flex items-center justify-between">
                      <div className="flex items-center gap-2 text-white">
                        <Edit3 className="w-4 h-4 text-[#FFAA00]" />
                        <span>Grade Assignments</span>
                      </div>
                      <span className={activeRole.canGrade ? 'text-[#55FF55] font-black text-[10px] flex items-center gap-1 px-1.5 py-0.5 bg-[#55FF55]/15 border border-[#55FF55]' : 'text-[#FF5555] font-black text-[10px] flex items-center gap-1 px-1.5 py-0.5 bg-[#FF5555]/15 border border-[#FF5555]'}>
                        {activeRole.canGrade ? <Check className="w-3 h-3" /> : <X className="w-3 h-3" />}
                        {activeRole.canGrade ? 'ALLOWED' : 'BLOCKED'}
                      </span>
                    </div>

                    {/* Action 3: Purge Database */}
                    <div className="p-2 bg-[#090a10] border border-[#2e334a] flex items-center justify-between">
                      <div className="flex items-center gap-2 text-white">
                        <Trash2 className="w-4 h-4 text-[#FF5555]" />
                        <span>Delete Database</span>
                      </div>
                      <span className={activeRole.canDeleteAll ? 'text-[#55FF55] font-black text-[10px] flex items-center gap-1 px-1.5 py-0.5 bg-[#55FF55]/15 border border-[#55FF55]' : 'text-[#FF5555] font-black text-[10px] flex items-center gap-1 px-1.5 py-0.5 bg-[#FF5555]/15 border border-[#FF5555]'}>
                        {activeRole.canDeleteAll ? <Check className="w-3 h-3" /> : <X className="w-3 h-3" />}
                        {activeRole.canDeleteAll ? 'ALLOWED' : 'BLOCKED'}
                      </span>
                    </div>
                  </div>

                  <div className="p-2 bg-[#181b2c] border border-[#2e334a] text-center text-xs font-bold" style={{ color: activeRole.color }}>
                    Testing permissions for {activeRole.name} account.
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
