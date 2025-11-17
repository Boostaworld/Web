import { termsSections } from '../data/content';

const Terms = () => {
  return (
    <section id="terms" className="section-shell space-y-4 scroll-mt-28">
      <div className="flex flex-col gap-2">
        <p className="text-sm uppercase tracking-[0.25em] text-fuchsia-300">Terms</p>
        <h2 className="text-3xl font-bold text-white md:text-4xl">Policy highlights</h2>
        <p className="max-w-3xl text-slate-300">A single wide card with magenta headers, soft glows, and bullet points customers can scan quickly.</p>
      </div>
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#171029]/90 via-[#100c1d]/90 to-[#0b0816]/95 p-8 shadow-[0_20px_60px_rgba(255,62,181,0.2)]">
        <div className="absolute inset-0 bg-[repeating-linear-gradient(135deg,rgba(255,62,181,0.05)_0,rgba(255,62,181,0.05)_2px,transparent_2px,transparent_10px)]" aria-hidden />
        <div className="relative grid gap-6">
          {termsSections.map((section) => (
            <div key={section.title} className="space-y-2 rounded-2xl bg-white/5 p-5 shadow-inner shadow-white/5">
              <h3 className="text-lg font-semibold text-fuchsia-200">{section.title.toUpperCase()}</h3>
              <ul className="space-y-2 text-slate-200">
                {section.points.map((point) => (
                  <li key={point} className="flex gap-3">
                    <span className="text-fuchsia-300">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Terms;
