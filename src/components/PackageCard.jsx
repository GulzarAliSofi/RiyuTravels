import React from "react";

import { Link } from "react-router-dom";

export default function PackageCard({ pkg }) {
  return (
    <Link
      to={`/packages/${pkg.id}`}
      className="block"
      style={{ textDecoration: "none" }}
      aria-label={`View package ${pkg.title}`}
    >
      <article className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer h-full">
        <img
          src={pkg.image}
          alt={pkg.alt || pkg.title}
          loading="lazy"
          className="w-full h-48 object-cover"
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = "/assets/placeholder.svg";
          }}
        />
        <div className="p-4">
          <h3 className="text-lg font-semibold">{pkg.title}</h3>
          <p className="text-gray-600 text-sm mt-2">{pkg.summary}</p>
          <div className="mt-4 flex items-center justify-between">
            <strong className="text-primary">₹{pkg.price}</strong>
            <span className="text-accent font-medium">View</span>
          </div>
        </div>
      </article>
    </Link>
  );
}
