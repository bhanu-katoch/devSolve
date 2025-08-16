import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Home() {
  return (
<div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white flex flex-col items-center justify-center px-6 relative overflow-hidden">

      {/* Animated Heading */}
      <motion.h1
        className="text-5xl md:text-6xl font-extrabold mb-4 text-center md:text-left text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-gray-500"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Welcome to DevSolve Club
      </motion.h1>



      {/* Mission Section */}

      <motion.div
        className="max-w-2xl text-center mb-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        {/* Heading */}
        {/* <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent mb-6">
          Our Mission
        </h2> */}

        {/* Mission Points */}
        <ul className="space-y-4 text-gray-300 text-lg">
          <motion.li
            className="flex items-center gap-3"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-cyan-400 text-xl">✔</span>
            Learn by doing, through hands-on projects.
          </motion.li>
          <motion.li
            className="flex items-center gap-3"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-blue-400 text-xl">✔</span>
            Solve real-world challenges with peers.
          </motion.li>
          <motion.li
            className="flex items-center gap-3"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-purple-400 text-xl">✔</span>
            Grow together as passionate developers.
          </motion.li>
        </ul>
      </motion.div>



      {/* Join Buttons */}
      <motion.div
        className="flex flex-wrap justify-center gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 1 }}
      >
                <Link
          to="/register-junior"
          className="px-6 py-3 bg-blue-600 rounded-lg text-white font-medium hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/30"
        >
          Join as Junior
        </Link>

        <Link
          to="/project-lead"
          className="px-6 py-3 bg-purple-600 rounded-lg text-white font-medium hover:bg-purple-700 transition-colors shadow-lg shadow-purple-500/30
          "
        >
          Apply as Project Lead
        </Link>

        <Link
          to="/guidelines"
          className="px-6 py-3 bg-green-600 rounded-lg text-white font-medium hover:bg-green-700 transition-colors shadow-lg shadow-green-500/30"
        >
          View Guidelines
        </Link>
      </motion.div>

      {/* Floating Glow Animation */}
      <motion.div
        className="absolute w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        animate={{
          x: [0, 50, -50, 0],
          y: [0, -50, 50, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "mirror",
        }}
        style={{ zIndex: -1 }}
      />
    </div>
  );
}
