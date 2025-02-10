import { notFound } from 'next/navigation'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { CodeBlock } from '@/components/code-block'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronLeft } from 'lucide-react'
import { helloWorlds } from '@/data/hello-worlds'
import { getLanguageData } from '@/lib/languages'

interface PageProps {
  params: {
    language: string
  }
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

function getLanguageInfo(language: string) {
  const info: Record<string, {
    description: string;
    history: string;
    platforms: string[];
    useCases: string[];
    keyFeatures: string[];
    funFact: string;
  }> = {
    JavaScript: {
      description: "A versatile programming language that powers the web, supporting both frontend and backend development.",
      history: "Created by Brendan Eich in just 10 days in 1995, JavaScript was originally named 'Mocha' before becoming the language we know today. Despite initial skepticism, it has evolved into one of the world's most popular programming languages.",
      platforms: ["Web Browsers", "Node.js", "Deno", "Desktop (Electron)", "Mobile (React Native, Ionic)"],
      useCases: [
        "Web Development",
        "Server-side Applications",
        "Mobile Apps",
        "Desktop Applications",
        "Game Development"
      ],
      keyFeatures: [
        "First-class functions",
        "Dynamic typing",
        "Rich ecosystem (npm)",
        "Event-driven programming",
        "JSON support"
      ],
      funFact: "JavaScript has nothing to do with Java - it was named that way for marketing purposes!"
    },
    Python: {
      description: "A high-level, interpreted programming language known for its simplicity and readability.",
      history: "Created by Guido van Rossum and released in 1991, Python was named after Monty Python's Flying Circus. The language's design philosophy emphasizes code readability with its notable use of significant whitespace.",
      platforms: ["Windows", "macOS", "Linux", "Android", "iOS"],
      useCases: [
        "Data Science",
        "Machine Learning",
        "Web Development",
        "Automation",
        "Scientific Computing"
      ],
      keyFeatures: [
        "Simple, readable syntax",
        "Extensive standard library",
        "Dynamic typing",
        "Automatic memory management",
        "Rich ecosystem of packages"
      ],
      funFact: "Python's name isn't about snakes at all - it's named after the British comedy group Monty Python!"
    },
    Java: {
      description: "A class-based, object-oriented programming language designed to be platform-independent.",
      history: "Developed by James Gosling at Sun Microsystems in 1995, Java was originally designed for interactive television, but it was too advanced for the digital cable television industry at the time. The language was initially called 'Oak' after an oak tree outside Gosling's office.",
      platforms: ["Windows", "macOS", "Linux", "Android", "IoT Devices"],
      useCases: [
        "Enterprise Software",
        "Android Development",
        "Web Applications",
        "Big Data Processing",
        "Embedded Systems"
      ],
      keyFeatures: [
        "Platform independence (WORA)",
        "Object-oriented",
        "Strong type system",
        "Automatic memory management",
        "Rich standard library"
      ],
      funFact: "The Java mascot, Duke, was created by Joe Palrang, who also worked on the animated movies Shrek and Madagascar!"
    },
    "C++": {
      description: "A powerful systems programming language that extends C with object-oriented features.",
      history: "Developed by Bjarne Stroustrup in 1979, C++ was created as an extension of C called 'C with Classes'. It was renamed to C++ in 1983, with '++' being the increment operator in C.",
      platforms: ["Windows", "macOS", "Linux", "Embedded Systems", "Game Consoles"],
      useCases: [
        "System Programming",
        "Game Development",
        "Real-time Systems",
        "High-performance Applications",
        "Operating Systems"
      ],
      keyFeatures: [
        "Object-oriented programming",
        "Low-level memory manipulation",
        "High performance",
        "Template metaprogramming",
        "STL (Standard Template Library)"
      ],
      funFact: "The name C++ is a pun - it indicates that C++ is an incremented version of C!"
    },
    Ruby: {
      description: "A dynamic, object-oriented programming language focused on simplicity and productivity.",
      history: "Created by Yukihiro 'Matz' Matsumoto in 1995, Ruby was designed with programmer happiness in mind. Matz blended parts of his favorite languages (Perl, Smalltalk, Eiffel, Ada, and Lisp) to create Ruby.",
      platforms: ["Windows", "macOS", "Linux", "Web (via Ruby on Rails)"],
      useCases: [
        "Web Development",
        "Scripting",
        "DevOps",
        "Automation",
        "Data Processing"
      ],
      keyFeatures: [
        "Pure object-oriented",
        "Dynamic typing",
        "Ruby on Rails framework",
        "Rich standard library",
        "Block syntax and iterators"
      ],
      funFact: "Ruby's creator once said, 'Ruby is designed to make programmers happy.' It's known as the language of happiness!"
    },
    Go: {
      description: "A statically typed, compiled language designed for simplicity, efficiency, and strong concurrency support.",
      history: "Developed by Robert Griesemer, Rob Pike, and Ken Thompson at Google in 2007, Go was created to address criticism of other languages while maintaining their positive characteristics. It was publicly announced in 2009.",
      platforms: ["Windows", "macOS", "Linux", "Cloud Platforms"],
      useCases: [
        "Cloud Services",
        "System Programming",
        "Web Services",
        "DevOps Tools",
        "Network Programming"
      ],
      keyFeatures: [
        "Strong concurrency support",
        "Fast compilation",
        "Built-in testing",
        "Garbage collection",
        "Simplified dependency management"
      ],
      funFact: "Go was originally going to be called 'Gore' (Google + Core), but they settled on 'Go' instead!"
    },
    Rust: {
      description: "A systems programming language that guarantees memory safety and thread safety.",
      history: "Initially developed by Mozilla employee Graydon Hoare in 2006, Rust was designed to be a safe, concurrent, and practical language. Mozilla began sponsoring the project in 2009 and announced it in 2010.",
      platforms: ["Windows", "macOS", "Linux", "WebAssembly", "Embedded Systems"],
      useCases: [
        "Systems Programming",
        "WebAssembly Development",
        "Network Services",
        "Command-line Tools",
        "Game Development"
      ],
      keyFeatures: [
        "Memory safety without garbage collection",
        "Zero-cost abstractions",
        "Pattern matching",
        "Trait-based generics",
        "Type inference"
      ],
      funFact: "Rust has been voted the 'most loved programming language' in Stack Overflow's Developer Survey for several consecutive years!"
    },
    Swift: {
      description: "A powerful and intuitive programming language for iOS, macOS, and other Apple platforms.",
      history: "Developed by Apple and introduced in 2014, Swift was designed to replace Objective-C. Development of Swift started in 2010 by Chris Lattner, who also created the LLVM compiler infrastructure.",
      platforms: ["iOS", "macOS", "watchOS", "tvOS", "Linux"],
      useCases: [
        "iOS App Development",
        "macOS App Development",
        "Server-side Development",
        "System Programming",
        "Game Development"
      ],
      keyFeatures: [
        "Type inference",
        "Optionals for safe handling",
        "Protocol-oriented programming",
        "Modern syntax",
        "Interactive Playgrounds"
      ],
      funFact: "Swift's development was so secret that even most Apple engineers didn't know about it until its public announcement!"
    },
    Kotlin: {
      description: "A modern programming language that offers full interoperability with Java while being more concise.",
      history: "Developed by JetBrains in 2011, Kotlin was named after Kotlin Island near St. Petersburg. It became Google's preferred language for Android development in 2019.",
      platforms: ["Android", "JVM", "Web Browsers", "Native", "iOS"],
      useCases: [
        "Android Development",
        "Server-side Development",
        "Cross-platform Mobile",
        "Web Development",
        "Data Science"
      ],
      keyFeatures: [
        "Java interoperability",
        "Null safety",
        "Coroutines for async",
        "Extension functions",
        "Smart casts"
      ],
      funFact: "Kotlin is the first programming language to be named after an island - Kotlin Island in Russia!"
    },
    TypeScript: {
      description: "A typed superset of JavaScript that adds optional static types to the language.",
      history: "Developed by Microsoft and first released in 2012, TypeScript was created by Anders Hejlsberg, who also designed C# and Delphi. It was developed to address the challenges of writing large-scale applications in JavaScript.",
      platforms: ["Web Browsers", "Node.js", "Deno", "Any JavaScript Runtime"],
      useCases: [
        "Large-scale Web Applications",
        "Enterprise Software",
        "Node.js Applications",
        "React/Angular Development",
        "API Development"
      ],
      keyFeatures: [
        "Static typing",
        "ECMAScript compatibility",
        "Object-oriented features",
        "IDE support",
        "Generics"
      ],
      funFact: "TypeScript's compiler is itself written in TypeScript - talk about eating your own dog food!"
    },
    "C#": {
      description: "A modern, object-oriented language developed by Microsoft for the .NET platform.",
      history: "Developed by Anders Hejlsberg at Microsoft in 2000, C# was designed as part of the .NET initiative. Its name comes from the musical notation where a sharp (#) increases a note's pitch by one semitone.",
      platforms: ["Windows", "macOS", "Linux", "Unity Game Engine", "Mobile (Xamarin)"],
      useCases: [
        "Enterprise Applications",
        "Game Development",
        "Windows Applications",
        "Web Services",
        "Mobile Development"
      ],
      keyFeatures: [
        "Type safety",
        "Versioning",
        "Garbage collection",
        "LINQ integration",
        "Async programming"
      ],
      funFact: "The original codename for C# was 'Cool' (C-like Object Oriented Language)!"
    },
    PHP: {
      description: "A popular server-side scripting language designed specifically for web development.",
      history: "Created by Rasmus Lerdorf in 1994, PHP originally stood for 'Personal Home Page'. It was rewritten in 1997 by Zeev Suraski and Andi Gutmans, and renamed to 'PHP: Hypertext Preprocessor'.",
      platforms: ["Linux", "Windows", "macOS", "Web Servers"],
      useCases: [
        "Web Development",
        "Server-side Scripting",
        "Command Line Scripting",
        "WordPress Development",
        "Content Management Systems"
      ],
      keyFeatures: [
        "Easy database integration",
        "Cross-platform support",
        "Large standard library",
        "Rich ecosystem",
        "Simple deployment"
      ],
      funFact: "PHP was never meant to be a programming language! It started as a set of tools to maintain Rasmus Lerdorf's personal homepage."
    },
    Perl: {
      description: "A high-level, general-purpose, interpreted programming language with powerful text processing capabilities.",
      history: "Created by Larry Wall in 1987, Perl was developed as a Unix scripting language for report processing. The name was originally meant to stand for 'Practical Extraction and Report Language'.",
      platforms: ["Unix/Linux", "Windows", "macOS", "Web Servers"],
      useCases: [
        "Text Processing",
        "System Administration",
        "Web Development",
        "Network Programming",
        "Bioinformatics"
      ],
      keyFeatures: [
        "Regular expressions",
        "Text manipulation",
        "CPAN repository",
        "Cross-platform support",
        "CGI scripting"
      ],
      funFact: "Perl's motto is 'There's More Than One Way To Do It' (TMTOWTDI), which is the opposite of Python's philosophy!"
    },
    Lua: {
      description: "A lightweight, high-level programming language designed for embedded use in applications.",
      history: "Created in 1993 by Roberto Ierusalimschy, Waldemar Celes, and Luiz Henrique de Figueiredo at PUC-Rio in Brazil. The name 'Lua' means 'moon' in Portuguese.",
      platforms: ["Embedded Systems", "Game Engines", "IoT Devices", "All Major OS"],
      useCases: [
        "Game Development",
        "Embedded Systems",
        "Script Extensions",
        "Mobile Applications",
        "Configuration"
      ],
      keyFeatures: [
        "Lightweight",
        "Embeddable",
        "Fast execution",
        "Simple syntax",
        "Coroutines"
      ],
      funFact: "Lua is the most popular programming language developed in a developing country (Brazil)!"
    },
    Fortran: {
      description: "A pioneering programming language primarily used for scientific and numerical computing.",
      history: "Developed by IBM in 1957, FORTRAN (FORmula TRANslation) was the first high-level programming language. It revolutionized programming by allowing scientists to write code in a more natural mathematical notation.",
      platforms: ["Unix/Linux", "Windows", "macOS", "Supercomputers"],
      useCases: [
        "Scientific Computing",
        "Numerical Analysis",
        "High-Performance Computing",
        "Weather Forecasting",
        "Physics Simulations"
      ],
      keyFeatures: [
        "Array programming",
        "High performance",
        "Mathematical notation",
        "Parallel computing support",
        "Legacy code compatibility"
      ],
      funFact: "Fortran is the oldest programming language still in active use and remains crucial in scientific computing!"
    },
    Matlab: {
      description: "A high-level programming language and numerical computing environment.",
      history: "Created by Cleve Moler in the late 1970s, MATLAB (MATrix LABoratory) was designed to give students easy access to matrix software. It was rewritten in C and released commercially in 1984.",
      platforms: ["Windows", "macOS", "Linux", "Cloud"],
      useCases: [
        "Scientific Research",
        "Signal Processing",
        "Image Processing",
        "Machine Learning",
        "Control Systems"
      ],
      keyFeatures: [
        "Matrix operations",
        "Plotting functions",
        "Algorithm implementation",
        "Toolbox ecosystem",
        "Simulink integration"
      ],
      funFact: "MATLAB was originally written to help students use matrix software without learning Fortran!"
    },
    Julia: {
      description: "A high-level, high-performance programming language for technical computing.",
      history: "Development began in 2009 by Jeff Bezanson, Stefan Karpinski, Viral B. Shah, and Alan Edelman. Julia was designed to combine the ease of use of Python with the performance of C.",
      platforms: ["Windows", "macOS", "Linux", "Web Browsers"],
      useCases: [
        "Data Science",
        "Scientific Computing",
        "Numerical Analysis",
        "Machine Learning",
        "Statistical Computing"
      ],
      keyFeatures: [
        "Multiple dispatch",
        "Dynamic type system",
        "High performance",
        "Parallel computing",
        "Metaprogramming"
      ],
      funFact: "Julia's logo features three dots representing the founders' favorite programming languages: Lisp, Python, and C!"
    },
    Lisp: {
      description: "One of the oldest programming languages, known for its unique syntax and powerful macro system.",
      history: "Created by John McCarthy in 1958, Lisp (LISt Processing) was one of the first programming languages to introduce many features that are now standard, including tree data structures and garbage collection.",
      platforms: ["Unix/Linux", "Windows", "macOS", "LISP Machines"],
      useCases: [
        "Artificial Intelligence",
        "Symbolic Computation",
        "Research",
        "Education",
        "Rapid Prototyping"
      ],
      keyFeatures: [
        "Homoiconicity",
        "Macro system",
        "Dynamic typing",
        "Interactive development",
        "Functional programming"
      ],
      funFact: "Lisp was the first language to use garbage collection, and its code-as-data philosophy influenced many modern languages!"
    },
    Prolog: {
      description: "A logic programming language designed for artificial intelligence and computational linguistics.",
      history: "Developed in 1972 by Alain Colmerauer and Philippe Roussel, Prolog (PROgramming in LOGic) pioneered logic programming and influenced the development of AI programming.",
      platforms: ["Unix/Linux", "Windows", "macOS", "Web"],
      useCases: [
        "Artificial Intelligence",
        "Expert Systems",
        "Natural Language Processing",
        "Knowledge Representation",
        "Automated Reasoning"
      ],
      keyFeatures: [
        "Logic programming",
        "Pattern matching",
        "Backtracking",
        "Unification",
        "Declarative style"
      ],
      funFact: "Prolog was used to build the first Japanese-to-English machine translation system!"
    }
  }

  // Default info for languages not explicitly defined
  const defaultInfo = {
    description: `A powerful programming language used in software development.`,
    history: `${language} has evolved over time to become an important tool in the programming landscape.`,
    platforms: ["Multiple platforms"],
    useCases: ["Software Development", "Application Development"],
    keyFeatures: [
      "Modern development features",
      "Active community",
      "Professional tooling",
      "Cross-platform support"
    ],
    funFact: `${language} continues to surprise developers with its capabilities!`
  }

  return info[language] || defaultInfo
}

export default function HelloWorldPage({ params }: PageProps) {
  const languageData = getLanguageData(params.language)
  
  if (!languageData) {
    notFound()
  }

  const languageSlug = params.language.toLowerCase()
  const languageInfo = getLanguageInfo(params.language)

  return (
    <div className={`language-page ${languageSlug}`}>
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
                src={languageData.icon}
                alt={`${languageData.language} logo`}
                width={48}
                height={48}
                className="h-12 w-12"
              />
              <h1 className="text-3xl font-bold">
                Hello World in {languageData.language}
              </h1>
            </div>
            <p className="text-lg text-muted-foreground">{languageInfo.description}</p>
          </header>

          <div className="grid gap-6">
            <Card className="overflow-hidden">
              <CardHeader>
                <CardTitle>Hello World Example</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="border-b border-border bg-muted/50 px-4 py-2 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Image 
                      src={languageData.icon}
                      alt={`${languageData.language} logo`}
                      width={20}
                      height={20}
                      className="h-5 w-5"
                    />
                    <h2 className="font-semibold">{languageData.language}</h2>
                  </div>
                  <span className="text-xs text-muted-foreground">.{languageData.extension}</span>
                </div>
                <CodeBlock
                  code={languageData.code}
                  extension={languageData.extension}
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>History</CardTitle>
              </CardHeader>
              <CardContent className="prose dark:prose-invert max-w-none">
                <p>{languageInfo.history}</p>
                <div className="mt-4 p-4 bg-muted rounded-lg">
                  <p className="text-sm font-medium text-muted-foreground">💡 Fun Fact</p>
                  <p className="mt-1 text-sm">{languageInfo.funFact}</p>
                </div>
              </CardContent>
            </Card>

            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Platforms</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-4 space-y-2">
                    {languageInfo.platforms.map((platform, index) => (
                      <li key={index} className="text-muted-foreground">{platform}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Common Use Cases</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-4 space-y-2">
                    {languageInfo.useCases.map((useCase, index) => (
                      <li key={index} className="text-muted-foreground">{useCase}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Key Features</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="grid gap-2">
                  {languageInfo.keyFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
} 