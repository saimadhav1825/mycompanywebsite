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
type Budget = 'under-1k' | '1k-3.5k' | '3.5k-10k' | '10k-plus' | 'discuss';

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

// Currency detection and formatting
const CURRENCY_MAP: Record<string, { code: string; symbol: string; rate: number }> = {
  'USD': { code: 'USD', symbol: '$', rate: 1 },
  'EUR': { code: 'EUR', symbol: '€', rate: 0.92 },
  'GBP': { code: 'GBP', symbol: '£', rate: 0.79 },
  'INR': { code: 'INR', symbol: '₹', rate: 83.5 },
  'CAD': { code: 'CAD', symbol: 'C$', rate: 1.36 },
  'AUD': { code: 'AUD', symbol: 'A$', rate: 1.52 },
  'JPY': { code: 'JPY', symbol: '¥', rate: 150 },
  'CNY': { code: 'CNY', symbol: '¥', rate: 7.2 },
  'SGD': { code: 'SGD', symbol: 'S$', rate: 1.35 },
  'AED': { code: 'AED', symbol: 'د.إ', rate: 3.67 },
  'SAR': { code: 'SAR', symbol: '﷼', rate: 3.75 },
  'ZAR': { code: 'ZAR', symbol: 'R', rate: 18.5 },
  'BRL': { code: 'BRL', symbol: 'R$', rate: 4.95 },
  'MXN': { code: 'MXN', symbol: '$', rate: 17.2 },
  'DKK': { code: 'DKK', symbol: 'kr', rate: 6.87 },
  'NOK': { code: 'NOK', symbol: 'kr', rate: 10.8 },
  'CHF': { code: 'CHF', symbol: 'CHF', rate: 0.88 },
  'NZD': { code: 'NZD', symbol: 'NZ$', rate: 1.68 },
  'HKD': { code: 'HKD', symbol: 'HK$', rate: 7.82 },
  'MYR': { code: 'MYR', symbol: 'RM', rate: 4.75 },
  'THB': { code: 'THB', symbol: '฿', rate: 36.5 },
  'PHP': { code: 'PHP', symbol: '₱', rate: 56.2 },
  'IDR': { code: 'IDR', symbol: 'Rp', rate: 15750 },
  'VND': { code: 'VND', symbol: '₫', rate: 24500 },
  'KRW': { code: 'KRW', symbol: '₩', rate: 1350 },
  'TWD': { code: 'TWD', symbol: 'NT$', rate: 32.0 },
};

const detectCurrency = (): { code: string; symbol: string; rate: number } => {
  // Only run on client side
  if (typeof window === 'undefined' || typeof navigator === 'undefined') {
    return CURRENCY_MAP['USD'];
  }
  
  try {
    // Get all available locales
    const locales = navigator.languages || [navigator.language] || ['en-US'];
    const primaryLocale = locales[0] || 'en-US';
    
    // Check timezone as additional indicator
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone || '';
    
    // Map regions to currencies
    const regionToCurrency: Record<string, string> = {
      'US': 'USD', 'GB': 'GBP', 'IN': 'INR', 'CA': 'CAD', 'AU': 'AUD',
      'JP': 'JPY', 'CN': 'CNY', 'SG': 'SGD', 'AE': 'AED', 'SA': 'SAR',
      'ZA': 'ZAR', 'BR': 'BRL', 'MX': 'MXN',
      // EU countries
      'DE': 'EUR', 'FR': 'EUR', 'IT': 'EUR', 'ES': 'EUR', 'NL': 'EUR',
      'BE': 'EUR', 'AT': 'EUR', 'PT': 'EUR', 'FI': 'EUR', 'IE': 'EUR',
      'GR': 'EUR', 'PL': 'EUR', 'SE': 'EUR', 'DK': 'DKK', 'NO': 'NOK',
      'CH': 'CHF', 'NZ': 'NZD', 'HK': 'HKD', 'MY': 'MYR', 'TH': 'THB',
      'PH': 'PHP', 'ID': 'IDR', 'VN': 'VND', 'KR': 'KRW', 'TW': 'TWD',
    };
    
    // PRIORITY 1: Check timezone first (most reliable for India)
    const tzLower = timezone.toLowerCase();
    if (tzLower.includes('asia/kolkata') || 
        tzLower.includes('kolkata') || 
        tzLower.includes('mumbai') || 
        tzLower.includes('delhi') ||
        tzLower.includes('chennai') ||
        tzLower.includes('bangalore') ||
        tzLower.includes('hyderabad') ||
        tzLower.includes('pune') ||
        tzLower.includes('calcutta')) {
      return CURRENCY_MAP['INR'];
    }
    
    // PRIORITY 2: Check all locales for region codes
    for (const loc of locales) {
      const localeLower = loc.toLowerCase();
      
      // Special check for India - check multiple patterns
      if (localeLower.includes('-in') || 
          localeLower.includes('_in') || 
          localeLower.includes('/in') ||
          localeLower.endsWith('-in') ||
          localeLower.startsWith('hi-in') ||
          localeLower.startsWith('ta-in') ||
          localeLower.startsWith('te-in') ||
          localeLower.startsWith('kn-in') ||
          localeLower.startsWith('mr-in') ||
          localeLower.startsWith('gu-in') ||
          localeLower.startsWith('pa-in') ||
          localeLower.startsWith('bn-in') ||
          localeLower.startsWith('en-in')) {
        return CURRENCY_MAP['INR'];
      }
      
      // Extract region code
      const region = loc.split('-')[1] || loc.split('_')[1] || loc.split('/')[1] || '';
      if (region) {
        const regionUpper = region.toUpperCase();
        if (regionToCurrency[regionUpper]) {
          return CURRENCY_MAP[regionToCurrency[regionUpper]];
        }
      }
    }
    
    // Final fallback: check timezone for other currencies
    if (tzLower.includes('london') || tzLower.includes('europe/london')) {
      return CURRENCY_MAP['GBP'];
    }
    if (tzLower.includes('europe/')) {
      return CURRENCY_MAP['EUR'];
    }
    
    return CURRENCY_MAP['USD'];
  } catch {
    return CURRENCY_MAP['USD'];
  }
};

const formatCurrency = (amount: number, currency: { code: string; symbol: string; rate: number }): string => {
  const convertedAmount = amount * currency.rate;
  
  // Debug logging
  if (typeof window !== 'undefined' && currency.code === 'INR') {
    console.log('Formatting INR:', { amount, convertedAmount, currency });
  }
  
  // Special handling for currencies without decimals
  if (currency.code === 'JPY' || currency.code === 'KRW' || currency.code === 'VND' || currency.code === 'IDR') {
    return `${currency.symbol}${Math.round(convertedAmount).toLocaleString('en-IN')}`;
  }
  
  // Special formatting for INR (Indian Rupee)
  if (currency.code === 'INR') {
    const rounded = Math.round(convertedAmount);
    // Use Indian numbering system (lakhs, crores)
    const formatted = rounded.toLocaleString('en-IN');
    console.log('INR Formatting result:', formatted);
    return `₹${formatted}`;
  }
  
  // Format with appropriate decimals for other currencies
  const formatted = convertedAmount.toLocaleString(undefined, {
    minimumFractionDigits: 0,
    maximumFractionDigits: convertedAmount >= 1000 ? 0 : 2,
  });
  
  return `${currency.symbol}${formatted}`;
};

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
  const [currency, setCurrency] = useState(() => {
    const detected = detectCurrency();
    // Debug logging (remove in production)
    if (typeof window !== 'undefined') {
      console.log('Currency Detection (Initial):', {
        locale: navigator.language,
        locales: navigator.languages,
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        detected: detected.code,
        symbol: detected.symbol
      });
    }
    return detected;
  });

  // Re-detect currency after component mounts to ensure browser APIs are ready
  useEffect(() => {
    const detected = detectCurrency();
    console.log('Currency Detection (After Mount):', {
      locale: navigator.language,
      locales: navigator.languages,
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      detected: detected.code,
      symbol: detected.symbol,
      rate: detected.rate
    });
    setCurrency(detected);
  }, []);
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
            { text: `💰 Under ${formatCurrency(1000, currency)}`, value: "under-1k" },
            { text: `💰 ${formatCurrency(1000, currency)} - ${formatCurrency(3500, currency)}`, value: "1k-3.5k" },
            { text: `💰 ${formatCurrency(3500, currency)} - ${formatCurrency(10000, currency)}`, value: "3.5k-10k" },
            { text: `💰 ${formatCurrency(10000, currency)}+`, value: "10k-plus" },
            { text: "💬 Let's discuss", value: "discuss" }
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
        className="fixed bottom-6 right-6 md:right-8 z-40"
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ delay: 1, type: "spring", stiffness: 200, damping: 15 }}
      >
        <motion.div
          animate={!isOpen ? {
            scale: [1, 1.05, 1],
          } : {}}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="relative"
        >
          {!isOpen && (
            <motion.div
              className="absolute inset-0 rounded-2xl bg-emerald-400 opacity-75 blur-xl"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.5, 0.3, 0.5]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          )}
          <Button
            onClick={() => setIsOpen(!isOpen)}
            size="lg"
            className="relative h-14 w-14 rounded-2xl shadow-2xl hover:shadow-[0_20px_40px_-10px_rgba(16,185,129,0.4)] transition-all duration-300 bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-600 hover:from-emerald-600 hover:via-teal-600 hover:to-cyan-700 border-2 border-white/30 backdrop-blur-sm hover:scale-105 active:scale-95"
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
      </motion.div>

      {/* Chat Interface */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-24 right-6 md:right-8 z-50 w-[90vw] max-w-sm md:w-96 mx-4 md:mx-0 max-h-[85vh] flex flex-col"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3, type: "spring", stiffness: 300, damping: 25 }}
          >
            <Card className="shadow-2xl border-0 bg-white/98 backdrop-blur-xl overflow-hidden flex flex-col h-full">
              {/* Header */}
              <CardHeader className="pb-3 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-700 text-white relative overflow-hidden flex-shrink-0">
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJtIDQwIDAgbCAwIDQwIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMC4xIiBvcGFjaXR5PSIwLjEiLz48cGF0aCBkPSJtIDAgNDAgbCA0MCAwIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMC4xIiBvcGFjaXR5PSIwLjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>
                
                <div className="relative z-10">
                  <CardTitle className="flex items-center justify-between gap-3 text-lg font-semibold">
                    <div className="flex items-center gap-3 flex-1 min-w-0">
                      <div className="h-8 w-8 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                        <Bot className="h-5 w-5 text-white" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="text-white truncate">Project Assistant</div>
                        <div className="text-xs text-white/80 font-normal truncate">Let&apos;s discuss your project</div>
                      </div>
                    </div>
                    <div className="text-xs bg-white/20 backdrop-blur-sm px-2 sm:px-3 py-1.5 rounded-full border border-white/30 flex-shrink-0 whitespace-nowrap">
                      {stage === 'greeting' ? '👋 Welcome' : 
                       stage === 'project-type' ? '🎯 Project Type' :
                       stage === 'requirements' ? '📋 Requirements' :
                       stage === 'budget' ? '💰 Budget' :
                       stage === 'timeline' ? '📅 Timeline' :
                       stage === 'contact-info' ? '📞 Contact' :
                       '✅ Done'}
                    </div>
                  </CardTitle>
                </div>
              </CardHeader>

              {/* Messages Area */}
              <CardContent className="p-0 flex-1 flex flex-col min-h-0">
                <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4 bg-gradient-to-b from-gray-50/50 via-white to-gray-50/30 scroll-smooth chat-scroll">
                  {messages.map((message) => (
                    <motion.div
                      key={message.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className={`flex gap-2 sm:gap-3 items-start ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                    >
                      {/* Bot Avatar */}
                      {message.sender === "bot" && (
                        <div className="flex-shrink-0 mt-0.5">
                          <div className="h-8 w-8 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-lg">
                            <Bot className="h-4 w-4 text-white" />
                          </div>
                        </div>
                      )}

                      {/* Message Content */}
                      <div className={`flex flex-col max-w-[85%] sm:max-w-[80%] min-w-0 ${message.sender === "user" ? "items-end" : "items-start"}`}>
                        {/* Message Bubble */}
                        <motion.div
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.2 }}
                          className={`rounded-2xl px-4 py-3 text-sm leading-relaxed shadow-lg ${
                            message.sender === "user"
                              ? "bg-gradient-to-br from-emerald-500 to-teal-600 text-white rounded-br-md hover:shadow-xl transition-shadow duration-200"
                              : "bg-white border border-gray-200/80 text-gray-800 rounded-bl-md shadow-md hover:shadow-lg transition-shadow duration-200"
                          }`}
                        >
                          {message.text}
                        </motion.div>

                        {/* Options */}
                        {message.options && (
                          <div className="mt-3 space-y-2 w-full">
                            {message.options.map((option, index) => (
                              <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20, scale: 0.95 }}
                                animate={{ opacity: 1, x: 0, scale: 1 }}
                                transition={{ delay: index * 0.05, type: "spring", stiffness: 200 }}
                              >
                                <motion.button
                                  whileHover={{ scale: 1.02, x: 4 }}
                                  whileTap={{ scale: 0.98 }}
                                  className="w-full text-left text-xs bg-white hover:bg-gradient-to-r hover:from-emerald-50 hover:to-teal-50 border-2 border-emerald-200 hover:border-emerald-400 text-gray-700 hover:text-emerald-700 rounded-xl py-2.5 px-4 transition-all duration-200 shadow-sm hover:shadow-md font-medium"
                                  onClick={() => handleOptionClick(option)}
                                >
                                  <span className="truncate block">{option.text}</span>
                                </motion.button>
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
                        <div className="flex-shrink-0 mt-0.5">
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
                      className="flex gap-2 sm:gap-3 justify-start items-start"
                    >
                      <div className="flex-shrink-0 mt-0.5">
                        <motion.div 
                          className="h-8 w-8 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-lg"
                          animate={{ 
                            scale: [1, 1.1, 1],
                            boxShadow: [
                              "0 4px 6px -1px rgba(16, 185, 129, 0.3)",
                              "0 10px 15px -3px rgba(16, 185, 129, 0.4)",
                              "0 4px 6px -1px rgba(16, 185, 129, 0.3)"
                            ]
                          }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          <Bot className="h-4 w-4 text-white" />
                        </motion.div>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-2xl rounded-bl-md px-4 py-3 shadow-md">
                        <div className="flex gap-1.5 items-center">
                          <motion.div 
                            className="w-2 h-2 bg-emerald-500 rounded-full"
                            animate={{ y: [0, -8, 0] }}
                            transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
                          />
                          <motion.div 
                            className="w-2 h-2 bg-teal-500 rounded-full"
                            animate={{ y: [0, -8, 0] }}
                            transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                          />
                          <motion.div 
                            className="w-2 h-2 bg-cyan-500 rounded-full"
                            animate={{ y: [0, -8, 0] }}
                            transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
                          />
                        </div>
                      </div>
                    </motion.div>
                  )}
                  <div ref={messagesEndRef} />
                </div>

                {/* Input Area */}
                <div className="border-t border-gray-200/80 bg-white/95 backdrop-blur-sm px-4 py-4 flex-shrink-0">
                  {/* Filter Warning */}
                  {showFilterWarning && (
                    <motion.div
                      initial={{ opacity: 0, y: -10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.95 }}
                      className="mb-3 p-3 bg-gradient-to-r from-amber-50 to-orange-50 border-l-4 border-amber-400 rounded-lg shadow-sm"
                    >
                      <div className="flex items-center gap-2 text-amber-700 text-xs font-medium">
                        <motion.div 
                          className="w-2 h-2 bg-amber-500 rounded-full"
                          animate={{ scale: [1, 1.3, 1] }}
                          transition={{ duration: 1, repeat: Infinity }}
                        />
                        <span>Please keep our conversation professional and project-focused</span>
                      </div>
                    </motion.div>
                  )}
                  
                  <div className="flex gap-3 items-end">
                    <div className="flex-1 relative">
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
                        className={`border-2 rounded-xl bg-gray-50/80 focus:bg-white transition-all duration-200 resize-none pr-12 ${
                          warningCount >= 3 
                            ? 'border-amber-300 focus:border-amber-400 focus:ring-amber-400/30' 
                            : 'border-gray-300 focus:border-emerald-500 focus:ring-emerald-500/30'
                        }`}
                        disabled={isLoading}
                        maxLength={500}
                      />
                      {inputValue.length > 0 && (
                        <div className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-400">
                          {inputValue.length}/500
                        </div>
                      )}
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleSendMessage(inputValue)}
                      disabled={!inputValue.trim() || isLoading}
                      className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white rounded-xl px-4 py-2.5 shadow-lg hover:shadow-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center min-w-[44px] min-h-[44px]"
                    >
                      <Send className="h-4 w-4" />
                    </motion.button>
                  </div>
                  
                  {/* Helper Text */}
                  {warningCount >= 2 && (
                    <motion.div 
                      className="text-xs text-amber-600 font-medium mt-2 text-center"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      Please keep messages professional • Business inquiries only
                    </motion.div>
                  )}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
