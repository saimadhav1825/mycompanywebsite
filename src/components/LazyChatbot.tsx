"use client";

import dynamic from "next/dynamic";

// Lazy load chatbot to reduce initial bundle size
const EnhancedChatbot = dynamic(() => import("@/components/EnhancedChatbot").then(mod => ({ default: mod.EnhancedChatbot })), {
  ssr: false,
  loading: () => null,
});

export function LazyChatbot() {
  return <EnhancedChatbot />;
}

