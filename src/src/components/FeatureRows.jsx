import { features } from '../data/content';

const mockImages = ['/phone_3.png', '/phone_shadow.png'];

const FeatureRows = () => {
  return (
    <section className="section-shell space-y-12">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-indigo">Feature flow</p>
          <h2 className="mt-2 text-3xl font-bold md:text-4xl">Guided moments that mirror Boostmania</h2>
          <p className="mt-3 max-w-3xl text-slate-300">
            Each row stacks a crisp headline with a purpose-built visual, alternating alignment to keep readers moving down the page while reinforcing the story.
          </p>
        </div>
        <div className="hidden md:block rounded-full bg-white/10 px-4 py-2 text-sm text-lilac">Polished &amp; responsive</div>
      </div>
      <div className="space-y-10">
        {features.map((feature, index) => (
          <div
            key={feature.title}
            className={`gradient-card grid items-center gap-8 rounded-3xl p-8 shadow-glow md:grid-cols-2 ${
              index % 2 === 1 ? 'md:flex-row-reverse md:[&>*:first-child]:md:order-2' : ''
            }`}
          >
            <div className="space-y-4">
              <span className="inline-flex items-center gap-2 rounded-full bg-indigo/15 px-3 py-1 text-xs font-semibold text-indigo">
                {feature.badge}
              </span>
              <h3 className="text-2xl font-semibold text-white">{feature.title}</h3>
              <p className="text-slate-200">{feature.description}</p>
              <div className="flex flex-wrap gap-3 text-sm text-slate-100">
                <span className="rounded-full bg-white/10 px-3 py-1">Responsive grid</span>
                <span className="rounded-full bg-white/10 px-3 py-1">Soft glows</span>
                <span className="rounded-full bg-white/10 px-3 py-1">Purposeful spacing</span>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -left-6 -top-6 h-32 w-32 rounded-full bg-indigo/25 blur-3xl" aria-hidden />
              <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-black/40 shadow-2xl">
                <img
                  src={mockImages[index % mockImages.length]}
                  alt={`${feature.title} visual`}
                  className="w-full object-cover"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureRows;
