import React from 'react';
import { Lock, Key, ShieldCheck, Check, X } from 'lucide-react';

export const Stage5Auth: React.FC = () => {
  return (
    <div className="flex flex-col gap-4 font-mono select-none">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-[#2e334a]">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#FF5555]/20 text-[#FF5555] flex items-center justify-center border-2 border-[#FF5555]">
            <Lock className="w-6 h-6" />
          </div>
          <h3 className="text-lg sm:text-xl font-black text-white font-sans uppercase">
            05. AUTHENTICATION & ACCESS CONTROL
          </h3>
        </div>
        <span className="text-xs sm:text-sm text-[#55FFFF] font-black px-3 py-1 bg-[#090a10] border border-[#55FFFF]/40 w-fit">
          Digital Keycard Protocol (JWT)
        </span>
      </div>

      {/* Dual Column AuthN vs AuthZ Split */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Pillar 1: Authentication */}
        <div className="p-4 bg-[#090a10] border-2 border-[#FFAA00] shadow-pixel flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 text-[#FFAA00] font-black text-sm sm:text-base mb-1.5">
              <Key className="w-5 h-5" />
              <span>1. AUTHENTICATION (AuthN) — "WHO ARE YOU?"</span>
            </div>
            <p className="text-xs sm:text-sm text-zinc-100 font-semibold mb-3 leading-relaxed">
              Proving your identity with email + salted password hash or Google OAuth login.
            </p>

            <div className="p-3 bg-[#121420] border border-[#2e334a] text-xs sm:text-sm space-y-1.5">
              <span className="text-xs text-[#55FFFF] font-black block">ENCRYPTED JWT KEYCARD:</span>
              <p className="text-xs text-zinc-300 font-mono truncate font-bold">
                Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
              </p>
              <span className="text-xs text-[#55FF55] block font-extrabold">
                ✓ Stored in secure HTTP-Only cookie (immune to script theft)
              </span>
            </div>
          </div>
        </div>

        {/* Pillar 2: Authorization */}
        <div className="p-4 bg-[#090a10] border-2 border-[#55FFFF] shadow-pixel flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 text-[#55FFFF] font-black text-sm sm:text-base mb-1.5">
              <ShieldCheck className="w-5 h-5" />
              <span>2. AUTHORIZATION (AuthZ) — "WHAT CAN YOU DO?"</span>
            </div>
            <p className="text-xs sm:text-sm text-zinc-100 font-semibold mb-3 leading-relaxed">
              Enforcing permissions based on user roles (Student vs Teacher vs Admin).
            </p>

            <div className="space-y-2 text-xs sm:text-sm">
              <div className="p-2.5 bg-[#121420] border border-[#2e334a] flex items-center justify-between font-bold">
                <span className="text-white">View & Edit Own Notes:</span>
                <span className="text-[#55FF55] font-black flex items-center gap-1">
                  <Check className="w-4 h-4" /> STUDENT (ALLOWED)
                </span>
              </div>
              <div className="p-2.5 bg-[#121420] border border-[#2e334a] flex items-center justify-between font-bold">
                <span className="text-white">Delete Other Users' Accounts:</span>
                <span className="text-[#FF5555] font-black flex items-center gap-1">
                  <X className="w-4 h-4 text-[#FF5555]" /> ONLY ADMIN (DENIED)
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
