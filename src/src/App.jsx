import ContactForm from './components/ContactForm';
import CustomerPortal from './components/CustomerPortal';
import FAQ from './components/FAQ';
import Feedback from './components/Feedback';
import Footer from './components/Footer';
import Header from './components/Header';
import Products from './components/Products';
import Terms from './components/Terms';
import TrustedAdvisor from './components/TrustedAdvisor';

const App = () => {
  return (
    <div className="cosmic-bg min-h-screen text-slate-100">
      <div className="cosmic-overlay" aria-hidden />
      <Header />
      <main className="space-y-12 md:space-y-16">
        <Products />
        <ContactForm />
        <FAQ />
        <Feedback />
        <Terms />
        <TrustedAdvisor />
        <CustomerPortal />
      </main>
      <Footer />
    </div>
  );
};

export default App;
