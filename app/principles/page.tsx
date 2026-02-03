export default function PrinciplesPage() {
  return (
    <section className="mx-auto flex w-full max-w-4xl flex-col gap-12 px-6 py-20 md:py-28">
      <div>
        <p className="text-xs uppercase tracking-[0.4em] text-white/60">Approach</p>
        <h1 className="mt-6 text-3xl md:text-5xl font-semibold leading-tight">
          Discipline. Restraint. Clarity.
        </h1>
        <p className="mt-6 text-base md:text-lg text-mist leading-relaxed">
          FORGESTACK LABS operates with a quiet, intentional rhythm. We do not chase attention.
          We focus on the integrity of each system and the precision of each decision.
        </p>
      </div>

      <div className="space-y-8">
        {[
          {
            title: "Build quietly",
            copy: "Silence allows us to concentrate on what matters: thoughtful design, careful execution, and long-term stewardship."
          },
          {
            title: "Refine continuously",
            copy: "We revisit assumptions and sharpen details until the system feels inevitable."
          },
          {
            title: "Protect clarity",
            copy: "Complexity is inevitable. Confusion is optional. We keep systems legible and purposeful."
          },
          {
            title: "Honor time",
            copy: "We plan for years, not quarters. Durability is the ultimate measure of success."
          }
        ].map((item) => (
          <div key={item.title} className="glass-panel p-6">
            <h3 className="text-lg font-semibold tracking-tight">{item.title}</h3>
            <p className="mt-3 text-sm text-mist leading-relaxed">{item.copy}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
