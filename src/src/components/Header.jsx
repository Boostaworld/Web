import { useMemo, useState } from 'react';
import { navLinks } from '../data/content';

const scrollToSection = (href) => {
  const target = document.querySelector(href);
  if (target) {
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

const Header = ({ cartCount = 0, cartItems = [], cartTotal = 0, onClearCart = () => {} }) => {
  const [cartOpen, setCartOpen] = useState(false);

  const cartFormattedTotal = useMemo(() => `$${cartTotal.toFixed(2)}`, [cartTotal]);
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
            <div className="relative">
              <button
                type="button"
                aria-label="Open cart"
                onClick={() => setCartOpen((prev) => !prev)}
                className="relative inline-flex h-11 w-11 items-center justify-center rounded-full border border-fuchsia-400/30 bg-fuchsia-500/20 text-fuchsia-100 shadow-lg shadow-fuchsia-500/20 transition hover:-translate-y-0.5"
              >
                {cartCount > 0 && (
                  <span className="absolute -right-1 -top-1 grid h-5 w-5 place-items-center rounded-full bg-white text-xs font-bold text-fuchsia-500 shadow-md">
                    {cartCount}
                  </span>
                )}
                <img src="https://freesvgicons.com/uploads/vector/preview/2023/05/15/cart-1684130187.svg" alt="Cart" className="h-5 w-5" />
              </button>
              {cartOpen && (
                <div className="absolute right-0 z-50 mt-3 w-72 rounded-2xl border border-white/15 bg-[#0f0b1d]/95 p-4 shadow-[0_20px_60px_rgba(255,62,181,0.25)] backdrop-blur-xl">
                  <div className="mb-3 flex items-center justify-between">
                    <p className="text-sm font-semibold text-white">Cart</p>
                    <button
                      type="button"
                      onClick={() => setCartOpen(false)}
                      className="text-xs text-slate-400 transition hover:text-fuchsia-200"
                    >
                      Close
                    </button>
                  </div>
                  <div className="max-h-48 space-y-3 overflow-auto pr-1">
                    {cartItems.length === 0 ? (
                      <p className="text-sm text-slate-400">Your cart is empty — add a boost to get started.</p>
                    ) : (
                      cartItems.map((item) => (
                        <div key={item.name} className="flex items-center justify-between rounded-xl border border-white/5 bg-white/5 px-3 py-2 text-sm">
                          <div>
                            <p className="font-semibold text-white">{item.name}</p>
                            <p className="text-xs text-slate-400">Qty {item.quantity}</p>
                          </div>
                          <span className="text-fuchsia-200">${(item.priceValue * item.quantity).toFixed(2)}</span>
                        </div>
                      ))
                    )}
                  </div>
                  <div className="mt-3 flex items-center justify-between text-sm font-semibold text-white">
                    <span>Total</span>
                    <span>{cartFormattedTotal}</span>
                  </div>
                  <div className="mt-3 flex items-center gap-2">
                    <button
                      type="button"
                      onClick={onClearCart}
                      className="flex-1 rounded-full border border-white/15 px-3 py-2 text-xs font-semibold text-slate-200 transition hover:border-fuchsia-400 hover:text-fuchsia-200"
                    >
                      Clear
                    </button>
                    <button
                      type="button"
                      className="flex-1 rounded-full bg-gradient-to-r from-fuchsia-500 to-purple-500 px-3 py-2 text-xs font-semibold text-white shadow-[0_10px_30px_rgba(255,62,181,0.35)] transition hover:-translate-y-0.5"
                    >
                      Checkout
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <nav className="sticky top-0 z-40 mt-6">
          <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-2 rounded-full border border-white/10 bg-black/40 px-2 py-2 text-sm font-semibold text-slate-200 shadow-lg shadow-fuchsia-500/10">
            {navLinks.map((link, index) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(event) => {
                  event.preventDefault();
                  scrollToSection(link.href);
                }}
                className={`rounded-full px-4 py-2 transition hover:-translate-y-[1px] hover:text-white hover:underline hover:decoration-fuchsia-400 hover:decoration-2 ${
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
