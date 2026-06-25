import { Nav, useActiveSection } from "./Nav";
import { AboutSection } from "./sections/AboutSection";
import { SkillsSection } from "./sections/SkillsSection";
import { ProjectsSection } from "./sections/ProjectsSection";
import { InternshipsSection } from "./sections/InternshipsSection";
import { StartupSection } from "./sections/StartupSection";
import { DeskSection } from "./sections/DeskSection";
import { CertificatesSection } from "./sections/CertificatesSection";
import { FunPageSection } from "./sections/FunPageSection";
import { ContactSection } from "./sections/ContactSection";
import { WavyDivider } from "./JournalPage";

export function FounderJournal() {
  const { active, scrollTo } = useActiveSection();

  return (
    <div className="min-h-screen bg-bg">
      <Nav active={active} onTabClick={scrollTo} />

      <main className="max-w-3xl mx-auto px-4 py-6 md:py-8 space-y-6">
        <AboutSection />
        <WavyDivider />
        <SkillsSection />
        <WavyDivider />
        <ProjectsSection />
        <WavyDivider />
        <InternshipsSection />
        <WavyDivider />
        <StartupSection />
        <WavyDivider />
        <DeskSection />
        <WavyDivider />
        <CertificatesSection />
        <WavyDivider />
        <FunPageSection />
        <WavyDivider />
        <ContactSection />
      </main>
    </div>
  );
}
