import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Footer() {
  return (
    <footer className="bg-black text-white py-8 mt-auto">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand Section */}
        <div>
          <h3 className="text-2xl font-bold text-red-600 mb-4">PizzaZap</h3>
          <p className="text-gray-400 text-sm">
            Fresh pizzas, zapped to your door with speed and love.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="text-gray-400 hover:text-red-600 transition-all duration-200">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-gray-400 hover:text-red-600 transition-all duration-200">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-gray-400 hover:text-red-600 transition-all duration-200">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Social & Contact */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
          <p className="text-gray-400 text-sm mb-2">Email: hello@pizzazap.com</p>
          <p className="text-gray-400 text-sm mb-4">Phone: (555) 123-4567</p>
          <div className="flex space-x-4">
            <motion.a
              href="https://facebook.com"
              target="_blank"
              className="text-gray-400 hover:text-red-600"
              whileHover={{ scale: 1.2 }}
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
              </svg>
            </motion.a>
            <motion.a
              href="https://twitter.com"
              target="_blank"
              className="text-gray-400 hover:text-red-600"
              whileHover={{ scale: 1.2 }}
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557a9.83 9.83 0 01-2.828.775 4.932 4.932 0 002.165-2.724 9.864 9.864 0 01-3.127 1.195 4.916 4.916 0 00-8.379 4.482 13.944 13.944 0 01-10.121-5.13 4.916 4.916 0 001.523 6.56 4.904 4.904 0 01-2.229-.616v.062a4.917 4.917 0 003.946 4.827 4.902 4.902 0 01-2.224.084 4.918 4.918 0 004.59 3.417 9.867 9.867 0 01-6.102 2.105c-.398 0-.79-.023-1.175-.068a13.944 13.944 0 007.548 2.212c9.057 0 14.01-7.502 14.01-14.01 0-.213-.005-.425-.014-.636A10.012 10.012 0 0024 4.557z" />
              </svg>
            </motion.a>
            <motion.a
              href="https://instagram.com"
              target="_blank"
              className="text-gray-400 hover:text-red-600"
              whileHover={{ scale: 1.2 }}
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.326 3.608 1.301.975.975 1.24 2.242 1.301 3.608.058 1.266.07 1.646.07 4.85 0 3.204-.012 3.584-.07 4.85-.062 1.366-.326 2.633-1.301 3.608-1.301.975-.975 1.24-2.242 1.301-3.608.058-1.266.07-1.646.07-4.85 0-3.204-.012-3.584-.07-4.85-.062-1.366-.326-2.633-1.301-3.608-.975-.975-2.242-1.24-3.608-1.301-1.266-.058-1.646-.07-4.85-.07-3.204 0-3.584.012-4.85.07-1.366.062-2.633.326-3.608 1.301-.975.975-1.24 2.242-1.301 3.608-.058 1.266-.07 1.646-.07 4.85zm0-2.163c-3.259 0-3.667.014-4.947.072-1.453.066-2.944.392-4.022 1.47C1.953 2.62 1.627 4.11 1.561 5.563c-.058 1.28-.072 1.688-.072 4.947s.014 3.667.072 4.947c.066 1.453.392 2.944 1.47 4.022 1.078 1.078 2.569 1.404 4.022 1.47 1.28.058 1.688.072 4.947.072s3.667-.014 4.947-.072c1.453-.066 2.944-.392 4.022-1.47 1.078-1.078 1.404-2.569 1.47-4.022.058-1.28.072-1.688.072-4.947s-.014-3.667-.072-4.947c-.066-1.453-.392-2.944-1.47-4.022-1.078-1.078-2.569-1.404-4.022-1.47-1.28-.058-1.688-.072-4.947-.072zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" />
              </svg>
            </motion.a>
          </div>
        </div>
      </div>
      <div className="text-center text-gray-500 text-sm mt-6">
        &copy; {new Date().getFullYear()} PizzaZap. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;