"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Code, Smartphone, Database } from "lucide-react";
import React from "react";

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
              <span className="bg-gradient-to-r from-gray-900 via-emerald-800 to-teal-800 bg-clip-text text-transparent">
                We Build
              </span>
              <br/>
              <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
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
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-semibold rounded-full shadow-xl hover:shadow-2xl transform transition-all duration-300"
                >
                  Get a Free Quote
                  <ArrowRight className="h-5 w-5" />
                </motion.button>
              </a>
              <a href="#projects">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white/20 backdrop-blur-md border-2 border-gray-300 hover:border-emerald-500 hover:text-emerald-600 text-gray-700 font-semibold rounded-full shadow-lg hover:shadow-xl transform transition-all duration-300"
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
                { number: "Ready", label: "To Launch" },
                { number: "Fresh", label: "Start" },
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
                <Code className="h-8 w-8 text-emerald-600" />
              </div>
              <div className="absolute top-20 right-16 w-20 h-20 bg-white/30 backdrop-blur-md rounded-2xl shadow-lg flex items-center justify-center border border-white/40">
                <Smartphone className="h-10 w-10 text-teal-600" />
              </div>
              <div className="absolute bottom-20 left-16 w-18 h-18 bg-white/30 backdrop-blur-md rounded-2xl shadow-lg flex items-center justify-center border border-white/40">
                <Database className="h-9 w-9 text-green-600" />
              </div>
              
              {/* Central Glassmorphic Element */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full shadow-2xl flex items-center justify-center">
                  <div className="w-24 h-24 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center border border-white/40">
                    <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center">
                      <Sparkles className="h-8 w-8 text-gray-800" />
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


