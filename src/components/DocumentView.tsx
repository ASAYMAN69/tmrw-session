import React, { useState } from 'react';
import { SLIDES } from '../data/slidesData';
import { SlideRenderer } from './SlideRenderer';
import { Search, ArrowUp, ChevronRight } from 'lucide-react';
import { sound } from '../utils/sound';

interface DocumentViewProps {
  onOpenLiveSessionModal?: () => void;
}

export const DocumentView: React.FC<DocumentViewProps> = () => {
  const [activeSection, setActiveSection] = useState<number>(1);
  const [filterQuery, setFilterQuery] = useState<string>('');

  const filteredSlides = SLIDES.filter(slide => {
    return (
      slide.title.toLowerCase().includes(filterQuery.toLowerCase()) ||
      slide.subtitle?.toLowerCase().includes(filterQuery.toLowerCase()) ||
      slide.category.toLowerCase().includes(filterQuery.toLowerCase())
    );
  });

  const scrollToSection = (id: number) => {
    sound.click();
    setActiveSection(id);
    const element = document.getElementById(`section-${id}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const scrollToTop = () => {
    sound.click();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-6 flex flex-col md:flex-row gap-6 font-mono">
      {/* Table of Contents */}
      <aside className="md:w-64 shrink-0">
        <div className="md:sticky md:top-16 pixel-box p-3 space-y-2">
          <div className="flex items-center justify-between pb-1 border-b border-[#2e334a]">
            <span className="font-pixel text-[9px] text-[#55FFFF]">PLAYBOOK INDEX</span>
          </div>

          <div className="relative">
            <Search className="w-3 h-3 text-zinc-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={filterQuery}
              onChange={(e) => setFilterQuery(e.target.value)}
              placeholder="Search..."
              className="w-full pl-7 pr-2 py-1 bg-[#090a10] border border-[#2e334a] text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-[#55FFFF]"
            />
          </div>

          <div className="space-y-1 max-h-[60vh] overflow-y-auto pr-1 text-xs">
            {filteredSlides.map((slide) => (
              <button
                key={slide.id}
                onClick={() => scrollToSection(slide.id)}
                className={`w-full text-left p-1.5 transition-all cursor-pointer flex items-center justify-between ${
                  activeSection === slide.id
                    ? 'bg-[#181b2c] text-[#55FFFF] border border-[#55FFFF] font-bold'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                <span className="truncate">0{slide.id}. {slide.title}</span>
                <ChevronRight className="w-3 h-3 text-zinc-600 shrink-0" />
              </button>
            ))}
          </div>

          <button
            onClick={scrollToTop}
            className="w-full pixel-btn py-1 text-[8px] cursor-pointer flex items-center justify-center gap-1"
          >
            <ArrowUp className="w-3 h-3" />
            <span>TOP</span>
          </button>
        </div>
      </aside>

      {/* Content */}
      <main className="flex-1 flex flex-col gap-10">
        {filteredSlides.map((slide) => (
          <section
            key={slide.id}
            id={`section-${slide.id}`}
            className="scroll-mt-16 pt-4 border-t border-[#2e334a] first:border-none first:pt-0"
          >
            <SlideRenderer slide={slide} />
          </section>
        ))}
      </main>
    </div>
  );
};
