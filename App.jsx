import { useState } from 'react';
import { Leaf } from 'lucide-react';

import Navbar from './Navbar.jsx';
import AboutUs from './AboutUs.jsx';
import ProductList from './ProductList.jsx';
import CartItem from './CartItem.jsx';

export default function App() {
  const [page, setPage] = useState('home');

  const navigate = (nextPage) => {
    setPage(nextPage);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // Coursera required Get Started handler
  const handleGetStartedClick = () => {
    navigate('plants');
  };

  return (
    <div className="app-container app-shell">

      {/* Shared navigation */}
      <Navbar page={page} navigate={navigate} />

      {/* Home page */}
      {page === 'home' && (
        <main>
          <section className="hero background-image">

            <div className="hero-shade"></div>

            <div className="hero-content">

              <p className="hero-overline">
                PARADISE NURSERY · INDOOR PLANTS
              </p>

              <h1>Welcome to Paradise Nursery</h1>

              <p className="hero-description">
                Discover beautiful indoor plants and bring
                nature closer to your home.
              </p>

              <button
                type="button"
                className="hero-cta"
                onClick={handleGetStartedClick}
              >
                Get Started →
              </button>

            </div>
          </section>

          <AboutUs />
        </main>
      )}

      {/* Product listing page */}
      {page === 'plants' && (
        <ProductList navigate={navigate} />
      )}

      {/* Shopping cart page */}
      {page === 'cart' && (
        <CartItem navigate={navigate} />
      )}

      {/* Footer */}
      <footer className="footer">

        <button
          type="button"
          className="footer-brand"
          onClick={() => navigate('home')}
        >
          <Leaf size={18} />
          Paradise Nursery
        </button>

        <span>
          Bringing nature closer to your home.
        </span>

      </footer>

    </div>
  );
}