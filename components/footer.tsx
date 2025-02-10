import { League_Spartan } from 'next/font/google'
import Link from 'next/link'

const leagueSpartan = League_Spartan({ subsets: ['latin'] })

export function Footer() {
  return (
    <footer className="border-t py-6 md:py-0">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left flex items-center gap-1.5">
            Built by{" "}
            <a 
              href="https://essjaykay.dev" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`${leagueSpartan.className} font-bold text-xl text-foreground relative inline-flex`}
            >
              EssJayKay
              <span className="text-xs absolute bottom-0.5 -right-6">.dev</span>
            </a>
          </p>
        </div>
        <div className="flex gap-4">
          <Link
            href="/about"
            className="text-sm text-muted-foreground hover:text-primary"
          >
            About
          </Link>
          <Link
            href="/privacy"
            className="text-sm text-muted-foreground hover:text-primary"
          >
            Privacy
          </Link>
          <Link
            href="/terms"
            className="text-sm text-muted-foreground hover:text-primary"
          >
            Terms
          </Link>
        </div>
      </div>
    </footer>
  )
} 