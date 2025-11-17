import { useState } from 'react';
import { faqItems } from '../data/content';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="section-shell space-y-4 scroll-mt-28">
      <div className="flex flex-col gap-2">
        <p className="text-sm uppercase tracking-[0.25em] text-fuchsia-300">F.A.Q</p>
        <h2 className="text-3xl font-bold text-white md:text-4xl">Frequently Asked Questions</h2>
        <p className="max-w-3xl text-slate-300">Answers stay readable on the cosmic gradient with clear dividers and magnetic hover states.</p>
      </div>
      <div className="overflow-hidden rounded-3xl border border-white/10 bg-black/40">
        {faqItems.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div key={item.question} className="border-b border-white/5 bg-gradient-to-r from-white/5 via-transparent to-white/5 last:border-0">
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? -1 : index)}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition hover:bg-white/5"
              >
                <div>
                  <p className="text-lg font-semibold text-white">{item.question}</p>
                  <p className="text-xs uppercase tracking-[0.2em] text-fuchsia-200">Tap to {isOpen ? 'collapse' : 'expand'}</p>
                </div>
                <span className="text-fuchsia-300">{isOpen ? '−' : '+'}</span>
              </button>
              <div
                className={`grid overflow-hidden transition-[grid-template-rows,opacity] duration-300 ease-out ${
                  isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-70'
                }`}
              >
                <div className="space-y-2 px-6 pb-6 text-slate-300">
                  {item.answer.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FAQ;
