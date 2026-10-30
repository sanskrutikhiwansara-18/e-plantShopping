import { Heart, Sun, Leaf } from 'lucide-react';

export default function AboutUs() {
  return (
    <div className="about-us-container">
      <section className="about-section">

        <div className="section-kicker">
          A little more green, every day
        </div>

        <h2>
          Plants make a place feel like <em>home.</em>
        </h2>

        <p className="about-copy">
          Welcome to Paradise Nursery! We believe plants make
          every home more beautiful, peaceful, and refreshing.
          Our mission is to offer quality indoor plants that
          bring nature closer to everyone, from first-time
          plant parents to experienced plant lovers.
        </p>

        <div className="values-grid">

          <article>
            <span className="value-icon"><Heart /></span>
            <h3>Chosen with care</h3>
            <p>We select beautiful plants for your everyday spaces.</p>
          </article>

          <article>
            <span className="value-icon"><Sun /></span>
            <h3>Guidance that grows</h3>
            <p>Simple care guidance helps your plants thrive.</p>
          </article>

          <article>
            <span className="value-icon"><Leaf /></span>
            <h3>More nature indoors</h3>
            <p>Bring freshness, calm, and greenery into your home.</p>
          </article>

        </div>
      </section>
    </div>
  );
}