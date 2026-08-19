import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fireConfetti } from '../../utils/confetti';
import { sound } from '../../utils/sound';

interface Slide13Props {
  subStep?: number;
  onSubStepChange?: (subStep: number) => void;
}

export const Slide13QuestionsFeedback: React.FC<Slide13Props> = ({
  subStep = 0,
}) => {
  const currentStep = Math.min(1, Math.max(0, subStep));

  // Trigger confetti when switching to feedback step
  useEffect(() => {
    if (currentStep === 1) {
      fireConfetti();
      sound.success?.();
    }
  }, [currentStep]);

  return (
    <div className="w-full flex items-center justify-center text-center font-mono select-none px-4">
      <AnimatePresence mode="wait">
        {currentStep === 0 ? (
          <motion.div
            key="questions"
            initial={{ opacity: 0, scale: 0.9, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: -15 }}
            transition={{ type: 'spring', damping: 20, stiffness: 280 }}
            className="flex items-center justify-center text-center w-full"
          >
            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-white font-sans tracking-tight text-center leading-tight">
              Any questions? <span className="text-[#55FFFF] inline-block">:P</span>
            </h1>
          </motion.div>
        ) : (
          <motion.div
            key="feedback"
            initial={{ opacity: 0, scale: 0.9, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: -15 }}
            transition={{ type: 'spring', damping: 20, stiffness: 280 }}
            className="flex items-center justify-center text-center w-full"
          >
            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-white font-sans tracking-tight text-center leading-tight">
              Loved the session? <span className="text-[#55FF55] inline-block">:D</span>
            </h1>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
