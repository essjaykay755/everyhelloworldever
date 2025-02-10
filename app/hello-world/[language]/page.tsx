import { notFound } from 'next/navigation'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { CodeBlock } from '@/components/code-block'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronLeft } from 'lucide-react'
import { helloWorlds } from '@/data/hello-worlds'

interface PageProps {
  params: {
    language: string
  }
}

const getLanguageFromSlug = (slug: string): string => {
  const slugToLanguage: Record<string, string> = {
    'cpp': 'C++',
    'csharp': 'C#'
  }
  return slugToLanguage[slug] || slug
}

export function generateStaticParams() {
  return helloWorlds.map((hello) => {
    const slugMap: Record<string, string> = {
      'C++': 'cpp',
      'C#': 'csharp'
    }
    return {
      language: slugMap[hello.language] || hello.language.toLowerCase()
    }
  })
}

export default function HelloWorldPage({ params }: PageProps) {
  const languageName = getLanguageFromSlug(params.language)
  
  const helloWorld = helloWorlds.find(
    (hello) => hello.language.toLowerCase() === languageName.toLowerCase()
  )

  if (!helloWorld) {
    notFound()
  }

  return (
    <div className={`min-h-screen bg-gradient-to-br from-background via-background/95 ${helloWorld.gradient}`}>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-6"
          >
            <ChevronLeft className="h-4 w-4" />
            Back to Home
          </Link>
          
          <header className="mb-8">
            <div className="flex items-center gap-4 mb-4">
              <Image
                src={helloWorld.icon}
                alt={`${helloWorld.language} logo`}
                width={48}
                height={48}
                className="h-12 w-12"
              />
              <h1 className="text-4xl font-bold">
                Hello World in {helloWorld.language}
              </h1>
            </div>
            <p className="text-muted-foreground text-lg">
              Learn how to write and understand the classic "Hello, World!" program in {helloWorld.language}.
            </p>
          </header>

          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Code Example</CardTitle>
              </CardHeader>
              <CardContent>
                <CodeBlock
                  code={helloWorld.code}
                  extension={helloWorld.extension}
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>About {helloWorld.language}</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-invert max-w-none">
                <p>
                  {helloWorld.language} is a {getLanguageDescription(helloWorld.language)}
                </p>
                <h3>Key Features:</h3>
                {getLanguageFeatures(helloWorld.language).map((feature, index) => (
                  <div key={index} className="flex items-start gap-2 mt-2">
                    <span className="text-primary">•</span>
                    <p className="mt-0">{feature}</p>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Code Explanation</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-invert max-w-none">
                {getCodeExplanation(helloWorld)}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

function getLanguageDescription(language: string): string {
  const descriptions: Record<string, string> = {
    JavaScript: "versatile programming language that powers the web, supporting both frontend and backend development.",
    Python: "high-level, interpreted programming language known for its simplicity and readability.",
    Java: "class-based, object-oriented programming language designed to be platform-independent.",
    "C++": "powerful systems programming language that extends C with object-oriented features.",
    Ruby: "dynamic, object-oriented programming language focused on simplicity and productivity.",
    Go: "statically typed, compiled language designed for simplicity, efficiency, and strong concurrency support.",
    Rust: "systems programming language that guarantees memory safety and thread safety.",
    PHP: "server-side scripting language designed specifically for web development.",
    Swift: "modern programming language designed by Apple for iOS, macOS, and other Apple OS development.",
    Kotlin: "modern programming language that offers full interoperability with Java while being more concise.",
    TypeScript: "typed superset of JavaScript that adds optional static types to the language.",
    "C#": "modern, object-oriented language developed by Microsoft for the .NET platform.",
    Scala: "modern multi-paradigm programming language that combines object-oriented and functional programming.",
    Dart: "client-optimized language for fast apps on any platform, developed by Google.",
    Haskell: "purely functional programming language with strong static typing and type inference.",
    R: "programming language for statistical computing and graphics.",
    Perl: "high-level, general-purpose, interpreted programming language.",
    Lua: "lightweight, high-level programming language designed for embedded use in applications."
  }
  return descriptions[language] || "popular programming language used in software development."
}

function getLanguageFeatures(language: string): string[] {
  const features: Record<string, string[]> = {
    JavaScript: [
      "Dynamic typing and first-class functions",
      "Rich ecosystem with npm packages",
      "Asynchronous programming with Promises",
      "Both browser and server-side execution"
    ],
    Python: [
      "Clear, readable syntax",
      "Extensive standard library",
      "Strong community and package ecosystem",
      "Great for data science and machine learning"
    ],
    // Add more language features as needed
  }
  return features[language] || [
    "Modern development features",
    "Active community and ecosystem",
    "Professional tooling support",
    "Cross-platform compatibility"
  ]
}

function getCodeExplanation(helloWorld: typeof helloWorlds[0]): JSX.Element {
  const explanations: Record<string, JSX.Element> = {
    JavaScript: (
      <>
        <p>The JavaScript Hello World program is straightforward:</p>
        <ul>
          <li><code>console.log()</code> is a built-in function that prints text to the console</li>
          <li>The text is enclosed in quotes to create a string</li>
          <li>The statement ends with a semicolon (optional in JavaScript)</li>
        </ul>
      </>
    ),
    Python: (
      <>
        <p>Python's Hello World demonstrates its simple syntax:</p>
        <ul>
          <li>The <code>print()</code> function outputs text to the console</li>
          <li>String literals can use either single or double quotes</li>
          <li>No semicolon is needed at the end of statements</li>
        </ul>
      </>
    ),
    // Add more explanations as needed
  }

  return explanations[helloWorld.language] || (
    <>
      <p>This Hello World program in {helloWorld.language} demonstrates:</p>
      <ul>
        <li>Basic syntax for output operations</li>
        <li>String literal formatting</li>
        <li>Program structure and entry point</li>
      </ul>
    </>
  )
} 