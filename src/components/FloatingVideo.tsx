"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Pause, Volume2, VolumeX, X, Maximize, RotateCcw, Video, Film } from "lucide-react";

interface FloatingVideoProps {
  videoUrl?: string;
  thumbnailUrl?: string;
}

export function FloatingVideo({ 
  videoUrl = "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
  thumbnailUrl = "/placeholder.png"
}: FloatingVideoProps): React.JSX.Element {
  const [isOpen, setIsOpen] = useState(false);
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
  }, [isOpen]);

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

  const closeVideo = () => {
    const video = videoRef.current;
    if (video) {
      video.pause();
      setIsPlaying(false);
    }
    setIsOpen(false);
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const progressPercentage = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <>
      {/* Floating Video Button */}
      <motion.div
        className="fixed bottom-6 right-40 z-40"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1.5, type: "spring" }}
      >
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="w-14 h-14 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center group relative overflow-hidden border-2 border-white/20 backdrop-blur-sm"
        >
          {/* Background Glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/20 to-teal-400/20 rounded-2xl blur-xl -z-10 group-hover:opacity-100 opacity-60 transition-opacity duration-300"></div>
          
          {/* Shimmer Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 animate-shimmer transition-opacity duration-300"></div>
          
          {/* Floating Particles */}
          <div className="absolute w-1 h-1 bg-white/40 rounded-full top-2 right-3 opacity-0 group-hover:opacity-100 animate-float transition-opacity duration-300"></div>
          <div className="absolute w-1.5 h-1.5 bg-white/30 rounded-full bottom-3 left-2 opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-300"></div>
          <div className="absolute w-1 h-1 bg-emerald-200/50 rounded-full top-3 left-3 opacity-0 group-hover:opacity-100 animate-bounce transition-opacity duration-300"></div>
          
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X className="h-6 w-6 relative z-10" />
              </motion.div>
            ) : (
              <motion.div
                key="video"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Video className="h-6 w-6 relative z-10" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </motion.div>

      {/* Video Player Interface */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeVideo}
          >
            <motion.div
              className="relative w-full max-w-4xl aspect-video bg-gray-900 rounded-3xl overflow-hidden shadow-2xl"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3, type: "spring" }}
              onClick={(e) => e.stopPropagation()}
              onMouseMove={handleMouseMove}
              onMouseLeave={() => isPlaying && setShowControls(false)}
            >
              {/* Close Button */}
              <motion.button
                onClick={closeVideo}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="absolute top-4 right-4 w-10 h-10 bg-black/50 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-all duration-200 z-50"
              >
                <X className="h-5 w-5" />
              </motion.button>

              {/* Video Element */}
              <video
                ref={videoRef}
                className="w-full h-full object-cover"
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
                {!isPlaying && isVideoLoaded && (
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
                      className="w-24 h-24 bg-white/20 backdrop-blur-xl border-2 border-white/40 rounded-full flex items-center justify-center shadow-2xl hover:bg-white/30 transition-all duration-300 group"
                    >
                      <Play className="h-12 w-12 text-white ml-1 group-hover:scale-110 transition-transform duration-200" />
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
                          className="w-12 h-12 bg-white/20 backdrop-blur-xl border border-white/30 rounded-xl flex items-center justify-center text-white hover:bg-white/30 transition-all duration-200"
                        >
                          {isPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6 ml-0.5" />}
                        </motion.button>

                        <motion.button
                          onClick={toggleMute}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          className="w-12 h-12 bg-white/20 backdrop-blur-xl border border-white/30 rounded-xl flex items-center justify-center text-white hover:bg-white/30 transition-all duration-200"
                        >
                          {isMuted ? <VolumeX className="h-6 w-6" /> : <Volume2 className="h-6 w-6" />}
                        </motion.button>

                        <motion.button
                          onClick={resetVideo}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          className="w-12 h-12 bg-white/20 backdrop-blur-xl border border-white/30 rounded-xl flex items-center justify-center text-white hover:bg-white/30 transition-all duration-200"
                        >
                          <RotateCcw className="h-6 w-6" />
                        </motion.button>
                      </div>

                      <div className="flex items-center gap-4">
                        <span className="text-white text-sm font-medium">
                          {formatTime(currentTime)} / {formatTime(duration)}
                        </span>
                        
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          className="w-12 h-12 bg-white/20 backdrop-blur-xl border border-white/30 rounded-xl flex items-center justify-center text-white hover:bg-white/30 transition-all duration-200"
                        >
                          <Maximize className="h-6 w-6" />
                        </motion.button>
                      </div>
                    </div>

                    {/* Video Title */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="mt-4 text-center"
                    >
                      <h3 className="text-white text-xl font-bold mb-2">How We Work</h3>
                      <p className="text-white/80 text-sm">Watch how we transform ideas into digital reality</p>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Loading State */}
              {!isVideoLoaded && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-900">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 bg-emerald-500 rounded-full animate-bounce"></div>
                    <div className="w-3 h-3 bg-teal-500 rounded-full animate-bounce delay-100"></div>
                    <div className="w-3 h-3 bg-emerald-600 rounded-full animate-bounce delay-200"></div>
                  </div>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
