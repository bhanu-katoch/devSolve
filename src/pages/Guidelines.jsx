import React from "react";
import { motion } from "framer-motion";

export default function Guidelines() {
  const guidelines = [
    "Juniors join to learn and contribute to projects.",
    "Seniors must have leadership, problem-solving, and project management skills.",
    "For girls, dedicated senior consultants are available for safety & support.",
    "Projects include Web Dev, DSA, AI, ML, Blockchain, and more.",
    "Respect, discipline, and professional ethics are mandatory.",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white flex items-center justify-center px-6 relative overflow-hidden">
      <motion.div
        className="w-full max-w-2xl bg-gray-800 rounded-2xl shadow-lg p-8"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Heading */}
        <h2 className="text-3xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
          Club Guidelines
        </h2>

        {/* List */}
        <ul className="space-y-4">
          {guidelines.map((item, index) => (
            <motion.li
              key={index}
              className="flex items-start gap-3 bg-gray-700/50 p-4 rounded-lg border border-gray-600"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
            >
              <span className="text-green-400 font-bold">✓</span>
              <span className="text-gray-300">{item}</span>
            </motion.li>
          ))}
        </ul>

        {/* Back to Home */}
        {/* <div className="text-center mt-6">
          <a
            href="/"
            className="text-sm text-gray-400 hover:text-green-400 transition"
          >
            ← Back to Home
          </a>
        </div> */}
      </motion.div>

      {/* Floating Glow Animation */}
      <motion.div
        className="absolute w-72 h-72 bg-green-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
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
