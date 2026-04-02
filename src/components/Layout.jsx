"use client";
import { useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }) {
  // Init theme from localStorage on first load
  useEffect(() => {
    const stored = localStorage.getItem("theme") || "light";
    document.documentElement.setAttribute("data-theme", stored);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-base-100 text-base-content">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
