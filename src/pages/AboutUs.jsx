import React from "react";
import { motion } from "framer-motion";
import AboutImage from "../assets/logo.jpg"; // Add a team/pizza-making image

function AboutUs() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <div className="flex-grow py-16 max-w-4xl mx-auto px-6 text-center">
        <motion.h1
          className="text-4xl font-bold text-gray-800 mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          About PizzaZap
        </motion.h1>
        <motion.img
          src={AboutImage}
          alt="Our Team"
          className="w-full max-w-md mx-auto rounded-lg shadow-lg mb-8"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        />
        <motion.p
          className="text-lg text-gray-600 mb-6 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          At PizzaZap, we’re passionate about pizza. Born from a love of fresh ingredients and a mission to deliver fast, we’ve been zapping delicious, hand-crafted pizzas to doorsteps since 2023. Our team blends tradition with innovation, ensuring every slice is a burst of flavor—made just for you.
        </motion.p>
        <motion.p
          className="text-lg text-gray-600 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Whether it’s a classic Margherita or a gourmet Truffle Bliss, we’re here to make your pizza dreams come true—fast, fresh, and with a smile!
        </motion.p>
      </div>
    </div>
  );
}

export default AboutUs;