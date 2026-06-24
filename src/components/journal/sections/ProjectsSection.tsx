import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "../../../data/portfolio";
import { JournalPage, SectionHeading, WashiTape, StickyNote, CheckItem, StampButton, Polaroid } from "../JournalPage";

export function ProjectsSection() {
  const [activeId, setActiveId] = useState(projects[0].id);
  const active = projects.find((p) => p.id === activeId) ?? projects[0];

  return (
    <JournalPage id="projects" noHeader>
      <SectionHeading>Project Vault</SectionHeading>

      <div className="flex gap-1 mt-6 mb-5 overflow-x-auto scrollbar-none">
        {projects.map((p) => (
          <button
            key={p.id}
            type="button"
            onClick={() => setActiveId(p.id)}
            className={`shrink-0 handwritten text-sm px-4 py-2 rounded-t-md border-0 cursor-pointer transition-colors ${
              activeId === p.id ? "bg-lavender/50 text-ink" : "bg-ink/[0.03] text-ink/45 hover:bg-ink/[0.06]"
            }`}
          >
            {p.title}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={active.id}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.25 }}
          className="relative pinned-paper rounded-sm p-5 md:p-6 bg-white/50 border border-ink/[0.05]"
        >
          <WashiTape color={active.color} className="absolute -top-2 left-6 w-14" />

          <h3 className="handwritten text-2xl mt-2 mb-4">{active.title}</h3>

          <div className="grid md:grid-cols-[1fr_auto] gap-6">
            <div className="space-y-3 text-sm">
              <p><span className="handwritten text-ink/45">Problem — </span><span className="text-ink/75">{active.problem}</span></p>
              <p><span className="handwritten text-ink/45">Solution — </span><span className="text-ink/75">{active.solution}</span></p>

              <div>
                <p className="handwritten text-ink/45 mb-1.5">Tech Stack</p>
                <div className="flex flex-wrap gap-1.5">
                  {active.techStack.map((t) => (
                    <span key={t} className="text-xs bg-lavender/30 px-2 py-0.5 rounded-full">{t}</span>
                  ))}
                </div>
              </div>

              <div>
                <p className="handwritten text-ink/45 mb-1.5">Features</p>
                <ul className="space-y-1">
                  {active.features.map((f) => <CheckItem key={f}>{f}</CheckItem>)}
                </ul>
              </div>
            </div>

            <Polaroid rotate={2} className="mx-auto md:mx-0">
              <div className="w-full h-full flex items-center justify-center text-center p-2" style={{ background: `linear-gradient(135deg, ${active.color}55, ${active.color}22)` }}>
                <span className="handwritten text-sm text-ink/40">{active.title}</span>
              </div>
            </Polaroid>
          </div>

          <StickyNote color="peach" rotate={-1} className="mt-4 max-w-md !p-3">
            <p className="handwritten text-sm text-ink/45 mb-1">Lessons Learned</p>
            <p className="text-xs text-ink/70 leading-relaxed">{active.lessons}</p>
          </StickyNote>

          <div className="flex flex-wrap gap-3 mt-5">
            <StampButton href={active.github}>GitHub</StampButton>
            <StampButton href={active.demo}>Live Demo</StampButton>
          </div>
        </motion.div>
      </AnimatePresence>
    </JournalPage>
  );
}
