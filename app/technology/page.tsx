export default function TechnologyPage() {
  return (
    <section className="mx-auto flex w-full max-w-5xl flex-col gap-10 px-6 py-20 md:py-28">
      <div className="max-w-3xl">
        <p className="text-xs uppercase tracking-[0.4em] text-white/60">Technology</p>
        <h1 className="mt-6 text-3xl md:text-5xl font-semibold leading-tight">
          Systems engineered for reliability, not spectacle.
        </h1>
        <p className="mt-6 text-base md:text-lg text-mist leading-relaxed">
          We design software systems as infrastructure—calm, resilient, and precise. Every
          layer is considered for durability, graceful scale, and an unwavering commitment to
          clarity. The result is technology that feels quiet but strong.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {[
          {
            title: "Reliability",
            copy: "We invest in architectural discipline so every system behaves predictably under pressure."
          },
          {
            title: "Scalability",
            copy: "Growth should be silent and steady. Our systems expand without compromising stability."
          },
          {
            title: "Precision",
            copy: "We measure impact, refine details, and protect the integrity of every component."
          },
          {
            title: "Stewardship",
            copy: "Technology deserves care. We maintain systems with long-term guardianship in mind."
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
