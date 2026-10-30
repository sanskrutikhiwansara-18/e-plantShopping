import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
  clearCart,
} from './CartSlice.jsx';

import {
  ArrowLeft,
  Minus,
  Plus,
  Trash2,
  ShoppingBag,
  Leaf,
  ShieldCheck,
  CheckCircle,
  PackageCheck,
} from 'lucide-react';

export default function CartItem({ navigate }) {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);

  const [order, setOrder] = useState(null);

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const count = items.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  const handleCheckout = () => {
    if (items.length === 0) return;

    const confirmedOrder = {
      orderNumber: 'PN-' + Date.now().toString().slice(-8),
      items: items.map((item) => ({ ...item })),
      count: count,
      total: total,
      date: new Date().toLocaleString(),
    };

    setOrder(confirmedOrder);
    dispatch(clearCart());

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (order) {
    return (
      <main className="cart-page">
        <section
          style={{
            maxWidth: '760px',
            margin: '40px auto',
            padding: '48px 28px',
            textAlign: 'center',
            background: '#fffefa',
            border: '1px solid #e4e5d8',
            borderRadius: '20px',
          }}
        >
          <CheckCircle
            size={68}
            color="#206044"
            style={{ marginBottom: '20px' }}
          />

          <div className="section-kicker">
            Your order is confirmed
          </div>

          <h1 style={{ marginBottom: '12px' }}>
            Thank you for <em>growing with us!</em>
          </h1>

          <p style={{ color: '#68766c', lineHeight: 1.8 }}>
            Thank you for choosing Paradise Nursery.
            Your demo order confirmation is ready.
          </p>

          <div
            style={{
              margin: '30px 0',
              padding: '24px',
              background: '#f0f5eb',
              borderRadius: '14px',
              textAlign: 'left',
            }}
          >
            <p>
              <strong>Order number:</strong> {order.orderNumber}
            </p>

            <p>
              <strong>Date:</strong> {order.date}
            </p>

            <p>
              <strong>Total items:</strong> {order.count}
            </p>

            <p>
              <strong>Order total:</strong> ${order.total.toFixed(2)}
            </p>

            <hr
              style={{
                border: 0,
                borderTop: '1px solid #d9e3d3',
                margin: '18px 0',
              }}
            />

            <h3 style={{ marginBottom: '14px' }}>
              Your plants
            </h3>

            {order.items.map((item) => (
              <div
                key={item.id}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  gap: '12px',
                  padding: '8px 0',
                }}
              >
                <span>
                  {item.name} × {item.quantity}
                </span>

                <strong>
                  ${(item.price * item.quantity).toFixed(2)}
                </strong>
              </div>
            ))}
          </div>

          <p
            style={{
              fontSize: '14px',
              color: '#68766c',
              marginBottom: '24px',
            }}
          >
            <PackageCheck
              size={17}
              style={{
                verticalAlign: 'middle',
                marginRight: '6px',
              }}
            />
            Demo checkout only. No payment was collected,
            and no real shipment has been arranged.
          </p>

          <button
            type="button"
            className="button-primary"
            onClick={() => {
              setOrder(null);
              navigate('plants');
            }}
          >
            Continue shopping <ArrowLeft size={16} />
          </button>
        </section>
      </main>
    );
  }

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
            {count} {count === 1 ? 'plant' : 'plants'} in your basket
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

      {items.length === 0 ? (
        <section className="empty-cart">
          <div className="empty-cart-icon">
            <ShoppingBag size={32} />
          </div>

          <h2>
            Your basket is ready for a little green.
          </h2>

          <p>
            You haven't added any plants yet. Find a favourite
            to get started.
          </p>

          <button
            type="button"
            className="button-primary"
            onClick={() => navigate('plants')}
          >
            Explore plants
            <ArrowLeft size={16} className="arrow-flip" />
          </button>
        </section>
      ) : (
        <div className="cart-layout">
          <section className="cart-items-list">
            <div className="cart-list-head">
              <span>Plant details</span>
              <span>Quantity</span>
              <span>Total</span>
            </div>

            {items.map((item) => (
              <article className="cart-row" key={item.id}>
                <div className="cart-product">
                  <img src={item.image} alt={item.name} />

                  <div>
                    <h3>{item.name}</h3>

                    <p>${item.price.toFixed(2)} each</p>

                    <button
                      type="button"
                      className="remove-button"
                      onClick={() =>
                        dispatch(removeFromCart(item.id))
                      }
                    >
                      <Trash2 size={14} />
                      Remove
                    </button>
                  </div>
                </div>

                <div className="quantity-control">
                  <button
                    type="button"
                    aria-label="Decrease quantity"
                    onClick={() =>
                      dispatch(decreaseQuantity(item.id))
                    }
                  >
                    <Minus size={14} />
                  </button>

                  <span>{item.quantity}</span>

                  <button
                    type="button"
                    aria-label="Increase quantity"
                    onClick={() =>
                      dispatch(increaseQuantity(item.id))
                    }
                  >
                    <Plus size={14} />
                  </button>
                </div>

                <strong className="line-total">
                  ${(item.price * item.quantity).toFixed(2)}
                </strong>
              </article>
            ))}
          </section>

          <aside className="order-summary">
            <h2>Order summary</h2>

            <div className="summary-line">
              <span>Items ({count})</span>
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
              onClick={handleCheckout}
            >
              Checkout <span>→</span>
            </button>

            <div className="secure-note">
              <ShieldCheck size={15} />
              Demo checkout — no payment required
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
