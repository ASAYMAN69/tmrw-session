import React from 'react';
import { SLIDES } from '../../data/slidesData';
import { X } from 'lucide-react';
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
  return (
    <div className="fixed inset-0 z-50 bg-black/85 flex flex-col p-4 md:p-6 overflow-y-auto font-mono">
      <div className="max-w-4xl w-full mx-auto flex flex-col h-full">
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-[#2e334a]">
          <div className="flex items-center gap-2">
            <span className="font-pixel text-xs text-[#55FFFF]">QUEST SELECTOR</span>
            <span className="text-xs text-zinc-500">• 15 LEVELS</span>
          </div>
          <button
            onClick={() => {
              sound.click();
              onClose();
            }}
            className="p-1 text-zinc-400 hover:text-white cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* 15 Slide Slots Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2.5 mt-4 pb-10">
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
                className={`pixel-box p-3 text-left cursor-pointer transition-all ${
                  isCurrent ? 'pixel-box-active' : 'hover:border-[#55FFFF]'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="font-pixel text-[8px] text-[#55FF55]">
                    LVL {slide.id < 10 ? `0${slide.id}` : slide.id}
                  </span>
                </div>
                <h4 className="font-pixel text-[8px] text-white truncate w-full uppercase">
                  {slide.title}
                </h4>
                <p className="text-[9px] text-zinc-400 mt-1 line-clamp-1">
                  {slide.category}
                </p>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
