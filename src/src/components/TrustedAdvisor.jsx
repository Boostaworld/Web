import { trustedMetrics } from '../data/content';

const TrustedAdvisor = () => {
  return (
    <section id="trusted" className="section-shell space-y-4 scroll-mt-28">
      <div className="flex flex-col gap-2">
        <p className="text-sm uppercase tracking-[0.25em] text-fuchsia-300">Trusted Advisor</p>
        <h2 className="text-3xl font-bold text-white md:text-4xl">Proof you can rely on</h2>
        <p className="max-w-2xl text-slate-300">Trust metrics with green check icons and subtle glows in a compact card.</p>
      </div>
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-[#121026]/95 via-[#0e0a1c]/95 to-[#0a0816]/95 p-8 shadow-[0_20px_60px_rgba(72,229,194,0.1)]">
        <div className="absolute -right-10 -top-12 h-56 w-56 rounded-full bg-emerald-400/10 blur-3xl" aria-hidden />
        <div className="relative grid gap-4">
          <h3 className="text-2xl font-semibold text-white">Trusted Advisor</h3>
          {trustedMetrics.map((metric) => (
            <div key={metric.label} className="flex items-start gap-3 rounded-2xl bg-white/5 p-4 shadow-inner shadow-white/5">
              <span className="mt-1 grid h-8 w-8 place-items-center rounded-full bg-emerald-500/15 text-lg font-bold text-emerald-200">
                {metric.icon}
              </span>
              <div>
                <p className="text-base font-semibold text-white">{metric.label}</p>
                <p className="text-sm text-slate-300">{metric.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedAdvisor;
