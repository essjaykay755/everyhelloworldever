import { League_Spartan } from 'next/font/google'

const leagueSpartan = League_Spartan({ subsets: ['latin'] })

export function Footer() {
  return (
    <footer className="py-6 text-center text-sm text-muted-foreground">
      <p className="flex items-center justify-center gap-1.5">
        An{' '}
        <span className={`${leagueSpartan.className} font-bold text-xl text-foreground`}>
          EssJayKay
          <span className="text-base">.dev</span>
        </span>{' '}
        Product
      </p>
    </footer>
  )
} 