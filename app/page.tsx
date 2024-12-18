import { HelloWorldGrid } from '@/components/hello-world-grid'
import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-primary/10">
      <main className="container mx-auto px-4 py-8">
        <header className="mb-12 text-center space-y-4">
          <div className="relative">
            <div className="absolute inset-0 blur-3xl opacity-20 bg-gradient-to-r from-primary to-secondary" />
            <h1 className="relative text-4xl font-bold tracking-tight sm:text-6xl bg-gradient-to-r from-primary/80 to-secondary bg-clip-text text-transparent">
              Every &quot;Hello World&quot; Ever
            </h1>
          </div>
          <p className="text-muted-foreground text-lg relative">
            A collection of &quot;Hello, World!&quot; in every programming language
          </p>
        </header>
        <HelloWorldGrid />
        <footer className="mt-12 text-center text-sm text-primary-foreground/80">
          An <Link href="https://essjayKay.dev" className="text-primary hover:text-primary/80 transition-colors underline font-medium" target="_blank" rel="noopener noreferrer">EssJayKay.dev</Link> Creation
        </footer>
      </main>
    </div>
  )
}

