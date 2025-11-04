"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { siteConfig } from "@/lib/siteConfig";
import React, { useState } from "react";
import { Smartphone, Database, Globe, FolderOpen, Rocket, ArrowRight, Star, Award, Users, Code2, Zap, Shield, Target, TrendingUp } from "lucide-react";

export function ProjectsSection(): React.JSX.Element {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categories = [
    { id: "all", label: "All Technologies", icon: Target },
    { id: "mobile", label: "Mobile", icon: Smartphone },
    { id: "backend", label: "Backend", icon: Database },
    { id: "frontend", label: "Frontend", icon: Globe }
  ];



  const achievements = [
    { icon: Rocket, value: "48h", label: "Fast Start", color: "from-emerald-500 to-teal-500" },
    { icon: Code2, value: "100%", label: "Quality Focus", color: "from-blue-500 to-cyan-500" },
    { icon: Award, value: "24/7", label: "Support", color: "from-purple-500 to-pink-500" },
    { icon: TrendingUp, value: "Fresh", label: "Innovation", color: "from-yellow-500 to-orange-500" }
  ];

  return (
    <section id="projects" className="relative container mx-auto px-4 py-24 bg-gradient-to-br from-gray-50 via-emerald-25 to-teal-50 overflow-hidden">

      {/* Enhanced Background Elements */}
      <div className="absolute top-20 left-1/4 w-40 h-40 bg-emerald-400/15 backdrop-blur-xl rounded-full border border-emerald-300/30 animate-float shadow-2xl">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-200/20 to-transparent animate-shimmer rounded-full"></div>
      </div>
      <div className="absolute bottom-20 right-1/4 w-32 h-32 bg-teal-400/15 backdrop-blur-xl rounded-full border border-teal-300/30 animate-float delay-1000 shadow-xl">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-teal-200/20 to-transparent animate-shimmer rounded-full"></div>
      </div>
      <div className="absolute top-1/2 left-10 w-28 h-28 bg-cyan-400/15 backdrop-blur-xl rounded-full border border-cyan-300/30 animate-float delay-2000 shadow-lg">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-200/20 to-transparent animate-shimmer rounded-full"></div>
      </div>

      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16 relative z-10"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-3 px-6 py-3 bg-white/25 backdrop-blur-xl border border-white/40 text-gray-800 rounded-full text-sm font-medium mb-8 shadow-xl group hover:shadow-2xl transition-all duration-300"
        >
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <FolderOpen className="h-5 w-5 text-emerald-600" />
          </motion.div>
          <span className="font-semibold">Our Work & Expertise</span>
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <Star className="h-4 w-4 text-yellow-500 fill-current" />
          </motion.div>
        </motion.div>
        
        <motion.h2 
          className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-gray-900 via-emerald-700 to-teal-800 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Cutting-Edge Solutions & <br />
          <span className="relative">
            Tech Mastery
            <motion.div
              animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-2 -right-2"
            >
              <Zap className="h-8 w-8 text-yellow-500 fill-current" />
            </motion.div>
          </span>
        </motion.h2>
        
        <motion.p 
          className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          We don&apos;t just code—we architect digital experiences that dominate markets. Every project showcases our mastery of cutting-edge technologies and our commitment to delivering extraordinary results that exceed expectations.
        </motion.p>
      </motion.div>

      {/* Achievements Banner */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16 relative z-10"
      >
        {achievements.map((achievement, idx) => (
          <motion.div
            key={achievement.label}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05, y: -5 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 * idx }}
            className="relative bg-white/30 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-white/40 text-center group overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute top-2 right-2 w-2 h-2 bg-emerald-400/50 rounded-full animate-ping"></div>
            
            <div className="relative z-10">
              <div className={`w-12 h-12 mx-auto mb-3 bg-gradient-to-r ${achievement.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110`}>
                <achievement.icon className="h-6 w-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">{achievement.value}</div>
              <div className="text-sm text-gray-600 font-medium">{achievement.label}</div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Category Filter */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-wrap justify-center gap-4 mb-12 relative z-10"
      >
        {categories.map((category) => (
          <motion.button
            key={category.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveCategory(category.id)}
            className={`relative inline-flex items-center gap-2 px-6 py-3 rounded-2xl font-medium transition-all duration-300 border-2 ${
              activeCategory === category.id
                ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white border-emerald-500 shadow-xl'
                : 'bg-white/20 backdrop-blur-xl text-gray-700 border-white/40 hover:bg-white/30 hover:text-emerald-600 shadow-lg'
            }`}
          >
            <category.icon className="h-4 w-4" />
            {category.label}
            {activeCategory === category.id && (
              <motion.div
                layoutId="activeCategory"
                className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl -z-10"
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              />
            )}
          </motion.button>
        ))}
      </motion.div>

      {/* Enhanced Tech Stack Showcase */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="grid md:grid-cols-3 gap-8 mb-16 relative z-10"
      >
        {/* Mobile Development */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className={`relative group overflow-hidden rounded-3xl p-8 shadow-2xl border transition-all duration-500 transform hover:-translate-y-3 ${
            activeCategory === 'all' || activeCategory === 'mobile'
              ? 'bg-white/30 backdrop-blur-xl border-white/40 hover:shadow-emerald-200/50'
              : 'bg-white/10 backdrop-blur-md border-white/20 opacity-50'
          }`}
        >
          {/* Enhanced Background Effects */}
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent opacity-0 group-hover:opacity-100 animate-shimmer transition-opacity duration-700"></div>
          
          {/* Floating Particles */}
          <div className="absolute top-4 right-4 w-3 h-3 bg-emerald-400/50 rounded-full animate-ping"></div>
          <div className="absolute bottom-4 left-4 w-2 h-2 bg-teal-400/50 rounded-full animate-ping delay-1000"></div>
          
          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-6">
              <motion.div 
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.8 }}
                className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-xl relative overflow-hidden"
              >
                <div className="absolute inset-0 animate-shimmer"></div>
                <Smartphone className="h-8 w-8 text-white relative z-10" />
              </motion.div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 group-hover:text-emerald-600 transition-colors duration-300">Mobile</h3>
                <p className="text-sm text-gray-600 font-medium">Native & Cross-Platform</p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-3">
              {siteConfig.techStack.mobile.map((tech, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: idx * 0.1 }}
                  className="flex items-center gap-2 p-2 bg-white/40 backdrop-blur-sm rounded-xl border border-white/30 hover:bg-white/50 transition-all duration-300"
                >
                  <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                  <span className="text-gray-700 text-sm font-medium">{tech}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Backend Development */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`relative group overflow-hidden rounded-3xl p-8 shadow-2xl border transition-all duration-500 transform hover:-translate-y-3 ${
            activeCategory === 'all' || activeCategory === 'backend'
              ? 'bg-white/30 backdrop-blur-xl border-white/40 hover:shadow-green-200/50'
              : 'bg-white/10 backdrop-blur-md border-white/20 opacity-50'
          }`}
        >
          {/* Enhanced Background Effects */}
          <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent opacity-0 group-hover:opacity-100 animate-shimmer transition-opacity duration-700"></div>
          
          {/* Floating Particles */}
          <div className="absolute top-4 right-4 w-3 h-3 bg-green-400/50 rounded-full animate-ping"></div>
          <div className="absolute bottom-4 left-4 w-2 h-2 bg-teal-400/50 rounded-full animate-ping delay-1000"></div>
          
          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-6">
              <motion.div 
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.8 }}
                className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center shadow-xl relative overflow-hidden"
              >
                <div className="absolute inset-0 animate-shimmer"></div>
                <Database className="h-8 w-8 text-white relative z-10" />
              </motion.div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 group-hover:text-green-600 transition-colors duration-300">Backend</h3>
                <p className="text-sm text-gray-600 font-medium">Scalable & Secure</p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-3">
              {siteConfig.techStack.backend.map((tech, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: idx * 0.1 }}
                  className="flex items-center gap-2 p-2 bg-white/40 backdrop-blur-sm rounded-xl border border-white/30 hover:bg-white/50 transition-all duration-300"
                >
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700 text-sm font-medium">{tech}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Frontend Development */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className={`relative group overflow-hidden rounded-3xl p-8 shadow-2xl border transition-all duration-500 transform hover:-translate-y-3 ${
            activeCategory === 'all' || activeCategory === 'frontend'
              ? 'bg-white/30 backdrop-blur-xl border-white/40 hover:shadow-teal-200/50'
              : 'bg-white/10 backdrop-blur-md border-white/20 opacity-50'
          }`}
        >
          {/* Enhanced Background Effects */}
          <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent opacity-0 group-hover:opacity-100 animate-shimmer transition-opacity duration-700"></div>
          
          {/* Floating Particles */}
          <div className="absolute top-4 right-4 w-3 h-3 bg-teal-400/50 rounded-full animate-ping"></div>
          <div className="absolute bottom-4 left-4 w-2 h-2 bg-cyan-400/50 rounded-full animate-ping delay-1000"></div>
          
          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-6">
              <motion.div 
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.8 }}
                className="w-16 h-16 bg-gradient-to-r from-teal-500 to-teal-600 rounded-2xl flex items-center justify-center shadow-xl relative overflow-hidden"
              >
                <div className="absolute inset-0 animate-shimmer"></div>
                <Globe className="h-8 w-8 text-white relative z-10" />
              </motion.div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 group-hover:text-teal-600 transition-colors duration-300">Frontend</h3>
                <p className="text-sm text-gray-600 font-medium">Modern & Responsive</p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-3">
              {siteConfig.techStack.frontend.map((tech, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: idx * 0.1 }}
                  className="flex items-center gap-2 p-2 bg-white/40 backdrop-blur-sm rounded-xl border border-white/30 hover:bg-white/50 transition-all duration-300"
                >
                  <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                  <span className="text-gray-700 text-sm font-medium">{tech}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>



      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center bg-white/25 backdrop-blur-xl border border-white/40 rounded-3xl p-12 shadow-2xl relative z-10 overflow-hidden group"
      >
        {/* Enhanced Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent opacity-0 group-hover:opacity-100 animate-shimmer transition-opacity duration-700"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-8 right-8 w-4 h-4 bg-emerald-400/40 rounded-full animate-ping"></div>
        <div className="absolute bottom-8 left-8 w-3 h-3 bg-teal-400/40 rounded-full animate-ping delay-1000"></div>
        
        <div className="relative z-10">
          <motion.div 
            className="w-24 h-24 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl relative overflow-hidden"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute inset-0 animate-shimmer"></div>
            <Rocket className="h-12 w-12 text-white relative z-10" />
          </motion.div>
          
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Launch Your Digital Vision?
          </h3>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
            We&apos;re ready to turn your bold ideas into reality. With our cutting-edge tech stack and fresh perspective, let&apos;s build something extraordinary together.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 20px 40px -12px rgba(16, 185, 129, 0.4)",
                y: -3
              }}
              whileTap={{ scale: 0.95 }}
              className="relative inline-flex items-center gap-3 h-16 px-10 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-semibold rounded-2xl shadow-xl transform transition-all duration-300 overflow-hidden group text-lg"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 animate-shimmer"></div>
              
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <Rocket className="h-6 w-6 relative z-10" />
              </motion.div>
              
              <span className="relative z-10">Start Your Project Today</span>
              
              <motion.div
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <ArrowRight className="h-6 w-6 relative z-10" />
              </motion.div>
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 h-16 px-10 bg-white/30 backdrop-blur-xl border-2 border-white/40 hover:border-emerald-500 hover:text-emerald-600 text-gray-700 font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-lg"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Users className="h-6 w-6" />
              Explore Our Services
            </motion.button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
