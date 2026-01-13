import React from "react";
import PageHeader from "../components/PageHeader";

export default function About() {
  return (
    <section className="container">
      <PageHeader
        title="About ReyuTravels"
        subtitle="We design responsible, locally-rooted trips across Jammu & Kashmir — curated for comfort, discovery and authentic connections."
      />

      <div
        className="grid"
        style={{ gridTemplateColumns: "1fr 320px", gap: 20 }}
      >
        <div>
          <h3 className="text-xl font-semibold">Our mission</h3>
          <p className="text-gray-700 mt-3">
            At ReyuTravels we craft small-group and custom itineraries that
            highlight the natural beauty and cultural richness of Jammu &
            Kashmir. We prioritise safety, local partnerships and low-impact
            experiences so travellers can enjoy meaningful visits while
            contributing to local livelihoods.
          </p>

          <h4 className="mt-6 font-semibold">What we value</h4>
          <div
            className="grid"
            style={{
              gridTemplateColumns: "repeat(2, minmax(0,1fr))",
              gap: 12,
              marginTop: 12,
            }}
          >
            <div className="card">
              <div className="text-lg font-semibold">Responsible Tourism</div>
              <div className="text-sm text-gray-600 mt-2">
                We work with local guides, support community initiatives and
                promote low-impact activities.
              </div>
            </div>
            <div className="card">
              <div className="text-lg font-semibold">Safety & Comfort</div>
              <div className="text-sm text-gray-600 mt-2">
                Acclimatized itineraries, vetted partners and clear pre-trip
                guidance for safe travel.
              </div>
            </div>
            <div className="card">
              <div className="text-lg font-semibold">Authentic Experiences</div>
              <div className="text-sm text-gray-600 mt-2">
                Local interactions, home-style meals and cultural visits that
                feel real, not staged.
              </div>
            </div>
            <div className="card">
              <div className="text-lg font-semibold">Flexible Planning</div>
              <div className="text-sm text-gray-600 mt-2">
                Tailor trips for families, couples or adventure seekers with
                easy customization and support.
              </div>
            </div>
          </div>

          <h4 className="mt-6 font-semibold">Meet the team</h4>
          <div
            className="grid"
            style={{
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 12,
              marginTop: 12,
            }}
          >
            <div className="card" style={{ textAlign: "center" }}>
              <img
                src="/assets/images/houseboat.svg"
                alt="Team"
                style={{ width: 64, height: 64, margin: "0 auto" }}
              />
              <div className="font-semibold mt-2">Aisha</div>
              <div className="text-sm text-gray-600">Founder & Lead Guide</div>
            </div>
            <div className="card" style={{ textAlign: "center" }}>
              <img
                src="/assets/images/valley.svg"
                alt="Team"
                style={{ width: 64, height: 64, margin: "0 auto" }}
              />
              <div className="font-semibold mt-2">Rizwan</div>
              <div className="text-sm text-gray-600">Operations Manager</div>
            </div>
            <div className="card" style={{ textAlign: "center" }}>
              <img
                src="/assets/images/leh-pkg.svg"
                alt="Team"
                style={{ width: 64, height: 64, margin: "0 auto" }}
              />
              <div className="font-semibold mt-2">Sana</div>
              <div className="text-sm text-gray-600">Guest Relations</div>
            </div>
          </div>

          <div className="mt-6 p-4 bg-accent/10 rounded-lg">
            <strong>Our promise:</strong> ethical operations, local support and
            honest advice so your trip leaves a positive mark.
          </div>
        </div>

        <aside>
          <div className="card">
            <h4 className="font-semibold">By the numbers</h4>
            <div style={{ display: "flex", gap: 12, marginTop: 12 }}>
              <div style={{ textAlign: "center", flex: 1 }}>
                <div className="text-2xl font-extrabold">500+</div>
                <div className="text-sm text-gray-600">Happy travellers</div>
              </div>
              <div style={{ textAlign: "center", flex: 1 }}>
                <div className="text-2xl font-extrabold">30+</div>
                <div className="text-sm text-gray-600">Local partners</div>
              </div>
            </div>
            <div style={{ marginTop: 12 }}>
              <h4 className="font-semibold">What travellers say</h4>
              <blockquote style={{ marginTop: 8, color: "#334155" }}>
                "An unforgettable trip — local guides made the difference." —
                Priya
              </blockquote>
            </div>
          </div>

          <div className="card mt-4">
            <h4 className="font-semibold">Ready to plan?</h4>
            <p className="text-sm text-gray-600 mt-2">
              Contact us for tailored itineraries and sample plans for your
              group.
            </p>
            <a
              href="/contact"
              className="inline-block mt-4 bg-primary text-white px-4 py-2 rounded"
            >
              Contact us
            </a>
          </div>
        </aside>
      </div>
    </section>
  );
}
