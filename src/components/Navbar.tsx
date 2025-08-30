"use client";

import { useEffect, useMemo, useState } from "react";
import { Menu } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/lib/siteConfig";
import React from "react";
import Image from "next/image";

const SECTIONS = ["home", "services", "why-choose-us", "process", "about", "projects", "contact"] as const;

export function Navbar(): React.JSX.Element {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const useScrollSpy = (ids: readonly string[], offset: number = 0) => {
    useEffect(() => {
      const listener = () => {
        const elements = ids.map((id) => document.getElementById(id)).filter((el): el is HTMLElement => el !== null);
        const scrollPosition = window.scrollY + offset;

        for (let i = elements.length - 1; i >= 0; i--) {
          const element = elements[i];
          if (element.offsetTop <= scrollPosition) {
            setActiveSection(element.id);
            break;
          }
        }
      };

      listener();
      window.addEventListener("scroll", listener);
      return () => window.removeEventListener("scroll", listener);
    }, [ids, offset]);
  };

  useScrollSpy(SECTIONS, 100);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  const menuVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 }
  };

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? "bg-white/20 backdrop-blur-3xl border-b border-white/40 shadow-2xl" 
          : "bg-white/8 backdrop-blur-xl border-b border-white/15"
      }`}
    >
      {/* Enhanced Glassmorphic Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/15 to-teal-500/15 hover:from-emerald-500/25 hover:to-teal-500/25 transition-all duration-500"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-70 hover:opacity-100 animate-shimmer transition-opacity duration-700"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/15 via-white/8 to-teal-50/15"></div>
      <div className="absolute inset-0 bg-gradient-to-l from-cyan-500/8 via-transparent to-emerald-500/8 opacity-50"></div>
      
      {/* Additional glassmorphic layers for depth */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-300/40 to-transparent"></div>
      
      {/* Enhanced Floating Glassmorphic Orbs */}
      <div className="absolute top-2 right-1/4 w-8 h-8 bg-white/25 backdrop-blur-xl rounded-full border border-white/40 animate-float opacity-50 shadow-lg"></div>
      <div className="absolute bottom-2 left-1/3 w-6 h-6 bg-emerald-400/25 backdrop-blur-xl rounded-full border border-emerald-300/40 animate-float delay-1000 opacity-60 shadow-md"></div>
      <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-teal-400/25 backdrop-blur-xl rounded-full border border-teal-300/40 animate-float delay-500 opacity-40 shadow-sm"></div>
      <div className="absolute top-1 left-1/5 w-5 h-5 bg-cyan-400/20 backdrop-blur-lg rounded-full border border-cyan-300/30 animate-float delay-2000 opacity-45 shadow-md"></div>
      <div className="absolute bottom-1 right-1/5 w-3 h-3 bg-emerald-300/30 backdrop-blur-md rounded-full border border-emerald-200/40 animate-float delay-1500 opacity-35 shadow-sm"></div>
      
      {/* Enhanced Floating particles */}
      <div className="absolute top-3 right-1/6 w-1.5 h-1.5 bg-emerald-400/50 rounded-full animate-ping shadow-sm"></div>
      <div className="absolute bottom-3 left-1/5 w-1 h-1 bg-teal-400/60 rounded-full animate-ping delay-800 shadow-sm"></div>
      <div className="absolute top-4 left-3/4 w-0.5 h-0.5 bg-cyan-400/70 rounded-full animate-ping delay-1200"></div>
      <div className="absolute top-2 left-2/3 w-1 h-1 bg-emerald-300/50 rounded-full animate-pulse delay-400"></div>
      <div className="absolute bottom-4 right-1/3 w-0.5 h-0.5 bg-teal-300/60 rounded-full animate-pulse delay-1000"></div>
      <div className="absolute top-5 left-1/6 w-1.5 h-1.5 bg-cyan-300/40 rounded-full animate-bounce delay-600"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => scrollToSection("home")}
          >
            <div className="w-10 h-10 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl flex items-center justify-center shadow-xl relative overflow-hidden backdrop-blur-xl border-2 border-white/30">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent animate-shimmer"></div>
              <div className="absolute inset-0 bg-white/15 rounded-xl"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/20 to-teal-400/20 rounded-xl"></div>
              <div className="absolute top-0 left-0 w-2 h-2 bg-white/40 rounded-full blur-sm"></div>
              <div className="absolute bottom-1 right-1 w-1 h-1 bg-cyan-300/60 rounded-full"></div>
              <Image src="/lotusly-favicon.svg" alt="Lotusly logo" width={24} height={24} className="relative z-10" priority />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-gray-950 to-gray-800 bg-clip-text text-transparent">
              {siteConfig.name}
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {SECTIONS.map((section) => (
              <motion.button
                key={section}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection(section)}
                className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-xl hover:bg-white/15 hover:backdrop-blur-xl hover:border hover:border-white/30 hover:shadow-xl group ${
                  activeSection === section
                    ? "text-emerald-600 bg-white/25 backdrop-blur-2xl border-2 border-white/50 shadow-2xl"
                    : "text-gray-800 hover:text-emerald-600"
                }`}
              >
                {/* Enhanced Active Background - Bubble Effect */}
                {activeSection === section && (
                  <motion.div
                    layoutId="activeBubble"
                    className="absolute inset-0 bg-gradient-to-br from-emerald-100/50 via-white/30 to-teal-100/50 rounded-xl"
                    initial={false}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  />
                )}
                
                {/* Shimmer effect for active state */}
                {activeSection === section && (
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer rounded-xl"></div>
                )}
                
                {/* Enhanced Glassmorphic background on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-50/0 via-emerald-50/40 to-emerald-50/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-emerald-100/20 to-teal-100/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
                <div className="absolute inset-0 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                
                {/* Active state floating particles */}
                {activeSection === section && (
                  <>
                    <div className="absolute top-1 right-2 w-1.5 h-1.5 bg-emerald-400/60 rounded-full animate-ping"></div>
                    <div className="absolute bottom-1 left-2 w-1 h-1 bg-teal-400/50 rounded-full animate-ping delay-500"></div>
                    <div className="absolute top-2 left-1/2 w-0.5 h-0.5 bg-cyan-400/70 rounded-full animate-ping delay-300"></div>
                  </>
                )}
                
                <span className="relative z-10">{section.charAt(0).toUpperCase() + section.slice(1)}</span>
                
                {/* Enhanced Underline for active state */}
                {activeSection === section && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-1 left-2 right-2 h-0.5 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full shadow-lg"
                    initial={false}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
                
                {/* Floating particle on hover */}
                <div className="absolute top-1 right-1 w-1 h-1 bg-emerald-400/0 group-hover:bg-emerald-400/50 rounded-full animate-ping transition-colors duration-300"></div>
              </motion.button>
            ))}
          </div>

          {/* Enhanced Glassmorphic CTA Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection("contact")}
            className="hidden lg:inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-semibold rounded-full shadow-xl hover:shadow-2xl transform transition-all duration-300 backdrop-blur-xl border-2 border-white/30 relative overflow-hidden group"
          >
            {/* Enhanced Glassmorphic overlay */}
            <div className="absolute inset-0 bg-white/15 rounded-full"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent opacity-0 group-hover:opacity-100 animate-shimmer transition-opacity duration-500"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/20 to-teal-400/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute top-0 left-1/4 w-3 h-3 bg-white/30 rounded-full blur-sm opacity-60"></div>
            <div className="absolute bottom-1 right-2 w-1 h-1 bg-cyan-200/60 rounded-full"></div>
            
            <span className="relative z-10">Get Started</span>
            
            {/* Floating particle */}
            <div className="absolute top-1 right-2 w-1 h-1 bg-white/0 group-hover:bg-white/60 rounded-full animate-ping transition-colors duration-300"></div>
          </motion.button>

          {/* Enhanced Glassmorphic Mobile Menu Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden w-10 h-10 bg-white/30 backdrop-blur-2xl border-2 border-white/50 rounded-xl flex items-center justify-center shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden group"
          >
            {/* Enhanced Glassmorphic background */}
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/25 to-teal-50/25 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 animate-shimmer transition-opacity duration-500"></div>
            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
            <div className="absolute top-0 left-0 w-2 h-2 bg-white/40 rounded-full blur-sm opacity-70"></div>
            
            <Menu className="h-5 w-5 text-gray-800 group-hover:text-emerald-600 transition-colors duration-300 relative z-10" />
            
            {/* Floating particle */}
            <div className="absolute top-1 right-1 w-0.5 h-0.5 bg-emerald-400/0 group-hover:bg-emerald-400/60 rounded-full animate-ping transition-colors duration-300"></div>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{ duration: 0.2 }}
            className="lg:hidden absolute top-full left-0 right-0 bg-white/98 backdrop-blur-xl border-b-2 border-white/30 shadow-2xl"
          >
            <div className="container mx-auto px-4 py-6">
              <div className="flex flex-col gap-4">
                {SECTIONS.map((section) => (
                  <motion.button
                    key={section}
                    whileHover={{ x: 10 }}
                    onClick={() => scrollToSection(section)}
                    className={`text-left px-4 py-3 rounded-xl transition-all duration-300 ${
                      activeSection === section
                        ? "bg-emerald-50 text-emerald-600 border-l-4 border-emerald-500"
                        : "text-gray-700 hover:bg-gray-50 hover:text-emerald-600"
                    }`}
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </motion.button>
                ))}
                <motion.button
                  whileHover={{ x: 10 }}
                  onClick={() => scrollToSection("contact")}
                  className="mt-4 px-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold rounded-xl shadow-lg"
                >
                  Get Started
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}


