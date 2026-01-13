import React from "react";

export default function DestinationCard({ dest }) {
  return (
    <article className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <img
        src={dest.image}
        alt={dest.alt || dest.name}
        loading="lazy"
        className="w-full h-40 object-cover"
        onError={(e) => {
          e.currentTarget.onerror = null;
          e.currentTarget.src = "/assets/placeholder.svg";
        }}
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{dest.name}</h3>
        <p className="text-gray-600 text-sm mt-1">{dest.short}</p>
      </div>
    </article>
  );
}
