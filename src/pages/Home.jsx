import React from "react";
import { Link } from "react-router-dom";
import packages from "../data/packages";
import destinations from "../data/destinations";
import HeroSlider from "../components/HeroSlider";
import PackageCard from "../components/PackageCard";
import DestinationCard from "../components/DestinationCard";

export default function Home() {
  document.title = "ReyuTravels — Explore Jammu & Kashmir";

  return (
    <main className="max-w-6xl mx-auto px-4 py-12">
      <section className="rounded-lg overflow-hidden bg-gradient-to-r from-primary/8 via-white to-accent/6 p-6 mb-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="md:flex-1">
            <h1 className="text-3xl sm:text-4xl font-bold text-primary">
              Explore Jammu & Kashmir
            </h1>
            <p className="mt-2 text-gray-700">
              Curated trips, local guides and responsible tourism across the
              valley.
            </p>
            <div className="mt-4 flex gap-3">
              <Link
                to="/packages"
                className="inline-block bg-primary text-white px-4 py-2 rounded-md shadow"
              >
                View Packages
              </Link>
              <Link
                to="/destinations"
                className="inline-block border border-primary text-primary px-4 py-2 rounded-md"
              >
                Explore Destinations
              </Link>
            </div>
          </div>

          <div className="w-full md:w-1/2">
            <HeroSlider slides={destinations} />
          </div>
        </div>
      </section>

      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-gray-800">
            Featured Packages
          </h2>
          <Link to="/packages" className="text-accent font-medium">
            See all
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {packages.map((p) => (
            <PackageCard key={p.id} pkg={p} />
          ))}
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">
          Popular Destinations
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((d) => (
            <DestinationCard key={d.id} dest={d} />
          ))}
        </div>
      </section>

      <section className="mt-10 bg-white rounded-lg p-6 shadow-sm">
        <h3 className="text-lg font-semibold mb-2">
          Why travel with ReyuTravels?
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-gray-600">
          <div>
            Experienced local guides, curated trips and small-group focus.
          </div>
          <div>
            Responsible tourism practices and support to local communities.
          </div>
          <div>
            Flexible itineraries to suit families, couples and adventure
            travelers.
          </div>
        </div>
      </section>
    </main>
  );
}
