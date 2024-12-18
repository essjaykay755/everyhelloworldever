'use client'

import { Check, Copy } from 'lucide-react'
import { useState } from 'react'
import { Highlight, themes } from 'prism-react-renderer'

import { Button } from '@/components/ui/button'

interface CodeBlockProps {
  code: string
  extension: string
}

// Map file extensions to Prism language identifiers
const languageMap: { [key: string]: string } = {
  java: 'java',
  rs: 'rust',
  php: 'php',
  cs: 'csharp',
  cpp: 'cpp',
  py: 'python',
  js: 'javascript',
  ts: 'typescript',
  go: 'go',
  rb: 'ruby',
  swift: 'swift',
  kt: 'kotlin',
  scala: 'scala',
  dart: 'dart',
  hs: 'haskell',
  r: 'r',
  pl: 'perl',
  lua: 'lua'
}

export function CodeBlock({ code, extension }: CodeBlockProps) {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="relative group min-h-[200px]">
      <Highlight
        theme={themes.dracula}
        code={code.trim()}
        language={languageMap[extension] || extension}
      >
        {({ style, tokens, getLineProps, getTokenProps }) => (
          <pre 
            className="p-4 overflow-x-auto h-full" 
            style={{ ...style, background: 'transparent' }}
          >
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line })}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
      <Button
        size="icon"
        variant="secondary"
        className="absolute bottom-2 right-2 h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity"
        onClick={copyToClipboard}
      >
        {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
        <span className="sr-only">Copy code</span>
      </Button>
    </div>
  )
}

