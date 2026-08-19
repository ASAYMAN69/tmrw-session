import React from 'react';
import { motion } from 'framer-motion';
import { SlideData } from '../../types/presentation';
import { StickyNote, X, Terminal } from 'lucide-react';
import { sound } from '../../utils/sound';

interface PresenterNotesProps {
  slide: SlideData;
  isOpen: boolean;
  onClose: () => void;
}

export const PresenterNotes: React.FC<PresenterNotesProps> = ({
  slide,
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <motion.aside
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      className="fixed bottom-20 right-4 sm:right-6 z-40 w-[92vw] sm:w-96 retro-window p-4 border-sky-500/50 bg-[#050A18]/98 shadow-glow-cyan"
    >
      <div className="flex items-center justify-between pb-2.5 border-b border-sky-500/30">
        <div className="flex items-center gap-2">
          <Terminal className="w-4 h-4 text-sky-400" />
          <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">
            SPEAKER_CUES [MOD_{slide.id}]
          </span>
        </div>
        <button
          onClick={() => {
            sound.click();
            onClose();
          }}
          className="p-1 text-zinc-400 hover:text-white cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      <div className="mt-3 space-y-2 max-h-72 overflow-y-auto pr-1 font-mono">
        {slide.purpose && (
          <div className="p-2.5 rounded-xl bg-blue-950/40 border border-sky-500/30 text-xs text-sky-200">
            <span className="font-bold block text-cyan-300 mb-0.5">&gt; OBJECTIVE:</span>
            {slide.purpose}
          </div>
        )}

        <div className="space-y-1.5">
          {slide.presenterNotes.map((note, idx) => (
            <div key={idx} className="flex items-start gap-2 text-xs text-zinc-300 p-2 rounded-lg bg-[#020817] border border-sky-500/20">
              <span className="text-sky-400 font-bold shrink-0">{idx + 1}.</span>
              <p className="leading-relaxed">{note}</p>
            </div>
          ))}
        </div>

        {slide.takeaway && (
          <div className="p-2.5 rounded-xl bg-[#0A1633] border border-sky-500/30 text-xs text-zinc-400">
            <span className="font-bold text-sky-300 block mb-0.5">&gt; TAKEAWAY:</span>
            {slide.takeaway}
          </div>
        )}
      </div>
    </motion.aside>
  );
};
