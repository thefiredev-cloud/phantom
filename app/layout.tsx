import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Phantom — 200 Agents. 3 Humans.',
  description: 'Ghost workforce platform — deploy 50-200 AI agents that handle your entire back office. You just steer.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-[#0a0a0f] text-white antialiased">{children}</body>
    </html>
  )
}
