import React, { useEffect } from 'react';
import { SLIDES } from '../../data/slidesData';
import { X, Grid, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { sound } from '../../utils/sound';

interface SlideOverviewProps {
  currentSlide: number;
  onSelectSlide: (slideNumber: number) => void;
  onClose: () => void;
}

export const SlideOverview: React.FC<SlideOverviewProps> = ({
  currentSlide,
  onSelectSlide,
  onClose,
}) => {
  // Allow closing on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        sound.click();
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex flex-col p-4 md:p-8 overflow-y-auto font-mono select-none animate-fade-in">
      <div className="max-w-5xl lg:max-w-6xl w-full mx-auto flex flex-col h-full">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b-2 border-[#2e334a]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#181b2c] border-2 border-[#55FFFF] shadow-pixel flex items-center justify-center text-[#55FFFF]">
              <Grid className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-lg sm:text-xl font-extrabold text-white font-sans tracking-tight uppercase">
                  PRESENTATION SLIDE INDEX
                </h2>
                <span className="text-xs font-black text-[#55FF55] px-2 py-0.5 bg-[#090a10] border border-[#55FF55]/40">
                  15 SLIDES
                </span>
              </div>
              <p className="text-xs sm:text-sm text-zinc-400 mt-0.5">
                Click any module card to jump directly to that part of the presentation
              </p>
            </div>
          </div>

          <button
            onClick={() => {
              sound.click();
              onClose();
            }}
            className="pixel-btn px-4 py-2 text-xs sm:text-sm cursor-pointer flex items-center gap-2 text-zinc-300 hover:text-white self-end sm:self-auto shadow-pixel"
          >
            <span>CLOSE [ESC]</span>
            <X className="w-4 h-4 text-[#FF5555]" />
          </button>
        </div>

        {/* 15 Large, Prominent Slide Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3.5 mt-5 pb-12">
          {SLIDES.map((slide) => {
            const isCurrent = slide.id === currentSlide;

            return (
              <button
                key={slide.id}
                onClick={() => {
                  sound.slide();
                  onSelectSlide(slide.id);
                  onClose();
                }}
                className={`p-4 text-left cursor-pointer transition-all border-2 flex flex-col justify-between min-h-[145px] shadow-pixel ${
                  isCurrent
                    ? 'bg-[#1a2238] border-[#55FFFF] shadow-glow-diamond scale-[1.02]'
                    : 'bg-[#121420] border-[#2e334a] hover:border-[#55FFFF] hover:bg-[#181b2c]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span
                      className={`text-xs font-black px-2 py-0.5 border ${
                        isCurrent
                          ? 'bg-[#55FFFF]/20 text-[#55FFFF] border-[#55FFFF]'
                          : 'bg-[#090a10] text-[#55FF55] border-[#2e334a]'
                      }`}
                    >
                      {slide.id === 15 ? 'MASTERCLASS' : `MODULE ${slide.id < 10 ? `0${slide.id}` : slide.id}`}
                    </span>
                    {isCurrent && (
                      <span className="text-[10px] font-black text-[#55FFFF] flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5" /> ACTIVE
                      </span>
                    )}
                  </div>

                  <h4 className="text-sm font-extrabold text-white font-sans leading-snug line-clamp-2">
                    {slide.title}
                  </h4>
                </div>

                <div className="mt-3 pt-2 border-t border-[#2e334a] flex items-center justify-between text-xs text-zinc-400">
                  <span className="truncate font-semibold text-[11px] uppercase text-zinc-300">
                    {slide.category}
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 text-zinc-500 shrink-0" />
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
