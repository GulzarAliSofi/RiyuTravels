import React from "react";
import PageHeader from "../components/PageHeader";
import { Link } from "react-router-dom";
import destinations from "../data/destinations";

export default function Destinations() {
  document.title = "Destinations — ReyuTravels";

  return (
    <section className="container">
      <PageHeader
        title="Destinations in Jammu & Kashmir"
        subtitle="Handpicked destinations across the valley and highlands."
      />
      <div className="grid" style={{ marginTop: 12 }}>
        {destinations.map((d) => (
          <Link
            key={d.id}
            to={`/destinations/${d.id}`}
            style={{ textDecoration: "none" }}
          >
            <article className="card">
              <img src={d.image} alt={d.alt || d.name} />
              <h3>{d.name}</h3>
              <p>{d.short}</p>
            </article>
          </Link>
        ))}
      </div>
    </section>
  );
}
