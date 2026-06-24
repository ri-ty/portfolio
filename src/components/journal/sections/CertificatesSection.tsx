import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Award } from "lucide-react";
import { certificates } from "../../../data/portfolio";
import { JournalPage, SectionHeading, StampButton } from "../JournalPage";

const filters = ["All", "Technical", "Business", "Leadership"] as const;

export function CertificatesSection() {
  const [active, setActive] = useState<(typeof filters)[number]>("All");
  const [enlarged, setEnlarged] = useState<string | null>(null);

  const filtered = active === "All" ? certificates : certificates.filter((c) => c.category === active);
  const enlargedCert = certificates.find((c) => c.id === enlarged);

  return (
    <JournalPage id="certificates" noHeader>
      <SectionHeading>Proof of Learning</SectionHeading>

      <div className="flex flex-wrap gap-2 mt-6 mb-5">
        {filters.map((f) => (
          <StampButton key={f} active={active === f} onClick={() => setActive(f)}>{f}</StampButton>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        {filtered.map((cert, i) => (
          <motion.button
            key={cert.id}
            type="button"
            onClick={() => setEnlarged(cert.id)}
            className="relative text-left border-0 bg-transparent p-0 cursor-pointer pinned-paper rounded-sm p-4"
            style={{
              background: ["#FFF9C4", "#E6DDF8", "#F8D7DD", "#FFDCC8"][i % 4],
              transform: `rotate(${i % 2 ? 1 : -1}deg)`,
            }}
            whileHover={{ y: -2 }}
          >
            <Award size={14} className="text-ink/25 mb-2" />
            <h4 className="handwritten text-lg">{cert.title}</h4>
            <p className="text-xs text-ink/50">{cert.issuer}</p>
            <p className="text-xs text-ink/40 mt-1">{cert.date}</p>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {enlargedCert && (
          <>
            <motion.div
              className="fixed inset-0 bg-ink/20 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setEnlarged(null)}
            />
            <motion.div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
              <motion.div
                className="pointer-events-auto journal-paper rounded-sm p-6 max-w-sm w-full shadow-2xl relative"
                initial={{ scale: 0.92, y: 16 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.92, y: 16 }}
                onClick={(e) => e.stopPropagation()}
              >
                <button type="button" onClick={() => setEnlarged(null)} className="absolute top-3 right-3 p-1 border-0 bg-transparent cursor-pointer text-ink/40" aria-label="Close">
                  <X size={16} />
                </button>
                <Award size={20} className="text-ink/25 mb-2" />
                <h4 className="handwritten text-2xl">{enlargedCert.title}</h4>
                <p className="text-sm text-ink/50 mt-1">{enlargedCert.issuer} · {enlargedCert.date}</p>
                <p className="text-sm text-ink/70 mt-4 leading-relaxed">{enlargedCert.description}</p>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </JournalPage>
  );
}
