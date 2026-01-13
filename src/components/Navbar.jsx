import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const loc = useLocation();
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-3">
            <Link to="/" className="text-xl font-semibold text-primary">
              ReyuTravels
            </Link>
            <div className="text-sm text-gray-500">
              Srinagar, Jammu & Kashmir
            </div>
          </div>
          <nav className="flex items-center gap-4">
            <Link to="/" className="text-gray-600 hover:text-primary">
              Home
            </Link>
            <Link
              to="/destinations"
              className="text-gray-600 hover:text-primary"
            >
              Destinations
            </Link>
            <Link to="/packages" className="text-gray-600 hover:text-primary">
              Packages
            </Link>
            <Link to="/about" className="text-gray-600 hover:text-primary">
              About
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center px-3 py-2 bg-primary text-white rounded-md hover:opacity-90"
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
