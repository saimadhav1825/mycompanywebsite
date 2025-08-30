'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, Scale, FileCheck, User, Settings, Shield, AlertTriangle, CheckCircle, Star, Sparkles, Users, FileText, Clock } from 'lucide-react';
import { siteConfig } from '@/lib/siteConfig';

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-emerald-50/30 to-cyan-50/30 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated gradient orbs */}
        <motion.div 
          className="absolute top-20 left-10 w-32 h-32 bg-emerald-400/15 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
            x: [0, 25, 0],
            y: [0, -15, 0]
          }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-40 h-40 bg-cyan-400/15 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.4, 1],
            opacity: [0.4, 0.7, 0.4],
            x: [0, -20, 0],
            y: [0, 20, 0]
          }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        />
        <motion.div 
          className="absolute top-1/3 left-1/4 w-28 h-28 bg-teal-400/12 rounded-full blur-2xl"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.5, 0.2],
            rotate: [0, 360]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Floating particles */}
        <motion.div 
          className="absolute top-1/4 right-1/3 w-2 h-2 bg-emerald-400/30 rounded-full"
          animate={{ 
            y: [0, -120, 0],
            opacity: [0, 1, 0],
            scale: [0.5, 1.2, 0.5]
          }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-teal-400/40 rounded-full"
          animate={{ 
            y: [0, -90, 0],
            opacity: [0, 1, 0],
            scale: [0.3, 1.5, 0.3]
          }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        
        {/* Central gradient */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-emerald-400/8 to-cyan-400/8 rounded-full blur-3xl animate-pulse"></div>
      </div>

      {/* Enhanced Back Navigation */}
      <motion.div 
        className="fixed top-6 left-6 z-50"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Link 
          href="/"
          className="group inline-flex items-center gap-2 px-6 py-3 bg-white/90 backdrop-blur-md rounded-full shadow-lg hover:shadow-2xl transition-all duration-500 text-gray-700 hover:text-emerald-600 border border-white/30 relative overflow-hidden"
        >
          {/* Shimmer effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-shimmer"></div>
          
          <ArrowLeft className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform duration-300" />
          <span className="font-medium relative z-10">Back to Home</span>
          
          {/* Floating particles */}
          <div className="absolute top-1 right-2 w-1 h-1 bg-emerald-400/40 rounded-full animate-ping opacity-0 group-hover:opacity-100"></div>
        </Link>
      </motion.div>

      <div className="container mx-auto px-6 py-24 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Enhanced Header */}
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div 
              className="inline-flex items-center gap-3 px-6 py-3 bg-white/30 backdrop-blur-xl border border-white/40 text-blue-700 rounded-2xl text-sm font-semibold mb-8 shadow-xl relative overflow-hidden group"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
            >
              {/* Shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-200/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-shimmer"></div>
              
              <div className="w-8 h-8 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center shadow-lg relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
                <Scale className="w-4 h-4 relative z-10" />
              </div>
              <span className="relative z-10">Legal Terms & Conditions</span>
              
              {/* Floating sparkles */}
              <Sparkles className="w-3 h-3 text-blue-500/60 animate-pulse absolute top-1 right-2" />
            </motion.div>
            
            <motion.h1 
              className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-800 bg-clip-text text-transparent mb-8 relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Terms of Service
              
              {/* Decorative elements */}
              <motion.div 
                className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-blue-400/20 to-indigo-400/20 rounded-full blur-lg"
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360]
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              />
            </motion.h1>
            
            <motion.div 
              className="flex flex-wrap items-center justify-center gap-6 mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              <div className="flex items-center gap-2 px-4 py-2 bg-white/30 backdrop-blur-md rounded-xl border border-white/30 shadow-lg group hover:shadow-xl transition-all duration-300">
                <Clock className="w-5 h-5 text-blue-500" />
                <span className="text-sm font-medium text-gray-700 group-hover:text-blue-600 transition-colors duration-300">Effective: December 2024</span>
              </div>
              <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full animate-pulse"></div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white/30 backdrop-blur-md rounded-xl border border-white/30 shadow-lg group hover:shadow-xl transition-all duration-300">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-sm font-medium text-gray-700 group-hover:text-green-600 transition-colors duration-300">Legally Binding</span>
              </div>
              <div className="w-2 h-2 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full animate-pulse delay-500"></div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white/30 backdrop-blur-md rounded-xl border border-white/30 shadow-lg group hover:shadow-xl transition-all duration-300">
                <Shield className="w-5 h-5 text-purple-500" />
                <span className="text-sm font-medium text-gray-700 group-hover:text-purple-600 transition-colors duration-300">Your Protection</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Enhanced Content with Glassmorphic Cards */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            {/* Acceptance of Terms */}
            <motion.div 
              className="bg-white/60 backdrop-blur-lg rounded-3xl p-8 shadow-xl border border-white/40 relative overflow-hidden group hover:shadow-2xl transition-all duration-500"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              whileHover={{ scale: 1.01 }}
            >
              <div className="absolute top-4 right-4 w-2 h-2 bg-blue-400/50 rounded-full animate-ping"></div>
              <div className="absolute bottom-4 left-4 w-1.5 h-1.5 bg-indigo-400/50 rounded-full animate-ping delay-700"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-100/20 to-transparent opacity-0 group-hover:opacity-100 animate-shimmer transition-opacity duration-700"></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center shadow-lg">
                    <FileCheck className="w-6 h-6 text-blue-600" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 group-hover:text-blue-700 transition-colors duration-300">Acceptance of Terms</h2>
                </div>
                <p className="text-gray-700 leading-relaxed text-lg">
                  By accessing and using our website and services, you accept and agree to be bound by the terms and provision of this agreement. These Terms of Service govern your use of our platform and all related services.
                </p>
              </div>
            </motion.div>

            {/* Services Description */}
            <motion.div 
              className="bg-white/60 backdrop-blur-lg rounded-3xl p-8 shadow-xl border border-white/40 relative overflow-hidden group hover:shadow-2xl transition-all duration-500"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              whileHover={{ scale: 1.01 }}
            >
              <div className="absolute top-4 right-4 w-2 h-2 bg-emerald-400/50 rounded-full animate-ping"></div>
              <div className="absolute bottom-4 left-4 w-1.5 h-1.5 bg-teal-400/50 rounded-full animate-ping delay-700"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-100/20 to-transparent opacity-0 group-hover:opacity-100 animate-shimmer transition-opacity duration-700"></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-xl flex items-center justify-center shadow-lg">
                    <Settings className="w-6 h-6 text-emerald-600" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 group-hover:text-emerald-700 transition-colors duration-300">Our Services</h2>
                </div>
                <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                  We provide a range of digital services including web development, mobile app development, UI/UX design, and backend development. Our services are designed to help businesses grow and succeed in the digital landscape.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    { title: "Web Development", desc: "Custom websites and web applications" },
                    { title: "Mobile Apps", desc: "iOS and Android application development" },
                    { title: "UI/UX Design", desc: "User interface and experience design" },
                    { title: "Backend Systems", desc: "Server-side development and APIs" }
                  ].map((item, index) => (
                    <motion.div 
                      key={index}
                      className="p-4 bg-white/40 backdrop-blur-md rounded-xl border border-white/30 hover:bg-white/60 transition-all duration-300"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 1.6 + index * 0.1 }}
                    >
                      <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* User Responsibilities */}
            <motion.div 
              className="bg-white/60 backdrop-blur-lg rounded-3xl p-8 shadow-xl border border-white/40 relative overflow-hidden group hover:shadow-2xl transition-all duration-500"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.6 }}
              whileHover={{ scale: 1.01 }}
            >
              <div className="absolute top-4 right-4 w-2 h-2 bg-orange-400/50 rounded-full animate-ping"></div>
              <div className="absolute bottom-4 left-4 w-1.5 h-1.5 bg-yellow-400/50 rounded-full animate-ping delay-700"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-100/20 to-transparent opacity-0 group-hover:opacity-100 animate-shimmer transition-opacity duration-700"></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-100 to-orange-200 rounded-xl flex items-center justify-center shadow-lg">
                    <User className="w-6 h-6 text-orange-600" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 group-hover:text-orange-700 transition-colors duration-300">User Responsibilities</h2>
                </div>
                <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                  As a user of our services, you agree to:
                </p>
                <div className="grid gap-3">
                  {[
                    "Provide accurate and truthful information",
                    "Use our services only for lawful purposes",
                    "Respect intellectual property rights",
                    "Not interfere with our services or systems",
                    "Comply with all applicable laws and regulations"
                  ].map((item, index) => (
                    <motion.div 
                      key={index}
                      className="flex items-center gap-3 p-4 bg-white/40 backdrop-blur-md rounded-xl border border-white/30 hover:bg-white/60 transition-all duration-300 group/item"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 1.8 + index * 0.1 }}
                    >
                      <div className="w-3 h-3 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full animate-pulse group-hover/item:scale-110 transition-transform duration-300"></div>
                      <span className="text-gray-700 font-medium group-hover/item:text-orange-700 transition-colors duration-300">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Intellectual Property */}
            <motion.div 
              className="bg-white/60 backdrop-blur-lg rounded-3xl p-8 shadow-xl border border-white/40 relative overflow-hidden group hover:shadow-2xl transition-all duration-500"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.8 }}
              whileHover={{ scale: 1.01 }}
            >
              <div className="absolute top-4 right-4 w-2 h-2 bg-purple-400/50 rounded-full animate-ping"></div>
              <div className="absolute bottom-4 left-4 w-1.5 h-1.5 bg-indigo-400/50 rounded-full animate-ping delay-700"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-100/20 to-transparent opacity-0 group-hover:opacity-100 animate-shimmer transition-opacity duration-700"></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl flex items-center justify-center shadow-lg">
                    <Shield className="w-6 h-6 text-purple-600" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 group-hover:text-purple-700 transition-colors duration-300">Intellectual Property Rights</h2>
                </div>
                <p className="text-gray-700 leading-relaxed text-lg">
                  All content, features, and functionality of our services are owned by us and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws. You may not reproduce, distribute, modify, or create derivative works without our explicit written permission.
                </p>
              </div>
            </motion.div>

            {/* Limitation of Liability */}
            <motion.div 
              className="bg-white/60 backdrop-blur-lg rounded-3xl p-8 shadow-xl border border-white/40 relative overflow-hidden group hover:shadow-2xl transition-all duration-500"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 2.0 }}
              whileHover={{ scale: 1.01 }}
            >
              <div className="absolute top-4 right-4 w-2 h-2 bg-red-400/50 rounded-full animate-ping"></div>
              <div className="absolute bottom-4 left-4 w-1.5 h-1.5 bg-pink-400/50 rounded-full animate-ping delay-700"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-100/20 to-transparent opacity-0 group-hover:opacity-100 animate-shimmer transition-opacity duration-700"></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-100 to-red-200 rounded-xl flex items-center justify-center shadow-lg">
                    <AlertTriangle className="w-6 h-6 text-red-600" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 group-hover:text-red-700 transition-colors duration-300">Limitation of Liability</h2>
                </div>
                <p className="text-gray-700 leading-relaxed text-lg">
                  In no event shall we be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your use of our services.
                </p>
              </div>
            </motion.div>

            {/* Contact Section */}
            <motion.div 
              className="bg-gradient-to-br from-emerald-50/80 to-teal-50/80 backdrop-blur-lg rounded-3xl p-8 shadow-xl border border-emerald-200/40 relative overflow-hidden group hover:shadow-2xl transition-all duration-500"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 2.2 }}
              whileHover={{ scale: 1.01 }}
            >
              <div className="absolute top-4 right-4 w-2 h-2 bg-emerald-400/50 rounded-full animate-ping"></div>
              <div className="absolute bottom-4 left-4 w-1.5 h-1.5 bg-teal-400/50 rounded-full animate-ping delay-700"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-100/30 to-transparent opacity-0 group-hover:opacity-100 animate-shimmer transition-opacity duration-700"></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-200 to-teal-200 rounded-xl flex items-center justify-center shadow-lg">
                    <FileText className="w-6 h-6 text-emerald-700" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 group-hover:text-emerald-700 transition-colors duration-300">Contact Information</h2>
                </div>
                <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                  If you have any questions about these Terms of Service, please contact us:
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="p-4 bg-white/50 backdrop-blur-md rounded-xl border border-white/40 text-center">
                    <strong className="block text-emerald-700 mb-1">Email:</strong>
                    <span className="text-gray-700">{siteConfig.email}</span>
                  </div>
                  <div className="p-4 bg-white/50 backdrop-blur-md rounded-xl border border-white/40 text-center">
                    <strong className="block text-emerald-700 mb-1">Phone:</strong>
                    <span className="text-gray-700">{siteConfig.phone}</span>
                  </div>
                  <div className="p-4 bg-white/50 backdrop-blur-md rounded-xl border border-white/40 text-center">
                    <strong className="block text-emerald-700 mb-1">Address:</strong>
                    <span className="text-gray-700">{siteConfig.address}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Bottom padding for chat button */}
      <div className="h-24"></div>
    </div>
  );
}