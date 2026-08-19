import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SLIDES } from './data/slidesData';
import { ViewMode } from './types/presentation';
import { TopBar } from './components/Navigation/TopBar';
import { BottomControls } from './components/Navigation/BottomControls';
import { SlideOverview } from './components/Navigation/SlideOverview';
import { PresenterNotes } from './components/Navigation/PresenterNotes';
import { SlideRenderer } from './components/SlideRenderer';
import { DocumentView } from './components/DocumentView';
import { sound } from './utils/sound';

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 40 : -40,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 40 : -40,
    opacity: 0,
  }),
};

export function App() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(1);
  const [currentSubStep, setCurrentSubStep] = useState<number>(0);
  const [direction, setDirection] = useState<number>(1);
  const [viewMode, setViewMode] = useState<ViewMode>('deck');
  const [showOverview, setShowOverview] = useState<boolean>(false);
  const [showPresenterNotes, setShowPresenterNotes] = useState<boolean>(false);

  const totalSlides = SLIDES.length;
  const currentSlide = SLIDES[currentSlideIndex - 1] || SLIDES[0];
  const maxSubSteps = currentSlide.maxSubSteps || 1;

  const handleNext = useCallback(() => {
    if (currentSubStep < maxSubSteps - 1) {
      sound.packetPing();
      setCurrentSubStep(prev => prev + 1);
    } else if (currentSlideIndex < totalSlides) {
      sound.slide();
      setDirection(1);
      setCurrentSlideIndex(prev => prev + 1);
      setCurrentSubStep(0);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [currentSubStep, maxSubSteps, currentSlideIndex, totalSlides]);

  const handlePrev = useCallback(() => {
    if (currentSubStep > 0) {
      sound.packetPing();
      setCurrentSubStep(prev => prev - 1);
    } else if (currentSlideIndex > 1) {
      sound.slide();
      setDirection(-1);
      const prevIndex = currentSlideIndex - 1;
      const prevSlide = SLIDES[prevIndex - 1];
      setCurrentSlideIndex(prevIndex);
      setCurrentSubStep(Math.max(0, (prevSlide?.maxSubSteps || 1) - 1));
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [currentSubStep, currentSlideIndex]);

  const handleSelectSlide = (slideNumber: number) => {
    sound.slide();
    setDirection(slideNumber > currentSlideIndex ? 1 : -1);
    setCurrentSlideIndex(slideNumber);
    setCurrentSubStep(0);
    if (viewMode === 'overview') {
      setViewMode('deck');
    }
    setShowOverview(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleRestart = () => {
    sound.success();
    setDirection(-1);
    setCurrentSlideIndex(1);
    setCurrentSubStep(0);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (['INPUT', 'TEXTAREA', 'SELECT'].includes((e.target as HTMLElement)?.tagName)) {
        return;
      }

      if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'ArrowDown') {
        if (viewMode === 'deck') {
          e.preventDefault();
          handleNext();
        }
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        if (viewMode === 'deck') {
          e.preventDefault();
          handlePrev();
        }
      } else if (e.key === 'o' || e.key === 'O' || e.key === 'Escape') {
        e.preventDefault();
        setShowOverview(prev => !prev);
      } else if (e.key === 'n' || e.key === 'N') {
        e.preventDefault();
        setShowPresenterNotes(prev => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNext, handlePrev, viewMode]);

  return (
    <div className="min-h-[100dvh] bg-[#090a10] text-[#f0f2f5] bg-pixel-grid relative flex flex-col font-mono selection:bg-[#0066cc] selection:text-[#55FFFF]">
      {/* Top Bar */}
      <TopBar
        currentSlide={currentSlideIndex}
        totalSlides={totalSlides}
        viewMode={viewMode}
        onViewModeChange={(mode) => {
          if (mode === 'overview') {
            setShowOverview(true);
          } else {
            setShowOverview(false);
            setViewMode(mode);
          }
        }}
        showPresenterNotes={showPresenterNotes}
        onTogglePresenterNotes={() => setShowPresenterNotes(prev => !prev)}
      />

      {/* Main Content Area */}
      <div className="relative z-10 flex-1 flex flex-col">
        {viewMode === 'deck' ? (
          <main className="flex-1 flex items-start justify-center overflow-x-hidden pt-2">
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={currentSlide.id}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 320, damping: 30 },
                  opacity: { duration: 0.15 }
                }}
                className="w-full"
              >
                <SlideRenderer
                  slide={currentSlide}
                  subStep={currentSubStep}
                  onSubStepChange={(step) => {
                    sound.packetPing();
                    setCurrentSubStep(step);
                  }}
                  onRestart={handleRestart}
                />
              </motion.div>
            </AnimatePresence>
          </main>
        ) : (
          <DocumentView />
        )}
      </div>

      {/* Minecraft Hotbar Controls for Deck View */}
      {viewMode === 'deck' && (
        <BottomControls
          currentSlide={currentSlideIndex}
          totalSlides={totalSlides}
          currentSubStep={currentSubStep}
          maxSubSteps={maxSubSteps}
          onPrev={handlePrev}
          onNext={handleNext}
          onSelectSlide={handleSelectSlide}
          onOpenOverview={() => setShowOverview(true)}
        />
      )}

      {/* Speaker Notes Overlay */}
      <PresenterNotes
        slide={currentSlide}
        isOpen={showPresenterNotes}
        onClose={() => setShowPresenterNotes(false)}
      />

      {/* Overview Grid Modal */}
      {showOverview && (
        <SlideOverview
          currentSlide={currentSlideIndex}
          onSelectSlide={handleSelectSlide}
          onClose={() => setShowOverview(false)}
        />
      )}
    </div>
  );
}

export default App;
