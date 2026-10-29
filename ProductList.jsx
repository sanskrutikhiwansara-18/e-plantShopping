import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../features/cart/CartSlice.jsx';
import { categories } from '../data/plants.js';
import { Check, Plus, ShoppingBag } from 'lucide-react';

export default function ProductList() {
  const dispatch = useDispatch();
  const items = useSelector(state => state.cart.items);
  const isAdded = id => items.some(item => item.id === id);

  return (
    <main className="plant-page" id="plant-list">
      <section className="plant-heading">
        <div className="section-kicker">Find your new favourite</div>
        <h1>Bring home a little <em>green.</em></h1>
        <p>Thoughtful plants for every room, every routine, and every kind of plant parent.</p>
        <div className="plant-meta"><span><LeafIcon /> 18+ plants to explore</span><span><ShoppingBag size={16} /> Easy, happy shopping</span></div>
      </section>
      {categories.map(category => (
        <section className="category-section" key={category.id}>
          <div className="category-title"><div><span className="category-index">0{categories.indexOf(category) + 1}</span><h2>{category.title}</h2><p>{category.subtitle}</p></div><span className="plant-total">{category.plants.length} plants</span></div>
          <div className="plant-grid">
            {category.plants.map(plant => (
              <article className="plant-card" key={plant.id}>
                <div className="plant-image-wrap"><img src={plant.image} alt={plant.name} loading="lazy" /><span className="plant-badge">Houseplant</span></div>
                <div className="plant-card-body"><div className="plant-card-top"><h3>{plant.name}</h3><span className="plant-price">${plant.price.toFixed(2)}</span></div><p>{plant.description}</p><button className={isAdded(plant.id) ? 'add-button added' : 'add-button'} onClick={() => dispatch(addToCart(plant))} disabled={isAdded(plant.id)}>{isAdded(plant.id) ? <><Check size={16} /> Added to cart</> : <><Plus size={16} /> Add to cart</>}</button></div>
              </article>
            ))}
          </div>
        </section>
      ))}
    </main>
  );
}

function LeafIcon() {
  return <span aria-hidden="true" className="mini-leaf">✦</span>;
}
