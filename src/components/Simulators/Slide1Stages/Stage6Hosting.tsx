import React, { useState } from 'react';
import { Cloud, Globe, Laptop, Server, CheckCircle2, ArrowRight } from 'lucide-react';
import { sound } from '../../../utils/sound';

export const Stage6Hosting: React.FC = () => {
  const [deployed, setDeployed] = useState<boolean>(false);

  const simulateDeploy = () => {
    sound.packetPing();
    setDeployed(true);
    sound.success();
  };

  return (
    <div className="flex flex-col gap-4 font-mono select-none">
      {/* Header */}
      <div className="flex items-center justify-between pb-2 border-b border-[#2e334a]">
        <div className="flex items-center gap-2">
          <Cloud className="w-5 h-5 text-[#55FFFF]" />
          <h3 className="text-sm sm:text-base font-bold text-white font-sans uppercase">
            STAGE 06: CLOUD HOSTING — 24/7 ONLINE AVAILABILITY
          </h3>
        </div>
        <button
          onClick={simulateDeploy}
          className="pixel-btn pixel-btn-primary px-3 py-1 text-xs cursor-pointer flex items-center gap-1.5"
        >
          <Cloud className="w-3.5 h-3.5" />
          <span>{deployed ? '✓ LIVE ON EDGE CDN' : 'RUN GIT PUSH DEPLOY'}</span>
        </button>
      </div>

      {/* Localhost vs Global Edge Cloud Comparison */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Left: Localhost */}
        <div className="p-4 bg-[#090a10] border-2 border-[#FF5555]/50 shadow-pixel flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-xs font-bold text-white uppercase">
                1. LOCALHOST (YOUR LAPTOP)
              </span>
              <Laptop className="w-4 h-4 text-[#FF5555]" />
            </div>
            <p className="text-[11px] text-zinc-300 mb-2">
              Accessible only on <code>http://localhost:5173</code> on your machine.
            </p>

            <div className="p-2.5 bg-[#121420] border border-[#2e334a] text-xs text-[#FF5555] space-y-1">
              <p>• Laptop lid closes = Server goes offline ❌</p>
              <p>• WiFi disconnects = Visitors get Error ❌</p>
              <p>• Cannot handle global traffic spikes ❌</p>
            </div>
          </div>
        </div>

        {/* Right: Cloud Edge CDN */}
        <div className="p-4 bg-[#090a10] border-2 border-[#55FFFF] shadow-pixel flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-xs font-bold text-white uppercase">
                2. GLOBAL EDGE CDN (VERCEL / RENDER)
              </span>
              <Globe className="w-4 h-4 text-[#55FFFF]" />
            </div>
            <p className="text-[11px] text-zinc-300 mb-2">
              Replicated across 300+ data centers worldwide with 99.99% uptime.
            </p>

            <div className="p-2.5 bg-[#121420] border border-[#2e334a] text-xs text-[#55FF55] space-y-1">
              <p>• 24/7 online even when your computer is off ✅</p>
              <p>• Automated SSL encryption (Free HTTPS) ✅</p>
              <p>• git push main deploys globally in 30 seconds ✅</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
