'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle, ArrowRight, Users, Award, Clock, Shield } from 'lucide-react';
import React from 'react';

// Import all possible icons
import { 
  Search, Palette, Code, Rocket, Settings, Database, FolderOpen,
  Smartphone, Globe
} from 'lucide-react';

const iconMap = {
  Search,
  Palette, 
  Code,
  Rocket,
  Settings,
  Database,
  FolderOpen,
  Smartphone,
  Globe
};

interface Service {
  title: string;
  slug: string;
  description: string;
  detailedDescription: string;
  tagline: string;
  icon: string;
  heroImage: string;
  benefits: string[];
  process: Array<{
    title: string;
    description: string;
    icon: string;
  }>;
  useCases: string[];
  industries: string[];
  technologies: string[];
}

interface ServicePageClientProps {
  service: Service;
}

export default function ServicePageClient({ service }: ServicePageClientProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-emerald-50/30 to-cyan-50/30">
      {/* Back Navigation */}
      <motion.div 
        className="fixed top-6 left-6 z-50"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
      >
        <Link 
          href="/#services"
          className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-md rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-gray-700 hover:text-emerald-600 border border-white/20"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="font-medium">Back to Services</span>
        </Link>
      </motion.div>

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-emerald-400/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-cyan-400/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-emerald-400/5 to-cyan-400/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium">
                  {React.createElement(iconMap[service.icon as keyof typeof iconMap], { className: "w-4 h-4" })}
                  {service.title}
                </div>
                
                <motion.h1 
                  className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  {service.tagline}
                </motion.h1>
                
                <motion.p 
                  className="text-xl text-gray-600 leading-relaxed max-w-2xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  {service.detailedDescription}
                </motion.p>
              </div>

              <motion.div 
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <Link href="#contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300"
                  >
                    Start Your Project
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </Link>
                
                <Link href="#process">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-2 px-8 py-4 bg-white hover:bg-gray-50 text-gray-700 font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200"
                  >
                    Our Process
                  </motion.button>
                </Link>
              </motion.div>
            </motion.div>

            {/* Hero Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              {/* Animated Background Elements */}
              <div className="absolute -inset-4 bg-gradient-to-r from-emerald-400/20 to-teal-400/20 rounded-3xl blur-3xl animate-pulse"></div>
              <div className="absolute top-4 left-4 w-24 h-24 bg-emerald-400/10 rounded-full blur-2xl animate-float"></div>
              <div className="absolute bottom-4 right-4 w-32 h-32 bg-teal-400/10 rounded-full blur-2xl animate-float delay-1000"></div>
              
              <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-white/20 backdrop-blur-md border border-white/30 group">
                {/* Shimmer overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer"></div>
                
                {/* Floating particles */}
                <div className="absolute top-6 right-6 w-3 h-3 bg-emerald-400/60 rounded-full animate-ping"></div>
                <div className="absolute bottom-6 left-6 w-2 h-2 bg-teal-400/60 rounded-full animate-ping delay-1000"></div>
                <div className="absolute top-1/2 right-8 w-1.5 h-1.5 bg-cyan-400/60 rounded-full animate-ping delay-500"></div>
                
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 via-emerald-500/5 to-teal-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <Image
                  src={service.heroImage}
                  alt={service.title}
                  width={600}
                  height={400}
                  className="w-full h-auto transform group-hover:scale-105 transition-transform duration-700"
                  priority
                />
              </div>
              
              {/* Floating stats */}
              <motion.div 
                className="absolute -bottom-6 -left-6 bg-white/90 backdrop-blur-md rounded-2xl shadow-xl p-6 border border-white/50 group/stats"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 1 }}
              >
                {/* Floating particles for stats */}
                <div className="absolute top-2 right-2 w-1.5 h-1.5 bg-emerald-400/40 rounded-full animate-ping"></div>
                <div className="absolute bottom-2 left-2 w-1 h-1 bg-teal-400/40 rounded-full animate-ping delay-500"></div>
                
                {/* Gradient background on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/50 to-teal-50/50 rounded-2xl opacity-0 group-hover/stats:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-xl flex items-center justify-center shadow-lg group-hover/stats:shadow-xl transition-shadow duration-300 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
                    <Award className="w-6 h-6 text-emerald-600 relative z-10" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 group-hover/stats:text-emerald-700 transition-colors duration-300">Ready to Start</div>
                    <div className="text-sm text-gray-600">Your First Project</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our {service.title}?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the benefits of working with industry experts
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group h-full"
              >
                <div className="relative bg-white/60 backdrop-blur-md rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/30 hover:border-emerald-200 group-hover:-translate-y-2 h-full flex flex-col min-h-[160px]">
                  <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-emerald-600" />
                  </div>
                  <p className="text-gray-700 leading-relaxed flex-grow">{benefit}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20 bg-gradient-to-r from-emerald-900/5 via-teal-900/5 to-cyan-900/5">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Development Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven methodology that delivers exceptional results
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {service.process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative group"
              >
                <div className="bg-white/60 backdrop-blur-md rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/30 group-hover:-translate-y-2 h-full">
                  {/* Step number */}
                  <div className="absolute -top-4 left-6 w-8 h-8 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {index + 1}
                  </div>
                  
                  <div className="pt-4">
                    <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      {React.createElement(iconMap[step.icon as keyof typeof iconMap], { className: "w-6 h-6 text-emerald-600" })}
                    </div>
                    
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{step.description}</p>
                  </div>
                </div>
                
                {/* Connection line */}
                {index < service.process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-emerald-300 to-teal-300 opacity-50"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Use Cases */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                Perfect For
              </h2>
              <div className="grid gap-4">
                {service.useCases.map((useCase, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-start gap-3 p-4 bg-white/60 backdrop-blur-md rounded-xl border border-white/30 hover:shadow-lg transition-all duration-300"
                  >
                    <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{useCase}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Industries & Technologies */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-12"
            >
              {/* Industries */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Industries We Serve</h3>
                <div className="flex flex-wrap gap-3">
                  {service.industries.map((industry, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium hover:bg-emerald-200 transition-colors duration-300"
                    >
                      {industry}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Technologies We Use</h3>
                <div className="flex flex-wrap gap-3">
                  {service.technologies.map((tech, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="px-4 py-2 bg-cyan-100 text-cyan-700 rounded-full text-sm font-medium hover:bg-cyan-200 transition-colors duration-300"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Your {service.title} Project?
            </h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Let's discuss your ideas and create something amazing together. 
              Get a free consultation and project quote.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-emerald-600 font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                  Get Free Quote
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-emerald-600 transition-all duration-300"
              >
                <Users className="w-5 h-5" />
                Schedule Consultation
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
