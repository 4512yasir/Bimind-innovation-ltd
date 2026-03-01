import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Services from "./components/Services";
import ServiceDetail from "./components/servicedetail";
import PremiumHero from "./components/Hero";
import About from "./components/about";
import Contact from "./components/contact";
import CursorGlow from "./components/CursorGlow";
import PremiumLoader from "./components/PremiumLoader";


/* scroll reset */
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return null;
}

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1400);
    return () => clearTimeout(t);
  }, []);

  return (
    <Router>
      {loading && <PremiumLoader />}

      
      <CursorGlow />
      <Navbar />
      <ScrollToTop />

      <main className="pt-20">
        <Routes>
          <Route path="/" element={<PremiumHero />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:serviceId" element={<ServiceDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </Router>
  );
}