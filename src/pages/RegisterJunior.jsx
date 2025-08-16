import React, { useState } from "react";
import { motion } from "framer-motion";
import { databases } from "../lib/appwrite";
import conf from "../lib/config"; // adjust the path


export default function RegisterJunior() {
  const [form, setForm] = useState({ name: "", email: "" });
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const emailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com|nitp\.ac\.in$/;
    if (!emailPattern.test(form.email)) {
      setMessage("Invalid email !");
      setForm({ name: "", email: "" }); // reset form
      // Hide message after 3 seconds
      setTimeout(() => {
        setMessage("");
      }, 3000);
      return;
    }


    try {
      const response = await databases.createDocument(
        conf.database_id,
        conf.collection_juniorRegister,
        "unique()", // let Appwrite generate a unique document ID
        {
          Full_name: form.name,
          email: form.email,
        }
      );
      
      setMessage("Registration successful!");
      console.log(response);
      setForm({ name: "", email: "" }); // reset form
      // Hide message after 3 seconds
      setTimeout(() => {
        setMessage("");
      }, 3000);
    } catch (err) {
      setMessage(err.message);
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white flex items-center justify-center px-6 relative overflow-hidden">
      <motion.div
        className="w-full max-w-md bg-gray-800 rounded-2xl shadow-lg p-8"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
          Junior Registration
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
            className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
            className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />

          <button
            type="submit"
            className="w-full py-3 bg-blue-600 rounded-lg text-white font-medium hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/30"
          >
            Register
          </button>
        </form>

        {message && (
          <p className="mt-4 text-center text-green-400 font-medium">{message}</p>
        )}
      </motion.div>

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
