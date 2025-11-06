import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { withSecurity, sanitizeObject, handleCORS, corsHeaders } from '@/lib/security';

// Types for chat data
export interface IMessage {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

export interface IClientInfo {
  name?: string;
  email?: string;
  phone?: string;
  company?: string;
}

export interface IProjectDetails {
  type?: string;
  budget?: string;
  timeline?: string;
  description?: string;
  requirements?: string;
  features?: string[];
}

// Create nodemailer transporter
const createTransporter = () => {
  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });
};

interface ChatDataEmail {
  clientInfo: IClientInfo;
  projectDetails: IProjectDetails;
  messages: IMessage[];
  sessionId?: string;
}

// Send email notification to admin
const sendEmailNotification = async (chatData: ChatDataEmail) => {
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS || !process.env.ADMIN_EMAIL) {
    console.log('Email configuration missing, skipping email notification');
    return;
  }

  const transporter = createTransporter();
  
  const emailHtml = `
    <h2>🎯 New Project Inquiry from Chatbot</h2>
    
    <h3>📋 Client Information:</h3>
    <ul>
      <li><strong>Name:</strong> ${chatData.clientInfo.name || 'Not provided'}</li>
      <li><strong>Email:</strong> ${chatData.clientInfo.email || 'Not provided'}</li>
      <li><strong>Phone:</strong> ${chatData.clientInfo.phone || 'Not provided'}</li>
      <li><strong>Company:</strong> ${chatData.clientInfo.company || 'Not provided'}</li>
    </ul>
    
    <h3>💼 Project Details:</h3>
    <ul>
      <li><strong>Type:</strong> ${chatData.projectDetails.type || 'Not specified'}</li>
      <li><strong>Budget:</strong> ${chatData.projectDetails.budget || 'Not specified'}</li>
      <li><strong>Timeline:</strong> ${chatData.projectDetails.timeline || 'Not specified'}</li>
      <li><strong>Requirements:</strong> ${chatData.projectDetails.requirements || 'Not specified'}</li>
    </ul>
    
    <h3>💬 Chat Transcript:</h3>
    <div style="background: #f5f5f5; padding: 15px; border-radius: 8px;">
      ${chatData.messages.map((msg: IMessage) => `
        <div style="margin-bottom: 10px;">
          <strong>${msg.sender === 'user' ? '👤 Client' : '🤖 Bot'}:</strong> 
          <span>${msg.text}</span>
          <small style="color: #666;">(${new Date(msg.timestamp).toLocaleString()})</small>
        </div>
      `).join('')}
    </div>
    
    <p style="margin-top: 20px; color: #666;">
      <em>Session ID: ${chatData.sessionId}</em><br>
      <em>Received: ${new Date().toLocaleString()}</em>
    </p>
  `;

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.ADMIN_EMAIL,
    subject: `🚀 New Project Inquiry: ${chatData.projectDetails.type || 'General'} Project`,
    html: emailHtml,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Email notification sent successfully');
  } catch (error) {
    console.error('Error sending email notification:', error);
  }
};

// In-memory storage for chat sessions (only during active sessions)
const chatSessions = new Map<string, {
  sessionId: string;
  messages: IMessage[];
  clientInfo: IClientInfo;
  projectDetails: IProjectDetails;
  stage: string;
  emailSent: boolean;
}>();

async function handlePOST(request: NextRequest) {
  try {
    // Handle CORS preflight
    const corsResponse = handleCORS(request);
    if (corsResponse) return corsResponse;

    const body = await request.json();
    
    // Sanitize all inputs
    const sanitizedBody = sanitizeObject(body);
    const { sessionId, message, clientInfo, projectDetails, stage } = sanitizedBody;

    // Validate sessionId
    if (!sessionId || typeof sessionId !== 'string' || sessionId.length > 100) {
      return NextResponse.json(
        { error: 'Valid session ID is required' },
        { status: 400, headers: corsHeaders }
      );
    }

    // Get or create chat session in memory
    let chat = chatSessions.get(sessionId);
    
    if (!chat) {
      chat = {
        sessionId,
        messages: [],
        clientInfo: {},
        projectDetails: {},
        stage: 'greeting',
        emailSent: false
      };
      chatSessions.set(sessionId, chat);
    }

    // Add new message if provided
    if (message) {
      // Validate message structure
      if (typeof message.text !== 'string' || message.text.length > 5000) {
        return NextResponse.json(
          { error: 'Invalid message. Text must be a string with max 5000 characters.' },
          { status: 400, headers: corsHeaders }
        );
      }
      
      if (message.sender !== 'user' && message.sender !== 'bot') {
        return NextResponse.json(
          { error: 'Invalid message sender' },
          { status: 400, headers: corsHeaders }
        );
      }

      chat.messages.push({
        id: Date.now().toString(),
        text: sanitizeObject({ text: message.text }).text,
        sender: message.sender,
        timestamp: new Date()
      });
    }

    // Update client info and project details if provided
    if (clientInfo) {
      chat.clientInfo = { ...chat.clientInfo, ...clientInfo };
    }

    if (projectDetails) {
      chat.projectDetails = { ...chat.projectDetails, ...projectDetails };
    }

    // Update stage if provided
    if (stage) {
      chat.stage = stage;
      
      // If completed, send email notification
      if (stage === 'completed' && !chat.emailSent) {
        await sendEmailNotification({
          clientInfo: chat.clientInfo,
          projectDetails: chat.projectDetails,
          messages: chat.messages,
          sessionId: chat.sessionId
        });
        chat.emailSent = true;
      }
    }

    // Update the session in memory
    chatSessions.set(sessionId, chat);

    return NextResponse.json({ 
      success: true, 
      chat: {
        sessionId: chat.sessionId,
        stage: chat.stage,
        status: chat.stage === 'completed' ? 'completed' : 'active'
      }
    }, { headers: corsHeaders });

  } catch (error) {
    console.error('Error handling chat request:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500, headers: corsHeaders }
    );
  }
}

// Export with security middleware
export const POST = withSecurity(handlePOST);

export async function GET(request: NextRequest) {
  try {
    // Handle CORS preflight
    const corsResponse = handleCORS(request);
    if (corsResponse) return corsResponse;

    const { searchParams } = new URL(request.url);
    const sessionId = searchParams.get('sessionId');

    if (!sessionId || sessionId.length > 100) {
      return NextResponse.json(
        { error: 'Valid session ID is required' },
        { status: 400, headers: corsHeaders }
      );
    }

    const chat = chatSessions.get(sessionId);
    
    if (!chat) {
      return NextResponse.json(
        { error: 'Chat session not found' },
        { status: 404, headers: corsHeaders }
      );
    }

    return NextResponse.json({ chat }, { headers: corsHeaders });

  } catch (error) {
    console.error('Error fetching chat:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500, headers: corsHeaders }
    );
  }
}

// Handle OPTIONS for CORS
export async function OPTIONS(request: NextRequest) {
  return handleCORS(request) || new NextResponse(null, { status: 204, headers: corsHeaders });
}
