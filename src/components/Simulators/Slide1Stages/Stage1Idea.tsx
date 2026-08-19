import React from 'react';
import { Lightbulb, Target, FileText, CheckCircle2, AlertTriangle, ArrowRight } from 'lucide-react';

export const Stage1Idea: React.FC = () => {
  return (
    <div className="flex flex-col gap-4 font-mono select-none">
      {/* Infographic Header */}
      <div className="flex items-center justify-between pb-2 border-b border-[#2e334a]">
        <div className="flex items-center gap-2">
          <Lightbulb className="w-5 h-5 text-[#FFAA00]" />
          <h3 className="text-sm sm:text-base font-bold text-white font-sans uppercase">
            01. THE IDEA & SCOPE FUNNEL
          </h3>
        </div>
        <span className="text-[11px] text-[#FFAA00] font-bold">
          Rule: 1 Problem • 1 User • 2 Screens
        </span>
      </div>

      {/* Unique Template: 3-Tier Scope Funnel Diagram */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
        {/* Tier 1: Problem */}
        <div className="p-3.5 bg-[#090a10] border-2 border-[#FFAA00] flex flex-col justify-between shadow-pixel">
          <div>
            <div className="flex items-center gap-1.5 text-[#FFAA00] font-bold mb-1">
              <Target className="w-4 h-4" />
              <span>STEP 1: THE PROBLEM</span>
            </div>
            <p className="text-zinc-300 text-xs mt-1 leading-relaxed">
              Pinpoint a single painful problem real people experience.
            </p>
          </div>
          <div className="mt-3 p-2 bg-[#121420] border border-[#2e334a] text-[11px] text-[#FFAA00]">
            Example: "Students lose homework deadlines across 5 chat apps."
          </div>
        </div>

        {/* Tier 2: User Story */}
        <div className="p-3.5 bg-[#090a10] border-2 border-[#55FFFF] flex flex-col justify-between shadow-pixel">
          <div>
            <div className="flex items-center gap-1.5 text-[#55FFFF] font-bold mb-1">
              <FileText className="w-4 h-4" />
              <span>STEP 2: USER STORY</span>
            </div>
            <p className="text-zinc-300 text-xs mt-1 leading-relaxed">
              Define the solution in one clear sentence before coding.
            </p>
          </div>
          <div className="mt-3 p-2 bg-[#121420] border border-[#2e334a] text-[11px] text-white">
            <span className="text-[#55FFFF] font-bold">"As a student,</span> I want to save class notes with dates so I never miss a test."
          </div>
        </div>

        {/* Tier 3: Blueprint */}
        <div className="p-3.5 bg-[#090a10] border-2 border-[#55FF55] flex flex-col justify-between shadow-pixel">
          <div>
            <div className="flex items-center gap-1.5 text-[#55FF55] font-bold mb-1">
              <CheckCircle2 className="w-4 h-4" />
              <span>STEP 3: 2-SCREEN MVP</span>
            </div>
            <p className="text-zinc-300 text-xs mt-1 leading-relaxed">
              Sketch 2 simple screens on paper (Dashboard + Note Editor).
            </p>
          </div>
          <div className="mt-3 p-2 bg-[#121420] border border-[#2e334a] text-[11px] text-[#55FF55] font-bold">
            ✓ Ready to build! Cut everything else for v1.
          </div>
        </div>
      </div>

      {/* Warning vs Pro Tip Footer Strip */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
        <div className="p-2.5 bg-[#FF5555]/10 border border-[#FF5555]/40 text-[#FF5555] flex items-center gap-2">
          <AlertTriangle className="w-4 h-4 shrink-0" />
          <span><strong>Pitfall:</strong> Over-engineering (AI, payments, 50 features) leads to burnout.</span>
        </div>
        <div className="p-2.5 bg-[#55FF55]/10 border border-[#55FF55]/40 text-[#55FF55] flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 shrink-0" />
          <span><strong>Golden Rule:</strong> A simple finished project is worth 100x an unfinished idea.</span>
        </div>
      </div>
    </div>
  );
};
