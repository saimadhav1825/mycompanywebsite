"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Code, Smartphone, Database, Globe, Palette, Settings, Zap, Monitor, Cpu, Cloud, Shield, Rocket } from "lucide-react";
import React from "react";

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

export function Hero(): React.JSX.Element {
  return (
    <section id="home" className="relative overflow-hidden min-h-screen flex items-center">
      {/* Enhanced Background Layers with Glassmorphic Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-teal-50"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(16,185,129,0.15),transparent_60%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(20,184,166,0.12),transparent_55%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.08),transparent_70%)]"></div>
      
      {/* Enhanced Floating Glassmorphic Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full opacity-15 blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full opacity-15 blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-40 right-1/3 w-28 h-28 bg-gradient-to-r from-cyan-300 to-emerald-300 rounded-full opacity-12 blur-2xl animate-pulse delay-500"></div>
      <div className="absolute bottom-40 left-1/3 w-36 h-36 bg-gradient-to-r from-emerald-300 to-teal-300 rounded-full opacity-10 blur-3xl animate-pulse delay-1500"></div>
      
      {/* Enhanced Glassmorphic Orbs with Shimmer Effects */}
      <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-white/30 backdrop-blur-xl rounded-full border border-white/40 animate-float shadow-2xl relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
      </div>
      <div className="absolute bottom-1/3 left-1/4 w-20 h-20 bg-emerald-400/30 backdrop-blur-xl rounded-full border border-emerald-300/40 animate-float delay-1000 shadow-xl relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-200/30 to-transparent animate-shimmer"></div>
      </div>
      <div className="absolute top-1/2 left-1/2 w-16 h-16 bg-teal-400/30 backdrop-blur-xl rounded-full border border-teal-300/40 animate-float delay-2000 shadow-lg relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-teal-200/30 to-transparent animate-shimmer"></div>
      </div>
      
      {/* Additional Floating Particles */}
      <div className="absolute top-1/4 left-1/6 w-3 h-3 bg-emerald-400/50 rounded-full animate-ping"></div>
      <div className="absolute bottom-1/4 right-1/6 w-2 h-2 bg-teal-400/60 rounded-full animate-ping delay-700"></div>
      <div className="absolute top-3/4 left-3/4 w-2.5 h-2.5 bg-cyan-400/50 rounded-full animate-ping delay-1200"></div>
      <div className="absolute top-1/6 right-1/2 w-1.5 h-1.5 bg-emerald-300/70 rounded-full animate-ping delay-300"></div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8 text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-md border border-white/30 text-gray-800 rounded-full text-sm font-medium shadow-lg mx-auto lg:mx-0"
            >
              <Sparkles className="h-4 w-4" />
              🚀 Turn Your Ideas Into Success
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight"
            >
              <span className="bg-gradient-to-r from-gray-900 via-emerald-700 to-teal-800 bg-clip-text text-transparent">
                We Build Your Success
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 max-w-2xl leading-relaxed mx-auto lg:mx-0"
            >
              We make websites and apps that help your business grow. Simple, fast, and built just for you. Let&apos;s make your idea real!
            </motion.p>
            
            {/* Value Propositions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-wrap gap-3 sm:gap-4 md:gap-6 text-xs sm:text-sm font-medium text-gray-700 justify-center lg:justify-start"
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0"></div>
                <span className="whitespace-nowrap">⚡ Fast & Easy</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-teal-500 rounded-full flex-shrink-0"></div>
                <span className="whitespace-nowrap">🎯 Made Just For You</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-cyan-500 rounded-full flex-shrink-0"></div>
                <span className="whitespace-nowrap">🚀 Modern & Smart</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-emerald-600 rounded-full flex-shrink-0"></div>
                <span className="whitespace-nowrap">💎 Great Quality</span>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.button
                onClick={() => scrollToSection('contact')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 h-14 px-8 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-semibold rounded-2xl shadow-xl hover:shadow-2xl transform transition-all duration-300 text-lg"
              >
                Get a Free Quote
                <ArrowRight className="h-5 w-5" />
              </motion.button>
              <motion.button
                onClick={() => scrollToSection('projects')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center h-14 px-8 bg-white/20 backdrop-blur-md border-2 border-gray-300 hover:border-emerald-500 hover:text-emerald-600 text-gray-700 font-semibold rounded-2xl shadow-lg hover:shadow-xl transform transition-all duration-300 text-lg"
              >
                See Our Work
              </motion.button>
            </motion.div>
            
            {/* Stats with Glassmorphism */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 pt-8 max-w-2xl mx-auto lg:mx-0"
            >
              {[
                { value: "Ready To Launch", label: "Fresh Start" },
                { value: "Fresh Ideas", label: "Innovation" },
                { value: "Quality Focused", label: "Excellence" }
              ].map((stat, idx) => (
                <motion.div
                  key={stat.label}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="text-center p-4 bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent break-words">
                    {stat.value}
                  </div>
                  <div className="text-gray-600 text-xs sm:text-sm mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
          
          {/* Right Side - Enhanced Glassmorphic Visual with ALL Original Tech Stack Icons */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex justify-center lg:justify-end mt-12 lg:mt-0"
          >
            <div className="relative w-full max-w-md lg:max-w-2xl xl:max-w-4xl h-96 lg:h-[600px] xl:h-[700px] bg-white/20 backdrop-blur-md rounded-3xl border border-white/30 shadow-2xl overflow-hidden group">
              {/* Enhanced Glassmorphic Tech Icons - ALL ORIGINAL ONES */}
              <motion.div 
                className="absolute top-4 left-4 sm:top-6 sm:left-6 md:top-7 md:left-7 lg:top-10 lg:left-10 xl:top-12 xl:left-12 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-24 lg:h-24 xl:w-28 xl:h-28 bg-white/40 backdrop-blur-xl rounded-lg sm:rounded-xl md:rounded-2xl shadow-lg flex items-center justify-center border border-white/50 hover:shadow-2xl transition-all duration-300 group cursor-pointer"
                whileHover={{ 
                  scale: 1.15, 
                  rotate: [0, 5, -5, 0],
                  y: -3,
                  transition: { 
                    duration: 0.6, 
                    repeat: Infinity, 
                    repeatType: "reverse",
                    ease: "easeInOut"
                  }
                }}
                whileTap={{ 
                  rotate: [0, 360], 
                  scale: [1, 1.3, 1],
                  transition: { duration: 0.8, ease: "easeInOut" }
                }}
                onTap={() => console.log("🎯 Code icon clicked!")}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-blue-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Code className="h-3.5 w-3.5 sm:h-4 sm:w-4 md:h-5 md:w-5 lg:h-12 lg:w-12 xl:h-14 xl:w-14 text-blue-600 relative z-10" />
              </motion.div>
              
              <motion.div 
                className="absolute top-10 right-4 sm:top-12 sm:right-6 md:top-14 md:right-8 lg:top-20 lg:right-14 xl:top-24 xl:right-16 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-24 lg:h-24 xl:w-28 xl:h-28 bg-white/40 backdrop-blur-xl rounded-lg sm:rounded-xl md:rounded-2xl shadow-lg flex items-center justify-center border border-white/50 hover:shadow-2xl transition-all duration-300 group cursor-pointer"
                whileHover={{ 
                  scale: [1, 1.12, 1.08], 
                  rotate: [-5, 5, -3],
                  x: [0, 2, -2, 0],
                  transition: { 
                    duration: 0.8, 
                    repeat: Infinity, 
                    repeatType: "reverse",
                    ease: "easeInOut"
                  }
                }}
                whileTap={{ 
                  rotate: [0, -180, -360], 
                  scale: [1, 1.4, 1],
                  y: [0, -5, 0],
                  transition: { duration: 1, ease: "easeInOut" }
                }}
                onTap={() => console.log("📱 Smartphone icon clicked!")}
                transition={{ type: "spring", stiffness: 300, delay: 0.1 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-emerald-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Smartphone className="h-3.5 w-3.5 sm:h-4 sm:w-4 md:h-5 md:w-5 lg:h-12 lg:w-12 xl:h-14 xl:w-14 text-emerald-600 relative z-10" />
              </motion.div>
              
              {/* Additional Tech Stack Icons - ALL THE ORIGINAL COMPLEX ONES */}
              <motion.div 
                className="absolute top-16 left-8 sm:top-20 sm:left-12 md:top-24 md:left-16 lg:top-32 lg:left-24 xl:top-36 xl:left-28 w-7 h-7 sm:w-9 sm:h-9 md:w-10 md:h-10 lg:w-20 lg:h-20 xl:w-24 xl:h-24 bg-white/40 backdrop-blur-xl rounded-lg sm:rounded-xl md:rounded-2xl shadow-lg flex items-center justify-center border border-white/50 hover:shadow-2xl transition-all duration-300 group cursor-pointer"
                whileHover={{ 
                  scale: [1, 1.14, 1.06], 
                  rotate: [-8, 8, -4],
                  transition: { 
                    duration: 0.9, 
                    repeat: Infinity, 
                    repeatType: "reverse",
                    ease: "easeInOut"
                  }
                }}
                whileTap={{ 
                  rotate: [0, -270, 0], 
                  scale: [1, 1.35, 1],
                  transition: { duration: 0.7, ease: "easeInOut" }
                }}
                transition={{ type: "spring", stiffness: 300, delay: 0.3 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-teal-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Globe className="h-3.5 w-3.5 sm:h-4 sm:w-4 md:h-5 md:w-5 lg:h-9 lg:w-9 xl:h-10 xl:w-10 text-teal-600 relative z-10" />
              </motion.div>
              
              <motion.div 
                className="absolute bottom-16 right-8 sm:bottom-20 sm:right-12 md:bottom-24 md:right-16 lg:bottom-32 lg:right-24 xl:bottom-36 xl:right-28 w-7 h-7 sm:w-9 sm:h-9 md:w-10 md:h-10 lg:w-20 lg:h-20 xl:w-24 xl:h-24 bg-white/40 backdrop-blur-xl rounded-lg sm:rounded-xl md:rounded-2xl shadow-lg flex items-center justify-center border border-white/50 hover:shadow-2xl transition-all duration-300 group cursor-pointer"
                whileHover={{ 
                  scale: [1, 1.12, 1.08], 
                  rotate: [6, -6, 3],
                  y: [0, -3, -1],
                  x: [0, 1, -1, 0],
                  transition: { 
                    duration: 0.75, 
                    repeat: Infinity, 
                    repeatType: "reverse",
                    ease: "easeInOut"
                  }
                }}
                whileTap={{ 
                  rotate: [0, 540], 
                  scale: [1, 1.45, 1],
                  transition: { duration: 1.1, ease: "easeInOut" }
                }}
                transition={{ type: "spring", stiffness: 300, delay: 0.4 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-pink-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Palette className="h-3.5 w-3.5 sm:h-4 sm:w-4 md:h-5 md:w-5 lg:h-9 lg:w-9 xl:h-10 xl:w-10 text-pink-600 relative z-10" />
              </motion.div>
              
              <motion.div 
                className="absolute top-24 right-3 sm:top-28 sm:right-4 md:top-32 md:right-6 lg:top-48 lg:right-12 xl:top-52 xl:right-14 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-16 lg:h-16 xl:w-20 xl:h-20 bg-white/40 backdrop-blur-xl rounded-lg sm:rounded-xl md:rounded-2xl shadow-lg flex items-center justify-center border border-white/50 hover:shadow-2xl transition-all duration-300 group cursor-pointer"
                whileHover={{ 
                  scale: [1, 1.16, 1.04], 
                  rotate: [-10, 10, -5],
                  x: [0, 2, -2, 1],
                  transition: { 
                    duration: 0.65, 
                    repeat: Infinity, 
                    repeatType: "reverse",
                    ease: "easeInOut"
                  }
                }}
                whileTap={{ 
                  rotate: [0, -450], 
                  scale: [1, 1.3, 1],
                  x: [0, 3, -3, 0],
                  transition: { duration: 0.85, ease: "easeInOut" }
                }}
                transition={{ type: "spring", stiffness: 300, delay: 0.5 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-orange-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Settings className="h-3 w-3 sm:h-3.5 sm:w-3.5 md:h-4 md:w-4 lg:h-8 lg:w-8 xl:h-9 xl:w-9 text-orange-600 relative z-10" />
              </motion.div>
              
              <motion.div 
                className="absolute bottom-3 right-10 sm:bottom-4 sm:right-14 md:bottom-6 md:right-20 lg:bottom-12 lg:right-32 xl:bottom-14 xl:right-40 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-24 lg:h-24 xl:w-28 xl:h-28 bg-white/40 backdrop-blur-xl rounded-lg sm:rounded-xl md:rounded-2xl shadow-lg flex items-center justify-center border border-white/50 hover:shadow-2xl transition-all duration-300 group cursor-pointer"
                whileHover={{ 
                  scale: [1, 1.11, 1.07], 
                  rotate: [4, -4, 2],
                  y: [0, -2, -1],
                  transition: { 
                    duration: 0.8, 
                    repeat: Infinity, 
                    repeatType: "reverse",
                    ease: "easeInOut"
                  }
                }}
                whileTap={{ 
                  rotate: [0, 180, 360], 
                  scale: [1, 1.2, 1],
                  transition: { duration: 0.6, ease: "easeInOut" }
                }}
                transition={{ type: "spring", stiffness: 300, delay: 0.6 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-cyan-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Monitor className="h-3.5 w-3.5 sm:h-4 sm:w-4 md:h-5 md:w-5 lg:h-12 lg:w-12 xl:h-14 xl:w-14 text-cyan-600 relative z-10" />
              </motion.div>
              
              {/* Additional Tech Stack Icons */}
              <motion.div 
                className="absolute top-14 left-10 sm:top-16 sm:left-14 md:top-20 md:left-16 lg:top-28 lg:left-28 xl:top-32 xl:left-36 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-16 lg:h-16 xl:w-20 xl:h-20 bg-white/40 backdrop-blur-xl rounded-lg sm:rounded-xl md:rounded-2xl shadow-lg flex items-center justify-center border border-white/50 hover:shadow-2xl transition-all duration-300 group cursor-pointer"
                whileHover={{ 
                  scale: [1, 1.18, 1.1], 
                  rotate: [-12, 12, -6],
                  y: [0, -5, -3],
                  transition: { 
                    duration: 0.6, 
                    repeat: Infinity, 
                    repeatType: "reverse",
                    ease: "easeInOut"
                  }
                }}
                whileTap={{ 
                  rotate: [0, -360], 
                  scale: [1, 1.3, 1],
                  transition: { duration: 0.8, ease: "easeInOut" }
                }}
                transition={{ type: "spring", stiffness: 300, delay: 0.7 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-indigo-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Cpu className="h-3 w-3 sm:h-3.5 sm:w-3.5 md:h-4 md:w-4 lg:h-8 lg:w-8 xl:h-9 xl:w-9 text-indigo-600 relative z-10" />
              </motion.div>
              
              <motion.div 
                className="absolute top-28 right-8 sm:top-32 sm:right-10 md:top-36 md:right-12 lg:top-52 lg:right-20 xl:top-64 xl:right-28 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-16 lg:h-16 xl:w-20 xl:h-20 bg-white/40 backdrop-blur-xl rounded-lg sm:rounded-xl md:rounded-2xl shadow-lg flex items-center justify-center border border-white/50 hover:shadow-2xl transition-all duration-300 group cursor-pointer"
                whileHover={{ 
                  scale: [1, 1.15, 1.09], 
                  rotate: [-6, 6, -3],
                  y: [0, -4, -2],
                  transition: { 
                    duration: 0.7, 
                    repeat: Infinity, 
                    repeatType: "reverse",
                    ease: "easeInOut"
                  }
                }}
                whileTap={{ 
                  rotate: [0, 180, 360, 180, 0], 
                  scale: [1, 1.4, 1.2, 1.3, 1],
                  transition: { duration: 1, ease: "easeInOut" }
                }}
                transition={{ type: "spring", stiffness: 300, delay: 0.9 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-red-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Shield className="h-3 w-3 sm:h-3.5 sm:w-3.5 md:h-4 md:w-4 lg:h-8 lg:w-8 xl:h-9 xl:w-9 text-red-600 relative z-10" />
              </motion.div>
              
              <motion.div 
                className="absolute top-6 left-8 sm:top-8 sm:left-12 md:top-10 md:left-16 lg:top-14 lg:left-24 xl:top-16 xl:left-32 w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-20 lg:h-20 xl:w-24 xl:h-24 bg-white/40 backdrop-blur-xl rounded-lg sm:rounded-xl md:rounded-2xl shadow-lg flex items-center justify-center border border-white/50 hover:shadow-2xl transition-all duration-300 group cursor-pointer"
                whileHover={{ 
                  scale: [1, 1.12, 1.06], 
                  rotate: [9, -9, 5],
                  x: [0, 3, -3, 1],
                  y: [0, -2, -1],
                  transition: { 
                    duration: 0.55, 
                    repeat: Infinity, 
                    repeatType: "reverse",
                    ease: "easeInOut"
                  }
                }}
                whileTap={{ 
                  rotate: [0, -180, -360], 
                  scale: [1, 1.35, 1],
                  x: [0, 5, -5, 0],
                  transition: { duration: 0.9, ease: "easeInOut" }
                }}
                transition={{ type: "spring", stiffness: 300, delay: 1.0 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-yellow-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Zap className="h-3.5 w-3.5 sm:h-4 sm:w-4 md:h-5 md:w-5 lg:h-9 lg:w-9 xl:h-10 xl:w-10 text-yellow-600 relative z-10" />
              </motion.div>
              
              <motion.div 
                className="absolute bottom-20 right-3 sm:bottom-24 sm:right-4 md:bottom-28 md:right-6 lg:bottom-44 lg:right-12 xl:bottom-48 xl:right-14 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-16 lg:h-16 xl:w-20 xl:h-20 bg-white/40 backdrop-blur-xl rounded-lg sm:rounded-xl md:rounded-2xl shadow-lg flex items-center justify-center border border-white/50 hover:shadow-2xl transition-all duration-300 group cursor-pointer"
                whileHover={{ 
                  scale: [1, 1.17, 1.11], 
                  rotate: [-15, 15, -8],
                  y: [0, -7, -4],
                  transition: { 
                    duration: 0.9, 
                    repeat: Infinity, 
                    repeatType: "reverse",
                    ease: "easeInOut"
                  }
                }}
                whileTap={{ 
                  rotate: [0, 720], 
                  scale: [1, 1.5, 1.2, 1],
                  transition: { duration: 1.2, ease: "easeInOut" }
                }}
                transition={{ type: "spring", stiffness: 300, delay: 1.1 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 to-violet-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Rocket className="h-3 w-3 sm:h-3.5 sm:w-3.5 md:h-4 md:w-4 lg:h-8 lg:w-8 xl:h-9 xl:w-9 text-violet-600 relative z-10" />
              </motion.div>
              
              {/* Central Glassmorphic Element */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-40 lg:h-40 xl:w-48 xl:h-48 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full shadow-2xl flex items-center justify-center">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-32 lg:h-32 xl:w-36 xl:h-36 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center border border-white/40">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-20 lg:h-20 xl:w-24 xl:h-24 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center">
                      <Sparkles className="h-4 w-4 sm:h-5 sm:w-5 md:h-5 md:w-5 lg:h-10 lg:w-10 xl:h-12 xl:w-12 text-gray-800" />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Particles */}
              <div className="absolute top-1/4 right-1/4 w-3 h-3 bg-emerald-400/60 rounded-full animate-ping"></div>
              <div className="absolute bottom-1/4 left-1/4 w-2 h-2 bg-teal-400/60 rounded-full animate-ping delay-1000"></div>
              <div className="absolute top-1/2 right-1/3 w-2 h-2 bg-cyan-400/60 rounded-full animate-ping delay-2000"></div>
            </div>
            
            {/* Enhanced Glow Effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-emerald-400/20 to-teal-400/20 rounded-3xl blur-3xl -z-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}