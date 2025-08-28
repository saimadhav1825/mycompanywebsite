# Company Landing Page Website

A modern, responsive company landing page built with Next.js 15, TypeScript, TailwindCSS, and shadcn/ui components. Features a custom chatbot, contact form with email integration, and smooth animations.

## ✨ Features

- **Modern Tech Stack**: Next.js 15 (App Router) + TypeScript + TailwindCSS
- **UI Components**: shadcn/ui components for consistent design
- **Responsive Design**: Mobile-first approach with tablet and desktop optimization
- **Smooth Animations**: Framer Motion for engaging user interactions
- **Custom Chatbot**: Intelligent chat widget with predefined responses
- **Contact Form**: React Hook Form + Zod validation with email integration
- **SEO Optimized**: Meta tags, Open Graph, Twitter cards, and JSON-LD
- **Performance**: Optimized images, lazy loading, and Lighthouse score ≥90

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd company-landing
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Edit `.env.local` with your configuration:
   ```env
   # Email Configuration (Resend - recommended)
   RESEND_API_KEY=your_resend_api_key
   CONTACT_TO_EMAIL=you@example.com
   CONTACT_FROM_EMAIL="Your Company <noreply@yourdomain.com>"
   
   # Alternative: SMTP Configuration
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_SECURE=false
   SMTP_USER=your_email@gmail.com
   SMTP_PASS=your_app_password
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── (sections)/        # Dynamic section routes
│   ├── api/               # API routes
│   │   └── contact/       # Contact form endpoint
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout with SEO
│   └── page.tsx           # Homepage
├── components/             # React components
│   ├── ui/                # shadcn/ui components
│   ├── Navbar.tsx         # Navigation with scrollspy
│   ├── Hero.tsx           # Hero section
│   ├── Sections.tsx       # About, Services, Projects, Process
│   ├── ContactForm.tsx    # Contact form component
│   ├── ContactSection.tsx # Contact section
│   ├── Footer.tsx         # Footer component
│   └── Chatbot.tsx        # Custom chat widget
└── lib/                   # Utilities and config
    ├── siteConfig.ts      # Site configuration
    └── email.ts           # Email utilities
```

## 🎨 Customization

### Company Information
Edit `src/lib/siteConfig.ts` to update:
- Company name and tagline
- Contact information
- Social media links
- Services offered

### Styling
- **Colors**: Modify CSS variables in `src/app/globals.css`
- **Components**: Customize shadcn/ui components in `src/components/ui/`
- **Layout**: Adjust spacing and grid in component files

### Chatbot Responses
Update bot responses in `src/components/Chatbot.tsx`:
```typescript
const BOT_RESPONSES = {
  greeting: "Your custom greeting message",
  services: "Your services description",
  // ... add more responses
};
```

## 📧 Email Configuration

### Option 1: Resend (Recommended)
1. Sign up at [resend.com](https://resend.com)
2. Get your API key
3. Add to `.env.local`:
   ```env
   RESEND_API_KEY=re_123...
   CONTACT_TO_EMAIL=you@example.com
   ```

### Option 2: SMTP
1. Configure your SMTP settings
2. Add to `.env.local`:
   ```env
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=your_email@gmail.com
   SMTP_PASS=your_app_password
   ```

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Deploy!

### Other Platforms
- **Netlify**: Build command: `npm run build`, publish: `out/`
- **AWS Amplify**: Build command: `npm run build`
- **Docker**: Use the provided Dockerfile

## 🧪 Testing

```bash
# Run tests
npm test

# Run linting
npm run lint

# Check types
npm run type-check

# Build for production
npm run build
```

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px  
- **Desktop**: > 1024px
- **Widescreen**: > 1280px

## 🎯 Performance

- **Lighthouse Score**: ≥90
- **Core Web Vitals**: Optimized
- **Image Optimization**: Next.js Image component
- **Bundle Analysis**: Built-in Next.js analyzer

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

- **Issues**: Create a GitHub issue
- **Documentation**: Check the code comments
- **Community**: Join our Discord/community

---

Built with ❤️ using Next.js, TypeScript, and TailwindCSS
