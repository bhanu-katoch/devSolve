import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export default function AppLayout({ children }) {
  const navbarRef = useRef(null);
  const [navbarHeight, setNavbarHeight] = useState(0);

  useEffect(() => {
    if (navbarRef.current) {
      setNavbarHeight(navbarRef.current.offsetHeight);
    }
  }, []);

  return (
    <>
      <motion.nav
        ref={navbarRef}
        className="fixed top-0 left-0 w-full z-50 flex items-center px-6 py-4 bg-transparent backdrop-blur-md"
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Link to="/">
        <img
            src={logo}
            alt="DevSolve Club Logo"
            className="h-20 w-auto transition duration-300 ease-in-out hover:filter hover:brightness-0 hover:invert"
        />
        </Link>

      </motion.nav>

      {/* Main content with dynamic top padding */}
      <div style={{ paddingTop: navbarHeight }}>
        {children}
      </div>
    </>
  );
}
