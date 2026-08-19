import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRightLeft,
  FileCode,
  Layers,
  Server,
  Terminal,
  Send,
  Database,
  CheckCircle2,
  PlusCircle,
  Edit3,
  Trash2,
  Globe,
  UtensilsCrossed,
  Sparkles,
  ArrowRight,
  Package,
  HardDrive,
  Cpu,
  Zap,
  Key
} from 'lucide-react';
import { sound } from '../../utils/sound';

interface Slide5Props {
  subStep?: number;
  onSubStepChange?: (subStep: number) => void;
}

// High-Impact Seamless Motion Graphic: 4 Items Merged -> Forward Accelerating Packet -> DB Rack Offload
const MessengerPackingOffloadGraphic: React.FC = () => {
  // Stage: 0 = 4 chips merging into 1 box, 1 = Accelerating transit Left -> Right, 2 = Offloading to DB racks
  const [stage, setStage] = useState<number>(0);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (stage === 0) {
      // 4 Chips merge in 0.9s, then sealed box stays on screen for 1.7s (Total 2.6s)
      timer = setTimeout(() => {
        sound.packetPing?.();
        setStage(1);
      }, 2600);
    } else if (stage === 1) {
      // Accelerating Left -> Right Transit + hold for 1 more second (Total 2.8s)
      timer = setTimeout(() => {
        sound.success?.();
        setStage(2);
      }, 2800);
    } else if (stage === 2) {
      // Offloading into 4 server racks (3.0s), then restart
      timer = setTimeout(() => {
        setStage(0);
      }, 3000);
    }
    return () => clearTimeout(timer);
  }, [stage]);

  return (
    <div className="w-full max-w-md mx-auto space-y-3 font-mono">
      {/* 3-Station Pipeline Tracker */}
      <div className="grid grid-cols-3 gap-1.5 text-center text-[10px] font-bold">
        <div
          className={`p-1.5 border-2 transition-all ${
            stage === 0
              ? 'bg-[#1e2640] border-[#FFAA00] text-[#FFAA00] shadow-glow-diamond'
              : 'bg-[#090a10] border-[#22273a] text-zinc-500'
          }`}
        >
          <span>1. PACK 4 FIELDS</span>
        </div>
        <div
          className={`p-1.5 border-2 transition-all ${
            stage === 1
              ? 'bg-[#1e2640] border-[#55FFFF] text-[#55FFFF] shadow-glow-diamond'
              : 'bg-[#090a10] border-[#22273a] text-zinc-500'
          }`}
        >
          <span>2. API TRANSIT &gt;&gt;</span>
        </div>
        <div
          className={`p-1.5 border-2 transition-all ${
            stage === 2
              ? 'bg-[#1e2640] border-[#55FF55] text-[#55FF55] shadow-glow-diamond'
              : 'bg-[#090a10] border-[#22273a] text-zinc-500'
          }`}
        >
          <span>3. DB RACK OFFLOAD</span>
        </div>
      </div>

      {/* Main Dynamic Viewport Box */}
      <div className="p-4 bg-[#121420] border-2 border-[#FFAA00] shadow-pixel min-h-[240px] flex flex-col justify-between">
        <AnimatePresence mode="wait">
          {/* STAGE 0: ALL 4 DATA CHIPS MERGING INTO 1 SINGLE BOX */}
          {stage === 0 && (
            <motion.div
              key="stage-merge"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-3"
            >
              <div className="flex items-center justify-between text-[11px] font-bold text-zinc-400">
                <span>CLIENT BROWSER:</span>
                <span className="text-[#FFAA00] animate-pulse">4 FIELDS MERGING INTO 1 PACKET</span>
              </div>

              {/* 4 Data Chips Converging */}
              <div className="relative h-24 flex items-center justify-center">
                {/* Chip 1: User */}
                <motion.div
                  initial={{ x: -70, y: -25, opacity: 1, scale: 1 }}
                  animate={{ x: 0, y: 0, opacity: 0, scale: 0.5 }}
                  transition={{ duration: 0.7, delay: 0.1, ease: 'easeInOut' }}
                  className="absolute px-2 py-1 bg-[#090a10] border border-[#FFAA00] text-[#FFAA00] text-[10px] font-bold z-10"
                >
                  1. User: Alex (101)
                </motion.div>

                {/* Chip 2: Title */}
                <motion.div
                  initial={{ x: 70, y: -25, opacity: 1, scale: 1 }}
                  animate={{ x: 0, y: 0, opacity: 0, scale: 0.5 }}
                  transition={{ duration: 0.7, delay: 0.1, ease: 'easeInOut' }}
                  className="absolute px-2 py-1 bg-[#090a10] border border-[#55FFFF] text-[#55FFFF] text-[10px] font-bold z-10"
                >
                  2. Title: "Math HW"
                </motion.div>

                {/* Chip 3: Token */}
                <motion.div
                  initial={{ x: -70, y: 25, opacity: 1, scale: 1 }}
                  animate={{ x: 0, y: 0, opacity: 0, scale: 0.5 }}
                  transition={{ duration: 0.7, delay: 0.1, ease: 'easeInOut' }}
                  className="absolute px-2 py-1 bg-[#090a10] border border-[#55FF55] text-[#55FF55] text-[10px] font-bold z-10"
                >
                  3. Token: Bearer JWT
                </motion.div>

                {/* Chip 4: Action */}
                <motion.div
                  initial={{ x: 70, y: 25, opacity: 1, scale: 1 }}
                  animate={{ x: 0, y: 0, opacity: 0, scale: 0.5 }}
                  transition={{ duration: 0.7, delay: 0.1, ease: 'easeInOut' }}
                  className="absolute px-2 py-1 bg-[#090a10] border border-[#FF5555] text-[#FF5555] text-[10px] font-bold z-10"
                >
                  4. POST /api/notes
                </motion.div>

                {/* The 1 Unified Target Box that emerges and stays */}
                <motion.div
                  initial={{ scale: 0.4, opacity: 0 }}
                  animate={{ scale: [0.4, 1.08, 1], opacity: 1 }}
                  transition={{ delay: 0.7, duration: 0.4 }}
                  className="p-3 bg-[#181b2c] border-2 border-[#FFAA00] flex items-center gap-2 text-xs font-black text-white shadow-glow-diamond"
                >
                  <Package className="w-5 h-5 text-[#FFAA00]" />
                  <span>1 SEALED JSON PACKET (4 FIELDS)</span>
                </motion.div>
              </div>

              <p className="text-[10px] text-center text-zinc-400">
                📦 All 4 fields compressed into a single HTTP payload envelope.
              </p>
            </motion.div>
          )}

          {/* STAGE 1: ACCELERATING TRANSIT LEFT -> RIGHT (DOES NOT COME BACK) */}
          {stage === 1 && (
            <motion.div
              key="stage-transit"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-4 my-auto"
            >
              <div className="flex items-center justify-between text-[11px] font-bold text-zinc-400">
                <span>API COURIER PIPE:</span>
                <span className="text-[#55FFFF]">FORWARD TRANSIT &gt;&gt;</span>
              </div>

              {/* Accelerating forward track */}
              <div className="p-3 bg-[#090a10] border border-[#55FFFF] relative overflow-hidden">
                <div className="flex items-center justify-between text-xs font-mono font-bold text-zinc-400 pb-2 border-b border-[#2e334a]">
                  <span className="text-[#FFAA00]">[STAGE 1: PACKAGED]</span>
                  <span className="text-[#55FFFF] text-[10px] animate-pulse">&gt;&gt;&gt; ACCELERATING &gt;&gt;&gt;</span>
                  <span className="text-[#55FF55]">[STAGE 3: DATABASE]</span>
                </div>

                {/* Single-direction accelerating packet */}
                <div className="mt-3 w-full bg-[#181b2c] h-8 relative flex items-center overflow-hidden">
                  <motion.div
                    initial={{ x: -10 }}
                    animate={{ x: 300 }}
                    transition={{
                      duration: 1.5,
                      ease: [0.7, 0, 0.84, 0] // Strong exponential forward acceleration
                    }}
                    className="px-3 py-1 bg-[#55FFFF] text-black text-[10px] font-black flex items-center gap-1.5 shadow-glow-cyan shrink-0"
                  >
                    <Package className="w-4 h-4" />
                    <span>PAYLOAD.JSON (4 FIELDS)</span>
                  </motion.div>
                </div>
              </div>

              <p className="text-[10px] text-center text-[#55FFFF] font-bold">
                🚀 The API courier accelerates the packet directly across the wire into the backend.
              </p>
            </motion.div>
          )}

          {/* STAGE 2: DATABASE OFFLOADING DIRECTLY INTO 4 SERVER RACK SLOTS */}
          {stage === 2 && (
            <motion.div
              key="stage-offload"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-2"
            >
              <div className="flex items-center justify-between text-[11px] font-bold text-zinc-400">
                <div className="flex items-center gap-1.5 text-[#55FF55]">
                  <Database className="w-4 h-4" />
                  <span>DATABASE SERVER RACKS:</span>
                </div>
                <span className="text-[#55FF55] font-black text-[10px]">OFFLOADING ALL 4</span>
              </div>

              {/* 4 Server Rack Slots receiving offloaded data */}
              <div className="space-y-1">
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                  className="p-1.5 bg-[#090a10] border border-[#55FF55] flex items-center justify-between text-xs"
                >
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#55FF55] animate-ping" />
                    <HardDrive className="w-3.5 h-3.5 text-[#55FF55]" />
                    <span className="text-white font-bold text-[11px]">RACK 1: [User: Alex (101)]</span>
                  </div>
                  <span className="text-[#55FF55] font-black text-[10px]">SAVED</span>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.25 }}
                  className="p-1.5 bg-[#090a10] border border-[#55FF55] flex items-center justify-between text-xs"
                >
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#55FF55] animate-ping" />
                    <HardDrive className="w-3.5 h-3.5 text-[#55FF55]" />
                    <span className="text-white font-bold text-[11px]">RACK 2: [Title: "Math HW"]</span>
                  </div>
                  <span className="text-[#55FF55] font-black text-[10px]">INDEXED</span>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  className="p-1.5 bg-[#090a10] border border-[#55FF55] flex items-center justify-between text-xs"
                >
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#55FF55] animate-ping" />
                    <HardDrive className="w-3.5 h-3.5 text-[#55FF55]" />
                    <span className="text-white font-bold text-[11px]">RACK 3: [Token: Verified]</span>
                  </div>
                  <span className="text-[#55FF55] font-black text-[10px]">AUTHENTICATED</span>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.55 }}
                  className="p-1.5 bg-[#090a10] border border-[#55FF55] flex items-center justify-between text-xs"
                >
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#55FF55] animate-ping" />
                    <HardDrive className="w-3.5 h-3.5 text-[#55FF55]" />
                    <span className="text-white font-bold text-[11px]">RACK 4: [Row #9021 Inserted]</span>
                  </div>
                  <span className="text-[#55FF55] font-black text-[10px]">COMMITTED</span>
                </motion.div>
              </div>

              <div className="p-1.5 bg-[#091f14] border border-[#55FF55]/60 text-center text-[#55FF55] text-[10px] font-black flex items-center justify-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>201 CREATED: ALL 4 FIELDS COMMITTED TO DISK</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <p className="text-center text-[11px] text-zinc-400">
        ⚡ 4 fields merge into 1 box ➔ Accelerates right through API ➔ Offloads to DB racks.
      </p>
    </div>
  );
};

export const Slide5ApiRestaurant: React.FC<Slide5Props> = ({
  subStep = 0,
  onSubStepChange,
}) => {
  const currentStep = Math.min(2, Math.max(0, subStep));

  // --- AUTOMATION 2: JSON Universal Translator (Python / JS / iOS) ---
  const [activeLang, setActiveLang] = useState<'js' | 'python' | 'swift'>('js');
  useEffect(() => {
    if (currentStep !== 1) return;
    const interval = setInterval(() => {
      setActiveLang(prev => (prev === 'js' ? 'python' : prev === 'python' ? 'swift' : 'js'));
    }, 2400);
    return () => clearInterval(interval);
  }, [currentStep]);

  // --- AUTOMATION 3: The 4 Golden Verbs (GET -> POST -> PUT -> DELETE) ---
  const [activeVerb, setActiveVerb] = useState<'GET' | 'POST' | 'PUT' | 'DELETE'>('GET');
  useEffect(() => {
    if (currentStep !== 2) return;
    const verbs: ('GET' | 'POST' | 'PUT' | 'DELETE')[] = ['GET', 'POST', 'PUT', 'DELETE'];
    let idx = 0;
    const interval = setInterval(() => {
      idx = (idx + 1) % verbs.length;
      setActiveVerb(verbs[idx]);
    }, 2500);
    return () => clearInterval(interval);
  }, [currentStep]);

  return (
    <div className="w-full flex flex-col gap-3.5 font-mono select-none">
      {/* 3 Main Points Top Hotbar */}
      <div className="bg-[#121420] border-2 border-[#2e334a] p-1.5 shadow-pixel">
        <div className="grid grid-cols-3 gap-2">
          {/* Point 1: The Messenger */}
          <button
            onClick={() => { sound.click(); onSubStepChange?.(0); }}
            className={`py-2.5 px-3 flex items-center justify-between cursor-pointer border-2 transition-all ${
              currentStep === 0
                ? 'bg-[#1e2640] border-[#FFAA00] text-[#FFAA00] shadow-pixel scale-[1.02]'
                : 'bg-[#090a10] border-[#22273a] text-zinc-400 hover:text-white'
            }`}
          >
            <div className="flex items-center gap-2">
              <UtensilsCrossed className="w-5 h-5 text-[#FFAA00]" />
              <span className="text-xs sm:text-sm font-black">01. THE MESSENGER</span>
            </div>
            <span className="text-[10px] font-bold hidden sm:inline text-zinc-500">Packing & Offloading</span>
          </button>

          {/* Point 2: Universal Language */}
          <button
            onClick={() => { sound.click(); onSubStepChange?.(1); }}
            className={`py-2.5 px-3 flex items-center justify-between cursor-pointer border-2 transition-all ${
              currentStep === 1
                ? 'bg-[#1e2640] border-[#55FFFF] text-[#55FFFF] shadow-pixel scale-[1.02]'
                : 'bg-[#090a10] border-[#22273a] text-zinc-400 hover:text-white'
            }`}
          >
            <div className="flex items-center gap-2">
              <FileCode className="w-5 h-5 text-[#55FFFF]" />
              <span className="text-xs sm:text-sm font-black">02. JSON FORMAT</span>
            </div>
            <span className="text-[10px] font-bold hidden sm:inline text-zinc-500">Universal Language</span>
          </button>

          {/* Point 3: 4 Golden Verbs */}
          <button
            onClick={() => { sound.click(); onSubStepChange?.(2); }}
            className={`py-2.5 px-3 flex items-center justify-between cursor-pointer border-2 transition-all ${
              currentStep === 2
                ? 'bg-[#1e2640] border-[#55FF55] text-[#55FF55] shadow-pixel scale-[1.02]'
                : 'bg-[#090a10] border-[#22273a] text-zinc-400 hover:text-white'
            }`}
          >
            <div className="flex items-center gap-2">
              <ArrowRightLeft className="w-5 h-5 text-[#55FF55]" />
              <span className="text-xs sm:text-sm font-black">03. 4 GOLDEN VERBS</span>
            </div>
            <span className="text-[10px] font-bold hidden sm:inline text-zinc-500">CRUD Actions</span>
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
              {/* POINT 1: THE MESSENGER (PACKING -> API TRANSIT -> RACK OFFLOAD) */}
              {currentStep === 0 && (
                <>
                  <div className="flex items-center gap-2.5">
                    <span className="text-xs sm:text-sm font-black text-[#FFAA00] px-2.5 py-0.5 bg-[#FFAA00]/15 border border-[#FFAA00]/40">
                      #01
                    </span>
                    <h3 className="text-lg sm:text-xl font-black text-white font-sans uppercase">
                      The Messenger: Packing & Offloading
                    </h3>
                  </div>

                  <p className="text-sm sm:text-base text-zinc-100 font-semibold leading-relaxed">
                    An <strong>API (Application Programming Interface)</strong> is the digital courier. It packs client input into a structured payload, carries it over the network, and offloads it into server storage.
                  </p>

                  <div className="p-3.5 bg-[#090a10] border border-[#2e334a] text-xs space-y-2">
                    <div className="flex items-start gap-2">
                      <strong className="text-[#FFAA00] shrink-0">1. Packing 4 Fields:</strong>
                      <span className="text-zinc-200">The browser merges user data (`title`, `user_id`, `token`, `method`) into 1 JSON package.</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <strong className="text-[#55FFFF] shrink-0">2. API Forward Transit:</strong>
                      <span className="text-zinc-200">Accelerates the packet across HTTP/2 network pipes directly to the backend.</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <strong className="text-[#55FF55] shrink-0">3. Offload to Racks:</strong>
                      <span className="text-zinc-200">The server database unpacks fields and commits them directly into persistent disk racks.</span>
                    </div>
                  </div>

                  <div className="p-3 bg-[#181b2c] border-l-4 border-[#FFAA00] text-xs sm:text-sm text-zinc-200 font-medium">
                    💡 <strong>Takeaway:</strong> The browser never touches the database directly. The API is the strictly regulated courier.
                  </div>
                </>
              )}

              {/* POINT 2: UNIVERSAL LANGUAGE (JSON) */}
              {currentStep === 1 && (
                <>
                  <div className="flex items-center gap-2.5">
                    <span className="text-xs sm:text-sm font-black text-[#55FFFF] px-2.5 py-0.5 bg-[#55FFFF]/15 border border-[#55FFFF]/40">
                      #02
                    </span>
                    <h3 className="text-lg sm:text-xl font-black text-white font-sans uppercase">
                      JSON: The Universal Web Language
                    </h3>
                  </div>

                  <p className="text-sm sm:text-base text-zinc-100 font-semibold leading-relaxed">
                    Servers and phones speak different languages. <strong>JSON (JavaScript Object Notation)</strong> is the universal text format that every device understands.
                  </p>

                  <div className="p-3 bg-[#090a10] border border-[#2e334a] text-xs space-y-1.5 font-mono">
                    <span className="text-[10px] text-zinc-400 font-bold block mb-1">STANDARD JSON PAYLOAD STRUCTURE:</span>
                    <div className="text-[#55FFFF]">
                      &#123;<br />
                      &nbsp;&nbsp;<span className="text-[#FFAA00]">"id"</span>: <span className="text-[#55FF55]">101</span>,<br />
                      &nbsp;&nbsp;<span className="text-[#FFAA00]">"title"</span>: <span className="text-[#FF8888]">"Calculus Notes"</span>,<br />
                      &nbsp;&nbsp;<span className="text-[#FFAA00]">"isVerified"</span>: <span className="text-[#55FF55]">true</span><br />
                      &#125;
                    </div>
                  </div>

                  <div className="p-3 bg-[#181b2c] border-l-4 border-[#55FFFF] text-xs sm:text-sm text-zinc-200 font-medium">
                    💡 <strong>Takeaway:</strong> Python backend, React website, and iPhone app all communicate seamlessly through JSON.
                  </div>
                </>
              )}

              {/* POINT 3: THE 4 GOLDEN VERBS (CRUD) */}
              {currentStep === 2 && (
                <>
                  <div className="flex items-center gap-2.5">
                    <span className="text-xs sm:text-sm font-black text-[#55FF55] px-2.5 py-0.5 bg-[#55FF55]/15 border border-[#55FF55]/40">
                      #03
                    </span>
                    <h3 className="text-lg sm:text-xl font-black text-white font-sans uppercase">
                      The 4 Golden HTTP Verbs
                    </h3>
                  </div>

                  <p className="text-sm sm:text-base text-zinc-100 font-semibold leading-relaxed">
                    Every web interaction comes down to <strong>4 fundamental HTTP methods</strong>:
                  </p>

                  <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                    <div className="p-2.5 bg-[#090a10] border border-[#55FFFF]/60">
                      <strong className="text-[#55FFFF] block">GET</strong>
                      <span className="text-zinc-300 text-[11px]">Read & fetch data</span>
                    </div>
                    <div className="p-2.5 bg-[#090a10] border border-[#55FF55]/60">
                      <strong className="text-[#55FF55] block">POST</strong>
                      <span className="text-zinc-300 text-[11px]">Create new record</span>
                    </div>
                    <div className="p-2.5 bg-[#090a10] border border-[#FFAA00]/60">
                      <strong className="text-[#FFAA00] block">PUT / PATCH</strong>
                      <span className="text-zinc-300 text-[11px]">Update existing data</span>
                    </div>
                    <div className="p-2.5 bg-[#090a10] border border-[#FF5555]/60">
                      <strong className="text-[#FF5555] block">DELETE</strong>
                      <span className="text-zinc-300 text-[11px]">Remove record</span>
                    </div>
                  </div>

                  <div className="p-3 bg-[#181b2c] border-l-4 border-[#55FF55] text-xs sm:text-sm text-zinc-200 font-medium">
                    💡 <strong>Takeaway:</strong> REST APIs map user intentions directly into these 4 standard HTTP operations.
                  </div>
                </>
              )}
            </motion.div>
          </AnimatePresence>

          <div className="pt-3.5 border-t border-[#2e334a] text-xs sm:text-sm text-zinc-400 flex items-center justify-between font-bold">
            <span>Press Next or Hotbar to advance</span>
            <span className="text-[#55FFFF]">Module 04: APIs</span>
          </div>
        </div>

        {/* RIGHT SECTION: Visual Server Engine Preview */}
        <div className="bg-[#090a10] border-2 border-[#55FFFF] p-6 shadow-pixel flex flex-col">
          {/* Header */}
          <div className="flex items-center gap-2 pb-3 border-b border-[#2e334a] text-xs sm:text-sm font-bold text-zinc-300">
            <Server className="w-5 h-5 text-[#55FFFF]" />
            <span>API MESSENGER PREVIEW</span>
          </div>

          {/* Dynamic Animation Viewport - Centered Vertically & Horizontally */}
          <div className="flex-1 flex flex-col items-center justify-center py-6 w-full my-auto">
            {/* AUTOMATION 1: 4 Items Merged -> Accelerating Transit -> DB Rack Offload */}
            {currentStep === 0 && (
              <MessengerPackingOffloadGraphic />
            )}

            {/* AUTOMATION 2: JSON Multi-Language Interoperability */}
            {currentStep === 1 && (
              <div className="w-full max-w-md mx-auto space-y-3">
                <div className="p-4 bg-[#121420] border-2 border-[#55FFFF] shadow-pixel text-xs space-y-3">
                  {/* Language Tab Switcher */}
                  <div className="flex items-center justify-between border-b border-[#2e334a] pb-2 text-[11px]">
                    <span className="text-zinc-400 font-bold">PARSING ENGINE:</span>
                    <div className="flex gap-2">
                      <span className={`px-2 py-0.5 border ${activeLang === 'js' ? 'border-[#55FFFF] text-[#55FFFF] bg-[#55FFFF]/15 font-bold' : 'border-transparent text-zinc-500'}`}>JS</span>
                      <span className={`px-2 py-0.5 border ${activeLang === 'python' ? 'border-[#FFAA00] text-[#FFAA00] bg-[#FFAA00]/15 font-bold' : 'border-transparent text-zinc-500'}`}>Python</span>
                      <span className={`px-2 py-0.5 border ${activeLang === 'swift' ? 'border-[#FF5555] text-[#FF5555] bg-[#FF5555]/15 font-bold' : 'border-transparent text-zinc-500'}`}>iOS Swift</span>
                    </div>
                  </div>

                  {/* Active Code Parsing Box */}
                  <div className="p-3 bg-[#090a10] border border-[#2e334a] font-mono text-xs">
                    <AnimatePresence mode="wait">
                      {activeLang === 'js' && (
                        <motion.div
                          key="code-js"
                          initial={{ opacity: 0, y: 5 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -5 }}
                          className="space-y-1"
                        >
                          <span className="text-[10px] text-[#55FFFF] block font-bold">// JavaScript Web App</span>
                          <code className="text-zinc-200 block">
                            const data = await res.json();<br />
                            console.log(data.title); <span className="text-[#55FF55]">→ "Calculus Notes"</span>
                          </code>
                        </motion.div>
                      )}
                      {activeLang === 'python' && (
                        <motion.div
                          key="code-py"
                          initial={{ opacity: 0, y: 5 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -5 }}
                          className="space-y-1"
                        >
                          <span className="text-[10px] text-[#FFAA00] block font-bold"># Python Backend Worker</span>
                          <code className="text-zinc-200 block">
                            data = response.json()<br />
                            print(data["title"]) <span className="text-[#55FF55]">→ "Calculus Notes"</span>
                          </code>
                        </motion.div>
                      )}
                      {activeLang === 'swift' && (
                        <motion.div
                          key="code-swift"
                          initial={{ opacity: 0, y: 5 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -5 }}
                          className="space-y-1"
                        >
                          <span className="text-[10px] text-[#FF5555] block font-bold">// Swift iPhone App</span>
                          <code className="text-zinc-200 block">
                            let note = try decoder.decode(Note.self)<br />
                            Text(note.title) <span className="text-[#55FF55]">→ "Calculus Notes"</span>
                          </code>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <div className="p-2 bg-[#181b2c] border border-[#55FFFF]/40 text-center text-[#55FF55] text-xs font-bold">
                    ✓ Same JSON payload decoded across every platform with 0 conversion errors.
                  </div>
                </div>

                <p className="text-center text-[11px] text-zinc-400">
                  🌐 JSON provides 100% universal interoperability across all devices.
                </p>
              </div>
            )}

            {/* AUTOMATION 3: The 4 Golden Verbs Live Simulation */}
            {currentStep === 2 && (
              <div className="w-full max-w-md mx-auto space-y-3">
                <div className="p-4 bg-[#121420] border-2 border-[#55FF55] shadow-pixel text-xs space-y-3">
                  <div className="flex items-center justify-between border-b border-[#2e334a] pb-2">
                    <span className="text-zinc-400 font-bold text-[11px]">ACTIVE HTTP INSTRUCTION:</span>
                    <span className={`px-2.5 py-0.5 text-xs font-black border ${
                      activeVerb === 'GET' ? 'bg-[#55FFFF]/20 border-[#55FFFF] text-[#55FFFF]' :
                      activeVerb === 'POST' ? 'bg-[#55FF55]/20 border-[#55FF55] text-[#55FF55]' :
                      activeVerb === 'PUT' ? 'bg-[#FFAA00]/20 border-[#FFAA00] text-[#FFAA00]' :
                      'bg-[#FF5555]/20 border-[#FF5555] text-[#FF5555]'
                    }`}>
                      {activeVerb}
                    </span>
                  </div>

                  {/* Dynamic Verb Action Window */}
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeVerb}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="p-3 bg-[#090a10] border border-[#2e334a] space-y-2 font-mono"
                    >
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-zinc-400">ENDPOINT:</span>
                        <code className="text-white font-bold">
                          {activeVerb === 'GET' && 'GET /api/notes'}
                          {activeVerb === 'POST' && 'POST /api/notes'}
                          {activeVerb === 'PUT' && 'PUT /api/notes/101'}
                          {activeVerb === 'DELETE' && 'DELETE /api/notes/101'}
                        </code>
                      </div>

                      <div className="p-2 bg-[#121420] border border-[#2e334a] text-[11px]">
                        {activeVerb === 'GET' && (
                          <div className="text-[#55FFFF] flex items-center gap-1.5">
                            <CheckCircle2 className="w-4 h-4" />
                            <span>200 OK — Delivered 2 saved notes to UI</span>
                          </div>
                        )}
                        {activeVerb === 'POST' && (
                          <div className="text-[#55FF55] flex items-center gap-1.5">
                            <PlusCircle className="w-4 h-4" />
                            <span>201 Created — Inserted new note record into DB</span>
                          </div>
                        )}
                        {activeVerb === 'PUT' && (
                          <div className="text-[#FFAA00] flex items-center gap-1.5">
                            <Edit3 className="w-4 h-4" />
                            <span>200 OK — Updated note title to "Calculus Ch 5"</span>
                          </div>
                        )}
                        {activeVerb === 'DELETE' && (
                          <div className="text-[#FF5555] flex items-center gap-1.5">
                            <Trash2 className="w-4 h-4" />
                            <span>204 No Content — Purged record from database</span>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  </AnimatePresence>

                  <div className="flex justify-between items-center text-[10px] text-zinc-400 font-bold px-1">
                    <span>STATUS: RESTFUL PROTOCOL</span>
                    <span className="text-[#55FF55]">RFC 7231 COMPLIANT</span>
                  </div>
                </div>

                <p className="text-center text-[11px] text-zinc-400">
                  🔄 Cycling automatically through GET, POST, PUT, and DELETE operations.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
