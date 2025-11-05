"use client";

import { ContactForm } from "@/components/ContactForm";
import { siteConfig } from "@/lib/siteConfig";
import React from "react";
import { Mail, Phone, MapPin, Linkedin, Github, Twitter, Send, Sparkles, Zap, Heart, Star, Rocket, Target, Clock, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

export function ContactSection(): React.JSX.Element {
  return (
    <section id="contact" className="relative container mx-auto px-4 py-24 bg-gradient-to-br from-gray-50 via-emerald-25 to-teal-50 overflow-hidden">
      {/* Enhanced Background Glassmorphic Elements */}
      <div className="absolute top-20 left-1/4 w-40 h-40 bg-emerald-400/15 backdrop-blur-xl rounded-full border border-emerald-300/30 animate-float shadow-2xl relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-200/20 to-transparent animate-shimmer"></div>
        <div className="absolute top-4 right-4 w-2 h-2 bg-emerald-400/60 rounded-full animate-ping"></div>
      </div>
      <div className="absolute bottom-20 right-1/4 w-32 h-32 bg-teal-400/15 backdrop-blur-xl rounded-full border border-teal-300/30 animate-float delay-1000 shadow-xl relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-teal-200/20 to-transparent animate-shimmer"></div>
      </div>
      <div className="absolute top-1/2 left-10 w-28 h-28 bg-cyan-400/15 backdrop-blur-xl rounded-full border border-cyan-300/30 animate-float delay-2000 shadow-lg relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-200/20 to-transparent animate-shimmer"></div>
      </div>
      
      {/* Additional Floating Elements */}
      <div className="absolute top-32 right-16 w-24 h-24 bg-gradient-to-br from-emerald-300/10 to-teal-300/10 backdrop-blur-md rounded-full border border-white/20 animate-float delay-500 shadow-xl"></div>
      <div className="absolute bottom-32 left-16 w-20 h-20 bg-gradient-to-br from-teal-300/10 to-cyan-300/10 backdrop-blur-md rounded-full border border-white/20 animate-float delay-1500 shadow-lg"></div>
      
      {/* Floating Particles */}
      <div className="absolute top-1/4 right-1/3 w-3 h-3 bg-emerald-400/40 rounded-full animate-ping"></div>
      <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-teal-400/50 rounded-full animate-ping delay-700"></div>
      <div className="absolute top-3/4 right-1/6 w-2.5 h-2.5 bg-cyan-400/45 rounded-full animate-ping delay-1400"></div>
      
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
          whileHover={{ scale: 1.05 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative inline-flex items-center gap-3 px-6 py-3 bg-white/25 backdrop-blur-xl border border-white/40 text-gray-800 rounded-full text-sm font-medium mb-8 shadow-xl hover:shadow-2xl transition-all duration-300 group cursor-pointer"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <Send className="h-5 w-5 text-emerald-600" />
          </motion.div>
          <span className="relative z-10 font-semibold">Start Your Project</span>
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <Sparkles className="h-4 w-4 text-teal-600" />
          </motion.div>
        </motion.div>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-gray-900 via-emerald-700 to-teal-800 bg-clip-text text-transparent relative text-center px-4"
        >
          Ready to <span className="relative inline-block">
            Start
            <motion.div
              animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2"
            >
              <Star className="h-4 w-4 sm:h-6 md:h-8 text-yellow-500 fill-current" />
            </motion.div>
          </span> Your Vision?
        </motion.h2>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed relative px-4 text-center"
        >
          <p>We turn your ideas into real websites and apps. Simple, fast, and built just for you. Ready to get started?</p>
          <motion.div
            animate={{ x: [0, 10, 0], y: [0, -5, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-2 right-2 sm:right-4 hidden sm:block"
          >
            <Heart className="h-4 w-4 sm:h-5 md:h-6 text-pink-500 fill-current" />
          </motion.div>
        </motion.div>
      </motion.div>
      
      <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 max-w-6xl mx-auto relative z-10 lg:items-stretch px-4">
        {/* Left Side - Contact Info */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col h-full"
        >
            <motion.div 
            whileHover={{ scale: 1.02, y: -5 }}
            transition={{ duration: 0.3 }}
            className="relative bg-white/25 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl border border-white/40 overflow-hidden group flex-1 flex flex-col"
          >
            {/* Enhanced Glassmorphic Background Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/8 to-teal-500/8"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 animate-shimmer transition-opacity duration-700"></div>
            
            {/* Enhanced Floating Particles */}
            <div className="absolute top-8 right-8 w-3 h-3 bg-emerald-400/50 rounded-full animate-ping"></div>
            <div className="absolute bottom-8 left-8 w-2.5 h-2.5 bg-teal-400/50 rounded-full animate-ping delay-1000"></div>
            <div className="absolute top-1/2 right-12 w-2 h-2 bg-cyan-400/50 rounded-full animate-ping delay-500"></div>
            <div className="absolute bottom-1/3 right-8 w-1.5 h-1.5 bg-emerald-300/60 rounded-full animate-ping delay-1500"></div>
            
            <div className="relative z-10 flex flex-col h-full">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex items-center gap-3 mb-6"
              >
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center shadow-lg"
                >
                  <Zap className="h-5 w-5 text-white" />
                </motion.div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 bg-gradient-to-r from-emerald-700 to-teal-700 bg-clip-text text-transparent">
                  Project Planning
                </h3>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-gray-600 mb-6 sm:mb-8 md:mb-10 leading-relaxed text-sm sm:text-base md:text-lg"
              >
                <p>Tell us about your project and we&apos;ll make it happen:</p>
              </motion.div>
              
              {/* Project Planning Features */}
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="mb-8"
              >
                <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">What You Get:</h4>
                <div className="space-y-4">
                  <motion.div 
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="h-5 w-5 text-emerald-500" />
                    <span className="text-gray-700 text-sm sm:text-base">Free chat about your project</span>
                  </motion.div>
                  <motion.div 
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="h-5 w-5 text-emerald-500" />
                    <span className="text-gray-700 text-sm sm:text-base">Clear plan for your project</span>
                  </motion.div>
                  <motion.div 
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.9 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="h-5 w-5 text-emerald-500" />
                    <span className="text-gray-700 text-sm sm:text-base">Honest pricing</span>
                  </motion.div>
                  <motion.div 
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 1.0 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="h-5 w-5 text-emerald-500" />
                    <span className="text-gray-700 text-sm sm:text-base">Someone to help you every step</span>
                  </motion.div>
                </div>
              </motion.div>

              <div className="space-y-8 flex-1">
                <motion.div 
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  whileHover={{ scale: 1.05 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 1.1 }}
                  className="flex items-start gap-5 group cursor-pointer"
                >
                  <motion.div 
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.5 }}
                    className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0 shadow-xl relative overflow-hidden group-hover:shadow-2xl transition-all duration-300"
                  >
                    <div className="absolute inset-0 animate-shimmer"></div>
                    <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <Mail className="h-5 w-5 sm:h-6 md:h-7 text-white relative z-10" />
                  </motion.div>
                  <div className="flex-1">
                    <div className="font-semibold text-gray-900 mb-2 text-base sm:text-lg">Email</div>
                    <a 
                      className="text-emerald-600 hover:text-emerald-700 transition-colors duration-300 text-sm sm:text-base md:text-lg font-medium break-all" 
                      href={`mailto:${siteConfig.email}`}
                    >
                      {siteConfig.email}
                    </a>
                  </div>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  whileHover={{ scale: 1.05 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  className="flex items-start gap-5 group cursor-pointer"
                >
                  <motion.div 
                    whileHover={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 0.5 }}
                    className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0 shadow-xl relative overflow-hidden group-hover:shadow-2xl transition-all duration-300"
                  >
                    <div className="absolute inset-0 animate-shimmer"></div>
                    <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <Phone className="h-5 w-5 sm:h-6 md:h-7 text-white relative z-10" />
                  </motion.div>
                  <div className="flex-1">
                    <div className="font-semibold text-gray-900 mb-2 text-base sm:text-lg">Phone</div>
                    <a 
                      className="text-emerald-600 hover:text-emerald-700 transition-colors duration-300 text-sm sm:text-base md:text-lg font-medium" 
                      href={`tel:${siteConfig.phone}`}
                    >
                      {siteConfig.phone}
                    </a>
                  </div>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  whileHover={{ scale: 1.05 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="flex items-start gap-5 group cursor-pointer"
                >
                  <motion.div 
                    whileHover={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 0.4 }}
                    className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-rose-500 to-pink-500 rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0 shadow-xl relative overflow-hidden group-hover:shadow-2xl transition-all duration-300"
                  >
                    <div className="absolute inset-0 animate-shimmer"></div>
                    <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <MapPin className="h-5 w-5 sm:h-6 md:h-7 text-white relative z-10" />
                  </motion.div>
                  <div className="flex-1">
                    <div className="font-semibold text-gray-900 mb-2 text-base sm:text-lg">Location</div>
                    <div className="text-gray-600 text-sm sm:text-base md:text-lg">{siteConfig.address}</div>
                  </div>
                </motion.div>
              </div>
              
              {/* Enhanced Social Links */}
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="pt-8 border-t border-white/30"
              >
                <div className="font-semibold text-gray-900 mb-4 sm:mb-6 text-base sm:text-lg">Follow Us</div>
                <div className="flex gap-3 sm:gap-4 md:gap-5">
                  <motion.a 
                    href={siteConfig.social.linkedin} 
                    target="_blank" 
                    rel="noreferrer"
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-emerald-600 to-emerald-700 rounded-xl sm:rounded-2xl flex items-center justify-center text-white shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden group"
                  >
                    <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute inset-0 animate-shimmer opacity-0 group-hover:opacity-100"></div>
                    <Linkedin className="h-5 w-5 sm:h-6 sm:w-6 relative z-10" />
                  </motion.a>
                  
                  <motion.a 
                    href={siteConfig.social.github} 
                    target="_blank" 
                    rel="noreferrer"
                    whileHover={{ scale: 1.15, rotate: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-slate-600 to-slate-700 rounded-xl sm:rounded-2xl flex items-center justify-center text-white shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden group"
                  >
                    <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute inset-0 animate-shimmer opacity-0 group-hover:opacity-100"></div>
                    <Github className="h-5 w-5 sm:h-6 sm:w-6 relative z-10" />
                  </motion.a>
                  
                  <motion.a 
                    href={siteConfig.social.twitter} 
                    target="_blank" 
                    rel="noreferrer"
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-cyan-400 to-cyan-500 rounded-xl sm:rounded-2xl flex items-center justify-center text-white shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden group"
                  >
                    <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute inset-0 animate-shimmer opacity-0 group-hover:opacity-100"></div>
                    <Twitter className="h-5 w-5 sm:h-6 sm:w-6 relative z-10" />
                  </motion.a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
        
        {/* Right Side - Contact Form */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          whileHover={{ scale: 1.02, y: -5 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative bg-white/25 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl border border-white/40 overflow-hidden group flex flex-col h-full"
        >
          {/* Enhanced Glassmorphic Background Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-teal-500/8 to-cyan-500/8"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 animate-shimmer transition-opacity duration-700"></div>
          
          {/* Enhanced Floating Particles */}
          <div className="absolute top-8 right-8 w-3 h-3 bg-teal-400/50 rounded-full animate-ping"></div>
          <div className="absolute bottom-8 left-8 w-2.5 h-2.5 bg-cyan-400/50 rounded-full animate-ping delay-1000"></div>
          <div className="absolute top-1/3 left-8 w-2 h-2 bg-emerald-400/50 rounded-full animate-ping delay-500"></div>
          <div className="absolute bottom-1/2 right-12 w-1.5 h-1.5 bg-teal-300/60 rounded-full animate-ping delay-1500"></div>
          
          {/* Corner Decorative Elements */}
          <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-teal-400/10 to-transparent rounded-bl-3xl"></div>
          <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-cyan-400/10 to-transparent rounded-tr-3xl"></div>
          
          <div className="relative z-10 flex flex-col h-full">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex items-center gap-3 mb-8"
            >
              <motion.div
                animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="w-12 h-12 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-xl relative overflow-hidden"
              >
                <div className="absolute inset-0 animate-shimmer"></div>
                <Rocket className="h-6 w-6 text-white relative z-10" />
              </motion.div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 bg-gradient-to-r from-teal-700 to-cyan-700 bg-clip-text text-transparent">
                Project Brief
              </h3>
              <motion.div
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <Target className="h-6 w-6 text-yellow-500 fill-current" />
              </motion.div>
            </motion.div>
            
            {/* Project Brief Header */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mb-4 sm:mb-6 p-3 sm:p-4 bg-gradient-to-r from-teal-500/10 to-cyan-500/10 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-teal-200/30"
            >
              <div className="text-center">
                <motion.div
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-white/30 backdrop-blur-md rounded-full text-teal-700 font-semibold text-sm mb-3"
                >
                  <Rocket className="h-4 w-4" />
                  Let&apos;s Start Your Project
                </motion.div>
                <p className="text-gray-600 text-sm sm:text-base md:text-lg">
                  Fill out the form below and we&apos;ll get back to you within 24 hours with a detailed project plan and quote.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex-1 flex flex-col"
            >
              {/* Enhanced Project Timeline - Simplified */}
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="mb-6 sm:mb-8 p-4 sm:p-6 bg-gradient-to-br from-white/30 to-white/10 backdrop-blur-xl rounded-2xl sm:rounded-3xl border border-white/40 shadow-xl relative overflow-hidden"
              >
                {/* Animated Background */}
                <div className="absolute inset-0 bg-gradient-to-r from-teal-500/5 to-cyan-500/5"></div>
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-teal-400/10 to-transparent rounded-bl-3xl"></div>
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-cyan-400/10 to-transparent rounded-tr-3xl"></div>
                
                {/* Floating Particles */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-teal-400/50 rounded-full animate-ping"></div>
                <div className="absolute bottom-4 left-4 w-1.5 h-1.5 bg-cyan-400/50 rounded-full animate-ping delay-1000"></div>
                
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="flex items-center gap-3 mb-6"
                >
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    className="w-10 h-10 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg"
                  >
                    <Clock className="h-5 w-5 text-white" />
                  </motion.div>
                  <h4 className="text-lg sm:text-xl font-bold text-gray-900 bg-gradient-to-r from-teal-700 to-cyan-700 bg-clip-text text-transparent">
                    Project Timeline
                  </h4>
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <Sparkles className="h-5 w-5 text-yellow-500" />
                  </motion.div>
                </motion.div>
                
                <div className="space-y-3 sm:space-y-4 relative z-10">
                  {[
                    { step: 1, title: "Initial Chat", desc: "1-2 days • Free consultation", color: "from-emerald-500 to-emerald-600", icon: Heart, iconColor: "text-emerald-500" },
                    { step: 2, title: "Project Plan", desc: "3-5 days • Detailed roadmap", color: "from-teal-500 to-teal-600", icon: Target, iconColor: "text-teal-500" },
                    { step: 3, title: "Build & Test", desc: "2-8 weeks • Development phase", color: "from-cyan-500 to-cyan-600", icon: Rocket, iconColor: "text-cyan-500" },
                    { step: 4, title: "Launch & Support", desc: "Ongoing • We're here for you", color: "from-blue-500 to-blue-600", icon: Star, iconColor: "text-blue-500" }
                  ].map((item, idx) => (
                    <motion.div 
                      key={item.step}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      whileHover={{ scale: 1.02, x: 4 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.9 + idx * 0.1 }}
                      className="flex items-center gap-3 sm:gap-4 p-2.5 sm:p-3 bg-white/20 backdrop-blur-sm rounded-lg sm:rounded-xl border border-white/30 hover:bg-white/35 hover:shadow-md transition-all duration-300 group"
                    >
                      <motion.div 
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: idx * 0.3 }}
                        className={`w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r ${item.color} rounded-full flex items-center justify-center shadow-lg flex-shrink-0`}
                      >
                        <span className="text-white text-xs sm:text-sm font-bold">{item.step}</span>
                      </motion.div>
                      <div className="flex-1 min-w-0">
                        <div className="font-semibold text-gray-900 text-sm sm:text-base truncate">{item.title}</div>
                        <div className="text-gray-600 text-xs sm:text-sm truncate">{item.desc}</div>
                      </div>
                      <motion.div
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: idx * 0.5 }}
                        className="flex-shrink-0 hidden sm:block"
                      >
                        <item.icon className={`h-5 w-5 ${item.iconColor}`} />
                      </motion.div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <ContactForm />
            </motion.div>
          </div>
        </motion.div>
      </div>
      
      {/* Decorative Glassmorphic Elements */}
      <div className="absolute top-1/3 right-0 w-64 h-64 bg-gradient-to-r from-emerald-400/5 to-teal-400/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 left-0 w-48 h-48 bg-gradient-to-r from-cyan-400/5 to-emerald-400/5 rounded-full blur-3xl"></div>
    </section>
  );
}