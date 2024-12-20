import { League_Spartan } from 'next/font/google'

const leagueSpartan = League_Spartan({ subsets: ['latin'] })

export function Logo() {
  return (
    <h1 className={`${leagueSpartan.className} font-bold text-4xl tracking-tight`}>
      EssJayKay
      <span className="text-2xl">.dev</span>
    </h1>
  )
} 