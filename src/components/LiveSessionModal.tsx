import React, { useState } from 'react';
import { X, Ticket, Calendar, Clock, Monitor, Sparkles, CheckCircle2 } from 'lucide-react';
import { sound } from '../utils/sound';
import { fireConfetti } from '../utils/confetti';

interface LiveSessionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LiveSessionModal: React.FC<LiveSessionModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [registered, setRegistered] = useState<boolean>(false);

  if (!isOpen) return null;

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;
    sound.success();
    setRegistered(true);
    fireConfetti();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
      <div className="pixel-box max-w-lg w-full p-5 bg-[#121420] border-2 border-[#55FFFF] shadow-pixel relative font-mono">
        {/* Close */}
        <button
          onClick={() => {
            sound.click();
            onClose();
          }}
          className="absolute top-3 right-3 text-zinc-400 hover:text-white cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {!registered ? (
          <form onSubmit={handleRegister} className="space-y-3">
            <div className="flex items-center gap-2">
              <Ticket className="w-6 h-6 text-[#55FFFF]" />
              <div>
                <span className="text-[10px] font-bold text-[#55FF55] block">LIVE MASTERCLASS PASS</span>
                <h3 className="text-sm font-bold text-white uppercase">
                  FROM CODE <span className="text-[#55FFFF]">TO WEB</span>
                </h3>
              </div>
            </div>

            <p className="text-xs text-zinc-300 leading-relaxed">
              90-minute live session breaking down every layer: HTML/React frontend, Node API server, PostgreSQL database, DNS & live cloud deployment.
            </p>

            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="p-2 bg-[#090a10] border border-[#2e334a] flex items-center gap-2">
                <Calendar className="w-4 h-4 text-[#55FFFF] shrink-0" />
                <div>
                  <span className="text-[10px] text-zinc-500 block">TIME</span>
                  <strong className="text-white">Saturday, 8 PM</strong>
                </div>
              </div>
              <div className="p-2 bg-[#090a10] border border-[#2e334a] flex items-center gap-2">
                <Monitor className="w-4 h-4 text-[#55FF55] shrink-0" />
                <div>
                  <span className="text-[10px] text-zinc-500 block">PLATFORM</span>
                  <strong className="text-[#55FF55]">Live Virtual Stage</strong>
                </div>
              </div>
            </div>

            <div className="space-y-2 pt-1">
              <div>
                <label className="block text-[10px] text-zinc-400 mb-1">Your Name:</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Alex Chen"
                  className="w-full px-3 py-1.5 bg-[#090a10] border border-[#2e334a] text-xs text-white focus:outline-none focus:border-[#55FFFF]"
                  required
                />
              </div>
              <div>
                <label className="block text-[10px] text-zinc-400 mb-1">Your Email:</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="alex@student.edu"
                  className="w-full px-3 py-1.5 bg-[#090a10] border border-[#2e334a] text-xs text-white focus:outline-none focus:border-[#55FFFF]"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full pixel-btn pixel-btn-primary py-2 text-xs cursor-pointer text-white flex items-center justify-center gap-2 uppercase tracking-normal"
            >
              <Ticket className="w-4 h-4" />
              <span>CLAIM FREE VIP LIVE PASS</span>
            </button>
          </form>
        ) : (
          <div className="text-center py-4 space-y-3">
            <CheckCircle2 className="w-10 h-10 text-[#55FF55] mx-auto" />
            <span className="text-[10px] font-bold text-[#55FF55] block">PASS CONFIRMED</span>
            <h3 className="text-sm font-bold text-white uppercase">YOU'RE ON THE VIP LIST!</h3>
            <p className="text-xs text-zinc-300">We sent your stream invite link to <strong className="text-[#55FFFF]">{email}</strong>.</p>
            <button
              onClick={onClose}
              className="pixel-btn pixel-btn-primary px-4 py-1.5 text-xs cursor-pointer text-white"
            >
              ENTER DECK &rarr;
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
