const Footer = () => {
  return (
    <footer className="section-shell border-t border-white/5 text-sm text-slate-400">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <span>2024 | BoostMania</span>
        <div className="flex gap-3">
          {['Discord', 'Twitter/X', 'Telegram', 'YouTube'].map((network) => (
            <a
              key={network}
              href="#"
              className={`grid h-10 w-10 place-items-center rounded-full border border-white/10 text-xs font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(255,62,181,0.35)] ${
                network === 'YouTube' ? 'bg-red-600' : 'bg-black/50'
              }`}
            >
              {network === 'YouTube' ? 'YT' : network[0]}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
