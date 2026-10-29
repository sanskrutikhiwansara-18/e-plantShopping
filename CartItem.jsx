import { useDispatch, useSelector } from 'react-redux';
import { increaseQuantity, decreaseQuantity, removeFromCart } from '../features/cart/CartSlice.jsx';
import { ArrowLeft, Minus, Plus, Trash2, ShoppingBag, Leaf, ShieldCheck } from 'lucide-react';

export default function CartItem({ navigate }) {
  const items = useSelector(state => state.cart.items);
  const dispatch = useDispatch();
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const count = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <main className="cart-page">
      <div className="cart-title-row"><div><div className="section-kicker">Your little green collection</div><h1>Shopping <em>cart.</em></h1><p>{count} {count === 1 ? 'plant' : 'plants'} in your basket</p></div><button className="continue-link" onClick={() => navigate('plants')}><ArrowLeft size={16} /> Continue shopping</button></div>
      {items.length === 0 ? (
        <section className="empty-cart"><div className="empty-cart-icon"><ShoppingBag size={32} /></div><h2>Your basket is ready for a little green.</h2><p>You haven't added any plants yet. Find a favourite to get started.</p><button className="button-primary" onClick={() => navigate('plants')}>Explore plants <ArrowLeft size={16} className="arrow-flip" /></button></section>
      ) : (
        <div className="cart-layout">
          <section className="cart-items-list"><div className="cart-list-head"><span>Plant details</span><span>Quantity</span><span>Total</span></div>
            {items.map(item => <article className="cart-row" key={item.id}><div className="cart-product"><img src={item.image} alt={item.name} /><div><h3>{item.name}</h3><p>${item.price.toFixed(2)} each</p><button className="remove-button" onClick={() => dispatch(removeFromCart(item.id))}><Trash2 size={14} /> Remove</button></div></div><div className="quantity-control"><button aria-label={`Decrease ${item.name} quantity`} onClick={() => dispatch(decreaseQuantity(item.id))}><Minus size={14} /></button><span>{item.quantity}</span><button aria-label={`Increase ${item.name} quantity`} onClick={() => dispatch(increaseQuantity(item.id))}><Plus size={14} /></button></div><strong className="line-total">${(item.price * item.quantity).toFixed(2)}</strong></article>)}
          </section>
          <aside className="order-summary"><h2>Order summary</h2><div className="summary-line"><span>Items ({count})</span><span>${total.toFixed(2)}</span></div><div className="summary-line"><span>Delivery</span><span className="free-label">Free</span></div><div className="summary-line total-line"><span>Total</span><strong>${total.toFixed(2)}</strong></div><button className="checkout-button" onClick={() => window.alert('Coming Soon — checkout will be available shortly!')}>Checkout <span>→</span></button><div className="secure-note"><ShieldCheck size={15} /> Secure checkout coming soon</div><div className="summary-plant"><Leaf size={17} /><span>Good things grow with a little care.</span></div></aside>
        </div>
      )}
    </main>
  );
}
