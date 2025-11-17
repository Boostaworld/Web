const CustomerPortal = () => {
  return (
    <section id="portal" className="section-shell space-y-4 scroll-mt-28">
      <div className="flex flex-col gap-2">
        <p className="text-sm uppercase tracking-[0.25em] text-fuchsia-300">Customer Portal</p>
        <h2 className="text-3xl font-bold text-white md:text-4xl">Sign-in placeholder</h2>
        <p className="max-w-2xl text-slate-300">The live site returns a 404 for now. We mirror that with a styled stub and guidance.</p>
      </div>
      <div className="rounded-3xl border border-white/10 bg-black/50 p-6 text-slate-200 shadow-[0_20px_50px_rgba(255,62,181,0.12)]">
        <p className="text-lg font-semibold text-white">Cannot GET /customer/auth</p>
        <p className="text-sm text-slate-400">We will route you to the new portal once it launches. For order lookups, open a Discord ticket.</p>
      </div>
    </section>
  );
};

export default CustomerPortal;
