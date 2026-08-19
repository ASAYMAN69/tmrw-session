import React from 'react';
import { Globe, Lock, ArrowRight, CheckCircle2, Search } from 'lucide-react';

export const Stage7Domain: React.FC = () => {
  return (
    <div className="flex flex-col gap-4 font-mono select-none">
      {/* Header */}
      <div className="flex items-center justify-between pb-2 border-b border-[#2e334a]">
        <div className="flex items-center gap-2">
          <Globe className="w-5 h-5 text-[#FFAA00]" />
          <h3 className="text-sm sm:text-base font-bold text-white font-sans uppercase">
            07. DOMAIN & DNS — THE INTERNET PHONEBOOK
          </h3>
        </div>
        <span className="text-xs text-[#FFAA00] font-bold">
          Human Name ➔ Server IP Address
        </span>
      </div>

      {/* Unique Template: 3-Hop Visual DNS Resolution Highway */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs items-center">
        {/* Hop 1: Human Domain */}
        <div className="p-3.5 bg-[#090a10] border-2 border-[#55FFFF] shadow-pixel text-center">
          <span className="text-[10px] text-[#55FFFF] block font-bold mb-1">HOP 1: HUMAN ADDRESS</span>
          <div className="flex items-center justify-center gap-1.5 text-white font-bold text-sm my-1">
            <Lock className="w-3.5 h-3.5 text-[#55FF55]" />
            <span>studentnotes.dev</span>
          </div>
          <span className="text-[10px] text-zinc-400">Typed into browser bar</span>
        </div>

        {/* Hop 2: DNS Phonebook */}
        <div className="p-3.5 bg-[#090a10] border-2 border-[#FFAA00] shadow-pixel text-center">
          <span className="text-[10px] text-[#FFAA00] block font-bold mb-1">HOP 2: DNS PHONEBOOK</span>
          <div className="text-xs text-[#FFAA00] font-bold my-1">
            Lookup A Record (15ms)
          </div>
          <span className="text-[10px] text-zinc-400">Queries global Name Servers</span>
        </div>

        {/* Hop 3: Cloud Server IP */}
        <div className="p-3.5 bg-[#090a10] border-2 border-[#55FF55] shadow-pixel text-center">
          <span className="text-[10px] text-[#55FF55] block font-bold mb-1">HOP 3: DESTINATION IP</span>
          <div className="text-xs text-[#55FF55] font-bold my-1">
            76.76.21.21 (Cloud Server)
          </div>
          <span className="text-[10px] text-zinc-400">Serves webpage to visitor</span>
        </div>
      </div>

      {/* Bottom Summary Bar */}
      <div className="p-3 bg-[#121420] border border-[#2e334a] flex items-center justify-between text-xs text-zinc-300">
        <span>💡 <strong>Domain vs Hosting:</strong> The domain is the street address (notes.dev); hosting is the physical building on that street.</span>
        <span className="text-[#55FFFF] font-bold hidden sm:inline">Registrars: Namecheap, Cloudflare, Porkbun</span>
      </div>
    </div>
  );
};
