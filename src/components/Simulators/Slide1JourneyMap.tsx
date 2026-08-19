import React from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import {
  Lightbulb,
  Palette,
  Cpu,
  Database,
  Lock,
  Cloud,
  Globe,
  Rocket,
  CheckCircle2,
  Zap,
  ArrowRight
} from 'lucide-react';
import { sound } from '../../utils/sound';

interface StageData {
  id: number;
  name: string;
  shortName: string;
  icon: any;
  coreQuestion: string;
  badge: string;
  accentColor: string;
  summary: string;
  points: { title: string; desc: string }[];
  flow: string[];
  proTip: string;
  tools: string[];
}

const STAGES: StageData[] = [
  {
    id: 1,
    name: 'THE IDEA & MVP',
    shortName: 'Idea',
    icon: Lightbulb,
    coreQuestion: 'What single problem does this website solve for 1 person?',
    badge: 'STAGE 01',
    accentColor: '#FFAA00',
    summary: 'Define 1 problem to solve before writing any code. Keep scope small enough to finish.',
    points: [
      { title: 'User Story Formula', desc: '"As a [student], I want to [save notes] so [I never lose homework]."' },
      { title: 'Napkin Wireframes', desc: 'Sketch 2 simple screens on paper before writing HTML/CSS.' }
    ],
    flow: ['Real Problem', 'User Story', 'Napkin Sketch', 'Ready to Build'],
    proTip: 'A finished simple project is worth 100x more than an unfinished complex idea.',
    tools: ['Excalidraw', 'Notion', 'Paper & Pen']
  },
  {
    id: 2,
    name: 'FRONTEND (THE CLIENT UI)',
    shortName: 'Frontend',
    icon: Palette,
    coreQuestion: 'What does the user see, click, and interact with in their browser?',
    badge: 'STAGE 02',
    accentColor: '#55FFFF',
    summary: 'The visual buttons, inputs, and layout executing directly on the user laptop or phone.',
    points: [
      { title: 'HTML + CSS + JavaScript', desc: 'HTML builds structure, CSS styles the pixel theme, JS powers clicks.' },
      { title: 'Edge CDN Delivery', desc: 'Cached on 300+ global edge servers for instantaneous zero-latency page loads.' }
    ],
    flow: ['HTML Structure', 'CSS Theme', 'React State', 'Interactive UI'],
    proTip: 'HTML builds the house, CSS paints the walls, JavaScript opens the garage door.',
    tools: ['React', 'Vite', 'Tailwind CSS', 'TypeScript']
  },
  {
    id: 3,
    name: 'BACKEND (THE SERVER ENGINE)',
    shortName: 'Backend',
    icon: Cpu,
    coreQuestion: 'What executes rules, validates passwords, and calculates logic behind the scenes?',
    badge: 'STAGE 03',
    accentColor: '#0088FF',
    summary: 'The 24/7 server authority running business rules and sanitizing data inputs.',
    points: [
      { title: 'Never Trust the Client', desc: 'Anyone can modify browser JavaScript; the server is the single source of truth.' },
      { title: 'Password & Token Security', desc: 'Compares cryptographic bcrypt hashes and issues signed JWT session tokens.' }
    ],
    flow: ['Client Request', 'Sanitize Input', 'Verify Password', '200 OK Token'],
    proTip: 'The frontend gets the attention; the backend does the heavy paperwork.',
    tools: ['Node.js', 'Express', 'FastAPI', 'Hono']
  },
  {
    id: 4,
    name: 'DATABASE (PERMANENT STORAGE)',
    shortName: 'Database',
    icon: Database,
    coreQuestion: 'Where does data live so it is remembered when you close or reload the tab?',
    badge: 'STAGE 04',
    accentColor: '#55FF55',
    summary: 'Permanent cloud disk storage that survives page reloads and power outages.',
    points: [
      { title: 'RAM vs Persistent Disk', desc: 'Browser RAM disappears on reload; databases store records permanently on disk.' },
      { title: 'The 4 CRUD Operations', desc: 'Create (INSERT), Read (SELECT), Update (UPDATE), and Delete (DELETE).' }
    ],
    flow: ['API Query', 'Disk Write', 'Index & Backup', 'Permanent Record'],
    proTip: 'The browser displays the data; the database remembers it.',
    tools: ['PostgreSQL', 'Supabase', 'Prisma ORM', 'SQLite']
  },
  {
    id: 5,
    name: 'AUTH & SECURITY (KEYCARDS)',
    shortName: 'Auth',
    icon: Lock,
    coreQuestion: 'Who are you, and what private records are you authorized to view and edit?',
    badge: 'STAGE 05',
    accentColor: '#FF5555',
    summary: 'Proving user identity (AuthN) and enforcing role-based permissions (AuthZ).',
    points: [
      { title: 'Authentication vs Authorization', desc: 'AuthN = Proving who you are; AuthZ = Permissions (Student vs Admin).' },
      { title: 'Encrypted JWT Keycards', desc: 'Server hands the browser a signed session token stored in secure cookies.' }
    ],
    flow: ['User Login', 'Hash Verification', 'Signed Keycard', 'Private Access'],
    proTip: 'Never roll custom crypto. Use proven authentication libraries.',
    tools: ['Supabase Auth', 'Clerk', 'NextAuth', 'Bcrypt']
  },
  {
    id: 6,
    name: 'HOSTING (24/7 CLOUD SERVER)',
    shortName: 'Hosting',
    icon: Cloud,
    coreQuestion: 'How is your website online 24/7 when your personal laptop is closed and asleep?',
    badge: 'STAGE 06',
    accentColor: '#55FFFF',
    summary: 'Deploying your built code to high-speed cloud data centers around the world.',
    points: [
      { title: 'Localhost vs Global Cloud', desc: 'Localhost is only on your machine; cloud hosting runs 24/7 with automated SSL.' },
      { title: 'Git Push to Deploy', desc: 'Pushing to GitHub triggers automated builds and updates production in seconds.' }
    ],
    flow: ['git push main', 'Cloud Build', 'Global CDN Sync', 'Live Online 24/7'],
    proTip: 'Modern hosting is fully automated; manual FTP is a thing of the past.',
    tools: ['Vercel', 'Netlify', 'Render', 'Cloudflare']
  },
  {
    id: 7,
    name: 'DOMAIN & DNS (THE ADDRESS)',
    shortName: 'Domain',
    icon: Globe,
    coreQuestion: 'How do people find your website without memorizing raw numerical IP addresses?',
    badge: 'STAGE 07',
    accentColor: '#FFAA00',
    summary: 'The human-friendly phonebook mapping names (notes.dev) to server IP addresses.',
    points: [
      { title: 'Domain vs Hosting', desc: 'The domain is the street address (notes.dev); hosting is the actual building.' },
      { title: 'DNS Resolution & SSL', desc: 'Translates domain names to IP addresses in 15ms and provides HTTPS encryption.' }
    ],
    flow: ['Type Domain', 'DNS Lookup', 'Resolve IP', 'Connect Server'],
    proTip: 'Domain = Address. Hosting = The computer running at that address.',
    tools: ['Namecheap', 'Cloudflare DNS', 'Porkbun']
  },
  {
    id: 8,
    name: 'LIVE LAUNCH & ARCHITECTURE',
    shortName: 'Live',
    icon: Rocket,
    coreQuestion: 'How do all 8 pieces synchronize into one complete, live web application?',
    badge: 'STAGE 08',
    accentColor: '#55FF55',
    summary: 'Every click, login, and data save is a synchronized message flowing through this stack.',
    points: [
      { title: 'The Complete Synchronized Loop', desc: 'Browser -> DNS -> CDN -> Node API -> Database -> 200 OK response to UI.' },
      { title: 'The Full-Stack Mental Map', desc: 'Once you understand the map, every line of code has a clear home.' }
    ],
    flow: ['Visitor Client', 'API Messenger', 'Database Vault', 'Global App Live'],
    proTip: 'Understanding the map is the hardest part. Now you can build anything.',
    tools: ['Sentry', 'GitHub Actions', 'Google Search Console']
  }
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.04 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 8, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: 'spring', stiffness: 320, damping: 25 },
  },
};

interface Slide1Props {
  subStep?: number;
  onSubStepChange?: (subStep: number) => void;
}

export const Slide1JourneyMap: React.FC<Slide1Props> = ({
  subStep = 0,
  onSubStepChange,
}) => {
  const activeIndex = Math.min(STAGES.length - 1, Math.max(0, subStep));
  const current = STAGES[activeIndex];
  const CurrentIcon = current.icon;

  return (
    <div className="w-full flex flex-col gap-3 font-mono select-none">
      {/* 8-Slot Hotbar Strip */}
      <div className="bg-[#121420] border-2 border-[#2e334a] p-1.5 shadow-pixel">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-4 sm:grid-cols-8 gap-1"
        >
          {STAGES.map((s, idx) => {
            const Icon = s.icon;
            const isSelected = idx === activeIndex;
            const isDone = idx < activeIndex;

            return (
              <button
                key={s.id}
                onClick={() => {
                  sound.click();
                  onSubStepChange?.(idx);
                }}
                className={`py-2 px-1 flex flex-col items-center justify-center cursor-pointer transition-all border ${
                  isSelected
                    ? 'bg-[#1e2640] border-[#55FFFF] shadow-pixel-sm text-[#55FFFF]'
                    : isDone
                    ? 'bg-[#151828] border-[#383e58] text-zinc-300 hover:text-white'
                    : 'bg-[#0b0d16] border-[#22273a] text-zinc-600 hover:text-zinc-400'
                }`}
              >
                <Icon className="w-4 h-4 mb-1" />
                <span className="text-[10px] font-bold truncate w-full text-center">
                  0{s.id}. {s.shortName}
                </span>
              </button>
            );
          })}
        </motion.div>
      </div>

      {/* Main High-Contrast Structured Milestone Card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current.id}
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          exit={{ opacity: 0, y: -6 }}
          className="bg-[#121420] border-2 border-[#383e58] p-4 sm:p-5 shadow-pixel flex flex-col gap-3.5"
        >
          {/* Header Strip */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-[#2e334a]">
            <div className="flex items-center gap-3">
              <div
                className="w-9 h-9 bg-[#181b2c] border flex items-center justify-center shadow-pixel-sm shrink-0"
                style={{ borderColor: current.accentColor, color: current.accentColor }}
              >
                <CurrentIcon className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span
                    className="font-pixel text-[9px] px-1.5 py-0.2 border block w-fit"
                    style={{
                      color: current.accentColor,
                      borderColor: `${current.accentColor}66`,
                      backgroundColor: `${current.accentColor}15`,
                    }}
                  >
                    {current.badge}
                  </span>
                  <h3 className="text-sm sm:text-base font-bold text-white uppercase font-sans">
                    {current.name}
                  </h3>
                </div>
              </div>
            </div>

            <div className="text-left sm:text-right">
              <span className="text-[9px] text-zinc-400 block font-bold">CORE QUESTION</span>
              <p className="text-xs text-[#55FFFF] font-semibold">{current.coreQuestion}</p>
            </div>
          </div>

          {/* 2-Column Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            {/* Left: Summary & Key Bullet Takeaways */}
            <div className="flex flex-col gap-2.5">
              <p className="text-xs sm:text-sm text-zinc-100 font-sans leading-relaxed">
                {current.summary}
              </p>

              <div className="space-y-2 pt-1">
                {current.points.map((pt, pIdx) => (
                  <div key={pIdx} className="p-2.5 bg-[#090a10] border border-[#2e334a] flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#55FF55] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white text-xs block">{pt.title}</strong>
                      <p className="text-[11px] text-zinc-300 mt-0.5 leading-relaxed">
                        {pt.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Execution Flow & Tools */}
            <div className="flex flex-col justify-between gap-3">
              {/* Execution Flow */}
              <div className="p-3 bg-[#090a10] border border-[#2e334a]">
                <span className="text-[10px] text-zinc-400 font-bold uppercase block mb-2">
                  EXECUTION PIPELINE:
                </span>
                <div className="grid grid-cols-2 gap-2">
                  {current.flow.map((step, sIdx) => (
                    <div
                      key={sIdx}
                      className="p-1.5 bg-[#121420] border border-[#383e58] text-center"
                    >
                      <span className="text-[9px] text-zinc-500 font-bold block">0{sIdx + 1}</span>
                      <strong className="text-xs text-white truncate block">{step}</strong>
                    </div>
                  ))}
                </div>
              </div>

              {/* Ecosystem Tools */}
              <div className="p-2.5 bg-[#090a10] border border-[#2e334a] flex items-center gap-2 flex-wrap">
                <span className="text-[10px] text-zinc-400 font-bold uppercase">TOOLS:</span>
                {current.tools.map((t, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2 py-0.5 bg-[#181b2c] border border-[#383e58] text-[10px] text-[#55FFFF] font-bold"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Pro Tip Highlight */}
          <div className="p-2 bg-[#090a10] border-l-4 border-[#55FF55] flex items-center gap-2 text-xs">
            <Zap className="w-4 h-4 text-[#FFAA00] shrink-0" />
            <span className="text-zinc-200">
              <strong className="text-[#55FF55]">PRO TIP:</strong> {current.proTip}
            </span>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
