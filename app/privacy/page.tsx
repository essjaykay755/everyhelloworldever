import Link from 'next/link'
import { ChevronLeft } from 'lucide-react'

export default function PrivacyPage() {
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
        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
        <div className="prose dark:prose-invert">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          
          <h2>Information Collection</h2>
          <p>
            Hello World Universe does not collect any personal information. We don't use cookies or any tracking mechanisms.
          </p>

          <h2>Usage Data</h2>
          <p>
            We do not collect any usage data or analytics about how you interact with our website.
          </p>

          <h2>Third Party Services</h2>
          <p>
            This website is hosted on Vercel and uses their infrastructure. Please refer to Vercel's privacy policy for information about their data practices.
          </p>

          <h2>Changes to This Policy</h2>
          <p>
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us.
          </p>
        </div>
      </div>
    </div>
  )
} 