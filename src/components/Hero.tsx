"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Code, Smartphone, Database } from "lucide-react";
import React from "react";

export function Hero(): React.JSX.Element {
  return (
    <section id="home" className="relative overflow-hidden min-h-screen flex items-center">
      {/* Enhanced Background Layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(147,51,234,0.1),transparent_50%)]"></div>
      
      {/* Floating Glassmorphic Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-10 blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-10 blur-3xl animate-pulse delay-1000"></div>
      
      {/* Glassmorphic Orbs */}
      <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-white/20 backdrop-blur-md rounded-full border border-white/30 animate-float"></div>
      <div className="absolute bottom-1/3 left-1/4 w-20 h-20 bg-blue-400/20 backdrop-blur-md rounded-full border border-blue-300/30 animate-float delay-1000"></div>
      <div className="absolute top-1/2 left-1/2 w-16 h-16 bg-purple-400/20 backdrop-blur-md rounded-full border border-purple-300/30 animate-float delay-2000"></div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-md border border-white/30 text-gray-800 rounded-full text-sm font-medium shadow-lg"
            >
              <Sparkles className="h-4 w-4" />
              Where Innovation Blooms
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight"
            >
              <span className="bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent">
                We Build
              </span>
              <br/>
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Digital Dreams
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-xl md:text-2xl text-gray-600 max-w-2xl leading-relaxed"
            >
              Helping businesses launch, scale, and succeed with modern web, mobile, and backend engineering.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a href="#contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-full shadow-xl hover:shadow-2xl transform transition-all duration-300"
                >
                  Get a Free Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </motion.button>
              </a>
              <a href="#projects">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white/20 backdrop-blur-md border-2 border-gray-300 hover:border-blue-500 hover:text-blue-600 text-gray-700 font-semibold rounded-full shadow-lg hover:shadow-xl transform transition-all duration-300"
                >
                  See Our Work
                </motion.button>
              </a>
            </motion.div>
            
            {/* Stats with Glassmorphism */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="flex gap-8 pt-8"
            >
              {[
                { number: "100+", label: "Projects Delivered" },
                { number: "50+", label: "Happy Clients" },
                { number: "24/7", label: "Support" }
              ].map((stat, idx) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.2 + idx * 0.1 }}
                  className="text-center"
                >
                  <div className="text-2xl md:text-3xl font-bold text-gray-900">{stat.number}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
          
          {/* Right Visual */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative w-full h-96 lg:h-[500px] bg-white/20 backdrop-blur-md rounded-3xl border border-white/30 shadow-2xl overflow-hidden">
              {/* Glassmorphic Tech Icons */}
              <div className="absolute top-10 left-10 w-16 h-16 bg-white/30 backdrop-blur-md rounded-2xl shadow-lg flex items-center justify-center border border-white/40">
                <Code className="h-8 w-8 text-blue-600" />
              </div>
              <div className="absolute top-20 right-16 w-20 h-20 bg-white/30 backdrop-blur-md rounded-2xl shadow-lg flex items-center justify-center border border-white/40">
                <Smartphone className="h-10 w-10 text-purple-600" />
              </div>
              <div className="absolute bottom-20 left-16 w-18 h-18 bg-white/30 backdrop-blur-md rounded-2xl shadow-lg flex items-center justify-center border border-white/40">
                <Database className="h-9 w-9 text-green-600" />
              </div>
              
              {/* Central Glassmorphic Element */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full shadow-2xl flex items-center justify-center">
                  <div className="w-24 h-24 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center border border-white/40">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                      <Sparkles className="h-8 w-8 text-gray-800" />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Particles */}
              <div className="absolute top-1/4 right-1/4 w-3 h-3 bg-blue-400/60 rounded-full animate-ping"></div>
              <div className="absolute bottom-1/4 left-1/4 w-2 h-2 bg-purple-400/60 rounded-full animate-ping delay-1000"></div>
              <div className="absolute top-1/2 right-1/3 w-2 h-2 bg-pink-400/60 rounded-full animate-ping delay-2000"></div>
            </div>
            
            {/* Enhanced Glow Effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-3xl blur-3xl -z-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


