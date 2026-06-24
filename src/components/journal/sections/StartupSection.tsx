import { careerSathi, startupIdeas } from "../../../data/portfolio";
import { JournalPage, SectionHeading, StickyNote, Doodle } from "../JournalPage";

export function StartupSection() {
  return (
    <JournalPage id="startup" noHeader>
      <SectionHeading>Startup Lab</SectionHeading>

      <div className="cork-board rounded-md p-5 md:p-8 mt-6 relative min-h-[400px]">
        <Doodle className="absolute top-3 right-4 text-ink/20 rotate-6">💡</Doodle>

        {/* Featured card */}
        <div className="relative max-w-lg mx-auto mb-8" style={{ transform: "rotate(-1deg)" }}>
          <div className="bg-paper rounded-sm p-5 md:p-6 shadow-lg border border-ink/[0.06] relative">
            <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-pink shadow-sm" />
            <div className="flex items-start justify-between gap-2 mb-3">
              <div>
                <span className="handwritten text-sm text-ink/40">Idea #01</span>
                <h3 className="handwritten text-2xl md:text-3xl">{careerSathi.name}</h3>
              </div>
              <span className="text-xs bg-lavender/50 px-2 py-1 rounded-full font-medium whitespace-nowrap">
                Status: {careerSathi.status}
              </span>
            </div>

            <div className="grid sm:grid-cols-2 gap-3 text-sm">
              {[
                { l: "Problem", t: careerSathi.problem },
                { l: "Solution", t: careerSathi.solution },
                { l: "Who it's for", t: careerSathi.audience },
                { l: "How it makes money", t: careerSathi.businessModel },
              ].map((item) => (
                <div key={item.l} className="bg-bg/60 rounded-sm p-3">
                  <p className="handwritten text-ink/40 text-sm mb-0.5">{item.l}</p>
                  <p className="text-xs text-ink/70 leading-relaxed">{item.t}</p>
                </div>
              ))}
            </div>
            <div className="mt-3 bg-bg/60 rounded-sm p-3">
              <p className="handwritten text-ink/40 text-sm mb-0.5">What's next</p>
              <p className="text-xs text-ink/70 leading-relaxed">{careerSathi.next}</p>
            </div>
          </div>
        </div>

        {/* Smaller ideas */}
        <div className="flex flex-wrap justify-center gap-4 relative">
          {startupIdeas.map((idea, i) => (
            <StickyNote
              key={idea.id}
              color={i === 0 ? "pink" : "peach"}
              rotate={i === 0 ? -3 : 4}
              className={`max-w-[200px] ${i === 1 ? "md:-mt-4" : ""}`}
            >
              <span className="handwritten text-sm text-ink/40">Idea #{idea.id}</span>
              <p className="font-semibold text-sm mt-0.5">{idea.name}</p>
              <p className="text-xs text-ink/60 mt-1">{idea.description}</p>
              <span className="inline-block mt-2 text-[10px] bg-white/50 px-2 py-0.5 rounded-full">{idea.status}</span>
            </StickyNote>
          ))}
        </div>

        {/* Doodles */}
        <div className="flex justify-between mt-6 px-2 opacity-20 pointer-events-none">
          <span className="text-lg">⭐</span>
          <svg width="30" height="20" viewBox="0 0 30 20" aria-hidden><path d="M2,10 L28,10 M22,5 L28,10 L22,15" fill="none" stroke="#2A2A2A" strokeWidth="1" /></svg>
          <span className="text-lg">💡</span>
        </div>

        <StickyNote color="yellow" rotate={-2} className="absolute bottom-3 right-3 max-w-[180px] !p-2.5 hidden sm:block">
          <p className="text-[11px] text-ink/55 leading-snug">ideas are free. execution is the hard part.</p>
        </StickyNote>
      </div>
    </JournalPage>
  );
}
