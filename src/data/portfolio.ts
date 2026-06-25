export const profile = {
  name: "Riya Tyagi",
  university: "Bennett University",
  degree: "B.Tech Computer Science",
  tagline: "hey, I'm Riya.",
  intro: "I'm a CSE student who loves building things — websites, startup ideas, and communities. I split my time between writing code, talking to users, and figuring out what to build next.",
  roles: ["CSE Student", "Web Developer", "Aspiring Founder", "Builder"],
  resume: "/resume.pdf",
};

export const aboutNotes = [
  "future founder loading...",
  "learning something new every day",
];

export const currentlyBuilding = [
  "NGO Website",
  "CareerSathi (research phase)",
  "Business Dev @ Código Maestro",
];

export const skills = {
  technical: ["Python", "Java", "JavaScript", "React", "Node.js", "MongoDB", "Git", "Figma"],
  professional: ["Leadership", "Communication", "Business Development", "Teamwork", "Problem Solving"],
};

export const projects = [
  {
    id: "ngo",
    title: "NGO Website",
    color: "#E6DDF8",
    problem: "Local NGOs had no online presence to reach donors and volunteers.",
    solution: "I built a responsive site with donations, events, and volunteer sign-ups.",
    techStack: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    features: ["Donation flow", "Event calendar", "Volunteer forms", "Admin dashboard", "Mobile-first design"],
    lessons: "Shipping beats perfecting — real users teach you more than any tutorial.",
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    id: "train",
    title: "Train Booking System",
    color: "#F8D7DD",
    problem: "Manual ticket booking was slow and frustrating for everyday commuters.",
    solution: "I built a full-stack system with live seat maps and secure payments.",
    techStack: ["Java", "Spring Boot", "MySQL", "React"],
    features: ["Live seat map", "Route search", "Payment gateway", "Booking history", "User accounts"],
    lessons: "Data modeling matters — get the schema right before you write features.",
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    id: "portfolio",
    title: "Portfolio Website",
    color: "#FFDCC8",
    problem: "Most portfolios feel like resumes in disguise — I wanted mine to feel like me.",
    solution: "I designed this founder journal to tell my story, not just list my skills.",
    techStack: ["React", "Vite", "Tailwind CSS", "Framer Motion"],
    features: ["Tab navigation", "Notebook aesthetic", "Smooth scroll", "Responsive layout", "Subtle animations"],
    lessons: "Design is storytelling. If someone remembers how your site felt, they'll remember you.",
    github: "https://github.com",
    demo: "https://example.com",
  },
];

export const internships = [
  {
    id: "bde",
    role: "Business Development Executive",
    company: "Código Maestro",
    period: "2023 – Present",
    bullets: [
      "I led outreach for startup events and founder networking sessions across campuses.",
      "I secured partnerships with tech communities and grew our audience by 3x.",
      "I managed content strategy and coordinated 5+ founder meetups end-to-end.",
    ],
    learned: "Sales is just helping people find what they need. That mindset changed how I build products.",
  },
  {
    id: "ngo",
    role: "NGO Website Project",
    company: "Community Outreach",
    period: "2024",
    bullets: [
      "I designed and built the full website from wireframes to deployment.",
      "I gathered requirements directly from NGO stakeholders and iterated on feedback.",
      "I implemented donation flows and volunteer sign-up features used by real users.",
    ],
    learned: "Building for non-technical users forces you to simplify everything — a skill every developer needs.",
  },
];

export const careerSathi = {
  name: "CareerSathi",
  status: "Research Phase 🔬",
  problem: "Students and early-career folks struggle to find mentors and navigate career paths.",
  solution: "A platform connecting students with mentors, resources, and personalized career roadmaps.",
  audience: "College students, recent grads, career switchers, and aspiring founders.",
  businessModel: "Freemium — free resources, paid mentorship sessions, recruiter partnerships.",
  next: "Running user interviews and sketching the MVP. Goal: validate before building.",
};

export const startupIdeas = [
  { id: "02", name: "StudyBuddy", description: "Peer-to-peer study matching for university students.", status: "Exploring..." },
  { id: "03", name: "LocalHero", description: "Connecting local businesses with student freelancers.", status: "Exploring..." },
];

export const riyaInNumbers = [
  { value: "2+", label: "Years Coding" },
  { value: "10+", label: "Projects Built" },
  { value: "1", label: "Startup Dream" },
  { value: "100+", label: "Failed Ideas" },
  { value: "∞", label: "Curiosity" },
];

export const beliefs = [
  "The best way to learn is to build something real and put it in front of people.",
  "You don't need permission to start — side projects count as experience.",
  "Good products come from talking to users, not from guessing in a vacuum.",
];

export const obsessedWith = [
  { label: "a podcast", detail: "How I Built This" },
  { label: "a book", detail: "Zero to One" },
  { label: "a concept", detail: "Product-market fit" },
];

export const hotTakes = [
  "Side projects teach more than courses.",
  "The best time to start was yesterday. The second best is now.",
  "Your portfolio should feel like you, not like a template.",
];

export const certificates = [
  { id: "aws", title: "AWS Cloud Practitioner", issuer: "Amazon Web Services", date: "2024", category: "Technical" as const, description: "Foundational cloud computing and AWS services." },
  { id: "react", title: "React Developer", issuer: "Meta", date: "2024", category: "Technical" as const, description: "Advanced React patterns, hooks, and performance." },
  { id: "python", title: "Python Programming", issuer: "Coursera", date: "2023", category: "Technical" as const, description: "Data structures and algorithms in Python." },
  { id: "figma", title: "UI/UX Design", issuer: "Google", date: "2024", category: "Business" as const, description: "User research, wireframing, and prototyping." },
  { id: "leadership", title: "Leadership Essentials", issuer: "LinkedIn Learning", date: "2024", category: "Leadership" as const, description: "Team management and strategic communication." },
  { id: "startup", title: "Startup Fundamentals", issuer: "Coursera", date: "2023", category: "Business" as const, description: "Lean startup methodology and business model design." },
  { id: "js", title: "JavaScript Algorithms", issuer: "freeCodeCamp", date: "2023", category: "Technical" as const, description: "Algorithms and data structures in JavaScript." },
  { id: "comm", title: "Business Communication", issuer: "Coursera", date: "2024", category: "Business" as const, description: "Professional writing and presentation skills." },
];

export const contact = {
  linkedin: "https://www.linkedin.com/in/riya-tyagi-549869327/",
  github: "https://github.com/ri-ty",
  email: "riyatyagi20007@gmail.com",
  resume: "/resume.pdf",
};

export const navTabs = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "internships", label: "Internships" },
  { id: "startup", label: "Startup Lab" },
  { id: "desk", label: "The Desk" },
  { id: "certificates", label: "Certificates" },
  { id: "fun", label: "Fun Page" },
  { id: "contact", label: "Contact" },
] as const;

export type NavTabId = (typeof navTabs)[number]["id"];
