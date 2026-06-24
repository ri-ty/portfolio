import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface JournalPageProps {
  id: string;
  title?: string;
  children: ReactNode;
  className?: string;
  noHeader?: boolean;
}

export function JournalPage({ id, title, children, className = "", noHeader }: JournalPageProps) {
  return (
    <motion.section
      id={id}
      className={`journal-paper relative rounded-sm shadow-[0_2px_16px_rgba(42,42,42,0.06)] border border-ink/[0.04] scroll-mt-20 ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="absolute left-0 top-0 bottom-0 w-7 md:w-9 border-r border-ink/[0.04] pointer-events-none" />
      <div className="pl-9 md:pl-12 pr-5 md:pr-9 py-8 md:py-10">
        {title && !noHeader && (
          <header className="mb-6 pb-4 border-b border-ink/[0.06]">
            <SectionHeading>{title}</SectionHeading>
          </header>
        )}
        {children}
      </div>
    </motion.section>
  );
}

export function SectionHeading({ children }: { children: ReactNode }) {
  return <h2 className="handwritten text-3xl md:text-4xl text-ink highlight-marker">{children}</h2>;
}

export function WashiTape({ color, className = "" }: { color: string; className?: string }) {
  return <div className={`washi-tape rounded-sm ${className}`} style={{ backgroundColor: color }} />;
}

export function StickyNote({
  children, color = "yellow", rotate = -1, className = "", jiggle = false,
}: {
  children: ReactNode;
  color?: "yellow" | "pink" | "lavender" | "mint" | "peach";
  rotate?: number;
  className?: string;
  jiggle?: boolean;
}) {
  const colors = {
    yellow: "sticky-note", pink: "sticky-note sticky-note-pink",
    lavender: "sticky-note sticky-note-lavender", mint: "sticky-note sticky-note-mint",
    peach: "sticky-note sticky-note-peach",
  };
  return (
    <motion.div
      className={`${colors[color]} p-3 md:p-4 rounded-sm ${className}`}
      style={{ transform: `rotate(${rotate}deg)` }}
      whileHover={jiggle ? { rotate: [rotate, rotate + 2, rotate - 2, rotate], transition: { duration: 0.4 } } : { rotate: rotate + 0.5 }}
    >
      {children}
    </motion.div>
  );
}

export function Polaroid({ caption, children, rotate = -2, className = "" }: {
  caption?: string; children?: ReactNode; rotate?: number; className?: string;
}) {
  return (
    <motion.div
      className={`polaroid inline-block ${className}`}
      style={{ transform: `rotate(${rotate}deg)` }}
      whileHover={{ scale: 1.03, boxShadow: "0 6px 20px rgba(42,42,42,0.18)" }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <div className="w-36 h-40 md:w-44 md:h-48 bg-[#E8E4DF] overflow-hidden flex items-center justify-center">
        {children}
      </div>
      {caption && <p className="handwritten text-center text-ink/55 text-sm mt-1.5">{caption}</p>}
    </motion.div>
  );
}


export function Doodle({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <span className={`handwritten text-ink/30 text-sm select-none ${className}`}>{children}</span>;
}

export function WavyDivider({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 300 12" className={`w-full h-3 text-ink/10 ${className}`} preserveAspectRatio="none" aria-hidden>
      <path d="M0,6 Q25,0 50,6 T100,6 T150,6 T200,6 T250,6 T300,6" fill="none" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export function HandCheckbox({ checked = true }: { checked?: boolean }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" className="shrink-0 mt-0.5" aria-hidden>
      <rect x="1" y="1" width="14" height="14" rx="2" fill={checked ? "#E6DDF8" : "none"} stroke="#2A2A2A" strokeWidth="1.5" strokeOpacity="0.3" />
      {checked && <path d="M4,8 L7,11 L12,5" fill="none" stroke="#2A2A2A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" />}
    </svg>
  );
}

export function CheckItem({ children }: { children: ReactNode }) {
  return (
    <li className="flex items-start gap-2 text-sm text-ink/80">
      <HandCheckbox />
      <span>{children}</span>
    </li>
  );
}

export function StampButton({ children, active, onClick, href, className = "" }: {
  children: ReactNode; active?: boolean; onClick?: () => void; href?: string; className?: string;
}) {
  const cls = `stamp-btn cursor-pointer inline-block no-underline text-ink ${active ? "stamp-btn-active" : ""} ${className}`;
  if (href) return <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>{children}</a>;
  return <button type="button" onClick={onClick} className={`${cls} border-0`}>{children}</button>;
}

export function SketchArrow({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 20" className={`w-10 h-3 text-ink/20 ${className}`} fill="none" aria-hidden>
      <path d="M2,10 Q30,3 52,10 M44,6 L52,10 L44,14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
