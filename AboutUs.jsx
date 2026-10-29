import { Heart, Sun, Leaf } from 'lucide-react';

export default function AboutUs() {
  return (
    <section className="about-section">
      <div className="section-kicker">A little more green, every day</div>
      <h2>Plants make a place feel like <em>home.</em></h2>
      <p className="about-copy">At Paradise Nursery, we believe caring for plants is a small daily ritual that brings calm, joy, and connection to nature. We curate approachable houseplants for real homes and real routines, whether you are just starting your plant journey or adding to your indoor jungle.</p>
      <div className="values-grid">
        <article><span className="value-icon"><Heart /></span><h3>Chosen with care</h3><p>We pick plants that bring beauty and personality to your space.</p></article>
        <article><span className="value-icon"><Sun /></span><h3>Guidance that grows</h3><p>Simple care notes help you feel confident as your plants thrive.</p></article>
        <article><span className="value-icon"><Leaf /></span><h3>More nature indoors</h3><p>Small green moments can make everyday spaces feel better.</p></article>
      </div>
    </section>
  );
}
