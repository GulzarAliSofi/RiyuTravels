import React, { useState } from "react";
import PageHeader from "../components/PageHeader";

// Replace with your Formspree endpoint from https://formspree.io
const FORMSPREE_ENDPOINT = "https://formspree.io/f/your-id";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(null);
  const [formErrors, setFormErrors] = useState({});

  function submit(e) {
    e.preventDefault();
    setError(null);
    setFormErrors({});

    const formEl = e.target;
    const form = new FormData(formEl);
    const email = (form.get("email") || "").toString().trim();
    const phone = (form.get("phone") || "").toString().trim();
    const message = (form.get("message") || "").toString().trim();

    const errs = {};
    // basic email check
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      errs.email = "Please enter a valid email address";
    // phone if provided must have 7-15 digits
    if (phone) {
      const digits = phone.replace(/\D/g, "");
      if (digits.length < 7 || digits.length > 15)
        errs.phone = "Please include a valid phone number with country code";
    }
    // short message check
    if (message.length < 10)
      errs.message = "Please provide a brief message (at least 10 characters)";

    if (Object.keys(errs).length) {
      setFormErrors(errs);
      // focus first error field
      if (errs.email) formEl.querySelector('[name="email"]')?.focus();
      else if (errs.phone) formEl.querySelector('[name="phone"]')?.focus();
      else if (errs.message) formEl.querySelector('[name="message"]')?.focus();
      return;
    }

    fetch(FORMSPREE_ENDPOINT, {
      method: "POST",
      body: form,
      headers: { Accept: "application/json" },
    })
      .then((res) => res.json())
      .then((data) => setSent(true))
      .catch((err) =>
        setError("Could not send — please configure FORMSPREE_ENDPOINT")
      );
  }
  return (
    <section className="container">
      <PageHeader
        title="Contact Us"
        subtitle="Get in touch for bookings, questions or custom itineraries."
      />

      <div className="contact-layout" style={{ gap: 20 }}>
        <div className="card">
          {!sent ? (
            <form onSubmit={submit} className="space-y-4">
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

              <div className="form-grid" style={{ gap: 8 }}>
                <div>
                  <input
                    aria-label="Email"
                    required
                    name="email"
                    type="email"
                    placeholder="Email"
                    className="w-full border px-3 py-2 rounded"
                  />
                  <div className="text-xs text-gray-500 mt-1">
                    We'll only use this to follow up about your inquiry.
                  </div>
                  {formErrors.email && (
                    <div className="text-red-600 text-sm mt-1">
                      {formErrors.email}
                    </div>
                  )}
                </div>
                <div>
                  <input
                    aria-label="Phone"
                    name="phone"
                    placeholder="Phone (optional)"
                    className="w-full border px-3 py-2 rounded"
                  />
                  <div className="text-xs text-gray-500 mt-1">
                    Optional — include country code, e.g. +91 90000 00000
                  </div>
                  {formErrors.phone && (
                    <div className="text-red-600 text-sm mt-1">
                      {formErrors.phone}
                    </div>
                  )}
                </div>
              </div>

              <div>
                <label className="sr-only">Preferred dates</label>
                <input
                  aria-label="Preferred dates"
                  name="dates"
                  placeholder="Preferred dates / group size"
                  className="w-full border px-3 py-2 rounded"
                />
              </div>

              <div>
                <label className="sr-only">Message</label>
                <textarea
                  aria-label="Message"
                  name="message"
                  placeholder="Tell us what you have in mind..."
                  rows={6}
                  className="w-full border px-3 py-2 rounded"
                />
                {formErrors.message && (
                  <div className="text-red-600 text-sm mt-1">
                    {formErrors.message}
                  </div>
                )}
              </div>

              <div className="flex items-center gap-3">
                <button className="inline-block bg-gradient-to-r from-[#f97316] to-[#fb7185] text-white px-4 py-2 rounded shadow">
                  Send message
                </button>
                <div className="text-sm text-gray-600">
                  Or call us at{" "}
                  <a
                    href="tel:+919000000000"
                    className="font-semibold text-[#f97316]"
                  >
                    +91 90000 00000
                  </a>
                </div>
              </div>

              {error && <div className="text-red-600">{error}</div>}
            </form>
          ) : (
            <div className="p-6 bg-green-50 rounded text-green-800">
              <h3 className="font-semibold">Thanks! We'll get back shortly.</h3>
              <p className="mt-2">
                We've recorded your inquiry and will reply within 24 hours.
                Meanwhile, explore our{" "}
                <a href="/packages" className="text-accent font-medium">
                  packages
                </a>
                .
              </p>
            </div>
          )}
        </div>

        <aside className="card">
          <div>
            <h4 className="font-semibold">Reach us</h4>
            <p className="text-sm text-gray-600 mt-2">
              Office hours: Mon–Sat, 9:00–18:00
            </p>

            <div className="mt-4">
              <div className="text-sm text-gray-500">Phone</div>
              <a href="tel:+919000000000" className="font-semibold block mt-1">
                +91 90000 00000
              </a>

              <div className="text-sm text-gray-500 mt-3">Email</div>
              <a
                href="mailto:hello@reyutravels.com"
                className="font-semibold block mt-1"
              >
                hello@reyutravels.com
              </a>

              <div className="text-sm text-gray-500 mt-3">Address</div>
              <div className="text-sm text-gray-700 mt-1">
                ReyuTravels, Residency Road, Srinagar
              </div>

              <div style={{ marginTop: 12 }}>
                <iframe
                  title="ReyuTravels location"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=74.7920%2C34.0810%2C74.8020%2C34.0870&layer=mapnik&marker=34.0837%2C74.7973"
                  style={{
                    border: 0,
                    width: "100%",
                    height: 180,
                    borderRadius: 8,
                  }}
                />
                <div className="text-xs text-gray-500 mt-2">
                  View location on OpenStreetMap
                </div>
              </div>
            </div>

            <div className="mt-6">
              <h5 className="font-semibold">Quick links</h5>
              <ul className="mt-2 text-sm">
                <li>
                  <a href="/packages" className="text-accent">
                    View packages
                  </a>
                </li>
                <li>
                  <a href="/destinations" className="text-accent">
                    Explore destinations
                  </a>
                </li>
                <li>
                  <a href="/about" className="text-accent">
                    About us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
