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
  User,
  ExternalLink,
  BookOpen,
  RefreshCw,
  Lightbulb
} from 'lucide-react';
import { sound } from '../../utils/sound';

interface Slide5Props {
  subStep?: number;
  onSubStepChange?: (subStep: number) => void;
}

// Clean Minimalist Motion Graphic: 4 Items Merged -> Forward Transit -> DB Rack Storage
const MessengerPackingOffloadGraphic: React.FC = () => {
  const [stage, setStage] = useState<number>(0);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (stage === 0) {
      // 4 Chips merge in 0.7s, then box rests for 1.8s (Total 2.5s)
      timer = setTimeout(() => {
        sound.packetPing?.();
        setStage(1);
      }, 2500);
    } else if (stage === 1) {
      // Forward Transit for 2.6s
      timer = setTimeout(() => {
        sound.success?.();
        setStage(2);
      }, 2600);
    } else if (stage === 2) {
      // Saved in racks for 2.8s, then loop
      timer = setTimeout(() => {
        setStage(0);
      }, 2800);
    }
    return () => clearTimeout(timer);
  }, [stage]);

  return (
    <div className="w-full max-w-md mx-auto font-mono">
      {/* Main Visual Viewport Box */}
      <div className="p-5 bg-[#121420] border-2 border-[#55FFFF] shadow-pixel min-h-[230px] flex flex-col justify-center">
        <AnimatePresence mode="wait">
          {/* STAGE 0: 4 DATA CHIPS MERGING INTO 1 SINGLE BOX */}
          {stage === 0 && (
            <motion.div
              key="stage-merge"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-3"
            >
              <div className="relative h-28 flex items-center justify-center">
                {/* Chip 1: User */}
                <motion.div
                  initial={{ x: -75, y: -28, opacity: 1, scale: 1 }}
                  animate={{ x: 0, y: 0, opacity: 0, scale: 0.5 }}
                  transition={{ duration: 0.7, delay: 0.1, ease: 'easeInOut' }}
                  className="absolute px-2 py-1 bg-[#090a10] border border-[#FFAA00] text-[#FFAA00] text-[10px] font-bold z-10"
                >
                  User: Alex (101)
                </motion.div>

                {/* Chip 2: Title */}
                <motion.div
                  initial={{ x: 75, y: -28, opacity: 1, scale: 1 }}
                  animate={{ x: 0, y: 0, opacity: 0, scale: 0.5 }}
                  transition={{ duration: 0.7, delay: 0.1, ease: 'easeInOut' }}
                  className="absolute px-2 py-1 bg-[#090a10] border border-[#55FFFF] text-[#55FFFF] text-[10px] font-bold z-10"
                >
                  "Math HW #4"
                </motion.div>

                {/* Chip 3: Token */}
                <motion.div
                  initial={{ x: -75, y: 28, opacity: 1, scale: 1 }}
                  animate={{ x: 0, y: 0, opacity: 0, scale: 0.5 }}
                  transition={{ duration: 0.7, delay: 0.1, ease: 'easeInOut' }}
                  className="absolute px-2 py-1 bg-[#090a10] border border-[#55FF55] text-[#55FF55] text-[10px] font-bold z-10"
                >
                  Bearer JWT Token
                </motion.div>

                {/* Chip 4: Action */}
                <motion.div
                  initial={{ x: 75, y: 28, opacity: 1, scale: 1 }}
                  animate={{ x: 0, y: 0, opacity: 0, scale: 0.5 }}
                  transition={{ duration: 0.7, delay: 0.1, ease: 'easeInOut' }}
                  className="absolute px-2 py-1 bg-[#090a10] border border-[#FF5555] text-[#FF5555] text-[10px] font-bold z-10"
                >
                  POST /api/notes
                </motion.div>

                {/* The 1 Unified Sealed Package */}
                <motion.div
                  initial={{ scale: 0.4, opacity: 0 }}
                  animate={{ scale: [0.4, 1.05, 1], opacity: 1 }}
                  transition={{ delay: 0.7, duration: 0.35 }}
                  className="p-3 bg-[#181b2c] border-2 border-[#55FFFF] flex items-center gap-2 text-xs font-black text-white shadow-glow-diamond"
                >
                  <Package className="w-5 h-5 text-[#55FFFF]" />
                  <span>📦 NOTES_REQUEST.JSON</span>
                </motion.div>
              </div>
            </motion.div>
          )}

          {/* STAGE 1: ACCELERATING TRANSIT (LEFT -> RIGHT ONLY) */}
          {stage === 1 && (
            <motion.div
              key="stage-transit"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-4 my-auto"
            >
              <div className="p-4 bg-[#090a10] border border-[#55FFFF] relative overflow-hidden">
                <div className="flex items-center justify-between text-xs font-mono font-bold text-zinc-400 pb-2 border-b border-[#2e334a]">
                  <span className="text-white">Browser</span>
                  <span className="text-[#55FFFF] text-xs">API Pipe</span>
                  <span className="text-[#55FF55]">Database</span>
                </div>

                {/* Single forward track with accelerating packet */}
                <div className="mt-3 w-full bg-[#181b2c] h-9 relative flex items-center overflow-hidden">
                  <motion.div
                    initial={{ x: -10 }}
                    animate={{ x: 310 }}
                    transition={{
                      duration: 1.8,
                      ease: [0.7, 0, 0.84, 0]
                    }}
                    className="px-3 py-1 bg-[#55FFFF] text-black text-[10px] font-black flex items-center gap-1.5 shadow-glow-cyan shrink-0"
                  >
                    <Package className="w-4 h-4" />
                    <span>NOTES_REQUEST.JSON</span>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )}

          {/* STAGE 2: DATABASE RACK STORAGE */}
          {stage === 2 && (
            <motion.div
              key="stage-offload"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="space-y-1.5 my-auto"
            >
              {/* 4 Server Rack Slots */}
              <motion.div
                initial={{ opacity: 0, x: -6 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.05 }}
                className="p-1.5 bg-[#090a10] border border-[#55FF55] flex items-center justify-between text-xs"
              >
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#55FF55] animate-ping" />
                  <HardDrive className="w-3.5 h-3.5 text-[#55FF55]" />
                  <span className="text-white font-bold text-[11px]">User: Alex (101)</span>
                </div>
                <span className="text-[#55FF55] font-black text-[10px]">SAVED</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -6 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.15 }}
                className="p-1.5 bg-[#090a10] border border-[#55FF55] flex items-center justify-between text-xs"
              >
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#55FF55] animate-ping" />
                  <HardDrive className="w-3.5 h-3.5 text-[#55FF55]" />
                  <span className="text-white font-bold text-[11px]">Title: "Math HW #4"</span>
                </div>
                <span className="text-[#55FF55] font-black text-[10px]">SAVED</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -6 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.25 }}
                className="p-1.5 bg-[#090a10] border border-[#55FF55] flex items-center justify-between text-xs"
              >
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#55FF55] animate-ping" />
                  <HardDrive className="w-3.5 h-3.5 text-[#55FF55]" />
                  <span className="text-white font-bold text-[11px]">Token: Verified</span>
                </div>
                <span className="text-[#55FF55] font-black text-[10px]">SAVED</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -6 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.35 }}
                className="p-1.5 bg-[#090a10] border border-[#55FF55] flex items-center justify-between text-xs"
              >
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#55FF55] animate-ping" />
                  <HardDrive className="w-3.5 h-3.5 text-[#55FF55]" />
                  <span className="text-white font-bold text-[11px]">Row #9021 Inserted</span>
                </div>
                <span className="text-[#55FF55] font-black text-[10px]">SAVED</span>
              </motion.div>

              <div className="p-1.5 bg-[#091f14] border border-[#55FF55]/60 text-center text-[#55FF55] text-xs font-black flex items-center justify-center gap-1.5 mt-1">
                <CheckCircle2 className="w-4 h-4" />
                <span>✓ 201 CREATED: SAVED TO DATABASE</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

// Real 1-to-1 JSON-to-UI Morphing Engine (Single Box Morph)
const JsonToUiMorphGraphic: React.FC = () => {
  // Mode: 'json' (raw text) -> 'card' (rendered HTML/CSS modal card)
  const [isRendered, setIsRendered] = useState<boolean>(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsRendered(prev => {
        if (!prev) {
          sound.success?.();
          return true;
        } else {
          sound.packetPing?.();
          return false;
        }
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-md mx-auto font-mono relative overflow-hidden">
      {/* Laser Scanline Beam during Morph */}
      <motion.div
        key={isRendered ? 'to-card' : 'to-json'}
        initial={{ top: '0%', opacity: 1 }}
        animate={{ top: '100%', opacity: 0 }}
        transition={{ duration: 0.65, ease: 'easeInOut' }}
        className="absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#55FFFF] to-transparent shadow-glow-cyan z-20 pointer-events-none"
      />

      <AnimatePresence mode="wait">
        {/* 1. RAW JSON TEXT (1-to-1 EXACT KEYS) - SINGLE BOX */}
        {!isRendered && (
          <motion.div
            key="json-view"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.3 }}
            className="p-5 bg-[#090a10] border-2 border-[#55FFFF] shadow-pixel min-h-[250px] flex flex-col justify-center space-y-2 text-xs font-mono"
          >
            <div className="flex items-center justify-between border-b border-[#2e334a] pb-1.5 text-[10px]">
              <span className="text-zinc-400 font-bold">RAW JSON:</span>
              <span className="text-[#55FFFF] font-bold">application/json</span>
            </div>

            <div className="text-[#55FFFF] leading-relaxed">
              &#123;<br />
              &nbsp;&nbsp;<span className="text-[#FFAA00]">"user"</span>: <span className="text-[#FF8888]">"Alex (usr_101)"</span>,<br />
              &nbsp;&nbsp;<span className="text-[#FFAA00]">"badge"</span>: <span className="text-[#55FF55]">"PRO STUDENT"</span>,<br />
              &nbsp;&nbsp;<span className="text-[#FFAA00]">"title"</span>: <span className="text-[#FF8888]">"Calculus Chapter 4"</span>,<br />
              &nbsp;&nbsp;<span className="text-[#FFAA00]">"tags"</span>: [<span className="text-[#55FFFF]">"#Math"</span>, <span className="text-[#55FFFF]">"#ExamPrep"</span>],<br />
              &nbsp;&nbsp;<span className="text-[#FFAA00]">"buttonText"</span>: <span className="text-[#FF8888]">"OPEN NOTE"</span>,<br />
              &nbsp;&nbsp;<span className="text-[#FFAA00]">"status"</span>: <span className="text-[#55FF55]">200</span><br />
              &#125;
            </div>
          </motion.div>
        )}

        {/* 2. RENDERED HTML/CSS CARD - SINGLE BOX */}
        {isRendered && (
          <motion.div
            key="card-view"
            initial={{ opacity: 0, scale: 0.94, y: 6 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: -6 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="p-5 bg-[#181b2c] border-2 border-[#55FF55] shadow-glow-diamond min-h-[250px] flex flex-col justify-between space-y-3"
          >
            {/* Header: user + badge */}
            <div className="flex items-center justify-between border-b border-[#2e334a] pb-2">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 bg-[#55FFFF]/20 border border-[#55FFFF] flex items-center justify-center text-[#55FFFF]">
                  <User className="w-4 h-4" />
                </div>
                <span className="text-white font-black text-xs">
                  Alex (usr_101)
                </span>
              </div>

              <span className="px-2.5 py-0.5 bg-[#55FF55]/20 border border-[#55FF55] text-[#55FF55] text-[10px] font-black">
                PRO STUDENT
              </span>
            </div>

            {/* Body: title + status */}
            <div className="p-2.5 bg-[#090a10] border border-[#2e334a] flex items-center justify-between">
              <div className="flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-[#55FFFF]" />
                <h4 className="text-sm font-black text-white">Calculus Chapter 4</h4>
              </div>
              <span className="text-[10px] font-mono text-[#55FF55] font-bold">200 OK</span>
            </div>

            {/* Footer: tags + buttonText */}
            <div className="flex items-center justify-between pt-1">
              <div className="flex gap-1.5">
                <span className="px-2 py-0.5 bg-[#121420] text-[#55FFFF] text-[9px] font-bold border border-[#55FFFF]/40">
                  #Math
                </span>
                <span className="px-2 py-0.5 bg-[#121420] text-[#55FFFF] text-[9px] font-bold border border-[#55FFFF]/40">
                  #ExamPrep
                </span>
              </div>

              <button className="px-3.5 py-1.5 bg-[#55FFFF] text-black text-xs font-black flex items-center gap-1 shadow-glow-cyan">
                <span>OPEN NOTE</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const Slide5ApiRestaurant: React.FC<Slide5Props> = ({
  subStep = 0,
  onSubStepChange,
}) => {
  const currentStep = Math.min(2, Math.max(0, subStep));

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
            <span className="text-[10px] font-bold hidden sm:inline text-zinc-500">Waiter Analogy</span>
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
              {/* POINT 1: THE MESSENGER */}
              {currentStep === 0 && (
                <>
                  <div className="flex items-center gap-2.5">
                    <span className="text-xs sm:text-sm font-black text-[#FFAA00] px-2.5 py-0.5 bg-[#FFAA00]/15 border border-[#FFAA00]/40">
                      #01
                    </span>
                    <h3 className="text-lg sm:text-xl font-black text-white font-sans uppercase">
                      The API Messenger (Waiter Analogy)
                    </h3>
                  </div>

                  <p className="text-sm sm:text-base text-zinc-100 font-semibold leading-relaxed">
                    An <strong>API (Application Programming Interface)</strong> is the digital courier. It packs user requests, carries them over the network, and offloads them to server storage.
                  </p>

                  <div className="p-3.5 bg-[#090a10] border border-[#2e334a] text-xs space-y-2">
                    <div className="flex items-start gap-2">
                      <strong className="text-[#FFAA00] shrink-0">1. Customer (Browser):</strong>
                      <span className="text-zinc-200">Asks for notes without entering the database kitchen directly.</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <strong className="text-[#55FFFF] shrink-0">2. Waiter (The API):</strong>
                      <span className="text-zinc-200">Carries the request envelope <code>GET /api/notes</code> across the wire.</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <strong className="text-[#55FF55] shrink-0">3. Kitchen (Database):</strong>
                      <span className="text-zinc-200">Prepares the records and serves back clean JSON.</span>
                    </div>
                  </div>

                  <div className="p-3 bg-[#181b2c] border-l-4 border-[#FFAA00] text-xs sm:text-sm text-zinc-200 font-medium flex items-center gap-2">
                    <Lightbulb className="w-4 h-4 text-[#FFAA00] shrink-0" />
                    <span><strong>Takeaway:</strong> The browser never touches the database directly. The API is the safe courier.</span>
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
                      &nbsp;&nbsp;<span className="text-[#FFAA00]">"user"</span>: <span className="text-[#FF8888]">"Alex (usr_101)"</span>,<br />
                      &nbsp;&nbsp;<span className="text-[#FFAA00]">"badge"</span>: <span className="text-[#55FF55]">"PRO STUDENT"</span>,<br />
                      &nbsp;&nbsp;<span className="text-[#FFAA00]">"title"</span>: <span className="text-[#FF8888]">"Calculus Chapter 4"</span>,<br />
                      &nbsp;&nbsp;<span className="text-[#FFAA00]">"tags"</span>: [<span className="text-[#55FFFF]">"#Math"</span>, <span className="text-[#55FFFF]">"#ExamPrep"</span>],<br />
                      &nbsp;&nbsp;<span className="text-[#FFAA00]">"buttonText"</span>: <span className="text-[#FF8888]">"OPEN NOTE"</span><br />
                      &#125;
                    </div>
                  </div>

                  <div className="p-3 bg-[#181b2c] border-l-4 border-[#55FFFF] text-xs sm:text-sm text-zinc-200 font-medium flex items-center gap-2">
                    <Lightbulb className="w-4 h-4 text-[#55FFFF] shrink-0" />
                    <span><strong>Takeaway:</strong> Python backend, React website, and iPhone app all communicate seamlessly through JSON.</span>
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

                  <div className="p-3 bg-[#181b2c] border-l-4 border-[#55FF55] text-xs sm:text-sm text-zinc-200 font-medium flex items-center gap-2">
                    <Lightbulb className="w-4 h-4 text-[#55FF55] shrink-0" />
                    <span><strong>Takeaway:</strong> REST APIs map user intentions directly into these 4 standard HTTP operations.</span>
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
            {/* AUTOMATION 1: 4 Items Merged -> Forward Transit -> DB Rack Storage */}
            {currentStep === 0 && (
              <MessengerPackingOffloadGraphic />
            )}

            {/* AUTOMATION 2: JSON Payload Morphing into an HTML/CSS UI Card (1-to-1 Match) */}
            {currentStep === 1 && (
              <JsonToUiMorphGraphic />
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

                <div className="flex items-center justify-center gap-1.5 text-[11px] text-zinc-400">
                  <RefreshCw className="w-3 h-3 text-[#55FF55] animate-spin" />
                  <span>Cycling through GET, POST, PUT, and DELETE</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
