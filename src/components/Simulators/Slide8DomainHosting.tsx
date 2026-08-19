import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Server, Globe, CheckCircle2, Search, ArrowRight } from 'lucide-react';
import { sound } from '../../utils/sound';

interface Slide8Props {
  subStep?: number;
  onSubStepChange?: (subStep: number) => void;
}

export const Slide8DomainHosting: React.FC<Slide8Props> = ({
  subStep = 0,
}) => {
  const [resolved, setResolved] = useState<boolean>(false);

  const testResolve = () => {
    sound.packetPing();
    setResolved(true);
    sound.success();
  };

  return (
    <div className="w-full flex flex-col gap-3 font-mono">
      {/* 2 Core Concepts: Domain vs Hosting */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          className={`pixel-box p-3.5 ${subStep === 0 ? 'pixel-box-active' : ''}`}
        >
          <div className="flex items-center justify-between mb-1">
            <Globe className="w-5 h-5 text-[#55FFFF]" />
            <span className="text-[10px] font-bold text-[#55FFFF]">THE ADDRESS</span>
          </div>
          <h3 className="text-sm font-bold text-white">DOMAIN NAME</h3>
          <p className="text-xs text-[#55FF55] font-bold mt-0.5">&gt; "studentnotes.dev"</p>
          <p className="text-xs text-zinc-300 mt-1">
            The human-friendly address typed into the browser bar.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          className={`pixel-box p-3.5 ${subStep === 0 ? 'pixel-box-active' : ''}`}
        >
          <div className="flex items-center justify-between mb-1">
            <Server className="w-5 h-5 text-[#55FFFF]" />
            <span className="text-[10px] font-bold text-[#55FFFF]">THE SERVER</span>
          </div>
          <h3 className="text-sm font-bold text-white">CLOUD HOSTING</h3>
          <p className="text-xs text-[#55FF55] font-bold mt-0.5">&gt; Cloud Server (24/7)</p>
          <p className="text-xs text-zinc-300 mt-1">
            The computer running in the cloud keeping your app online.
          </p>
        </motion.div>
      </div>

      {/* DNS Translation Resolver */}
      <motion.div
        layout
        className="pixel-box p-4 bg-[#090a10] border-2 border-[#55FFFF]"
      >
        <div className="flex items-center justify-between pb-2 border-b border-[#2e334a]">
          <span className="text-xs font-bold text-[#55FF55]">
            DNS PHONEBOOK LOOKUP
          </span>
          <button
            onClick={testResolve}
            className="pixel-btn px-2.5 py-1 text-xs cursor-pointer text-[#55FFFF] flex items-center gap-1"
          >
            <Search className="w-3 h-3" />
            <span>PING DNS</span>
          </button>
        </div>

        <div className="mt-3 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs">
          <div className="p-2 bg-[#121420] border border-[#2e334a] w-full text-center">
            <span className="text-zinc-400 block text-[10px]">DOMAIN</span>
            <strong className="text-white">studentnotes.dev</strong>
          </div>
          <ArrowRight className="w-4 h-4 text-[#55FFFF] shrink-0 hidden sm:block" />
          <div className="p-2 bg-[#121420] border border-[#2e334a] w-full text-center">
            <span className="text-zinc-400 block text-[10px]">DNS IP ADDRESS</span>
            <strong className="text-[#FFAA00]">{resolved ? '76.76.21.21' : 'Click Ping to resolve'}</strong>
          </div>
          <ArrowRight className="w-4 h-4 text-[#55FFFF] shrink-0 hidden sm:block" />
          <motion.div
            layout
            className="p-2 bg-[#121420] border border-[#55FF55] w-full text-center"
          >
            <span className="text-zinc-400 block text-[10px]">HOSTING SERVER</span>
            <strong className="text-[#55FF55] flex items-center justify-center gap-1">
              <CheckCircle2 className="w-3 h-3" /> Connected
            </strong>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};
