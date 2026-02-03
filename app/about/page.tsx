export default function AboutPage() {
  return (
    <section className="mx-auto flex w-full max-w-4xl flex-col gap-12 px-6 py-20 md:py-28">
      <div>
        <p className="text-xs uppercase tracking-[0.4em] text-white/60">About</p>
        <h1 className="mt-6 text-3xl md:text-5xl font-semibold leading-tight">
          A founder-led company devoted to enduring systems.
        </h1>
        <p className="mt-6 text-base md:text-lg text-mist leading-relaxed">
          FORGESTACK LABS exists to build quietly and with intention. We are product-first,
          focused on systems that hold up under time and complexity. The work is deliberate,
          measured, and guided by long-term vision.
        </p>
      </div>

      <div className="space-y-6">
        <div className="glass-panel p-6">
          <h3 className="text-lg font-semibold tracking-tight">Product-obsessed</h3>
          <p className="mt-3 text-sm text-mist leading-relaxed">
            The founders remain close to the craft, obsessed with the invisible details that
            make software feel inevitable.
          </p>
        </div>
        <div className="glass-panel p-6">
          <h3 className="text-lg font-semibold tracking-tight">Real-world systems</h3>
          <p className="mt-3 text-sm text-mist leading-relaxed">
            Experience is grounded in building systems that must operate with calm precision
            in real environments.
          </p>
        </div>
        <div className="glass-panel p-6">
          <h3 className="text-lg font-semibold tracking-tight">Long-term vision</h3>
          <p className="mt-3 text-sm text-mist leading-relaxed">
            We build with patience and depth, prioritizing decisions that compound for years.
          </p>
        </div>
      </div>
    </section>
  );
}
