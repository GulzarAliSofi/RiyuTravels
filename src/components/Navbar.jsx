import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const loc = useLocation();
  const [open, setOpen] = useState(false);
  React.useEffect(() => setOpen(false), [loc.pathname]);
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-16 relative">
          <div className="flex items-center gap-3">
            <Link to="/" className="text-xl font-semibold text-primary">
              ReyuTravels
            </Link>
            <div className="text-sm text-gray-500 hidden sm:block">
              Srinagar, Jammu & Kashmir
            </div>
          </div>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-4">
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

          {/* Mobile toggler */}
          <button
            className="md:hidden p-2 rounded-md text-gray-700"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((s) => !s)}
          >
            {/* simple hamburger icon */}
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 6h16M4 12h16M4 18h16"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          {/* Mobile menu */}
          {open && (
            <div className="absolute right-4 top-full mt-2 w-[220px] bg-white border rounded-md shadow-lg md:hidden z-30">
              <nav className="flex flex-col">
                <Link
                  onClick={() => setOpen(false)}
                  to="/"
                  className="block px-3 py-2 text-gray-700 hover:bg-gray-50"
                >
                  Home
                </Link>
                <Link
                  onClick={() => setOpen(false)}
                  to="/destinations"
                  className="block px-3 py-2 text-gray-700 hover:bg-gray-50"
                >
                  Destinations
                </Link>
                <Link
                  onClick={() => setOpen(false)}
                  to="/packages"
                  className="block px-3 py-2 text-gray-700 hover:bg-gray-50"
                >
                  Packages
                </Link>
                <Link
                  onClick={() => setOpen(false)}
                  to="/about"
                  className="block px-3 py-2 text-gray-700 hover:bg-gray-50"
                >
                  About
                </Link>
                <Link
                  onClick={() => setOpen(false)}
                  to="/contact"
                  className="block px-3 py-2 text-gray-700 hover:bg-gray-50 border-t"
                >
                  Contact
                </Link>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
