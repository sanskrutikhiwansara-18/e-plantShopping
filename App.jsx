import { useState } from 'react';
import { ArrowRight, ArrowUpRight, Leaf, Sprout, Sparkles } from 'lucide-react';
import Navbar from './components/Navbar.jsx';
import AboutUs from './components/AboutUs.jsx';
import ProductList from './components/ProductList.jsx';
import CartItem from './components/CartItem.jsx';

export default function App() {
  const [page, setPage] = useState('home');
  const navigate = nextPage => {
    setPage(nextPage);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (page === 'plants') return <div className="app-shell"><Navbar page={page} navigate={navigate} /><ProductList /><Footer navigate={navigate} /></div>;
  if (page === 'cart') return <div className="app-shell"><Navbar page={page} navigate={navigate} /><CartItem navigate={navigate} /><Footer navigate={navigate} /></div>;

  return (
    <div className="app-shell">
      <Navbar page={page} navigate={navigate} />
      <main>
        <section className="hero">
          <div className="hero-shade" />
          <div className="hero-content">
            <div className="hero-pill"><Sparkles size={14} /> A fresh start, naturally</div>
            <p className="hero-overline">PARADISE NURSERY · INDOOR PLANTS</p>
            <h1>Bring nature<br />a little <em>closer.</em></h1>
            <p className="hero-description">Make room for slower mornings, greener corners, and the everyday joy of growing something beautiful.</p>
            <button className="hero-cta" onClick={() => navigate('plants')}>Get Started <ArrowRight size={18} /></button>
            <div className="hero-footnote"><span className="hero-dot" /> Your indoor garden begins here</div>
          </div>
          <div className="hero-side-note"><span>01 / 03</span><span className="side-rule" /><span>GROW YOUR OWN CALM</span></div>
          <div className="hero-bottom-card"><span className="round-leaf"><Leaf size={20} /></span><div><strong>A little green goes a long way.</strong><p>Find the plant that feels like you.</p></div><button onClick={() => navigate('plants')} aria-label="Browse plants"><ArrowUpRight size={19} /></button></div>
        </section>
        <div className="trust-strip"><div><Leaf /><span>Thoughtfully selected plants</span></div><div><Sprout /><span>For first-time plant parents</span></div><div><Sparkles /><span>Make your space feel alive</span></div></div>
        <AboutUs />
        <section className="home-collection"><div><div className="section-kicker">Your green corner awaits</div><h2>Find your next <em>happy place.</em></h2><p>From easy-care favourites to leafy statement plants, meet the little companions that make a space your own.</p><button className="button-primary" onClick={() => navigate('plants')}>Explore the collection <ArrowRight size={17} /></button></div><div className="collection-visual"><img src="https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=1200&q=85" alt="Sunlight falling on a collection of houseplants" /><span className="collection-stamp"><Leaf size={20} /><span>Grow joy<br />at home</span></span></div></section>
      </main>
      <Footer navigate={navigate} />
    </div>
  );
}

function Footer({ navigate }) {
  return <footer className="footer"><button className="footer-brand" onClick={() => navigate('home')}><Leaf size={18} /> paradise nursery</button><span>Thoughtfully bringing nature home.</span><span>© {new Date().getFullYear()} Paradise Nursery</span></footer>;
}
