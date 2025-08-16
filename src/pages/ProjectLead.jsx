import React, { useState } from "react";
import { motion } from "framer-motion";
import { databases } from "../lib/appwrite"; // make sure this exports a configured Databases instance
import conf from "../lib/config"; // your Appwrite config

export default function ProjectLead() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    expertise: "",
    leadershipExperience: "",
    projectIdea: "",
  });

  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Save form data directly to Appwrite collection
      const response = await databases.createDocument(
        conf.database_id,
        conf.collection_projectLeadRegister,
        "unique()", // let Appwrite generate a unique document ID
        {
          Full_Name: form.name,
          email: form.email,
          Expertise: form.expertise,
          Description: form.leadershipExperience,
          Project_idea: form.projectIdea,
        }
      );

      setMessage("Application submitted successfully!");
      console.log(response);
      setForm({
        name: "",
        email: "",
        expertise: "",
        leadershipExperience: "",
        projectIdea: "",
      });
    } catch (err) {
      setMessage(err.message);
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white flex flex-col items-center px-6 py-10 relative overflow-hidden">
      {/* Heading */}
      <motion.h2
        className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 text-center"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Project Lead Application
      </motion.h2>

      {/* Description */}
      <motion.p
        className="text-gray-300 text-lg max-w-2xl text-center mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        This form is only for seniors who have the technical skills, leadership
        qualities, and project vision to lead a team of juniors.
      </motion.p>

      {/* Form */}
      <motion.form
        onSubmit={handleSubmit}
        className="bg-gray-800 p-6 rounded-xl shadow-lg w-full max-w-lg space-y-4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <input
          type="text"
          placeholder="Full Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
          className="w-full p-3 rounded-lg bg-gray-900 text-white border border-gray-700 focus:border-blue-500 focus:outline-none"
        />

        <input
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
          className="w-full p-3 rounded-lg bg-gray-900 text-white border border-gray-700 focus:border-blue-500 focus:outline-none"
        />

        <input
          type="text"
          placeholder="Primary Expertise (e.g., Web Dev, AI, Blockchain)"
          value={form.expertise}
          onChange={(e) => setForm({ ...form, expertise: e.target.value })}
          required
          className="w-full p-3 rounded-lg bg-gray-900 text-white border border-gray-700 focus:border-blue-500 focus:outline-none"
        />

        <textarea
          placeholder="Briefly describe your leadership experience"
          value={form.leadershipExperience}
          onChange={(e) =>
            setForm({ ...form, leadershipExperience: e.target.value })
          }
          required
          className="w-full p-3 rounded-lg bg-gray-900 text-white border border-gray-700 focus:border-blue-500 focus:outline-none"
        />

        <textarea
          placeholder="Describe the project idea you want to lead"
          value={form.projectIdea}
          onChange={(e) => setForm({ ...form, projectIdea: e.target.value })}
          required
          className="w-full p-3 rounded-lg bg-gray-900 text-white border border-gray-700 focus:border-blue-500 focus:outline-none"
        />

        <button
          type="submit"
          className="w-full px-6 py-3 bg-purple-600 rounded-lg text-white font-medium hover:bg-purple-700 transition-colors shadow-lg shadow-purple-500/30"
        >
          Apply as Project Lead
        </button>

        {message && (
          <p className="mt-4 text-center text-green-400 font-medium">{message}</p>
        )}
      </motion.form>

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
