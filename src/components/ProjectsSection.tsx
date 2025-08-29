"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { siteConfig } from "@/lib/siteConfig";
import React from "react";
import { Smartphone, Database, Globe, FolderOpen, Rocket, ArrowRight } from "lucide-react";

export function ProjectsSection(): React.JSX.Element {
  return (
    <section id="projects" className="relative container mx-auto px-4 py-24 bg-gradient-to-br from-gray-50 to-emerald-50 overflow-hidden">

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
          <FolderOpen className="h-4 w-4" />
          Our Tech Stack
        </motion.div>
        
        <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-emerald-800 bg-clip-text text-transparent">
          Technologies We Master
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          We use cutting-edge technologies to build scalable, modern applications that drive business growth.
        </p>
      </motion.div>

      {/* Tech Stack Showcase */}
      <div className="grid md:grid-cols-3 gap-8 mb-12 relative z-10">
        {/* Mobile Development */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl p-6 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center">
              <Smartphone className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900">Mobile Development</h3>
          </div>
          <div className="space-y-2">
            {siteConfig.techStack.mobile.map((tech, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                <span className="text-gray-700 text-sm">{tech}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Backend Development */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl p-6 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center">
              <Database className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900">Backend Development</h3>
          </div>
          <div className="space-y-2">
            {siteConfig.techStack.backend.map((tech, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-gray-700 text-sm">{tech}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Frontend Development */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl p-6 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl flex items-center justify-center">
              <Globe className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900">Frontend Development</h3>
          </div>
          <div className="space-y-2">
            {siteConfig.techStack.frontend.map((tech, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                <span className="text-gray-700 text-sm">{tech}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Coming Soon Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl p-12 shadow-xl relative z-10"
      >
        <div className="w-20 h-20 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <Rocket className="h-10 w-10 text-white" />
        </div>
        <h3 className="text-3xl font-bold text-gray-900 mb-4">Portfolio Coming Soon</h3>
        <p className="text-gray-600 text-lg mb-6 max-w-2xl mx-auto">
          We're currently working on amazing projects for our clients. Our portfolio will showcase our expertise in mobile app development, backend systems, and modern web applications.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-semibold rounded-full shadow-xl hover:shadow-2xl transform transition-all duration-300"
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Start Your Project
          <ArrowRight className="h-5 w-5" />
        </motion.button>
      </motion.div>
    </section>
  );
}
