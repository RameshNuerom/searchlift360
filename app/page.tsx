import { Metadata } from 'next'
import { Home } from '@/components/screens/Home'

export const metadata: Metadata = {
  title: 'AI Conversation Platform - Make Your Brand AI Ready',
  description: 'Transform your brand for the AI era. Get discovered in AI conversations with our smart keyword integration, conversational AI chatbot, and dedicated agentic AI solutions.',
}

export default function HomePage() {
  return <Home />
}