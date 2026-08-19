import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { SLIDES } from '../../data/slidesData';
import { sound } from '../../utils/sound';

interface BottomControlsProps {
  currentSlide: number;
  totalSlides: number;
  currentSubStep: number;
  maxSubSteps: number;
  onPrev: () => void;
  onNext: () => void;
  onSelectSlide: (slideNumber: number) => void;
  onOpenOverview: () => void;
}

export const BottomControls: React.FC<BottomControlsProps> = ({
  currentSlide,
  totalSlides,
  currentSubStep,
  maxSubSteps,
  onPrev,
  onNext,
  onOpenOverview,
}) => {
  const current = SLIDES[currentSlide - 1] || SLIDES[0];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-30 pointer-events-none select-none font-mono">
      {/* Floating Minimal HUD Navigation */}
      <div className="max-w-3xl mx-auto px-4 pb-3">
        <div className="bg-[#121420]/95 backdrop-blur border-2 border-[#2e334a] px-4 py-2 pointer-events-auto flex items-center justify-between gap-3 shadow-pixel">
          {/* PREV BUTTON */}
          <button
            onClick={() => {
              sound.slide();
              onPrev();
            }}
            disabled={currentSlide <= 1 && currentSubStep <= 0}
            className="pixel-btn px-3 py-1.5 disabled:opacity-30 cursor-pointer flex items-center gap-1.5 text-xs shrink-0"
            title="Previous (Arrow Left)"
          >
            <ChevronLeft className="w-4 h-4 text-[#55FFFF]" />
            <span>PREV</span>
          </button>

          {/* CENTER SLIDE STATUS & STEP INDICATOR */}
          <div
            onClick={onOpenOverview}
            className="flex-1 flex flex-col items-center justify-center cursor-pointer hover:opacity-80 transition-opacity min-w-0"
            title="Click to view all slides"
          >
            <div className="flex items-center gap-2 max-w-full truncate">
              <span className="text-[10px] font-bold text-[#55FF55] bg-[#090a10] px-1.5 py-0.5 border border-[#2e334a] shrink-0">
                {currentSlide < 10 ? `0${currentSlide}` : currentSlide} / {totalSlides}
              </span>
              <span className="text-xs font-bold text-white truncate">
                {current.title}
              </span>
            </div>

            {/* Sub-step Dots/Pills */}
            {maxSubSteps > 1 && (
              <div className="flex items-center gap-1 mt-1">
                {Array.from({ length: maxSubSteps }).map((_, idx) => (
                  <div
                    key={idx}
                    className={`h-1 rounded-full transition-all ${
                      idx === currentSubStep
                        ? 'w-4 bg-[#55FFFF]'
                        : idx < currentSubStep
                        ? 'w-2 bg-[#55FF55]'
                        : 'w-1.5 bg-[#2e334a]'
                    }`}
                  />
                ))}
              </div>
            )}
          </div>

          {/* NEXT / STEP ACTION BUTTON */}
          <button
            onClick={() => {
              sound.slide();
              onNext();
            }}
            disabled={currentSlide >= totalSlides && currentSubStep >= maxSubSteps - 1}
            className="pixel-btn pixel-btn-primary px-3.5 py-1.5 disabled:opacity-30 cursor-pointer flex items-center gap-1.5 text-xs text-white shrink-0"
            title="Next (Arrow Right or Space)"
          >
            <span>{currentSubStep < maxSubSteps - 1 ? 'STEP ➔' : 'NEXT ➔'}</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Retro XP Progress Fill on bottom border */}
      <div className="w-full mc-xp-bar">
        <div
          className="mc-xp-fill transition-all duration-200"
          style={{
            width: `${((currentSlide - 1 + (currentSubStep + 1) / maxSubSteps) / totalSlides) * 100}%`
          }}
        />
      </div>
    </div>
  );
};
