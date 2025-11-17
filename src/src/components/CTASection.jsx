import { ctas } from '../data/content';

const CTASection = () => {
  return (
    <section className="section-shell space-y-8">
      <div className="text-center space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-indigo">Conversion moments</p>
        <h2 className="text-3xl font-bold md:text-4xl">Persistent CTAs that echo the hero</h2>
        <p className="max-w-2xl mx-auto text-slate-300">
          Buttons share the same rounded geometry, hover lift, and contrast states so visitors always know the next step to take.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {ctas.map((cta) => (
          <div key={cta.title} className="gradient-card relative overflow-hidden rounded-3xl p-8 shadow-glow">
            <div className="absolute -right-6 -top-10 h-32 w-32 rounded-full bg-teal/25 blur-3xl" aria-hidden />
            <div className="space-y-3">
              <h3 className="text-2xl font-semibold text-white">{cta.title}</h3>
              <p className="text-slate-200">{cta.description}</p>
              <div className="flex flex-wrap gap-3 pt-2">
                <button className="btn-primary">{cta.primary}</button>
                <button className="btn-secondary">{cta.secondary}</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CTASection;
