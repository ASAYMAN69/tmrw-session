import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Globe,
  Server,
  Lock,
  Unlock,
  ArrowRight,
  CheckCircle2,
  Search,
  Zap,
  Shield,
  ShieldCheck,
  ShieldAlert,
  Lightbulb,
  Cpu,
  Cloud,
  Flame,
  Radio
} from 'lucide-react';
import { sound } from '../../utils/sound';

interface Slide8Props {
  subStep?: number;
  onSubStepChange?: (subStep: number) => void;
}

// Procedural Fire Flames Component with rising sparks
const FireFlamesGraphic: React.FC = () => {
  const embers = Array.from({ length: 12 });

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-md z-10">
      {/* Background Heat Flare */}
      <motion.div
        animate={{
          opacity: [0.6, 0.9, 0.6],
          scale: [0.98, 1.03, 0.98]
        }}
        transition={{ repeat: Infinity, duration: 0.8, ease: 'easeInOut' }}
        className="absolute inset-0 bg-gradient-to-t from-[#FF2200]/30 via-[#FF6600]/15 to-transparent blur-md"
      />

      {/* Dynamic Animated Flame Waves (SVG) */}
      <div className="absolute bottom-0 inset-x-0 h-28 flex items-end justify-center">
        {/* Layer 1: Deep Red Base */}
        <motion.svg
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          animate={{
            d: [
              "M0 100 C 20 50, 40 80, 50 30 C 60 70, 80 45, 100 100 Z",
              "M0 100 C 25 70, 35 40, 50 60 C 65 30, 75 80, 100 100 Z",
              "M0 100 C 20 50, 40 80, 50 30 C 60 70, 80 45, 100 100 Z"
            ],
            scaleY: [1, 1.25, 1],
            skewX: [-4, 4, -4]
          }}
          transition={{ repeat: Infinity, duration: 0.6, ease: 'easeInOut' }}
          className="absolute bottom-0 w-full h-full text-[#FF1100]/50 fill-current"
        />

        {/* Layer 2: Orange Mid Flame */}
        <motion.svg
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          animate={{
            d: [
              "M0 100 C 15 65, 30 40, 50 20 C 70 50, 85 35, 100 100 Z",
              "M0 100 C 20 45, 40 70, 50 35 C 60 25, 80 60, 100 100 Z",
              "M0 100 C 15 65, 30 40, 50 20 C 70 50, 85 35, 100 100 Z"
            ],
            scaleY: [1.1, 0.9, 1.1],
            skewX: [5, -5, 5]
          }}
          transition={{ repeat: Infinity, duration: 0.45, ease: 'easeInOut' }}
          className="absolute bottom-0 w-full h-24 text-[#FF6600]/70 fill-current"
        />

        {/* Layer 3: Intense Gold Center */}
        <motion.svg
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          animate={{
            d: [
              "M10 100 C 25 75, 35 55, 50 25 C 65 60, 75 45, 90 100 Z",
              "M10 100 C 30 50, 40 75, 50 40 C 60 30, 70 70, 90 100 Z",
              "M10 100 C 25 75, 35 55, 50 25 C 65 60, 75 45, 90 100 Z"
            ],
            scaleY: [0.95, 1.3, 0.95]
          }}
          transition={{ repeat: Infinity, duration: 0.35, ease: 'easeInOut' }}
          className="absolute bottom-0 w-full h-20 text-[#FFAA00]/90 fill-current"
        />

        {/* Layer 4: White Hot Core */}
        <motion.div
          animate={{
            scale: [0.8, 1.2, 0.8],
            opacity: [0.7, 1, 0.7]
          }}
          transition={{ repeat: Infinity, duration: 0.25 }}
          className="w-16 h-8 bg-gradient-to-t from-white via-[#FFEE55] to-transparent rounded-full blur-xs mb-1"
        />
      </div>

      {/* Floating Burning Spark Particles */}
      {embers.map((_, i) => {
        const leftPercent = 10 + (i * 7.5);
        const duration = 0.8 + ((i % 5) * 0.2);
        const delay = (i % 6) * 0.15;
        const size = (i % 3 === 0) ? 'w-2 h-2' : 'w-1.5 h-1.5';

        return (
          <motion.div
            key={i}
            initial={{ y: 90, opacity: 1, scale: 1 }}
            animate={{
              y: [-10, -110],
              x: [(i % 2 === 0 ? -12 : 12), (i % 2 === 0 ? 12 : -12)],
              opacity: [1, 0.8, 0],
              scale: [1, 0.4]
            }}
            transition={{
              repeat: Infinity,
              duration: duration,
              delay: delay,
              ease: 'easeOut'
            }}
            style={{ left: `${leftPercent}%`, bottom: '15px' }}
            className={`absolute ${size} rounded-full bg-gradient-to-t from-[#FF2200] to-[#FFEE33] shadow-glow-diamond`}
          />
        );
      })}
    </div>
  );
};

export const Slide8DomainHosting: React.FC<Slide8Props> = ({
  subStep = 0,
  onSubStepChange,
}) => {
  const currentStep = Math.min(2, Math.max(0, subStep));

  // --- AUTOMATION 1: DNS Hop Resolution Simulator ---
  const [dnsHop, setDnsHop] = useState<number>(0);
  useEffect(() => {
    if (currentStep !== 0) return;
    const interval = setInterval(() => {
      setDnsHop(prev => (prev + 1) % 3);
      sound.packetPing?.();
    }, 1800);
    return () => clearInterval(interval);
  }, [currentStep]);

  // --- AUTOMATION 3: HTTPS SSL Wire Encryption & Fire Hazard Simulator ---
  const [isEncrypted, setIsEncrypted] = useState<boolean>(false); // Start unencrypted to showcase fire
  useEffect(() => {
    if (currentStep !== 2) return;
    const interval = setInterval(() => {
      setIsEncrypted(prev => !prev);
      sound.click?.();
    }, 3200);
    return () => clearInterval(interval);
  }, [currentStep]);

  return (
    <div className="w-full flex flex-col gap-3.5 font-mono select-none">
      {/* 3 Main Points Top Hotbar */}
      <div className="bg-[#121420] border-2 border-[#2e334a] p-1.5 shadow-pixel">
        <div className="grid grid-cols-3 gap-2">
          {/* Point 1: Domain vs Hosting */}
          <button
            onClick={() => { sound.click(); onSubStepChange?.(0); }}
            className={`py-2.5 px-3 flex items-center justify-between cursor-pointer border-2 transition-all ${
              currentStep === 0
                ? 'bg-[#1e2640] border-[#FFAA00] text-[#FFAA00] shadow-pixel scale-[1.02]'
                : 'bg-[#090a10] border-[#22273a] text-zinc-400 hover:text-white'
            }`}
          >
            <div className="flex items-center gap-2">
              <Globe className="w-5 h-5 text-[#FFAA00]" />
              <span className="text-xs sm:text-sm font-black">01. DOMAIN & DNS</span>
            </div>
            <span className="text-[10px] font-bold hidden sm:inline text-zinc-500">Address vs Server</span>
          </button>

          {/* Point 2: Static vs Dynamic */}
          <button
            onClick={() => { sound.click(); onSubStepChange?.(1); }}
            className={`py-2.5 px-3 flex items-center justify-between cursor-pointer border-2 transition-all ${
              currentStep === 1
                ? 'bg-[#1e2640] border-[#55FFFF] text-[#55FFFF] shadow-pixel scale-[1.02]'
                : 'bg-[#090a10] border-[#22273a] text-zinc-400 hover:text-white'
            }`}
          >
            <div className="flex items-center gap-2">
              <Cloud className="w-5 h-5 text-[#55FFFF]" />
              <span className="text-xs sm:text-sm font-black">02. HOSTING TYPES</span>
            </div>
            <span className="text-[10px] font-bold hidden sm:inline text-zinc-500">Edge vs Servers</span>
          </button>

          {/* Point 3: SSL / HTTPS */}
          <button
            onClick={() => { sound.click(); onSubStepChange?.(2); }}
            className={`py-2.5 px-3 flex items-center justify-between cursor-pointer border-2 transition-all ${
              currentStep === 2
                ? 'bg-[#1e2640] border-[#55FF55] text-[#55FF55] shadow-pixel scale-[1.02]'
                : 'bg-[#090a10] border-[#22273a] text-zinc-400 hover:text-white'
            }`}
          >
            <div className="flex items-center gap-2">
              <Lock className="w-5 h-5 text-[#55FF55]" />
              <span className="text-xs sm:text-sm font-black">03. HTTPS & SSL</span>
            </div>
            <span className="text-[10px] font-bold hidden sm:inline text-zinc-500">Encryption Lock</span>
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
              {/* POINT 1: DOMAIN VS HOSTING */}
              {currentStep === 0 && (
                <>
                  <div className="flex items-center gap-2.5">
                    <span className="text-xs sm:text-sm font-black text-[#FFAA00] px-2.5 py-0.5 bg-[#FFAA00]/15 border border-[#FFAA00]/40">
                      #01
                    </span>
                    <h3 className="text-lg sm:text-xl font-black text-white font-sans uppercase">
                      Domain (Address) vs Hosting (Building)
                    </h3>
                  </div>

                  <p className="text-sm sm:text-base text-zinc-100 font-semibold leading-relaxed">
                    To make your code accessible to the world, you need two fundamental pieces working together:
                  </p>

                  <div className="p-3.5 bg-[#090a10] border border-[#2e334a] text-xs space-y-2">
                    <div className="flex items-start gap-2">
                      <strong className="text-[#FFAA00] shrink-0">1. Domain Name:</strong>
                      <span className="text-zinc-200">The human address (e.g. <code>notes.dev</code>). Points to an IP address via DNS.</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <strong className="text-[#55FFFF] shrink-0">2. Cloud Hosting:</strong>
                      <span className="text-zinc-200">The physical server computer running 24/7 in the cloud to serve files.</span>
                    </div>
                  </div>

                  <div className="p-3 bg-[#181b2c] border-l-4 border-[#FFAA00] text-xs sm:text-sm text-zinc-200 font-medium flex items-center gap-2">
                    <Lightbulb className="w-4 h-4 text-[#FFAA00] shrink-0" />
                    <span><strong>Takeaway:</strong> Domain is the signpost; Hosting is the house where your files live.</span>
                  </div>
                </>
              )}

              {/* POINT 2: STATIC VS DYNAMIC */}
              {currentStep === 1 && (
                <>
                  <div className="flex items-center gap-2.5">
                    <span className="text-xs sm:text-sm font-black text-[#55FFFF] px-2.5 py-0.5 bg-[#55FFFF]/15 border border-[#55FFFF]/40">
                      #02
                    </span>
                    <h3 className="text-lg sm:text-xl font-black text-white font-sans uppercase">
                      Static Edge Hosting vs Server Backends
                    </h3>
                  </div>

                  <p className="text-sm sm:text-base text-zinc-100 font-semibold leading-relaxed">
                    Choose the right host depending on what your application actually needs:
                  </p>

                  <div className="space-y-2 text-xs">
                    <div className="p-3 bg-[#090a10] border border-[#55FFFF]/60">
                      <strong className="text-[#55FFFF] block mb-1">Static Edge Hosting (Vercel, Netlify, Cloudflare):</strong>
                      <p className="text-zinc-300">Perfect for React/HTML frontends. Cached globally across 300+ edge cities ($0/mo).</p>
                    </div>
                    <div className="p-3 bg-[#090a10] border border-[#FFAA00]/60">
                      <strong className="text-[#FFAA00] block mb-1">Backend Containers (Render, Railway, Fly.io):</strong>
                      <p className="text-zinc-300">Required for active Node.js servers, WebSockets, background cron jobs, and database connections.</p>
                    </div>
                  </div>

                  <div className="p-3 bg-[#181b2c] border-l-4 border-[#55FFFF] text-xs sm:text-sm text-zinc-200 font-medium flex items-center gap-2">
                    <Lightbulb className="w-4 h-4 text-[#55FFFF] shrink-0" />
                    <span><strong>Takeaway:</strong> Static frontend = Edge CDN ($0). Full-stack backend = Container host.</span>
                  </div>
                </>
              )}

              {/* POINT 3: HTTPS & SSL */}
              {currentStep === 2 && (
                <>
                  <div className="flex items-center gap-2.5">
                    <span className="text-xs sm:text-sm font-black text-[#55FF55] px-2.5 py-0.5 bg-[#55FF55]/15 border border-[#55FF55]/40">
                      #03
                    </span>
                    <h3 className="text-lg sm:text-xl font-black text-white font-sans uppercase">
                      HTTPS & SSL: The Green Lock
                    </h3>
                  </div>

                  <p className="text-sm sm:text-base text-zinc-100 font-semibold leading-relaxed">
                    <strong>HTTPS</strong> encrypts traffic between user and server. Without it (HTTP), public Wi-Fi sniffers can steal passwords directly out of the air.
                  </p>

                  <div className="p-3.5 bg-[#090a10] border border-[#2e334a] text-xs space-y-1.5 font-mono">
                    <div className="text-zinc-300">
                      • <strong className="text-[#FF5555]">HTTP (Unencrypted):</strong> Passwords sent in plain text over the air (Data on Fire!).<br />
                      • <strong className="text-[#55FF55]">HTTPS (SSL Lock):</strong> Unbreakable cryptographic shield protecting every packet.
                    </div>
                  </div>

                  <div className="p-3 bg-[#181b2c] border-l-4 border-[#55FF55] text-xs sm:text-sm text-zinc-200 font-medium flex items-center gap-2">
                    <Lightbulb className="w-4 h-4 text-[#55FF55] shrink-0" />
                    <span><strong>Takeaway:</strong> Modern hosts provide free automated SSL certificates with 1-click.</span>
                  </div>
                </>
              )}
            </motion.div>
          </AnimatePresence>

          <div className="pt-3.5 border-t border-[#2e334a] text-xs sm:text-sm text-zinc-400 flex items-center justify-between font-bold">
            <span>Press Next or Hotbar to advance</span>
            <span className="text-[#55FFFF]">Module 07: Hosting</span>
          </div>
        </div>

        {/* RIGHT SECTION: Visual Server Engine Preview */}
        <div className="bg-[#090a10] border-2 border-[#55FFFF] p-6 shadow-pixel flex flex-col">
          {/* Header */}
          <div className="flex items-center gap-2 pb-3 border-b border-[#2e334a] text-xs sm:text-sm font-bold text-zinc-300">
            <Server className="w-5 h-5 text-[#55FFFF]" />
            <span>GLOBAL NETWORK ENGINE</span>
          </div>

          {/* Dynamic Animation Viewport - Centered Vertically & Horizontally */}
          <div className="flex-1 flex flex-col items-center justify-center py-6 w-full my-auto">
            {/* AUTOMATION 1: DNS 3-Hop Resolution Highway */}
            {currentStep === 0 && (
              <div className="w-full max-w-md mx-auto space-y-3 font-mono">
                <div className="p-4 bg-[#121420] border-2 border-[#FFAA00] shadow-pixel space-y-3">
                  <div className="flex items-center justify-between border-b border-[#2e334a] pb-2 text-xs">
                    <span className="text-zinc-400 font-bold">DNS RESOLUTION:</span>
                    <span className="text-[#FFAA00] font-bold">15ms LATENCY</span>
                  </div>

                  {/* 3 Hops */}
                  <div className="space-y-1.5 text-xs">
                    <div className={`p-2 border transition-all ${
                      dnsHop === 0 ? 'bg-[#181b2c] border-[#FFAA00] text-white font-bold' : 'bg-[#090a10] border-[#2e334a] text-zinc-400'
                    }`}>
                      <div className="flex items-center justify-between">
                        <span>1. BROWSER REQUEST</span>
                        <span className="text-[#FFAA00]">notes.dev</span>
                      </div>
                    </div>

                    <div className={`p-2 border transition-all ${
                      dnsHop === 1 ? 'bg-[#181b2c] border-[#55FFFF] text-white font-bold' : 'bg-[#090a10] border-[#2e334a] text-zinc-400'
                    }`}>
                      <div className="flex items-center justify-between">
                        <span>2. DNS PHONEBOOK LOOKUP</span>
                        <span className="text-[#55FFFF]">76.76.21.21</span>
                      </div>
                    </div>

                    <div className={`p-2 border transition-all ${
                      dnsHop === 2 ? 'bg-[#181b2c] border-[#55FF55] text-white font-bold' : 'bg-[#090a10] border-[#2e334a] text-zinc-400'
                    }`}>
                      <div className="flex items-center justify-between">
                        <span>3. CLOUD SERVER CONNECTED</span>
                        <span className="text-[#55FF55]">✓ 200 OK</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-2 bg-[#091f14] border border-[#55FF55]/60 text-center text-[#55FF55] text-xs font-bold">
                    ✓ Global DNS routes visitors to nearest edge server in 15ms.
                  </div>
                </div>
              </div>
            )}

            {/* AUTOMATION 2: Edge CDN vs Backend Container Comparison */}
            {currentStep === 1 && (
              <div className="w-full max-w-md mx-auto space-y-3 font-mono">
                <div className="p-4 bg-[#121420] border-2 border-[#55FFFF] shadow-pixel space-y-3">
                  <div className="flex items-center justify-between border-b border-[#2e334a] pb-2 text-xs">
                    <span className="text-zinc-400 font-bold">INFRASTRUCTURE COMPARISON</span>
                    <span className="text-[#55FFFF] font-bold">EDGE VS CONTAINER</span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="p-3 bg-[#090a10] border border-[#55FFFF] space-y-1.5">
                      <strong className="text-[#55FFFF] block text-xs">EDGE CDN</strong>
                      <p className="text-zinc-300 text-[11px]">• HTML/CSS/JS</p>
                      <p className="text-zinc-300 text-[11px]">• Instant global cache</p>
                      <p className="text-[#55FF55] text-[10px] font-bold">Cost: $0/month</p>
                    </div>

                    <div className="p-3 bg-[#090a10] border border-[#FFAA00] space-y-1.5">
                      <strong className="text-[#FFAA00] block text-xs">NODE CONTAINER</strong>
                      <p className="text-zinc-300 text-[11px]">• Server logic & APIs</p>
                      <p className="text-zinc-300 text-[11px]">• Database pooling</p>
                      <p className="text-[#FFAA00] text-[10px] font-bold">Cost: $5-20/mo</p>
                    </div>
                  </div>

                  <div className="p-2 bg-[#181b2c] border border-[#55FFFF]/40 text-center text-[#55FFFF] text-xs font-bold">
                    Split stack: Static frontend on Vercel + Backend on Render/Railway.
                  </div>
                </div>
              </div>
            )}

            {/* AUTOMATION 3: Live HTTPS Shield vs HTTP Real Fire Animation */}
            {currentStep === 2 && (
              <div className="w-full max-w-md mx-auto space-y-3 font-mono">
                <div
                  className={`p-4 bg-[#121420] border-2 shadow-pixel space-y-3 relative transition-all duration-500 overflow-hidden ${
                    isEncrypted ? 'border-[#55FF55] shadow-glow-diamond' : 'border-[#FF3300] shadow-[0_0_20px_rgba(255,50,0,0.4)]'
                  }`}
                >
                  {/* REAL FIRE FLAMES ANIMATION WHEN UNENCRYPTED */}
                  <AnimatePresence>
                    {!isEncrypted && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <FireFlamesGraphic />
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Header & Toggle Button */}
                  <div className="flex items-center justify-between border-b border-[#2e334a] pb-2 text-xs relative z-20">
                    <span className="text-zinc-300 font-bold flex items-center gap-1.5">
                      <Radio className="w-3.5 h-3.5 text-[#55FFFF] animate-pulse" />
                      <span>COFFEE SHOP WI-FI:</span>
                    </span>

                    <button
                      onClick={() => {
                        sound.click();
                        setIsEncrypted(!isEncrypted);
                      }}
                      className={`px-2.5 py-1 text-xs font-black border cursor-pointer transition-all flex items-center gap-1.5 ${
                        isEncrypted
                          ? 'bg-[#55FF55]/20 border-[#55FF55] text-[#55FF55]'
                          : 'bg-[#FF3300] border-[#FF6600] text-white shadow-glow-diamond animate-pulse'
                      }`}
                    >
                      {isEncrypted ? <ShieldCheck className="w-3.5 h-3.5" /> : <Flame className="w-3.5 h-3.5" />}
                      <span>{isEncrypted ? 'HTTPS (SECURE)' : 'HTTP (ON FIRE!)'}</span>
                    </button>
                  </div>

                  {/* Wire Payload Box */}
                  <div className="p-3 bg-[#090a10]/90 border border-[#2e334a] space-y-2 text-xs font-mono relative z-20 backdrop-blur-xs">
                    <div className="flex items-center justify-between text-zinc-400 text-[10px]">
                      <span>TRANSMITTED OVER PUBLIC AIR:</span>
                      {isEncrypted ? (
                        <span className="text-[#55FF55] font-bold flex items-center gap-1">
                          <Lock className="w-3.5 h-3.5" /> SSL SHIELD ON
                        </span>
                      ) : (
                        <span className="text-[#FF4400] font-bold flex items-center gap-1 animate-bounce">
                          <Flame className="w-3.5 h-3.5" /> SNIFFER ATTACK
                        </span>
                      )}
                    </div>

                    {/* The Payload */}
                    <div
                      className={`p-2.5 border transition-all text-xs font-bold ${
                        isEncrypted
                          ? 'bg-[#091f14] border-[#55FF55] text-[#55FF55]'
                          : 'bg-[#2a0808] border-[#FF3300] text-[#FFAA00] animate-pulse'
                      }`}
                    >
                      {isEncrypted ? (
                        <div className="space-y-0.5">
                          <span className="text-[10px] text-zinc-400 block font-normal">ENCRYPTED CIPHERTEXT:</span>
                          <span className="break-all text-[11px]">e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b</span>
                        </div>
                      ) : (
                        <div className="space-y-0.5">
                          <span className="text-[10px] text-[#FF5555] block font-black">EXPOSED PLAIN TEXT:</span>
                          <span className="text-white text-xs">password=SuperSecret123&user=Alex</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Status Footer */}
                  <div
                    className={`p-2 border text-center text-xs font-bold relative z-20 transition-colors ${
                      isEncrypted
                        ? 'bg-[#181b2c] border-[#55FF55]/40 text-[#55FF55]'
                        : 'bg-[#330c0c] border-[#FF3300] text-[#FF8888]'
                    }`}
                  >
                    {isEncrypted
                      ? '✓ Green Padlock: Cryptographic shield blocks eavesdroppers.'
                      : '🔥 Without SSL, anyone on the Wi-Fi can see your raw passwords!'}
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
