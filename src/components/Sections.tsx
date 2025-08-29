"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { siteConfig } from "@/lib/siteConfig";
import React from "react";
import { Code, Smartphone, Database, Palette, Globe, Zap, Shield, Users, ArrowRight, FolderOpen, Search, Settings, Rocket, Star } from "lucide-react";

export function AboutSection(): React.JSX.Element {
  const stats = [
    { number: "100+", label: "Projects Delivered", icon: Globe, color: "from-blue-500 to-blue-600" },
    { number: "50+", label: "Happy Clients", icon: Users, color: "from-green-500 to-green-600" },
    { number: "24/7", label: "Support", icon: Shield, color: "from-purple-500 to-purple-600" },
    { number: "5+", label: "Years Experience", icon: Zap, color: "from-orange-500 to-orange-600" }
  ];

  return (
    <section id="about" className="relative container mx-auto px-4 py-24 bg-gradient-to-br from-gray-50 to-blue-50 overflow-hidden">
      {/* Background Glassmorphic Elements */}
      <div className="absolute top-20 left-1/4 w-32 h-32 bg-blue-400/10 backdrop-blur-md rounded-full border border-blue-300/20 animate-float"></div>
      <div className="absolute bottom-20 right-1/4 w-24 h-24 bg-purple-400/10 backdrop-blur-md rounded-full border border-purple-300/20 animate-float delay-1000"></div>
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
            className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent"
          >
            We're a team of passionate developers, designers, and strategists
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-lg text-gray-600 leading-relaxed"
          >
            With over 5 years of experience in the digital landscape, we've helped businesses of all sizes transform their ideas into powerful, scalable solutions. Our commitment to quality, innovation, and client success drives everything we do.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="space-y-4"
          >
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span className="text-gray-700">Custom software development tailored to your needs</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <span className="text-gray-700">Agile methodology ensuring rapid delivery and flexibility</span>
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
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Floating Particles */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-blue-400/40 rounded-full animate-ping"></div>
                <div className="absolute bottom-4 left-4 w-1.5 h-1.5 bg-purple-400/40 rounded-full animate-ping delay-1000"></div>
                
                <div className="relative z-10 text-center">
                  <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110 relative overflow-hidden`}>
                    {/* Shimmer Effect */}
                    <div className="absolute inset-0 animate-shimmer"></div>
                    <stat.icon className="h-8 w-8 text-gray-800 relative z-10" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </div>
                
                {/* Hover Glow Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/0 via-blue-500/10 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      
      {/* Decorative Glassmorphic Elements */}
      <div className="absolute top-1/3 right-0 w-64 h-64 bg-gradient-to-r from-blue-400/5 to-purple-400/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 left-0 w-48 h-48 bg-gradient-to-r from-green-400/5 to-blue-400/5 rounded-full blur-3xl"></div>
    </section>
  );
}

export function ServicesSection(): React.JSX.Element {
  const serviceIcons = [Code, Smartphone, Database, Palette];
  
  return (
    <section id="services" className="relative container mx-auto px-4 py-24 bg-gradient-to-br from-gray-50 to-blue-50 overflow-hidden">
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
          <Zap className="h-4 w-4" />
          Our Services
        </motion.div>
        
        <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent">
          What We Do Best
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          From concept to deployment, we handle every aspect of your digital journey with expertise and precision.
        </p>
      </motion.div>
      
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
        {siteConfig.services.map((service, idx) => (
          <motion.div
            key={service.key}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className="group relative"
          >
            <div className="relative overflow-hidden rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 h-full">
              {/* Glassmorphic Background Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Floating Particles */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-blue-400/40 rounded-full animate-ping"></div>
              <div className="absolute bottom-4 left-4 w-1.5 h-1.5 bg-purple-400/40 rounded-full animate-ping delay-1000"></div>
              
              <div className="relative p-6 h-full flex flex-col">
                <div className="text-center pb-4">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110 relative overflow-hidden">
                    {/* Shimmer Effect */}
                    <div className="absolute inset-0 animate-shimmer"></div>
                    {React.createElement(serviceIcons[idx], { className: "h-8 w-8 text-gray-800 relative z-10" })}
                  </div>
                  <div className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                    {service.title}
                  </div>
                </div>
                
                <div className="flex-1 text-center">
                  <div className="text-sm text-gray-600 leading-relaxed mb-6">
                    {service.description}
                  </div>
                  
                  <div className="pt-4 border-t border-white/20">
                    <div className="inline-flex items-center gap-2 text-blue-600 font-medium text-sm group-hover:gap-3 transition-all duration-300">
                      Learn More
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/0 via-blue-500/10 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </motion.div>
        ))}
      </div>
      
      {/* Decorative Glassmorphic Elements */}
      <div className="absolute top-1/3 right-0 w-64 h-64 bg-gradient-to-r from-blue-400/5 to-purple-400/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 left-0 w-48 h-48 bg-gradient-to-r from-green-400/5 to-blue-400/5 rounded-full blur-3xl"></div>
    </section>
  );
}

export function ProjectsSection(): React.JSX.Element {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Modern React-based e-commerce solution with payment integration",
      image: "/images/placeholder.svg",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      category: "Web Development"
    },
    {
      title: "Mobile Banking App",
      description: "Secure iOS and Android banking application with biometric authentication",
      image: "/images/placeholder.svg",
      tech: ["React Native", "Firebase", "Biometrics", "Security"],
      category: "Mobile Development"
    },
    {
      title: "AI-Powered Analytics",
      description: "Machine learning platform for business intelligence and data analysis",
      image: "/images/placeholder.svg",
      tech: ["Python", "TensorFlow", "AWS", "Docker"],
      category: "Backend Development"
    },
    {
      title: "Real Estate Portal",
      description: "Property listing platform with advanced search and virtual tours",
      image: "/images/placeholder.svg",
      tech: ["Vue.js", "Laravel", "MySQL", "3D Graphics"],
      category: "Web Development"
    },
    {
      title: "Fitness Tracking App",
      description: "Cross-platform fitness app with wearable device integration",
      image: "/images/placeholder.svg",
      tech: ["Flutter", "Bluetooth", "HealthKit", "Google Fit"],
      category: "Mobile Development"
    },
    {
      title: "Microservices API",
      description: "Scalable backend architecture for high-traffic applications",
      image: "/images/placeholder.svg",
      tech: ["Go", "Kubernetes", "Redis", "PostgreSQL"],
      category: "Backend Development"
    }
  ];

  return (
    <section id="projects" className="relative container mx-auto px-4 py-24 bg-gradient-to-br from-gray-50 to-blue-50 overflow-hidden">
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
          <FolderOpen className="h-4 w-4" />
          Our Portfolio
        </motion.div>
        
        <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent">
          Featured Projects
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Explore our latest work and see how we've helped businesses achieve their digital goals.
        </p>
      </motion.div>
      
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 relative z-10">
        {projects.map((project, idx) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className="group relative"
          >
            <div className="relative overflow-hidden rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 h-full">
              {/* Glassmorphic Background Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Floating Particles */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-blue-400/40 rounded-full animate-ping"></div>
              <div className="absolute bottom-4 left-4 w-1.5 h-1.5 bg-purple-400/40 rounded-full animate-ping delay-1000"></div>
              
              <div className="relative h-full flex flex-col">
                {/* Image Container */}
                <div className="relative overflow-hidden rounded-t-2xl">
                  <div className="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={400}
                      height={225}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 px-3 py-1 bg-white/20 backdrop-blur-md border border-white/30 text-gray-800 text-xs font-medium rounded-full">
                    {project.category}
                  </div>
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
                    <div className="p-6 text-gray-800">
                      <div className="text-sm text-gray-300 mb-2">Tech Stack:</div>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 bg-white/20 backdrop-blur-md border border-white/30 text-gray-800 text-xs rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-1">
                    {project.description}
                  </p>
                  
                  <div className="mt-auto pt-4 border-t border-white/20">
                    <div className="inline-flex items-center gap-2 text-blue-600 font-medium text-sm group-hover:gap-3 transition-all duration-300">
                      View Project
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/0 via-blue-500/10 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </motion.div>
        ))}
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="text-center relative z-10"
      >
        <a href="#contact">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-full shadow-xl hover:shadow-2xl transform transition-all duration-300"
          >
            Start Your Project
            <ArrowRight className="ml-2 h-5 w-5" />
          </motion.button>
        </a>
      </motion.div>
      
      {/* Decorative Glassmorphic Elements */}
      <div className="absolute top-1/3 right-0 w-64 h-64 bg-gradient-to-r from-blue-400/5 to-purple-400/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 left-0 w-48 h-48 bg-gradient-to-r from-green-400/5 to-blue-400/5 rounded-full blur-3xl"></div>
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
      color: "from-blue-500 to-blue-600"
    },
    {
      number: "02",
      title: "Design & Prototyping",
      description: "Our designers create wireframes and prototypes, ensuring the user experience is intuitive and visually appealing.",
      icon: Palette,
      color: "from-purple-500 to-purple-600"
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
    <section id="process" className="relative container mx-auto px-4 py-24 bg-gradient-to-br from-gray-50 to-blue-50 overflow-hidden">
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
          <Settings className="h-4 w-4" />
          Our Process
        </motion.div>
        
        <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent">
          How We Work
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Our proven development process ensures your project is delivered on time, within budget, and exceeds expectations.
        </p>
      </motion.div>
      
      <div className="relative z-10">
        {/* Timeline Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-200 via-purple-200 to-green-200 hidden lg:block"></div>
        
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
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5"></div>
                  
                  {/* Floating Particles */}
                  <div className="absolute top-2 right-2 w-1.5 h-1.5 bg-blue-400/40 rounded-full animate-ping"></div>
                  <div className="absolute bottom-2 left-2 w-1 h-1 bg-purple-400/40 rounded-full animate-ping delay-1000"></div>
                  
                  <div className={`w-12 h-12 bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center shadow-lg relative overflow-hidden`}>
                    {/* Shimmer Effect */}
                    <div className="absolute inset-0 animate-shimmer"></div>
                    <step.icon className="h-6 w-6 text-gray-800 relative z-10" />
                  </div>
                  
                  {/* Step Number */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-gray-800 text-xs font-bold shadow-lg">
                    {step.number}
                  </div>
                </div>
              </div>
              
              {/* Content */}
              <div className={`flex-1 text-center lg:text-left ${idx % 2 === 0 ? 'lg:pl-8' : 'lg:pr-8'}`}>
                <div className="relative bg-white/20 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-white/30 overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                  {/* Glassmorphic Background Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Floating Particles */}
                  <div className="absolute top-4 right-4 w-2 h-2 bg-blue-400/40 rounded-full animate-ping"></div>
                  <div className="absolute bottom-4 left-4 w-1.5 h-1.5 bg-purple-400/40 rounded-full animate-ping delay-1000"></div>
                  
                  <div className="relative z-10">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                  
                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/0 via-blue-500/10 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Decorative Glassmorphic Elements */}
      <div className="absolute top-1/3 right-0 w-64 h-64 bg-gradient-to-r from-blue-400/5 to-purple-400/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 left-0 w-48 h-48 bg-gradient-to-r from-green-400/5 to-blue-400/5 rounded-full blur-3xl"></div>
    </section>
  );
}

export function TestimonialsSection(): React.JSX.Element {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO",
      company: "TechStart Inc.",
      content: "Working with this team was an absolute pleasure. They delivered our e-commerce platform ahead of schedule and exceeded all our expectations. The attention to detail and user experience is outstanding.",
      avatar: "👩‍💼",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "CTO",
      company: "InnovateCorp",
      content: "Their technical expertise and innovative solutions helped us scale our platform to handle 10x more users. The team is professional, responsive, and truly understands our business needs.",
      avatar: "👨‍💻",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "Product Manager",
      company: "GrowthLabs",
      content: "From concept to launch, the entire process was smooth and transparent. They transformed our ideas into a beautiful, functional mobile app that our users love. Highly recommended!",
      avatar: "👩‍🎨",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="relative container mx-auto px-4 py-24 bg-gradient-to-br from-gray-50 to-blue-50 overflow-hidden">
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
          <Star className="h-4 w-4" />
          Client Testimonials
        </motion.div>
        
        <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent">
          What Our Clients Say
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Don't just take our word for it. Here's what our clients have to say about working with us.
        </p>
      </motion.div>
      
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto relative z-10">
        {testimonials.map((testimonial, idx) => (
          <motion.div
            key={testimonial.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className="group relative"
          >
            <div className="relative bg-white/20 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-white/30 overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 h-full">
              {/* Glassmorphic Background Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Floating Particles */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-blue-400/40 rounded-full animate-ping"></div>
              <div className="absolute bottom-4 left-4 w-1.5 h-1.5 bg-purple-400/40 rounded-full animate-ping delay-1000"></div>
              
              <div className="relative z-10 h-full flex flex-col">
                {/* Quote Icon */}
                <div className="text-4xl mb-4">💬</div>
                
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                {/* Content */}
                <div className="flex-1">
                  <p className="text-gray-700 leading-relaxed mb-6 italic">
                    "{testimonial.content}"
                  </p>
                </div>
                
                {/* Author */}
                <div className="mt-auto pt-4 border-t border-white/20">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-2xl shadow-lg relative overflow-hidden">
                      <div className="absolute inset-0 animate-shimmer"></div>
                      <span className="relative z-10">{testimonial.avatar}</span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">{testimonial.role} at {testimonial.company}</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/0 via-blue-500/10 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </motion.div>
        ))}
      </div>
      
      {/* Decorative Glassmorphic Elements */}
      <div className="absolute top-1/3 right-0 w-64 h-64 bg-gradient-to-r from-blue-400/5 to-purple-400/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 left-0 w-48 h-48 bg-gradient-to-r from-green-400/5 to-blue-400/5 rounded-full blur-3xl"></div>
    </section>
  );
}


