"use client";
import { useState } from "react";

export default function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Testimonials", href: "/testimonials" },
    { label: "Scam Tracing & Recovery", href: "/scam-tracing" },
  ];

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-20">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className="text-3xl font-extrabold">
            <span className="text-blue-600">N</span><span className="text-yellow-400">B</span>
          </span>
          <div className="flex flex-col leading-tight">
            <span className="font-bold text-xl text-gray-900">NeilBran Hacks</span>
            <span className="text-xs text-gray-500 font-medium -mt-1">Crypto Asset Recovery</span>
          </div>
        </div>
        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-8 font-poppins">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className="font-medium text-gray-900 hover:text-blue-600 transition">
              {item.label}
            </a>
          ))}
        </div>
        {/* Desktop Contact Us Button */}
        <div className="hidden md:flex items-center">
          <a href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg px-6 py-3 transition shadow-none">Contact us</a>
        </div>
        {/* Hamburger Icon for Mobile */}
        <button
          className="md:hidden flex items-center justify-center p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-label="Open menu"
          onClick={() => setSidebarOpen(true)}
        >
          <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-gray-900">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      {/* Sidebar Overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-50 bg-black/40" onClick={() => setSidebarOpen(false)} />
      )}
      {/* Sidebar Drawer */}
      <div
        className={`fixed top-0 left-0 z-[60] h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
        style={{ willChange: "transform" }}
      >
        <div className="flex items-center justify-between h-20 px-4 border-b border-gray-100">
          <div className="flex items-center gap-2">
            <span className="text-3xl font-extrabold">
              <span className="text-blue-600">N</span><span className="text-yellow-400">B</span>
            </span>
          </div>
          <button
            className="p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Close menu"
            onClick={() => setSidebarOpen(false)}
          >
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-gray-900">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <nav className="flex flex-col gap-4 mt-8 px-6 font-poppins">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="font-medium text-gray-900 hover:text-blue-600 transition text-lg"
              onClick={() => setSidebarOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
            href="/contact"
            className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg px-6 py-3 transition shadow-none text-center"
            onClick={() => setSidebarOpen(false)}
          >
            Contact us
          </a>
        </nav>
      </div>
    </nav>
  );
} 