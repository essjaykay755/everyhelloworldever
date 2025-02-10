'use client'

import { Check, Copy } from 'lucide-react'
import { useState } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism'

import { Button } from '@/components/ui/button'

interface CodeBlockProps {
  code: string
  extension: string
}

// Map file extensions to language identifiers
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
  lua: 'lua',
  html: 'html',
  css: 'css',
  sh: 'bash',
  yml: 'yaml',
  json: 'json',
  md: 'markdown',
  sql: 'sql',
  xml: 'xml',
  f90: 'fortran',
  f95: 'fortran',
  f: 'fortran',
  m: 'matlab',
  jl: 'julia',
  lisp: 'lisp',
  cl: 'lisp',
  pro: 'prolog'
}

export function CodeBlock({ code, extension }: CodeBlockProps) {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = async (e: React.MouseEvent) => {
    e.preventDefault()  // Prevent the default action
    e.stopPropagation()  // Stop the event from bubbling up to the parent Link
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="relative group min-h-[200px]">
      <SyntaxHighlighter
        language={languageMap[extension] || extension}
        style={vscDarkPlus}
        customStyle={{
          margin: 0,
          padding: '1rem',
          background: 'transparent',
          minHeight: '200px',
          maxWidth: '100%',
          overflowX: 'hidden'
        }}
        wrapLongLines={true}
      >
        {code.trim()}
      </SyntaxHighlighter>
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

