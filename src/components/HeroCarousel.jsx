import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import HeroImage1 from "../assets/hero-bg1.jpg";
import HeroImage2 from "../assets/hero-bg2.jpg";
import HeroImage3 from "../assets/hero-bg3.jpg";

function HeroCarousel({ scrollToMenu }) {
  const heroImages = [HeroImage1, HeroImage2, HeroImage3];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  const carouselVariants = {
    enter: { x: "100%", opacity: 0 },
    center: { x: 0, opacity: 0.85 },
    exit: { x: "-100%", opacity: 0 },
  };

  return (
    <div className="relative h-[60vh] flex items-center justify-center overflow-hidden">
      <motion.div
        className="absolute inset-0"
        key={currentImageIndex}
        variants={carouselVariants}
        initial="enter"
        animate="center"
        exit="exit"
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <img
          src={heroImages[currentImageIndex]}
          alt={`Hero ${currentImageIndex + 1}`}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />
      </motion.div>
      <motion.div
        className="relative z-10 text-center text-white p-6 bg-gradient-to-br from-gray-800/90 to-gray-900/70 rounded-xl shadow-2xl max-w-md mx-auto border border-white/10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-4 tracking-wide"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Welcome to PizzaZap
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl font-light mb-6 opacity-90 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Where every slice is made fresh, delivered fast, and packed with flavor. Your pizza adventure starts here!
        </motion.p>
        <motion.button
          onClick={scrollToMenu}
          className="inline-block bg-red-600 text-white px-6 py-2 rounded-full font-medium hover:bg-red-700 transition-all duration-300 shadow-md"
          whileHover={{ scale: 1.05, boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)" }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          Order Now
        </motion.button>
      </motion.div>
    </div>
  );
}

export default HeroCarousel;