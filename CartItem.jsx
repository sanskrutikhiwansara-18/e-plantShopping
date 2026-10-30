import { useDispatch, useSelector } from 'react-redux';
import { updateQuantity, removeItem } from './CartSlice.jsx';

import {
  ArrowLeft,
  Minus,
  Plus,
  Trash2,
  ShoppingBag,
  ShieldCheck,
  Leaf,
} from 'lucide-react';

export default function CartItem({ navigate }) {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart.items);

  // Support both cost and price properties.
  const getCost = (item) => Number(item.cost ?? item.price ?? 0);

  // Calculate total cart price.
  const total = cart.reduce(
    (sum, item) => sum + getCost(item) * item.quantity,
    0
  );

  // Calculate total number of plants.
  const itemCount = cart.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  // Increase item quantity.
  const handleIncrement = (item) => {
    dispatch(
      updateQuantity({
        id: item.id,
        quantity: item.quantity + 1,
      })
    );
  };

  // Decrease item quantity.
  const handleDecrement = (item) => {
    dispatch(
      updateQuantity({
        id: item.id,
        quantity: item.quantity - 1,
      })
    );
  };

  // Remove item from cart.
  const handleRemove = (item) => {
    dispatch(removeItem(item.id));
  };

  return (
    <main className="cart-page">

      <div className="cart-title-row">
        <div>
          <div className="section-kicker">
            Your little green collection
          </div>

          <h1>
            Shopping <em>cart.</em>
          </h1>

          <p>
            {itemCount} {itemCount === 1 ? 'plant' : 'plants'} in your basket
          </p>
        </div>

        <button
          type="button"
          className="continue-link"
          onClick={() => navigate('plants')}
        >
          <ArrowLeft size={16} />
          Continue shopping
        </button>
      </div>

      {cart.length === 0 ? (

        <section className="empty-cart">

          <div className="empty-cart-icon">
            <ShoppingBag size={32} />
          </div>

          <h2>
            Your basket is ready for a little green.
          </h2>

          <p>
            You haven't added any plants yet.
            Find a favourite to get started.
          </p>

          <button
            type="button"
            className="button-primary"
            onClick={() => navigate('plants')}
          >
            Explore plants
          </button>

        </section>

      ) : (

        <div className="cart-layout cart-container">

          <section className="cart-items-list">

            <div className="cart-list-head">
              <span>Plant details</span>
              <span>Quantity</span>
              <span>Total</span>
            </div>

            <div className="cart-container">

              {cart.map((item) => (

                <article
                  className="cart-row"
                  key={item.id}
                >

                  <div className="cart-product">

                    <img
                      src={item.image}
                      alt={item.name}
                    />

                    <div>

                      <h3>{item.name}</h3>

                      <p>
                        ${getCost(item).toFixed(2)} each
                      </p>

                      <button
                        type="button"
                        className="remove-button"
                        onClick={() => handleRemove(item)}
                      >
                        <Trash2 size={14} />
                        Delete
                      </button>

                    </div>

                  </div>

                  <div className="quantity-control">

                    <button
                      type="button"
                      aria-label="Decrease quantity"
                      onClick={() => handleDecrement(item)}
                    >
                      <Minus size={14} />
                    </button>

                    <span>{item.quantity}</span>

                    <button
                      type="button"
                      aria-label="Increase quantity"
                      onClick={() => handleIncrement(item)}
                    >
                      <Plus size={14} />
                    </button>

                  </div>

                  <strong className="line-total">
                    ${(getCost(item) * item.quantity).toFixed(2)}
                  </strong>

                </article>

              ))}

            </div>

          </section>

          <aside className="order-summary">

            <h2>Order summary</h2>

            <div className="summary-line">
              <span>Items ({itemCount})</span>
              <span>${total.toFixed(2)}</span>
            </div>

            <div className="summary-line">
              <span>Delivery</span>
              <span className="free-label">Free</span>
            </div>

            <div className="summary-line total-line">
              <span>Total</span>
              <strong>${total.toFixed(2)}</strong>
            </div>

            <button
              type="button"
              className="checkout-button"
              onClick={() =>
                window.alert(
                  'Coming Soon! Checkout will be available shortly.'
                )
              }
            >
              Checkout <span>→</span>
            </button>

            <div className="secure-note">
              <ShieldCheck size={15} />
              Checkout coming soon
            </div>

            <div className="summary-plant">
              <Leaf size={17} />

              <span>
                Good things grow with a little care.
              </span>
            </div>

          </aside>

        </div>

      )}

    </main>
  );
}