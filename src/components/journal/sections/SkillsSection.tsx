import { skills } from "../../../data/portfolio";
import { JournalPage, SectionHeading, WashiTape, StickyNote, CheckItem } from "../JournalPage";

export function SkillsSection() {
  return (
    <JournalPage id="skills" noHeader>
      <SectionHeading>Skills</SectionHeading>

      <div className="grid md:grid-cols-2 gap-8 mt-6">
        <div>
          <WashiTape color="#E6DDF8" className="w-24 mb-3" />
          <h3 className="handwritten text-xl text-ink/50 mb-4">Technical Skills</h3>
          <ul className="space-y-2">
            {skills.technical.map((s) => <CheckItem key={s}>{s}</CheckItem>)}
          </ul>
        </div>
        <div>
          <WashiTape color="#F8D7DD" className="w-24 mb-3" />
          <h3 className="handwritten text-xl text-ink/50 mb-4">Professional Skills</h3>
          <ul className="space-y-2">
            {skills.professional.map((s) => <CheckItem key={s}>{s}</CheckItem>)}
          </ul>
        </div>
      </div>

      <StickyNote color="mint" rotate={1} className="inline-block mt-6 !p-2.5">
        <span className="text-xs text-ink/60">always adding to this list →</span>
      </StickyNote>
    </JournalPage>
  );
}
