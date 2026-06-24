import { profile, aboutNotes, currentlyBuilding } from "../../../data/portfolio";
import { JournalPage, StickyNote, Doodle, SketchArrow, WashiTape, Polaroid } from "../JournalPage";

export function AboutSection() {
  return (
    <JournalPage id="about" noHeader>
      <div className="relative">
        <Doodle className="absolute -top-1 right-0 rotate-3 hidden sm:block">{aboutNotes[0]}</Doodle>
        <Doodle className="absolute top-32 -left-1 -rotate-6 hidden md:block">{aboutNotes[1]}</Doodle>

        <div className="grid md:grid-cols-[auto_1fr] gap-8 items-start">
          <Polaroid caption="that's me :)" rotate={-3}>
            <img
              src="/portfolio/riya.jpg"
              alt={profile.name}
              className="w-full h-full object-cover"
            />
          </Polaroid>

          <div className="space-y-4">
            <h2 className="handwritten text-3xl md:text-4xl text-ink">{profile.tagline}</h2>
            <p className="text-[15px] text-ink/75 leading-relaxed">{profile.intro}</p>
            <p className="text-sm text-ink/50">{profile.degree} · {profile.university}</p>

            <div className="flex flex-wrap gap-2 pt-1">
              {profile.roles.map((role, i) => (
                <StickyNote key={role} color={(["lavender", "pink", "peach", "mint"] as const)[i % 4]} rotate={i % 2 ? 2 : -1.5} className="!p-2">
                  <span className="text-xs font-semibold text-ink/75">{role}</span>
                </StickyNote>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 max-w-sm relative">
          <WashiTape color="#F8D7DD" className="w-16 absolute -top-2 left-4" />
          <StickyNote color="yellow" rotate={-0.5} className="!rotate-0">
            <p className="handwritten text-base text-ink/70 mb-2">Currently building →</p>
            <ul className="space-y-1 text-sm text-ink/70">
              {currentlyBuilding.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-ink/30">◦</span> {item}
                </li>
              ))}
            </ul>
          </StickyNote>
        </div>

        <SketchArrow className="mt-6 mx-auto md:mx-0 md:ml-20" />
      </div>
    </JournalPage>
  );
}
