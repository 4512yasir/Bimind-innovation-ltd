import { useState } from "react";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Contact() {
  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await emailjs.send(
        "service_hegjnjb",
        "template_isdtx8w",
        formData,
        "ZJjRslXTVoTyrS7vX"
      );

      toast.success("Message sent successfully!", {
        theme: "dark",
      });

      setFormData({
        user_name: "",
        user_email: "",
        message: "",
      });
    } catch (error) {
      console.error("EMAIL ERROR:", error);

      toast.error("Something went wrong. Try again.", {
        theme: "dark",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="relative min-h-screen bg-[#070b14] text-white overflow-hidden">
      {/* subtle noise */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.03] bg-[url('/noise.png')]" />

      <div className="relative max-w-7xl mx-auto px-6 py-20">
        {/* ===== HEADER ===== */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Contact <span className="text-cyan-400">Us</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Have questions about our fintech platform? Our team is ready to help
            you grow your financial future.
          </p>
        </div>

        {/* ===== GRID ===== */}
        <div className="grid lg:grid-cols-2 gap-10 items-stretch">
          {/* ================= LEFT — CONTACT INFO ================= */}
          <div className="space-y-6">
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-cyan-400/40 transition">
              <h3 className="text-xl font-semibold mb-6 text-cyan-400">
                Contact Details
              </h3>

              <div className="space-y-5 text-gray-300">
                <div>
                  <p className="font-medium text-white">📧 Email</p>
                  <p>bimindinnovation@gmail.com</p>
                </div>

                <div>
                  <p className="font-medium text-white">📞 Phone</p>
                  <p>+254 758741425</p>
                </div>

                <div>
                  <p className="font-medium text-white">📍 Location</p>
                  <p>Nairobi, Kenya</p>
                </div>

                <div>
                  <p className="font-medium text-white">🕒 Working Hours</p>
                  <p>Mon – Sat: 8:00 AM – 6:00 PM</p>
                </div>
              </div>
            </div>

            {/* extra premium card */}
            <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-400/20 rounded-2xl p-8">
              <h4 className="font-semibold text-lg mb-3">
                ⚡ Fast Response
              </h4>
              <p className="text-gray-400 text-sm">
                We typically respond within a few hours. Your financial journey
                matters to us.
              </p>
            </div>
          </div>

          {/* ================= RIGHT — FORM ================= */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-cyan-400/40 transition">
            <h3 className="text-xl font-semibold mb-6 text-cyan-400">
              Send Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* name */}
              <div>
                <label className="block text-sm mb-2 text-gray-300">
                  Full Name
                </label>
                <input
                  type="text"
                  name="user_name"
                  value={formData.user_name}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-cyan-400 transition"
                />
              </div>

              {/* email */}
              <div>
                <label className="block text-sm mb-2 text-gray-300">
                  Email Address
                </label>
                <input
                  type="email"
                  name="user_email"
                  value={formData.user_email}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-cyan-400 transition"
                />
              </div>

              {/* message */}
              <div>
                <label className="block text-sm mb-2 text-gray-300">
                  Message
                </label>
                <textarea
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-cyan-400 transition resize-none"
                />
              </div>

              {/* button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:opacity-90 transition rounded-lg py-3 font-semibold disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {isLoading ? (
                  <>
                    <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>

      <ToastContainer position="top-right" theme="dark" />
    </section>
  );
}