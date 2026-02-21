// src/App.jsx
function App() {
  return (
    <div className="min-h-screen bg-blue-500 text-white font-sans">
      {/* Navbar */}
      <nav className="flex items-center justify-between p-6 max-w-7xl mx-auto">
        <div className="text-2xl font-bold">
          Bimind <span className="text-yellow-400">Innovation</span> Ltd
        </div>
        <div className="hidden md:flex space-x-6">
          <a href="#features" className="hover:text-yellow-400 transition">Features</a>
          <a href="#pricing" className="hover:text-yellow-400 transition">Pricing</a>
          <a href="#about" className="hover:text-yellow-400 transition">About</a>
          <a href="#contact" className="hover:text-yellow-400 transition">Contact</a>
        </div>
        <div className="md:hidden">
          {/* Mobile menu icon */}
          <button>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"
              viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="flex flex-col items-center justify-center text-center mt-16 px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          Simplify Your Finances
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl">
          Manage your investments, payments, and savings with a simple and secure fintech platform.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="bg-yellow-400 text-blue-500 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition">
            Get Started
          </button>
          <button className="bg-white text-blue-500 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
            Learn More
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;