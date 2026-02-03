import { motion } from "framer-motion";

export default function BackgroundField() {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-obsidian via-ink to-black" />
      <motion.div
        className="absolute -top-32 -right-24 h-96 w-96 rounded-full bg-accent/20 blur-[120px]"
        animate={{
          opacity: [0.4, 0.7, 0.4],
          scale: [1, 1.1, 1]
        }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-24 left-16 h-[420px] w-[420px] rounded-full bg-white/5 blur-[140px]"
        animate={{
          opacity: [0.3, 0.6, 0.3],
          y: [0, -20, 0]
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/3 left-1/2 h-64 w-64 rounded-full bg-accent/10 blur-[100px]"
        animate={{
          opacity: [0.25, 0.5, 0.25],
          x: [0, 20, 0]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
