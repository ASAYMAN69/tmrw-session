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
  Check,
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
    name: 'The Idea & MVP',
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
    name: 'Frontend (The Client UI)',
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
    name: 'Backend (The Server Engine)',
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
    name: 'Database (Permanent Storage)',
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
    name: 'Auth & Security (Keycards)',
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
    name: 'Hosting (24/7 Cloud Server)',
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
    name: 'Domain & DNS (The Address)',
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
    name: 'Live Launch & Architecture',
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

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 6 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.15 },
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
    <div className="w-full flex flex-col gap-4 font-mono select-none">
      {/* Open, Unboxed Milestone Navigation Tabs */}
      <div className="flex items-center justify-between border-b border-[#2e334a]/60 pb-2 overflow-x-auto gap-1">
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
              className={`px-2.5 py-1.5 flex items-center gap-1.5 cursor-pointer transition-all border-b-2 -mb-2 ${
                isSelected
                  ? 'border-[#55FFFF] text-white font-bold'
                  : isDone
                  ? 'border-transparent text-zinc-400 hover:text-white'
                  : 'border-transparent text-zinc-600 hover:text-zinc-400'
              }`}
            >
              <Icon className={`w-3.5 h-3.5 ${isSelected ? 'text-[#55FFFF]' : 'text-zinc-500'}`} />
              <span className="text-[11px] whitespace-nowrap">
                {s.shortName}
              </span>
            </button>
          );
        })}
      </div>

      {/* Main Unboxed Milestone Body */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current.id}
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          exit={{ opacity: 0 }}
          className="flex flex-col gap-3.5 pt-1"
        >
          {/* Header Area (Clean, Open) */}
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 pb-2 border-b border-[#2e334a]/40">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-[#55FFFF] tracking-wide">
                {current.badge}
              </span>
              <span className="text-zinc-600">•</span>
              <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                {current.name}
              </h3>
            </div>
            <p className="text-xs text-[#55FFFF]/80 font-medium">
              &gt; {current.coreQuestion}
            </p>
          </div>

          {/* 2-Column Open Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-1">
            {/* Left: Natural Bullet Points */}
            <div className="flex flex-col gap-3">
              <p className="text-xs sm:text-sm text-zinc-200 leading-relaxed font-sans font-medium">
                {current.summary}
              </p>

              <div className="space-y-2.5 pt-1">
                {current.points.map((pt, pIdx) => (
                  <div key={pIdx} className="flex items-start gap-2 text-xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#55FFFF] mt-1.5 shrink-0" />
                    <div>
                      <strong className="text-white block font-sans text-xs">{pt.title}</strong>
                      <p className="text-[11.5px] text-zinc-400 mt-0.5 leading-relaxed">
                        {pt.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Flow Path & Tools */}
            <div className="flex flex-col justify-between gap-4">
              {/* Flow Steps (Unboxed connected breadcrumbs) */}
              <div>
                <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider block mb-2">
                  EXECUTION PIPELINE
                </span>
                <div className="flex items-center flex-wrap gap-1.5 text-xs">
                  {current.flow.map((step, sIdx) => (
                    <React.Fragment key={sIdx}>
                      <span className="px-2.5 py-1 bg-[#121420] text-zinc-200 font-medium border border-[#2e334a]">
                        <span className="text-[10px] text-[#55FFFF] mr-1">0{sIdx + 1}</span>
                        {step}
                      </span>
                      {sIdx < current.flow.length - 1 && (
                        <ArrowRight className="w-3.5 h-3.5 text-zinc-600 shrink-0" />
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>

              {/* Tools Arsenal */}
              <div>
                <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider block mb-1.5">
                  ECOSYSTEM TOOLS
                </span>
                <div className="flex items-center gap-1.5 flex-wrap">
                  {current.tools.map((tool, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 text-[11px] text-[#55FF55] bg-[#090a10] border border-[#2e334a]"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Pro Tip Callout (Unboxed with left vertical accent bar) */}
          <div className="border-l-2 border-[#55FF55] pl-3 py-1 mt-1 text-xs text-zinc-300">
            <span className="text-[#55FF55] font-bold mr-1.5">PRO TIP:</span>
            <span>{current.proTip}</span>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
