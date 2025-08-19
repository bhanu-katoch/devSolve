import React, { useState } from "react";
import { motion } from "framer-motion";

export default function ProjectLead() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    name: "",
    email: "",
    expertise: "",
    leadershipExperience: "",
    projectIdea: "",
  });
  const [otp, setOtp] = useState("");
  const [message, setMessage] = useState("");
  const [otpSent, setOtpSent] = useState(false);

  // Send OTP
  const sendOtp = async () => {
    if (!form.email.trim()) {
      setMessage("Enter email first!");
      return;
    }
    try {
      const res = await fetch("/api/send-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ data: { email: form.email } }),
      });
      const data = await res.json();
      console.log(data);
      if (data.success) {
        setMessage(data.message);
        setOtpSent(true);
        setStep(2);
      } else {
        setMessage(data.error || "Failed to send OTP");
        setForm({ ...form, email: "" });
      }
    } catch (err) {
      console.error(err);
      setMessage("Error sending OTP");
    }
    setTimeout(() => setMessage(""), 3000);
  };

  // Verify OTP
  const verifyOtp = async () => {
    if (
      !form.name.trim() ||
      !form.expertise.trim() ||
      !form.leadershipExperience.trim() ||
      !form.projectIdea.trim() ||
      !otp.trim()
    ) {
      setMessage("All fields are required!");
      return;
    }
    try {
      const res = await fetch("/api/otp-verify-project", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: form.email,
          otp,
          Full_Name: form.name,
          Expertise: form.expertise,
          Description: form.leadershipExperience,
          Project_idea: form.projectIdea,
        }),
      });
      const data = await res.json();
      console.log(data);
      if (data.success) {
        setMessage("Project Lead registration successful!");
        setForm({
          name: "",
          email: "",
          expertise: "",
          leadershipExperience: "",
          projectIdea: "",
        });
        setOtp("");
        setOtpSent(false);
        setStep(1);
      } else {
        setMessage(data.error || "Invalid OTP");
      }
    } catch (err) {
      console.error(err);
      setMessage("Error verifying OTP");
    }
    setTimeout(() => setMessage(""), 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white flex items-center justify-center px-6 relative overflow-hidden">
      <motion.div
        className="w-full max-w-lg bg-gray-800 rounded-2xl shadow-lg p-8"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
          Project Lead Registration
        </h2>

        {step === 1 && (
          <div className="space-y-4">
            <input
              type="email"
              placeholder="Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
              className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={sendOtp}
              disabled={!form.email.trim()}
              className={`w-full py-3 rounded-lg text-white font-medium transition-colors shadow-lg ${
                form.email.trim()
                  ? "bg-blue-600 hover:bg-blue-700 shadow-blue-500/30"
                  : "bg-gray-600 cursor-not-allowed"
              }`}
            >
              Send OTP
            </button>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
              className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="Primary Expertise (e.g., Web Dev, AI, Blockchain)"
              value={form.expertise}
              onChange={(e) => setForm({ ...form, expertise: e.target.value })}
              required
              className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <textarea
              placeholder="Briefly describe your leadership experience"
              value={form.leadershipExperience}
              onChange={(e) =>
                setForm({ ...form, leadershipExperience: e.target.value })
              }
              required
              className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <textarea
              placeholder="Describe the project idea you want to lead"
              value={form.projectIdea}
              onChange={(e) =>
                setForm({ ...form, projectIdea: e.target.value })
              }
              required
              className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <input
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              required
              className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            <div className="flex gap-4">
              <button
                onClick={verifyOtp}
                disabled={
                  !form.name.trim() ||
                  !form.expertise.trim() ||
                  !form.leadershipExperience.trim() ||
                  !form.projectIdea.trim() ||
                  !otp.trim()
                }
                className={`flex-1 py-3 rounded-lg text-white font-medium transition-colors ${
                  form.name.trim() &&
                  form.expertise.trim() &&
                  form.leadershipExperience.trim() &&
                  form.projectIdea.trim() &&
                  otp.trim()
                    ? "bg-green-600 hover:bg-green-700"
                    : "bg-gray-600 cursor-not-allowed"
                }`}
              >
                Verify OTP
              </button>
              <button
                onClick={sendOtp}
                className="flex-1 py-3 bg-yellow-600 rounded-lg text-white font-medium hover:bg-yellow-700 transition-colors"
              >
                Resend OTP
              </button>
            </div>
          </div>
        )}

        {message && (
          <motion.div
            className="fixed top-20 right-10 bg-purple-500 text-white text-xl px-4 py-2 rounded shadow-lg z-50"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            {message}
          </motion.div>
        )}
      </motion.div>

      {/* Background animation */}
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
