import { useMemo, useState } from 'react';
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
  const [cartItems, setCartItems] = useState([]);

  const cartCount = useMemo(
    () => cartItems.reduce((total, item) => total + item.quantity, 0),
    [cartItems],
  );

  const cartTotal = useMemo(
    () => cartItems.reduce((total, item) => total + item.quantity * item.priceValue, 0),
    [cartItems],
  );

  const handleAddToCart = (product) => {
    setCartItems((prev) => {
      const existing = prev.find((entry) => entry.name === product.name);
      if (existing) {
        return prev.map((entry) =>
          entry.name === product.name
            ? { ...entry, quantity: entry.quantity + 1 }
            : entry,
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const handleClearCart = () => setCartItems([]);

  return (
    <div className="cosmic-bg min-h-screen text-slate-100">
      <div className="cosmic-overlay" aria-hidden />
      <Header cartCount={cartCount} cartItems={cartItems} cartTotal={cartTotal} onClearCart={handleClearCart} />
      <main className="space-y-12 md:space-y-16">
        <Products onAddToCart={handleAddToCart} />
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
