import React from 'react';
import { Cloud, Laptop, Globe, CheckCircle2, ArrowRight } from 'lucide-react';

export const Stage6Hosting: React.FC = () => {
  return (
    <div className="flex flex-col gap-4 font-mono select-none">
      {/* Header */}
      <div className="flex items-center justify-between pb-2 border-b border-[#2e334a]">
        <div className="flex items-center gap-2">
          <Cloud className="w-5 h-5 text-[#55FFFF]" />
          <h3 className="text-sm sm:text-base font-bold text-white font-sans uppercase">
            06. HOSTING — THE 24/7 CLOUD SERVER INFRASTRUCTURE
          </h3>
        </div>
        <span className="text-xs text-[#55FF55] font-bold">
          300+ Global Edge Nodes
        </span>
      </div>

      {/* Unique Template: Localhost vs Global Edge Cloud + Automated CI/CD Track */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Localhost */}
        <div className="p-3.5 bg-[#090a10] border-2 border-[#FF5555]/50 shadow-pixel flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-xs font-bold text-[#FF5555] uppercase">
                LOCALHOST (YOUR LAPTOP)
              </span>
              <Laptop className="w-4 h-4 text-[#FF5555]" />
            </div>
            <p className="text-[11px] text-zinc-300 mb-2">
              Only runs on <code>http://localhost:5173</code> while your laptop is awake.
            </p>
            <div className="p-2 bg-[#121420] border border-[#2e334a] text-xs text-[#FF5555] space-y-1">
              <p>• Laptop closes = Server goes down ❌</p>
              <p>• Cannot handle global traffic spikes ❌</p>
            </div>
          </div>
        </div>

        {/* Global Edge Cloud */}
        <div className="p-3.5 bg-[#090a10] border-2 border-[#55FFFF] shadow-pixel flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-xs font-bold text-[#55FFFF] uppercase">
                GLOBAL EDGE CLOUD (VERCEL / RENDER)
              </span>
              <Globe className="w-4 h-4 text-[#55FFFF]" />
            </div>
            <p className="text-[11px] text-zinc-300 mb-2">
              Runs in 300+ cloud data centers worldwide with 99.99% uptime.
            </p>
            <div className="p-2 bg-[#121420] border border-[#2e334a] text-xs text-[#55FF55] space-y-1">
              <p>• 24/7 online even when laptop is turned off ✅</p>
              <p>• Free automated HTTPS / SSL security certificates ✅</p>
            </div>
          </div>
        </div>
      </div>

      {/* CI/CD Automated Push Track */}
      <div className="p-3 bg-[#121420] border border-[#2e334a] flex items-center justify-between text-xs text-zinc-300">
        <div className="flex items-center gap-2">
          <span className="text-[#55FFFF] font-bold">AUTOMATED DEPLOY PIPELINE:</span>
          <span><code>git push origin master</code> ➔ Cloud Build (30s) ➔ Live Worldwide!</span>
        </div>
        <span className="text-[#55FF55] font-bold hidden sm:inline">Tools: Vercel, Netlify, Render</span>
      </div>
    </div>
  );
};
