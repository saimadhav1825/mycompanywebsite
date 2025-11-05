"use client";

import { motion } from "framer-motion";
import React from "react";
import { Heart, Shield, Zap, Users, Lightbulb, HandHeart } from "lucide-react";

export function WhyChooseUsSection(): React.JSX.Element {
  const values = [
    {
      icon: Heart,
      title: "Passionate About Your Success",
      description: "Your project isn't just another job to us—it&apos;s our opportunity to create something amazing together",
      color: "from-rose-500 to-pink-600"
    },
    {
      icon: Zap,
      title: "Fresh Perspective & Innovation",
      description: "We bring cutting-edge ideas and modern approaches without the constraints of old habits",
      color: "from-emerald-500 to-emerald-600"
    },
    {
      icon: Shield,
      title: "100% Dedicated to Quality",
      description: "Every line of code, every design element is crafted with precision and care",
      color: "from-teal-500 to-teal-600"
    },
    {
      icon: Users,
      title: "Personal Attention",
      description: "You'll work directly with our core team—no middlemen, no outsourcing, just genuine partnership",
      color: "from-cyan-500 to-cyan-600"
    }
  ];

  const promises = [
    {
      emoji: "🚀",
      title: "Lightning-Fast Start",
      description: "We can begin working on your project within 24-48 hours of agreement"
    },
    {
      emoji: "💎",
      title: "Premium Quality, Startup Price",
      description: "Get enterprise-level quality at rates that won&apos;t break your budget"
    },
    {
      emoji: "🤝",
      title: "Your Success = Our Success",
      description: "We&apos;re invested in making your project a massive success story"
    },
    {
      emoji: "📞",
      title: "Always Available",
      description: "Direct access to our team whenever you need us—no ticket systems or delays"
    }
  ];

  return (
    <section id="why-choose-us" className="relative py-24 bg-gradient-to-br from-gray-50 via-emerald-50/50 to-teal-50/30 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 left-1/4 w-32 h-32 bg-emerald-400/10 backdrop-blur-md rounded-full border border-emerald-300/20 animate-float"></div>
      <div className="absolute bottom-20 right-1/4 w-24 h-24 bg-teal-400/10 backdrop-blur-md rounded-full border border-teal-300/20 animate-float delay-1000"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-md border border-white/30 text-gray-800 rounded-full text-sm font-medium mb-6 shadow-lg"
          >
            <Lightbulb className="h-4 w-4" />
            ✨ Why Choose Us
          </motion.div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-emerald-800 bg-clip-text text-transparent">
            Be Our First Success Story
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Every great company starts with their first client. We&apos;re eager to prove ourselves and make your project an incredible success. You&apos;ll get our absolute best work, full attention, and competitive rates.
          </p>
        </motion.div>

        {/* Core Values */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-16 sm:mb-20">
          {values.map((value, idx) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8, scale: 1.02 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="text-center group relative bg-white/20 backdrop-blur-xl rounded-xl sm:rounded-2xl p-5 sm:p-6 shadow-xl border border-white/40 hover:border-white/60 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
              
              <div className="relative mb-4 sm:mb-6">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`w-16 h-16 sm:w-20 sm:h-20 mx-auto bg-gradient-to-r ${value.color} rounded-xl sm:rounded-2xl flex items-center justify-center shadow-xl group-hover:shadow-[0_15px_35px_-5px_rgba(16,185,129,0.4)] transition-all duration-300 relative overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent opacity-0 group-hover:opacity-100 animate-shimmer transition-opacity duration-500"></div>
                  <value.icon className="h-8 w-8 sm:h-10 sm:w-10 text-white relative z-10 drop-shadow-lg" />
                </motion.div>
              </div>
              
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 + idx * 0.1 }}
                className="relative z-10"
              >
                <div className="text-base sm:text-lg font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-emerald-600 transition-colors">{value.title}</div>
                <div className="text-xs sm:text-sm text-gray-600 leading-relaxed">{value.description}</div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Promises */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-12 text-gray-900">
            🤝 Our Commitment to You
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {promises.map((promise, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                whileHover={{ scale: 1.05, y: -8 }}
                className="relative bg-white/35 backdrop-blur-xl rounded-xl sm:rounded-2xl p-5 sm:p-6 shadow-xl hover:shadow-[0_20px_40px_-10px_rgba(16,185,129,0.2)] border border-white/40 hover:border-white/60 group overflow-hidden text-center transition-all duration-300"
              >
                {/* Background Effects */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-4 right-4 w-2 h-2 bg-emerald-400/50 rounded-full animate-ping"></div>
                
                <div className="relative z-10">
                  <div className="text-4xl mb-4">{promise.emoji}</div>
                  <h4 className="font-semibold text-gray-900 mb-3 text-lg">{promise.title}</h4>
                  <p className="text-gray-700 text-sm leading-relaxed">{promise.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center bg-white/20 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-white/40"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            🎯 Ready to Be Our Launch Partner?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Join us on this exciting journey! As our first client, you&apos;ll receive exceptional value, personal attention, and a development team that&apos;s genuinely invested in your success.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-semibold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 text-lg"
            >
              <HandHeart className="h-5 w-5" />
              Let&apos;s Build Together
            </motion.a>
            
            <motion.a
              href="#services"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/20 backdrop-blur-md border-2 border-gray-300 hover:border-emerald-500 hover:text-emerald-600 text-gray-700 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-lg"
            >
              Explore Our Services
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
