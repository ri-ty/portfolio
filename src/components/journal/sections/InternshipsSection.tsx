import { useCallback, useEffect, useState } from "react";
import { motion, AnimatePresence, type PanInfo } from "framer-motion";
import { ChevronLeft, ChevronRight, Paperclip } from "lucide-react";
import { JournalPage, SectionHeading, StickyNote, Doodle } from "../JournalPage";

const internships = [
  {
    role: "Business Development Executive",
    company: "Código Maestro",
    duration: "2023 – Present",
    bullets: [
      "I led outreach for startup events and founder networking sessions across campuses.",
      "I secured partnerships with tech communities and grew our audience by 3x.",
      "I managed content strategy and coordinated 5+ founder meetups end-to-end.",
    ],
    learned: "Sales is just helping people find what they need. That mindset changed how I build products.",
  },
  {
    role: "NGO Website Project",
    company: "Community Outreach",
    duration: "2024",
    bullets: [
      "I designed and built the full website from wireframes to deployment.",
      "I gathered requirements directly from NGO stakeholders and iterated on feedback.",
      "I implemented donation flows and volunteer sign-up features used by real users.",
    ],
    learned: "Building for non-technical users forces you to simplify everything — a skill every developer needs.",
  },
];

function InternshipCard({ entry, index }: { entry: (typeof internships)[number]; index: number }) {
  return (
    <div className="relative">
      <div className="absolute -top-1 left-4 text-ink/25 z-10">
        <Paperclip size={18} />
      </div>
      <div
        className="torn-edge bg-paper border border-ink/[0.06] p-5 md:p-6 shadow-sm relative"
        style={{ transform: `rotate(${index % 2 ? 0.5 : -0.5}deg)` }}
      >
        <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
          <h3 className="handwritten text-2xl text-ink">{entry.role}</h3>
          <span className="text-xs text-ink/40">{entry.duration}</span>
        </div>
        <p className="text-sm font-medium text-ink/55 mb-4">{entry.company}</p>

        <ul className="space-y-2 text-sm text-ink/75">
          {entry.bullets.map((b) => (
            <li key={b} className="flex gap-2">
              <span className="text-pink/60 shrink-0">→</span> {b}
            </li>
          ))}
        </ul>

        <StickyNote color={index % 2 === 0 ? "lavender" : "mint"} rotate={2} className="mt-4 max-w-xs !p-3">
          <p className="handwritten text-sm text-ink/45 mb-1">What I learned</p>
          <p className="text-xs text-ink/65 leading-relaxed">{entry.learned}</p>
        </StickyNote>
      </div>
    </div>
  );
}

export function InternshipsSection() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const paginate = useCallback((dir: number) => {
    setDirection(dir);
    setIndex((prev) => {
      const next = prev + dir;
      if (next < 0) return internships.length - 1;
      if (next >= internships.length) return 0;
      return next;
    });
  }, []);

  const goTo = useCallback((i: number) => {
    setDirection(i > index ? 1 : -1);
    setIndex(i);
  }, [index]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") { e.preventDefault(); paginate(-1); }
    if (e.key === "ArrowRight") { e.preventDefault(); paginate(1); }
  };

  const handleDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    if (info.offset.x < -50) paginate(1);
    else if (info.offset.x > 50) paginate(-1);
  };

  return (
    <JournalPage id="internships" noHeader>
      <SectionHeading>Where I've Worked</SectionHeading>

      <div
        className="mt-6 relative outline-none"
        tabIndex={0}
        role="region"
        aria-roledescription="carousel"
        aria-label="Internship experiences"
        onKeyDown={handleKeyDown}
      >
        {/* Carousel viewport */}
        <div className="relative px-0 md:px-6 overflow-hidden">
          {/* Desktop arrows */}
          <button
            type="button"
            onClick={() => paginate(-1)}
            aria-label="Previous internship"
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full items-center justify-center border border-[#2A2A2A22] bg-transparent cursor-pointer hover:bg-ink/[0.03] transition-colors"
          >
            <ChevronLeft size={16} className="text-ink/50" />
          </button>

          <button
            type="button"
            onClick={() => paginate(1)}
            aria-label="Next internship"
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full items-center justify-center border border-[#2A2A2A22] bg-transparent cursor-pointer hover:bg-ink/[0.03] transition-colors"
          >
            <ChevronRight size={16} className="text-ink/50" />
          </button>

          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={index}
              custom={direction}
              initial={{ opacity: 0, x: direction >= 0 ? 60 : -60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction >= 0 ? -60 : 60 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              drag={isMobile ? "x" : false}
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.15}
              onDragEnd={handleDragEnd}
            >
              <InternshipCard entry={internships[index]} index={index} />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2 mt-5" role="tablist" aria-label="Internship slides">
          {internships.map((_, i) => (
            <button
              key={i}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`Internship ${i + 1} of ${internships.length}`}
              onClick={() => goTo(i)}
              className="p-1 border-0 bg-transparent cursor-pointer"
            >
              <span
                className={`block w-1.5 h-1.5 rounded-full transition-colors ${
                  i === index ? "bg-pink" : "border border-ink/20 bg-transparent"
                }`}
              />
            </button>
          ))}
        </div>
      </div>

      <Doodle className="block mt-8 text-center text-base text-ink/40">
        open to internships — tech & non-tech both 👋
      </Doodle>
    </JournalPage>
  );
}
