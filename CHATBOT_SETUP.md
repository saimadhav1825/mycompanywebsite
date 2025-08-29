# 🤖 Enhanced Chatbot Setup Guide

## Overview
Your website now includes an advanced chatbot that collects project inquiries from potential clients. The chatbot guides users through a structured conversation flow to gather all necessary project information and automatically sends email notifications to your team.

## ✨ Features Implemented

### 🔹 Core Functionality
- **Floating Chat Widget**: Bottom-right corner with smooth animations
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- **Structured Conversation Flow**: Guides users through project requirements
- **Data Collection**: Automatically saves all chat data to MongoDB
- **Email Notifications**: Sends formatted emails to admin with project details

### 🔹 Chat Flow
1. **Welcome & Project Type Selection**
   - Website Development
   - Mobile App
   - Backend/API
   - UI/UX Design
   - Other (custom)

2. **Requirements Gathering**
   - Specific project type details
   - Feature requirements
   - Custom specifications

3. **Budget Discussion**
   - Under $5,000
   - $5,000 - $15,000
   - $15,000 - $50,000
   - $50,000+
   - Let's discuss

4. **Timeline Planning**
   - ASAP (Rush job)
   - Within 1 month
   - 2-3 months
   - Flexible timeline

5. **Contact Information**
   - Name, email, phone collection
   - Automatic parsing of contact details

## 🛠️ Setup Instructions

### 1. Environment Variables
Create a `.env.local` file in your project root:

```env
# MongoDB Connection
MONGODB_URI=mongodb://localhost:27017/company-landing
# OR for MongoDB Atlas:
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/company-landing

# Email Configuration (for chat notifications)
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
ADMIN_EMAIL=admin@yourcompany.com
```

### 2. MongoDB Setup

#### Option A: Local MongoDB
```bash
# Install MongoDB locally
brew install mongodb/brew/mongodb-community

# Start MongoDB
brew services start mongodb/brew/mongodb-community
```

#### Option B: MongoDB Atlas (Recommended)
1. Go to [MongoDB Atlas](https://www.mongodb.com/atlas)
2. Create a free cluster
3. Get your connection string
4. Replace `MONGODB_URI` in your `.env.local`

### 3. Gmail App Password Setup
1. Enable 2-Factor Authentication on your Gmail account
2. Go to Google Account Settings → Security → App Passwords
3. Generate an app password for "Mail"
4. Use this password in `EMAIL_PASS` (not your regular Gmail password)

### 4. Test the Setup
```bash
# Start the development server
npm run dev

# Visit http://localhost:3000
# Click the chatbot icon in the bottom-right corner
# Complete a test conversation
```

## 📊 Database Schema

The chatbot stores data in the following structure:

```typescript
{
  sessionId: string,           // Unique session identifier
  messages: [                  // Complete chat transcript
    {
      id: string,
      text: string,
      sender: 'user' | 'bot',
      timestamp: Date
    }
  ],
  clientInfo: {               // Client contact information
    name?: string,
    email?: string,
    phone?: string,
    company?: string
  },
  projectDetails: {           // Project specifications
    type?: 'website' | 'mobile-app' | 'backend' | 'ui-ux' | 'other',
    budget?: 'under-5k' | '5k-15k' | '15k-50k' | '50k-plus' | 'discuss',
    timeline?: string,
    requirements?: string,
    features?: string[]
  },
  stage: string,              // Current conversation stage
  status: 'active' | 'completed' | 'abandoned',
  emailSent: boolean,         // Whether notification was sent
  createdAt: Date,
  updatedAt: Date
}
```

## 📧 Email Notifications

When a conversation is completed, the system automatically sends a formatted email to your admin address containing:

- **Client Information**: Name, email, phone, company
- **Project Details**: Type, budget, timeline, requirements
- **Complete Chat Transcript**: Full conversation history
- **Session Information**: Unique ID and timestamp

## 🔧 API Endpoints

### POST `/api/chat`
Store chat messages and update conversation state.

**Request Body:**
```json
{
  "sessionId": "string",
  "message": {
    "text": "string",
    "sender": "user" | "bot"
  },
  "clientInfo": { /* client details */ },
  "projectDetails": { /* project specs */ },
  "stage": "string"
}
```

### GET `/api/chat?sessionId=xxx`
Retrieve chat session data.

## 🎨 Customization

### Styling
The chatbot uses Tailwind CSS with a gradient theme. Modify colors in:
- `/src/components/EnhancedChatbot.tsx`
- Update gradient classes: `from-blue-600 to-purple-600`

### Conversation Flow
Customize the chat flow by editing:
- Message templates in `EnhancedChatbot.tsx`
- Project types and budget ranges
- Question sequences and options

### Email Template
Modify the email format in:
- `/src/app/api/chat/route.ts`
- Update the `sendEmailNotification` function

## 🚀 Future Enhancements

### Optional AI Integration
Add OpenAI integration for smarter responses:

```bash
npm install openai
```

Add to `.env.local`:
```env
OPENAI_API_KEY=your-openai-api-key
```

### Advanced Features
- File upload capability
- Voice message support
- Multi-language support
- Analytics dashboard
- Lead scoring system

## 🐛 Troubleshooting

### Common Issues

1. **Database Connection Failed**
   - Check MongoDB is running
   - Verify MONGODB_URI format
   - Ensure network access for MongoDB Atlas

2. **Email Not Sending**
   - Verify Gmail app password (not regular password)
   - Check EMAIL_USER and EMAIL_PASS
   - Ensure 2FA is enabled on Gmail

3. **Chat Data Not Saving**
   - Check browser console for API errors
   - Verify API route is accessible
   - Check MongoDB connection

### Debug Mode
Add console logging to track issues:
```javascript
// In EnhancedChatbot.tsx
console.log('Saving chat data:', { sessionId, stage, clientInfo });
```

## 📞 Support

The enhanced chatbot is now fully integrated into your website. It will help you:
- Capture qualified leads automatically
- Understand client requirements before first contact
- Reduce initial consultation time
- Improve conversion rates

For any issues or customizations, refer to the code comments or modify the components as needed.

## 📝 Next Steps

1. Set up your environment variables
2. Configure MongoDB and Gmail
3. Test the complete flow
4. Customize styling and messages to match your brand
5. Monitor incoming project inquiries!

The chatbot is designed to be production-ready and will significantly improve your lead generation process. 🚀
