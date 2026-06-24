import { beliefs, hotTakes, obsessedWith, riyaInNumbers } from "../../../data/portfolio";
import { JournalPage, SectionHeading, StickyNote, Doodle } from "../JournalPage";

export function FunPageSection() {
  return (
    <JournalPage id="fun" noHeader>
      <SectionHeading>Riya in Numbers</SectionHeading>

      {/* Stats */}
      <div className="flex flex-wrap justify-center gap-5 md:gap-8 py-6">
        {riyaInNumbers.map((stat, i) => (
          <div key={stat.label} className="text-center" style={{ transform: `rotate(${(i % 3 - 1) * 1.5}deg)` }}>
            <p className="handwritten text-3xl md:text-4xl text-ink">{stat.value}</p>
            <p className="text-[10px] text-ink/45 uppercase tracking-wide mt-0.5">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Beliefs */}
      <div className="mt-8">
        <h3 className="handwritten text-xl text-ink/50 mb-4">Things I believe in</h3>
        <div className="space-y-3">
          {beliefs.map((b, i) => (
            <p key={i} className="text-sm text-ink/75 leading-relaxed border-b border-ink/[0.06] pb-3 italic">
              "{b}"
            </p>
          ))}
        </div>
      </div>

      {/* Obsessed with */}
      <div className="mt-8">
        <h3 className="handwritten text-xl text-ink/50 mb-3">Currently obsessed with</h3>
        <div className="flex flex-wrap gap-2">
          {obsessedWith.map((item, i) => (
            <StickyNote key={item.label} color={(["lavender", "pink", "peach"] as const)[i]} rotate={i % 2 ? 2 : -2} className="!p-2.5">
              <p className="text-[10px] text-ink/40">{item.label}</p>
              <p className="text-xs font-semibold text-ink/75">{item.detail}</p>
            </StickyNote>
          ))}
        </div>
      </div>

      {/* Hot takes */}
      <div className="mt-8">
        <h3 className="handwritten text-xl text-ink/50 mb-4">Hot takes</h3>
        <div className="relative min-h-[120px]">
          {hotTakes.map((take, i) => (
            <StickyNote
              key={take}
              color={(["yellow", "mint", "lavender"] as const)[i]}
              rotate={[-3, 2, -1.5][i]}
              jiggle
              className={`!p-3 max-w-[220px] ${i === 0 ? "" : i === 1 ? "ml-auto md:ml-16 mt-2" : "mt-2"}`}
            >
              <p className="text-xs text-ink/70 leading-relaxed">{take}</p>
            </StickyNote>
          ))}
        </div>
      </div>

      {/* Doodle corner */}
      <div className="flex justify-end gap-4 mt-8 opacity-20 pointer-events-none">
        <Doodle>★</Doodle>
        <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden><path d="M4,20 Q12,4 20,20" fill="none" stroke="#2A2A2A" strokeWidth="1" /></svg>
        <Doodle>☕</Doodle>
      </div>
    </JournalPage>
  );
}
