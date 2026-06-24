import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { contact, profile } from "../../../data/portfolio";
import { JournalPage, StampButton } from "../JournalPage";

export function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <JournalPage id="contact" noHeader>
      <h2 className="handwritten text-3xl md:text-4xl text-ink mb-6">
        Thanks for reading my journal.
      </h2>

      <div className="flex flex-wrap gap-2 mb-8">
        <StampButton href={contact.linkedin}>LinkedIn</StampButton>
        <StampButton href={contact.github}>GitHub</StampButton>
        <StampButton href={`mailto:${contact.email}`}>Email</StampButton>
        <StampButton href={contact.resume}>Resume</StampButton>
      </div>

      <form onSubmit={handleSubmit} className="space-y-3 max-w-md">
        <div className="border-b border-ink/15 pb-1">
          <label className="handwritten text-sm text-ink/40 block mb-1">Name</label>
          <input
            type="text" required value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full bg-transparent border-0 text-sm text-ink focus:outline-none py-1"
          />
        </div>
        <div className="border-b border-ink/15 pb-1">
          <label className="handwritten text-sm text-ink/40 block mb-1">Email</label>
          <input
            type="email" required value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full bg-transparent border-0 text-sm text-ink focus:outline-none py-1"
          />
        </div>
        <div className="border-b border-ink/15 pb-1">
          <label className="handwritten text-sm text-ink/40 block mb-1">Message</label>
          <textarea
            required rows={4} value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="w-full bg-transparent border-0 text-sm text-ink resize-none focus:outline-none py-1"
          />
        </div>
        <motion.button
          type="submit"
          className="stamp-btn mt-2 cursor-pointer"
          whileTap={{ scale: 0.98 }}
        >
          <span className="flex items-center gap-1.5"><Send size={13} /> {sent ? "Sent! ✨" : "Send"}</span>
        </motion.button>
      </form>

      <p className="handwritten text-center text-ink/40 mt-10 text-lg md:text-xl">
        let's build something meaningful together.
      </p>

      <footer className="text-center text-[11px] text-ink/25 mt-8 pt-4 border-t border-ink/[0.04]">
        © 2025 {profile.name}
      </footer>
    </JournalPage>
  );
}
