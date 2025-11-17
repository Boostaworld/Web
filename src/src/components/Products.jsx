import { useMemo, useState } from 'react';
import { products } from '../data/content';

const sortOptions = [
  { value: 'default', label: 'Index by: Default' },
  { value: 'priceAsc', label: 'Price low to high' },
  { value: 'priceDesc', label: 'Price high to low' },
  { value: 'alpha', label: 'Alphabetical' },
];

const categoryOptions = ['All', 'Boosts', 'Nitro', 'Tools', 'Accounts', 'Entertainment'];

const Products = ({ onAddToCart = () => {} }) => {
  const [query, setQuery] = useState('');
  const [sortBy, setSortBy] = useState(sortOptions[0]);
  const [category, setCategory] = useState(categoryOptions[0]);
  const [filterOpen, setFilterOpen] = useState(false);
  const [sortOpen, setSortOpen] = useState(false);

  const filteredProducts = useMemo(() => {
    let next = [...products];

    if (category !== 'All') {
      next = next.filter((product) => product.category === category);
    }

    if (query.trim()) {
      const safeQuery = query.trim().toLowerCase();
      next = next.filter((product) => product.name.toLowerCase().includes(safeQuery));
    }

    if (sortBy.value === 'priceAsc') {
      next.sort((a, b) => a.priceValue - b.priceValue);
    } else if (sortBy.value === 'priceDesc') {
      next.sort((a, b) => b.priceValue - a.priceValue);
    } else if (sortBy.value === 'alpha') {
      next.sort((a, b) => a.name.localeCompare(b.name));
    }

    return next;
  }, [category, query, sortBy]);

  return (
    <section id="products" className="section-shell space-y-6 scroll-mt-28">
      <div className="flex flex-col gap-3">
        <p className="text-sm uppercase tracking-[0.25em] text-fuchsia-300">Products</p>
        <h2 className="text-3xl font-bold text-white md:text-4xl">Launch-ready boosts, nitro, and tools</h2>
        <p className="max-w-3xl text-slate-300">
          Curated services with fast delivery, transparent pricing, and a neon magenta glow so every card feels alive in the cosmic backdrop.
        </p>
      </div>
      <div className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 shadow-inner shadow-white/5 md:flex-row md:items-center md:justify-between">
        <div className="flex w-full flex-col gap-3 md:w-2/3">
          <label className="text-xs uppercase tracking-[0.2em] text-fuchsia-200">Search</label>
          <div className="relative">
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search for a product..."
              className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-fuchsia-400 focus:outline-none focus:ring-2 focus:ring-fuchsia-500/40"
            />
            {query && (
              <button
                type="button"
                onClick={() => setQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 transition hover:text-fuchsia-200"
              >
                Clear
              </button>
            )}
          </div>
        </div>
        <div className="flex w-full flex-col gap-2 md:w-1/3">
          <div className="flex gap-2">
            <div className="relative w-1/2">
              <button
                type="button"
                onClick={() => {
                  setFilterOpen((prev) => !prev);
                  setSortOpen(false);
                }}
                className="flex w-full items-center justify-between rounded-xl border border-white/10 bg-black/50 px-3 py-3 text-left text-sm text-white shadow-inner shadow-white/5 transition hover:border-fuchsia-400"
              >
                <span>{category === 'All' ? 'Filter: All' : `Filter: ${category}`}</span>
                <img src="https://freesvgicons.com/uploads/vector/preview/2022/01/19/chevron-down-1642604192.svg" alt="Dropdown" className={`h-4 w-4 transition ${filterOpen ? 'rotate-180' : ''}`} />
              </button>
              {filterOpen && (
                <div className="absolute left-0 right-0 z-20 mt-2 rounded-xl border border-white/10 bg-[#0c091a]/95 text-sm text-slate-200 shadow-lg shadow-fuchsia-500/20">
                  {categoryOptions.map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => {
                        setCategory(option);
                        setFilterOpen(false);
                      }}
                      className={`flex w-full items-center justify-between px-4 py-2 text-left transition hover:bg-white/5 ${
                        category === option ? 'text-fuchsia-200' : ''
                      }`}
                    >
                      <span>{option}</span>
                      {category === option && <span className="text-fuchsia-300">•</span>}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <div className="relative w-1/2">
              <button
                type="button"
                onClick={() => {
                  setSortOpen((prev) => !prev);
                  setFilterOpen(false);
                }}
                className="flex w-full items-center justify-between rounded-xl border border-white/10 bg-black/50 px-3 py-3 text-left text-sm text-white shadow-inner shadow-white/5 transition hover:border-fuchsia-400"
              >
                <span>{sortBy.label}</span>
                <img src="https://freesvgicons.com/uploads/vector/preview/2022/01/19/chevron-down-1642604192.svg" alt="Dropdown" className={`h-4 w-4 transition ${sortOpen ? 'rotate-180' : ''}`} />
              </button>
              {sortOpen && (
                <div className="absolute left-0 right-0 z-20 mt-2 rounded-xl border border-white/10 bg-[#0c091a]/95 text-sm text-slate-200 shadow-lg shadow-fuchsia-500/20">
                  {sortOptions.map((option) => (
                    <button
                      key={option.value}
                      type="button"
                      onClick={() => {
                        setSortBy(option);
                        setSortOpen(false);
                      }}
                      className={`flex w-full items-center justify-between px-4 py-2 text-left transition hover:bg-white/5 ${
                        sortBy.value === option.value ? 'text-fuchsia-200' : ''
                      }`}
                    >
                      <span>{option.label}</span>
                      {sortBy.value === option.value && <span className="text-fuchsia-300">•</span>}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {filteredProducts.map((product) => (
          <article
            key={product.name}
            className="panel relative flex flex-col justify-between rounded-2xl border border-white/10 bg-gradient-to-br from-[#1a112e]/80 via-[#120d22]/90 to-[#0c0818]/90 p-5 shadow-lg shadow-fuchsia-500/10 transition hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(255,62,181,0.35)]"
          >
            <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-fuchsia-500/15 blur-3xl" aria-hidden />
            <div className="flex items-start justify-between">
              <span className="rounded-full border border-fuchsia-400/40 bg-fuchsia-500/20 px-3 py-1 text-xs font-semibold text-fuchsia-100 shadow-inner shadow-fuchsia-500/20">
                {product.group}
              </span>
              <span className="rounded-lg bg-white/5 px-3 py-1 text-xs text-slate-300">{product.category}</span>
            </div>
            <div className="mt-6 space-y-2">
              <h3 className="text-xl font-semibold text-white drop-shadow-[0_0_20px_rgba(255,62,181,0.25)]">{product.name}</h3>
              <p className="text-sm text-slate-400">Deploy instantly with a soft nebula glow and crisp legibility.</p>
            </div>
            <div className="mt-6 flex items-center justify-between rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm font-semibold text-slate-200">
              <span className="text-slate-400">Starting at:</span>
              <span className="text-lg text-fuchsia-300">{product.price}</span>
            </div>
            <div className="mt-4 flex items-center gap-3">
              <button
                type="button"
                onClick={() => onAddToCart(product)}
                className="flex-1 rounded-full bg-gradient-to-r from-fuchsia-500 to-purple-500 px-4 py-2 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(255,62,181,0.35)] transition hover:-translate-y-0.5"
              >
                Add to cart
              </button>
              <button
                type="button"
                className="rounded-full border border-white/10 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-fuchsia-400 hover:text-fuchsia-200"
              >
                Details
              </button>
            </div>
          </article>
        ))}
        {filteredProducts.length === 0 && (
          <p className="col-span-full rounded-2xl border border-white/10 bg-black/30 px-4 py-6 text-center text-sm text-slate-300">
            No products found. Try adjusting your search or filter.
          </p>
        )}
      </div>
    </section>
  );
};

export default Products;
