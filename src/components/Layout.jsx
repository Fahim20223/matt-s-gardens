"use client";
import { usePathname } from "next/navigation";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Layout({ children }) {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      {/* Home page manages its own top spacing via Hero pt-24.
          All other pages need padding to clear the fixed 72px navbar. */}
      <main className={`flex-1 ${isHome ? "" : "pt-[64px]"}`}>
        {children}
      </main>
      <Footer />
    </div>
  );
}
