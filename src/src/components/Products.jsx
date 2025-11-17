import { products } from '../data/content';

const Products = () => {
  return (
    <section id="products" className="section-shell space-y-6">
      <div className="flex flex-col gap-3">
        <p className="text-sm uppercase tracking-[0.25em] text-fuchsia-300">Products</p>
        <h2 className="text-3xl font-bold text-white md:text-4xl">Launch-ready boosts, nitro, and tools</h2>
        <p className="max-w-3xl text-slate-300">
          Curated services with fast delivery, transparent pricing, and a neon magenta glow so every card feels alive in the cosmic backdrop.
        </p>
      </div>
      <div className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 shadow-inner shadow-white/5 md:flex-row md:items-center md:justify-between">
        <input
          type="text"
          placeholder="Search for a product..."
          className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-fuchsia-400 focus:outline-none focus:ring-2 focus:ring-fuchsia-500/40 md:w-2/3"
        />
        <select className="w-full rounded-xl border border-white/10 bg-black/50 px-4 py-3 text-sm text-white focus:border-fuchsia-400 focus:outline-none focus:ring-2 focus:ring-fuchsia-500/40 md:w-1/3">
          <option>Index by: Default</option>
          <option>Price low to high</option>
          <option>Price high to low</option>
          <option>Newest</option>
        </select>
      </div>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {products.map((product) => (
          <article
            key={product.name}
            className="panel relative flex flex-col justify-between rounded-2xl border border-white/10 bg-gradient-to-br from-[#1a112e]/80 via-[#120d22]/90 to-[#0c0818]/90 p-5 shadow-lg shadow-fuchsia-500/10 transition hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(255,62,181,0.35)]"
          >
            <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-fuchsia-500/15 blur-3xl" aria-hidden />
            <div className="flex items-start justify-between">
              <span className="rounded-full border border-fuchsia-400/40 bg-fuchsia-500/20 px-3 py-1 text-xs font-semibold text-fuchsia-100 shadow-inner shadow-fuchsia-500/20">
                {product.group}
              </span>
              <span className="rounded-lg bg-white/5 px-3 py-1 text-xs text-slate-300">Cosmic ready</span>
            </div>
            <div className="mt-6 space-y-2">
              <h3 className="text-xl font-semibold text-white drop-shadow-[0_0_20px_rgba(255,62,181,0.25)]">{product.name}</h3>
              <p className="text-sm text-slate-400">Deploy instantly with a soft nebula glow and crisp legibility.</p>
            </div>
            <div className="mt-6 flex items-center justify-between rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm font-semibold text-slate-200">
              <span className="text-slate-400">Starting at:</span>
              <span className="text-lg text-fuchsia-300">{product.price}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Products;
