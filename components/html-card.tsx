'use client'

import { useEffect, useRef, useState } from 'react'
import { X } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { CodeBlock } from './code-block'
import { Typewriter } from './typewriter'
import Image from 'next/image'

export function HtmlCard() {
  const cardRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [showX, setShowX] = useState(false)
  const [showMessage, setShowMessage] = useState(false)
  const [emoji, setEmoji] = useState('🤓')

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
          
          // Start animation sequence
          setTimeout(() => setShowX(true), 1000)
          setTimeout(() => setShowX(false), 1500)
          setTimeout(() => setShowX(true), 2000)
          setTimeout(() => setShowX(false), 2500)
          setTimeout(() => setShowMessage(true), 3000)
          setTimeout(() => setEmoji('😢'), 5000)
        }
      },
      {
        threshold: 0,
        rootMargin: '100px'
      }
    )

    if (cardRef.current) {
      observer.observe(cardRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const htmlCode = `<!DOCTYPE html>
<html>
  <body>
    <h1>Hello, World!</h1>
  </body>
</html>`

  return (
    <div 
      ref={cardRef}
      className={`transition-all duration-700
        ${!isVisible ? 'opacity-0 scale-75' : 'opacity-100 scale-100'}
      `}
    >
      <Card className="overflow-hidden relative group/card h-full">
        <div className="absolute top-4 right-4 z-10">
          <span className="text-6xl">{emoji}</span>
        </div>
        <CardContent className="p-0 h-full flex flex-col">
          <div className="border-b border-border bg-muted/50 px-4 py-2 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Image 
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                alt="HTML5 icon"
                width={24}
                height={24}
              />
              <h2 className="font-semibold">HTML</h2>
            </div>
            <span className="text-xs text-muted-foreground">.html</span>
          </div>
          <div className="flex-1 flex flex-col relative">
            <CodeBlock
              code={htmlCode}
              extension="html"
            />
            {showX && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                <X className="w-32 h-32 text-red-500 animate-pulse" />
              </div>
            )}
            {showMessage && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/95 p-6">
                <div className="text-white/90 text-2xl text-center max-w-[80%] leading-relaxed">
                  <Typewriter 
                    text="You are not a programming language, get outta here!" 
                    delay={50}
                  />
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

