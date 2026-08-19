import React, { useState } from 'react';
import { Lock, Key, ShieldCheck, ShieldAlert, Check, X } from 'lucide-react';
import { sound } from '../../../utils/sound';

export const Stage5Auth: React.FC = () => {
  const [activeRole, setActiveRole] = useState<'student' | 'admin'>('student');

  return (
    <div className="flex flex-col gap-4 font-mono select-none">
      {/* Header */}
      <div className="flex items-center justify-between pb-2 border-b border-[#2e334a]">
        <div className="flex items-center gap-2">
          <Lock className="w-5 h-5 text-[#FF5555]" />
          <h3 className="text-sm sm:text-base font-bold text-white font-sans uppercase">
            STAGE 05: AUTHENTICATION & ACCESS CONTROL
          </h3>
        </div>
        <div className="flex gap-1">
          <button
            onClick={() => { sound.click(); setActiveRole('student'); }}
            className={`pixel-btn px-2.5 py-1 text-xs cursor-pointer ${
              activeRole === 'student' ? 'pixel-btn-primary' : 'text-zinc-400'
            }`}
          >
            STUDENT KEYCARD
          </button>
          <button
            onClick={() => { sound.click(); setActiveRole('admin'); }}
            className={`pixel-btn px-2.5 py-1 text-xs cursor-pointer ${
              activeRole === 'admin' ? 'bg-[#FF5555]/20 text-[#FF5555] border-[#FF5555]' : 'text-zinc-400'
            }`}
          >
            ADMIN MASTER KEY
          </button>
        </div>
      </div>

      {/* AuthN vs AuthZ Dual Concept Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Left: AuthN (Identity Verification) */}
        <div className="p-4 bg-[#090a10] border-2 border-[#383e58] shadow-pixel flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <Key className="w-4 h-4 text-[#FFAA00]" />
              <span className="text-xs font-bold text-white uppercase">
                1. AUTHENTICATION (AuthN) — "WHO ARE YOU?"
              </span>
            </div>
            <p className="text-[11px] text-zinc-300 mb-3">
              Proving your identity using email + salted password hash or Google OAuth.
            </p>

            <div className="p-2.5 bg-[#121420] border border-[#2e334a] text-xs space-y-1">
              <span className="text-[10px] text-zinc-400 block font-bold">ISSUED JWT BADGE:</span>
              <p className="text-[11px] text-[#55FFFF] font-mono truncate">
                Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
              </p>
              <span className="text-[10px] text-[#55FF55] block">
                ✓ Stored in secure HTTP-Only cookie (immune to XSS theft)
              </span>
            </div>
          </div>
        </div>

        {/* Right: AuthZ (Authorization & Permissions) */}
        <div className="p-4 bg-[#090a10] border-2 border-[#55FFFF] shadow-pixel flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <ShieldCheck className="w-4 h-4 text-[#55FFFF]" />
              <span className="text-xs font-bold text-white uppercase">
                2. AUTHORIZATION (AuthZ) — "WHAT CAN YOU DO?"
              </span>
            </div>
            <p className="text-[11px] text-zinc-300 mb-3">
              Enforcing permissions based on your assigned user role.
            </p>

            <div className="space-y-1.5 text-xs">
              <div className="p-1.5 bg-[#121420] border border-[#2e334a] flex items-center justify-between">
                <span>View & Edit Own Notes:</span>
                <span className="text-[#55FF55] font-bold flex items-center gap-1">
                  <Check className="w-3 h-3" /> ALLOWED
                </span>
              </div>
              <div className="p-1.5 bg-[#121420] border border-[#2e334a] flex items-center justify-between">
                <span>Delete Other Users' Database:</span>
                <span className={activeRole === 'admin' ? 'text-[#55FF55] font-bold' : 'text-[#FF5555] font-bold'}>
                  {activeRole === 'admin' ? '✓ GRANTED (ADMIN)' : '✗ DENIED 403 (STUDENT)'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
