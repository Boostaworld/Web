import { feedbackEntries } from '../data/content';

const Feedback = () => {
  return (
    <section id="feedback" className="section-shell space-y-4">
      <div className="flex flex-col gap-2">
        <p className="text-sm uppercase tracking-[0.25em] text-fuchsia-300">Feedback</p>
        <h2 className="text-3xl font-bold text-white md:text-4xl">Player-loved reviews</h2>
        <p className="max-w-2xl text-slate-300">Real comments captured in neon frames with star rows and verified purchase labels.</p>
      </div>
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {feedbackEntries.map((entry) => (
          <article
            key={`${entry.date}-${entry.text}`}
            className="relative flex flex-col gap-4 rounded-2xl border border-white/10 bg-gradient-to-br from-[#181030]/80 via-[#110b21]/85 to-[#0b0916]/90 p-5 shadow-lg shadow-fuchsia-500/15"
          >
            <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-fuchsia-500/15 blur-3xl" aria-hidden />
            <div className="flex items-center justify-between text-sm text-slate-200">
              <div className="flex items-center gap-1 text-fuchsia-200">
                {'★'.repeat(entry.rating)}
                <span className="text-slate-500">{entry.rating}.0</span>
              </div>
              <span className="text-xs text-slate-400">{entry.date}</span>
            </div>
            <p className="text-lg font-semibold text-white">{entry.text}</p>
            <span className="inline-flex w-fit items-center gap-2 rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-semibold text-emerald-200">
              <span className="text-emerald-300">✔</span> Verified Purchase
            </span>
          </article>
        ))}
      </div>
      <div className="flex flex-wrap gap-2">
        {[...Array(10)].map((_, index) => (
          <button
            key={index}
            className={`h-9 w-9 rounded-full border border-white/10 text-sm font-semibold transition hover:border-fuchsia-400 hover:text-fuchsia-200 ${
              index === 0 ? 'bg-fuchsia-600 text-white shadow-[0_10px_30px_rgba(255,62,181,0.35)]' : 'bg-black/30 text-slate-200'
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </section>
  );
};

export default Feedback;
