import { navLinks } from '../data/content';

const Header = () => {
  return (
    <header className="relative border-b border-white/10 bg-opacity-90 bg-gradient-to-b from-[#150f28]/90 to-[#0c091a]/90 backdrop-blur-xl">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,62,181,0.12),transparent_30%),radial-gradient(circle_at_80%_0%,rgba(110,93,231,0.15),transparent_30%)]" aria-hidden />
      <div className="section-shell pb-6">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-fuchsia-400/30 bg-fuchsia-500/10 px-4 py-2 text-sm text-fuchsia-100 shadow-[0_10px_50px_rgba(255,62,181,0.25)]">
          <span className="font-semibold">Please join our discord:</span>
          <a
            href="https://discord.boostmania.gg/"
            className="inline-flex items-center gap-2 rounded-full bg-fuchsia-500 px-3 py-1 font-semibold text-white shadow-lg transition hover:scale-[1.02] hover:shadow-xl"
          >
            https://discord.boostmania.gg/
          </a>
        </div>
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-4">
            <div className="grid h-14 w-14 place-items-center rounded-full bg-gradient-to-br from-fuchsia-500 to-purple-500 text-2xl font-black text-white shadow-[0_0_35px_rgba(255,62,181,0.55)]">
              BM
            </div>
            <div>
              <p className="text-2xl font-bold text-white">BoostMania</p>
              <p className="text-sm text-slate-300">#1 Cheap Boosts, Nitro, and Tools!</p>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 shadow-lg shadow-fuchsia-500/10">
              <div className="space-y-1">
                <p className="text-xs uppercase tracking-[0.15em] text-slate-400">Products Sold</p>
                <p className="text-lg font-semibold text-white">4116</p>
              </div>
              <div className="h-10 w-px bg-white/10" aria-hidden />
              <div className="space-y-1">
                <p className="text-xs uppercase tracking-[0.15em] text-slate-400">Product Quality</p>
                <p className="text-lg font-semibold text-white">
                  4.9 <span className="text-fuchsia-300">★</span> <span className="text-sm text-slate-400">(327 reviews)</span>
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-2 text-sm text-slate-200 shadow-inner shadow-white/5">
              <span className="rounded-full bg-fuchsia-500/20 px-2 py-1 text-xs font-semibold text-fuchsia-100">EN</span>
              <span className="text-slate-400">Language</span>
            </div>
            <button className="relative inline-flex h-11 w-11 items-center justify-center rounded-full border border-fuchsia-400/30 bg-fuchsia-500/20 text-fuchsia-100 shadow-lg shadow-fuchsia-500/20 transition hover:-translate-y-0.5">
              <span className="absolute -right-1 -top-1 grid h-5 w-5 place-items-center rounded-full bg-white text-xs font-bold text-fuchsia-500 shadow-md">
                2
              </span>
              🛒
            </button>
          </div>
        </div>
        <nav className="sticky top-0 z-40 mt-6">
          <div className="flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-2 py-2 text-sm font-semibold text-slate-200 shadow-lg shadow-fuchsia-500/10">
            {navLinks.map((link, index) => (
              <a
                key={link.label}
                href={link.href}
                className={`rounded-full px-4 py-2 transition hover:text-white hover:underline hover:decoration-fuchsia-400 hover:decoration-2 ${
                  index === 0 ? 'bg-fuchsia-600 text-white shadow-[0_10px_40px_rgba(255,62,181,0.35)]' : ''
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
