import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Key,
  ShieldCheck,
  ShieldAlert,
  Lock,
  User,
  GraduationCap,
  Briefcase,
  Check,
  X,
  Lightbulb,
  Server,
  Fingerprint
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

  // --- AUTOMATION 3: Role Switcher for RBAC Matrix ---
  const [activeRoleIndex, setActiveRoleIndex] = useState<number>(0);
  const roles = [
    { name: 'Student', icon: GraduationCap, canView: true, canEditOwn: true, canDeleteAll: false, badge: '#55FFFF' },
    { name: 'Teacher', icon: Briefcase, canView: true, canEditOwn: true, canDeleteAll: false, badge: '#FFAA00' },
    { name: 'System Admin', icon: ShieldAlert, canView: true, canEditOwn: true, canDeleteAll: true, badge: '#55FF55' }
  ];

  useEffect(() => {
    if (currentStep !== 2) return;
    const interval = setInterval(() => {
      setActiveRoleIndex(prev => (prev + 1) % roles.length);
      sound.click?.();
    }, 2400);
    return () => clearInterval(interval);
  }, [currentStep, roles.length]);

  const activeRole = roles[activeRoleIndex];

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
            <span className="text-[10px] font-bold hidden sm:inline text-zinc-500">Identity vs Rules</span>
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
            <span className="text-[10px] font-bold hidden sm:inline text-zinc-500">Access Control</span>
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
                    These two concepts sound similar, but perform two completely different security jobs:
                  </p>

                  <div className="p-3.5 bg-[#090a10] border border-[#2e334a] text-xs space-y-2">
                    <div className="flex items-start gap-2">
                      <strong className="text-[#FFAA00] shrink-0">1. Authentication (AuthN):</strong>
                      <span className="text-zinc-200">"Who are you?" Proving your identity with password or OAuth.</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <strong className="text-[#55FFFF] shrink-0">2. Authorization (AuthZ):</strong>
                      <span className="text-zinc-200">"What are you allowed to do?" Checking role permissions.</span>
                    </div>
                  </div>

                  <div className="p-3 bg-[#181b2c] border-l-4 border-[#FFAA00] text-xs sm:text-sm text-zinc-200 font-medium flex items-center gap-2">
                    <Lightbulb className="w-4 h-4 text-[#FFAA00] shrink-0" />
                    <span><strong>Takeaway:</strong> Airport security: Passport = AuthN (Identity), Boarding Pass = AuthZ (Seat Access).</span>
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
                      JWT: The Digital Concert Wristband
                    </h3>
                  </div>

                  <p className="text-sm sm:text-base text-zinc-100 font-semibold leading-relaxed">
                    After logging in, you don't send your password on every request. The server issues a cryptographically signed <strong>JSON Web Token (JWT)</strong>.
                  </p>

                  <div className="p-3.5 bg-[#090a10] border border-[#2e334a] text-xs space-y-1.5 font-mono">
                    <span className="text-[10px] text-zinc-400 font-bold block mb-1">JWT 3-PART ANATOMY:</span>
                    <div className="text-zinc-300">
                      • <strong className="text-[#FF5555]">HEADER:</strong> Algorithm (HMAC SHA256)<br />
                      • <strong className="text-[#FFAA00]">PAYLOAD:</strong> <code>{`{ "user_id": 101, "role": "student" }`}</code><br />
                      • <strong className="text-[#55FF55]">SIGNATURE:</strong> Tamper-proof server hash
                    </div>
                  </div>

                  <div className="p-3 bg-[#181b2c] border-l-4 border-[#55FFFF] text-xs sm:text-sm text-zinc-200 font-medium flex items-center gap-2">
                    <Lightbulb className="w-4 h-4 text-[#55FFFF] shrink-0" />
                    <span><strong>Takeaway:</strong> Tampering with the payload invalidates the signature instantly.</span>
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
                      Role-Based Access Control (RBAC)
                    </h3>
                  </div>

                  <p className="text-sm sm:text-base text-zinc-100 font-semibold leading-relaxed">
                    Applications enforce permissions using roles. The server verifies your role before allowing access to restricted endpoints.
                  </p>

                  <div className="p-3.5 bg-[#090a10] border border-[#2e334a] text-xs space-y-1">
                    <span className="text-zinc-400 font-bold text-[10px] block mb-1">EXAMPLE POLICIES:</span>
                    <p className="text-zinc-200">• <strong>Student:</strong> Read & Write own notes.</p>
                    <p className="text-zinc-200">• <strong>Teacher:</strong> Grade student submissions.</p>
                    <p className="text-zinc-200">• <strong>Admin:</strong> Delete accounts & manage servers.</p>
                  </div>

                  <div className="p-3 bg-[#181b2c] border-l-4 border-[#55FF55] text-xs sm:text-sm text-zinc-200 font-medium flex items-center gap-2">
                    <Lightbulb className="w-4 h-4 text-[#55FF55] shrink-0" />
                    <span><strong>Takeaway:</strong> Never trust client checks. Always enforce permissions on backend routes.</span>
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
            <span>SECURITY & AUTH ENGINE</span>
          </div>

          {/* Dynamic Animation Viewport - Centered Vertically & Horizontally */}
          <div className="flex-1 flex flex-col items-center justify-center py-6 w-full my-auto">
            {/* AUTOMATION 1: Keycard Scanner Simulation */}
            {currentStep === 0 && (
              <div className="w-full max-w-md mx-auto space-y-3 font-mono">
                <div className="p-4 bg-[#121420] border-2 border-[#FFAA00] shadow-pixel space-y-3">
                  <div className="flex items-center justify-between border-b border-[#2e334a] pb-2 text-xs">
                    <span className="text-zinc-400 font-bold">GATE CHECK:</span>
                    <span className="text-[#FFAA00] font-bold">ID & ACCESS VERIFIED</span>
                  </div>

                  <div className="space-y-2 text-xs">
                    <div className="p-2.5 bg-[#090a10] border border-[#FFAA00] flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4 text-[#FFAA00]" />
                        <span className="text-white font-bold">Step 1: AuthN (Identity)</span>
                      </div>
                      <span className="text-[#55FF55] font-black text-[10px]">✓ Alex (usr_101)</span>
                    </div>

                    <div className="p-2.5 bg-[#090a10] border border-[#55FFFF] flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Lock className="w-4 h-4 text-[#55FFFF]" />
                        <span className="text-white font-bold">Step 2: AuthZ (Role Check)</span>
                      </div>
                      <span className="text-[#55FFFF] font-black text-[10px]">Student Access</span>
                    </div>
                  </div>

                  <div className="p-2 bg-[#091f14] border border-[#55FF55]/60 text-center text-[#55FF55] text-xs font-bold">
                    ✓ Access Granted: Redirecting to Student Dashboard
                  </div>
                </div>
              </div>
            )}

            {/* AUTOMATION 2: JWT Token Visualizer */}
            {currentStep === 1 && (
              <div className="w-full max-w-md mx-auto space-y-3 font-mono">
                <div className="p-4 bg-[#121420] border-2 border-[#55FFFF] shadow-pixel space-y-2.5">
                  <div className="flex items-center justify-between border-b border-[#2e334a] pb-1.5 text-xs">
                    <span className="text-zinc-400 font-bold">JWT TOKEN DECODER</span>
                    <span className="text-[#55FF55] font-bold">VALID SIGNATURE</span>
                  </div>

                  {/* 3 Color-Coded JWT Blocks */}
                  <div className="space-y-1.5 text-[11px] font-mono">
                    <div className="p-2 bg-[#1a0f0f] border border-[#FF5555]/60 text-[#FF8888]">
                      <strong className="block text-[9px] text-[#FF5555] uppercase font-sans">1. Header (Algorithm):</strong>
                      &#123; "alg": "HS256", "typ": "JWT" &#125;
                    </div>

                    <div className="p-2 bg-[#1f190f] border border-[#FFAA00]/60 text-[#FFCC66]">
                      <strong className="block text-[9px] text-[#FFAA00] uppercase font-sans">2. Payload (Claims):</strong>
                      &#123; "id": 101, "role": "student", "exp": 1729000 &#125;
                    </div>

                    <div className="p-2 bg-[#0f1f15] border border-[#55FF55]/60 text-[#88FF88]">
                      <strong className="block text-[9px] text-[#55FF55] uppercase font-sans">3. Signature:</strong>
                      HMACSHA256(header + payload, secretKey)
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* AUTOMATION 3: Live Role Matrix Switcher */}
            {currentStep === 2 && (
              <div className="w-full max-w-md mx-auto space-y-3 font-mono">
                <div className="p-4 bg-[#121420] border-2 border-[#55FF55] shadow-pixel space-y-3">
                  <div className="flex items-center justify-between border-b border-[#2e334a] pb-2 text-xs">
                    <span className="text-zinc-400 font-bold">ACTIVE ROLE TEST:</span>
                    <span className="px-2 py-0.5 bg-[#55FF55]/20 border border-[#55FF55] text-[#55FF55] text-xs font-black">
                      {activeRole.name.toUpperCase()}
                    </span>
                  </div>

                  {/* 3 Permission Rows */}
                  <div className="space-y-1.5 text-xs">
                    <div className="p-2 bg-[#090a10] border border-[#2e334a] flex items-center justify-between">
                      <span className="text-zinc-200">View Own Notes:</span>
                      <span className="text-[#55FF55] font-black text-[11px] flex items-center gap-1">
                        <Check className="w-3.5 h-3.5" /> ALLOWED
                      </span>
                    </div>

                    <div className="p-2 bg-[#090a10] border border-[#2e334a] flex items-center justify-between">
                      <span className="text-zinc-200">Edit Course Analytics:</span>
                      <span className={activeRole.name !== 'Student' ? 'text-[#55FF55] font-black text-[11px] flex items-center gap-1' : 'text-[#FF5555] font-black text-[11px] flex items-center gap-1'}>
                        {activeRole.name !== 'Student' ? <Check className="w-3.5 h-3.5" /> : <X className="w-3.5 h-3.5" />}
                        {activeRole.name !== 'Student' ? 'ALLOWED' : 'DENIED (403)'}
                      </span>
                    </div>

                    <div className="p-2 bg-[#090a10] border border-[#2e334a] flex items-center justify-between">
                      <span className="text-zinc-200">Purge Server Databases:</span>
                      <span className={activeRole.canDeleteAll ? 'text-[#55FF55] font-black text-[11px] flex items-center gap-1' : 'text-[#FF5555] font-black text-[11px] flex items-center gap-1'}>
                        {activeRole.canDeleteAll ? <Check className="w-3.5 h-3.5" /> : <X className="w-3.5 h-3.5" />}
                        {activeRole.canDeleteAll ? 'ALLOWED' : 'DENIED (403)'}
                      </span>
                    </div>
                  </div>

                  <div className="p-2 bg-[#181b2c] border border-[#55FF55]/40 text-center text-[#55FF55] text-xs font-bold">
                    ✓ Server evaluates JWT claims on every protected API route.
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
