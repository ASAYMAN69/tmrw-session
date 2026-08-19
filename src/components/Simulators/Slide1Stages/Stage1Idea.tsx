import React from 'react';
import { Lightbulb, Target, FileText, CheckCircle2, AlertTriangle } from 'lucide-react';

export const Stage1Idea: React.FC = () => {
  return (
    <div className="flex flex-col gap-4 font-mono select-none">
      {/* Infographic Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-[#2e334a]">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#FFAA00]/20 text-[#FFAA00] flex items-center justify-center border-2 border-[#FFAA00]">
            <Lightbulb className="w-6 h-6" />
          </div>
          <h3 className="text-lg sm:text-xl font-black text-white font-sans uppercase">
            01. THE IDEA & SCOPE FUNNEL
          </h3>
        </div>
        <span className="text-xs sm:text-sm text-[#FFAA00] font-black px-3 py-1 bg-[#090a10] border border-[#FFAA00]/40 w-fit">
          RULE: 1 Problem • 1 User • 2 Screens
        </span>
      </div>

      {/* 3-Tier Scope Funnel Diagram with Large Bold Typography */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
        {/* Tier 1 */}
        <div className="p-4 bg-[#090a10] border-2 border-[#FFAA00] flex flex-col justify-between shadow-pixel">
          <div>
            <div className="flex items-center gap-2 text-[#FFAA00] font-black text-sm sm:text-base mb-1.5">
              <Target className="w-5 h-5" />
              <span>STEP 1: THE PROBLEM</span>
            </div>
            <p className="text-zinc-100 text-sm font-semibold leading-relaxed">
              Pinpoint a single painful problem real people face daily.
            </p>
          </div>
          <div className="mt-3 p-3 bg-[#121420] border border-[#2e334a] text-xs sm:text-sm text-[#FFAA00] font-bold">
            "Students lose homework deadlines across 5 chat apps."
          </div>
        </div>

        {/* Tier 2 */}
        <div className="p-4 bg-[#090a10] border-2 border-[#55FFFF] flex flex-col justify-between shadow-pixel">
          <div>
            <div className="flex items-center gap-2 text-[#55FFFF] font-black text-sm sm:text-base mb-1.5">
              <FileText className="w-5 h-5" />
              <span>STEP 2: USER STORY</span>
            </div>
            <p className="text-zinc-100 text-sm font-semibold leading-relaxed">
              Define the solution in one crystal-clear sentence.
            </p>
          </div>
          <div className="mt-3 p-3 bg-[#121420] border border-[#2e334a] text-xs sm:text-sm text-white">
            <strong className="text-[#55FFFF]">"As a student,</strong> I want to save class notes with dates so I never miss a test."
          </div>
        </div>

        {/* Tier 3 */}
        <div className="p-4 bg-[#090a10] border-2 border-[#55FF55] flex flex-col justify-between shadow-pixel">
          <div>
            <div className="flex items-center gap-2 text-[#55FF55] font-black text-sm sm:text-base mb-1.5">
              <CheckCircle2 className="w-5 h-5" />
              <span>STEP 3: 2-SCREEN MVP</span>
            </div>
            <p className="text-zinc-100 text-sm font-semibold leading-relaxed">
              Sketch 2 simple screens on paper (Dashboard + Note Editor).
            </p>
          </div>
          <div className="mt-3 p-3 bg-[#121420] border border-[#2e334a] text-xs sm:text-sm text-[#55FF55] font-black">
            ✓ Ready to build! Cut everything else for v1.
          </div>
        </div>
      </div>

      {/* Warning vs Pro Tip Footer Strip */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
        <div className="p-3 bg-[#FF5555]/15 border border-[#FF5555] text-[#FF5555] flex items-center gap-2.5">
          <AlertTriangle className="w-5 h-5 shrink-0" />
          <span className="font-bold">
            <strong>Pitfall:</strong> Over-engineering (AI, payments, 50 features) leads to burnout.
          </span>
        </div>
        <div className="p-3 bg-[#55FF55]/15 border border-[#55FF55] text-[#55FF55] flex items-center gap-2.5">
          <CheckCircle2 className="w-5 h-5 shrink-0" />
          <span className="font-bold">
            <strong>Golden Rule:</strong> A simple finished project is worth 100x an unfinished idea.
          </span>
        </div>
      </div>
    </div>
  );
};
