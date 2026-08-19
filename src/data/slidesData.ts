import { SlideData } from '../types/presentation';

export const SLIDES: SlideData[] = [
  {
    id: 1,
    slug: 'from-idea-to-live-website',
    title: 'From Idea to Live Website',
    badge: 'Roadmap Overview',
    subtitle: "A beginner's roadmap to building, connecting, and hosting a website",
    category: 'Foundation',
    purpose: "Set expectations. This session is about understanding the map, not learning to code in 30 minutes.",
    bigStatement: "Understanding the map is the hardest part. Once you see the full circuit, every line of code has a clear home.",
    takeaway: "Master the mental model first. Syntax is easy once you understand where every puzzle piece lives.",
    maxSubSteps: 8,
    presenterNotes: [
      "Welcome everyone! Today is about seeing the entire 10,000-foot view.",
      "Most beginners get stuck because they try to learn syntax without knowing what piece they are actually building.",
      "Press Next (or Arrow Right) to walk through each of the 8 milestones from Idea to Live Website."
    ]
  },
  {
    id: 2,
    slug: 'frontend-what-you-see',
    title: 'Frontend: What You See',
    badge: 'Client-Side',
    subtitle: 'The visual, interactive face of your application',
    category: 'Frontend',
    bigStatement: "Frontend = Everything the user interacts with.",
    funLine: "HTML builds the house. CSS paints and decorates it. JavaScript makes the doors open.",
    maxSubSteps: 3,
    presenterNotes: [
      "Step 1: HTML alone (bare bones).",
      "Step 2: + CSS styling (modern look).",
      "Step 3: + JavaScript behavior (dynamic clicks & confetti)."
    ]
  },
  {
    id: 3,
    slug: 'backend-the-logic',
    title: "Backend: The Stuff You Don't See",
    badge: 'Server-Side',
    subtitle: 'The engine room executing rules, calculations, and security',
    category: 'Backend',
    bigStatement: "Backend = The logic running behind the website.",
    funLine: "The frontend gets the attention. The backend does the paperwork.",
    maxSubSteps: 4,
    presenterNotes: [
      "Step 1: Auth - Checking legitimacy (Is this visitor real?).",
      "Step 2: Auth - Unique identity & workspace isolation (User A vs User B).",
      "Step 3: Business Logic - Server-side rules & price calculations.",
      "Step 4: Security Guard - Input sanitization & exploit blocker."
    ]
  },
  {
    id: 4,
    slug: 'apis-how-everything-talks',
    title: 'APIs: How Everything Talks',
    badge: 'Communication Layer',
    subtitle: 'The messenger connecting your frontend to your backend',
    category: 'Backend',
    bigStatement: "API = A structured way for different software systems to communicate.",
    funLine: "You (Browser) → Waiter (API) → Kitchen (Backend) → Pantry (Database)",
    maxSubSteps: 4,
    presenterNotes: [
      "Walk through the restaurant analogy step by step.",
      "Show how an HTTP request travels across the wire and delivers JSON data."
    ]
  },
  {
    id: 5,
    slug: 'database-the-memory',
    title: 'Database: The Memory',
    badge: 'Data Persistence',
    subtitle: 'Where everything is remembered when you close the tab',
    category: 'Data & Auth',
    bigStatement: "The browser displays the data. The database remembers it.",
    maxSubSteps: 2,
    presenterNotes: [
      "Show what happens when notes are inserted.",
      "Simulate tab reload to prove persistent storage."
    ]
  },
  {
    id: 6,
    slug: 'authentication-who-are-you',
    title: 'Authentication: "Who Are You?"',
    badge: 'Security & Access',
    subtitle: 'Identity verification vs role-based permissions',
    category: 'Data & Auth',
    bigStatement: "Authentication = Who are you? • Authorization = What are you allowed to do?",
    maxSubSteps: 3,
    presenterNotes: [
      "Emphasize the difference between proving identity (AuthN) and permissions (AuthZ).",
      "Step through Student, Teacher, and Admin role privileges."
    ]
  },
  {
    id: 7,
    slug: 'from-computer-to-internet',
    title: 'From Computer to Internet',
    badge: 'Networking & Web',
    subtitle: 'How a local project becomes accessible to billions globally',
    category: 'Deployment',
    bigStatement: "Domain = Address • Hosting = Building",
    maxSubSteps: 2,
    presenterNotes: [
      "Explain that Domain gives humans a name, and Hosting provides the 24/7 cloud server.",
      "Show DNS resolution in real time."
    ]
  },
  {
    id: 8,
    slug: 'put-it-all-together',
    title: 'Put It All Together',
    badge: 'The Complete System',
    subtitle: 'The master architecture circuit connecting all layers',
    category: 'Big Picture',
    bigStatement: "Every click, login, page, and piece of saved information is part of this synchronized conversation.",
    maxSubSteps: 3,
    presenterNotes: [
      "Walk through the master circuit diagram.",
      "Follow the visual data packet through all layers."
    ]
  },
  {
    id: 9,
    slug: 'a-real-example',
    title: "Let's Build a Student Notes Website",
    badge: 'Case Study',
    subtitle: 'Applying the full stack to a real-world scenario',
    category: 'Big Picture',
    bigStatement: "Every real feature maps directly to one or more components of the stack.",
    maxSubSteps: 2,
    presenterNotes: [
      "Ask what pieces are needed for a student notes app.",
      "Reveal all 7 checkmarks and celebrate their understanding."
    ]
  },
  {
    id: 10,
    slug: 'your-actual-development-roadmap',
    title: 'Your Actual Development Roadmap',
    badge: 'Step-by-Step Guide',
    subtitle: 'The 9 progressive milestones from blank canvas to production',
    category: 'Big Picture',
    bigStatement: "Don't build everything at once. Build one layer at a time.",
    maxSubSteps: 3,
    presenterNotes: [
      "Phase 1: Concept & Frontend UI.",
      "Phase 2: Backend Logic, APIs & Database.",
      "Phase 3: Testing, Deployment & Custom Domain."
    ]
  },
  {
    id: 11,
    slug: 'do-i-always-need-everything',
    title: 'Do I Always Need Everything?',
    badge: 'Architectural Decisions',
    subtitle: 'Matching your technology stack to your actual project goals',
    category: 'Big Picture',
    bigStatement: "The website determines the architecture. You don't need a database just because someone said 'database.'",
    maxSubSteps: 3,
    presenterNotes: [
      "Compare Portfolio (Frontend only) vs Blog (with CMS/DB) vs SaaS (Full Stack with Auth).",
      "Relieve beginner overwhelm."
    ]
  },
  {
    id: 12,
    slug: 'what-you-learn-next',
    title: 'What You Learn Next',
    badge: 'Skill Progression',
    subtitle: 'A structured roadmap from beginner to full-stack creator',
    category: 'Next Steps',
    bigStatement: "You don't need to learn everything before building something.",
    maxSubSteps: 3,
    presenterNotes: [
      "Tier 1: Foundations (HTML, CSS, JS, Git).",
      "Tier 2: Interactive Apps (React, Node, DB).",
      "Tier 3: Going Live (Hosting, DNS, Env vars)."
    ]
  },
  {
    id: 13,
    slug: 'your-first-project',
    title: 'Your First Project',
    badge: 'Actionable Challenge',
    subtitle: 'Picking a winning project that you will actually finish',
    category: 'Next Steps',
    bigStatement: "Build something small enough to finish.",
    funLine: "Your first website doesn't need 10 million users. It needs to work.",
    maxSubSteps: 2,
    presenterNotes: [
      "Encourage building a small, achievable project.",
      "Spin the starter project wheel to spark ideas."
    ]
  },
  {
    id: 14,
    slug: 'the-whole-journey',
    title: 'The Whole Journey',
    badge: 'Grand Finale & Launch',
    subtitle: 'Your journey starts with a single line of code',
    category: 'Next Steps',
    bigStatement: "You don't need to understand everything today. You just need to know what comes next.",
    maxSubSteps: 2,
    presenterNotes: [
      "Deliver the final inspirational message.",
      "Ask: 'So... what are you going to build?' and mint their launch badge with confetti!"
    ]
  },
  {
    id: 15,
    slug: 'acc-codelaunch-bootcamp',
    title: 'ACC CodeLaunch 2026: Live Web Development Bootcamp',
    badge: 'Official Masterclass',
    subtitle: 'Adamjee Cantonment College IT Club • 8 Exclusive Live Sessions',
    category: 'Live Masterclass',
    bigStatement: "Learn the essentials of web development and turn your ideas into engaging, functional websites through practical learning.",
    funLine: "We bring the future to you.",
    maxSubSteps: 2,
    presenterNotes: [
      "Announce the official ACC CodeLaunch 2026 Online Web Development Bootcamp!",
      "Highlight: Google Meet, 08-21 September, 8 exclusive sessions, no prior experience needed.",
      "Encourage everyone to click 'Register Today' and claim their admission pass."
    ]
  }
];
