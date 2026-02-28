import { motion } from "framer-motion";

export default function FloatingOrbs() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        animate={{ y: [0, -40, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-10 w-72 h-72 bg-[#00AFC4]/20 rounded-full blur-3xl"
      />

      <motion.div
        animate={{ y: [0, 50, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 right-10 w-96 h-96 bg-[#1A7FC7]/20 rounded-full blur-3xl"
      />
    </div>
  );
}