import React, { useState } from 'react';
import { Globe, Search, Lock, ArrowRight, CheckCircle2 } from 'lucide-react';
import { sound } from '../../../utils/sound';

export const Stage7Domain: React.FC = () => {
  const [resolved, setResolved] = useState<boolean>(false);

  const resolveDns = () => {
    sound.packetPing();
    setResolved(true);
    sound.success();
  };

  return (
    <div className="flex flex-col gap-4 font-mono select-none">
      {/* Header */}
      <div className="flex items-center justify-between pb-2 border-b border-[#2e334a]">
        <div className="flex items-center gap-2">
          <Globe className="w-5 h-5 text-[#FFAA00]" />
          <h3 className="text-sm sm:text-base font-bold text-white font-sans uppercase">
            STAGE 07: DOMAIN & DNS — THE HUMAN-FRIENDLY ADDRESS
          </h3>
        </div>
        <button
          onClick={resolveDns}
          className="pixel-btn pixel-btn-primary px-3 py-1 text-xs cursor-pointer flex items-center gap-1.5"
        >
          <Search className="w-3.5 h-3.5" />
          <span>{resolved ? '✓ RESOLVED IN 12MS' : 'PING DNS LOOKUP'}</span>
        </button>
      </div>

      {/* DNS Phonebook Resolution Flow */}
      <div className="p-4 bg-[#090a10] border-2 border-[#383e58] shadow-pixel">
        <span className="text-[10px] text-zinc-400 font-bold uppercase block mb-3">
          HOW DNS MAPS NAMES TO CLOUD COMPUTERS:
        </span>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs items-center">
          {/* Step 1: Domain Name */}
          <div className="p-3 bg-[#121420] border border-[#2e334a] text-center">
            <span className="text-[10px] text-zinc-400 block font-bold">1. BROWSER ADDRESS BAR</span>
            <div className="flex items-center justify-center gap-1 mt-1 text-white font-bold">
              <Lock className="w-3 h-3 text-[#55FF55]" />
              <span>studentnotes.dev</span>
            </div>
          </div>

          {/* Step 2: DNS Phonebook Resolver */}
          <div className="p-3 bg-[#121420] border border-[#FFAA00] text-center">
            <span className="text-[10px] text-[#FFAA00] block font-bold">2. DNS PHONEBOOK (A RECORD)</span>
            <strong className="text-xs text-[#FFAA00] mt-1 block">
              {resolved ? 'Resolves -> 76.76.21.21' : 'Click Ping to resolve'}
            </strong>
          </div>

          {/* Step 3: Hosting Server */}
          <div className="p-3 bg-[#121420] border border-[#55FF55] text-center">
            <span className="text-[10px] text-[#55FF55] block font-bold">3. CLOUD SERVER</span>
            <strong className="text-xs text-[#55FF55] mt-1 flex items-center justify-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Delivers Webpage</span>
            </strong>
          </div>
        </div>

        <p className="text-[11px] text-zinc-400 text-center mt-3">
          "Computers talk in IP numbers (76.76.21.21). Humans talk in domain names (notes.dev). DNS bridges both."
        </p>
      </div>
    </div>
  );
};
