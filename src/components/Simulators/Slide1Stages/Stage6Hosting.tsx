import React from 'react';
import { Cloud, Laptop, Globe } from 'lucide-react';

export const Stage6Hosting: React.FC = () => {
  return (
    <div className="flex flex-col gap-4 font-mono select-none">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-[#2e334a]">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#55FFFF]/20 text-[#55FFFF] flex items-center justify-center border-2 border-[#55FFFF]">
            <Cloud className="w-6 h-6" />
          </div>
          <h3 className="text-lg sm:text-xl font-black text-white font-sans uppercase">
            06. HOSTING — 24/7 CLOUD INFRASTRUCTURE
          </h3>
        </div>
        <span className="text-xs sm:text-sm text-[#55FF55] font-black px-3 py-1 bg-[#090a10] border border-[#55FF55]/40 w-fit">
          300+ Global Edge CDN Nodes
        </span>
      </div>

      {/* Localhost vs Global Edge Cloud */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Localhost */}
        <div className="p-4 bg-[#090a10] border-2 border-[#FF5555] shadow-pixel flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm sm:text-base font-black text-[#FF5555] uppercase">
                1. LOCALHOST (YOUR LAPTOP)
              </span>
              <Laptop className="w-5 h-5 text-[#FF5555]" />
            </div>
            <p className="text-xs sm:text-sm text-zinc-100 font-semibold mb-3 leading-relaxed">
              Only runs on <code>http://localhost:5173</code> while your laptop is awake.
            </p>
            <div className="p-3 bg-[#121420] border border-[#2e334a] text-xs sm:text-sm text-[#FF5555] space-y-1.5 font-bold">
              <p>• Laptop closes = Server goes down ❌</p>
              <p>• Cannot handle global traffic spikes ❌</p>
            </div>
          </div>
        </div>

        {/* Global Edge Cloud */}
        <div className="p-4 bg-[#090a10] border-2 border-[#55FFFF] shadow-pixel flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm sm:text-base font-black text-[#55FFFF] uppercase">
                2. GLOBAL EDGE CLOUD (VERCEL / RENDER)
              </span>
              <Globe className="w-5 h-5 text-[#55FFFF]" />
            </div>
            <p className="text-xs sm:text-sm text-zinc-100 font-semibold mb-3 leading-relaxed">
              Runs in 300+ cloud data centers worldwide with 99.99% uptime.
            </p>
            <div className="p-3 bg-[#121420] border border-[#2e334a] text-xs sm:text-sm text-[#55FF55] space-y-1.5 font-bold">
              <p>• 24/7 online even when laptop is off ✅</p>
              <p>• Automated SSL encryption (Free HTTPS) ✅</p>
            </div>
          </div>
        </div>
      </div>

      {/* CI/CD Automated Push Track */}
      <div className="p-3.5 bg-[#121420] border border-[#2e334a] flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs sm:text-sm text-zinc-100 font-bold">
        <div className="flex items-center gap-2">
          <span className="text-[#55FFFF] font-black">AUTOMATED DEPLOY:</span>
          <span><code>git push origin master</code> ➔ Cloud Build (30s) ➔ Live Worldwide!</span>
        </div>
        <span className="text-[#55FF55] font-black shrink-0">Tools: Vercel, Netlify, Render</span>
      </div>
    </div>
  );
};
