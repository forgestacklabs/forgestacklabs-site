"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowIntro(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative">
      <AnimatePresence>
        {showIntro && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <p className="text-xs uppercase tracking-[0.5em] text-white/60">
                FORGESTACK LABS
              </p>
              <h1 className="mt-6 text-2xl md:text-4xl font-semibold tracking-tight">
                When Vision Meets Precision
              </h1>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <section className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-6 py-20 md:py-28">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.4em] text-white/60">
            Founder-led technology studio
          </p>
          <h1 className="mt-6 text-4xl md:text-6xl font-semibold leading-tight">
            When Vision Meets Precision
          </h1>
          <p className="mt-6 text-lg text-mist leading-relaxed">
            FORGESTACK LABS exists to design and refine software systems that endure. We
            focus on clarity, restraint, and the craft of building quietly—so each system can
            serve its purpose with unwavering precision.
          </p>
          <div className="mt-10">
            <Link
              href="/technology"
              className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.4em] text-white/80 transition hover:text-white"
            >
              Learn More
              <span className="h-px w-8 bg-accent" />
            </Link>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Precision",
              copy: "Every system is engineered to feel deliberate—nothing is rushed, nothing is accidental."
            },
            {
              title: "Continuity",
              copy: "We build for longevity, prioritizing resilience and quiet adaptability over noise."
            },
            {
              title: "Discipline",
              copy: "Our process favors restraint, measured decisions, and a commitment to long-term outcomes."
            }
          ].map((item) => (
            <div key={item.title} className="glass-panel p-6">
              <h3 className="text-lg font-semibold tracking-tight">{item.title}</h3>
              <p className="mt-3 text-sm text-mist leading-relaxed">{item.copy}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
