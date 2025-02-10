import Link from 'next/link'
import { ChevronLeft } from 'lucide-react'

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-primary/10">
      <div className="container max-w-3xl py-12">
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-6"
        >
          <ChevronLeft className="h-4 w-4" />
          Back to Home
        </Link>
        <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
        <div className="prose dark:prose-invert">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          
          <h2>1. Terms</h2>
          <p>
            By accessing Hello World Universe, you agree to be bound by these terms of service and agree that you are responsible for compliance with any applicable local laws.
          </p>

          <h2>2. Use License</h2>
          <p>
            The code examples provided on Hello World Universe are available for educational purposes. You are free to:
          </p>
          <ul>
            <li>Use the code examples for personal and commercial projects</li>
            <li>Modify the code as needed</li>
            <li>Share and distribute the code</li>
          </ul>

          <h2>3. Disclaimer</h2>
          <p>
            The code examples are provided "as is" without warranty of any kind, either expressed or implied.
          </p>

          <h2>4. Limitations</h2>
          <p>
            In no event shall Hello World Universe be liable for any damages arising out of the use or inability to use the code examples.
          </p>

          <h2>5. Revisions</h2>
          <p>
            We may revise these terms of service at any time without notice. By using this website, you agree to be bound by the current version of these terms of service.
          </p>
        </div>
      </div>
    </div>
  )
} 