import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import MargheritaImg from "../assets/margherita.jpg";
import PepperoniImg from "../assets/pepperoni.jpg";
import GardenDelightImg from "../assets/garden-delight.jpg";
import MushroomMagicImg from "../assets/mushroom-magic.jpg";
import TruffleBlissImg from "../assets/truffle-bliss.jpg";
import FigGoatImg from "../assets/fig-goat.jpg";
import { fetchPizzas } from "../api/pizzaApi";

function PizzaList({ selectedCategory, cart, addToCart, removeFromCart }) {
    const [pizzas, setPizzas] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const getPizzas = async () => {
        try {
          const data = await fetchPizzas();
          setPizzas(data);
          setLoading(false);
        } catch (error) {
          console.error("Error fetching pizzas:", error);
          setLoading(false);
        }
      };
      getPizzas();
    }, []);
  
    const filteredPizzas =
      selectedCategory === "All"
        ? pizzas
        : pizzas.filter((pizza) => pizza.category === selectedCategory);
  
    const getItemQuantity = (pizzaId) => {
      const item = cart.find((item) => item.id === pizzaId);
      return item ? item.quantity : 0;
    };
  
    if (loading) {
      return <div className="text-center py-8 text-gray-600">Loading pizzas...</div>;
    }
  
    return (
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
        }}
      >
        {filteredPizzas.map((pizza) => {
          const quantity = getItemQuantity(pizza.id);
          return (
            <motion.div
              key={pizza.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <img
                src={pizza.image}
                alt={pizza.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-800 mb-1">{pizza.name}</h3>
                <p className="text-gray-500 text-sm mb-3">{pizza.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-medium text-red-600">
                    ${pizza.price.toFixed(2)}
                  </span>
                  <div className="flex items-center space-x-2">
                    {quantity > 0 && (
                      <motion.button
                        onClick={() => removeFromCart(pizza.id)}
                        className="bg-red-600 text-white px-4 py-1 rounded-md hover:bg-red-700 transition-all duration-200 text-sm font-medium"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        -
                      </motion.button>
                    )}
                    {quantity > 0 && (
                      <span className="text-gray-800 text-sm">{quantity}</span>
                    )}
                    <motion.button
                      onClick={() => addToCart(pizza)}
                      className="bg-red-600 text-white px-4 py-1 rounded-md hover:bg-red-700 transition-all duration-200 text-sm font-medium"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {quantity > 0 ? "+" : "Add"}
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    );
  }

export default PizzaList;