"use client";

import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";
import React from "react";
import { Heart, ArrowUp } from "lucide-react";
import { motion } from "framer-motion";

export function Footer(): React.JSX.Element {
  const year = new Date().getFullYear();
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(147,51,234,0.1),transparent_50%)]" />
      
      {/* Floating Glassmorphic Elements */}
      <div className="absolute top-20 left-1/4 w-32 h-32 bg-blue-400/10 backdrop-blur-md rounded-full border border-blue-300/20 animate-float"></div>
      <div className="absolute bottom-20 right-1/4 w-24 h-24 bg-purple-400/10 backdrop-blur-md rounded-full border border-purple-300/20 animate-float delay-1000"></div>
      <div className="absolute top-1/2 left-10 w-20 h-20 bg-green-400/10 backdrop-blur-md rounded-full border border-green-300/20 animate-float delay-2000"></div>
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-lg relative overflow-hidden">
                  <div className="absolute inset-0 animate-shimmer"></div>
                  <span className="text-white font-bold text-2xl relative z-10">D</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                    {siteConfig.name}
                  </h3>
                  <p className="text-blue-200 text-sm">{siteConfig.tagline}</p>
                </div>
              </div>
              
              <p className="text-gray-300 leading-relaxed max-w-md">
                We're passionate about creating exceptional digital experiences that help businesses grow and succeed in the modern world.
              </p>
              
              {/* Social Links */}
              <div className="flex gap-4">
                <motion.a 
                  href={siteConfig.social.linkedin} 
                  target="_blank" 
                  rel="noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl flex items-center justify-center text-white hover:shadow-lg transform transition-all duration-300 relative overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <svg className="h-6 w-6 relative z-10" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </motion.a>
                <motion.a 
                  href={siteConfig.social.github} 
                  target="_blank" 
                  rel="noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-12 h-12 bg-gradient-to-r from-gray-700 to-gray-800 rounded-xl flex items-center justify-center text-white hover:shadow-lg transform transition-all duration-300 relative overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <svg className="h-6 w-6 relative z-10" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </motion.a>
                <motion.a 
                  href={siteConfig.social.twitter} 
                  target="_blank" 
                  rel="noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-12 h-12 bg-gradient-to-r from-blue-400 to-blue-500 rounded-xl flex items-center justify-center text-white hover:shadow-lg transform transition-all duration-300 relative overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <svg className="h-6 w-6 relative z-10" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </motion.a>
              </div>
            </motion.div>
          </div>
          
          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <div className="space-y-3">
              {["About", "Services", "Projects", "Contact"].map((link) => (
                <motion.a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  whileHover={{ x: 5 }}
                  className="block text-gray-300 hover:text-white transition-colors duration-300"
                >
                  {link}
                </motion.a>
              ))}
            </div>
          </motion.div>
          
          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
            <div className="space-y-3">
              {siteConfig.services.map((service) => (
                <motion.div
                  key={service.key}
                  whileHover={{ x: 5 }}
                  className="text-gray-300 hover:text-white transition-colors duration-300 cursor-pointer"
                >
                  {service.title}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
        
        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <div className="flex items-center gap-2 text-gray-400">
            <span>© {year} {siteConfig.name}. Made with</span>
            <Heart className="h-4 w-4 text-red-400 fill-current" />
            <span>for amazing clients</span>
          </div>
          
          <div className="flex items-center gap-6 text-sm text-gray-400">
            <Link href="#" className="hover:text-white transition-colors duration-300">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-white transition-colors duration-300">
              Terms of Service
            </Link>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full shadow-2xl hover:shadow-3xl transform transition-all duration-300 z-40 flex items-center justify-center group"
        aria-label="Scroll to top"
      >
        <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
        <ArrowUp className="h-6 w-6 relative z-10" />
      </motion.button>
      
      {/* Decorative Glassmorphic Elements */}
      <div className="absolute top-1/3 right-0 w-64 h-64 bg-gradient-to-r from-blue-400/5 to-purple-400/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 left-0 w-48 h-48 bg-gradient-to-r from-green-400/5 to-blue-400/5 rounded-full blur-3xl"></div>
    </footer>
  );
}


