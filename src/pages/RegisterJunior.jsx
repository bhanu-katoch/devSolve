import React, { useState } from "react";
import { motion } from "framer-motion";
import { databases } from "../lib/appwrite";
import conf from "../lib/config"; // adjust the path

export default function RegisterJunior() {
  const [step, setStep] = useState(1); // 1 = enter email, 2 = enter OTP + details
  const [form, setForm] = useState({ email: "", name: "", passion: "" });
  const [otp, setOtp] = useState("");
  const [message, setMessage] = useState("");
  const [otpSent, setOtpSent] = useState(false);


  // Send OTP function
  const sendOtp = async () => {
    if (!form.email) {
      setMessage("Enter email first!");
      return;
    }
    try {
      const res = await fetch("/api/send-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ data: { email: form.email } }), // send email directly
      });
      const data = await res.json();
      console.log(data)
      if (data.success) {
        setMessage(`${data.message}`);
        setOtpSent(true);
        setStep(2);
      } else {
        setMessage(data.error || "Failed to send OTP");
        setForm({...form,email:""})
      }
    } catch (err) {
      console.error(err);
      setMessage("Error sending OTP");
    }
    setTimeout(() => setMessage(""), 3000);
  };

  // Verify OTP function
  const verifyOtp = async () => {
    if (!otp) {
      setMessage("Enter OTP first!");
      return;
    }
    try {
      const res = await fetch("/api/verify-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: form.email, otp,Full_name: form.name }),
      });
      const data = await res.json();
      console.log(data);
      if (data.success) {
        // Save user to DB at verify-otp 
        setMessage("Registration successful!");
        // Reset everything
        setForm({ email: "", name: "", passion: "" });
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
        className="w-full max-w-md bg-gray-800 rounded-2xl shadow-lg p-8"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
          Junior Registration
        </h2>

        {step === 1 && (
          <div className="space-y-4">
            <input
              type="email"
              placeholder="Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={sendOtp}
              className="w-full py-3 bg-blue-600 rounded-lg text-white font-medium hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/30"
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
              className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              placeholder="Describe Your Passion"
              value={form.passion}
              onChange={(e) => setForm({ ...form, passion: e.target.value })}
              className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <input
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            <div className="flex gap-4">
              <button
                onClick={verifyOtp}
                className="flex-1 py-3 bg-green-600 rounded-lg text-white font-medium hover:bg-green-700 transition-colors"
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
