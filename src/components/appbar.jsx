import Button from "./button";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // Import icons for the hamburger menu

export default function Appbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen); // Toggle the menu
  };

  return (
    <motion.div
      className="h-[60px] w-full bg-[linear-gradient(120deg,#062726_20%,#8a4fff_40%,#8a4fff_60%,#102b3f_80%)] grid grid-cols-4 gap-4 content-center border-b border-[#d1d5db] fixed z-50 shadow-lg px-4 lg:px-8"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      
      <div className="flex justify-between items-center lg:hidden col-span-1">
        <button onClick={handleMenuToggle} className="text-[#d1d5db]">
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

     
      <div className="hidden lg:grid grid-cols-5 content-center justify-items-center col-span-4">
        {[
          { title: "HOME", path: "/" },
          { title: "RGB DATA", path: "/rgbsensor" },
          { title: "GAS SENSOR DATA", path: "/gassensor" },
          { title: "SPECTRAL DATA", path: "/spectralsensor" },
          {title:"ABOUT US",path:"/aboutus"}
        ].map((item, index) => (
          <div key={index} className="flex justify-center items-center">
            <Button title={item.title} path={item.path} />
          </div>
        ))}
      </div>

      
      {menuOpen && (
        <div className="lg:hidden absolute top-16 left-0 w-full bg-[#062726] flex flex-wrap text-center py-4 items-center">
          {[
            { title: "HOME", path: "/" },
            { title: "RGB DATA", path: "/rgbsensor" },
            { title: "GAS SENSOR DATA", path: "/gassensor" },
            { title: "SPECTRAL DATA", path: "/spectralsensor" },
            {title:"ABOUT US",path:"/aboutus"}
          ].map((item, index) => (
            <div key={index} className="m-4 ">
              <Button title={item.title} path={item.path} />
            </div>
          ))}
        </div>
      )}
    </motion.div>
  );
}
