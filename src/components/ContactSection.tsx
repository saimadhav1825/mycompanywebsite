"use client";

import { ContactForm } from "@/components/ContactForm";
import { siteConfig } from "@/lib/siteConfig";
import React from "react";
import { Mail, Phone, MapPin, Linkedin, Github, Twitter, Send } from "lucide-react";
import { motion } from "framer-motion";

export function ContactSection(): React.JSX.Element {
  return (
    <section id="contact" className="relative container mx-auto px-4 py-24 bg-gradient-to-br from-gray-50 to-blue-50 overflow-hidden">
      {/* Background Glassmorphic Elements */}
      <div className="absolute top-20 left-1/4 w-32 h-32 bg-blue-400/10 backdrop-blur-md rounded-full border border-blue-300/20 animate-float"></div>
      <div className="absolute bottom-20 right-1/4 w-24 h-24 bg-purple-400/10 backdrop-blur-md rounded-full border border-purple-300/20 animate-float delay-1000"></div>
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
          <Send className="h-4 w-4" />
          Get In Touch
        </motion.div>
        
        <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent">
          Let's Build Something Amazing
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Ready to start your next project? We'd love to learn about your vision and help bring it to life.
        </p>
      </motion.div>
      
      <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto relative z-10">
        {/* Left Side - Contact Info */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="space-y-8"
        >
          <div className="relative bg-white/20 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-white/30 overflow-hidden">
            {/* Glassmorphic Background Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5"></div>
            
            {/* Floating Particles */}
            <div className="absolute top-6 right-6 w-2 h-2 bg-blue-400/40 rounded-full animate-ping"></div>
            <div className="absolute bottom-6 left-6 w-1.5 h-1.5 bg-purple-400/40 rounded-full animate-ping delay-1000"></div>
            
            <div className="relative z-10">
              <h3 className="text-2xl font-semibold mb-6 text-gray-900">Contact Information</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                We'd love to learn about your project. Reach us through the form or directly:
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg relative overflow-hidden">
                    <div className="absolute inset-0 animate-shimmer"></div>
                    <Mail className="h-6 w-6 text-gray-800 relative z-10" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900 mb-1">Email</div>
                    <a 
                      className="text-blue-600 hover:text-blue-700 transition-colors duration-300" 
                      href={`mailto:${siteConfig.contactEmail}`}
                    >
                      {siteConfig.contactEmail}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg relative overflow-hidden">
                    <div className="absolute inset-0 animate-shimmer"></div>
                    <Phone className="h-6 w-6 text-gray-800 relative z-10" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900 mb-1">Phone</div>
                    <a 
                      className="text-blue-600 hover:text-blue-700 transition-colors duration-300" 
                      href={`tel:${siteConfig.contactPhone}`}
                    >
                      {siteConfig.contactPhone}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg relative overflow-hidden">
                    <div className="absolute inset-0 animate-shimmer"></div>
                    <MapPin className="h-6 w-6 text-gray-800 relative z-10" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900 mb-1">Location</div>
                    <div className="text-gray-600">{siteConfig.address}</div>
                  </div>
                </div>
              </div>
              
              {/* Social Links */}
              <div className="pt-6 border-t border-white/20">
                <div className="font-medium text-gray-900 mb-4">Follow Us</div>
                <div className="flex gap-4">
                  <a 
                    href={siteConfig.social.linkedin} 
                    target="_blank" 
                    rel="noreferrer"
                    className="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl flex items-center justify-center text-white hover:shadow-lg transform hover:scale-110 transition-all duration-300 relative overflow-hidden group"
                  >
                    <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <Linkedin className="h-5 w-5 relative z-10" />
                  </a>
                  <a 
                    href={siteConfig.social.github} 
                    target="_blank" 
                    rel="noreferrer"
                    className="w-10 h-10 bg-gradient-to-r from-gray-700 to-gray-800 rounded-xl flex items-center justify-center text-white hover:shadow-lg transform hover:scale-110 transition-all duration-300 relative overflow-hidden group"
                  >
                    <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <Github className="h-5 w-5 relative z-10" />
                  </a>
                  <a 
                    href={siteConfig.social.twitter} 
                    target="_blank" 
                    rel="noreferrer"
                    className="w-10 h-10 bg-gradient-to-r from-blue-400 to-blue-500 rounded-xl flex items-center justify-center text-white hover:shadow-lg transform hover:scale-110 transition-all duration-300 relative overflow-hidden group"
                  >
                    <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <Twitter className="h-5 w-5 relative z-10" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* Right Side - Contact Form */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative bg-white/20 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-white/30 overflow-hidden"
        >
          {/* Glassmorphic Background Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5"></div>
          
          {/* Floating Particles */}
          <div className="absolute top-6 right-6 w-2 h-2 bg-blue-400/40 rounded-full animate-ping"></div>
          <div className="absolute bottom-6 left-6 w-1.5 h-1.5 bg-purple-400/40 rounded-full animate-ping delay-1000"></div>
          
          <div className="relative z-10">
            <h3 className="text-2xl font-semibold mb-6 text-gray-900">Send us a Message</h3>
            <ContactForm />
          </div>
        </motion.div>
      </div>
      
      {/* Decorative Glassmorphic Elements */}
      <div className="absolute top-1/3 right-0 w-64 h-64 bg-gradient-to-r from-blue-400/5 to-purple-400/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 left-0 w-48 h-48 bg-gradient-to-r from-green-400/5 to-blue-400/5 rounded-full blur-3xl"></div>
    </section>
  );
}


