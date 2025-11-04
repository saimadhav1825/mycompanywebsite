"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { MessageCircle, X, Send, Bot, User, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import React from "react";

type Message = {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
  options?: ChatOption[];
};

type ChatOption = {
  text: string;
  value: string;
  action?: () => void;
};

type ChatStage = 'greeting' | 'project-type' | 'requirements' | 'budget' | 'timeline' | 'contact-info' | 'completed';

type ProjectType = 'website' | 'mobile-app' | 'backend' | 'ui-ux' | 'other';
type Budget = 'under-5k' | '5k-15k' | '15k-50k' | '50k-plus' | 'discuss';

interface ClientInfo {
  name?: string;
  email?: string;
  phone?: string;
  company?: string;
}

interface ProjectDetails {
  type?: ProjectType;
  budget?: Budget;
  timeline?: string;
  requirements?: string;
  features?: string[];
}

// Content filtering and response system
const BOT_RESPONSES = {
  inappropriate: "I'm here to help with business inquiries and project discussions. Please keep our conversation professional and focused on how we can assist with your development needs.",
  spam: "I notice you&apos;re sending messages very quickly. Please take a moment to describe your project requirements, and I'll be happy to help.",
  nonsense: "I'm not sure I understand. Could you please tell me more about your project or what specific services you&apos;re interested in?",
  moderated: "I'm designed to assist with business inquiries. Let&apos;s focus on discussing your project needs - what type of development service can I help you with?",
  offensive: "Let&apos;s keep our conversation professional. I'm here to help you with your development projects. What can I assist you with today?",
  empty: "Please let me know how I can help you with your project. What type of development service are you interested in?",
  gibberish: "I want to make sure I understand your needs correctly. Could you please rephrase your question about your project requirements?",
};

// Content filtering keywords and patterns
const INAPPROPRIATE_KEYWORDS = [
  'spam', 'scam', 'hack', 'illegal', 'fraud', 'money laundering', 'bitcoin',
  'crypto scam', 'investment', 'get rich quick', 'lottery', 'winner',
  'urgent', 'inheritance', 'million dollars', 'transfer funds',
  'stupid', 'idiot', 'moron', 'dumb', 'retard', 'loser',
  'hate', 'kill', 'die', 'death', 'violence',
];

const SPAM_PATTERNS = [
  /(.)\1{4,}/g, // Repeated characters (aaaaa, 11111)
  /^[A-Z\s!]{10,}$/g, // ALL CAPS messages
  /\b(free|buy now|click here|limited time|act now|guaranteed|make money|work from home)\b/gi,
  /(.{1,10})\1{3,}/g, // Repeated phrases
  /^\s*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~`]{5,}\s*$/g, // Special characters only
  /\b\d{4}[\s\-]\d{4}[\s\-]\d{4}[\s\-]\d{4}\b/g, // Credit card patterns
  /\b\d{3}[\s\-]\d{3}[\s\-]\d{4}\b/g, // Phone number spam patterns
];

const NONSENSE_PATTERNS = [
  /^[aeiou]{3,}$/gi, // Just vowels
  /^[bcdfghjklmnpqrstvwxyz]{5,}$/gi, // Just consonants
  /^(.{1,3})\1{4,}$/g, // Very short repeated patterns
  /^[0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~`\s]+$/g, // Only numbers and symbols
];

// Rate limiting
const MESSAGE_RATE_LIMIT = 10; // Max messages per minute
const BURST_LIMIT = 3; // Max messages in 10 seconds
const messageTracker = new Map();
const burstTracker = new Map();

export function EnhancedChatbot(): React.JSX.Element {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [sessionId] = useState(() => `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`);
  const [stage, setStage] = useState<ChatStage>('greeting');
  const [clientInfo, setClientInfo] = useState<ClientInfo>({});
  const [projectDetails, setProjectDetails] = useState<ProjectDetails>({});
  const [warningCount, setWarningCount] = useState(0);
  const [showFilterWarning, setShowFilterWarning] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Content filtering functions
  const sanitizeMessage = (message: string): string => {
    return message.trim().replace(/\s+/g, ' '); // Remove extra whitespace
  };

  const checkRateLimit = (sessionId: string): boolean => {
    const now = Date.now();
    const userMessages = messageTracker.get(sessionId) || [];
    const recentMessages = userMessages.filter((timestamp: number) => now - timestamp < 60000); // Last minute
    const veryRecentMessages = userMessages.filter((timestamp: number) => now - timestamp < 10000); // Last 10 seconds
    
    // Update tracker
    recentMessages.push(now);
    messageTracker.set(sessionId, recentMessages);
    
    return recentMessages.length <= MESSAGE_RATE_LIMIT && veryRecentMessages.length <= BURST_LIMIT;
  };

  const detectInappropriateContent = (message: string): boolean => {
    const lowerMessage = message.toLowerCase();
    return INAPPROPRIATE_KEYWORDS.some(keyword => lowerMessage.includes(keyword));
  };

  const detectSpam = (message: string): boolean => {
    return SPAM_PATTERNS.some(pattern => pattern.test(message));
  };

  const detectNonsense = (message: string): boolean => {
    if (message.length < 2) return true;
    return NONSENSE_PATTERNS.some(pattern => pattern.test(message));
  };

  const isEmptyOrMeaningless = (message: string): boolean => {
    const cleaned = message.replace(/[^a-zA-Z0-9]/g, '');
    return cleaned.length < 2;
  };

  const getFilteredResponse = (message: string): string | null => {
    // Check rate limiting
    if (!checkRateLimit(sessionId)) {
      return BOT_RESPONSES.spam;
    }

    // Check for empty or meaningless messages
    if (isEmptyOrMeaningless(message)) {
      return BOT_RESPONSES.empty;
    }

    // Check for inappropriate content
    if (detectInappropriateContent(message)) {
      setWarningCount(prev => prev + 1);
      return BOT_RESPONSES.inappropriate;
    }

    // Check for spam patterns
    if (detectSpam(message)) {
      return BOT_RESPONSES.spam;
    }

    // Check for nonsense/gibberish
    if (detectNonsense(message)) {
      return BOT_RESPONSES.gibberish;
    }

    // If too many warnings, be more strict
    if (warningCount >= 3) {
      return BOT_RESPONSES.moderated;
    }

    return null; // Message is acceptable
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      initializeChat();
    }
  }, [isOpen]);

  const initializeChat = () => {
    const welcomeMessage: Message = {
      id: "1",
      text: "Hi 👋! I'm here to help you get started with your project. Are you looking for:",
      sender: "bot",
      timestamp: new Date(),
      options: [
        { text: "🌐 Website Development", value: "website" },
        { text: "📱 Mobile App", value: "mobile-app" },
        { text: "⚙️ Backend/API", value: "backend" },
        { text: "🎨 UI/UX Design", value: "ui-ux" },
        { text: "💬 Other (tell me more)", value: "other" }
      ]
    };
    setMessages([welcomeMessage]);
    setStage('project-type');
  };

  const saveToDatabase = async (newMessage?: Message, updatedClientInfo?: ClientInfo, updatedProjectDetails?: ProjectDetails, newStage?: ChatStage) => {
    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          sessionId,
          message: newMessage,
          clientInfo: updatedClientInfo,
          projectDetails: updatedProjectDetails,
          stage: newStage
        }),
      });

      if (!response.ok) {
        // Silently handle the error - chat functionality will continue without database storage
        console.warn('Chat data could not be saved. Chat will continue without persistence.');
      }
    } catch (error) {
      // Silently handle the error - chat functionality will continue without database storage
      console.warn('Chat storage unavailable. Chat will continue without persistence.');
    }
  };

  const addMessage = (text: string, sender: "user" | "bot", options?: ChatOption[]) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      sender,
      timestamp: new Date(),
      options
    };
    setMessages(prev => [...prev, newMessage]);
    saveToDatabase(newMessage);
    return newMessage;
  };

  const handleOptionClick = (option: ChatOption) => {
    addMessage(option.text, "user");
    
    setTimeout(() => {
      if (option.action) {
        option.action();
      } else {
        handleBotResponse(option.value, option.text);
      }
    }, 500);
  };

  const handleBotResponse = (value: string, userText: string) => {
    setIsLoading(true);
    
    setTimeout(() => {
      let botResponse = "";
      let newStage = stage;
      const updatedProjectDetails = { ...projectDetails };
      const updatedClientInfo = { ...clientInfo };
      let options: ChatOption[] = [];

      switch (stage) {
        case 'project-type':
          updatedProjectDetails.type = value as ProjectType;
          newStage = 'requirements';
          
          if (value === 'website') {
            botResponse = "Great choice! 🌐 What type of website are you looking for?";
            options = [
              { text: "🏢 Business/Corporate Website", value: "business" },
              { text: "🛒 E-commerce Store", value: "ecommerce" },
              { text: "📝 Blog/Content Platform", value: "blog" },
              { text: "🎨 Portfolio Website", value: "portfolio" },
              { text: "💼 Custom Solution", value: "custom" }
            ];
          } else if (value === 'mobile-app') {
            botResponse = "Awesome! 📱 What kind of mobile app do you need?";
            options = [
              { text: "🛒 E-commerce App", value: "ecommerce-app" },
              { text: "📱 Social/Community App", value: "social" },
              { text: "💼 Business/Productivity App", value: "business-app" },
              { text: "🎮 Game/Entertainment", value: "game" },
              { text: "🔧 Custom App", value: "custom-app" }
            ];
          } else if (value === 'backend') {
            botResponse = "Perfect! ⚙️ What backend services do you need?";
            options = [
              { text: "🔗 REST API Development", value: "rest-api" },
              { text: "🗄️ Database Design", value: "database" },
              { text: "🔐 Authentication System", value: "auth" },
              { text: "☁️ Cloud Integration", value: "cloud" },
              { text: "⚡ Custom Backend", value: "custom-backend" }
            ];
          } else if (value === 'ui-ux') {
            botResponse = "Excellent! 🎨 What design services do you need?";
            options = [
              { text: "🌐 Website Design", value: "web-design" },
              { text: "📱 Mobile App Design", value: "app-design" },
              { text: "🏢 Brand Identity", value: "branding" },
              { text: "🔄 UX Research & Strategy", value: "ux-research" },
              { text: "💼 Complete Design System", value: "design-system" }
            ];
          } else {
            botResponse = "I'd love to hear more about your project! Please tell me what you have in mind:";
            newStage = 'budget';
          }
          break;

        case 'requirements':
          if (value !== 'custom' && value !== 'custom-app' && value !== 'custom-backend') {
            updatedProjectDetails.requirements = userText;
          }
          newStage = 'budget';
          botResponse = "Great! Now, what's your budget range for this project?";
          options = [
            { text: "💰 Under $5,000", value: "under-5k" },
            { text: "💰 $5,000 - $15,000", value: "5k-15k" },
            { text: "💰 $15,000 - $50,000", value: "15k-50k" },
            { text: "💰 $50,000+", value: "50k-plus" },
            { text: "💬 Let&apos;s discuss", value: "discuss" }
          ];
          break;

        case 'budget':
          updatedProjectDetails.budget = value as Budget;
          newStage = 'timeline';
          botResponse = "Perfect! When would you like to get started?";
          options = [
            { text: "🚀 ASAP (Rush job)", value: "asap" },
            { text: "📅 Within 1 month", value: "1-month" },
            { text: "⏰ 2-3 months", value: "2-3-months" },
            { text: "📆 Flexible timeline", value: "flexible" }
          ];
          break;

        case 'timeline':
          updatedProjectDetails.timeline = userText;
          newStage = 'contact-info';
          botResponse = "Excellent! I'd love to connect you with our team. Could you share your contact details?";
          // No options here, we'll handle free text input
          break;

        case 'contact-info':
          // Parse contact info from free text
          const emailMatch = userText.match(/\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/);
          const phoneMatch = userText.match(/[\+]?[1-9][\d]{0,15}/);
          
          if (emailMatch) updatedClientInfo.email = emailMatch[0];
          if (phoneMatch) updatedClientInfo.phone = phoneMatch[0];
          
          // Try to extract name (first word that looks like a name)
          const words = userText.split(' ');
          for (const word of words) {
            if (word.length > 2 && /^[A-Za-z]+$/.test(word) && !['email', 'phone', 'call', 'contact'].includes(word.toLowerCase())) {
              updatedClientInfo.name = word;
              break;
            }
          }

          newStage = 'completed';
          botResponse = "Thank you! 🎉 I've collected all the information about your project. Our team will review your requirements and get back to you within 24 hours. Is there anything else you'd like to add?";
          break;
      }

      setStage(newStage);
      setProjectDetails(updatedProjectDetails);
      setClientInfo(updatedClientInfo);
      
      addMessage(botResponse, "bot", options);
      saveToDatabase(undefined, updatedClientInfo, updatedProjectDetails, newStage);
      setIsLoading(false);
    }, 1000);
  };

  const handleSendMessage = async (text: string) => {
    if (!text.trim()) return;

    const sanitizedText = sanitizeMessage(text);
    const filteredResponse = getFilteredResponse(sanitizedText);

    // Add user message
    addMessage(sanitizedText, "user");
    setInputValue("");

    // If content is filtered, respond with appropriate message
    if (filteredResponse) {
      setShowFilterWarning(true);
      setTimeout(() => {
        addMessage(filteredResponse, "bot");
        // Hide warning after 3 seconds
        setTimeout(() => setShowFilterWarning(false), 3000);
      }, 500);
      return;
    }

    // Handle different stages for legitimate messages
    if (stage === 'requirements' || stage === 'contact-info') {
      handleBotResponse('custom', sanitizedText);
    } else if (stage === 'completed') {
      // Additional info after completion
      setTimeout(() => {
        addMessage("Thanks for the additional information! Our team has been notified and will be in touch soon. 👍", "bot");
      }, 1000);
    } else {
      // For other stages, provide general responses
      setTimeout(() => {
        addMessage("I understand. Let me help you with the next step!", "bot");
        // Continue with the flow
      }, 1000);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage(inputValue);
    }
  };

  return (
    <>
      {/* Floating Chat Button */}
      <motion.div
        className="fixed bottom-6 right-22 z-40"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: "spring" }}
      >
        <Button
          onClick={() => setIsOpen(!isOpen)}
          size="lg"
          className="h-14 w-14 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-600 hover:from-emerald-600 hover:via-teal-600 hover:to-cyan-700 border-2 border-white/20 backdrop-blur-sm"
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X className="h-6 w-6" />
              </motion.div>
            ) : (
              <motion.div
                key="chat"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <MessageCircle className="h-6 w-6" />
              </motion.div>
            )}
          </AnimatePresence>
        </Button>
      </motion.div>

      {/* Chat Interface */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-24 right-6 md:right-22 z-50 w-[90vw] max-w-sm md:w-96 mx-4 md:mx-0 max-h-[80vh]"
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.3, type: "spring" }}
          >
            <Card className="shadow-2xl border-0 bg-white/98 backdrop-blur-xl overflow-hidden">
              {/* Header */}
              <CardHeader className="pb-3 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-700 text-white relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJtIDQwIDAgbCAwIDQwIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMC4xIiBvcGFjaXR5PSIwLjEiLz48cGF0aCBkPSJtIDAgNDAgbCA0MCAwIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMC4xIiBvcGFjaXR5PSIwLjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>
                
                <div className="relative z-10">
                  <CardTitle className="flex items-center justify-between text-lg font-semibold">
                    <div className="flex items-center gap-3">
                      <div className="h-8 w-8 rounded-full bg-white/20 flex items-center justify-center">
                        <Bot className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <div className="text-white">Project Assistant</div>
                        <div className="text-xs text-white/80 font-normal">Let&apos;s discuss your project</div>
                      </div>
                    </div>
                    <div className="text-xs bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/30">
                      {stage === 'greeting' ? '👋 Welcome' : 
                       stage === 'project-type' ? '🎯 Project Type' :
                       stage === 'requirements' ? '📋 Requirements' :
                       stage === 'budget' ? '💰 Budget' :
                       stage === 'timeline' ? '📅 Timeline' :
                       stage === 'contact-info' ? '📞 Contact Info' :
                       '✅ Completed'}
                    </div>
                  </CardTitle>
                </div>
              </CardHeader>

              {/* Messages Area */}
              <CardContent className="p-0">
                <div className="h-56 sm:h-64 md:h-72 overflow-y-auto px-4 py-4 space-y-4 bg-gradient-to-b from-gray-50/50 to-white">
                  {messages.map((message) => (
                    <motion.div
                      key={message.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className={`flex gap-3 ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                    >
                      {/* Bot Avatar */}
                      {message.sender === "bot" && (
                        <div className="flex-shrink-0 mt-1">
                          <div className="h-8 w-8 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-lg">
                            <Bot className="h-4 w-4 text-white" />
                          </div>
                        </div>
                      )}

                      {/* Message Content */}
                      <div className={`flex flex-col max-w-[80%] ${message.sender === "user" ? "items-end" : "items-start"}`}>
                        {/* Message Bubble */}
                        <div
                          className={`rounded-2xl px-4 py-3 text-sm leading-relaxed shadow-sm ${
                            message.sender === "user"
                              ? "bg-gradient-to-br from-rose-500 to-pink-600 text-white rounded-br-md"
                              : "bg-white border border-gray-200 text-gray-800 rounded-bl-md"
                          }`}
                        >
                          {message.text}
                        </div>

                        {/* Options */}
                        {message.options && (
                          <div className="mt-3 space-y-2 w-full">
                            {message.options.map((option, index) => (
                              <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                              >
                                <Button
                                  variant="outline"
                                  size="sm"
                                  className="w-full justify-start text-xs bg-white hover:bg-emerald-50 border-emerald-200 hover:border-emerald-300 text-gray-700 hover:text-emerald-700 rounded-xl py-2.5 px-4 transition-all duration-200"
                                  onClick={() => handleOptionClick(option)}
                                >
                                  <span className="truncate">{option.text}</span>
                                </Button>
                              </motion.div>
                            ))}
                          </div>
                        )}

                        {/* Timestamp */}
                        <div className={`text-xs text-gray-400 mt-1 ${message.sender === "user" ? "text-right" : "text-left"}`}>
                          {new Date(message.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </div>
                      </div>

                      {/* User Avatar */}
                      {message.sender === "user" && (
                        <div className="flex-shrink-0 mt-1">
                          <div className="h-8 w-8 rounded-full bg-gradient-to-br from-gray-400 to-gray-600 flex items-center justify-center shadow-lg">
                            <User className="h-4 w-4 text-white" />
                          </div>
                        </div>
                      )}
                    </motion.div>
                  ))}

                  {/* Typing Indicator */}
                  {isLoading && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex gap-3 justify-start"
                    >
                      <div className="flex-shrink-0 mt-1">
                        <div className="h-8 w-8 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-lg">
                          <Bot className="h-4 w-4 text-white" />
                        </div>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-2xl rounded-bl-md px-4 py-3 shadow-sm">
                        <div className="flex gap-1.5">
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100"></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200"></div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                  <div ref={messagesEndRef} />
                </div>

                {/* Input Area */}
                <div className="border-t border-gray-200 bg-white px-4 py-4">
                  {/* Filter Warning */}
                  {showFilterWarning && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="mb-3 p-2 bg-amber-50 border border-amber-200 rounded-lg"
                    >
                      <div className="flex items-center gap-2 text-amber-700 text-xs">
                        <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                        <span>Please keep our conversation professional and project-focused</span>
                      </div>
                    </motion.div>
                  )}
                  
                  <div className="flex gap-3 items-end">
                    <div className="flex-1">
                      <Input
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyPress={handleKeyPress}
                        placeholder={
                          warningCount >= 3
                            ? "Please focus on your project requirements..."
                            : stage === 'contact-info' 
                            ? "Share your contact details..." 
                            : stage === 'requirements'
                            ? "Describe your project requirements..."
                            : "Type your message..."
                        }
                        className={`border-gray-300 focus:border-emerald-500 focus:ring-emerald-500 rounded-xl bg-gray-50 focus:bg-white transition-all duration-200 resize-none ${
                          warningCount >= 3 ? 'border-amber-300 bg-amber-50' : ''
                        }`}
                        disabled={isLoading}
                        maxLength={500} // Limit message length
                      />
                    </div>
                    <Button
                      onClick={() => handleSendMessage(inputValue)}
                      size="sm"
                      disabled={!inputValue.trim() || isLoading}
                      className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white rounded-xl px-4 py-2 shadow-lg hover:shadow-xl transition-all duration-200 disabled:opacity-50"
                    >
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                  
                  {/* Helper Text */}
                  <div className="text-xs text-gray-500 mt-2 text-center">
                    {warningCount >= 2 ? (
                      <span className="text-amber-600">Please keep messages professional • Business inquiries only</span>
                    ) : (
                      <span>Powered by AI • Your data is secure</span>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
