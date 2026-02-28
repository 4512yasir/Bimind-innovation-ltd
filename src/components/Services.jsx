import React, { useState } from "react";
import { motion } from "framer-motion";

const services = [
  {
    id: "mpesa-integration",
    title: "M-Pesa Payment Integration",
    desc: "Connect your app to STK Push, PayBill, and B2C payouts.",
    details:
      "Full Daraja API integration including STK Push, validation, confirmation, B2C, and transaction monitoring for Kenyan businesses.",
    icon: "💳",
  },
  {
    id: "chama-management-system",
    title: "Chama Management Systems",
    desc: "Digitize contributions, loans, and member operations.",
    details:
      "Modern web platforms for chamas with contributions, loans, fines, reports, and mobile payments.",
    icon: "👥",
  },
  {
    id: "sacco-digital-tools",
    title: "SACCO Digital Solutions",
    desc: "Secure tools for SACCO member and loan management.",
    details:
      "Member portals, loan tracking, contribution management, and admin dashboards for SACCOs going digital.",
    icon: "🏦",
  },
  {
    id: "fintech-mvp-development",
    title: "Fintech MVP Development",
    desc: "Launch your fintech product fast and securely.",
    details:
      "We build scalable fintech MVPs with clean UI, secure backend, and payment integrations.",
    icon: "🚀",
  },
  {
    id: "financial-admin-dashboards",
    title: "Financial Dashboards",
    desc: "Real-time visibility into transactions and revenue.",
    details:
      "Beautiful analytics dashboards for monitoring payments, users, and financial performance.",
    icon: "📊",
  },
  {
    id: "secure-api-development",
    title: "Secure API Development",
    desc: "Production-ready fintech APIs.",
    details:
      "REST APIs with authentication, validation, rate limiting, and proper fintech-grade structure.",
    icon: "🔐",
  },
];

const stats = [
  { label: "Transactions Processed", value: "1M+" },
  { label: "Systems Built", value: "50+" },
  { label: "Uptime Reliability", value: "99.9%" },
  { label: "Client Satisfaction", value: "100%" },
];

export default function Services() {
  const [modalService, setModalService] = useState(null);

  return (
    <div className="relative min-h-screen bg-[#070F1F] text-white overflow-hidden pt-28 pb-24 px-6">
      
      {/* 🌌 Gradient mesh background */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#1A7FC7]/20 blur-[140px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#00AFC4]/20 blur-[140px] rounded-full"></div>

      {/* ================= HERO ================= */}
      <section className="relative z-10 text-center max-w-4xl mx-auto mb-20">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-extrabold leading-tight mb-6"
        >
          World-Class{" "}
          <span className="bg-gradient-to-r from-[#1A7FC7] to-[#00AFC4] bg-clip-text text-transparent">
            Fintech Services
          </span>
        </motion.h1>

        <p className="text-gray-300 text-lg md:text-xl">
          Secure, scalable, and practical financial technology solutions
          built for African businesses and startups.
        </p>
      </section>

      {/* ================= TRUST STATS ================= */}
      <section className="relative z-10 max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 mb-24">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -6 }}
            className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center backdrop-blur-xl"
          >
            <div className="text-3xl font-extrabold bg-gradient-to-r from-[#1A7FC7] to-[#00AFC4] bg-clip-text text-transparent">
              {stat.value}
            </div>
            <div className="text-gray-400 text-sm mt-1">{stat.label}</div>
          </motion.div>
        ))}
      </section>

      {/* ================= SERVICES GRID ================= */}
      <section className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {services.map((service) => (
          <motion.div
            key={service.id}
            whileHover={{ y: -10, scale: 1.02 }}
            className="group relative rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl p-8 cursor-pointer transition"
          >
            <div className="text-4xl mb-4">{service.icon}</div>

            <h3 className="text-xl font-bold mb-3">{service.title}</h3>

            <p className="text-gray-300 mb-6">{service.desc}</p>

            <button
              onClick={() => setModalService(service)}
              className="text-[#00AFC4] font-semibold hover:text-white transition"
            >
              Learn More →
            </button>
          </motion.div>
        ))}
      </section>

      {/* ================= CLIENT LOGOS ================= */}
      <section className="relative z-10 mt-24 max-w-6xl mx-auto text-center">
        <p className="text-gray-400 mb-6">Trusted technology approach</p>

        <div className="flex flex-wrap justify-center gap-8 opacity-70">
          <div className="bg-white/5 px-6 py-3 rounded-lg">M-Pesa</div>
          <div className="bg-white/5 px-6 py-3 rounded-lg">Daraja API</div>
          <div className="bg-white/5 px-6 py-3 rounded-lg">REST APIs</div>
          <div className="bg-white/5 px-6 py-3 rounded-lg">Cloud Ready</div>
        </div>
      </section>

      {/* ================= MODAL ================= */}
      {modalService && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={() => setModalService(null)}
        >
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-[#0F172A] border border-white/10 rounded-3xl max-w-xl w-full p-8 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setModalService(null)}
              className="absolute top-4 right-5 text-gray-400 hover:text-white text-2xl"
            >
              ✕
            </button>

            <h2 className="text-2xl font-bold mb-4">
              {modalService.title}
            </h2>

            <p className="text-gray-300 mb-4">{modalService.desc}</p>

            <p className="text-gray-400 leading-relaxed">
              {modalService.details}
            </p>
          </motion.div>
        </div>
      )}

      {/* ================= FINAL CTA ================= */}
      <section className="relative z-10 mt-28 text-center max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to build your fintech product?
        </h2>

        <a
          href="/contact"
          className="inline-block bg-gradient-to-r from-[#1A7FC7] to-[#00AFC4] px-10 py-4 rounded-xl font-semibold shadow-lg hover:scale-105 transition"
        >
          Start Your Project
        </a>
      </section>
    </div>
  );
}