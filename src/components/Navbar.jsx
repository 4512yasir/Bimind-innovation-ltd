import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-white/70 backdrop-blur-xl border-b border-white/20 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* ✅ Logo + Brand */}
          <div className="flex items-center gap-3 group cursor-pointer">
            {/* Logo container */}
            <div className="p-1.5 rounded-xl bg-white shadow-sm group-hover:shadow-md transition">
              <img
                src="/bimind-logo.jpeg"
                alt="Bimind Innovation Ltd"
                className="h-8 w-auto"
              />
            </div>

            {/* Company name */}
            <div className="leading-tight">
              <p className="text-lg font-bold text-bimind-dark">
                Bimind
              </p>
              <p className="text-[10px] tracking-wide text-gray-500 -mt-1">
                Innovation Ltd
              </p>
            </div>
          </div>

          {/* ✅ Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#"
              className="text-gray-600 hover:text-bimind-blue font-medium transition"
            >
              Home
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-bimind-blue font-medium transition"
            >
              Services
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-bimind-blue font-medium transition"
            >
              About
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-bimind-blue font-medium transition"
            >
              Contact
            </a>

            {/* CTA Button */}
            <button className="bg-bimind-blue hover:bg-bimind-teal text-white px-5 py-2 rounded-lg font-semibold shadow-md hover:shadow-lg transition">
              Get Started
            </button>
          </div>

          {/* ✅ Mobile Menu Button */}
          <button
            className="md:hidden text-bimind-dark text-2xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* ✅ Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-lg border-t border-gray-100 px-6 pb-6 pt-4 space-y-4 shadow-lg">
          <a
            href="#"
            className="block text-gray-600 hover:text-bimind-blue font-medium"
          >
            Home
          </a>
          <a
            href="#"
            className="block text-gray-600 hover:text-bimind-blue font-medium"
          >
            Services
          </a>
          <a
            href="#"
            className="block text-gray-600 hover:text-bimind-blue font-medium"
          >
            About
          </a>
          <a
            href="#"
            className="block text-gray-600 hover:text-bimind-blue font-medium"
          >
            Contact
          </a>

          <button className="w-full mt-2 bg-bimind-blue hover:bg-bimind-teal text-white py-2.5 rounded-lg font-semibold transition">
            Get Started
          </button>
        </div>
      )}
    </nav>
  );
}