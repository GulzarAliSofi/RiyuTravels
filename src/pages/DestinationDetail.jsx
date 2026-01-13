import React from "react";
import PageHeader from "../components/PageHeader";
import { useParams, Link } from "react-router-dom";
import destinations from "../data/destinations";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

export default function DestinationDetail() {
  const { id } = useParams();
  const dest = destinations.find((d) => d.id === id);
  if (!dest)
    return (
      <section className="container">
        <div className="card">
          Destination not found. <Link to="/destinations">Back</Link>
        </div>
      </section>
    );

  const { lat, lng } = dest.coords || { lat: 34.0837, lng: 74.7973 };

  document.title = `${dest.name} — ReyuTravels`;

  return (
    <section className="container">
      <div className="card" style={{ padding: 0, overflow: "hidden" }}>
        <img
          src={dest.image}
          alt={dest.alt || dest.name}
          style={{ width: "100%", height: 380, objectFit: "cover" }}
        />
        <div style={{ padding: 16 }}>
          <PageHeader title={dest.name} subtitle={dest.short} />
          <p>{dest.details}</p>
          <div style={{ height: 320 }}>
            <MapContainer
              center={[lat, lng]}
              zoom={12}
              style={{ height: "100%", width: "100%" }}
            >
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              <Marker position={[lat, lng]}>
                <Popup>{dest.name}</Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>
      </div>
    </section>
  );
}
