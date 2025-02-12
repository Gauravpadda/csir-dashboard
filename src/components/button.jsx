import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function Button({ title, path }) {
  const navigate = useNavigate();

  return (
    <motion.button
      onClick={() => navigate(path)}
      className="h-8 px-6 bg-[#5f5490] rounded-xl border border-[#d1d5db] text-[#eeeeff] text-xl cursor-pointer transition-transform transform hover:scale-105"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      {title}
    </motion.button>
  );
}
