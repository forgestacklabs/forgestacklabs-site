"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { SiPostman, SiInsomnia } from "react-icons/si";
import type { IconType } from "react-icons";
import { FaJava } from "react-icons/fa";



// Type definitions
interface HexagonTechProps {
  tech: {
    name: string;
    icon: string | IconType;
    color: string;
  };
  index: number;
  delay: number;
}

export default function TechnologyPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Fixed: Content stays at full opacity longer, then fades out more gradually
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.5], [1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.98]);

  return (
    <div ref={containerRef} className="relative min-h-screen bg-[#0a0a0f]">

      {/* Animated mesh gradient background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-900/20 via-transparent to-transparent animate-gradient-shift" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent animate-gradient-shift-reverse" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent animate-pulse-slow" />

        {/* Animated grid lines */}
        <svg className="absolute inset-0 w-full h-full opacity-20">
          <defs>
            <pattern id="tech-grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(139, 92, 246, 0.1)" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#tech-grid)" />
        </svg>
      </div>

      <motion.section
        style={{ opacity, scale }}
        className="mx-auto flex w-full max-w-5xl flex-col gap-10 px-6 py-20 md:py-28 relative"
      >
        {/* Header Section */}
        <motion.div
          className="max-w-3xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative inline-block mb-6"
          >
            <div className="absolute inset-0 blur-xl bg-indigo-500/20 rounded-full" />
            <p
              className="relative text-[10px] md:text-xs uppercase tracking-[0.5em] font-light px-6 py-2 rounded-full border border-indigo-500/30"
              style={{ color: '#9d9db8' }}
            >
              Technology
            </p>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-6xl font-extralight tracking-[-0.03em] leading-tight mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            style={{
              fontFamily: "'Inter', -apple-system, sans-serif"
            }}
          >
            <span style={{
              background: 'linear-gradient(135deg, #e8e8f0 0%, #b8b8d0 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              Engineering philosophy rooted in
            </span>
            <br />
            <span style={{
              background: 'linear-gradient(135deg, #818cf8 0%, #a78bfa 50%, #c084fc 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              systems thinking, restraint, and precision.
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <div className="w-32 h-[1px] bg-gradient-to-r from-indigo-500 to-transparent mb-6" />

            <p
              className="text-base md:text-lg font-light leading-relaxed mb-6"
              style={{ color: '#9d9db8' }}
            >
              Technology should serve clear objectives. At <span style={{ color: '#e8e8f0' }}>FORGESTACK LABS</span>, every technical decision is made with intention—choosing the right tools, designing resilient systems, and maintaining focus on what truly matters.
            </p>

            <p
              className="text-base md:text-lg font-light leading-relaxed"
              style={{ color: '#9d9db8' }}
            >
              The approach emphasizes reliability over novelty, simplicity over complexity, and long-term thinking over short-term gains.
            </p>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-indigo-500/50 to-transparent" />
        </motion.div>

        {/* Engineering Principles Grid */}
        <motion.div
          className="grid gap-6 md:grid-cols-2"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          {[
            {
              title: "Precision Engineering",
              copy: "Every line of code serves a purpose. Systems are built with clarity, maintainability, and long-term stability in mind. No shortcuts, no technical debt by design.",
              icon: "◆",
              gradient: "from-indigo-500/10 to-indigo-500/5",
              borderGradient: "from-indigo-500/40 to-transparent",
              accentColor: "#818cf8"
            },
            {
              title: "Scalable Architecture",
              copy: "Infrastructure designed to grow seamlessly. From prototype to production, systems are architected to handle scale without compromising performance or reliability.",
              icon: "◇",
              gradient: "from-purple-500/10 to-purple-500/5",
              borderGradient: "from-purple-500/40 to-transparent",
              accentColor: "#a78bfa"
            },
            {
              title: "Security First",
              copy: "Security is not an afterthought. From data handling to authentication, every layer is designed with security principles embedded from the foundation.",
              icon: "◈",
              gradient: "from-blue-500/10 to-blue-500/5",
              borderGradient: "from-blue-500/40 to-transparent",
              accentColor: "#60a5fa"
            },
            {
              title: "Performance Mindset",
              copy: "Speed and efficiency matter. Systems are optimized for real-world conditions, ensuring responsive experiences and resource efficiency at every level.",
              icon: "◐",
              gradient: "from-cyan-500/10 to-cyan-500/5",
              borderGradient: "from-cyan-500/40 to-transparent",
              accentColor: "#22d3ee"
            }
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              whileHover={{
                y: -8,
                transition: { duration: 0.3 }
              }}
              className="group relative"
            >
              {/* Glow effect on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-100 transition-all duration-700 rounded-2xl blur-2xl`} />

              {/* Card */}
              <div className="relative backdrop-blur-xl bg-gradient-to-br from-white/[0.03] to-white/[0.01] border border-white/[0.08] hover:border-white/[0.15] transition-all duration-700 rounded-2xl p-8 h-full">
                {/* Top border gradient */}
                <div className={`absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r ${item.borderGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />

                {/* Icon and title */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-start gap-4">
                    <motion.span
                      className="text-3xl opacity-40 group-hover:opacity-70 transition-opacity duration-500"
                      style={{ color: item.accentColor }}
                      whileHover={{ rotate: 180 }}
                      transition={{ duration: 0.6 }}
                    >
                      {item.icon}
                    </motion.span>
                    <h3
                      className="text-xl md:text-2xl font-light tracking-tight"
                      style={{ color: '#e8e8f0' }}
                    >
                      {item.title}
                    </h3>
                  </div>

                  {/* Corner accent */}
                  <motion.div
                    className="w-8 h-8 border-r border-t opacity-20 group-hover:opacity-40 transition-opacity duration-500 rounded-tr-2xl"
                    style={{ borderColor: item.accentColor }}
                  />
                </div>

                {/* Description */}
                <p
                  className="text-sm md:text-base font-light leading-relaxed"
                  style={{ color: '#9d9db8' }}
                >
                  {item.copy}
                </p>

                {/* Bottom corner accent */}
                <div className="absolute bottom-0 right-0 w-16 h-16 border-r border-b border-white/5 group-hover:border-white/10 transition-colors duration-500 rounded-br-2xl" />

                {/* Animated line on hover */}
                <motion.div
                  className={`absolute bottom-0 left-0 h-[1px] bg-gradient-to-r ${item.borderGradient}`}
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.7 }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Decorative elements */}
        <motion.div
          className="absolute top-20 right-10 w-1 h-1 rounded-full bg-indigo-500/50 blur-sm"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-40 left-10 w-1 h-1 rounded-full bg-purple-500/50 blur-sm"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </motion.section>

      {/* Floating ambient particles */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-5">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 3 + 2,
              height: Math.random() * 3 + 2,
              background: `radial-gradient(circle, ${['#818cf8', '#a78bfa', '#60a5fa', '#22d3ee'][i % 4]
                }40, transparent)`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, Math.random() * -150 - 50, 0],
              x: [0, Math.random() * 80 - 40, 0],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: Math.random() * 15 + 10,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Systems Thinking Section */}
      <section className="relative py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.div
              className="inline-block mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <div className="relative">
                <div className="absolute inset-0 blur-xl bg-purple-500/10 rounded-full" />
                <p className="relative text-[10px] md:text-xs uppercase tracking-[0.5em] font-light px-6 py-2 rounded-full border border-purple-500/30" style={{ color: '#9d9db8' }}>
                  Philosophy
                </p>
              </div>
            </motion.div>

            <h2
              className="text-3xl md:text-5xl font-extralight tracking-[-0.02em] mb-6 pb-2"
              style={{
                background: 'linear-gradient(135deg, #e8e8f0 0%, #b8b8d0 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              Systems Thinking
            </h2>
    
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
            className="backdrop-blur-xl bg-gradient-to-br from-white/[0.03] to-white/[0.01] border border-white/[0.08] rounded-2xl p-8 md:p-12"
          >
            <div className="space-y-6">
              <p
                className="text-base md:text-lg font-light leading-relaxed"
                style={{ color: '#9d9db8' }}
              >
                Building software is about understanding relationships between components, anticipating edge cases, and designing for both current needs and future evolution.
              </p>

              <p
                className="text-base md:text-lg font-light leading-relaxed"
                style={{ color: '#9d9db8' }}
              >
                This mindset extends beyond code—into architecture, infrastructure, deployment, monitoring, and maintenance. Every piece fits into a larger system, and every decision carries weight.
              </p>

              <div className="pt-4">
                <p
                  className="text-base md:text-lg font-light leading-relaxed"
                  style={{ color: '#e8e8f0' }}
                >
                  The result is software that operates predictably, scales gracefully, and remains maintainable over time.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Product Overview Section */}
      <section className="relative py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2
              className="text-3xl md:text-5xl font-extralight tracking-[-0.02em] mb-4"
              style={{ color: '#e8e8f0' }}
            >
              Product Overview
            </h2>
            <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-indigo-500 to-transparent mx-auto" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="backdrop-blur-xl bg-gradient-to-br from-white/[0.03] to-white/[0.01] border border-white/[0.08] rounded-2xl p-8 md:p-12">
              <div className="text-center mb-8">
                <div className="inline-block px-4 py-2 rounded-full border border-purple-500/30 mb-6">
                  <p className="text-xs uppercase tracking-wider" style={{ color: '#a78bfa' }}>
                    Currently in Stealth Mode
                  </p>
                </div>
                <p className="text-base md:text-lg font-light leading-relaxed" style={{ color: '#9d9db8' }}>
                  Forgestack Labs LLP is currently developing a full-suite software platform for fuel stations,
                  designed to manage daily operations, sales, and accounting.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Technology Stack Section - Honeycomb Layout */}
      <section className="relative py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2
              className="text-3xl md:text-5xl font-extralight tracking-[-0.02em] mb-4"
              style={{ color: '#e8e8f0' }}
            >
              Technology Stack
            </h2>
            <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-indigo-500 to-transparent mx-auto" />
          </motion.div>

          {/* Honeycomb Grid */}
          <div className="relative max-w-6xl mx-auto">
            <div className="flex flex-col items-center gap-4">
              {/* Row 1 */}
              <div className="flex gap-4">
                {[
                  { name: "React", icon: "⚛️", color: "#61DAFB" },
                  { name: "Next.js", icon: "▲", color: "#FFFFFF" },
                  { name: "JavaScript", icon: "JS", color: "#F7DF1E" },
                ].map((tech, index) => (
                  <HexagonTech key={tech.name} tech={tech} index={index} delay={0} />
                ))}
              </div>

              {/* Row 2 */}
              <div className="flex gap-4" style={{ marginLeft: '80px' }}>
                {[
                  { name: "Node.js", icon: "◆", color: "#339933" },
                  { name: "Tailwind", icon: "~", color: "#06B6D4" },
                  { name: "CSS", icon: "#", color: "#1572B6" },
                  { name: "HTML", icon: "</>", color: "#E34F26" },
                ].map((tech, index) => (
                  <HexagonTech key={tech.name} tech={tech} index={index} delay={0.15} />
                ))}
              </div>

              {/* Row 3 */}
              <div className="flex gap-4">
                {[
                  { name: "PostgreSQL", icon: "🐘", color: "#4169E1" },
                  { name: "Java", icon: FaJava, color: "#007396" },
                  { name: "Flutter", icon: "◊", color: "#02569B" },
                ].map((tech, index) => (
                  <HexagonTech key={tech.name} tech={tech} index={index} delay={0.3} />
                ))}
              </div>
            </div>

            {/* Tools Section */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-20 text-center"
            >
              <h3
                className="text-2xl md:text-3xl font-extralight tracking-[-0.02em] mb-8"
                style={{ color: '#e8e8f0' }}
              >
                Development Tools
              </h3>

              <div className="flex justify-center gap-8 flex-wrap">
                {[
                  { name: "Postman", icon: SiPostman, color: "#FF6C37" },
                  { name: "Insomnia", icon: SiInsomnia, color: "#4000BF" },
                ].map((tool, index) => (
                  <motion.div
                    key={tool.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -8, transition: { duration: 0.3 } }}
                    className="group relative"
                  >
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700 rounded-2xl blur-2xl"
                      style={{ background: `${tool.color}20` }}
                    />

                    <div className="relative backdrop-blur-xl bg-gradient-to-br from-white/[0.03] to-white/[0.01] border border-white/[0.08] hover:border-white/[0.15] transition-all duration-700 rounded-2xl px-8 py-6 min-w-[160px]">
                      <div
                        className="absolute top-0 left-0 right-0 h-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                        style={{ background: `linear-gradient(to right, ${tool.color}40, transparent)` }}
                      />

                      <div className="flex flex-col items-center gap-3">
                        {(() => {
                          const Icon = tool.icon;
                          return <Icon className="text-4xl" style={{ color: tool.color }} />;
                        })()}


                        <p
                          className="text-lg font-light"
                          style={{ color: '#e8e8f0' }}
                        >
                          {tool.name}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes gradient-shift {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(10%, 10%) scale(1.1); }
        }
        @keyframes gradient-shift-reverse {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-10%, -10%) scale(1.1); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.2; }
        }
        .animate-gradient-shift {
          animation: gradient-shift 20s ease-in-out infinite;
        }
        .animate-gradient-shift-reverse {
          animation: gradient-shift-reverse 25s ease-in-out infinite;
        }
        .animate-pulse-slow {
          animation: pulse-slow 15s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}

// Hexagon Component
function HexagonTech({ tech, index, delay }: HexagonTechProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.6,
        delay: delay + index * 0.1,
        type: "spring",
        stiffness: 100
      }}
      whileHover={{
        scale: 1.15,
        rotate: 5,
        transition: { duration: 0.3 }
      }}
      className="group relative"
      style={{ width: '140px', height: '140px' }}
    >
      {/* Glow effect */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700 blur-2xl"
        style={{
          background: `${tech.color}30`,
          clipPath: 'polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)'
        }}
      />

      {/* Hexagon */}
      <div
        className="relative w-full h-full backdrop-blur-xl bg-gradient-to-br from-white/[0.03] to-white/[0.01] border border-white/[0.08] group-hover:border-white/[0.15] transition-all duration-700 flex flex-col items-center justify-center"
        style={{
          clipPath: 'polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)'
        }}
      >
        {/* Top border gradient */}
        <div
          className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-700"
          style={{
            background: `linear-gradient(to right, ${tech.color}60, transparent)`,
            clipPath: 'polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)'
          }}
        />

        {/* Icon */}
        <motion.div
          className="text-4xl mb-2"
          animate={{
            rotate: [0, 5, 0, -5, 0]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{ color: tech.color }}
        >
          {typeof tech.icon === "string" ? (
            tech.icon
          ) : (
            <tech.icon />
          )}

        </motion.div>

        {/* Name */}
        <p
          className="text-sm font-light text-center px-2"
          style={{ color: '#e8e8f0' }}
        >
          {tech.name}
        </p>
      </div>
    </motion.div>
  );
}