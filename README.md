# ChatGPT Replica - Next.js + Mistral AI

A modern, fully-featured ChatGPT replica built with Next.js 13, TypeScript, Tailwind CSS, and Mistral AI. This application demonstrates modern web development best practices with a clean, accessible interface and real-time streaming responses.

## 🚀 Features

- **Real-time streaming chat** with Mistral AI API
- **Persistent chat history** during session
- **Modern ChatGPT-style interface** with message bubbles
- **Dark theme** with professional design
- **Responsive design** that works on all devices
- **Smooth animations** powered by Framer Motion
- **Accessible UI** with ARIA labels and semantic HTML
- **TypeScript** for type safety
- **Clean, modular architecture** with separation of concerns
- **Error handling** with user-friendly messages
- **Auto-scroll** to latest messages


- **Framework**: Next.js (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + shadcn/ui
- **Animations**: Framer Motion
- **AI API**: Mistral AI
- **Icons**: Lucide React


- **Dark Theme**: Professional color scheme with gray and blue tones
- **Message Bubbles**: Distinct styling for user (blue, right-aligned) and assistant (gray, left-aligned)
- **Smooth Animations**: Fade-in effects for new messages using Framer Motion
- **Responsive Layout**: Mobile-first design that adapts to all screen sizes
- **Accessibility**: Proper ARIA labels, semantic HTML, and keyboard navigation

## 🔒 Security Features

- **Environment Variables**: API key stored securely in `.env.local`
- **Server-side API Calls**: Mistral API key never exposed to client
- **Error Handling**: Graceful error handling with user-friendly messages
- **Input Validation**: Proper validation and sanitization

### Adding Features

The modular architecture makes it easy to add new features:

1. **Image Generation**: Add an image generation API route and integrate with the chat
2. **Message Export**: Add functionality to export chat history
3. **Themes**: Extend the design system with multiple themes
4. **User Accounts**: Integrate with authentication providers