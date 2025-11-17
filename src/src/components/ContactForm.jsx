import { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({ title: '', email: '', invoice: '', message: '' });
  const [status, setStatus] = useState('');

  const updateField = (key) => (event) => {
    setFormData((prev) => ({ ...prev, [key]: event.target.value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setStatus('Ticket created! A Discord rep will reply shortly.');
    setFormData({ title: '', email: '', invoice: '', message: '' });
  };

  return (
    <section id="contact" className="section-shell space-y-4 scroll-mt-28">
      <div className="flex flex-col gap-2">
        <p className="text-sm uppercase tracking-[0.25em] text-fuchsia-300">Contact</p>
        <h2 className="text-3xl font-bold text-white md:text-4xl">Open a ticket</h2>
        <p className="max-w-2xl text-slate-300">Use the form below to reach the team. Your message arrives as a Discord ticket with rich context.</p>
      </div>
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#16102a] via-[#0f0b1d] to-[#0a0816] p-8 shadow-[0_20px_60px_rgba(255,62,181,0.15)]">
        <div className="absolute -left-10 -top-8 h-40 w-40 rounded-full bg-fuchsia-500/20 blur-3xl" aria-hidden />
        <form className="relative grid gap-4 md:grid-cols-2" onSubmit={handleSubmit}>
          <label className="flex flex-col gap-2">
            <span className="text-sm text-slate-300">Title</span>
            <input
              type="text"
              placeholder="e.g: Terms and Conditions for dropshipper"
              value={formData.title}
              onChange={updateField('title')}
              className="input-field"
            />
          </label>
          <label className="flex flex-col gap-2">
            <span className="text-sm text-slate-300">Email</span>
            <input type="email" placeholder="you@example.com" value={formData.email} onChange={updateField('email')} className="input-field" />
          </label>
          <label className="flex flex-col gap-2">
            <span className="text-sm text-slate-300">Invoice ID (optional)</span>
            <input type="text" placeholder="#INV-00042" value={formData.invoice} onChange={updateField('invoice')} className="input-field" />
          </label>
          <label className="flex flex-col gap-2 md:col-span-2">
            <span className="text-sm text-slate-300">Message</span>
            <textarea rows="4" placeholder="What would you like to ask?" value={formData.message} onChange={updateField('message')} className="input-field" />
          </label>
          <div className="md:col-span-2">
            <button type="submit" className="btn-primary w-full md:w-auto">
              Create ticket
            </button>
            {status && <p className="mt-2 text-sm text-emerald-200">{status}</p>}
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
