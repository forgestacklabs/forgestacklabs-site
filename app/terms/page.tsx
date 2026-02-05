"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function TermsOfServicePage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  const SectionTitle = ({ children, delay = 0 }: { children: string; delay?: number }) => (
    <motion.h2
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay }}
      className="text-2xl md:text-4xl font-light tracking-tight mb-6"
      style={{
        fontFamily: "'Inter', -apple-system, sans-serif",
        background: 'linear-gradient(135deg, #e8e8f0 0%, #b8b8d0 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text'
      }}
    >
      {children}
    </motion.h2>
  );

  const Subsection = ({ title, children, delay = 0 }: { title: string; children: React.ReactNode; delay?: number }) => (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay }}
      className="mb-8"
    >
      <h3 
        className="text-lg md:text-xl font-light mb-3"
        style={{ color: '#e8e8f0' }}
      >
        {title}
      </h3>
      <div 
        className="text-sm md:text-base font-light leading-relaxed space-y-3"
        style={{ color: '#9d9db8' }}
      >
        {children}
      </div>
    </motion.div>
  );

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

      {/* Floating particles */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-5">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 4 + 1,
              height: Math.random() * 4 + 1,
              background: `radial-gradient(circle, ${
                ['#818cf8', '#a78bfa', '#c084fc', '#e879f9'][i % 4]
              }, transparent)`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, Math.random() * -300 - 100, 0],
              x: [0, Math.random() * 100 - 50, 0],
              opacity: [0, 0.6, 0],
              scale: [0, 1.5, 0]
            }}
            transition={{
              duration: Math.random() * 25 + 20,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Glowing orbs */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`orb-${i}`}
          className="fixed rounded-full blur-3xl pointer-events-none"
          style={{
            width: 300 + Math.random() * 200,
            height: 300 + Math.random() * 200,
            background: `radial-gradient(circle, ${
              ['#818cf8', '#a78bfa', '#c084fc'][i % 3]
            }15, transparent)`,
            left: `${20 + i * 30}%`,
            top: `${10 + i * 25}%`,
            zIndex: -5
          }}
          animate={{
            x: [0, 60, -40, 0],
            y: [0, -50, 70, 0],
            scale: [1, 1.2, 0.9, 1],
            opacity: [0.2, 0.4, 0.3, 0.2]
          }}
          transition={{
            duration: 15 + i * 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Hero Section */}
      <motion.section 
        style={{ opacity }}
        className="relative pt-32 pb-20 px-6"
      >
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="text-center mb-16"
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
                Legal Information
              </p>
            </motion.div>
            
            <h1 
              className="text-4xl md:text-6xl lg:text-7xl font-extralight tracking-[-0.03em] leading-[1.1] mb-6"
              style={{ 
                fontFamily: "'Inter', -apple-system, sans-serif",
                background: 'linear-gradient(135deg, #e8e8f0 0%, #b8b8d0 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              Terms of Service
            </h1>

            <motion.div 
              className="mx-auto h-[1px] bg-gradient-to-r from-transparent via-indigo-500 to-transparent"
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: "200px", opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            />
          </motion.div>
        </div>
      </motion.section>

      {/* Terms of Service Content */}
      <section className="relative py-16 px-6 pb-32">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="backdrop-blur-xl bg-gradient-to-br from-white/[0.03] to-white/[0.01] border border-white/[0.08] rounded-2xl p-8 md:p-12"
          >
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-sm font-light mb-8"
              style={{ color: '#9d9db8' }}
            >
              Last updated: Feb 2026
            </motion.p>

            <Subsection title="1. Agreement to Terms" delay={0.1}>
              <p>
                By accessing and using the Forgestack Labs LLP website, you agree to be bound by these 
                Terms of Service and all applicable laws and regulations. If you do not agree with any of 
                these terms, you are prohibited from using this site.
              </p>
            </Subsection>

            <Subsection title="2. Services" delay={0.15}>
              <p>
                Forgestack Labs LLP provides product strategy, design, and engineering services. Specific 
                terms for individual projects will be outlined in separate service agreements or contracts.
              </p>
            </Subsection>

            <Subsection title="3. Intellectual Property" delay={0.2}>
              <p>
                The content on this website, including but not limited to text, graphics, logos, and images, 
                is the property of Forgestack Labs LLP and is protected by applicable intellectual property laws.
              </p>
              <p className="mt-3">
                Client projects and deliverables are subject to separate intellectual property terms as 
                defined in individual project agreements.
              </p>
            </Subsection>

            <Subsection title="4. User Submissions" delay={0.25}>
              <p>
                When you submit information through our contact form, you grant Forgestack Labs LLP the 
                right to use this information to respond to your inquiry and provide our services. We will 
                handle your information in accordance with our Privacy Policy.
              </p>
            </Subsection>

            <Subsection title="5. Disclaimer" delay={0.3}>
              <p>
                The information on this website is provided &quot;as is&quot; without any warranties, express or 
                implied. Forgestack Labs LLP does not warrant that the website will be error-free or 
                uninterrupted.
              </p>
            </Subsection>

            <Subsection title="6. Limitation of Liability" delay={0.35}>
              <p>
                Forgestack Labs LLP shall not be liable for any indirect, incidental, special, or 
                consequential damages arising out of or in connection with the use of this website.
              </p>
            </Subsection>

            <Subsection title="7. Governing Law" delay={0.4}>
              <p>
                These terms shall be governed by and construed in accordance with the laws of India. 
                Any disputes arising from these terms will be subject to the exclusive jurisdiction of 
                the courts in India.
              </p>
            </Subsection>

            <Subsection title="8. Changes to Terms" delay={0.45}>
              <p>
                We reserve the right to modify these terms at any time. Changes will be effective 
                immediately upon posting to this website. Your continued use of the website constitutes 
                acceptance of the modified terms.
              </p>
            </Subsection>

            <Subsection title="9. Contact" delay={0.5}>
              <p>For questions about these Terms of Service, please contact us at:</p>
              <motion.a
                href="mailto:forgestacklabs@forgestacklabs.com"
                className="inline-block mt-2 hover:opacity-70 transition-opacity"
                whileHover={{ x: 5 }}
                style={{
                  background: 'linear-gradient(90deg, #818cf8 0%, #c084fc 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                forgestacklabs@forgestacklabs.com
              </motion.a>
            </Subsection>
          </motion.div>
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