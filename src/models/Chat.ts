import mongoose, { Schema, Document } from 'mongoose';

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
  type?: 'website' | 'mobile-app' | 'backend' | 'ui-ux' | 'other';
  budget?: 'under-5k' | '5k-15k' | '15k-50k' | '50k-plus' | 'discuss';
  timeline?: string;
  requirements?: string;
  features?: string[];
}

export interface IChat extends Document {
  sessionId: string;
  messages: IMessage[];
  clientInfo: IClientInfo;
  projectDetails: IProjectDetails;
  status: 'active' | 'completed' | 'abandoned';
  stage: 'greeting' | 'project-type' | 'requirements' | 'budget' | 'timeline' | 'contact-info' | 'completed';
  createdAt: Date;
  updatedAt: Date;
  emailSent: boolean;
}

const MessageSchema = new Schema({
  id: { type: String, required: true },
  text: { type: String, required: true },
  sender: { type: String, enum: ['user', 'bot'], required: true },
  timestamp: { type: Date, default: Date.now }
});

const ClientInfoSchema = new Schema({
  name: { type: String },
  email: { type: String },
  phone: { type: String },
  company: { type: String }
});

const ProjectDetailsSchema = new Schema({
  type: { 
    type: String, 
    enum: ['website', 'mobile-app', 'backend', 'ui-ux', 'other'] 
  },
  budget: { 
    type: String, 
    enum: ['under-5k', '5k-15k', '15k-50k', '50k-plus', 'discuss'] 
  },
  timeline: { type: String },
  requirements: { type: String },
  features: [{ type: String }]
});

const ChatSchema = new Schema<IChat>({
  sessionId: { type: String, required: true, unique: true },
  messages: [MessageSchema],
  clientInfo: { type: ClientInfoSchema, default: {} },
  projectDetails: { type: ProjectDetailsSchema, default: {} },
  status: { 
    type: String, 
    enum: ['active', 'completed', 'abandoned'], 
    default: 'active' 
  },
  stage: { 
    type: String, 
    enum: ['greeting', 'project-type', 'requirements', 'budget', 'timeline', 'contact-info', 'completed'], 
    default: 'greeting' 
  },
  emailSent: { type: Boolean, default: false }
}, {
  timestamps: true
});

export default mongoose.models.Chat || mongoose.model<IChat>('Chat', ChatSchema);
