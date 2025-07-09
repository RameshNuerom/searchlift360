import type { Metadata } from 'next'
import { Inter, Montserrat, Roboto } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter'
})

const montserrat = Montserrat({ 
  subsets: ['latin'],
  weight: ['700'],
  variable: '--font-montserrat'
})

const roboto = Roboto({ 
  subsets: ['latin'],
  weight: ['400', '500', '400', '700'],
  variable: '--font-roboto'
})

export const metadata: Metadata = {
  title: 'AI Conversation Platform - Make Your Brand AI Ready',
  description: 'Transform your brand for the AI era. Get discovered in AI conversations with our smart keyword integration, conversational AI chatbot, and dedicated agentic AI solutions.',
  keywords: ['AI conversation', 'brand discovery', 'AI chatbot', 'keyword integration', 'conversational AI', 'agentic AI'],
  authors: [{ name: 'AI Conversation Platform' }],
  creator: 'AI Conversation Platform',
  publisher: 'AI Conversation Platform',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://your-domain.com',
    title: 'AI Conversation Platform - Make Your Brand AI Ready',
    description: 'Transform your brand for the AI era. Get discovered in AI conversations with our smart keyword integration, conversational AI chatbot, and dedicated agentic AI solutions.',
    siteName: 'AI Conversation Platform',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Conversation Platform - Make Your Brand AI Ready',
    description: 'Transform your brand for the AI era. Get discovered in AI conversations with our smart keyword integration, conversational AI chatbot, and dedicated agentic AI solutions.',
    creator: '@yourhandle',
  },
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#ffa400',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable} ${roboto.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://your-domain.com" />
      </head>
      <body className="bg-black text-white antialiased">
        {children}
      </body>
    </html>
  )
}