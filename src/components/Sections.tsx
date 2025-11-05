"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";
import React from "react";
import { Code, Smartphone, Database, Palette, Globe, Zap, Shield, Users, ArrowRight, FolderOpen, Search, Settings, Rocket, Star, TrendingUp, Trophy, Target, Crown, Briefcase, Quote } from "lucide-react";

export function AboutSection(): React.JSX.Element {
  const stats = [
    { number: "Ready", label: "To Launch", icon: Rocket, color: "from-emerald-500 to-emerald-600" },
    { number: "Fresh", label: "Ideas", icon: Zap, color: "from-teal-500 to-teal-600" },
    { number: "24/7", label: "Support", icon: Shield, color: "from-cyan-500 to-cyan-600" },
    { number: "Quality", label: "Focused", icon: Star, color: "from-rose-500 to-pink-600" }
  ];

  return (
    <section id="about" className="relative container mx-auto px-4 py-24 bg-gradient-to-br from-gray-50 to-emerald-50 overflow-hidden">
      {/* Background Glassmorphic Elements */}
      <div className="absolute top-20 left-1/4 w-32 h-32 bg-emerald-400/10 backdrop-blur-md rounded-full border border-emerald-300/20 animate-float"></div>
      <div className="absolute bottom-20 right-1/4 w-24 h-24 bg-teal-400/10 backdrop-blur-md rounded-full border border-teal-300/20 animate-float delay-1000"></div>
      <div className="absolute top-1/2 left-10 w-20 h-20 bg-green-400/10 backdrop-blur-md rounded-full border border-green-300/20 animate-float delay-2000"></div>
      
      <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-md border border-white/30 text-gray-800 rounded-full text-sm font-medium shadow-lg"
          >
            <Users className="h-4 w-4" />
            About Our Company
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-emerald-800 bg-clip-text text-transparent"
          >
            We&apos;re a team of passionate developers, designers, and strategists
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-lg text-gray-600 leading-relaxed"
          >
            We&apos;re the digital architects behind tomorrow&apos;s most innovative platforms. Our elite team combines cutting-edge technology with creative brilliance to deliver solutions that don&apos;t just meet expectations—they shatter them. Every line of code, every pixel, every user interaction is crafted with precision and purpose.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="space-y-4"
          >
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
              <span className="text-gray-700">🚀 <strong>Revolutionary Tech Stack</strong> - We leverage the most advanced frameworks and tools</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
              <span className="text-gray-700">⚡ <strong>Lightning-Speed Delivery</strong> - From concept to launch in record time</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
              <span className="text-gray-700">🎯 <strong>ROI-Focused Solutions</strong> - Every feature designed to maximize your business value</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
              <span className="text-gray-700">💎 <strong>White-Glove Service</strong> - Premium support that goes above and beyond</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-gray-700">Ongoing support and maintenance for long-term success</span>
            </div>
          </motion.div>
        </motion.div>
        
        {/* Right Side - Stats */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-2 gap-6"
        >
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 + idx * 0.1 }}
              className="relative group"
            >
              <div className="relative bg-white/20 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-white/30 overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                {/* Glassmorphic Background Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Floating Particles */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-emerald-400/40 rounded-full animate-ping"></div>
                <div className="absolute bottom-4 left-4 w-1.5 h-1.5 bg-teal-400/40 rounded-full animate-ping delay-1000"></div>
                
                <div className="relative z-10 text-center">
                  <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110 relative overflow-hidden`}>
                    {/* Shimmer Effect */}
                    <div className="absolute inset-0 animate-shimmer"></div>
                    <stat.icon className="h-8 w-8 text-gray-800 relative z-10" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors duration-300">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </div>
                
                {/* Hover Glow Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-500/0 via-emerald-500/10 to-teal-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      
      {/* Decorative Glassmorphic Elements */}
      <div className="absolute top-1/3 right-0 w-64 h-64 bg-gradient-to-r from-emerald-400/5 to-teal-400/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 left-0 w-48 h-48 bg-gradient-to-r from-cyan-400/5 to-emerald-400/5 rounded-full blur-3xl"></div>
    </section>
  );
}

export function ServicesSection(): React.JSX.Element {
  const serviceIcons = [Smartphone, Globe, Database, Palette];
  
  return (
    <section id="services" className="relative container mx-auto px-4 py-24 bg-gradient-to-br from-gray-50 to-emerald-50 overflow-hidden">
      {/* Background Glassmorphic Elements */}
      <div className="absolute top-20 left-1/4 w-32 h-32 bg-emerald-400/10 backdrop-blur-md rounded-full border border-emerald-300/20 animate-float"></div>
      <div className="absolute bottom-20 right-1/4 w-24 h-24 bg-teal-400/10 backdrop-blur-md rounded-full border border-teal-300/20 animate-float delay-1000"></div>
      <div className="absolute top-1/2 left-10 w-20 h-20 bg-green-400/10 backdrop-blur-md rounded-full border border-green-300/20 animate-float delay-2000"></div>
      
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
          className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-md border border-white/30 text-gray-800 rounded-full text-sm font-medium mb-6 shadow-lg"
        >
          <Zap className="h-4 w-4" />
          Our Services
        </motion.div>
        
        <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-emerald-800 bg-clip-text text-transparent">
          🏆 Elite Digital Solutions
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          We don&apos;t just build software—we engineer digital empires that dominate markets, captivate users, and generate extraordinary returns. Every solution is a masterpiece of innovation and precision.
        </p>
      </motion.div>
      
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
        {siteConfig.services.map((service, idx) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className="group relative"
          >
            <div className="relative overflow-hidden rounded-2xl bg-white/30 backdrop-blur-xl border-2 border-white/50 shadow-xl hover:shadow-[0_20px_60px_-15px_rgba(16,185,129,0.3)] transition-all duration-500 transform hover:-translate-y-3 h-full group-hover:border-emerald-400/60">
              {/* Gradient Border Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-emerald-500/20 via-teal-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none blur-sm"></div>
              
              {/* Enhanced Glassmorphic Background Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 animate-shimmer transition-opacity duration-700 pointer-events-none"></div>
              
              {/* Enhanced Floating Particles */}
              <div className="absolute top-4 right-4 w-2.5 h-2.5 bg-emerald-400/60 rounded-full animate-ping pointer-events-none group-hover:scale-150 transition-transform"></div>
              <div className="absolute bottom-4 left-4 w-2 h-2 bg-teal-400/60 rounded-full animate-ping delay-1000 pointer-events-none group-hover:scale-150 transition-transform"></div>
              <div className="absolute top-6 left-6 w-1.5 h-1.5 bg-cyan-400/50 rounded-full animate-ping delay-500 pointer-events-none group-hover:scale-150 transition-transform"></div>
              <div className="absolute bottom-6 right-6 w-2 h-2 bg-emerald-300/70 rounded-full animate-ping delay-1500 pointer-events-none group-hover:scale-150 transition-transform"></div>
              
              <div className="relative p-6 h-full flex flex-col">
                <div className="text-center pb-4">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-[0_10px_30px_-5px_rgba(16,185,129,0.4)] transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-3 relative overflow-hidden">
                    {/* Shimmer Effect */}
                    <div className="absolute inset-0 animate-shimmer pointer-events-none"></div>
                    {/* Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/50 to-teal-400/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md"></div>
                    {React.createElement(serviceIcons[idx], { className: "h-8 w-8 text-white relative z-10 drop-shadow-lg" })}
                  </div>
                  <div className="text-xl font-bold text-gray-900 group-hover:text-emerald-600 transition-colors duration-300 group-hover:scale-105 inline-block">
                    {service.title}
                  </div>
                </div>
                
                <div className="flex-1 flex flex-col">
                  <div className="text-sm text-gray-600 leading-relaxed mb-6 text-center flex-1">
                    {service.description}
                  </div>
                  
                  <div className="pt-4 border-t border-white/30 mt-auto">
                    <Link href={`/services/${service.slug}`}>
                      <motion.div 
                        whileHover={{ x: 5 }}
                        className="flex items-center justify-center gap-2 text-emerald-600 font-semibold text-sm group-hover:gap-3 transition-all duration-300 cursor-pointer hover:text-emerald-700"
                      >
                        Learn More
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </motion.div>
                    </Link>
                  </div>
                </div>
              </div>
              
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-500/0 via-emerald-500/10 to-teal-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </div>
          </motion.div>
        ))}
      </div>
      
      {/* Decorative Glassmorphic Elements */}
      <div className="absolute top-1/3 right-0 w-64 h-64 bg-gradient-to-r from-emerald-400/5 to-teal-400/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 left-0 w-48 h-48 bg-gradient-to-r from-cyan-400/5 to-emerald-400/5 rounded-full blur-3xl"></div>
    </section>
  );
}

export function ProcessSection(): React.JSX.Element {
  const steps = [
    {
      number: "01",
      title: "Discovery & Planning",
      description: "We start by understanding your business goals, target audience, and technical requirements to create a comprehensive project roadmap.",
      icon: Search,
      color: "from-emerald-500 to-emerald-600"
    },
    {
      number: "02",
      title: "Design & Prototyping",
      description: "Our designers create wireframes and prototypes, ensuring the user experience is intuitive and visually appealing.",
      icon: Palette,
      color: "from-teal-500 to-teal-600"
    },
    {
      number: "03",
      title: "Development & Testing",
      description: "Our developers build your solution using modern technologies, with continuous testing to ensure quality and performance.",
      icon: Code,
      color: "from-green-500 to-green-600"
    },
    {
      number: "04",
      title: "Launch & Support",
      description: "We deploy your project and provide ongoing support, maintenance, and updates to ensure long-term success.",
      icon: Rocket,
      color: "from-orange-500 to-orange-600"
    }
  ];

  return (
    <section id="process" className="relative container mx-auto px-4 py-24 bg-gradient-to-br from-gray-50 to-emerald-50 overflow-hidden">
      {/* Background Glassmorphic Elements */}
      <div className="absolute top-20 left-1/4 w-32 h-32 bg-emerald-400/10 backdrop-blur-md rounded-full border border-emerald-300/20 animate-float"></div>
      <div className="absolute bottom-20 right-1/4 w-24 h-24 bg-teal-400/10 backdrop-blur-md rounded-full border border-teal-300/20 animate-float delay-1000"></div>
      <div className="absolute top-1/2 left-10 w-20 h-20 bg-green-400/10 backdrop-blur-md rounded-full border border-green-300/20 animate-float delay-2000"></div>
      
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
          className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-md border border-white/30 text-gray-800 rounded-full text-sm font-medium mb-6 shadow-lg"
        >
          <Settings className="h-4 w-4" />
          Our Process
        </motion.div>
        
        <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-emerald-800 bg-clip-text text-transparent">
          How We Work
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Our proven development process ensures your project is delivered on time, within budget, and exceeds expectations.
        </p>
      </motion.div>
      
      <div className="relative z-10">
        {/* Timeline Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-emerald-200 via-teal-200 to-cyan-200 hidden lg:block"></div>
        
        <div className="space-y-12 lg:space-y-16">
          {steps.map((step, idx) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className={`relative flex flex-col lg:flex-row items-center gap-8 ${
                idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              }`}
            >
              {/* Step Number and Icon */}
              <div className="relative z-20">
                <div className="relative w-20 h-20 bg-white/20 backdrop-blur-md rounded-full border-4 border-white/30 shadow-xl flex items-center justify-center overflow-hidden">
                  {/* Glassmorphic Background Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-teal-500/5"></div>
                  
                  {/* Floating Particles */}
                  <div className="absolute top-2 right-2 w-1.5 h-1.5 bg-emerald-400/40 rounded-full animate-ping"></div>
                  <div className="absolute bottom-2 left-2 w-1 h-1 bg-teal-400/40 rounded-full animate-ping delay-1000"></div>
                  
                  <div className={`w-12 h-12 bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center shadow-lg relative overflow-hidden`}>
                    {/* Shimmer Effect */}
                    <div className="absolute inset-0 animate-shimmer"></div>
                    <step.icon className="h-6 w-6 text-gray-800 relative z-10" />
                  </div>
                  
                  {/* Step Number */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full flex items-center justify-center text-gray-800 text-xs font-bold shadow-lg">
                    {step.number}
                  </div>
                </div>
              </div>
              
              {/* Content */}
              <div className={`flex-1 text-center lg:text-left ${idx % 2 === 0 ? 'lg:pl-8' : 'lg:pr-8'}`}>
                <div className="relative bg-white/20 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-white/30 overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                  {/* Glassmorphic Background Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Floating Particles */}
                  <div className="absolute top-4 right-4 w-2 h-2 bg-emerald-400/40 rounded-full animate-ping"></div>
                  <div className="absolute bottom-4 left-4 w-1.5 h-1.5 bg-teal-400/40 rounded-full animate-ping delay-1000"></div>
                  
                  <div className="relative z-10">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4 group-hover:text-emerald-600 transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                  
                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-500/0 via-emerald-500/10 to-teal-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Decorative Glassmorphic Elements */}
      <div className="absolute top-1/3 right-0 w-64 h-64 bg-gradient-to-r from-emerald-400/5 to-teal-400/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 left-0 w-48 h-48 bg-gradient-to-r from-cyan-400/5 to-emerald-400/5 rounded-full blur-3xl"></div>
    </section>
  );
}

