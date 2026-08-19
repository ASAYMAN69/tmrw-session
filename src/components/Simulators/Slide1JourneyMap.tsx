import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { sound } from '../../utils/sound';

interface Milestone {
  id: number;
  name: string;
  shortName: string;
  icon: any;
  tagline: string;
  whatItIs: string;
  whatItDoes: string[];
  location: string;
  simpleAnalogy: string;
  tools: string[];
  color: string;
}

const MILESTONES: Milestone[] = [
  {
    id: 1,
    name: 'The Idea',
    shortName: 'Idea',
    icon: Lightbulb,
    tagline: 'Define 1 problem to solve for 1 person.',
    whatItIs: 'The initial concept and plan for what the website actually does before writing any code.',
    whatItDoes: [
      'Identifies the core problem to solve (e.g., student notes app).',
      'Keeps scope small enough to finish in a few days (MVP).'
    ],
    location: 'Paper napkin / Planning notes',
    simpleAnalogy: 'The architectural blueprint before laying bricks.',
    tools: ['Notion', 'Figma', 'Paper & Pen'],
    color: '#FFAA00'
  },
  {
    id: 2,
    name: 'Frontend',
    shortName: 'Frontend',
    icon: Palette,
    tagline: 'What you see and interact with in your browser.',
    whatItIs: 'The visual user interface made of buttons, text, inputs, colors, and layout.',
    whatItDoes: [
      'HTML builds the structure (buttons, headings, inputs).',
      'CSS styles the look (colors, pixel borders, dark mode).',
      'JavaScript handles user clicks and live screen updates.'
    ],
    location: "Visitor's web browser (Phone or Laptop)",
    simpleAnalogy: 'The storefront, display window, and checkout counter.',
    tools: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Tailwind'],
    color: '#55FFFF'
  },
  {
    id: 3,
    name: 'Backend',
    shortName: 'Backend',
    icon: Cpu,
    tagline: 'What happens behind the scenes.',
    whatItIs: 'The engine room executing calculations, business rules, and security checks.',
    whatItDoes: [
      'Validates user logins and checks password security.',
      'Performs calculations and prevents hacker attacks.',
      'Acts as the bridge between frontend and database.'
    ],
    location: '24/7 Cloud Server running Node.js or Python',
    simpleAnalogy: 'The kitchen and cooks preparing the restaurant orders.',
    tools: ['Node.js', 'Express', 'Python', 'FastAPI'],
    color: '#0088FF'
  },
  {
    id: 4,
    name: 'Database',
    shortName: 'Database',
    icon: Database,
    tagline: 'The permanent memory of your application.',
    whatItIs: 'The permanent storage vault that remembers user accounts, notes, and records forever.',
    whatItDoes: [
      'Stores data safely so nothing is lost when the tab is closed.',
      'Supports CRUD: Create, Read, Update, and Delete records.',
      'Organizes data into structured tables with fast search.'
    ],
    location: 'Cloud NVMe storage disks with automatic backups',
    simpleAnalogy: 'The filing cabinet and pantry with all the ingredients.',
    tools: ['PostgreSQL', 'Supabase', 'SQLite', 'MongoDB'],
    color: '#55FF55'
  },
  {
    id: 5,
    name: 'Authentication',
    shortName: 'Auth',
    icon: Lock,
    tagline: 'Who are you, and what are you allowed to do?',
    whatItIs: 'The digital keycard system verifying user identities and protecting private data.',
    whatItDoes: [
      'Authentication (AuthN): Verifies identity with passwords or Google login.',
      'Authorization (AuthZ): Enforces role permissions (Student vs Admin).',
      'Issues encrypted digital tokens (JWT) stored in secure cookies.'
    ],
    location: 'Encrypted token exchange between Server & Browser',
    simpleAnalogy: 'The security guard and VIP wristband at an event.',
    tools: ['Supabase Auth', 'Bcrypt', 'JWT', 'Clerk'],
    color: '#FF5555'
  },
  {
    id: 6,
    name: 'Hosting',
    shortName: 'Hosting',
    icon: Cloud,
    tagline: 'The 24/7 computer keeping your code online.',
    whatItIs: 'Renting space on high-speed cloud computers so anyone can access your site at any time.',
    whatItDoes: [
      'Keeps your website online even when your personal laptop is off.',
      'Distributes files to global Edge CDNs for fast loading speeds.',
      'Automatically rebuilds and deploys when you push code to GitHub.'
    ],
    location: 'Global cloud data centers (Vercel, Render, AWS)',
    simpleAnalogy: 'The physical building where your store is located.',
    tools: ['Vercel', 'Netlify', 'Render', 'Cloudflare'],
    color: '#55FFFF'
  },
  {
    id: 7,
    name: 'Domain & DNS',
    shortName: 'Domain',
    icon: Globe,
    tagline: 'The human-friendly web address.',
    whatItIs: 'The memorable name (like notes.dev) that points visitors directly to your cloud server.',
    whatItDoes: [
      'DNS acts as the internet phonebook translating names into IP numbers.',
      'Provides HTTPS / SSL security encryption (the green lock icon).',
      'Makes your brand easy for people to find and remember.'
    ],
    location: 'Global DNS name servers across the internet',
    simpleAnalogy: 'The street address and sign on top of the store.',
    tools: ['Namecheap', 'Cloudflare DNS', 'Porkbun'],
    color: '#FFAA00'
  },
  {
    id: 8,
    name: 'Live Website',
    shortName: 'Live',
    icon: Rocket,
    tagline: 'The complete synchronized system running live.',
    whatItIs: 'All 7 layers connected together in one synchronized, working web application.',
    whatItDoes: [
      'Visitor opens domain ➔ CDN serves UI ➔ User clicks button.',
      'API validates security ➔ Database returns data ➔ UI displays result.',
      'Your website is now live, fast, and accessible to the entire world!'
    ],
    location: 'The global internet ecosystem',
    simpleAnalogy: 'Grand opening day — customers walk in and everything works!',
    tools: ['GitHub', 'Sentry', 'Google Search Console'],
    color: '#55FF55'
  }
];

interface Slide1Props {
  subStep?: number;
  onSubStepChange?: (subStep: number) => void;
}

export const Slide1JourneyMap: React.FC<Slide1Props> = ({
  subStep = 0,
  onSubStepChange,
}) => {
  const activeIndex = Math.min(MILESTONES.length - 1, Math.max(0, subStep));
  const current = MILESTONES[activeIndex];
  const CurrentIcon = current.icon;

  return (
    <div className="w-full flex flex-col gap-3 font-mono select-none">
      {/* 8-Milestone Hotbar Pathway */}
      <div className="bg-[#121420] border-2 border-[#2e334a] p-1.5 shadow-pixel">
        <div className="grid grid-cols-4 sm:grid-cols-8 gap-1">
          {MILESTONES.map((m, idx) => {
            const Icon = m.icon;
            const isSelected = idx === activeIndex;
            const isDone = idx < activeIndex;

            return (
              <button
                key={m.id}
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
                  0{m.id}. {m.shortName}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Infographic Display Card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current.id}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.12 }}
          className="bg-[#121420] border-2 border-[#383e58] p-5 shadow-pixel flex flex-col gap-4"
        >
          {/* Milestone Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-[#2e334a]">
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 bg-[#181b2c] border flex items-center justify-center shadow-pixel-sm shrink-0"
                style={{ borderColor: current.color, color: current.color }}
              >
                <CurrentIcon className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span
                    className="font-pixel text-[9px] px-1.5 py-0.2 border block w-fit"
                    style={{
                      color: current.color,
                      borderColor: `${current.color}66`,
                      backgroundColor: `${current.color}15`,
                    }}
                  >
                    STEP 0{current.id} OF 08
                  </span>
                  <h3 className="text-base font-bold text-white uppercase font-sans">
                    {current.name}
                  </h3>
                </div>
                <p className="text-xs text-zinc-400 mt-0.5">{current.tagline}</p>
              </div>
            </div>

            <div className="text-left sm:text-right">
              <span className="text-[10px] text-zinc-500 font-bold block uppercase">WHERE IT LIVES:</span>
              <span className="text-xs text-[#55FFFF] font-bold">{current.location}</span>
            </div>
          </div>

          {/* 2-Column Clean Infographic Body */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            {/* Left: What it is & Key Responsibilities */}
            <div className="flex flex-col gap-3">
              <div>
                <span className="text-[10px] text-zinc-400 font-bold uppercase block mb-1">
                  WHAT IS IT?
                </span>
                <p className="text-xs sm:text-sm text-zinc-100 font-sans leading-relaxed">
                  {current.whatItIs}
                </p>
              </div>

              <div className="space-y-1.5 pt-1">
                <span className="text-[10px] text-zinc-400 font-bold uppercase block">
                  KEY RESPONSIBILITIES:
                </span>
                {current.whatItDoes.map((item, iIdx) => (
                  <div key={iIdx} className="flex items-start gap-2 text-zinc-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#55FF55] mt-1.5 shrink-0" />
                    <span className="text-xs leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Analogy & Common Tools */}
            <div className="flex flex-col justify-between gap-3">
              {/* Real World Analogy */}
              <div className="p-3 bg-[#090a10] border border-[#2e334a]">
                <span className="text-[10px] text-[#FFAA00] font-bold uppercase block mb-1">
                  REAL-WORLD ANALOGY:
                </span>
                <p className="text-xs text-zinc-200 leading-relaxed italic">
                  "{current.simpleAnalogy}"
                </p>
              </div>

              {/* Common Tools */}
              <div className="p-3 bg-[#090a10] border border-[#2e334a]">
                <span className="text-[10px] text-zinc-400 font-bold uppercase block mb-1.5">
                  COMMONLY USED TOOLS & TECHNOLOGIES:
                </span>
                <div className="flex items-center gap-1.5 flex-wrap">
                  {current.tools.map((t, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 bg-[#121420] border border-[#383e58] text-[11px] text-[#55FFFF] font-bold"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
