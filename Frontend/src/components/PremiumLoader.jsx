import { motion } from "framer-motion";

export default function PremiumLoader() {
  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-[#0B1220]">
      {/* background glow */}
      <div className="absolute w-[500px] h-[500px] bg-[#1A7FC7]/20 rounded-full blur-3xl animate-pulse" />

      {/* loader content */}
      <div className="relative flex flex-col items-center gap-6">
        {/* animated logo ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "linear" }}
          className="w-16 h-16 rounded-full border-4 border-[#1A7FC7]/30 border-t-[#00AFC4]"
        />

        {/* brand text */}
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-white font-semibold tracking-wide"
        >
          Bimind Innovation
        </motion.h1>

        {/* loading dots */}
        <motion.div
          className="flex gap-2"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2,
                repeat: Infinity,
                repeatType: "loop",
              },
            },
          }}
        >
          {[0, 1, 2].map((i) => (
            <motion.span
              key={i}
              className="w-2 h-2 bg-[#00AFC4] rounded-full"
              variants={{
                hidden: { opacity: 0.3, y: 0 },
                visible: {
                  opacity: 1,
                  y: -6,
                  transition: { duration: 0.4 },
                },
              }}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
}