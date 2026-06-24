import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navTabs, profile, type NavTabId } from "../../data/portfolio";

interface NavProps {
  active: NavTabId;
  onTabClick: (id: NavTabId) => void;
}

export function Nav({ active, onTabClick }: NavProps) {
  const [open, setOpen] = useState(false);

  const handleClick = (id: NavTabId) => {
    onTabClick(id);
    setOpen(false);
  };

  return (
    <nav className="sticky top-0 z-30 bg-bg/92 backdrop-blur-md border-b border-ink/[0.06]">
      <div className="max-w-3xl mx-auto px-4">
        <div className="flex items-center justify-between py-3">
          <button type="button" onClick={() => handleClick("about")} className="text-left border-0 bg-transparent cursor-pointer p-0">
            <p className="handwritten text-xl text-ink/60 leading-none">Riya's Journal</p>
            <p className="text-[10px] text-ink/30 mt-0.5 hidden sm:block">{profile.name}</p>
          </button>

          <button
            type="button"
            className="md:hidden p-2 border-0 bg-transparent cursor-pointer text-ink/50"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Desktop tabs */}
        <div className="hidden md:flex gap-0.5 overflow-x-auto pb-0 -mb-px">
          {navTabs.map((tab) => {
            const isActive = active === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => handleClick(tab.id)}
                className={`relative shrink-0 px-3 py-2 text-xs font-medium border-0 cursor-pointer transition-colors ${
                  isActive ? "text-ink" : "text-ink/45 hover:text-ink/70"
                }`}
              >
                {tab.label}
                {isActive && (
                  <motion.div
                    layoutId="washiUnderline"
                    className="absolute bottom-0 left-1 right-1 h-[3px] rounded-full"
                    style={{ background: "linear-gradient(90deg, #F8D7DD, #E6DDF8)" }}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="md:hidden border-t border-ink/[0.06] bg-bg/98"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
          >
            <div className="max-w-3xl mx-auto px-4 py-3 flex flex-col gap-1">
              {navTabs.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => handleClick(tab.id)}
                  className={`text-left px-3 py-2.5 rounded-md text-sm font-medium border-0 cursor-pointer ${
                    active === tab.id ? "bg-lavender/40 text-ink" : "text-ink/60 hover:bg-paper"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export function useActiveSection() {
  const [active, setActive] = useState<NavTabId>("about");

  useEffect(() => {
    const ids = navTabs.map((t) => t.id);
    const observers: IntersectionObserver[] = [];

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id); },
        { rootMargin: "-15% 0px -55% 0px", threshold: 0 }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const scrollTo = (id: NavTabId) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setActive(id);
  };

  return { active, scrollTo };
}
