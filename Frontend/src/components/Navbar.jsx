import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-white/60 backdrop-blur-xl shadow-md transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer">
            <div className="p-1.5 rounded-xl bg-white shadow-sm transition">
              <img
                src="/bimind-logo.jpeg"
                alt="Bimind Innovation Ltd"
                className="h-8 w-auto"
              />
            </div>
            <div className="leading-tight">
              <p className="text-lg font-bold text-[#1F2F55]">Bimind</p>
              <p className="text-[10px] tracking-wide text-gray-500 -mt-1">
                Innovation Ltd
              </p>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`relative font-medium transition ${
                    isActive ? "text-[#1A7FC7]" : "text-gray-600 hover:text-[#1A7FC7]"
                  }`}
                >
                  {link.name}
                  <span
                    className={`absolute left-0 -bottom-1 h-0.5 bg-gradient-to-r from-[#1A7FC7] to-[#00AFC4] transition-all duration-300 ${
                      isActive ? "w-full" : "w-0"
                    }`}
                  ></span>
                </Link>
              );
            })}

            {/* CTA Button */}
            <Link
              to="/services"
              className="bg-gradient-to-r from-[#1A7FC7] to-[#00AFC4] hover:from-[#00AFC4] hover:to-[#1A7FC7] text-white px-6 py-2 rounded-lg font-semibold shadow-md hover:shadow-xl transform hover:scale-105 transition"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Button */}
          <button
            className="md:hidden text-[#1F2F55] text-2xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white/95 backdrop-blur-lg border-t border-gray-100 px-6 pb-6 pt-4 space-y-4 shadow-lg transition-all duration-300 ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        {links.map((link) => {
          const isActive = location.pathname === link.path;
          return (
            <Link
              key={link.name}
              to={link.path}
              className={`block font-medium transition ${
                isActive ? "text-[#1A7FC7]" : "text-gray-600 hover:text-[#1A7FC7]"
              }`}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          );
        })}
        <Link
          to="/services"
          className="w-full mt-2 bg-gradient-to-r from-[#1A7FC7] to-[#00AFC4] hover:from-[#00AFC4] hover:to-[#1A7FC7] text-white py-2.5 rounded-lg font-semibold transition block text-center"
          onClick={() => setIsOpen(false)}
        >
          Get Started
        </Link>
      </div>
    </nav>
  );
}