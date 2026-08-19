import React from 'react';
import { SlideData } from '../types/presentation';

// Import all 15 simulators
import { Slide1JourneyMap } from './Simulators/Slide1JourneyMap';
import { Slide3FrontendSandbox } from './Simulators/Slide3FrontendSandbox';
import { Slide4BackendLogic } from './Simulators/Slide4BackendLogic';
import { Slide5ApiRestaurant } from './Simulators/Slide5ApiRestaurant';
import { Slide6DatabaseMemory } from './Simulators/Slide6DatabaseMemory';
import { Slide7AuthMatrix } from './Simulators/Slide7AuthMatrix';
import { Slide8DomainHosting } from './Simulators/Slide8DomainHosting';
import { Slide9FullSystemCircuit } from './Simulators/Slide9FullSystemCircuit';
import { Slide10StudentNotesStack } from './Simulators/Slide10StudentNotesStack';
import { Slide11RoadmapSteps } from './Simulators/Slide11RoadmapSteps';
import { Slide12ArchitectureCompare } from './Simulators/Slide12ArchitectureCompare';
import { Slide14FirstProjectPicker } from './Simulators/Slide14FirstProjectPicker';
import { Slide16LiveMasterclass } from './Simulators/Slide16LiveMasterclass';

interface SlideRendererProps {
  slide: SlideData;
  subStep?: number;
  onSubStepChange?: (subStep: number) => void;
  onRestart?: () => void;
}

export const SlideRenderer: React.FC<SlideRendererProps> = ({
  slide,
  subStep = 0,
  onSubStepChange,
  onRestart,
}) => {
  const renderSimulator = () => {
    switch (slide.id) {
      case 1:
        return <Slide1JourneyMap subStep={subStep} onSubStepChange={onSubStepChange} />;
      case 2:
        return <Slide3FrontendSandbox subStep={subStep} onSubStepChange={onSubStepChange} />;
      case 3:
        return <Slide4BackendLogic subStep={subStep} onSubStepChange={onSubStepChange} />;
      case 4:
        return <Slide5ApiRestaurant subStep={subStep} onSubStepChange={onSubStepChange} />;
      case 5:
        return <Slide6DatabaseMemory subStep={subStep} onSubStepChange={onSubStepChange} />;
      case 6:
        return <Slide7AuthMatrix subStep={subStep} onSubStepChange={onSubStepChange} />;
      case 7:
        return <Slide8DomainHosting subStep={subStep} onSubStepChange={onSubStepChange} />;
      case 8:
        return <Slide9FullSystemCircuit subStep={subStep} onSubStepChange={onSubStepChange} />;
      case 9:
        return <Slide10StudentNotesStack subStep={subStep} onSubStepChange={onSubStepChange} />;
      case 10:
        return <Slide11RoadmapSteps subStep={subStep} onSubStepChange={onSubStepChange} />;
      case 11:
        return <Slide12ArchitectureCompare subStep={subStep} onSubStepChange={onSubStepChange} />;
      case 12:
        return <Slide14FirstProjectPicker subStep={subStep} onSubStepChange={onSubStepChange} />;
      case 13:
        return <Slide16LiveMasterclass subStep={subStep} onSubStepChange={onSubStepChange} />;
      default:
        return <Slide1JourneyMap subStep={subStep} onSubStepChange={onSubStepChange} />;
    }
  };

  return (
    <div className="w-full max-w-5xl lg:max-w-6xl mx-auto px-4 md:px-8 py-3 flex flex-col gap-3 pb-24 font-mono">
      {/* Clean Minimal Slide Header */}
      {slide.id !== 13 && (
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-bold text-[#55FFFF] bg-[#121420] px-2 py-0.5 border border-[#2e334a]">
              MODULE {slide.id < 10 ? `0${slide.id}` : slide.id}
            </span>
            <span className="text-zinc-600 text-xs">•</span>
            <span className="text-zinc-400 text-xs font-semibold uppercase">{slide.category}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-sans tracking-tight">
            {slide.title}
          </h2>

          {slide.subtitle && (
            <p className="text-xs sm:text-sm text-zinc-400 font-mono">
              {slide.subtitle}
            </p>
          )}
        </div>
      )}

      {/* Main Interactive Stage */}
      <div className="mt-1">
        {renderSimulator()}
      </div>
    </div>
  );
};
