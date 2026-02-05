"use client";

import { useState } from "react";

const initialState = {
  name: "",
  email: "",
  phone: "",
  organization: "",
  message: ""
};

export default function ContactPage() {
  const [formData, setFormData] = useState(initialState);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("submitting");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, source: "Website" })
      });

      if (!response.ok) {
        throw new Error("Submission failed");
      }

      setStatus("success");
      setFormData(initialState);
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <div className="relative min-h-screen bg-[#0a0a0f]">
      {/* Animated mesh gradient background - matching homepage */}
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

      {/* Floating orbs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-5">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-float"
            style={{
              width: Math.random() * 4 + 2,
              height: Math.random() * 4 + 2,
              background: `radial-gradient(circle, ${
                ['#818cf8', '#a78bfa', '#c084fc'][i % 3]
              }40, transparent)`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 20 + 15}s`
            }}
          />
        ))}
      </div>

      <section className="relative mx-auto flex w-full max-w-4xl flex-col gap-10 px-6 py-20 md:py-28">
        <div className="text-center">
          <div className="inline-block relative mb-6">
            <div className="absolute inset-0 blur-xl bg-indigo-500/20 rounded-full" />
            <p className="relative text-[10px] md:text-xs uppercase tracking-[0.5em] font-light px-6 py-2 rounded-full border border-indigo-500/30" style={{ color: '#9d9db8' }}>
              Contact
            </p>
          </div>
          
          <h1 className="text-3xl md:text-5xl font-extralight tracking-[-0.02em] leading-tight mb-6" style={{ 
            fontFamily: "'Inter', -apple-system, sans-serif",
            background: 'linear-gradient(135deg, #e8e8f0 0%, #b8b8d0 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            A quiet channel for thoughtful messages.
          </h1>
          
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-indigo-500 to-transparent mx-auto mb-6" />
          
          <p className="text-base md:text-lg font-light leading-relaxed" style={{ color: '#9d9db8' }}>
            Share what you feel is essential. Messages are reviewed with care and intention.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="relative group">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-all duration-700 rounded-2xl blur-2xl" />
          
          <div className="relative backdrop-blur-xl bg-gradient-to-br from-white/[0.03] to-white/[0.01] border border-white/[0.08] hover:border-white/[0.15] transition-all duration-700 rounded-2xl p-8 space-y-6">
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-indigo-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-[0.3em] font-light" style={{ color: '#9d9db8' }} htmlFor="name">
                  Name *
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-white/[0.08] bg-white/[0.02] px-4 py-3 text-sm font-light transition-all duration-300 focus:border-indigo-500/50 focus:bg-white/[0.04] focus:outline-none"
                  style={{ color: '#e8e8f0' }}
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-[0.3em] font-light" style={{ color: '#9d9db8' }} htmlFor="email">
                  Email *
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-white/[0.08] bg-white/[0.02] px-4 py-3 text-sm font-light transition-all duration-300 focus:border-indigo-500/50 focus:bg-white/[0.04] focus:outline-none"
                  style={{ color: '#e8e8f0' }}
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-[0.3em] font-light" style={{ color: '#9d9db8' }} htmlFor="phone">
                  Phone
                </label>
                <input
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-white/[0.08] bg-white/[0.02] px-4 py-3 text-sm font-light transition-all duration-300 focus:border-indigo-500/50 focus:bg-white/[0.04] focus:outline-none"
                  style={{ color: '#e8e8f0' }}
                />
              </div>
              <div className="space-y-2">
                <label
                  className="text-xs uppercase tracking-[0.3em] font-light" style={{ color: '#9d9db8' }}
                  htmlFor="organization"
                >
                  Organization
                </label>
                <input
                  id="organization"
                  name="organization"
                  value={formData.organization}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-white/[0.08] bg-white/[0.02] px-4 py-3 text-sm font-light transition-all duration-300 focus:border-indigo-500/50 focus:bg-white/[0.04] focus:outline-none"
                  style={{ color: '#e8e8f0' }}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs uppercase tracking-[0.3em] font-light" style={{ color: '#9d9db8' }} htmlFor="message">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className="w-full resize-none rounded-lg border border-white/[0.08] bg-white/[0.02] px-4 py-3 text-sm font-light transition-all duration-300 focus:border-indigo-500/50 focus:bg-white/[0.04] focus:outline-none"
                style={{ color: '#e8e8f0' }}
              />
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4 pt-4">
              <button
                type="submit"
                disabled={status === "submitting"}
                className="inline-flex items-center gap-4 text-xs uppercase tracking-[0.4em] font-light transition-all duration-500 px-8 py-4 rounded-full border border-indigo-500/30 hover:border-indigo-400/60 hover:bg-indigo-500/10 disabled:cursor-not-allowed disabled:opacity-40"
                style={{ color: '#c8c8d8' }}
              >
                <span>{status === "submitting" ? "Sending" : "Submit"}</span>
                {status !== "submitting" && (
                  <span className="w-12 h-[1px] bg-gradient-to-r from-indigo-500 to-purple-500" />
                )}
              </button>
              {status === "success" && (
                <p className="text-xs uppercase tracking-[0.3em] font-light" style={{ color: '#9d9db8' }}>
                  Thank you. Messages are reviewed periodically.
                </p>
              )}
              {status === "error" && (
                <p className="text-xs uppercase tracking-[0.3em] font-light text-red-400">
                  Something went wrong. Please try again.
                </p>
              )}
            </div>

            <div className="absolute bottom-0 right-0 w-16 h-16 border-r border-b border-white/5 group-hover:border-white/10 transition-colors duration-500 rounded-br-2xl" />
          </div>
        </form>
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
        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); opacity: 0; }
          50% { opacity: 0.6; }
          100% { transform: translateY(-200px) translateX(50px); opacity: 0; }
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
        .animate-float {
          animation: float var(--duration, 20s) ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}