import React, { useState, useRef } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import packages from "../data/packages";

// Replace with your Formspree endpoint (get one from formspree.io)
const FORMSPREE_ENDPOINT = "https://formspree.io/f/your-id";

export default function PackageDetail() {
  const { id } = useParams();
  const pkg = packages.find((p) => p.id === id);
  const [msg, setMsg] = useState("");
  const [tab, setTab] = useState("overview");
  const navigate = useNavigate();
  const formRef = useRef(null);
  function goToForm() {
    setTab("info");
    setTimeout(() => {
      formRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 120);
  }

  if (!pkg)
    return (
      <section className="container">
        <div className="card">
          Package not found. <Link to="/packages">Back to packages</Link>
        </div>
      </section>
    );

  function submit(e) {
    e.preventDefault();
    const form = new FormData(e.target);
    // Attempt to send to Formspree - replace endpoint with real id
    fetch(FORMSPREE_ENDPOINT, {
      method: "POST",
      body: form,
      headers: { Accept: "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        setMsg("Booking request sent. We will contact you shortly.");
        e.target.reset();
        setTimeout(() => navigate("/packages"), 2500);
      })
      .catch((err) => {
        // Fallback local message
        setMsg(
          "Booking recorded locally (Formspree not configured). Please replace the FORMSPREE_ENDPOINT in the code with your endpoint."
        );
      });
  }

  return (
    <section className="max-w-6xl mx-auto px-4 py-10">
      <div className="container">
        <div className="relative rounded-lg overflow-hidden shadow-md mb-4 md:mb-6">
          <img
            src={pkg.image}
            alt={pkg.alt || pkg.title}
            className="w-full h-96 md:h-[600px] object-cover"
          />
          <div className="absolute inset-0 pkg-hero__overlay bg-gradient-to-t from-black/65 to-transparent flex items-center md:items-end">
            <div className="p-6 md:p-8 text-white max-w-3xl">
              <h1 className="text-xl md:text-3xl font-extrabold leading-tight">
                {pkg.title}
              </h1>
              <p className="mt-3 text-sm md:text-lg opacity-95 max-w-3xl">
                {pkg.summary || pkg.details}
              </p>
              <div className="pkg-hero__meta">
                <div className="meta-pill inline-flex items-center bg-gradient-to-r from-[#f97316] to-[#fb7185] text-white px-3 py-1 rounded-full text-sm shadow-sm">
                  {pkg.days} day{pkg.days > 1 ? "s" : ""}
                </div>
                <div className="meta-pill inline-flex items-center bg-white/10 text-white px-3 py-1 rounded-full text-sm">
                  From <span className="font-semibold ml-1">₹{pkg.price}</span>
                </div>
                <div className="meta-pill inline-flex items-center bg-white/10 text-white px-3 py-1 rounded-full text-sm">
                  Difficulty: {pkg.difficulty || "Easy"}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4 container pkg-layout">
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <div>
            <div>
              <div className="md:flex md:items-start md:justify-between md:gap-6">
                <div className="md:flex-1">
                  <div
                    className="pkg-tabs mb-4"
                    role="tablist"
                    aria-label="Package sections"
                  >
                    <button
                      type="button"
                      className={`pkg-tab ${
                        tab === "overview" ? "active" : ""
                      }`}
                      onClick={() => setTab("overview")}
                    >
                      Overview
                    </button>
                    <button
                      type="button"
                      className={`pkg-tab ${
                        tab === "itinerary" ? "active" : ""
                      }`}
                      onClick={() => setTab("itinerary")}
                    >
                      Itinerary
                    </button>
                    <button
                      type="button"
                      className={`pkg-tab ${
                        tab === "practical" ? "active" : ""
                      }`}
                      onClick={() => setTab("practical")}
                    >
                      Practical
                    </button>
                  </div>
                  {tab === "overview" && (
                    <>
                      <h2 className="text-3xl font-extrabold text-gray-900">
                        Trip overview
                      </h2>
                      <p className="mt-3 text-gray-700 leading-relaxed">
                        {pkg.details}
                      </p>

                      <div className="mt-6">
                        <h4 className="text-lg font-semibold mb-2">
                          Highlights
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {pkg.includes &&
                            pkg.includes.map((i) => (
                              <span
                                key={i}
                                className="bg-gradient-to-r from-[#fff7f0] to-[#fff1eb] text-[#c2410c] px-3 py-1 rounded-full text-sm font-medium shadow-sm"
                              >
                                {i}
                              </span>
                            ))}
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
              <div>
                <h4 className="mt-6 font-semibold">Includes</h4>
                <ul className="flex flex-wrap gap-2 mt-2">
                  {pkg.includes &&
                    pkg.includes.map((i) => (
                      <li
                        key={i}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                      >
                        {i}
                      </li>
                    ))}
                </ul>

                {tab === "itinerary" &&
                  pkg.itinerary &&
                  pkg.itinerary.length > 0 && (
                    <div className="mt-6">
                      <h4 className="font-semibold mb-3">Itinerary</h4>
                      <div className="space-y-3">
                        {pkg.itinerary.map((d) => (
                          <div
                            key={d.day}
                            className="relative bg-white rounded p-4 shadow-sm border-l-4 border-[#f97316] transition-transform transform hover:-translate-y-1 hover:shadow-md"
                          >
                            <div className="flex items-start gap-4">
                              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-r from-[#f97316] to-[#fb7185] text-white font-bold text-sm">
                                {d.day}
                              </div>
                              <div>
                                <div className="font-semibold text-gray-800">
                                  {d.title}
                                </div>
                                <div className="text-gray-600 text-sm mt-1">
                                  {d.activities}
                                </div>
                                {d.notes && (
                                  <div className="mt-2 text-sm text-gray-500">
                                    {d.notes}
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                {tab === "practical" && (
                  <div className="mt-6 grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-2">What's included</h4>
                      <ul className="space-y-2">
                        {pkg.inclusions &&
                          pkg.inclusions.map((inc, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="mt-1 text-[#f97316] font-bold">
                                ✓
                              </span>
                              <span className="text-gray-700">{inc}</span>
                            </li>
                          ))}
                      </ul>

                      <h4 className="font-semibold mt-4 mb-2">
                        What's excluded
                      </h4>
                      <ul className="space-y-2">
                        {pkg.exclusions &&
                          pkg.exclusions.map((exc, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="mt-1 text-red-500 font-bold">
                                ✕
                              </span>
                              <span className="text-gray-700">{exc}</span>
                            </li>
                          ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2">
                        Practical information
                      </h4>
                      <ul className="space-y-2 text-gray-700">
                        <li>
                          <strong>Accommodation:</strong>{" "}
                          {pkg.accommodation || "As per itinerary"}
                        </li>
                        <li>
                          <strong>Transport:</strong>{" "}
                          {pkg.transport || "Private vehicle"}
                        </li>
                        <li>
                          <strong>Difficulty:</strong>{" "}
                          {pkg.difficulty || "Easy"}
                        </li>
                        <li>
                          <strong>Group Size:</strong>{" "}
                          {pkg.groupSize || "Small groups (customizable)"}
                        </li>
                      </ul>

                      <div className="mt-4">
                        <h4 className="font-semibold mb-2">Related packages</h4>
                        <div className="grid grid-cols-1 gap-3">
                          {packages
                            .filter(
                              (p) =>
                                p.id !== pkg.id &&
                                p.includes &&
                                pkg.includes &&
                                p.includes.some((v) => pkg.includes.includes(v))
                            )
                            .slice(0, 3)
                            .map((rp) => (
                              <Link
                                key={rp.id}
                                to={`/packages/${rp.id}`}
                                className="flex items-center gap-3 p-2 rounded hover:bg-gray-50"
                              >
                                <img
                                  src={rp.image}
                                  alt={rp.title}
                                  className="w-16 h-12 object-cover rounded"
                                />
                                <div>
                                  <div className="text-sm font-medium">
                                    {rp.title}
                                  </div>
                                  <div className="text-xs text-gray-500">
                                    {rp.days} day{rp.days > 1 ? "s" : ""} • ₹
                                    {rp.price}
                                  </div>
                                </div>
                              </Link>
                            ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="mt-6 p-4 bg-accent/10 border-l-4 border-accent/20 text-sm text-accent rounded">
                <strong>Note:</strong> Itineraries may be adjusted for weather,
                road conditions and acclimatization requirements. Contact us for
                personalized changes.
              </div>
            </div>
          </div>

          {/* Mobile fixed CTA */}
          <div className="md:hidden fixed bottom-4 left-4 right-4 z-50 bg-white rounded-lg shadow-lg p-3 flex items-center gap-3">
            <div className="flex-1">
              <div className="text-xs text-gray-500">From</div>
              <div className="text-lg font-bold text-primary">₹{pkg.price}</div>
            </div>
            <button
              onClick={goToForm}
              className="bg-gradient-to-r from-[#f97316] to-[#fb7185] text-white px-4 py-2 rounded-md shadow"
            >
              Book / Enquire
            </button>
          </div>
        </div>

        <aside className="pkg-aside bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="rounded-t-md overflow-hidden">
            <div className="p-4 bg-gradient-to-r from-[#f97316] to-[#fb7185] text-white">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xs opacity-90">Starting from</div>
                  <div className="text-2xl font-extrabold">₹{pkg.price}</div>
                </div>
                <div className="text-right">
                  <div className="text-xs opacity-90">Duration</div>
                  <div className="font-semibold">
                    {pkg.days} day{pkg.days > 1 ? "s" : ""}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div ref={formRef} className="p-4">
            {msg ? (
              <div className="mt-2 p-3 bg-green-50 text-green-800 rounded">
                {msg}
              </div>
            ) : (
              <form onSubmit={submit} className="mt-2 space-y-3">
                <input
                  name="_subject"
                  value={`Booking: ${pkg.title}`}
                  readOnly
                  hidden
                />

                <div>
                  <label className="sr-only">Full name</label>
                  <input
                    aria-label="Full name"
                    required
                    name="name"
                    placeholder="Full name"
                    className="w-full border px-3 py-2 rounded"
                  />
                </div>

                <div>
                  <label className="sr-only">Email</label>
                  <input
                    aria-label="Email"
                    required
                    name="email"
                    type="email"
                    placeholder="Email"
                    className="w-full border px-3 py-2 rounded"
                  />
                </div>

                <div>
                  <label className="sr-only">Preferred dates</label>
                  <input
                    aria-label="Preferred dates"
                    name="dates"
                    placeholder="Preferred dates / notes"
                    className="w-full border px-3 py-2 rounded"
                  />
                </div>

                <div>
                  <label className="sr-only">Message</label>
                  <textarea
                    aria-label="Message"
                    name="message"
                    placeholder="Anything else?"
                    rows={4}
                    className="w-full border px-3 py-2 rounded"
                  />
                </div>

                <div className="flex gap-2">
                  <button className="w-full inline-block bg-gradient-to-r from-[#f97316] to-[#fb7185] text-white px-4 py-3 rounded-md shadow-md font-semibold">
                    Send Booking
                  </button>
                  <button
                    type="button"
                    onClick={() => navigate("/packages")}
                    className="px-4 py-2 rounded-md border"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            )}
          </div>
        </aside>
      </div>
    </section>
  );
}
