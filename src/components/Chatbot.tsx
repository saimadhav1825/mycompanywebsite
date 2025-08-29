"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import React from "react";

type Message = {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
};

const BOT_RESPONSES = {
  greeting: "Hello! I'm here to help you learn more about our services. How can I assist you today?",
  services: "We offer website development, mobile app development, backend & APIs, and UI/UX design. Which service interests you?",
  pricing: "Our pricing varies based on project scope and requirements. Would you like to schedule a free consultation?",
  contact: "You can reach us at hello@acmedevstudio.com or fill out our contact form. I can also help you get started right here!",
  default: "That's a great question! Let me connect you with our team. Would you like to schedule a call or send us a message?",
};

export function Chatbot(): React.JSX.Element {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: BOT_RESPONSES.greeting,
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");

  const handleSendMessage = async (text: string) => {
    if (!text.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: text.trim(),
      sender: "user",
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue("");

    // Simulate bot response
    setTimeout(() => {
      const botResponse = getBotResponse(text.toLowerCase());
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: botResponse,
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, botMessage]);
    }, 1000);
  };

  const getBotResponse = (text: string): string => {
    if (text.includes("hello") || text.includes("hi")) return BOT_RESPONSES.greeting;
    if (text.includes("service") || text.includes("what do you do")) return BOT_RESPONSES.services;
    if (text.includes("price") || text.includes("cost") || text.includes("how much")) return BOT_RESPONSES.pricing;
    if (text.includes("contact") || text.includes("email") || text.includes("phone")) return BOT_RESPONSES.contact;
    return BOT_RESPONSES.default;
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
        className="fixed bottom-6 right-24 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: "spring" }}
      >
        <Button
          onClick={() => setIsOpen(!isOpen)}
          size="lg"
          className="h-14 w-14 rounded-full shadow-lg hover:shadow-xl transition-shadow"
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
            className="fixed bottom-24 right-24 z-50 w-80 max-h-96"
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.3, type: "spring" }}
          >
            <Card className="shadow-2xl">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Bot className="h-5 w-5 text-primary" />
                  Chat with us
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Messages */}
                <div className="max-h-64 overflow-y-auto space-y-3">
                  {messages.map((message) => (
                    <motion.div
                      key={message.id}
                      initial={{ opacity: 0, x: message.sender === "user" ? 20 : -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3 }}
                      className={`flex items-start gap-2 ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                    >
                      {message.sender === "bot" && (
                        <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Bot className="h-3 w-3 text-primary" />
                        </div>
                      )}
                      <div
                        className={`max-w-[80%] rounded-lg px-3 py-2 text-sm ${
                          message.sender === "user"
                            ? "bg-primary text-primary-foreground"
                            : "bg-muted"
                        }`}
                      >
                        {message.text}
                      </div>
                      {message.sender === "user" && (
                        <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <User className="h-3 w-3 text-primary" />
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>

                {/* Input */}
                <div className="flex gap-2">
                  <Input
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Type your message..."
                    className="flex-1"
                  />
                  <Button
                    onClick={() => handleSendMessage(inputValue)}
                    size="sm"
                    disabled={!inputValue.trim()}
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
