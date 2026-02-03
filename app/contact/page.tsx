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
    <section className="mx-auto flex w-full max-w-4xl flex-col gap-10 px-6 py-20 md:py-28">
      <div>
        <p className="text-xs uppercase tracking-[0.4em] text-white/60">Contact</p>
        <h1 className="mt-6 text-3xl md:text-5xl font-semibold leading-tight">
          A quiet channel for thoughtful messages.
        </h1>
        <p className="mt-6 text-base md:text-lg text-mist leading-relaxed">
          Share what you feel is essential. Messages are reviewed with care and intention.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="glass-panel space-y-6 p-6">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-2">
            <label className="text-xs uppercase tracking-[0.3em] text-white/60" htmlFor="name">
              Name *
            </label>
            <input
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full rounded-none border border-white/10 bg-obsidian px-4 py-3 text-sm text-white focus:border-accent focus:outline-none"
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs uppercase tracking-[0.3em] text-white/60" htmlFor="email">
              Email *
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full rounded-none border border-white/10 bg-obsidian px-4 py-3 text-sm text-white focus:border-accent focus:outline-none"
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs uppercase tracking-[0.3em] text-white/60" htmlFor="phone">
              Phone
            </label>
            <input
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full rounded-none border border-white/10 bg-obsidian px-4 py-3 text-sm text-white focus:border-accent focus:outline-none"
            />
          </div>
          <div className="space-y-2">
            <label
              className="text-xs uppercase tracking-[0.3em] text-white/60"
              htmlFor="organization"
            >
              Organization
            </label>
            <input
              id="organization"
              name="organization"
              value={formData.organization}
              onChange={handleChange}
              className="w-full rounded-none border border-white/10 bg-obsidian px-4 py-3 text-sm text-white focus:border-accent focus:outline-none"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-xs uppercase tracking-[0.3em] text-white/60" htmlFor="message">
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            value={formData.message}
            onChange={handleChange}
            className="w-full resize-none rounded-none border border-white/10 bg-obsidian px-4 py-3 text-sm text-white focus:border-accent focus:outline-none"
          />
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4">
          <button
            type="submit"
            disabled={status === "submitting"}
            className="text-xs uppercase tracking-[0.4em] text-white/80 transition hover:text-white disabled:cursor-not-allowed disabled:text-white/40"
          >
            {status === "submitting" ? "Sending" : "Submit"}
          </button>
          {status === "success" && (
            <p className="text-xs uppercase tracking-[0.3em] text-white/60">
              Thank you. Messages are reviewed periodically.
            </p>
          )}
          {status === "error" && (
            <p className="text-xs uppercase tracking-[0.3em] text-red-300">
              Something went wrong. Please try again.
            </p>
          )}
        </div>
      </form>
    </section>
  );
}
