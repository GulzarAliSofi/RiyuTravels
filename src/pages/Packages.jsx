import React from "react";
import PageHeader from "../components/PageHeader";
import packages from "../data/packages";

export default function Packages() {
  document.title = "Packages — ReyuTravels";

  return (
    <section className="container">
      <PageHeader
        title="Packages"
        subtitle="Curated trips and flexible itineraries."
      />
      <div className="grid" style={{ marginTop: 12 }}>
        {packages.map((p) => (
          <article key={p.id} className="card">
            <img src={p.image} alt={p.alt || p.title} />
            <h3>{p.title}</h3>
            <p>{p.summary}</p>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: 8,
              }}
            >
              <strong>₹{p.price}</strong>
              <a href={`/packages/${p.id}`}>View Details</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
