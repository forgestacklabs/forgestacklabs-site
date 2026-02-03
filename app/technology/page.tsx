"use client";

import { motion } from "framer-motion";

export default function TechnologyPage() {
  return (
    <div className="relative min-h-screen bg-[#0a0a0f]">
      {/* Animated mesh gradient background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-900/20 via-transparent to-transparent animate-gradient-shift" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent animate-gradient-shift-reverse" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent animate-pulse-slow" />
        
        {/* Animated grid lines */}
        <svg className="absolute inset-0 w-full h-full opacity-20">
          <defs>
            <pattern id="tech-grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(139, 92, 246, 0.1)" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#tech-grid)" />
        </svg>
      </div>

      <section className="mx-auto flex w-full max-w-5xl flex-col gap-10 px-6 py-20 md:py-28 relative">
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
              Systems engineered for
            </span>
            <br />
            <span style={{
              background: 'linear-gradient(135deg, #818cf8 0%, #a78bfa 50%, #c084fc 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              reliability, not spectacle.
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <div className="w-32 h-[1px] bg-gradient-to-r from-indigo-500 to-transparent mb-6" />
            
            <p 
              className="text-base md:text-lg font-light leading-relaxed"
              style={{ color: '#9d9db8' }}
            >
              We design software systems as infrastructure—calm, resilient, and precise. Every
              layer is considered for durability, graceful scale, and an unwavering commitment to
              clarity. The result is technology that feels quiet but strong.
            </p>
          </motion.div>
        </motion.div>

        {/* Cards Grid */}
        <motion.div 
          className="grid gap-6 md:grid-cols-2"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          {[
            {
              title: "Reliability",
              copy: "We invest in architectural discipline so every system behaves predictably under pressure.",
              icon: "▣",
              gradient: "from-indigo-500/10 to-indigo-500/5",
              borderGradient: "from-indigo-500/40 to-transparent",
              accentColor: "#818cf8"
            },
            {
              title: "Scalability",
              copy: "Growth should be silent and steady. Our systems expand without compromising stability.",
              icon: "▤",
              gradient: "from-purple-500/10 to-purple-500/5",
              borderGradient: "from-purple-500/40 to-transparent",
              accentColor: "#a78bfa"
            },
            {
              title: "Precision",
              copy: "We measure impact, refine details, and protect the integrity of every component.",
              icon: "▥",
              gradient: "from-blue-500/10 to-blue-500/5",
              borderGradient: "from-blue-500/40 to-transparent",
              accentColor: "#60a5fa"
            },
            {
              title: "Stewardship",
              copy: "Technology deserves care. We maintain systems with long-term guardianship in mind.",
              icon: "▦",
              gradient: "from-cyan-500/10 to-cyan-500/5",
              borderGradient: "from-cyan-500/40 to-transparent",
              accentColor: "#22d3ee"
            }
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 + index * 0.15 }}
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
      </section>

      {/* Floating ambient particles */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-5">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 3 + 2,
              height: Math.random() * 3 + 2,
              background: `radial-gradient(circle, ${
                ['#818cf8', '#a78bfa', '#60a5fa', '#22d3ee'][i % 4]
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