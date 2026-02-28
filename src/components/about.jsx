import { motion } from "framer-motion";
import {
  ShieldCheck,
  Target,
  Users,
  TrendingUp,
  Lock,
  Globe,
  Server,
} from "lucide-react";
import { useEffect, useState } from "react";

/* ================= COUNT UP ================= */
function CountUp({ end, suffix = "" }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1200;
    const step = end / (duration / 16);

    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export default function About() {
  return (
    <div className="bg-white text-gray-900 overflow-hidden">
      {/* ================= GRID BACKGROUND ================= */}
      <div className="fixed inset-0 -z-10 opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0f172a] via-[#1F2F55] to-[#1A7FC7] text-white">
        <div className="max-w-7xl mx-auto px-6 py-28 text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight"
          >
            Engineering the Future of
            <span className="block bg-gradient-to-r from-[#00AFC4] to-[#38bdf8] bg-clip-text text-transparent">
              Financial Infrastructure
            </span>
          </motion.h1>

          <p className="max-w-3xl mx-auto text-lg md:text-xl text-white/80">
            Bimind Innovation builds secure, scalable fintech infrastructure for
            startups, SMEs, and modern digital platforms across Africa.
          </p>
        </div>

        {/* glow orbs */}
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-[#00AFC4]/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-[#1A7FC7]/20 rounded-full blur-3xl" />
      </section>

      {/* ================= METRICS ================= */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { num: 99, suffix: "%", label: "API Uptime Target" },
            { num: 256, suffix: "-bit", label: "Encryption Standard" },
            { num: 24, suffix: "/7", label: "System Monitoring" },
            { num: 100, suffix: "%", label: "In-House Built" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -4 }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
            >
              <p className="text-3xl font-extrabold text-[#1A7FC7]">
                <CountUp end={stat.num} suffix={stat.suffix} />
              </p>
              <p className="text-sm text-gray-600 mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= STORY + TIMELINE ================= */}
      <section className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#1F2F55]">
            Our Journey
          </h2>

          <p className="text-gray-600 mb-6 leading-relaxed">
            Bimind Innovation started with a focused mission: build financial
            infrastructure that developers and businesses in emerging markets can
            actually rely on.
          </p>

          <p className="text-gray-600 leading-relaxed">
            We are proudly bootstrapped and engineering-led — prioritizing
            security, reliability, and long-term value over hype.
          </p>
        </div>

        {/* timeline */}
        <div className="space-y-6">
          {[
            "Company founded with fintech focus",
            "Core infrastructure architecture designed",
            "Developer-first APIs in development",
            "Expanding toward SME financial tools",
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex gap-4"
            >
              <div className="w-3 h-3 rounded-full bg-[#00AFC4] mt-2" />
              <p className="text-gray-700">{item}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= TRUST STRIP ================= */}
      <section className="bg-[#f8fafc] py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8 text-center">
          {[
            { icon: Lock, title: "Security Focused" },
            { icon: Server, title: "Scalable Architecture" },
            { icon: Globe, title: "Built for Global Standards" },
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100"
              >
                <Icon className="w-10 h-10 text-[#1A7FC7] mx-auto mb-4" />
                <p className="font-semibold text-[#1F2F55]">{item.title}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* ================= VALUES ================= */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8">
          {[
            {
              icon: ShieldCheck,
              title: "Security by Design",
              desc: "Strong security foundations in every system.",
            },
            {
              icon: Target,
              title: "Focused Execution",
              desc: "We ship reliable financial products.",
            },
            {
              icon: Users,
              title: "Customer-Centered",
              desc: "Built around real business needs.",
            },
            {
              icon: TrendingUp,
              title: "Long-Term Thinking",
              desc: "Optimized for durability, not hype.",
            },
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                whileHover={{ y: -6 }}
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 text-center"
              >
                <Icon className="w-10 h-10 text-[#1A7FC7] mb-4 mx-auto" />
                <h3 className="font-bold text-lg mb-2 text-[#1F2F55]">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="bg-[#0f172a] text-white text-center py-24 px-6">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Partner With Bimind Innovation
        </h2>

        <p className="text-white/70 max-w-2xl mx-auto mb-10">
          We are building the financial infrastructure layer for the next
          generation of African digital businesses.
        </p>

        <a
          href="/contact"
          className="inline-block bg-gradient-to-r from-[#1A7FC7] to-[#00AFC4] px-8 py-4 rounded-xl font-semibold hover:scale-105 transition"
        >
          Start Building With Us
        </a>
      </section>
    </div>
  );
}