"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function AboutPage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3], [1, 0.95]);

  return (
    <div ref={containerRef} className="relative min-h-screen bg-[#0a0a0f]">
      {/* Enhanced Philosophy Section - Matching Home Page Style */}
      <motion.section 
        style={{ opacity, scale }}
        className="relative py-32 px-6"
      >
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <motion.div 
              className="inline-block mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <div className="relative">
                <div className="absolute inset-0 blur-xl bg-indigo-500/10 rounded-full" />
                <p className="relative text-[10px] md:text-xs uppercase tracking-[0.5em] font-light px-6 py-2 rounded-full border border-indigo-500/30" style={{ color: '#9d9db8' }}>
                  Our Philosophy
                </p>
              </div>
            </motion.div>
            
            <motion.h2 
              className="text-3xl md:text-5xl lg:text-6xl font-extralight tracking-[-0.02em] leading-[1.1] mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{ 
                fontFamily: "'Inter', -apple-system, sans-serif",
                background: 'linear-gradient(135deg, #e8e8f0 0%, #b8b8d0 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              A founder-led company devoted to{' '}
              <motion.span
                style={{ 
                  display: 'inline-block',
                  background: 'linear-gradient(135deg, #818cf8 0%, #a78bfa 50%, #c084fc 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                enduring systems
              </motion.span>
            </motion.h2>
            
            <motion.p 
              className="max-w-2xl mx-auto text-base md:text-lg font-light leading-relaxed"
              style={{ color: '#9d9db8' }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.6 }}
                style={{ display: 'inline-block' }}
              >
                FORGESTACK LABS
              </motion.span>
              {' '}
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7, duration: 0.6 }}
              >
                exists to build quietly and with intention. We are product-first,
                focused on systems that hold up under time and complexity. The work is deliberate,
                measured, and guided by long-term vision.
              </motion.span>
            </motion.p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Product-obsessed",
                description: "The founders remain close to the craft, obsessed with the invisible details that make software feel inevitable.",
                icon: "◆",
                gradient: "from-indigo-500/10 to-indigo-500/5",
                borderGradient: "from-indigo-500/30 to-transparent",
                accentColor: '#818cf8'
              },
              {
                title: "Real-world systems",
                description: "Experience is grounded in building systems that must operate with calm precision in real environments.",
                icon: "◇",
                gradient: "from-purple-500/10 to-purple-500/5",
                borderGradient: "from-purple-500/30 to-transparent",
                accentColor: '#a78bfa'
              },
              {
                title: "Long-term vision",
                description: "We build with patience and depth, prioritizing decisions that compound for years.",
                icon: "◈",
                gradient: "from-blue-500/10 to-blue-500/5",
                borderGradient: "from-blue-500/30 to-transparent",
                accentColor: '#60a5fa'
              }
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: index * 0.15 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="group relative"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-0 group-hover:opacity-100 transition-all duration-700 rounded-2xl blur-2xl`} />
                
                <div className="relative backdrop-blur-xl bg-gradient-to-br from-white/[0.03] to-white/[0.01] border border-white/[0.08] hover:border-white/[0.15] transition-all duration-700 rounded-2xl p-8 h-full">
                  <div className={`absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r ${value.borderGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
                  
                  <div className="flex items-start gap-4 mb-6">
                    <motion.span 
                      className="text-3xl opacity-40 group-hover:opacity-70 transition-opacity" 
                      style={{ color: value.accentColor }}
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
                      {value.icon}
                    </motion.span>
                    <motion.h3 
                      className="text-xl md:text-2xl font-light tracking-tight"
                      style={{ 
                        color: '#e8e8f0',
                        background: 'linear-gradient(135deg, #e8e8f0 0%, #b8b8d0 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text'
                      }}
                    >
                      {value.title}
                    </motion.h3>
                  </div>
                  
                  <p 
                    className="text-sm md:text-base font-light leading-relaxed"
                    style={{ color: '#9d9db8' }}
                  >
                    {value.description}
                  </p>
                  
                  <div className="absolute bottom-0 right-0 w-16 h-16 border-r border-b border-white/5 group-hover:border-white/10 transition-colors duration-500 rounded-br-2xl" />
                </div>
              </motion.div>
            ))}
          </div>
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

      {/* Floating particles */}
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

      <section className="relative py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <motion.h2 
              className="text-3xl md:text-5xl font-extralight tracking-[-0.02em] mb-4"
              style={{ color: '#e8e8f0' }}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              About Forgestack Labs LLP
            </motion.h2>
            <motion.div 
              className="w-24 h-[1px] bg-gradient-to-r from-transparent via-indigo-500 to-transparent mx-auto"
              initial={{ width: 0, opacity: 0 }}
              whileInView={{ width: 96, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto mb-20"
          >
            <motion.div 
              className="backdrop-blur-xl bg-gradient-to-br from-white/[0.03] to-white/[0.01] border border-white/[0.08] rounded-2xl p-8 md:p-12"
              whileHover={{ 
                borderColor: 'rgba(255, 255, 255, 0.12)',
                transition: { duration: 0.3 }
              }}
            >
              <div className="space-y-6 text-center">
                <motion.p 
                  className="text-sm md:text-base font-light" 
                  style={{ color: '#9d9db8' }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  Incorporated On: <span style={{ color: '#e8e8f0' }}>14 January 2026</span>
                </motion.p>
                <motion.p 
                  className="text-sm md:text-base font-light" 
                  style={{ color: '#9d9db8' }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  Company Type: <span style={{ color: '#e8e8f0' }}>Limited Liability Partnership (LLP)</span>
                </motion.p>
                <motion.div 
                  className="pt-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  <p className="text-sm font-light mb-3" style={{ color: '#9d9db8' }}>Founders:</p>
                  <div className="flex flex-wrap justify-center gap-4">
                    {['Sriharsha', 'Pulavarson', 'Hardhik'].map((founder, i) => (
                      <motion.span 
                        key={founder}
                        className="px-4 py-2 rounded-full border border-indigo-500/30 text-sm font-light"
                        style={{ color: '#e8e8f0' }}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 + i * 0.1 }}
                        whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                      >
                        {founder}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.h3 
              className="text-2xl md:text-4xl font-extralight tracking-[-0.02em] mb-4"
              style={{ color: '#e8e8f0' }}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Leadership & Team
            </motion.h3>
            <motion.div 
              className="w-20 h-[1px] bg-gradient-to-r from-transparent via-purple-500 to-transparent mx-auto"
              initial={{ width: 0, opacity: 0 }}
              whileInView={{ width: 80, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            />
          </motion.div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Chief Executive Officer",
                name: "Sriharsha",
                education: [
                  "IIT Roorkee – Professional Certificate in Product Management",
                  "Bachelor of Engineering in Information Science – Canara Engineering College"
                ],
                experience: [
                  "Founder – Deepak Fuel Solutions (Doorstep Fuel Delivery Startup)",
                  "Site Supervisor – Perfect Logistics",
                  "Decommissioning of Shell fuel stations in Chennai and Gujarat"
                ],
                gradient: "from-indigo-500/10 to-indigo-500/5",
                borderGradient: "from-indigo-500/30 to-transparent"
              },
              {
                title: "Chief Operating Officer",
                name: "Pulavarson",
                education: [
                  "Master's Degree in Computer Science – Srinivas University"
                ],
                experience: [
                  "Frontend Developer at Prince Capital (8 months)"
                ],
                skills: [
                  "React",
                  "Next.js",
                  "JavaScript",
                  "HTML",
                  "CSS",
                  "Tailwind CSS"
                ],
                gradient: "from-purple-500/10 to-purple-500/5",
                borderGradient: "from-purple-500/30 to-transparent"
              },
              {
                title: "Chief Technology Officer",
                name: "Hardhik",
                education: [
                  "Bachelor of Engineering in Computer Science – St. Joseph Engineering College"
                ],
                experience: [
                  "Business Development Executive – Intrainz",
                  "Relationship Manager – NoBroker"
                ],
                skills: [
                  "JavaScript",
                  "React",
                  "Node.js",
                  "Java",
                  "PostgreSQL"
                ],
                tools: [
                  "Postman",
                  "Insomnia"
                ],
                gradient: "from-blue-500/10 to-blue-500/5",
                borderGradient: "from-blue-500/30 to-transparent"
              }
            ].map((leader, index) => (
              <motion.div
                key={leader.name}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group relative"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${leader.gradient} opacity-0 group-hover:opacity-100 transition-all duration-700 rounded-2xl blur-2xl`} />
                
                <div className="relative backdrop-blur-xl bg-gradient-to-br from-white/[0.03] to-white/[0.01] border border-white/[0.08] hover:border-white/[0.15] transition-all duration-700 rounded-2xl p-8 h-full">
                  <div className={`absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r ${leader.borderGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
                  
                  <div className="mb-6">
                    <p className="text-xs uppercase tracking-wider mb-2" style={{ color: '#9d9db8' }}>
                      {leader.title}
                    </p>
                    <h3 
                      className="text-2xl md:text-3xl font-light tracking-tight"
                      style={{ color: '#e8e8f0' }}
                    >
                      {leader.name}
                    </h3>
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <p className="text-xs uppercase tracking-wider mb-3" style={{ color: '#818cf8' }}>
                        Education
                      </p>
                      <div className="space-y-2">
                        {leader.education.map((item, i) => (
                          <p 
                            key={i}
                            className="text-sm font-light leading-relaxed"
                            style={{ color: '#9d9db8' }}
                          >
                            {item}
                          </p>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <p className="text-xs uppercase tracking-wider mb-3" style={{ color: '#818cf8' }}>
                        Experience
                      </p>
                      <div className="space-y-2">
                        {leader.experience.map((item, i) => (
                          <p 
                            key={i}
                            className="text-sm font-light leading-relaxed"
                            style={{ color: '#9d9db8' }}
                          >
                            {item}
                          </p>
                        ))}
                      </div>
                    </div>
                    
                    {leader.skills && (
                      <div>
                        <p className="text-xs uppercase tracking-wider mb-3" style={{ color: '#818cf8' }}>
                          Technical Skills
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {leader.skills.map((skill, i) => (
                            <span 
                              key={i}
                              className="px-3 py-1 rounded-full border border-indigo-500/20 text-xs font-light"
                              style={{ color: '#c8c8d8' }}
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    {leader.tools && (
                      <div>
                        <p className="text-xs uppercase tracking-wider mb-3" style={{ color: '#818cf8' }}>
                          Tools
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {leader.tools.map((tool, i) => (
                            <span 
                              key={i}
                              className="px-3 py-1 rounded-full border border-indigo-500/20 text-xs font-light"
                              style={{ color: '#c8c8d8' }}
                            >
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                  
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