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

## 📁 Project Structure

```
├── app/
│   ├── api/
│   │   └── chat/
│   │       └── route.ts          # Mistral API integration with streaming
│   ├── layout.tsx                # Root layout with metadata
│   └── page.tsx                  # Main chat page
├── components/
│   ├── ChatWindow.tsx            # Main chat interface
│   ├── MessageBubble.tsx         # Individual message component
│   ├── InputBar.tsx              # Message input with send button
│   └── Navbar.tsx                # Navigation header
├── hooks/
│   └── useChat.ts                # Custom hook for chat logic
├── lib/
│   └── types.ts                  # TypeScript type definitions
├── .env.local                    # Environment variables (API key)
└── README.md
```

## 🛠️ Tech Stack

- **Framework**: Next.js 13 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + shadcn/ui
- **Animations**: Framer Motion
- **AI API**: Mistral AI
- **Icons**: Lucide React

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd chatgpt-replica
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   The `.env.local` file is already configured with the Mistral API key:
   ```
   MISTRAL_API_KEY=CD13RjBBZgGMmHssZrZD4dyxdI20Rult
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🔧 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `MISTRAL_API_KEY` | Your Mistral AI API key | Yes |

## 🏗️ Architecture

### Components

- **`ChatWindow`**: Main chat interface that displays messages and handles scrolling
- **`MessageBubble`**: Renders individual messages with user/assistant styling
- **`InputBar`**: Fixed input field with send functionality
- **`Navbar`**: Header with branding and clear chat option

### Hooks

- **`useChat`**: Custom hook managing chat state, message sending, and streaming responses

### API Routes

- **`/api/chat`**: Handles communication with Mistral AI API with streaming support

## 🎨 Design Features

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

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add `MISTRAL_API_KEY` to environment variables in Vercel dashboard
4. Deploy automatically

### Netlify

1. Build the project: `npm run build`
2. Deploy the `out` folder to Netlify
3. Add `MISTRAL_API_KEY` to environment variables in Netlify dashboard

## 📱 Usage

1. **Start a conversation**: Type your message in the input field at the bottom
2. **Send messages**: Press Enter or click the send button
3. **View responses**: Watch as the AI streams its response in real-time
4. **Clear chat**: Use the "Clear Chat" button in the navbar to start fresh
5. **Mobile support**: The app works seamlessly on mobile devices

## 🔧 Development

### Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Adding Features

The modular architecture makes it easy to add new features:

1. **Image Generation**: Add an image generation API route and integrate with the chat
2. **Message Export**: Add functionality to export chat history
3. **Themes**: Extend the design system with multiple themes
4. **User Accounts**: Integrate with authentication providers

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit your changes: `git commit -m 'Add new feature'`
4. Push to the branch: `git push origin feature/new-feature`
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [Mistral AI](https://mistral.ai/) for the powerful AI API
- [shadcn/ui](https://ui.shadcn.com/) for the beautiful UI components
- [Framer Motion](https://framer.com/motion/) for smooth animations
- [Lucide](https://lucide.dev/) for the icon system

---

Built with ❤️ using Next.js and Mistral AI