import Link from "next/link";

export default function HomePage() {
  return (
    <section style={{ padding: "40px" }}>
      <h1>PDF-Ready Deterministic Infrastructure</h1>

      <p>
        Buy licensed, verifiable infrastructure bundles with deterministic delivery and integrity verification.
      </p>

      <div style={{ marginTop: "20px" }}>
        <Link href="/catalog">Browse Catalog</Link>
      </div>
    </section>
  );
}
