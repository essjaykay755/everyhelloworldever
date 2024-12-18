'use client'

import { useEffect, useState } from 'react'

interface TypewriterProps {
  text: string
  delay?: number
  onComplete?: () => void
}

export function Typewriter({ text, delay = 50, onComplete }: TypewriterProps) {
  const [currentText, setCurrentText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText(prev => prev + text[currentIndex])
        setCurrentIndex(prev => prev + 1)
      }, delay)

      return () => clearTimeout(timeout)
    } else if (onComplete) {
      onComplete()
    }
  }, [currentIndex, delay, text, onComplete])

  return <span>{currentText}</span>
}

