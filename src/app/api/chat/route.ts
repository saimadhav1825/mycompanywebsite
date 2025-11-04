import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Chat, { IMessage, IClientInfo, IProjectDetails } from '@/models/Chat';
import nodemailer from 'nodemailer';

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
  clientInfo: {
    name?: string;
    email?: string;
    phone?: string;
    company?: string;
  };
  projectDetails: {
    type?: string;
    budget?: string;
    timeline?: string;
    description?: string;
    requirements?: string;
  };
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

export async function POST(request: NextRequest) {
  try {
    // Try to connect to database, but continue if it fails
    try {
      await connectDB();
    } catch (dbError) {
      console.warn('Database connection failed. Chat will work without persistence.');
      return NextResponse.json({ 
        success: true, 
        message: 'Chat working without persistence' 
      });
    }
    
    const { sessionId, message, clientInfo, projectDetails, stage } = await request.json();

    if (!sessionId) {
      return NextResponse.json({ error: 'Session ID is required' }, { status: 400 });
    }

    // Find or create chat session
    let chat = await Chat.findOne({ sessionId });
    
    if (!chat) {
      chat = new Chat({
        sessionId,
        messages: [],
        clientInfo: {},
        projectDetails: {},
        stage: 'greeting'
      });
    }

    // Add new message if provided
    if (message) {
      chat.messages.push({
        id: Date.now().toString(),
        text: message.text,
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
        await sendEmailNotification(chat);
        chat.emailSent = true;
        chat.status = 'completed';
      }
    }

    await chat.save();

    return NextResponse.json({ 
      success: true, 
      chat: {
        sessionId: chat.sessionId,
        stage: chat.stage,
        status: chat.status
      }
    });

  } catch (error) {
    console.error('Error handling chat request:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    // Try to connect to database, but continue if it fails
    try {
      await connectDB();
    } catch (dbError) {
      console.warn('Database connection failed. Chat data not available.');
      return NextResponse.json({ 
        error: 'Chat data not available - database connection failed' 
      }, { status: 503 });
    }
    
    const { searchParams } = new URL(request.url);
    const sessionId = searchParams.get('sessionId');

    if (!sessionId) {
      return NextResponse.json({ error: 'Session ID is required' }, { status: 400 });
    }

    const chat = await Chat.findOne({ sessionId });
    
    if (!chat) {
      return NextResponse.json({ error: 'Chat session not found' }, { status: 404 });
    }

    return NextResponse.json({ chat });

  } catch (error) {
    console.error('Error fetching chat:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
