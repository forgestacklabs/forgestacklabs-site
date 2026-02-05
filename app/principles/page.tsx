"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ApproachPage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3], [1, 0.95]);

  return (
    <div ref={containerRef} className="relative min-h-screen bg-[#0a0a0f]">
      {/* Background elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-indigo-900/20 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent" />
        
        <svg className="absolute inset-0 w-full h-full opacity-20">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(139, 92, 246, 0.1)" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Hero Section */}
      <motion.section 
        style={{ opacity, scale }}
        className="relative min-h-screen flex items-center justify-center px-6"
      >
        <div className="max-w-4xl w-full">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="text-center"
          >
            <motion.div 
              className="inline-block relative mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <div className="absolute inset-0 blur-xl bg-indigo-500/20 rounded-full" />
              <p 
                className="relative text-[10px] md:text-xs uppercase tracking-[0.5em] font-light px-6 py-2 rounded-full border border-indigo-500/30"
                style={{ color: '#9d9db8' }}
              >
                Approach
              </p>
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-6xl lg:text-7xl font-extralight tracking-[-0.03em] leading-[1.1] mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              style={{ 
                fontFamily: "'Inter', -apple-system, sans-serif",
                background: 'linear-gradient(135deg, #e8e8f0 0%, #b8b8d0 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              Principles that guide how products are{' '}
              <motion.span
                style={{ 
                  display: 'inline-block',
                  background: 'linear-gradient(135deg, #818cf8 0%, #a78bfa 50%, #c084fc 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                conceived, built, and refined
              </motion.span>
            </motion.h1>
            
            <motion.p 
              className="max-w-3xl mx-auto text-base md:text-lg font-light leading-relaxed mb-8"
              style={{ color: '#9d9db8' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              Building meaningful products requires more than technical capability. It demands discipline, 
              patience, and a commitment to doing things right.
            </motion.p>

            <motion.p 
              className="max-w-3xl mx-auto text-base md:text-lg font-light leading-relaxed"
              style={{ color: '#9d9db8' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              At <span style={{ color: '#e8e8f0' }}>FORGESTACK LABS</span>, the approach is grounded in principles 
              that transcend individual projects—values that shape how problems are understood, solutions are designed, 
              and systems are brought to life.
            </motion.p>
          </motion.div>
        </div>
        
        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-indigo-500/50 to-transparent" />
        </motion.div>
      </motion.section>

      {/* Core Principles Section */}
      <section className="relative py-32 px-6">
        <div className="max-w-6xl mx-auto">
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
              Core Principles
            </h2>
            <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-indigo-500 to-transparent mx-auto" />
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Long-term thinking",
                description: "Products are built to last. Decisions prioritize sustainability, maintainability, and future-proofing over immediate convenience.",
                icon: "⬡",
                gradient: "from-indigo-500/10 to-indigo-500/5",
                borderGradient: "from-indigo-500/30 to-transparent",
                accentColor: '#818cf8'
              },
              {
                title: "Quiet execution",
                description: "Focus on building, not announcing. Progress is measured by what ships, not what's promised.",
                icon: "◇",
                gradient: "from-purple-500/10 to-purple-500/5",
                borderGradient: "from-purple-500/30 to-transparent",
                accentColor: '#a78bfa'
              },
              {
                title: "Intentional design",
                description: "Every feature, every interaction, every line of code exists for a reason. Clarity and purpose guide every decision.",
                icon: "◈",
                gradient: "from-blue-500/10 to-blue-500/5",
                borderGradient: "from-blue-500/30 to-transparent",
                accentColor: '#60a5fa'
              },
              {
                title: "Quality over speed",
                description: "Rushing creates debt. Taking the time to build correctly the first time saves exponentially more time later.",
                icon: "◆",
                gradient: "from-violet-500/10 to-violet-500/5",
                borderGradient: "from-violet-500/30 to-transparent",
                accentColor: '#8b5cf6'
              },
              {
                title: "User-centered approach",
                description: "Technology serves people. Systems are designed around real needs, real workflows, and real outcomes.",
                icon: "◐",
                gradient: "from-cyan-500/10 to-cyan-500/5",
                borderGradient: "from-cyan-500/30 to-transparent",
                accentColor: '#06b6d4'
              },
              {
                title: "Continuous refinement",
                description: "Products evolve through observation, feedback, and iteration. Launch is the beginning, not the end.",
                icon: "○",
                gradient: "from-pink-500/10 to-pink-500/5",
                borderGradient: "from-pink-500/30 to-transparent",
                accentColor: '#ec4899'
              }
            ].map((principle, index) => (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group relative"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${principle.gradient} opacity-0 group-hover:opacity-100 transition-all duration-700 rounded-2xl blur-2xl`} />
                
                <div className="relative backdrop-blur-xl bg-gradient-to-br from-white/[0.03] to-white/[0.01] border border-white/[0.08] hover:border-white/[0.15] transition-all duration-700 rounded-2xl p-8 h-full">
                  <div className={`absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r ${principle.borderGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
                  
                  <div className="flex items-start gap-4 mb-6">
                    <motion.span 
                      className="text-3xl opacity-40 group-hover:opacity-70 transition-opacity" 
                      style={{ color: principle.accentColor }}
                      animate={{
                        scale: [1, 1.1, 1],
                        rotate: [0, 5, 0, -5, 0]
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      {principle.icon}
                    </motion.span>
                    <h3 
                      className="text-xl md:text-2xl font-light tracking-tight"
                      style={{ 
                        background: 'linear-gradient(135deg, #e8e8f0 0%, #b8b8d0 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text'
                      }}
                    >
                      {principle.title}
                    </h3>
                  </div>
                  
                  <p 
                    className="text-sm md:text-base font-light leading-relaxed"
                    style={{ color: '#9d9db8' }}
                  >
                    {principle.description}
                  </p>
                  
                  <div className="absolute bottom-0 right-0 w-16 h-16 border-r border-b border-white/5 group-hover:border-white/10 transition-colors duration-500 rounded-br-2xl" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


    </div>
  );
}