import { Leaf, ShoppingBag, House, Sprout } from 'lucide-react';
import { useSelector } from 'react-redux';

export default function Navbar({ page, navigate }) {
  const items = useSelector(state => state.cart.items);
  const count = items.reduce((sum, item) => sum + item.quantity, 0);
  return (
    <header className="navbar">
      <button className="brand" onClick={() => navigate('home')} aria-label="Paradise Nursery home">
        <span className="brand-mark"><Leaf size={22} /></span>
        <span>paradise<span className="brand-light">nursery</span></span>
      </button>
      <nav className="nav-links" aria-label="Main navigation">
        <button className={page === 'home' ? 'nav-link active' : 'nav-link'} onClick={() => navigate('home')}><House size={16} /> Home</button>
        <button className={page === 'plants' ? 'nav-link active' : 'nav-link'} onClick={() => navigate('plants')}><Sprout size={16} /> Plants</button>
        <button className={page === 'cart' ? 'nav-link active' : 'nav-link cart-link'} onClick={() => navigate('cart')}><ShoppingBag size={17} /> Cart <span className="cart-count">{count}</span></button>
      </nav>
    </header>
  );
}
