import React, { useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import CountUp from "react-countup";

const servicesPreview = [
  {
    title: "M-Pesa Integration",
    desc: "STK Push, PayBill, and B2C payouts for modern apps.",
    icon: "💳",
  },
  {
    title: "Chama Platforms",
    desc: "Digitize contributions, loans, and member management.",
    icon: "👥",
  },
  {
    title: "Fintech MVPs",
    desc: "Launch secure fintech products faster.",
    icon: "🚀",
  },
];

const stats = [
  { label: "Transactions", value: 1000000, suffix: "+" },
  { label: "Systems Built", value: 50, suffix: "+" },
  { label: "Uptime", value: 99.9, suffix: "%" },
  { label: "Support", value: 24, suffix: "/7" },
];

const logos = [
  "Safaricom",
  "Flutterwave",
  "Stripe",
  "Paystack",
  "Visa",
];

export default function Home() {
  // ===== PARALLAX (desktop only) =====
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-300, 300], [10, -10]);
  const rotateY = useTransform(mouseX, [-300, 300], [-10, 10]);

  const handleMouseMove = (e) => {
    if (window.innerWidth < 768) return;
    mouseX.set(e.clientX - window.innerWidth / 2);
    mouseY.set(e.clientY - window.innerHeight / 2);
  };

  // ===== MAGNETIC BUTTON =====
  const [btnPos, setBtnPos] = useState({ x: 0, y: 0 });

  const handleMagnet = (e) => {
    if (window.innerWidth < 768) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * 0.25;
    const y = (e.clientY - rect.top - rect.height / 2) * 0.25;
    setBtnPos({ x, y });
  };

  const resetMagnet = () => setBtnPos({ x: 0, y: 0 });

  return (
    <div
      onMouseMove={handleMouseMove}
      className="relative bg-[#070F1F] text-white overflow-x-hidden"
    >
      {/* ================= ANIMATED MESH BG ================= */}
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,#1A7FC7_0%,transparent_40%),radial-gradient(circle_at_80%_70%,#00AFC4_0%,transparent_40%)] animate-pulse" />
      </div>

      {/* grid overlay */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* ================= HERO ================= */}
      <section className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center px-4 sm:px-6 pt-28 md:pt-32 pb-20">
        <motion.div
          style={{ rotateX, rotateY }}
          className="relative z-10 max-w-6xl mx-auto text-center"
        >
          {/* floating glass card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block mb-6 px-4 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-sm text-gray-200"
          >
            🚀 Built for African Fintech
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight mb-6"
          >
            Powering the Future of{" "}
            <span className="bg-gradient-to-r from-[#1A7FC7] to-[#00AFC4] bg-clip-text text-transparent">
              Financial Innovation
            </span>
          </motion.h1>

          <p className="text-gray-300 text-base sm:text-lg md:text-xl max-w-3xl mx-auto mb-10">
            We build secure payment systems, scalable fintech platforms,
            and modern financial infrastructure for ambitious companies.
          </p>

          {/* magnetic button */}
          <motion.a
            href="#services"
            animate={{ x: btnPos.x, y: btnPos.y }}
            onMouseMove={handleMagnet}
            onMouseLeave={resetMagnet}
            className="inline-flex items-center justify-center bg-gradient-to-r from-[#1A7FC7] to-[#00AFC4] px-8 sm:px-10 py-3 sm:py-4 rounded-xl font-semibold shadow-2xl hover:scale-[1.04] active:scale-[0.98] transition"
          >
            Explore Services
          </motion.a>
        </motion.div>
      </section>

      {/* ================= TRUST LOGOS ================= */}
      <section className="px-6 pb-20">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400 text-sm mb-6">
            Built with technologies trusted by fintech leaders
          </p>

          <div className="flex flex-wrap justify-center gap-6 opacity-70">
            {logos.map((logo, i) => (
              <div
                key={i}
                className="px-5 py-2 rounded-lg bg-white/5 border border-white/10 text-sm"
              >
                {logo}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="px-4 sm:px-6 pb-24">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-5">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -6 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center backdrop-blur-xl"
            >
              <div className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-[#1A7FC7] to-[#00AFC4] bg-clip-text text-transparent">
                <CountUp
                  end={stat.value}
                  duration={2.5}
                  separator=","
                  decimals={stat.value % 1 !== 0 ? 1 : 0}
                />
                {stat.suffix}
              </div>
              <div className="text-gray-400 text-sm mt-1">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section id="services" className="px-4 sm:px-6 pb-28">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {servicesPreview.map((service, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -12, scale: 1.02 }}
              className="group rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl p-8 hover:border-[#00AFC4]/40 transition"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-3">
                {service.title}
              </h3>
              <p className="text-gray-300 mb-6">{service.desc}</p>
              <a
                href="/services"
                className="text-[#00AFC4] font-semibold hover:text-white transition"
              >
                Learn More →
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="px-6 pb-32 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
          Ready to build your fintech product?
        </h2>

        <a
          href="/contact"
          className="inline-flex items-center justify-center bg-gradient-to-r from-[#1A7FC7] to-[#00AFC4] px-8 sm:px-10 py-3 sm:py-4 rounded-xl font-semibold shadow-2xl hover:scale-105 active:scale-95 transition"
        >
          Start Your Project
        </a>
      </section>
    </div>
  );
}