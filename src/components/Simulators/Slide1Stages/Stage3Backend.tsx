import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, ShieldCheck, ShieldAlert, Key, Terminal, ArrowRight } from 'lucide-react';
import { sound } from '../../../utils/sound';

export const Stage3Backend: React.FC = () => {
  const [requestType, setRequestType] = useState<'clean' | 'malicious' | 'auth'>('clean');
  const [terminalLog, setTerminalLog] = useState<string>(
    '[200 OK] Server listening on port 3000. Ready to process API requests.'
  );

  const simulateRequest = (type: 'clean' | 'malicious' | 'auth') => {
    setRequestType(type);
    sound.packetPing();

    if (type === 'clean') {
      setTerminalLog(
        '[API INCOMING]: POST /api/notes { title: "Math Homework" } -> Input Validated -> 200 OK Saved.'
      );
      sound.success();
    } else if (type === 'malicious') {
      setTerminalLog(
        '[SECURITY ALERT]: POST /api/notes { title: "<script>stealCookies()</script>" } -> BLOCKED 400 Bad Request: XSS Injection Sanitized.'
      );
      sound.click();
    } else {
      setTerminalLog(
        '[AUTH SERVICE]: POST /api/login -> Salted Bcrypt Hash Match -> Issued signed JWT token: "eyJhbGciOiJIUzI1Ni..." (200 OK)'
      );
      sound.success();
    }
  };

  return (
    <div className="flex flex-col gap-4 font-mono select-none">
      {/* Header */}
      <div className="flex items-center justify-between pb-2 border-b border-[#2e334a]">
        <div className="flex items-center gap-2">
          <Cpu className="w-5 h-5 text-[#0088FF]" />
          <h3 className="text-sm sm:text-base font-bold text-white font-sans uppercase">
            STAGE 03: BACKEND — THE SERVER AUTHORITY
          </h3>
        </div>
        <span className="text-xs text-[#55FF55] font-bold hidden sm:inline">
          Never Trust Client Input • Single Source of Truth
        </span>
      </div>

      {/* 3 Pipeline Test Triggers */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <button
          onClick={() => simulateRequest('clean')}
          className={`p-3 text-left border-2 cursor-pointer shadow-pixel transition-all ${
            requestType === 'clean' ? 'bg-[#181b2c] border-[#55FF55]' : 'bg-[#090a10] border-[#2e334a]'
          }`}
        >
          <div className="flex items-center justify-between mb-1">
            <span className="text-[10px] font-bold text-[#55FF55]">TEST 01</span>
            <ShieldCheck className="w-4 h-4 text-[#55FF55]" />
          </div>
          <h4 className="text-xs font-bold text-white uppercase">Valid Request</h4>
          <p className="text-[11px] text-zinc-300 mt-1">Normal user note save.</p>
        </button>

        <button
          onClick={() => simulateRequest('malicious')}
          className={`p-3 text-left border-2 cursor-pointer shadow-pixel transition-all ${
            requestType === 'malicious' ? 'bg-[#181b2c] border-[#FF5555]' : 'bg-[#090a10] border-[#2e334a]'
          }`}
        >
          <div className="flex items-center justify-between mb-1">
            <span className="text-[10px] font-bold text-[#FF5555]">TEST 02</span>
            <ShieldAlert className="w-4 h-4 text-[#FF5555]" />
          </div>
          <h4 className="text-xs font-bold text-white uppercase">Hacker Injection</h4>
          <p className="text-[11px] text-zinc-300 mt-1">Sanitizes malicious scripts.</p>
        </button>

        <button
          onClick={() => simulateRequest('auth')}
          className={`p-3 text-left border-2 cursor-pointer shadow-pixel transition-all ${
            requestType === 'auth' ? 'bg-[#181b2c] border-[#55FFFF]' : 'bg-[#090a10] border-[#2e334a]'
          }`}
        >
          <div className="flex items-center justify-between mb-1">
            <span className="text-[10px] font-bold text-[#55FFFF]">TEST 03</span>
            <Key className="w-4 h-4 text-[#55FFFF]" />
          </div>
          <h4 className="text-xs font-bold text-white uppercase">Password Hash</h4>
          <p className="text-[11px] text-zinc-300 mt-1">Checks Bcrypt & issues JWT.</p>
        </button>
      </div>

      {/* Real-time Server Terminal Output */}
      <div className="p-4 bg-[#090a10] border-2 border-[#383e58] shadow-pixel">
        <div className="flex items-center justify-between pb-2 border-b border-[#2e334a] text-xs">
          <div className="flex items-center gap-1.5 text-[#55FFFF] font-bold">
            <Terminal className="w-4 h-4" />
            <span>NODE_EXPRESS_LOGS [STDOUT]</span>
          </div>
          <span className="text-[10px] text-[#55FF55] font-bold">SERVER STATUS: ACTIVE (24/7)</span>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={terminalLog}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className={`mt-3 text-xs leading-relaxed ${
              requestType === 'malicious' ? 'text-[#FF5555]' : 'text-[#55FFFF]'
            }`}
          >
            &gt; {terminalLog}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};
