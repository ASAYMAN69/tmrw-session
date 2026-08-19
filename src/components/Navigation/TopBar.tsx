import React, { useState } from 'react';
import { ViewMode } from '../../types/presentation';
import { Volume2, VolumeX, Maximize2, Minimize2, Grid, Terminal } from 'lucide-react';
import { sound } from '../../utils/sound';

interface TopBarProps {
  currentSlide: number;
  totalSlides: number;
  viewMode: ViewMode;
  onViewModeChange: (mode: ViewMode) => void;
  showPresenterNotes: boolean;
  onTogglePresenterNotes: () => void;
}

export const TopBar: React.FC<TopBarProps> = ({
  currentSlide,
  totalSlides,
  viewMode,
  onViewModeChange,
}) => {
  const [isMuted, setIsMuted] = useState<boolean>(!sound.enabled);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);

  const toggleSound = () => {
    const enabled = sound.toggleSound();
    setIsMuted(!enabled);
    if (enabled) sound.click();
  };

  const toggleFullscreen = () => {
    sound.click();
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
        setIsFullscreen(false);
      }
    }
  };

  return (
    <header className="w-full bg-[#121420] border-b-2 border-[#2e334a] px-4 py-2 flex items-center justify-between sticky top-0 z-40 select-none font-mono">
      {/* Left: Quest Title & Level Indicator */}
      <div className="flex items-center gap-3">
        <div className="w-7 h-7 bg-[#181b2c] border-2 border-[#55FFFF] shadow-pixel-sm flex items-center justify-center text-[#55FFFF]">
          <Terminal className="w-3.5 h-3.5" />
        </div>
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-xs font-bold text-white tracking-normal">
              FROM CODE <span className="text-[#55FFFF]">TO WEB</span>
            </h1>
            <span className="text-[10px] font-bold text-[#55FF55] px-1.5 py-0.2 bg-[#090a10] border border-[#2e334a]">
              LVL {currentSlide < 10 ? `0${currentSlide}` : currentSlide} / {totalSlides}
            </span>
          </div>
        </div>
      </div>

      {/* Right: Quick Controls */}
      <div className="flex items-center gap-1.5">
        {/* Overview Grid */}
        <button
          onClick={() => {
            sound.click();
            onViewModeChange('overview');
          }}
          className="pixel-btn px-2.5 py-1 text-xs cursor-pointer text-zinc-300 flex items-center gap-1"
          title="Overview Grid"
        >
          <Grid className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">INDEX</span>
        </button>

        {/* Audio Toggle */}
        <button
          onClick={toggleSound}
          className="pixel-btn px-2 py-1 text-xs cursor-pointer text-zinc-300"
          title={isMuted ? 'Unmute' : 'Mute'}
        >
          {!isMuted ? <Volume2 className="w-3.5 h-3.5 text-[#55FFFF]" /> : <VolumeX className="w-3.5 h-3.5 text-zinc-600" />}
        </button>

        {/* Fullscreen */}
        <button
          onClick={toggleFullscreen}
          className="pixel-btn px-2 py-1 text-xs cursor-pointer text-zinc-300 hidden sm:block"
          title="Fullscreen"
        >
          {isFullscreen ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
        </button>
      </div>
    </header>
  );
};
