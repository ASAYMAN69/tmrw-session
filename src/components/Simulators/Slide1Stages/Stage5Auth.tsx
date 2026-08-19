import React from 'react';
import { Lock, Key, ShieldCheck, Check, X, ShieldAlert } from 'lucide-react';

export const Stage5Auth: React.FC = () => {
  return (
    <div className="flex flex-col gap-4 font-mono select-none">
      {/* Header */}
      <div className="flex items-center justify-between pb-2 border-b border-[#2e334a]">
        <div className="flex items-center gap-2">
          <Lock className="w-5 h-5 text-[#FF5555]" />
          <h3 className="text-sm sm:text-base font-bold text-white font-sans uppercase">
            05. AUTHENTICATION & ACCESS CONTROL
          </h3>
        </div>
        <span className="text-xs text-[#55FFFF] font-bold">
          Digital Keycard Protocol (JWT)
        </span>
      </div>

      {/* Unique Template: Dual Column AuthN vs AuthZ Split with Role Keycard Badges */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Pillar 1: Authentication */}
        <div className="p-4 bg-[#090a10] border-2 border-[#FFAA00] shadow-pixel flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 text-[#FFAA00] font-bold text-xs mb-1">
              <Key className="w-4 h-4" />
              <span>1. AUTHENTICATION (AuthN) — "WHO ARE YOU?"</span>
            </div>
            <p className="text-[11px] text-zinc-300 mb-3">
              Proving your identity with email + password hash or Google OAuth.
            </p>

            <div className="p-2.5 bg-[#121420] border border-[#2e334a] text-xs space-y-1">
              <span className="text-[10px] text-[#55FFFF] font-bold block">ENCRYPTED JWT KEYCARD:</span>
              <p className="text-[11px] text-zinc-300 font-mono truncate">
                Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
              </p>
              <span className="text-[10px] text-[#55FF55] block font-bold">
                ✓ Stored in secure HTTP-Only cookie (immune to script theft)
              </span>
            </div>
          </div>
        </div>

        {/* Pillar 2: Authorization */}
        <div className="p-4 bg-[#090a10] border-2 border-[#55FFFF] shadow-pixel flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 text-[#55FFFF] font-bold text-xs mb-1">
              <ShieldCheck className="w-4 h-4" />
              <span>2. AUTHORIZATION (AuthZ) — "WHAT CAN YOU DO?"</span>
            </div>
            <p className="text-[11px] text-zinc-300 mb-3">
              Enforcing permissions based on user roles (Student vs Teacher vs Admin).
            </p>

            <div className="space-y-1.5 text-xs">
              <div className="p-1.5 bg-[#121420] border border-[#2e334a] flex items-center justify-between">
                <span>View & Edit Own Notes:</span>
                <span className="text-[#55FF55] font-bold flex items-center gap-1">
                  <Check className="w-3 h-3" /> STUDENT (ALLOWED)
                </span>
              </div>
              <div className="p-1.5 bg-[#121420] border border-[#2e334a] flex items-center justify-between">
                <span>Delete Other Users' Accounts:</span>
                <span className="text-[#FF5555] font-bold flex items-center gap-1">
                  <X className="w-3 h-3 text-[#FF5555]" /> ONLY ADMIN (DENIED)
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
