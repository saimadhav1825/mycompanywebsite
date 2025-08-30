"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Pause, Volume2, VolumeX, Maximize, RotateCcw, Phone, Mail, MessageSquare, Sparkles, Star, Users, Award, Clock, CheckCircle } from "lucide-react";

interface VideoShowcaseProps {
  title?: string;
  description?: string;
  videoUrl?: string;
  thumbnailUrl?: string;
}

export function VideoShowcase({ 
  title = "See How We Work", 
  description = "Watch how we transform ideas into digital reality",
  videoUrl = "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
  thumbnailUrl = "/placeholder.png"
}: VideoShowcaseProps): React.JSX.Element {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [showControls, setShowControls] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const controlsTimeoutRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => setCurrentTime(video.currentTime);
    const handleDurationChange = () => setDuration(video.duration);
    const handleLoadedData = () => setIsVideoLoaded(true);

    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('durationchange', handleDurationChange);
    video.addEventListener('loadeddata', handleLoadedData);

    return () => {
      video.removeEventListener('timeupdate', handleTimeUpdate);
      video.removeEventListener('durationchange', handleDurationChange);
      video.removeEventListener('loadeddata', handleLoadedData);
    };
  }, []);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (isPlaying) {
      video.pause();
    } else {
      video.play();
    }
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const video = videoRef.current;
    if (!video) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const percentage = (e.clientX - rect.left) / rect.width;
    video.currentTime = percentage * duration;
  };

  const resetVideo = () => {
    const video = videoRef.current;
    if (!video) return;

    video.currentTime = 0;
    setCurrentTime(0);
  };

  const handleMouseMove = () => {
    setShowControls(true);
    if (controlsTimeoutRef.current) {
      clearTimeout(controlsTimeoutRef.current);
    }
    controlsTimeoutRef.current = setTimeout(() => {
      if (isPlaying) {
        setShowControls(false);
      }
    }, 3000);
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const progressPercentage = duration > 0 ? (currentTime / duration) * 100 : 0;

  const steps = [
    {
      icon: Phone,
      title: "Contact Us",
      description: "Reach out via phone, email, or chat",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Users,
      title: "Consultation",
      description: "We discuss your project requirements",
      color: "from-emerald-500 to-teal-500"
    },
    {
      icon: Award,
      title: "Proposal",
      description: "Get a detailed project proposal",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: CheckCircle,
      title: "Development",
      description: "We build your dream project",
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="space-y-8"
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-center space-y-4"
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 backdrop-blur-md border border-emerald-200/50 text-emerald-700 rounded-full text-sm font-medium shadow-lg"
        >
          <Sparkles className="h-4 w-4" />
          How We Work
        </motion.div>
        
        <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-900 via-emerald-700 to-teal-800 bg-clip-text text-transparent">
          {title}
        </h3>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          {description}
        </p>
      </motion.div>

      {/* Video Player */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="relative group"
      >
        <div 
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-900 to-gray-800 shadow-2xl hover:shadow-3xl transition-all duration-500"
          onMouseMove={handleMouseMove}
          onMouseLeave={() => isPlaying && setShowControls(false)}
        >
          {/* Video Element */}
          <video
            ref={videoRef}
            className="w-full aspect-video object-cover"
            poster={thumbnailUrl}
            muted={isMuted}
            loop
            playsInline
          >
            <source src={videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Video Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20 pointer-events-none" />

          {/* Play Button Overlay */}
          <AnimatePresence>
            {!isPlaying && (
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                className="absolute inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm"
              >
                <motion.button
                  onClick={togglePlay}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-20 h-20 bg-white/20 backdrop-blur-xl border-2 border-white/40 rounded-full flex items-center justify-center shadow-2xl hover:bg-white/30 transition-all duration-300 group"
                >
                  <Play className="h-8 w-8 text-white ml-1 group-hover:scale-110 transition-transform duration-200" />
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Video Controls */}
          <AnimatePresence>
            {showControls && isVideoLoaded && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6"
              >
                {/* Progress Bar */}
                <div 
                  className="w-full h-2 bg-white/20 rounded-full cursor-pointer mb-4 relative overflow-hidden"
                  onClick={handleProgressClick}
                >
                  <div 
                    className="h-full bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full transition-all duration-300"
                    style={{ width: `${progressPercentage}%` }}
                  />
                  <div 
                    className="absolute top-1/2 transform -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow-lg transition-all duration-300"
                    style={{ left: `calc(${progressPercentage}% - 8px)` }}
                  />
                </div>

                {/* Control Buttons */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <motion.button
                      onClick={togglePlay}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-10 h-10 bg-white/20 backdrop-blur-xl border border-white/30 rounded-xl flex items-center justify-center text-white hover:bg-white/30 transition-all duration-200"
                    >
                      {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5 ml-0.5" />}
                    </motion.button>

                    <motion.button
                      onClick={toggleMute}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-10 h-10 bg-white/20 backdrop-blur-xl border border-white/30 rounded-xl flex items-center justify-center text-white hover:bg-white/30 transition-all duration-200"
                    >
                      {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
                    </motion.button>

                    <motion.button
                      onClick={resetVideo}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-10 h-10 bg-white/20 backdrop-blur-xl border border-white/30 rounded-xl flex items-center justify-center text-white hover:bg-white/30 transition-all duration-200"
                    >
                      <RotateCcw className="h-5 w-5" />
                    </motion.button>
                  </div>

                  <div className="flex items-center gap-4">
                    <span className="text-white text-sm font-medium">
                      {formatTime(currentTime)} / {formatTime(duration)}
                    </span>
                    
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-10 h-10 bg-white/20 backdrop-blur-xl border border-white/30 rounded-xl flex items-center justify-center text-white hover:bg-white/30 transition-all duration-200"
                    >
                      <Maximize className="h-5 w-5" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Loading State */}
          {!isVideoLoaded && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-900">
              <div className="flex gap-2">
                <div className="w-3 h-3 bg-emerald-500 rounded-full animate-bounce"></div>
                <div className="w-3 h-3 bg-teal-500 rounded-full animate-bounce delay-100"></div>
                <div className="w-3 h-3 bg-cyan-500 rounded-full animate-bounce delay-200"></div>
              </div>
            </div>
          )}
        </div>
      </motion.div>

      {/* How to Reach Out Steps */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="space-y-6"
      >
        <div className="text-center">
          <h4 className="text-2xl font-bold text-gray-900 mb-2">How to Get Started</h4>
          <p className="text-gray-600">Follow these simple steps to begin your project</p>
        </div>

        <div className="grid gap-4">
          {steps.map((step, idx) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * idx }}
              whileHover={{ scale: 1.02, x: 5 }}
              className="flex items-center gap-4 p-4 bg-white/50 backdrop-blur-md border border-white/40 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <div className={`w-12 h-12 bg-gradient-to-r ${step.color} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <step.icon className="h-6 w-6 text-white" />
              </div>
              
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-1">
                  <span className={`w-6 h-6 bg-gradient-to-r ${step.color} text-white text-sm font-bold rounded-full flex items-center justify-center`}>
                    {idx + 1}
                  </span>
                  <h5 className="font-semibold text-gray-900">{step.title}</h5>
                </div>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>

              <motion.div
                animate={{ x: [0, 3, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                <Star className="h-5 w-5 text-yellow-500 fill-current" />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="text-center space-y-6 bg-gradient-to-br from-emerald-50 to-teal-50 p-8 rounded-3xl border border-emerald-100"
      >
        <div className="space-y-3">
          <h4 className="text-2xl font-bold bg-gradient-to-r from-emerald-700 to-teal-700 bg-clip-text text-transparent">
            Ready to Start Your Project?
          </h4>
          <p className="text-gray-600 max-w-md mx-auto">
            Contact us today and let's discuss how we can bring your vision to life.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center gap-3 h-12 px-6 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <MessageSquare className="h-5 w-5" />
            Start Your Project
          </motion.button>

          <motion.a
            href={`mailto:contact@yourcompany.com`}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 h-12 px-6 bg-white/80 backdrop-blur-md border-2 border-emerald-200 hover:border-emerald-300 text-emerald-700 font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Mail className="h-5 w-5" />
            Send Email
          </motion.a>
        </div>
      </motion.div>
    </motion.div>
  );
}
