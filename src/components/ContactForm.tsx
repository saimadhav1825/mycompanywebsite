"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { siteConfig } from "@/lib/siteConfig";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, ChevronDown, User, Mail, MessageSquare, Briefcase, PartyPopper, Crown } from "lucide-react";

const schema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email required"),
  service: z.string().min(1, "Please select a service"),
  message: z.string().min(10, "Please include a bit more detail"),
});

type FormValues = z.infer<typeof schema>;

const successMessages = [
  "🎉 Spectacular! Message sent to orbit!",
  "⚡ Lightning speed delivery!",
  "🌟 Your message is now a shooting star!",
  "🚀 Mission accomplished, Captain!",
  "✨ Pure magic! Message delivered!",
  "🎊 Celebration time! We got it!",
  "💎 Diamond-quality message received!",
  "🏆 Championship-level delivery!",
  "👑 Royal message treatment complete!",
  "🎁 Your message is our gift!",
];

export function ContactForm(): React.JSX.Element {
  const [isSuccess, setIsSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const { register, handleSubmit, setValue, reset, formState: { errors, isSubmitting } } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { service: siteConfig.services[0]?.key ?? "web" },
  });

  async function onSubmit(values: FormValues): Promise<void> {
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error("Request failed");
      
      // Show success animation
      const randomMessage = successMessages[Math.floor(Math.random() * successMessages.length)];
      setSuccessMessage(randomMessage);
      setIsSuccess(true);
      
      toast.success("Message sent! We'll get back to you soon.");
      reset();
      
      // Reset success state after 4 seconds
      setTimeout(() => {
        setIsSuccess(false);
        setSuccessMessage("");
      }, 4000);
      
    } catch (_err) {
      toast.error("Failed to send. Please try again.", {
        action: {
          label: "Email us",
          onClick: () => {
            window.location.href = `mailto:${siteConfig.email}`;
          },
        },
      });
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
      {/* Redesigned Name Field */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="space-y-3"
      >
        <Label htmlFor="name" className="text-lg font-bold text-gray-800 flex items-center gap-3 mb-2">
          <motion.div
            animate={{ 
              scale: focusedField === "name" ? [1, 1.2, 1] : 1,
              rotate: focusedField === "name" ? [0, 10, -10, 0] : 0
            }}
            transition={{ duration: 0.6, repeat: focusedField === "name" ? Infinity : 0 }}
            className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg"
          >
            <User className="h-4 w-4 text-white" />
          </motion.div>
          What should we call you?
        </Label>
        <motion.div
          whileFocus={{ scale: 1.02 }}
          className="relative group"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 via-pink-400/20 to-purple-400/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-lg"></div>
          <Input 
            id="name" 
            placeholder="Enter your awesome name..." 
            aria-invalid={!!errors.name} 
            {...register("name")}
            onFocus={() => setFocusedField("name")}
            onBlur={() => setFocusedField(null)}
            className="relative h-16 text-lg border-3 border-gray-200/50 focus:border-purple-400 bg-white/80 backdrop-blur-md placeholder:text-gray-500 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 pl-6 pr-6 font-medium focus:ring-4 focus:ring-purple-400/30"
          />
          {focusedField === "name" && (
            <>
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-purple-500/10 rounded-2xl"
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <div className="absolute top-2 right-4 flex gap-1">
                <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 1, repeat: Infinity, delay: 0 }} className="w-1 h-1 bg-purple-400 rounded-full" />
                <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 1, repeat: Infinity, delay: 0.2 }} className="w-1 h-1 bg-pink-400 rounded-full" />
                <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 1, repeat: Infinity, delay: 0.4 }} className="w-1 h-1 bg-purple-400 rounded-full" />
              </div>
            </>
          )}
        </motion.div>
        {errors.name && (
          <motion.p 
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-sm text-amber-600 mt-2 flex items-center gap-2 font-medium"
          >
            <span className="w-5 h-5 bg-amber-50 border border-amber-200 rounded-full flex items-center justify-center text-xs">💡</span>
            {errors.name.message}
          </motion.p>
        )}
      </motion.div>

      {/* Redesigned Email Field */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="space-y-3"
      >
        <Label htmlFor="email" className="text-lg font-bold text-gray-800 flex items-center gap-3 mb-2">
          <motion.div
            animate={{ 
              scale: focusedField === "email" ? [1, 1.2, 1] : 1,
              rotate: focusedField === "email" ? [0, -15, 15, 0] : 0
            }}
            transition={{ duration: 0.8, repeat: focusedField === "email" ? Infinity : 0 }}
            className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg"
          >
            <Mail className="h-4 w-4 text-white" />
          </motion.div>
          How can we reach you?
        </Label>
        <motion.div
          whileFocus={{ scale: 1.02 }}
          className="relative group"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 via-cyan-400/20 to-blue-400/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-lg"></div>
          <Input 
            id="email" 
            type="email" 
            placeholder="your.email@company.com" 
            aria-invalid={!!errors.email} 
            {...register("email")}
            onFocus={() => setFocusedField("email")}
            onBlur={() => setFocusedField(null)}
            className="relative h-16 text-lg border-3 border-gray-200/50 focus:border-blue-400 bg-white/80 backdrop-blur-md placeholder:text-gray-500 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 pl-6 pr-6 font-medium focus:ring-4 focus:ring-blue-400/30"
          />
          {focusedField === "email" && (
            <>
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-blue-500/10 rounded-2xl"
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <div className="absolute top-2 right-4">
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  className="w-6 h-6 border-2 border-blue-400 border-t-transparent rounded-full"
                />
              </div>
            </>
          )}
        </motion.div>
        {errors.email && (
          <motion.p 
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-sm text-amber-600 mt-2 flex items-center gap-2 font-medium"
          >
            <span className="w-5 h-5 bg-amber-50 border border-amber-200 rounded-full flex items-center justify-center text-xs">💡</span>
            {errors.email.message}
          </motion.p>
        )}
      </motion.div>

      {/* Completely Redesigned Service Dropdown */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="space-y-3"
      >
        <Label className="text-lg font-bold text-gray-800 flex items-center gap-3 mb-2">
          <motion.div
            animate={{ 
              scale: isDropdownOpen ? [1, 1.1, 1] : 1
            }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="w-8 h-8 bg-gradient-to-r from-slate-600 to-gray-700 rounded-xl flex items-center justify-center shadow-md"
          >
            <Briefcase className="h-4 w-4 text-white" />
          </motion.div>
          What service can we help you with?
        </Label>
        <motion.div
          whileHover={{ scale: 1.01 }}
          className="relative group"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-gray-300/15 via-slate-300/15 to-gray-300/15 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 blur-sm"></div>
          <Select 
            defaultValue={(siteConfig.services[0]?.title ?? "Website Development").toLowerCase().replace(/\s+/g, "-")} 
            onValueChange={(v) => setValue("service", v)}
            onOpenChange={setIsDropdownOpen}
          >
            <SelectTrigger className="relative h-16 text-lg border-2 border-gray-200 hover:border-gray-300 focus:border-slate-400 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 pl-6 pr-12 font-medium focus:ring-3 focus:ring-slate-300/40">
              <div className="flex items-center gap-3 w-full">
                <motion.div 
                  animate={{ rotate: isDropdownOpen ? 180 : 0 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                  className="absolute right-4"
                >
                  <ChevronDown className="h-5 w-5 text-slate-600" />
                </motion.div>
                <SelectValue placeholder="Select a service" />
              </div>
            </SelectTrigger>
            <SelectContent className="bg-white/98 backdrop-blur-md border border-gray-200 rounded-xl shadow-xl mt-1 overflow-hidden">
              <div className="p-1">
                {siteConfig.services.map((s, idx) => {
                  const value = (s.title ?? `service-${idx}`).toLowerCase().replace(/\s+/g, "-");
                  const icons = {
                    "mobile-app-development": "📱",
                    "website-development": "🌐",
                    "backend-development": "🗄️",
                    "ui/ux-design": "🎨"
                  };
                  return (
                    <SelectItem 
                      key={value}
                      value={value}
                      className="h-12 hover:bg-slate-50 transition-all duration-150 rounded-lg mx-1 my-0.5 cursor-pointer"
                    >
                      <span className="flex items-center gap-3 text-base font-medium">
                        <span className="text-lg">{icons[value as keyof typeof icons] || "⚡"}</span>
                        <span className="text-slate-700">
                          {s.title}
                        </span>
                      </span>
                    </SelectItem>
                  );
                })}
              </div>
            </SelectContent>
          </Select>
        </motion.div>
      </motion.div>

      {/* Redesigned Message Field */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="space-y-3"
      >
        <Label htmlFor="message" className="text-lg font-bold text-gray-800 flex items-center gap-3 mb-2">
          <motion.div
            animate={{ 
              scale: focusedField === "message" ? [1, 1.2, 1] : 1,
              y: focusedField === "message" ? [0, -3, 0] : 0
            }}
            transition={{ duration: 1.2, repeat: focusedField === "message" ? Infinity : 0 }}
            className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center shadow-lg"
          >
            <MessageSquare className="h-4 w-4 text-white" />
          </motion.div>
          Share your amazing vision!
        </Label>
        <motion.div
          whileFocus={{ scale: 1.02 }}
          className="relative group"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-orange-400/20 via-red-400/20 to-orange-400/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-lg"></div>
          <Textarea 
            id="message" 
            placeholder="Tell us about your dream project! What's your vision? Goals? Timeline? The more details, the better we can bring your ideas to life! ✨🚀" 
            rows={6} 
            aria-invalid={!!errors.message} 
            {...register("message")}
            onFocus={() => setFocusedField("message")}
            onBlur={() => setFocusedField(null)}
            className="relative text-lg border-3 border-gray-200/50 focus:border-orange-400 bg-white/80 backdrop-blur-md placeholder:text-gray-500 rounded-2xl resize-none shadow-xl hover:shadow-2xl transition-all duration-300 p-6 font-medium focus:ring-4 focus:ring-orange-400/30 min-h-[140px]"
          />
          {focusedField === "message" && (
            <>
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-red-500/10 to-orange-500/10 rounded-2xl"
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <div className="absolute top-4 right-4 flex flex-col gap-2">
                <motion.div animate={{ scale: [1, 1.5, 1] }} transition={{ duration: 1, repeat: Infinity, delay: 0 }}>💡</motion.div>
                <motion.div animate={{ scale: [1, 1.5, 1] }} transition={{ duration: 1, repeat: Infinity, delay: 0.3 }}>🎯</motion.div>
                <motion.div animate={{ scale: [1, 1.5, 1] }} transition={{ duration: 1, repeat: Infinity, delay: 0.6 }}>✨</motion.div>
              </div>
            </>
          )}
        </motion.div>
        {errors.message && (
          <motion.p 
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-sm text-amber-600 mt-2 flex items-center gap-2 font-medium"
          >
            <span className="w-5 h-5 bg-amber-50 border border-amber-200 rounded-full flex items-center justify-center text-xs">💡</span>
            {errors.message.message}
          </motion.p>
        )}
      </motion.div>

      {/* Completely Redesigned Submit Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="pt-6"
      >
        <AnimatePresence mode="wait">
          {isSuccess ? (
            <motion.div
              key="success"
              initial={{ scale: 0.8, opacity: 0, rotateX: -90 }}
              animate={{ scale: 1, opacity: 1, rotateX: 0 }}
              exit={{ scale: 0.8, opacity: 0, rotateX: 90 }}
              transition={{ duration: 0.6, ease: "backOut" }}
              className="w-full h-18 bg-gradient-to-r from-green-400 via-emerald-500 to-teal-500 rounded-3xl flex items-center justify-center text-white font-bold text-xl shadow-2xl relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer"></div>
              
              {/* Celebratory Background */}
              <div className="absolute inset-0">
                <motion.div animate={{ rotate: 360 }} transition={{ duration: 8, repeat: Infinity, ease: "linear" }} className="absolute top-2 left-4 text-2xl">🎉</motion.div>
                <motion.div animate={{ rotate: -360 }} transition={{ duration: 6, repeat: Infinity, ease: "linear" }} className="absolute top-2 right-4 text-2xl">🌟</motion.div>
                <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 2, repeat: Infinity }} className="absolute bottom-2 left-8 text-xl">🚀</motion.div>
                <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 1.8, repeat: Infinity, delay: 0.5 }} className="absolute bottom-2 right-8 text-xl">⚡</motion.div>
              </div>

              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="mr-4"
              >
                <Crown className="h-8 w-8" />
              </motion.div>
              
              <motion.span
                initial={{ x: 30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="relative z-10 text-center"
              >
                {successMessage}
              </motion.span>
              
              <motion.div
                animate={{ 
                  scale: [1, 1.3, 1],
                  rotate: [0, 180, 360]
                }}
                transition={{ duration: 3, repeat: Infinity }}
                className="ml-4"
              >
                <PartyPopper className="h-8 w-8" />
              </motion.div>
              
              {/* Floating celebration particles */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{ 
                    y: [0, -30, 0], 
                    x: [0, Math.random() * 20 - 10, 0],
                    opacity: [0, 1, 0],
                    scale: [0.5, 1.2, 0.5]
                  }}
                  transition={{ 
                    duration: 2.5, 
                    repeat: Infinity, 
                    delay: i * 0.3,
                    ease: "easeInOut"
                  }}
                  className={`absolute top-1 text-xl`}
                  style={{ left: `${15 + i * 12}%` }}
                >
                  {['🎊', '✨', '💫', '🌟', '⭐', '🎈'][i]}
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div key="button" layout>
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full h-16 text-lg font-semibold bg-gradient-to-r from-slate-700 to-slate-800 hover:from-slate-800 hover:to-slate-900 text-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group border-0"
              >
                {/* Subtle Background Shimmer */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <AnimatePresence mode="wait">
                  {isSubmitting ? (
                    <motion.div
                      key="submitting"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="flex items-center gap-3 relative z-10"
                    >
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                      >
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full" />
                      </motion.div>
                      
                      <span className="text-lg font-medium">
                        Sending Message...
                      </span>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="send"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="flex items-center gap-3 relative z-10"
                    >
                      <motion.div
                        whileHover={{ scale: 1.1, x: 2 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Send className="h-5 w-5" />
                      </motion.div>
                      
                      <span className="text-lg font-semibold">
                        Send Message
                      </span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </form>
  );
}