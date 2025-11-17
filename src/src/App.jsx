import Hero from './components/Hero';
import FeatureRows from './components/FeatureRows';
import CTASection from './components/CTASection';

const App = () => {
  return (
    <div className="min-h-screen bg-navy text-slate-50">
      <Hero />
      <FeatureRows />
      <CTASection />
      <footer className="section-shell border-t border-white/5 text-sm text-slate-400">
        <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <span>Boostmania-inspired layout demo</span>
          <div className="flex gap-3 text-slate-300">
            <a href="#" className="hover:text-white">
              Terms
            </a>
            <a href="#" className="hover:text-white">
              Privacy
            </a>
            <a href="#" className="hover:text-white">
              Support
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
