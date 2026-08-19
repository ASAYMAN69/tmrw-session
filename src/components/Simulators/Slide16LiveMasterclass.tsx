import React, { useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { Calendar, Video, Sparkles, CheckCircle2, Ticket, X, Award, ChevronRight, Terminal } from 'lucide-react';
import { sound } from '../../utils/sound';
import { fireConfetti } from '../../utils/confetti';

interface Slide16Props {
  subStep?: number;
  onSubStepChange?: (subStep: number) => void;
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 15, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: 'spring', stiffness: 280, damping: 24 },
  },
};

export const Slide16LiveMasterclass: React.FC<Slide16Props> = ({
  subStep = 0,
  onSubStepChange,
}) => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [ticketClaimed, setTicketClaimed] = useState<boolean>(false);
  const [ticketId, setTicketId] = useState<string>('ACC-8492');

  const isFormActive = subStep >= 1;

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;

    sound.success();
    const newId = `ACC-${Math.floor(1000 + Math.random() * 9000)}`;
    setTicketId(newId);
    setTicketClaimed(true);
    fireConfetti();
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="w-full flex flex-col gap-3 font-mono"
    >
      {/* 1. Header Bar: ACC CodeLaunch 2026 x Adamjee Cantonment College IT Club */}
      <motion.div variants={itemVariants} className="pixel-box p-3 bg-[#121420] flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-[#181b2c] border border-[#00FF66] flex items-center justify-center text-[#00FF66] shadow-pixel-sm">
            <Terminal className="w-4 h-4" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-pixel text-[10px] text-white">ACC CODELAUNCH</span>
              <span className="font-pixel text-[10px] text-[#00FF66]">2026</span>
            </div>
            <span className="text-[10px] text-zinc-400">Adamjee Cantonment College IT Club</span>
          </div>
        </div>

        <div className="hidden sm:flex items-center gap-1 text-[10px] text-[#00FF66] bg-[#090a10] px-2.5 py-1 border border-[#00FF66]/30">
          <span className="w-2 h-2 rounded-full bg-[#00FF66] animate-pulse" />
          <span>LIVE VIRTUAL BOOTCAMP</span>
        </div>
      </motion.div>

      {/* 2. Main Title Banner (Minecraft Cyber Style) */}
      <motion.div
        variants={itemVariants}
        className="pixel-box p-5 bg-[#090a10] border-2 border-[#00FF66] shadow-glow-neon text-center relative overflow-hidden"
      >
        <div className="inline-block px-3 py-0.5 mb-1.5 bg-[#00FF66] text-black font-pixel text-[9px] uppercase tracking-wider shadow-pixel-sm">
          ONLINE MASTERCLASS
        </div>

        <h2 className="font-pixel text-lg sm:text-2xl md:text-3xl text-white tracking-wide uppercase mt-1">
          WEB DEVELOPMENT <span className="text-[#00FF66]">BOOTCAMP</span>
        </h2>

        <p className="text-xs sm:text-sm text-zinc-300 max-w-xl mx-auto mt-2 leading-relaxed font-mono">
          Learn the essentials of web development and turn your ideas into engaging, functional websites through practical learning.
        </p>

        <p className="text-[11px] text-[#55FFFF] font-bold mt-1">
          *no previous experience required*
        </p>
      </motion.div>

      {/* 3. 3-Column Event Specs Strip */}
      <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
        <div className="pixel-box p-3 flex items-center gap-2.5 bg-[#121420]">
          <div className="w-8 h-8 bg-[#181b2c] border border-[#55FFFF] flex items-center justify-center text-[#55FFFF] shrink-0">
            <Video className="w-4 h-4" />
          </div>
          <div>
            <span className="text-[10px] text-zinc-400 block font-bold">PLATFORM</span>
            <strong className="text-white">Google Meet</strong>
          </div>
        </div>

        <div className="pixel-box p-3 flex items-center gap-2.5 bg-[#121420]">
          <div className="w-8 h-8 bg-[#181b2c] border border-[#FFAA00] flex items-center justify-center text-[#FFAA00] shrink-0">
            <Calendar className="w-4 h-4" />
          </div>
          <div>
            <span className="text-[10px] text-zinc-400 block font-bold">DATE RANGE</span>
            <strong className="text-white">08–21 September</strong>
          </div>
        </div>

        <div className="pixel-box p-3 flex items-center gap-2.5 bg-[#121420]">
          <div className="w-8 h-8 bg-[#181b2c] border border-[#00FF66] flex items-center justify-center text-[#00FF66] shrink-0">
            <Sparkles className="w-4 h-4" />
          </div>
          <div>
            <span className="text-[10px] text-zinc-400 block font-bold">CURRICULUM</span>
            <strong className="text-[#00FF66]">8 Exclusive Sessions</strong>
          </div>
        </div>
      </motion.div>

      {/* 4. Interactive Registration / VIP Ticket Engine */}
      <motion.div variants={itemVariants} className="pixel-box p-4 bg-[#121420] border-2 border-[#55FFFF] relative">
        {!ticketClaimed ? (
          <div>
            {!isFormActive ? (
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
                <div>
                  <span className="font-pixel text-[9px] text-[#00FF66] uppercase">
                    STEP 2: CLAIM FREE ADMISSION
                  </span>
                  <p className="text-xs text-white mt-0.5">
                    Reserve your seat & get the private Google Meet link.
                  </p>
                </div>

                <button
                  onClick={() => {
                    sound.click();
                    onSubStepChange?.(1);
                  }}
                  className="pixel-btn pixel-btn-neon px-5 py-2.5 text-xs cursor-pointer flex items-center gap-2 shrink-0"
                >
                  <Ticket className="w-4 h-4" />
                  <span>REGISTER TODAY</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            ) : (
              <motion.form
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                onSubmit={handleRegister}
                className="space-y-3"
              >
                <div className="flex items-center justify-between pb-2 border-b border-[#2e334a]">
                  <div className="flex items-center gap-1.5">
                    <Ticket className="w-4 h-4 text-[#00FF66]" />
                    <span className="font-pixel text-[9px] text-white">
                      VIP PASS REGISTRATION FORM
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => onSubStepChange?.(0)}
                    className="text-zinc-400 hover:text-white cursor-pointer"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  <div>
                    <label className="block text-[10px] text-zinc-400 mb-1">Your Full Name:</label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Alex Chen"
                      className="w-full px-3 py-1.5 bg-[#090a10] border border-[#2e334a] text-xs text-white focus:outline-none focus:border-[#00FF66]"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] text-zinc-400 mb-1">Your Email (for Google Meet Link):</label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="alex@student.edu"
                      className="w-full px-3 py-1.5 bg-[#090a10] border border-[#2e334a] text-xs text-white focus:outline-none focus:border-[#00FF66]"
                      required
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full pixel-btn pixel-btn-neon py-2.5 text-xs cursor-pointer flex items-center justify-center gap-1.5 mt-1"
                >
                  <CheckCircle2 className="w-4 h-4" />
                  <span>CONFIRM & MINT OFFICIAL VIP TICKET</span>
                </button>
              </motion.form>
            )}
          </div>
        ) : (
          /* Minted VIP Pass flying into view */
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 320, damping: 22 }}
            className="p-4 bg-[#090a10] border-2 border-[#00FF66] shadow-glow-neon text-left space-y-3"
          >
            <div className="flex items-center justify-between pb-2 border-b border-[#2e334a]">
              <div className="flex items-center gap-1.5">
                <Award className="w-4 h-4 text-[#00FF66]" />
                <span className="font-pixel text-[10px] text-white">
                  OFFICIAL ADMISSION PASS MINTED
                </span>
              </div>
              <span className="text-[9px] font-bold text-black bg-[#00FF66] px-2 py-0.5">
                SEAT CONFIRMED
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div>
                <span className="text-[10px] text-zinc-400 block font-bold">STUDENT ATTENDEE</span>
                <h4 className="text-base font-extrabold text-white mt-0.5">{name}</h4>
                <p className="text-xs text-[#00FF66] mt-0.5">Invite dispatched to: {email}</p>
              </div>

              <div className="p-2.5 bg-[#121420] border border-[#00FF66]/40 flex flex-col justify-center">
                <span className="text-[9px] text-zinc-400">TICKET PASS ID</span>
                <strong className="text-sm text-[#00FF66] font-pixel">{ticketId}</strong>
                <span className="text-[10px] text-zinc-300 mt-0.5">08–21 Sept • Google Meet</span>
              </div>
            </div>

            <div className="pt-2 border-t border-[#2e334a] flex items-center justify-between">
              <button
                onClick={() => fireConfetti()}
                className="pixel-btn px-3 py-1.5 text-xs cursor-pointer text-[#00FF66] flex items-center gap-1.5"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Confetti Blast</span>
              </button>
              <span className="text-xs text-[#55FFFF] font-bold">See you in Session 01!</span>
            </div>
          </motion.div>
        )}
      </motion.div>

      {/* 5. Bottom Slogan */}
      <motion.p variants={itemVariants} className="text-xs text-center text-zinc-400 font-bold tracking-widest pt-1">
        WE BRING THE FUTURE TO YOU
      </motion.p>
    </motion.div>
  );
};
