import React from 'react';
import { Globe, Lock, Lightbulb } from 'lucide-react';

export const Stage7Domain: React.FC = () => {
  return (
    <div className="flex flex-col gap-4 font-mono select-none">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-[#2e334a]">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#FFAA00]/20 text-[#FFAA00] flex items-center justify-center border-2 border-[#FFAA00]">
            <Globe className="w-6 h-6" />
          </div>
          <h3 className="text-lg sm:text-xl font-black text-white font-sans uppercase">
            07. DOMAIN & DNS — THE INTERNET PHONEBOOK
          </h3>
        </div>
        <span className="text-xs sm:text-sm text-[#FFAA00] font-black px-3 py-1 bg-[#090a10] border border-[#FFAA00]/40 w-fit">
          Human Name ➔ Server IP Address
        </span>
      </div>

      {/* 3-Hop Resolution Highway with Larger Fonts */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 items-center">
        {/* Hop 1 */}
        <div className="p-4 bg-[#090a10] border-2 border-[#55FFFF] shadow-pixel text-center">
          <span className="text-xs sm:text-sm text-[#55FFFF] block font-black mb-1">HOP 1: HUMAN ADDRESS</span>
          <div className="flex items-center justify-center gap-1.5 text-white font-black text-lg my-1.5">
            <Lock className="w-4 h-4 text-[#55FF55]" />
            <span>studentnotes.dev</span>
          </div>
          <span className="text-xs sm:text-sm text-zinc-300 font-semibold">Typed into browser bar</span>
        </div>

        {/* Hop 2 */}
        <div className="p-4 bg-[#090a10] border-2 border-[#FFAA00] shadow-pixel text-center">
          <span className="text-xs sm:text-sm text-[#FFAA00] block font-black mb-1">HOP 2: DNS PHONEBOOK</span>
          <div className="text-sm sm:text-base text-[#FFAA00] font-black my-1.5">
            Lookup A Record (15ms)
          </div>
          <span className="text-xs sm:text-sm text-zinc-300 font-semibold">Queries global Name Servers</span>
        </div>

        {/* Hop 3 */}
        <div className="p-4 bg-[#090a10] border-2 border-[#55FF55] shadow-pixel text-center">
          <span className="text-xs sm:text-sm text-[#55FF55] block font-black mb-1">HOP 3: DESTINATION IP</span>
          <div className="text-sm sm:text-base text-[#55FF55] font-black my-1.5">
            76.76.21.21 (Server)
          </div>
          <span className="text-xs sm:text-sm text-zinc-300 font-semibold">Delivers webpage to visitor</span>
        </div>
      </div>

      {/* Bottom Summary Bar */}
      <div className="p-3.5 bg-[#121420] border border-[#2e334a] flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs sm:text-sm text-zinc-100 font-bold">
        <div className="flex items-center gap-2">
          <Lightbulb className="w-4 h-4 text-[#FFAA00] shrink-0" />
          <span><strong>Domain vs Hosting:</strong> The domain is the street address (notes.dev); hosting is the physical building on that street.</span>
        </div>
        <span className="text-[#55FFFF] font-black shrink-0">Registrars: Namecheap, Cloudflare, Porkbun</span>
      </div>
    </div>
  );
};
