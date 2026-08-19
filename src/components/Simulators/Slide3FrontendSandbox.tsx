import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Layers, Palette, Zap, Sparkles, Monitor } from 'lucide-react';
import { sound } from '../../utils/sound';
import { fireConfetti } from '../../utils/confetti';

interface Slide3Props {
  subStep?: number;
  onSubStepChange?: (subStep: number) => void;
}

export const Slide3FrontendSandbox: React.FC<Slide3Props> = ({
  subStep = 0,
  onSubStepChange,
}) => {
  const currentStep = Math.min(2, Math.max(0, subStep));
  const hasHTML = true;
  const hasCSS = currentStep >= 1;
  const hasJS = currentStep >= 2;

  const [clicks, setClicks] = useState<number>(0);
  const [feedbackMsg, setFeedbackMsg] = useState<string | null>(null);

  const handleButtonClick = () => {
    if (!hasJS) {
      sound.click();
      setFeedbackMsg(
        currentStep === 0
          ? '❌ RAW HTML: No JavaScript event listener attached! Click does nothing.'
          : '🎨 CSS STYLED: Button looks great, but JavaScript is still needed to handle clicks!'
      );
      return;
    }

    sound.success();
    setClicks(prev => prev + 1);
    setFeedbackMsg(`✓ REACTIVE EVENT: Click #${clicks + 1} processed by React state!`);
    fireConfetti();
  };

  return (
    <div className="w-full flex flex-col gap-3.5 font-mono select-none">
      {/* 3-Pillar Step Selector Strip */}
      <div className="bg-[#121420] border-2 border-[#2e334a] p-1.5 shadow-pixel">
        <div className="grid grid-cols-3 gap-2">
          <button
            onClick={() => { sound.click(); onSubStepChange?.(0); }}
            className={`py-2 px-3 flex items-center justify-between cursor-pointer border-2 transition-all ${
              currentStep === 0
                ? 'bg-[#1e2640] border-[#FFAA00] text-[#FFAA00] shadow-pixel scale-[1.02]'
                : 'bg-[#090a10] border-[#22273a] text-zinc-400 hover:text-white'
            }`}
          >
            <div className="flex items-center gap-2">
              <Layers className="w-4 h-4 text-[#FFAA00]" />
              <span className="text-xs sm:text-sm font-black">01. HTML ALONE</span>
            </div>
            <span className="text-[10px] font-bold hidden sm:inline text-zinc-500">Skeleton</span>
          </button>

          <button
            onClick={() => { sound.click(); onSubStepChange?.(1); }}
            className={`py-2 px-3 flex items-center justify-between cursor-pointer border-2 transition-all ${
              currentStep === 1
                ? 'bg-[#1e2640] border-[#55FFFF] text-[#55FFFF] shadow-pixel scale-[1.02]'
                : 'bg-[#090a10] border-[#22273a] text-zinc-400 hover:text-white'
            }`}
          >
            <div className="flex items-center gap-2">
              <Palette className="w-4 h-4 text-[#55FFFF]" />
              <span className="text-xs sm:text-sm font-black">02. + CSS STYLED</span>
            </div>
            <span className="text-[10px] font-bold hidden sm:inline text-zinc-500">Presentation</span>
          </button>

          <button
            onClick={() => { sound.click(); onSubStepChange?.(2); }}
            className={`py-2 px-3 flex items-center justify-between cursor-pointer border-2 transition-all ${
              currentStep === 2
                ? 'bg-[#1e2640] border-[#55FF55] text-[#55FF55] shadow-pixel scale-[1.02]'
                : 'bg-[#090a10] border-[#22273a] text-zinc-400 hover:text-white'
            }`}
          >
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-[#55FF55]" />
              <span className="text-xs sm:text-sm font-black">03. + JS / REACT</span>
            </div>
            <span className="text-[10px] font-bold hidden sm:inline text-zinc-500">Reactivity</span>
          </button>
        </div>
      </div>

      {/* Main 2-Section Body Split with Slightly Bigger Elements */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* LEFT SECTION: Explanation & Code Blueprint */}
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
              {currentStep === 0 && (
                <>
                  <div className="flex items-center gap-2.5">
                    <span className="text-xs sm:text-sm font-black text-[#FFAA00] px-2.5 py-0.5 bg-[#FFAA00]/15 border border-[#FFAA00]/40">
                      #01
                    </span>
                    <h3 className="text-lg sm:text-xl font-black text-white font-sans uppercase">
                      HTML5 — The Raw Skeleton
                    </h3>
                  </div>

                  <p className="text-sm sm:text-base text-zinc-100 font-semibold leading-relaxed">
                    HTML defines <strong>WHAT</strong> appears on the page. Without CSS or JavaScript, buttons and inputs look like plain 1995 default browser elements.
                  </p>

                  <div className="p-3.5 bg-[#090a10] border border-[#2e334a]">
                    <span className="text-xs text-zinc-400 font-bold uppercase block mb-1.5">
                      SOURCE CODE BLUEPRINT:
                    </span>
                    <code className="text-sm text-[#FFAA00] font-black">
                      {'<button>Save Note</button>'}
                    </code>
                  </div>

                  <div className="p-3 bg-[#181b2c] border-l-4 border-[#FFAA00] text-xs sm:text-sm text-zinc-200 font-medium">
                    💡 <strong>Takeaway:</strong> HTML builds the structure, but has zero color, styling, or custom behavior.
                  </div>
                </>
              )}

              {currentStep === 1 && (
                <>
                  <div className="flex items-center gap-2.5">
                    <span className="text-xs sm:text-sm font-black text-[#55FFFF] px-2.5 py-0.5 bg-[#55FFFF]/15 border border-[#55FFFF]/40">
                      #02
                    </span>
                    <h3 className="text-lg sm:text-xl font-black text-white font-sans uppercase">
                      CSS3 / Tailwind — The Skin
                    </h3>
                  </div>

                  <p className="text-sm sm:text-base text-zinc-100 font-semibold leading-relaxed">
                    CSS defines <strong>HOW</strong> elements look. It applies colors, dark mode, pixel borders, and padding. The button looks sleek, but clicking it still does nothing!
                  </p>

                  <div className="p-3.5 bg-[#090a10] border border-[#2e334a]">
                    <span className="text-xs text-zinc-400 font-bold uppercase block mb-1.5">
                      SOURCE CODE BLUEPRINT:
                    </span>
                    <code className="text-sm text-[#55FFFF] font-black">
                      {'className="pixel-btn pixel-btn-primary border-2 shadow-pixel"'}
                    </code>
                  </div>

                  <div className="p-3 bg-[#181b2c] border-l-4 border-[#55FFFF] text-xs sm:text-sm text-zinc-200 font-medium">
                    💡 <strong>Takeaway:</strong> CSS makes the interface beautiful, but it is static without JavaScript.
                  </div>
                </>
              )}

              {currentStep === 2 && (
                <>
                  <div className="flex items-center gap-2.5">
                    <span className="text-xs sm:text-sm font-black text-[#55FF55] px-2.5 py-0.5 bg-[#55FF55]/15 border border-[#55FF55]/40">
                      #03
                    </span>
                    <h3 className="text-lg sm:text-xl font-black text-white font-sans uppercase">
                      JS / React — The Reactivity Muscle
                    </h3>
                  </div>

                  <p className="text-sm sm:text-base text-zinc-100 font-semibold leading-relaxed">
                    JavaScript defines <strong>WHAT HAPPENS</strong> on interaction. It listens for user clicks, manages dynamic state, triggers animations, and communicates with servers.
                  </p>

                  <div className="p-3.5 bg-[#090a10] border border-[#2e334a]">
                    <span className="text-xs text-zinc-400 font-bold uppercase block mb-1.5">
                      SOURCE CODE BLUEPRINT:
                    </span>
                    <code className="text-sm text-[#55FF55] font-black">
                      {'onClick={() => setClicks(clicks + 1)}'}
                    </code>
                  </div>

                  <div className="p-3 bg-[#181b2c] border-l-4 border-[#55FF55] text-xs sm:text-sm text-zinc-200 font-medium">
                    💡 <strong>Takeaway:</strong> JavaScript connects user gestures to live logic and state changes.
                  </div>
                </>
              )}
            </motion.div>
          </AnimatePresence>

          <div className="pt-3.5 border-t border-[#2e334a] text-xs sm:text-sm text-zinc-400 flex items-center justify-between font-bold">
            <span>Press Next or Hotbar to advance</span>
            <span className="text-[#55FFFF]">Module 02: Frontend</span>
          </div>
        </div>

        {/* RIGHT SECTION: The Live Interactive Button Sandbox */}
        <div className="bg-[#090a10] border-2 border-[#55FFFF] p-6 shadow-pixel flex flex-col justify-between">
          {/* Mock Browser Title Bar */}
          <div className="flex items-center justify-between pb-3 border-b border-[#2e334a] text-xs sm:text-sm font-bold">
            <div className="flex items-center gap-2 text-zinc-300">
              <Monitor className="w-5 h-5 text-[#55FFFF]" />
              <span>LIVE BROWSER PREVIEW</span>
            </div>
            <span className="text-xs text-[#55FF55] font-mono font-bold">http://localhost:5173</span>
          </div>

          {/* Center Sandbox Target Area with Bigger Interactive Buttons */}
          <div className="py-10 flex flex-col items-center justify-center min-h-[190px]">
            <motion.div
              layout
              transition={{ type: 'spring', stiffness: 350, damping: 25 }}
            >
              {currentStep === 0 && (
                <button
                  onClick={handleButtonClick}
                  className="cursor-pointer px-6 py-3 bg-gray-300 hover:bg-gray-200 text-black border-2 border-gray-600 font-serif text-base active:translate-y-0.5 shadow-sm"
                >
                  Save Note
                </button>
              )}

              {currentStep === 1 && (
                <button
                  onClick={handleButtonClick}
                  className="pixel-btn pixel-btn-primary px-8 py-3 text-base cursor-pointer shadow-pixel font-sans font-bold tracking-normal flex items-center justify-center"
                >
                  <Palette className="w-5 h-5 inline mr-2 text-[#55FFFF]" />
                  <span>Save Note</span>
                </button>
              )}

              {currentStep === 2 && (
                <button
                  onClick={handleButtonClick}
                  className="pixel-btn pixel-btn-primary px-9 py-3.5 text-base cursor-pointer shadow-glow-diamond flex items-center justify-center gap-2.5 animate-pulse-glow font-sans font-bold tracking-normal"
                >
                  <Sparkles className="w-5 h-5 text-[#55FFFF]" />
                  <span>Save Note (Click Me!)</span>
                </button>
              )}
            </motion.div>

            {/* Dynamic Status / Feedback Strip */}
            {feedbackMsg && (
              <motion.div
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-5 p-3 bg-[#121420] border border-[#2e334a] text-xs sm:text-sm text-center text-zinc-100 max-w-sm font-semibold"
              >
                {feedbackMsg}
              </motion.div>
            )}
          </div>

          {/* Sandbox Live Metrics Footer */}
          <div className="p-3.5 bg-[#121420] border border-[#2e334a] flex items-center justify-between text-xs sm:text-sm font-bold">
            <div className="text-zinc-200">
              Clicks Processed: <strong className="text-[#55FF55] text-base">{clicks}</strong>
            </div>
            <span className={hasJS ? 'text-[#55FF55]' : 'text-zinc-500'}>
              {hasJS ? '● Event Listener Active' : '○ Listener Inactive'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
