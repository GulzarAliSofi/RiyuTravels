import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t mt-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-sm text-gray-600">
        <div>
          © {new Date().getFullYear()} ReyuTravels — Based in Srinagar, Jammu &
          Kashmir
        </div>
        <div className="flex items-center gap-3">
          <Link to="/contact" className="hover:text-primary">
            Contact
          </Link>
          <a href="mailto:info@reyutravels.example" className="text-gray-500">
            info@reyutravels.example
          </a>
        </div>
      </div>
    </footer>
  );
}
