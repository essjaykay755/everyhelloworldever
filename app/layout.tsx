import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Footer } from '@/components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Hello World Universe',
  description: 'A collection of "Hello, World!" in every programming language',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

