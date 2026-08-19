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
      "Point 1.1: Auth - Are they legit? (Checking login credentials).",
      "Point 1.2: Auth - What can they access? (Unique identity & workspace isolation).",
      "Point 2: Business Logic - Server calculations & single source of truth.",
      "Point 3: Security Guard - Input sanitization & exploit blocker."
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
    maxSubSteps: 3,
    presenterNotes: [
      "Point 1: The Messenger - Restaurant waiter analogy & HTTP request cycle.",
      "Point 2: Universal Language - Why JSON connects Python, JS, Swift, and Rust.",
      "Point 3: The 4 Golden Verbs - GET (Read), POST (Create), PUT (Update), DELETE (Delete)."
    ]
  },
  {
    id: 5,
    slug: 'database-the-memory',
    title: 'Database: The Memory',
    badge: 'Data Persistence',
    subtitle: 'Where everything is remembered when you close the tab',
    category: 'Data & Auth',
    bigStatement: "The browser displays the data. The database remembers it forever.",
    maxSubSteps: 3,
    presenterNotes: [
      "Point 1: RAM vs Disk - Why variables reset on refresh and disks persist.",
      "Point 2: Tables & Columns - How relational databases structure records.",
      "Point 3: CRUD Queries - INSERT, SELECT, UPDATE, and DELETE in action."
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
    maxSubSteps: 3,
    presenterNotes: [
      "Point 1: Domain vs Hosting - The street address vs the 24/7 cloud server.",
      "Point 2: Static vs Dynamic Hosting - Vercel edge vs Node.js server backends.",
      "Point 3: SSL & HTTPS - The green padlock encrypting internet traffic."
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
      "Point 1: The 3-Tier Architecture - Frontend, Backend, and Database.",
      "Point 2: The Request Lifecycle - Tracing a click from browser to disk and back.",
      "Point 3: HTTP Status Codes - 200 OK, 401 Unauthorized, 404 Not Found, 500 Error."
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
    maxSubSteps: 3,
    presenterNotes: [
      "Point 1: User Story - Real requirements for a student notes application.",
      "Point 2: 7-Layer Mapping - Connecting features directly to stack layers.",
      "Point 3: Production Launch - From localhost to live internet deployment."
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
    bigStatement: "You do NOT always need a backend. Pick only what your app actually requires.",
    maxSubSteps: 3,
    presenterNotes: [
      "Archetype 1: Static Portfolio - Frontend only ($0/mo).",
      "Archetype 2: Public Blog - Frontend + Read-only database.",
      "Archetype 3: Full-Stack SaaS - Complete 3-tier system with auth."
    ]
  },
  {
    id: 12,
    slug: 'pick-your-first-project',
    title: 'Pick Your First Project',
    badge: 'Action Plan',
    subtitle: 'Choose a project you can finish this weekend',
    category: 'Big Picture',
    bigStatement: "The best first project is one you actually finish. Ship a tiny MVP before building a giant app.",
    maxSubSteps: 3,
    presenterNotes: [
      "Point 1: Scope & Sweet Spot - 1-4 day projects vs multi-month burnout traps.",
      "Point 2: Project Idea Generator - Roll a curated starter project blueprint.",
      "Point 3: Definition of Done - UI + Git Repo + Live Public URL."
    ]
  },
  {
    id: 13,
    slug: 'questions-and-feedback',
    title: 'Questions & Feedback',
    badge: 'Open Floor',
    subtitle: 'Ask anything or share your thoughts',
    category: 'Q&A',
    bigStatement: "There are no silly questions in programming. Ask away!",
    maxSubSteps: 2,
    presenterNotes: [
      "SubStep 1: Open the floor for any questions from the audience ('Any questions? :P').",
      "SubStep 2: When next is clicked, celebrate and ask 'Loved the session? :D' with confetti!"
    ]
  },
  {
    id: 14,
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
