"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, ReactNode } from "react";

interface SectionTitleProps {
  children: string;
  number: string | number;
  delay?: number;
}

interface SubsectionProps {
  title?: string;
  children: ReactNode;
  delay?: number;
}

interface BulletListProps {
  items: string[];
}

export default function TermsOfServicePage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  const SectionTitle = ({ children, number, delay = 0 }: SectionTitleProps) => (
    <motion.h2
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay }}
      className="text-xl md:text-3xl font-light tracking-tight mb-6 mt-12"
      style={{
        fontFamily: "'Space Grotesk', 'Inter', -apple-system, sans-serif",
        background: 'linear-gradient(135deg, #e8e8f0 0%, #b8b8d0 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text'
      }}
    >
      {number}. {children}
    </motion.h2>
  );

  const Subsection = ({ title, children, delay = 0 }: SubsectionProps) => (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay }}
      className="mb-6"
    >
      {title && (
        <h3 
          className="text-base md:text-lg font-medium mb-3"
          style={{ color: '#e8e8f0' }}
        >
          {title}
        </h3>
      )}
      <div 
        className="text-sm md:text-base font-light leading-relaxed space-y-3"
        style={{ color: '#9d9db8' }}
      >
        {children}
      </div>
    </motion.div>
  );

  const BulletList = ({ items }: BulletListProps) => (
    <ul className="space-y-2 ml-4 mt-3">
      {items.map((item, idx) => (
        <li key={idx} className="flex items-start gap-2">
          <span className="text-indigo-400 mt-1">•</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
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
        className="relative pt-24 md:pt-32 pb-16 md:pb-20 px-4 md:px-6"
      >
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="text-center mb-12 md:mb-16"
          >
            <motion.div 
              className="inline-block relative mb-4 md:mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <div className="absolute inset-0 blur-xl bg-indigo-500/20 rounded-full" />
              <p 
                className="relative text-[9px] md:text-xs uppercase tracking-[0.3em] md:tracking-[0.5em] font-light px-4 md:px-6 py-1.5 md:py-2 rounded-full border border-indigo-500/30"
                style={{ color: '#9d9db8' }}
              >
                Legal Information
              </p>
            </motion.div>
            
            <h1 
              className="text-3xl md:text-5xl lg:text-7xl font-extralight tracking-[-0.03em] leading-[1.1] mb-4 md:mb-6 px-4"
              style={{ 
                fontFamily: "'Space Grotesk', 'Inter', -apple-system, sans-serif",
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
      <section className="relative py-8 md:py-16 px-4 md:px-6 pb-24 md:pb-32">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="backdrop-blur-xl bg-gradient-to-br from-white/[0.03] to-white/[0.01] border border-white/[0.08] rounded-xl md:rounded-2xl p-6 md:p-12"
          >
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xs md:text-sm font-light mb-8"
              style={{ color: '#9d9db8' }}
            >
              Last Updated: February 5, 2026
            </motion.p>

            {/* Section 1: Introduction */}
            <SectionTitle number={1} delay={0.1}>Introduction</SectionTitle>
            <Subsection delay={0.15}>
              <p>
                Welcome to Forgestack Labs LLP (&quot;Company&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;). These Terms of Service 
                (&quot;Terms&quot;) govern your access to and use of:
              </p>
              <BulletList items={[
                "Our website",
                "Our software products and platforms (\"Products\" or \"SaaS Products\")",
                "Our engineering, consulting, and development services (\"Services\")"
              ]} />
              <p className="mt-3">
                By accessing or using our website, Products, or Services, you agree to be bound by these 
                Terms and our Privacy Policy.
              </p>
              <p className="mt-3 font-medium" style={{ color: '#e8e8f0' }}>
                If you do not agree, you must immediately discontinue use of our website, Products, and Services.
              </p>
            </Subsection>

            {/* Section 2: Relationship with Other Agreements */}
            <SectionTitle number={2} delay={0.2}>Relationship with Other Agreements</SectionTitle>
            <Subsection delay={0.25}>
              <p>
                If you have executed a Master Service Agreement (&quot;MSA&quot;), Statement of Work (&quot;SOW&quot;), 
                Subscription Order, or Data Processing Addendum (&quot;DPA&quot;) with Forgestack Labs LLP:
              </p>
              <BulletList items={[
                "Those documents shall govern your relationship with us.",
                "In the event of any conflict, the order of precedence shall be: MSA → DPA → SOW / Subscription Order → These Terms."
              ]} />
              <p className="mt-3">
                These Terms primarily govern website access and self-service SaaS usage where no separate 
                MSA is executed.
              </p>
            </Subsection>

            {/* Section 3: Definitions */}
            <SectionTitle number={3} delay={0.3}>Definitions</SectionTitle>
            <Subsection delay={0.35}>
              <div className="space-y-3">
                <p>
                  <span className="font-medium" style={{ color: '#e8e8f0' }}>&quot;Client&quot;</span> means any 
                  individual or entity engaging Forgestack Labs LLP for Services under an MSA or SOW.
                </p>
                <p>
                  <span className="font-medium" style={{ color: '#e8e8f0' }}>&quot;User&quot;</span> means any 
                  individual accessing the website or using the SaaS Products.
                </p>
                <p>
                  <span className="font-medium" style={{ color: '#e8e8f0' }}>&quot;Deliverables&quot;</span> means 
                  specific outputs created for a Client under a Service engagement.
                </p>
                <p>
                  <span className="font-medium" style={{ color: '#e8e8f0' }}>&quot;SaaS Product&quot;</span> means 
                  Forgestack Labs&apos; proprietary subscription-based software, including the Fuel Station 
                  Management System.
                </p>
              </div>
            </Subsection>

            {/* Section 4: Use of Products & Services */}
            <SectionTitle number={4} delay={0.4}>Use of Products & Services</SectionTitle>
            
            <Subsection title="4.1 Eligibility" delay={0.42}>
              <p>
                You must be at least 18 years of age and legally capable of entering into a binding 
                contract under Indian law.
              </p>
            </Subsection>

            <Subsection title="4.2 Account Security" delay={0.44}>
              <p>
                You are responsible for maintaining the confidentiality of your login credentials and for 
                all activities conducted through your account. You must notify us immediately of any 
                unauthorized access.
              </p>
            </Subsection>

            <Subsection title="4.3 Prohibited Conduct" delay={0.46}>
              <p>You agree not to:</p>
              <BulletList items={[
                "Reverse engineer, decompile, or attempt to extract source code from the SaaS Products",
                "Use the Products or Services for unlawful purposes",
                "Interfere with platform security or performance",
                "Resell, sublicense, or commercially exploit the SaaS Products without written authorization"
              ]} />
            </Subsection>

            {/* Section 5: Client Services */}
            <SectionTitle number={5} delay={0.5}>Client Services (Custom Development & Consulting)</SectionTitle>
            
            <Subsection title="5.1 Scope of Work" delay={0.52}>
              <p>
                All Client engagements are governed by a separate MSA and/or SOW, which define scope, 
                timelines, pricing, and deliverables.
              </p>
            </Subsection>

            <Subsection title="5.2 Intellectual Property – Client Work" delay={0.54}>
              <p>Unless otherwise stated in writing:</p>
              <BulletList items={[
                "Upon full payment, the Client owns the specific Deliverables created for them.",
                "Forgestack Labs LLP retains ownership of all Background IP, including tools, libraries, frameworks, and pre-existing code.",
                "The Client is granted a perpetual, non-exclusive license to use such Background IP solely as embedded within the Deliverables."
              ]} />
            </Subsection>

            {/* Section 6: SaaS Products */}
            <SectionTitle number={6} delay={0.6}>SaaS Products (Subscription Use)</SectionTitle>
            
            <Subsection title="6.1 License Grant" delay={0.62}>
              <p>
                We grant you a limited, non-exclusive, non-transferable, revocable license to use the 
                SaaS Products solely for internal business purposes.
              </p>
            </Subsection>

            <Subsection title="6.2 Data Ownership & Processing" delay={0.64}>
              <p>
                You retain ownership of all data you upload or generate within the SaaS Products 
                (&quot;Customer Data&quot;).
              </p>
              <p className="mt-3">
                You grant Forgestack Labs LLP the right to process Customer Data solely to provide and 
                maintain the Services.
              </p>
              <p className="mt-3">
                Data processing obligations are governed by our DPA and Privacy Policy.
              </p>
            </Subsection>

            {/* Section 7: Fees & Payments */}
            <SectionTitle number={7} delay={0.7}>Fees & Payments</SectionTitle>
            <Subsection delay={0.72}>
              <p>
                <span className="font-medium" style={{ color: '#e8e8f0' }}>Client Services:</span> Fees 
                are payable as specified in the applicable SOW. Late payments may attract interest.
              </p>
              <p className="mt-3">
                <span className="font-medium" style={{ color: '#e8e8f0' }}>SaaS Subscriptions:</span> Fees 
                are billed in advance (monthly or annually). Non-payment may result in suspension or 
                termination.
              </p>
              <p className="mt-3">
                All fees are exclusive of applicable taxes, including GST.
              </p>
            </Subsection>

            {/* Section 8: Confidentiality */}
            <SectionTitle number={8} delay={0.75}>Confidentiality</SectionTitle>
            <Subsection delay={0.77}>
              <p>
                Each party agrees to maintain the confidentiality of non-public business, technical, or 
                commercial information disclosed in connection with the Products or Services, except where 
                disclosure is required by law.
              </p>
            </Subsection>

            {/* Section 9: Warranties & Disclaimers */}
            <SectionTitle number={9} delay={0.8}>Warranties & Disclaimers</SectionTitle>
            <Subsection delay={0.82}>
              <BulletList items={[
                "SaaS Products are provided on an \"AS IS\" and \"AS AVAILABLE\" basis.",
                "We do not warrant uninterrupted or error-free operation.",
                "No warranties are provided except as expressly stated in writing."
              ]} />
            </Subsection>

            {/* Section 10: Limitation of Liability */}
            <SectionTitle number={10} delay={0.85}>Limitation of Liability</SectionTitle>
            <Subsection delay={0.87}>
              <p>To the maximum extent permitted under Indian law:</p>
              <BulletList items={[
                "Forgestack Labs LLP shall not be liable for indirect, incidental, special, or consequential damages, including loss of data, revenue, or profits.",
                "Our total aggregate liability arising from these Terms shall not exceed the fees paid by you in the three (3) months preceding the claim.",
                "Liability terms under an executed MSA shall prevail where applicable."
              ]} />
            </Subsection>

            {/* Section 11: Termination */}
            <SectionTitle number={11} delay={0.9}>Termination</SectionTitle>
            <Subsection delay={0.92}>
              <p>
                <span className="font-medium" style={{ color: '#e8e8f0' }}>By You:</span> You may 
                discontinue use of the Products at any time. Subscription cancellations take effect at the 
                end of the billing cycle.
              </p>
              <p className="mt-3">
                <span className="font-medium" style={{ color: '#e8e8f0' }}>By Us:</span> We may suspend 
                or terminate access for breach, non-payment, or misuse.
              </p>
              <p className="mt-3">
                Termination does not affect accrued payment obligations.
              </p>
            </Subsection>

            {/* Section 12: Privacy & Data Protection */}
            <SectionTitle number={12} delay={0.95}>Privacy & Data Protection</SectionTitle>
            <Subsection delay={0.97}>
              <p>
                Your use of the Products and Services is subject to our Privacy Policy and, where 
                applicable, our Data Processing Addendum.
              </p>
            </Subsection>

            {/* Section 13: Governing Law & Jurisdiction */}
            <SectionTitle number={13} delay={1.0}>Governing Law & Jurisdiction</SectionTitle>
            <Subsection delay={1.02}>
              <p>
                These Terms are governed by the laws of India. Courts located in [Insert City, State, India] 
                shall have exclusive jurisdiction.
              </p>
            </Subsection>

            {/* Section 14: Contact Information */}
            <SectionTitle number={14} delay={1.05}>Contact Information</SectionTitle>
            <Subsection delay={1.07}>
              <p className="font-medium" style={{ color: '#e8e8f0' }}>Forgestack Labs LLP</p>
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
                Email: forgestacklabs@forgestacklabs.com
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