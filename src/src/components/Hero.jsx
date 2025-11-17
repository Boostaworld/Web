import { heroHighlights } from '../data/content';

const Hero = () => {
  return (
    <header className="relative overflow-hidden bg-gradient-to-b from-indigo/20 via-navy to-navy">
      <div className="absolute inset-0 grid-bg opacity-60" aria-hidden />
      <div className="section-shell relative flex flex-col gap-12 md:flex-row md:items-center">
        <div className="z-10 flex-1 space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-lilac">
            Boostmania-inspired flow
          </div>
          <h1 className="text-4xl font-bold leading-tight md:text-5xl">
            Ship a landing page that glows, guides, and gets signups.
          </h1>
          <p className="max-w-2xl text-lg text-slate-200">
            Layered gradients, confident typography, and purposeful mobile mockups recreate the Boostmania rhythm so your visitors instantly understand the value.
          </p>
          <div className="flex flex-wrap gap-3 text-sm text-slate-100">
            {heroHighlights.map((item) => (
              <div key={item} className="flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 ring-1 ring-white/10">
                <img src="/star.png" alt="star" className="h-4 w-4" />
                <span>{item}</span>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-3">
            <button className="btn-primary">Start building</button>
            <button className="btn-secondary">See live preview</button>
          </div>
        </div>
        <div className="relative flex-1">
          <div className="absolute inset-0 -left-10 -z-10 aspect-square rounded-full bg-indigo/30 blur-3xl" aria-hidden />
          <div className="relative mx-auto max-w-sm rounded-[32px] border border-white/10 bg-white/5 p-6 shadow-2xl">
            <div className="grid gap-4">
              <div className="overflow-hidden rounded-3xl border border-white/10 bg-black/40 shadow-xl">
                <img src="/phone.png" alt="Product phone" className="w-full object-cover" />
              </div>
              <div className="overflow-hidden rounded-3xl border border-white/10 bg-black/40 shadow-xl">
                <img src="/phone_2.png" alt="Timeline phone" className="w-full object-cover" />
              </div>
            </div>
            <div className="pointer-events-none absolute -bottom-6 left-8 h-20 w-20 rounded-full bg-indigo/40 blur-3xl" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
