"use client";

import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";

export default function HomePage() {
  const [showIntro, setShowIntro] = useState(true);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3], [1, 0.95]);

  useEffect(() => {
    const timer = setTimeout(() => setShowIntro(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div ref={containerRef} className="relative min-h-screen bg-[#0a0a0f]">
      {/* Animated mesh gradient background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-indigo-900/20 via-transparent to-transparent animate-gradient-shift" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent animate-gradient-shift-reverse" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent animate-pulse-slow" />
        
        {/* Animated grid lines */}
        <svg className="absolute inset-0 w-full h-full opacity-20">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(139, 92, 246, 0.1)" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <AnimatePresence>
        {showIntro && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Animated grid background */}
            <div className="absolute inset-0 bg-[#0a0a0f]">
              {/* Dynamic grid cells */}
              <div className="grid grid-cols-12 grid-rows-8 h-full w-full">
                {[...Array(96)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="border border-indigo-500/10"
                    initial={{ 
                      backgroundColor: 'rgba(99, 102, 241, 0)',
                      scale: 0 
                    }}
                    animate={{ 
                      backgroundColor: [
                        'rgba(99, 102, 241, 0)',
                        `rgba(${99 + Math.random() * 100}, ${102 + Math.random() * 100}, 241, ${Math.random() * 0.3})`,
                        'rgba(99, 102, 241, 0)'
                      ],
                      scale: [0, 1, 0]
                    }}
                    transition={{
                      duration: 1.5,
                      delay: (i % 12) * 0.05 + Math.floor(i / 12) * 0.08,
                      repeat: Infinity,
                      repeatDelay: 0.5
                    }}
                  />
                ))}
              </div>

              {/* Scanning lines */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-500/20 to-transparent h-32"
                animate={{
                  y: ['-100%', '200%']
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              
              {/* Horizontal scan */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/20 to-transparent w-32"
                animate={{
                  x: ['-100%', '200%']
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "linear",
                  delay: 0.5
                }}
              />
            </div>

            {/* Glitch overlay */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-transparent to-purple-500/5"
              animate={{
                opacity: [0.3, 0.7, 0.3],
                scale: [1, 1.02, 1]
              }}
              transition={{
                duration: 0.2,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20, scale: 1.1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-center relative px-6 z-10"
            >
              {/* Company name with glitch effect */}
              <motion.p 
                className="relative text-xs md:text-sm uppercase tracking-[0.8em] font-bold mb-8"
                style={{ 
                  color: '#818cf8',
                  textShadow: '0 0 20px rgba(129, 140, 248, 0.8), 0 0 40px rgba(129, 140, 248, 0.4)'
                }}
                animate={{
                  textShadow: [
                    '0 0 20px rgba(129, 140, 248, 0.8), 0 0 40px rgba(129, 140, 248, 0.4)',
                    '0 0 30px rgba(168, 85, 247, 0.9), 0 0 50px rgba(168, 85, 247, 0.5)',
                    '0 0 20px rgba(129, 140, 248, 0.8), 0 0 40px rgba(129, 140, 248, 0.4)'
                  ]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity
                }}
              >
                <motion.span
                  animate={{
                    x: [-2, 2, -2],
                    opacity: [1, 0.8, 1]
                  }}
                  transition={{
                    duration: 0.15,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                >
                  FORGESTACK LABS
                </motion.span>
              </motion.p>
              
              {/* Flashy animated text */}
              <motion.h1 
                className="relative text-4xl md:text-6xl font-black tracking-tight"
                style={{ 
                  fontFamily: "'Space Grotesk', 'Inter', -apple-system, sans-serif",
                  background: 'linear-gradient(135deg, #818cf8 0%, #a78bfa 25%, #c084fc 50%, #e879f9 75%, #818cf8 100%)',
                  backgroundSize: '200% 200%',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  textShadow: '0 0 40px rgba(129, 140, 248, 0.5)'
                }}
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                <motion.span
                  animate={{
                    rotateX: [0, 5, 0],
                    rotateY: [0, -5, 0]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  style={{ display: 'inline-block' }}
                >
                  When Vision
                </motion.span>
                <br />
                <motion.span
                  animate={{
                    rotateX: [0, -5, 0],
                    rotateY: [0, 5, 0],
                    scale: [1, 1.05, 1]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.2
                  }}
                  style={{ display: 'inline-block' }}
                >
                  Meets Precision
                </motion.span>
              </motion.h1>
              
              {/* Animated particles around text */}
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 rounded-full"
                  style={{
                    background: `radial-gradient(circle, ${['#818cf8', '#a78bfa', '#c084fc'][i % 3]}, transparent)`,
                    left: `${50 + Math.cos((i / 8) * Math.PI * 2) * 40}%`,
                    top: `${50 + Math.sin((i / 8) * Math.PI * 2) * 40}%`
                  }}
                  animate={{
                    scale: [0, 2, 0],
                    opacity: [0, 1, 0],
                    x: Math.cos((i / 8) * Math.PI * 2) * 50,
                    y: Math.sin((i / 8) * Math.PI * 2) * 50
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.2
                  }}
                />
              ))}
              
              {/* Digital loading bar */}
              <motion.div className="mt-12 mx-auto max-w-xs">
                <div className="h-1 bg-indigo-900/30 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
                    initial={{ width: '0%' }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                  />
                </div>
                <motion.p
                  className="text-xs text-indigo-400/60 mt-2 font-mono"
                  animate={{ opacity: [0.4, 1, 0.4] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  INITIALIZING EXPERIENCE...
                </motion.p>
              </motion.div>
            </motion.div>

            {/* Corner brackets */}
            {[
              { top: 20, left: 20, rotate: 0 },
              { top: 20, right: 20, rotate: 90 },
              { bottom: 20, right: 20, rotate: 180 },
              { bottom: 20, left: 20, rotate: 270 }
            ].map((pos, i) => (
              <motion.div
                key={i}
                className="absolute w-16 h-16 border-t-2 border-l-2 border-indigo-500/50"
                style={{
                  ...pos,
                  transform: `rotate(${pos.rotate}deg)`
                }}
                animate={{
                  opacity: [0.3, 1, 0.3],
                  scale: [1, 1.1, 1]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.2
                }}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section with Scroll Animation */}
      <motion.section 
        style={{ opacity, scale }}
        className="relative min-h-screen flex items-center justify-center px-6"
      >
        <div className="max-w-5xl w-full">
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
                Founder-led technology studio
              </p>
            </motion.div>
            
            <h1 
              className="text-5xl md:text-7xl lg:text-8xl font-extralight tracking-[-0.03em] leading-[1.1] mb-8"
              style={{ 
                fontFamily: "'Inter', -apple-system, sans-serif",
                background: 'linear-gradient(135deg, #e8e8f0 0%, #b8b8d0 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              When Vision
              <br />
              <span className="font-light" style={{
                background: 'linear-gradient(135deg, #818cf8 0%, #a78bfa 50%, #c084fc 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                Meets Precision
              </span>
            </h1>
            
            <motion.p 
              className="max-w-2xl mx-auto text-base md:text-lg font-light leading-relaxed mb-12"
              style={{ color: '#9d9db8' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              FORGESTACK LABS exists to design and refine software systems that endure. 
              We focus on clarity, restraint, and the craft of building quietly—so each 
              system can serve its purpose with unwavering precision.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
            >
              <Link
                href="/technology"
                className="group inline-flex items-center gap-4 text-xs uppercase tracking-[0.4em] font-light transition-all duration-500 px-8 py-4 rounded-full border border-indigo-500/30 hover:border-indigo-400/60 hover:bg-indigo-500/10"
                style={{ color: '#c8c8d8' }}
              >
                <span>Explore Our Work</span>
                <motion.span 
                  className="w-12 h-[1px] bg-gradient-to-r from-indigo-500 to-purple-500"
                  animate={{ width: [48, 56, 48] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </Link>
            </motion.div>
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

      {/* Values Section with Scroll Animations */}
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
              Built on Principles
            </h2>
            <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-indigo-500 to-transparent mx-auto" />
          </motion.div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Precision",
                copy: "Every system is engineered to feel deliberate—nothing is rushed, nothing is accidental.",
                icon: "◆",
                gradient: "from-indigo-500/10 to-indigo-500/5",
                borderGradient: "from-indigo-500/30 to-transparent"
              },
              {
                title: "Continuity",
                copy: "We build for longevity, prioritizing resilience and quiet adaptability over noise.",
                icon: "◇",
                gradient: "from-purple-500/10 to-purple-500/5",
                borderGradient: "from-purple-500/30 to-transparent"
              },
              {
                title: "Discipline",
                copy: "Our process favors restraint, measured decisions, and a commitment to long-term outcomes.",
                icon: "◈",
                gradient: "from-blue-500/10 to-blue-500/5",
                borderGradient: "from-blue-500/30 to-transparent"
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group relative"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-100 transition-all duration-700 rounded-2xl blur-2xl`} />
                
                <div className="relative backdrop-blur-xl bg-gradient-to-br from-white/[0.03] to-white/[0.01] border border-white/[0.08] hover:border-white/[0.15] transition-all duration-700 rounded-2xl p-8 h-full">
                  <div className={`absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r ${item.borderGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
                  
                  <div className="flex items-start gap-4 mb-6">
                    <span className="text-3xl opacity-40 group-hover:opacity-70 transition-opacity" style={{ color: '#818cf8' }}>
                      {item.icon}
                    </span>
                    <h3 
                      className="text-xl md:text-2xl font-light tracking-tight"
                      style={{ color: '#e8e8f0' }}
                    >
                      {item.title}
                    </h3>
                  </div>
                  
                  <p 
                    className="text-sm md:text-base font-light leading-relaxed"
                    style={{ color: '#9d9db8' }}
                  >
                    {item.copy}
                  </p>
                  
                  <div className="absolute bottom-0 right-0 w-16 h-16 border-r border-b border-white/5 group-hover:border-white/10 transition-colors duration-500 rounded-br-2xl" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Floating orbs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-5">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 4 + 2,
              height: Math.random() * 4 + 2,
              background: `radial-gradient(circle, ${
                ['#818cf8', '#a78bfa', '#c084fc'][i % 3]
              }40, transparent)`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, Math.random() * -200 - 100, 0],
              x: [0, Math.random() * 100 - 50, 0],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: Math.random() * 20 + 15,
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