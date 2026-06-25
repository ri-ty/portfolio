import { useMemo, useState } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { Check } from "lucide-react";
import { JournalPage, SectionHeading, WashiTape, StickyNote } from "../JournalPage";

const deskItems = [
  {
    id: 1,
    title: "Research Paper",
    subtitle: "AI in Career Guidance",
    note: "outline done, writing chapter 2",
    category: "Research",
    status: "cooking" as const,
  },
  {
    id: 2,
    title: "YouTube Channel",
    subtitle: "founder diaries",
    note: "first video scripted",
    category: "Content",
    status: "cooking" as const,
  },
  {
    id: 3,
    title: "Book",
    subtitle: "The Lean Startup",
    note: "page 120, taking notes",
    category: "Reading",
    status: "simmering" as const,
  },
  {
    id: 4,
    title: "Pinterest Board",
    subtitle: "UI inspiration",
    note: "saving refs for portfolio redesign",
    category: "Design",
    status: "simmering" as const,
  },
  {
    id: 5,
    title: "CareerSathi Research",
    subtitle: "",
    note: "user interviews pending",
    category: "Research",
    status: "simmering" as const,
  },
  {
    id: 6,
    title: "Portfolio Website",
    subtitle: "",
    note: "you're looking at it :)",
    category: "Project",
    status: "done" as const,
  },
  {
    id: 7,
    title: "NGO Website",
    subtitle: "",
    note: "launched and live",
    category: "Project",
    status: "done" as const,
  },
];

type DeskStatus = "cooking" | "simmering" | "done";

type DeskItem = {
  id: number;
  title: string;
  subtitle: string;
  note: string;
  category: string;
  status: DeskStatus;
};

const columns: { status: DeskStatus; label: string; emoji: string; tapeColor: string }[] = [
  { status: "cooking", label: "Cooking", emoji: "🔴", tapeColor: "#F8D7DD" },
  { status: "simmering", label: "Simmering", emoji: "🟡", tapeColor: "#E6DDF8" },
  { status: "done", label: "Done", emoji: "✅", tapeColor: "#FFDCC8" },
];

const categoryColors: Record<string, string> = {
  Research: "bg-lavender/50",
  Content: "bg-pink/50",
  Reading: "bg-peach/50",
  Design: "bg-mint/50",
  Project: "bg-lavender/40",
};

const statusDot: Record<DeskStatus, string> = {
  cooking: "bg-red-400",
  simmering: "bg-yellow-400",
  done: "bg-green-500",
};

function DeskCard({
  item,
  onMoveToDone,
}: {
  item: DeskItem;
  onMoveToDone: (id: number) => void;
}) {
  const isDone = item.status === "done";

  return (
    <motion.div
      layout
      layoutId={`desk-card-${item.id}`}
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ layout: { duration: 0.35, ease: [0.22, 1, 0.36, 1] }, duration: 0.25 }}
      whileHover={isDone ? undefined : { y: -2, boxShadow: "0 4px 14px rgba(42,42,42,0.12)" }}
      className={`relative rounded-sm p-3 border shadow-sm ${
        isDone
          ? "bg-green-50/70 border-green-200/40"
          : "bg-paper border-ink/[0.05]"
      }`}
      style={
        isDone
          ? undefined
          : {
              backgroundImage: "linear-gradient(rgba(42,42,42,0.02) 1px, transparent 1px)",
              backgroundSize: "100% 22px",
            }
      }
    >
      <div className="flex items-start justify-between gap-2 mb-1.5">
        <div className="flex items-center gap-1.5 min-w-0">
          <span className={`w-2 h-2 rounded-full shrink-0 ${statusDot[item.status]}`} />
          <h4 className={`handwritten text-lg leading-tight ${isDone ? "line-through text-ink/45" : "text-ink"}`}>
            {item.title}
          </h4>
        </div>
        {!isDone && (
          <button
            type="button"
            onClick={() => onMoveToDone(item.id)}
            className="shrink-0 p-1 rounded-full border border-ink/10 bg-white/60 hover:bg-green-50 cursor-pointer transition-colors"
            aria-label={`Move ${item.title} to done`}
          >
            <Check size={12} className="text-ink/40" />
          </button>
        )}
      </div>

      {item.subtitle && (
        <p className={`text-xs font-medium mb-1 ${isDone ? "text-ink/35 line-through" : "text-ink/55"}`}>
          {item.subtitle}
        </p>
      )}

      <span className={`inline-block text-[10px] font-medium px-2 py-0.5 rounded-full mb-2 ${categoryColors[item.category] ?? "bg-pink/30"}`}>
        {item.category}
      </span>

      <p className="text-xs text-ink/45 italic leading-relaxed">{item.note}</p>
    </motion.div>
  );
}

export function DeskSection() {
  const [items, setItems] = useState<DeskItem[]>(deskItems);

  const moveToDone = (id: number) => {
    setItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, status: "done" } : item))
    );
  };

  const counts = useMemo(
    () => ({
      cooking: items.filter((i) => i.status === "cooking").length,
      simmering: items.filter((i) => i.status === "simmering").length,
      done: items.filter((i) => i.status === "done").length,
    }),
    [items]
  );

  return (
    <JournalPage id="desk" noHeader>
      <SectionHeading>The Desk</SectionHeading>
      <p className="text-sm text-ink/50 mt-2 mb-6">
        what I&apos;m working on, creating, and exploring right now.
      </p>

      <div className="grid lg:grid-cols-[1fr_140px] gap-6">
        <LayoutGroup>
          <div className="grid md:grid-cols-3 gap-4">
            {columns.map((col) => {
              const colItems = items.filter((i) => i.status === col.status);
              return (
                <div key={col.status} className="flex flex-col">
                  <div className="relative mb-3">
                    <WashiTape color={col.tapeColor} className="w-full mb-1" />
                    <h3 className="handwritten text-lg text-ink/70 text-center">
                      {col.emoji} {col.label}
                    </h3>
                  </div>

                  <div className="space-y-3 min-h-[120px]">
                    <AnimatePresence mode="popLayout">
                      {colItems.map((item) => (
                        <DeskCard key={item.id} item={item} onMoveToDone={moveToDone} />
                      ))}
                    </AnimatePresence>
                  </div>
                </div>
              );
            })}
          </div>
        </LayoutGroup>

        <aside className="border-l border-ink/[0.06] pl-4 lg:pl-5 mt-6 lg:mt-0">
          <p className="handwritten text-base text-ink/50 mb-4">at a glance</p>
          <ul className="space-y-2 text-sm text-ink/65 mb-6">
            <li>✦ {counts.cooking} ongoing</li>
            <li>✦ {counts.simmering} simmering</li>
            <li>✦ {counts.done} completed</li>
          </ul>

          <StickyNote color="lavender" rotate={2} className="!p-3">
            <p className="handwritten text-sm text-ink/55 leading-snug">progress &gt; perfection</p>
          </StickyNote>
        </aside>
      </div>
    </JournalPage>
  );
}
