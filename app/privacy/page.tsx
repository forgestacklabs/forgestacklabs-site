"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function PrivacyPolicyPage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  const SectionTitle = ({ children, delay = 0, number }: { children: string; delay?: number; number: string }) => (
    <motion.h2
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay }}
      className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light tracking-tight mb-4 sm:mb-6"
      style={{
        fontFamily: "'Inter', -apple-system, sans-serif",
        background: 'linear-gradient(135deg, #e8e8f0 0%, #b8b8d0 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text'
      }}
    >
      {number}. {children}
    </motion.h2>
  );

  const Subsection = ({ title, children, delay = 0 }: { title: string; children: React.ReactNode; delay?: number }) => (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay }}
      className="mb-6 sm:mb-8"
    >
      <h3 
        className="text-base sm:text-lg md:text-xl font-light mb-2 sm:mb-3"
        style={{ color: '#e8e8f0' }}
      >
        {title}
      </h3>
      <div 
        className="text-xs sm:text-sm md:text-base font-light leading-relaxed space-y-2 sm:space-y-3"
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

      {/* Floating particles - reduced on mobile */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-5">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full hidden sm:block"
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

      {/* Glowing orbs - reduced on mobile */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`orb-${i}`}
          className="fixed rounded-full blur-3xl pointer-events-none hidden md:block"
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
        className="relative pt-24 sm:pt-32 pb-12 sm:pb-20 px-4 sm:px-6"
      >
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="text-center mb-12 sm:mb-16"
          >
            <motion.div 
              className="inline-block relative mb-4 sm:mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <div className="absolute inset-0 blur-xl bg-indigo-500/20 rounded-full" />
              <p 
                className="relative text-[9px] sm:text-[10px] md:text-xs uppercase tracking-[0.3em] sm:tracking-[0.5em] font-light px-4 sm:px-6 py-2 rounded-full border border-indigo-500/30"
                style={{ color: '#9d9db8' }}
              >
                Legal Information
              </p>
            </motion.div>
            
            <h1 
              className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extralight tracking-[-0.03em] leading-[1.1] mb-4 sm:mb-6 px-4"
              style={{ 
                fontFamily: "'Inter', -apple-system, sans-serif",
                background: 'linear-gradient(135deg, #e8e8f0 0%, #b8b8d0 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              Privacy Policy
            </h1>

            <motion.div 
              className="mx-auto h-[1px] bg-gradient-to-r from-transparent via-indigo-500 to-transparent"
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: "150px", opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            />
          </motion.div>
        </div>
      </motion.section>

      {/* Privacy Policy Content */}
      <section className="relative py-8 sm:py-16 px-4 sm:px-6 pb-16 sm:pb-32">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="backdrop-blur-xl bg-gradient-to-br from-white/[0.03] to-white/[0.01] border border-white/[0.08] rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-12"
          >
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xs sm:text-sm font-light mb-6 sm:mb-8"
              style={{ color: '#9d9db8' }}
            >
              Effective Date: February 5, 2026
            </motion.p>

            {/* Introduction */}
            <SectionTitle number="1" delay={0.1}>Introduction</SectionTitle>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mb-8 sm:mb-12 text-xs sm:text-sm md:text-base font-light leading-relaxed space-y-3 sm:space-y-4"
              style={{ color: '#9d9db8' }}
            >
              <p>
                Forgestack Labs LLP (&quot;Forgestack Labs&quot;, &quot;Company&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is a product-first 
                technology company incorporated in India. We are committed to protecting the privacy, 
                confidentiality, and security of personal and business data entrusted to us.
              </p>
              <p>This Privacy Policy governs the collection, use, storage, and disclosure of information in connection with:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Our Website:</strong> www.forgestacklabs.com</li>
                <li><strong>Our Products &amp; Platforms:</strong> Including proprietary SaaS applications and software products</li>
                <li><strong>Our Services:</strong> Custom software development, consulting, and related professional services</li>
              </ul>
              <p>
                By accessing or using our website, products, or services, you agree to the data practices described 
                in this Privacy Policy, in accordance with the Digital Personal Data Protection Act, 2023 (DPDPA) 
                and the Information Technology Act, 2000, along with applicable rules and regulations thereunder.
              </p>
            </motion.div>

            {/* Information We Collect */}
            <SectionTitle number="2" delay={0.15}>Information We Collect</SectionTitle>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mb-8 sm:mb-12"
            >
              <p className="text-xs sm:text-sm md:text-base font-light leading-relaxed mb-4 sm:mb-6" style={{ color: '#9d9db8' }}>
                We collect information based on the nature of your interaction with Forgestack Labs.
              </p>

              <Subsection title="A. Website Visitors & Prospective Clients" delay={0.2}>
                <ul className="list-disc list-inside space-y-2 ml-2 sm:ml-4">
                  <li><strong>Identity &amp; Contact Information:</strong> Name, email address, phone number, company name, and other details submitted through contact forms or inquiries.</li>
                  <li><strong>Project &amp; Business Information:</strong> Information relating to project requirements, budgets, timelines, or service requests.</li>
                  <li><strong>Technical Information:</strong> IP address, browser type, device identifiers, and usage metadata collected through cookies and analytics tools for security and performance optimization.</li>
                </ul>
              </Subsection>

              <Subsection title="B. Users of Our Products (SaaS / Software Platforms)" delay={0.25}>
                <ul className="list-disc list-inside space-y-2 ml-2 sm:ml-4">
                  <li><strong>Account Information:</strong> Usernames, encrypted passwords, authentication tokens, and role-based access credentials.</li>
                  <li><strong>Operational &amp; Business Data:</strong> Data entered into our platforms as part of normal usage, including inventory records, staff details, transaction logs, or operational metrics.</li>
                </ul>
                <div className="mt-4 p-3 sm:p-4 bg-indigo-500/5 border border-indigo-500/20 rounded-lg">
                  <p className="text-xs sm:text-sm font-light" style={{ color: '#c8c8d8' }}>
                    <strong>Important:</strong> For operational and business data processed through our SaaS platforms, 
                    Forgestack Labs acts strictly as a Data Processor. Ownership and control of such data remain with 
                    the client. We process this data solely to provide agreed-upon software functionality.
                  </p>
                </div>
                <ul className="list-disc list-inside space-y-2 ml-2 sm:ml-4 mt-4">
                  <li><strong>Usage &amp; System Logs:</strong> Activity timestamps, feature usage patterns, and diagnostic logs used for system monitoring, performance improvement, and issue resolution.</li>
                </ul>
              </Subsection>
            </motion.div>

            {/* Purpose of Data Processing */}
            <SectionTitle number="3" delay={0.3}>Purpose of Data Processing</SectionTitle>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mb-8 sm:mb-12 text-xs sm:text-sm md:text-base font-light leading-relaxed space-y-3 sm:space-y-4"
              style={{ color: '#9d9db8' }}
            >
              <p>
                Forgestack Labs does not sell or commercially exploit personal or business data. Information is 
                processed strictly for the following lawful purposes:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-2 sm:ml-4">
                <li><strong>Product Operation:</strong> User authentication, session management, and delivery of core software features.</li>
                <li><strong>Service Fulfilment:</strong> Execution of contractual obligations, including development, deployment, and maintenance of software solutions.</li>
                <li><strong>Security &amp; Risk Management:</strong> Fraud detection, access control, monitoring, and safeguarding platform integrity.</li>
                <li><strong>Communication &amp; Support:</strong> Account notifications, service updates, billing communications, and customer support.</li>
                <li><strong>Legal &amp; Regulatory Compliance:</strong> Compliance with applicable Indian laws, tax regulations, audits, and lawful governmental requests.</li>
              </ul>
            </motion.div>

            {/* Data Security Measures */}
            <SectionTitle number="4" delay={0.35}>Data Security Measures</SectionTitle>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mb-8 sm:mb-12 text-xs sm:text-sm md:text-base font-light leading-relaxed space-y-3 sm:space-y-4"
              style={{ color: '#9d9db8' }}
            >
              <p>
                Security is foundational to our operations. We implement reasonable and industry-accepted safeguards 
                in line with the IT (Reasonable Security Practices and Procedures) Rules, 2011.
              </p>
              <p>Our security framework includes:</p>
              <ul className="list-disc list-inside space-y-2 ml-2 sm:ml-4">
                <li><strong>Encryption in Transit:</strong> All data exchanged between user devices and our servers is secured using SSL/TLS encryption.</li>
                <li><strong>Encryption at Rest:</strong> Sensitive information, including credentials and databases, is encrypted within our storage systems.</li>
                <li><strong>Access Controls:</strong> Production data access is strictly limited to authorized personnel and protected by role-based permissions and Multi-Factor Authentication (MFA).</li>
                <li><strong>Periodic Reviews:</strong> Regular internal assessments of data handling practices to identify and mitigate potential risks.</li>
              </ul>
            </motion.div>

            {/* Data Sharing & Third-Party Disclosures */}
            <SectionTitle number="5" delay={0.4}>Data Sharing &amp; Third-Party Disclosures</SectionTitle>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mb-8 sm:mb-12 text-xs sm:text-sm md:text-base font-light leading-relaxed space-y-3 sm:space-y-4"
              style={{ color: '#9d9db8' }}
            >
              <p>We disclose information only where necessary to operate our services securely and efficiently.</p>
              <ul className="list-disc list-inside space-y-2 ml-2 sm:ml-4">
                <li><strong>Infrastructure &amp; Hosting Providers:</strong> Trusted cloud service providers (such as AWS, Google Cloud, or Vercel) for hosting and infrastructure management.</li>
                <li><strong>Analytics Services:</strong> Limited use of analytics tools (e.g., Google Analytics) to evaluate anonymized usage trends.</li>
                <li><strong>Legal Obligations:</strong> Disclosure when required under applicable laws, court orders, or requests from authorized government agencies.</li>
              </ul>
              <p className="mt-4 font-medium" style={{ color: '#e8e8f0' }}>
                We do not sell, rent, or share personal or business data with advertisers or unauthorized third parties.
              </p>
            </motion.div>

            {/* Data Retention */}
            <SectionTitle number="6" delay={0.45}>Data Retention</SectionTitle>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mb-8 sm:mb-12 text-xs sm:text-sm md:text-base font-light leading-relaxed space-y-3 sm:space-y-4"
              style={{ color: '#9d9db8' }}
            >
              <ul className="list-disc list-inside space-y-2 ml-2 sm:ml-4">
                <li><strong>Client &amp; Contractual Data:</strong> Retained for the duration of the engagement and thereafter as required by applicable tax, accounting, or legal obligations (generally 5–8 years).</li>
                <li><strong>Product &amp; Operational Data:</strong> Retained while the account remains active. Upon termination, clients may request a data export. Operational data will be deleted from active systems within 60 days, subject to backup retention and legal requirements.</li>
              </ul>
            </motion.div>

            {/* Your Rights Under DPDPA */}
            <SectionTitle number="7" delay={0.5}>Your Rights Under DPDPA, 2023</SectionTitle>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mb-8 sm:mb-12 text-xs sm:text-sm md:text-base font-light leading-relaxed space-y-3 sm:space-y-4"
              style={{ color: '#9d9db8' }}
            >
              <p>As a Data Principal, you have the right to:</p>
              <ul className="list-disc list-inside space-y-2 ml-2 sm:ml-4">
                <li><strong>Access:</strong> Request information about personal data processed by us.</li>
                <li><strong>Correction:</strong> Request correction of inaccurate or incomplete personal data.</li>
                <li><strong>Erasure:</strong> Request deletion of personal data, subject to statutory retention obligations.</li>
                <li><strong>Grievance Redressal:</strong> Raise concerns regarding data protection or privacy practices.</li>
              </ul>
              <p className="mt-4">Requests may be made using the contact details provided below.</p>
            </motion.div>

            {/* Cookies & Tracking Technologies */}
            <SectionTitle number="8" delay={0.55}>Cookies &amp; Tracking Technologies</SectionTitle>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mb-8 sm:mb-12 text-xs sm:text-sm md:text-base font-light leading-relaxed space-y-3 sm:space-y-4"
              style={{ color: '#9d9db8' }}
            >
              <p>We use:</p>
              <ul className="list-disc list-inside space-y-2 ml-2 sm:ml-4">
                <li><strong>Essential Cookies:</strong> Required for authentication, session management, and security.</li>
                <li><strong>Non-Essential Cookies:</strong> Analytics cookies, which can be managed through browser settings.</li>
              </ul>
              <p className="mt-4">Disabling certain cookies may affect platform functionality.</p>
            </motion.div>

            {/* Contact Information */}
            <SectionTitle number="9" delay={0.6}>Contact Information &amp; Grievance Officer</SectionTitle>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-xs sm:text-sm md:text-base font-light leading-relaxed space-y-3 sm:space-y-4"
              style={{ color: '#9d9db8' }}
            >
              <p>
                For questions, concerns, or requests relating to this Privacy Policy or your personal data, please contact:
              </p>
              <div className="mt-4 sm:mt-6 p-4 sm:p-6 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 border border-indigo-500/20 rounded-lg sm:rounded-xl">
                <p className="font-medium mb-2" style={{ color: '#e8e8f0' }}>Grievance Officer / Privacy Officer</p>
                <p className="mb-1">Forgestack Labs LLP</p>
                <motion.a
                  href="mailto:forgestacklabs@forgestacklabs.com"
                  className="inline-block hover:opacity-70 transition-opacity break-all"
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
                <p className="mt-2">Address: Mangaluru, Karnataka, India</p>
              </div>
            </motion.div>
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