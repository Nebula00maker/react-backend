
import React from 'react';
import './AboutUs.css';

const AboutUs = () => (
  <div className="aboutus-modern">
    <div className="aboutus-hero">
      <span className="aboutus-badge"><span className="aboutus-badge-dot"></span>Est. 2022 · Your City</span>
      <h1>Products made<br /><em>with purpose,</em><br />not shortcuts.</h1>
      <p className="aboutus-desc">At GreenLeaf, we believe what goes on your body matters as much as what goes in it. We make home and personal care products that are better for you — and the planet.</p>
      <div className="aboutus-actions">
        <a className="aboutus-btn-green" href="/product">Shop our collection</a>
        <a className="aboutus-btn-outline" href="#story">Read our story</a>
      </div>
    </div>

    <div className="aboutus-story" id="story">
      <div className="aboutus-story-text">
        <div className="aboutus-section-eyebrow">Our story</div>
        <h2>Started in a kitchen.<br />Now in <em>homes everywhere.</em></h2>
        <p>In 2022, our founder Maya Chen was frustrated by the lack of safe, effective cleaning products for her family. She started making her own, and soon friends and neighbors wanted them too. Within a year, GreenLeaf was born — a company built on the idea that you shouldn't have to choose between effective and safe.</p>
        <div className="aboutus-story-pull">
          <p>We started because we needed something better. We kept going because we realized everyone else did too.</p>
          <cite>— Maya Chen, Founder & CEO</cite>
        </div>
        <p>Today we ship to all 50 states and 12 countries. Our formulas are still small-batch, transparent, and made with ingredients you can pronounce.</p>
      </div>
      <div className="aboutus-story-reviews">
        <div className="aboutus-review-card">
          <div className="aboutus-review-stars">★★★★★</div>
          <p className="aboutus-review-text">"I've tried every natural cleaner out there. Nothing else actually works. GreenLeaf is the only one that's stayed in my home."</p>
          <div className="aboutus-review-author">
            <div className="aboutus-review-avatar av1">JM</div>
            <div>
              <div className="aboutus-review-name">Jessica M.</div>
              <div className="aboutus-review-loc">Austin, TX</div>
            </div>
            <span className="aboutus-review-verified">✓ Verified</span>
          </div>
        </div>
        <div className="aboutus-review-card">
          <div className="aboutus-review-stars">★★★★★</div>
          <p className="aboutus-review-text">"My kids have eczema. Switching to GreenLeaf products was a game-changer. Their skin cleared up in two weeks."</p>
          <div className="aboutus-review-author">
            <div className="aboutus-review-avatar av2">DR</div>
            <div>
              <div className="aboutus-review-name">David R.</div>
              <div className="aboutus-review-loc">Seattle, WA</div>
            </div>
            <span className="aboutus-review-verified">✓ Verified</span>
          </div>
        </div>
        <div className="aboutus-review-card">
          <div className="aboutus-review-stars">★★★★★</div>
          <p className="aboutus-review-text">"I subscribed 2 years ago and have never missed a delivery. The quality is unreal for the price."</p>
          <div className="aboutus-review-author">
            <div className="aboutus-review-avatar av3">AP</div>
            <div>
              <div className="aboutus-review-name">Anika P.</div>
              <div className="aboutus-review-loc">Chicago, IL</div>
            </div>
            <span className="aboutus-review-verified">✓ Verified</span>
          </div>
        </div>
      </div>
    </div>

    <div className="aboutus-values">
      <div className="aboutus-values-header">
        <h2>What we <em>stand for</em></h2>
        <p>Every decision we make — from formula to packaging to shipping — flows from these four commitments.</p>
      </div>
      <div className="aboutus-values-list">
        <div className="aboutus-val-card">
          <span className="aboutus-val-emoji">🌿</span>
          <h3 className="aboutus-val-title">Clean ingredients only</h3>
          <p className="aboutus-val-desc">Every formula starts with a "no" list. Parabens, sulfates, synthetic fragrances — none of it. If we wouldn't use it ourselves, it's not in our products.</p>
        </div>
        <div className="aboutus-val-card">
          <span className="aboutus-val-emoji">📋</span>
          <h3 className="aboutus-val-title">Full transparency</h3>
          <p className="aboutus-val-desc">We publish every ingredient, every supplier, every third-party test. No proprietary blends, no fine print. You deserve to know exactly what you're buying.</p>
        </div>
        <div className="aboutus-val-card">
          <span className="aboutus-val-emoji">🌍</span>
          <h3 className="aboutus-val-title">Planet-first packaging</h3>
          <p className="aboutus-val-desc">100% recycled and recyclable packaging. Refill programs for our most popular products. We're working toward zero-waste by 2027.</p>
        </div>
        <div className="aboutus-val-card">
          <span className="aboutus-val-emoji">💸</span>
          <h3 className="aboutus-val-title">Fair pricing, always</h3>
          <p className="aboutus-val-desc">Clean shouldn't be a luxury. We keep margins lean and pass the savings to you. Better products shouldn't cost more — they just need better priorities.</p>
        </div>
      </div>
    </div>

    <div className="aboutus-team">
      <div className="aboutus-team-header">
        <h2>Meet the team<br />behind the <em>bottles</em></h2>
        <p className="aboutus-team-header-right">A small, passionate crew of scientists, designers, and advocates who genuinely use every product we make.</p>
      </div>
      <div className="aboutus-team-list">
        <div className="aboutus-member-card">
          <div className="aboutus-member-photo mp1">MC</div>
          <div className="aboutus-member-name">Maya Chen</div>
          <div className="aboutus-member-role">Founder & CEO</div>
        </div>
        <div className="aboutus-member-card">
          <div className="aboutus-member-photo mp2">TK</div>
          <div className="aboutus-member-name">Tom Kaur</div>
          <div className="aboutus-member-role">Head of Formulation</div>
        </div>
        <div className="aboutus-member-card">
          <div className="aboutus-member-photo mp3">LP</div>
          <div className="aboutus-member-name">Laura Pham</div>
          <div className="aboutus-member-role">Brand & Creative</div>
        </div>
        <div className="aboutus-member-card">
          <div className="aboutus-member-photo mp4">RB</div>
          <div className="aboutus-member-name">Ryan Brooks</div>
          <div className="aboutus-member-role">Supply Chain</div>
        </div>
        <div className="aboutus-member-card">
          <div className="aboutus-member-photo mp5">NG</div>
          <div className="aboutus-member-name">Nadia Garcia</div>
          <div className="aboutus-member-role">Customer Love</div>
        </div>
      </div>
    </div>

    <div className="aboutus-sustain">
      <div className="aboutus-sustain-left">
        <div className="aboutus-section-eyebrow">Sustainability</div>
        <h2>We mean it when we say we care about the planet.</h2>
        <p>We're not just slapping "eco-friendly" on our label. We've restructured our entire supply chain to minimize environmental impact, from the farm to your front door.</p>
        <p>As a certified B Corporation and 1% for the Planet member, we're held accountable by third parties — not just our own marketing.</p>
        <div className="aboutus-sustain-badges">
          <span className="aboutus-badge">✓ B Corp Certified</span>
          <span className="aboutus-badge">✓ 1% for the Planet</span>
          <span className="aboutus-badge">✓ EWG Verified</span>
          <span className="aboutus-badge">✓ Cruelty-Free</span>
        </div>
      </div>
      <div className="aboutus-sustain-right">
        <div className="aboutus-sustain-stat">
          <div className="aboutus-ss-num">2M+</div>
          <div className="aboutus-ss-text"><strong>Plastic bottles saved</strong><p>Through our refill program since launch.</p></div>
        </div>
        <div className="aboutus-sustain-stat">
          <div className="aboutus-ss-num">$380K</div>
          <div className="aboutus-ss-text"><strong>Donated to conservation</strong><p>Via our 1% for the Planet pledge.</p></div>
        </div>
        <div className="aboutus-sustain-stat">
          <div className="aboutus-ss-num">Carbon<br />neutral</div>
          <div className="aboutus-ss-text"><strong>Shipping & operations</strong><p>Offset 100% since 2023.</p></div>
        </div>
      </div>
    </div>

    <div className="aboutus-cta">
      <h2>Ready to make<br />the <em>switch?</em></h2>
      <p>Join 50,000+ households who've made their homes a little cleaner, safer, and kinder to the planet.</p>
      <div className="aboutus-cta-buttons">
        <a className="aboutus-btn-lg aboutus-btn-lg-green" href="/product">Shop bestsellers</a>
        <a className="aboutus-btn-lg aboutus-btn-lg-orange" href="/product">Get the starter kit</a>
      </div>
    </div>
  </div>
);

export default AboutUs;
