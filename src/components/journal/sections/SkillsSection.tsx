import { motion } from "framer-motion";
import { Code2, Database, Palette, Send, Cloud, Terminal } from "lucide-react";
import { JournalPage, SectionHeading, WashiTape, StickyNote, Doodle, SketchArrow } from "../JournalPage";

const technicalSkills = [
  { name: "Python", note: "My first programming language." },
  { name: "Java", note: "Built my foundation in OOP." },
  { name: "JavaScript", note: "The language that brought my websites to life." },
  { name: "React", note: "My favourite frontend framework." },
  { name: "Node.js", note: "Learning backend development." },
  { name: "MongoDB", note: "Used for full-stack projects." },
  { name: "Git", note: "Version control for every project." },
  { name: "Figma", note: "Where ideas become interfaces." },
];

const professionalSkills = [
  { name: "Leadership", note: "Comfortable taking initiative." },
  { name: "Communication", note: "I enjoy presenting ideas clearly." },
  { name: "Business Development", note: "Learned through real client conversations." },
  { name: "Teamwork", note: "I enjoy collaborative problem solving." },
  { name: "Problem Solving", note: "I like breaking complex problems into simple steps." },
];

const currentlyLearning = [
  "AI & Machine Learning",
  "Product Thinking",
  "Startup Strategy",
  "UI/UX Design",
  "Advanced React",
];

const favouriteTools = [
  { name: "VS Code", icon: <Code2 size={18} /> },
  { name: "GitHub", icon: <GithubIcon /> },
  { name: "Cursor", icon: <Terminal size={18} /> },
  { name: "Figma", icon: <Palette size={18} /> },
  { name: "Postman", icon: <Send size={18} /> },
  { name: "MongoDB Atlas", icon: <Database size={18} /> },
  { name: "Vercel", icon: <span className="text-sm font-bold">▲</span> },
  { name: "Render", icon: <Cloud size={18} /> },
];

const workflowSteps = ["Idea", "Research", "Design", "Code", "Debug", "Deploy", "Improve"];

const currentlyBuilding = [
  "NGO Website",
  "Personal Portfolio",
  "CareerSathi Research",
  "Learning Full Stack Development",
];

function GithubIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function SkillCheckItem({ name, note }: { name: string; note: string }) {
  return (
    <motion.li
      className="group flex items-start gap-2.5 py-1.5 -mx-1 px-1 rounded-sm cursor-default"
      whileHover={{ y: -1, boxShadow: "0 2px 8px rgba(42,42,42,0.06)" }}
      transition={{ duration: 0.2 }}
    >
      <svg width="16" height="16" viewBox="0 0 16 16" className="shrink-0 mt-1" aria-hidden>
        <rect
          x="1" y="1" width="14" height="14" rx="2"
          className="fill-lavender/40 group-hover:fill-lavender transition-[fill] duration-300"
          stroke="#2A2A2A" strokeWidth="1.5" strokeOpacity={0.3}
        />
        <path
          d="M4,8 L7,11 L12,5"
          fill="none" stroke="#2A2A2A" strokeWidth="1.5"
          strokeLinecap="round" strokeLinejoin="round" strokeOpacity={0.6}
        />
      </svg>
      <div className="min-w-0">
        <span className="text-sm font-medium text-ink/85">{name}</span>
        <p className="handwritten text-xs text-ink/45 mt-0.5 leading-snug">&ldquo;{note}&rdquo;</p>
      </div>
    </motion.li>
  );
}

function NotebookBox({ title, children, highlight }: { title: string; children: React.ReactNode; highlight?: boolean }) {
  return (
    <motion.div
      className={`relative rounded-sm border p-4 ${
        highlight
          ? "bg-peach/25 border-peach/50"
          : "bg-white/40 border-ink/[0.06]"
      }`}
      style={{
        backgroundImage: "linear-gradient(rgba(42,42,42,0.02) 1px, transparent 1px)",
        backgroundSize: "100% 22px",
      }}
      whileHover={{ y: -1, boxShadow: "0 3px 10px rgba(42,42,42,0.07)" }}
    >
      <h3 className={`handwritten text-lg mb-3 ${highlight ? "text-ink" : "text-ink/55"}`}>{title}</h3>
      {children}
    </motion.div>
  );
}

export function SkillsSection() {
  return (
    <JournalPage id="skills" noHeader>
      <div className="relative">
        <Doodle className="absolute -top-1 right-2 rotate-3 hidden sm:block">⭐</Doodle>
        <Doodle className="absolute top-16 -left-1 -rotate-6 hidden md:block text-ink/20">built over the years ~</Doodle>

        <SectionHeading>Skills</SectionHeading>

        {/* Section 1 & 2 — Technical + Professional */}
        <div className="grid md:grid-cols-2 gap-8 mt-6">
          <div>
            <WashiTape color="#E6DDF8" className="w-24 mb-3" />
            <h3 className="handwritten text-xl text-ink/50 mb-4">Technical Skills</h3>
            <ul className="space-y-1">
              {technicalSkills.map((s) => (
                <SkillCheckItem key={s.name} name={s.name} note={s.note} />
              ))}
            </ul>
          </div>
          <div className="relative">
            <WashiTape color="#F8D7DD" className="w-24 mb-3" />
            <svg className="absolute -top-1 left-8 w-3.5 h-3.5 text-ink/20 rotate-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
              <path d="M16 4h2a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h2" />
              <rect x="8" y="2" width="8" height="4" rx="1" />
            </svg>
            <h3 className="handwritten text-xl text-ink/50 mb-4">Professional Skills</h3>
            <ul className="space-y-1">
              {professionalSkills.map((s) => (
                <SkillCheckItem key={s.name} name={s.name} note={s.note} />
              ))}
            </ul>
          </div>
        </div>

        <SketchArrow className="my-6 mx-auto opacity-40" />

        {/* Section 3 & 4 — Currently Learning + Favourite Tools */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="relative">
            <div className="absolute -top-2 left-6 w-2 h-2 rounded-full bg-pink/60 z-10" />
            <StickyNote color="yellow" rotate={-2} tiltOnHover={2.5} className="!p-4">
              <p className="handwritten text-lg text-ink/70 mb-3">Currently Learning</p>
              <ul className="space-y-1.5 text-sm text-ink/75">
                {currentlyLearning.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-ink/30">•</span> {item}
                  </li>
                ))}
              </ul>
            </StickyNote>
          </div>

          <NotebookBox title="Favourite Tools">
            <div className="grid grid-cols-4 gap-2">
              {favouriteTools.map((tool) => (
                <motion.div
                  key={tool.name}
                  className="flex flex-col items-center gap-1 p-2 rounded-sm bg-paper/80 border border-ink/[0.04] text-ink/60"
                  whileHover={{ y: -3 }}
                  transition={{ type: "spring", stiffness: 400, damping: 12 }}
                >
                  {tool.icon}
                  <span className="text-[9px] font-medium text-center leading-tight text-ink/55">{tool.name}</span>
                </motion.div>
              ))}
            </div>
          </NotebookBox>
        </div>

        {/* Section 5 & 6 — Workflow + Current Focus */}
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <NotebookBox title="Daily Workflow">
            <Doodle className="absolute top-3 right-3 hidden sm:block">💡</Doodle>
            <div className="flex flex-col items-center py-2 relative">
              {workflowSteps.map((step, i) => (
                <div key={step} className="flex flex-col items-center">
                  <span className="handwritten text-base text-ink/65 px-3 py-1 rounded-sm bg-lavender/20 border border-lavender/30">
                    {step}
                  </span>
                  {i < workflowSteps.length - 1 && (
                    <svg width="16" height="20" viewBox="0 0 16 20" className="text-ink/20 my-0.5" aria-hidden>
                      <path d="M8,2 L8,14 M4,10 L8,14 L12,10" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  )}
                </div>
              ))}
            </div>
          </NotebookBox>

          <NotebookBox title="Currently Building" highlight>
            <ul className="space-y-2 text-sm text-ink/75">
              {currentlyBuilding.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-peach shrink-0">•</span> {item}
                </li>
              ))}
            </ul>
          </NotebookBox>
        </div>

        {/* Section 7 — Fun fact + doodles */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mt-8">
          <StickyNote color="lavender" rotate={2} tiltOnHover={3} className="max-w-xs !p-3">
            <p className="handwritten text-sm text-ink/60 leading-relaxed">
              &ldquo;I believe the best way to learn is by building.&rdquo;
            </p>
          </StickyNote>

          <div className="flex items-center gap-3 opacity-25 pointer-events-none select-none">
            <Doodle>→</Doodle>
            <Doodle>✓</Doodle>
            <Doodle>💡</Doodle>
            <svg width="14" height="20" viewBox="0 0 14 20" className="text-ink/40" aria-hidden>
              <path d="M4,2 Q8,6 4,10 Q0,14 4,18" fill="none" stroke="currentColor" strokeWidth="1" />
            </svg>
          </div>
        </div>
      </div>
    </JournalPage>
  );
}
