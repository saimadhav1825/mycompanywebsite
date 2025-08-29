# 🧪 Chatbot Content Filtering Test Guide

## 🎯 How to Test the Enhanced Chatbot

### **Prerequisites:**
1. Start the development server: `npm run dev`
2. Open the website in your browser: `http://localhost:3000`
3. Click the chatbot icon in the bottom-right corner
4. Open browser DevTools (F12) to see console logs

---

## 📋 Test Categories

### **1. 🚫 Inappropriate Content Tests**

#### **Test Case 1.1: Profanity & Offensive Language**
```
Send these messages one by one:
- "This is stupid"
- "You're an idiot"
- "I hate this"

Expected Response:
- "I'm here to help with business inquiries and project discussions. Please keep our conversation professional and focused on how we can assist with your development needs."
- Warning counter increments
- Yellow warning banner appears
```

#### **Test Case 1.2: Spam/Scam Content**
```
Send these messages:
- "Free money making opportunity!"
- "Bitcoin investment guaranteed returns"
- "Click here to win lottery"
- "Make money from home now"

Expected Response:
- "I'm here to help with business inquiries and project discussions..."
- Content is filtered before reaching normal flow
```

#### **Test Case 1.3: Threatening Language**
```
Send these messages:
- "I will kill this project"
- "Death to bugs"
- "Violence against code"

Expected Response:
- "I'm here to help with business inquiries and project discussions..."
- Warning counter increases
```

---

### **2. 🤖 Spam Pattern Tests**

#### **Test Case 2.1: Repeated Characters**
```
Send these messages:
- "aaaaaaaaaaa"
- "!!!!!!!!!"
- "1111111111"
- "hellooooooooo"

Expected Response:
- "I want to make sure I understand your needs correctly. Could you please rephrase your question about your project requirements?"
```

#### **Test Case 2.2: ALL CAPS Messages**
```
Send these messages:
- "HELLO THERE!!!"
- "I WANT A WEBSITE NOW!!!"
- "THIS IS URGENT!!!"

Expected Response:
- "I notice you're sending messages very quickly. Please take a moment to describe your project requirements, and I'll be happy to help."
```

#### **Test Case 2.3: Repeated Phrases**
```
Send these messages:
- "hello hello hello hello"
- "website website website"
- "help me help me help me"

Expected Response:
- Spam detection triggers
- "I notice you're sending messages very quickly..."
```

---

### **3. ⚡ Rate Limiting Tests**

#### **Test Case 3.1: Message Flooding**
```
Send 5+ messages rapidly (within 10 seconds):
1. "Hi"
2. "Hello"
3. "Are you there?"
4. "I need help"
5. "Please respond"

Expected Response:
- First few messages process normally
- Rate limit kicks in after 3 messages in 10 seconds
- "I notice you're sending messages very quickly. Please take a moment to describe your project requirements, and I'll be happy to help."
```

#### **Test Case 3.2: Per-Minute Limit**
```
Send 12+ messages within 1 minute:
- Keep sending legitimate messages rapidly

Expected Response:
- After 10 messages per minute, rate limiting activates
- Spam response appears
```

---

### **4. 🔤 Nonsense/Gibberish Tests**

#### **Test Case 4.1: Just Vowels/Consonants**
```
Send these messages:
- "aeiou"
- "bcdfg"
- "iiiioooo"

Expected Response:
- "I want to make sure I understand your needs correctly. Could you please rephrase your question about your project requirements?"
```

#### **Test Case 4.2: Special Characters Only**
```
Send these messages:
- "!@#$%^&*()"
- "123456789"
- "<<<>>>"

Expected Response:
- Gibberish detection triggers
- Professional redirect response
```

#### **Test Case 4.3: Very Short Nonsense**
```
Send these messages:
- "a"
- "."
- "  " (just spaces)

Expected Response:
- "Please let me know how I can help you with your project. What type of development service are you interested in?"
```

---

### **5. 📈 Progressive Warning Tests**

#### **Test Case 5.1: Warning Escalation**
```
Send inappropriate messages in sequence:
1. First inappropriate message
2. Second inappropriate message  
3. Third inappropriate message

Expected Behavior:
- Message 1: Warning counter = 1, normal warning
- Message 2: Warning counter = 2, helper text changes to warning
- Message 3: Warning counter = 3, stricter moderation mode activates
- Input field background becomes amber
- Placeholder text changes to "Please focus on your project requirements..."
```

#### **Test Case 5.2: Stricter Moderation Mode**
```
After 3+ warnings, send normal messages:
- "I need a website"
- "Tell me about your services"

Expected Response:
- "I'm designed to assist with business inquiries. Let's focus on discussing your project needs - what type of development service can I help you with?"
- Even normal messages get moderated response
```

---

### **6. ✅ Legitimate Message Tests**

#### **Test Case 6.1: Normal Business Inquiries**
```
Send these legitimate messages:
- "I need a website for my business"
- "What are your mobile app development services?"
- "Can you help with backend APIs?"

Expected Response:
- Normal chatbot flow continues
- No filtering applied
- Conversation progresses through stages
```

#### **Test Case 6.2: Mixed Content**
```
Send a mix of legitimate and filtered content:
1. "I need a website" (legitimate)
2. "This is stupid" (inappropriate)
3. "What's your pricing?" (legitimate)

Expected Response:
- Message 1: Normal flow
- Message 2: Filtered response + warning
- Message 3: Normal flow (if warning count < 3)
```

---

## 🔧 Visual Indicators to Check

### **1. Warning Banner**
- ✅ Appears when inappropriate content is detected
- ✅ Shows amber background with warning text
- ✅ Slides in smoothly with animation
- ✅ Disappears after 3 seconds

### **2. Input Field Changes**
- ✅ Normal: Gray background
- ✅ After warnings: Amber background
- ✅ Placeholder text changes based on warning level

### **3. Helper Text Updates**
- ✅ Normal: "Powered by AI • Your data is secure"
- ✅ After 2+ warnings: "Please keep messages professional • Business inquiries only"

### **4. Message Counter**
- ✅ Open browser DevTools and check console
- ✅ Warning count should increment with inappropriate messages
- ✅ Rate limiting should log timestamps

---

## 🧪 Advanced Testing Scenarios

### **Test Case A1: Edge Cases**
```
Send these edge cases:
- Empty message (just spaces)
- Very long message (500+ characters)
- Unicode characters: "🤖💻🚀"
- Mixed languages: "Hello привет"

Expected Behavior:
- Empty messages: "Please let me know how I can help..."
- Long messages: Truncated to 500 characters
- Unicode: Should process normally
- Mixed languages: Should process normally
```

### **Test Case A2: Bypass Attempts**
```
Try to bypass filters:
- "st up id" (split inappropriate words)
- "sp4m" (numbers replacing letters)
- "SPAM" vs "spam" (case sensitivity)

Expected Behavior:
- Some advanced bypasses might work (filters aren't perfect)
- Basic obfuscation should still trigger patterns
```

### **Test Case A3: Session Reset**
```
Test session behavior:
1. Trigger 3+ warnings
2. Close chatbot
3. Reopen chatbot
4. Send inappropriate message

Expected Behavior:
- Warning count should reset (session-based)
- Fresh start with clean slate
```

---

## 📊 Expected Results Summary

| Test Type | Input Example | Expected Response Type | Visual Changes |
|-----------|---------------|----------------------|----------------|
| Inappropriate | "This is stupid" | Professional redirect | Warning banner |
| Spam Pattern | "aaaaaaaa" | Gibberish response | None |
| Rate Limit | 5 rapid messages | Rate limit warning | None |
| ALL CAPS | "HELLO!!!" | Spam response | None |
| Legitimate | "I need a website" | Normal flow | None |
| Progressive | 3+ violations | Stricter moderation | Amber input field |

---

## 🐛 Debugging Tips

### **Console Logs to Check:**
```javascript
// Check these in browser DevTools:
console.log('Warning count:', warningCount);
console.log('Message filtered:', filteredResponse);
console.log('Rate limit check:', messageTracker);
```

### **Common Issues:**
1. **Filters not working**: Check console for JavaScript errors
2. **Rate limiting not triggering**: Clear browser cache and try again
3. **Visual warnings not showing**: Check CSS animations are enabled
4. **Messages still going through**: Verify filter patterns are correctly implemented

---

## 🎯 Quick Test Checklist

- [ ] Test inappropriate content filtering
- [ ] Test spam pattern detection  
- [ ] Test rate limiting (rapid messages)
- [ ] Test gibberish detection
- [ ] Test progressive warning system
- [ ] Test visual indicators (warning banner, input styling)
- [ ] Test legitimate message flow
- [ ] Test edge cases and empty messages
- [ ] Test session reset behavior
- [ ] Test mobile responsiveness of warnings

---

## 🚀 Pro Testing Tips

1. **Use multiple browser tabs** to simulate different users
2. **Test on mobile devices** to ensure responsive behavior
3. **Clear browser storage** between test sessions
4. **Check network tab** to see API calls being made
5. **Test with actual inappropriate content** (carefully) to verify real-world scenarios

The chatbot should handle all these scenarios professionally while maintaining a helpful, business-focused conversation flow! 🎉
