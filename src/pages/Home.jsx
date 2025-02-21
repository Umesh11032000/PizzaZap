import React, { useState, useRef } from 'react'
import HeroCarousel from '../components/HeroCarousel'
import CategoryList from '../components/CategoryList'
import PizzaList from '../components/PizzaList'
import CartModal from '../components/CartModal'
import { motion } from 'framer-motion'

function Home () {
  const menuRef = useRef(null)
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [cart, setCart] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false)

  const scrollToMenu = () => {
    menuRef.current.scrollIntoView({ behavior: 'smooth' })
  }

  const addToCart = pizza => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === pizza.id)
      if (existingItem) {
        return prevCart.map(item =>
          item.id === pizza.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      }
      return [...prevCart, { ...pizza, quantity: 1 }]
    })
  }

  const removeFromCart = pizzaId => {
    setCart(prevCart => {
      const item = prevCart.find(item => item.id === pizzaId)
      if (item?.quantity > 1) {
        return prevCart.map(item =>
          item.id === pizzaId ? { ...item, quantity: item.quantity - 1 } : item
        )
      }
      return prevCart.filter(item => item.id !== pizzaId)
    })
  }

  return (
    <div className='min-h-screen bg-gray-100 flex flex-col'>
      <HeroCarousel scrollToMenu={scrollToMenu} />
      <div
        ref={menuRef}
        className='py-16 max-w-6xl mx-auto px-6 relative flex-grow'
      >
        <motion.button
          onClick={() => setIsCartOpen(true)}
          className='fixed top-20 right-4 bg-red-600 text-white px-4 py-2 rounded-full font-medium hover:bg-red-700 transition-all duration-300 shadow-md z-20 flex items-center space-x-2'
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span>Cart</span>
          {cart.length > 0 && (
            <span className='bg-white text-red-600 rounded-full px-2 py-1 text-sm'>
              {cart.reduce((sum, item) => sum + item.quantity, 0)}
            </span>
          )}
        </motion.button>
        <CategoryList
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <PizzaList
          selectedCategory={selectedCategory}
          cart={cart}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
        <CartModal
          cart={cart}
          setCart={setCart}
          isCartOpen={isCartOpen}
          setIsCartOpen={setIsCartOpen}
        />
      </div>
    </div>
  )
}

export default Home
