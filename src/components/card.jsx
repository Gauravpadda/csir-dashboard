import { motion } from "framer-motion";
export default function Card({ children }) {
    return (
      <motion.div
        className="h-full w-full bg-[#5f5490] rounded-xl flex flex-col justify-center items-center shadow-lg p-4"
        whileHover={{ scale: 1.02 }}
      >
        {children}
      </motion.div>
    );
  }