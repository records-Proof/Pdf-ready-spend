import Link from "next/link";

export default function HomePage() {
  return (
    <section className="hero">
      <div className="heroInner">
        <div className="kicker">CATALOG • VERIFIED DELIVERY • LICENSING</div>
        <h1>PDF-Ready Deterministic Infrastructure</h1>
        <p className="sub">
          Buy licensed, verifiable infrastructure bundles with deterministic delivery and integrity verification.
        </p>

        <div className="ctaRow">
          <Link className="btn" href="/catalog">Browse Catalog</Link>
          <Link className="btn ghost" href="/cart">View Cart</Link>
        </div>
      </div>
    </section>
  );
}
