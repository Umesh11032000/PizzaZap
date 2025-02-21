import React from "react";
import { motion } from "framer-motion";

function CartModal({ cart, setCart, isCartOpen, setIsCartOpen }) {
  const addToCart = (pizza) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === pizza.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === pizza.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...pizza, quantity: 1 }];
    });
  };

  const removeFromCart = (pizzaId) => {
    setCart((prevCart) => {
      const item = prevCart.find((item) => item.id === pizzaId);
      if (item?.quantity > 1) {
        return prevCart.map((item) =>
          item.id === pizzaId ? { ...item, quantity: item.quantity - 1 } : item
        );
      }
      return prevCart.filter((item) => item.id !== pizzaId);
    });
  };

  const cartTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    isCartOpen && (
      <motion.div
        className="fixed inset-0 bg-black/50 flex items-center justify-center z-30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="bg-white rounded-lg p-6 max-w-md w-full mx-4 shadow-xl"
          initial={{ scale: 0.9, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.9, y: 20 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-gray-800">Your Cart</h2>
            <button
              onClick={() => setIsCartOpen(false)}
              className="text-gray-500 hover:text-gray-700 text-lg"
            >
              ✕
            </button>
          </div>
          {cart.length === 0 ? (
            <p className="text-gray-500 text-center py-4">Your cart is empty.</p>
          ) : (
            <>
              <div className="space-y-4 max-h-64 overflow-y-auto">
                {cart.map((item) => (
                  <div key={item.id} className="flex justify-between items-center">
                    <div className="flex items-center space-x-3">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-12 h-12 object-cover rounded-md"
                      />
                      <div>
                        <p className="text-gray-800 font-medium text-sm">{item.name}</p>
                        <p className="text-gray-500 text-xs">${item.price.toFixed(2)}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center space-x-2">
                        <motion.button
                          onClick={() => removeFromCart(item.id)}
                          className="w-6 h-6 bg-red-600 text-white rounded-full hover:bg-red-700 transition-all duration-200"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          -
                        </motion.button>
                        <span className="text-gray-800 text-sm">{item.quantity}</span>
                        <motion.button
                          onClick={() => addToCart(item)}
                          className="w-6 h-6 bg-red-600 text-white rounded-full hover:bg-red-700 transition-all duration-200"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          +
                        </motion.button>
                      </div>
                      <motion.button
                        onClick={() => setCart(cart.filter((i) => i.id !== item.id))}
                        className="text-red-600 text-sm font-medium hover:text-red-800 transition-all duration-200"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Remove
                      </motion.button>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6">
                <p className="text-lg font-semibold text-gray-800 text-right">
                  Total: ${cartTotal.toFixed(2)}
                </p>
                <motion.button
                  className="w-full mt-4 bg-red-600 text-white py-2 rounded-md hover:bg-red-700 transition-all duration-200 font-medium"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => alert("Proceed to checkout!")}
                >
                  Checkout
                </motion.button>
              </div>
            </>
          )}
        </motion.div>
      </motion.div>
    )
  );
}

export default CartModal;