import React from "react";
import { motion } from "framer-motion";
import AllImg from "../assets/all-pizzas.jpg";
import ClassicImg from "../assets/margherita.jpg";
import VeggieImg from "../assets/garden-delight.jpg";
import GourmetImg from "../assets/truffle-bliss.jpg";

function CategoryList({ selectedCategory, setSelectedCategory }) {
  const categories = [
    { name: "All", image: AllImg },
    { name: "Classic", image: ClassicImg },
    { name: "Veggie", image: VeggieImg },
    { name: "Gourmet", image: GourmetImg },
  ];

  return (
    <div className="flex justify-center flex-wrap gap-4 mb-12">
      {categories.map((category) => (
        <motion.button
          key={category.name}
          onClick={() => setSelectedCategory(category.name)}
          className={`flex items-center space-x-3 px-4 py-2 rounded-md transition-all duration-300 ${
            selectedCategory === category.name
              ? "bg-red-600 text-white shadow-md border-2 border-red-400"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300 border-2 border-transparent"
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <img
            src={category.image}
            alt={category.name}
            className="w-8 h-8 object-cover rounded-md"
          />
          <span className="text-sm font-medium">{category.name}</span>
        </motion.button>
      ))}
    </div>
  );
}

export default CategoryList;