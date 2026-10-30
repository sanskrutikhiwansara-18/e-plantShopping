import { useSelector, useDispatch } from 'react-redux';
import { addItem } from './CartSlice.jsx';
import { categories } from './plants.js';
import { Check, Plus, ShoppingBag, Leaf } from 'lucide-react';

export default function ProductList({ navigate }) {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart.items);

  const addedToCart = {};

  cart.forEach((plant) => {
    addedToCart[plant.name] = true;
  });

  const cartCount = cart.reduce(
    (total, plant) => total + plant.quantity,
    0
  );

  // Required plant array with category grouping
  const plantsArray = categories.flatMap((category) =>
    category.plants.map((plant) => ({
      ...plant,
      category: category.title,
      cost: plant.cost ?? plant.price,
    }))
  );

  return (
    <main className="plant-page" id="plant-list">

      <div className="product-list-navbar">
        <button onClick={() => navigate('home')}>Home</button>
        <button onClick={() => navigate('plants')}>Plants</button>
        <button onClick={() => navigate('cart')}>
          <ShoppingBag size={16} />
          Cart ({cartCount})
        </button>
      </div>

      <section className="plant-heading">
        <div className="section-kicker">
          Find your new favourite
        </div>

        <h1>
          Bring home a little <em>green.</em>
        </h1>

        <p>
          Thoughtful plants for every room, every routine,
          and every kind of plant parent.
        </p>

        <div className="plant-meta">
          <span>
            <Leaf size={16} /> 18 plants to explore
          </span>

          <span>
            <ShoppingBag size={16} /> Easy, happy shopping
          </span>
        </div>
      </section>

      {categories.map((category) => (
        <section
          className="category-section"
          key={category.id}
        >
          <div className="category-title">
            <div>
              <span className="category-index">
                {category.title}
              </span>

              <h2>{category.title}</h2>

              <p>{category.subtitle}</p>
            </div>

            <span className="plant-total">
              {category.plants.length} plants
            </span>
          </div>

          <div className="plant-grid">
            {category.plants.map((plant) => (
              <article
                className="product-list plant-card"
                key={plant.id}
              >
                <div className="plant-image-wrap">
                  <img
                    src={plant.image}
                    alt={plant.name}
                    loading="lazy"
                  />

                  <span className="plant-badge">
                    Houseplant
                  </span>
                </div>

                <div className="plant-card-body">
                  <div className="plant-card-top">
                    <h3>{plant.name}</h3>

                    <span className="plant-price">
                      ${(plant.cost ?? plant.price).toFixed(2)}
                    </span>
                  </div>

                  <p>{plant.description}</p>

                  <button
                    type="button"
                    className={
                      addedToCart[plant.name]
                        ? 'add-button added'
                        : 'add-button'
                    }
                    disabled={Boolean(addedToCart[plant.name])}
                    onClick={() => dispatch(addItem({
                      ...plant,
                      cost: plant.cost ?? plant.price,
                    }))}
                  >
                    {addedToCart[plant.name] ? (
                      <>
                        <Check size={16} />
                        Added to cart
                      </>
                    ) : (
                      <>
                        <Plus size={16} />
                        Add to Cart
                      </>
                    )}
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>
      ))}

      {/* Required product array reference */}
      <div hidden>{plantsArray.length}</div>

    </main>
  );
}