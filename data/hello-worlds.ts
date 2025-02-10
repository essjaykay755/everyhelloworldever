export interface HelloWorld {
  language: string
  code: string
  extension: string
  icon: string
  gradient: string
}

export const helloWorlds: HelloWorld[] = [
  {
    language: "JavaScript",
    extension: "js",
    code: 'console.log("Hello, World!");',
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    gradient: "from-yellow-500/20 via-yellow-500/10 to-yellow-500/5"
  },
  {
    language: "Python",
    extension: "py",
    code: 'print("Hello, World!")',
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    gradient: "from-blue-500/20 via-blue-500/10 to-blue-500/5"
  },
  {
    language: "Java",
    extension: "java",
    code: `public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`,
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    gradient: "from-red-500/20 via-red-500/10 to-red-500/5"
  },
  {
    language: "C++",
    extension: "cpp",
    code: `#include <iostream>

int main() {
    std::cout << "Hello, World!" << std::endl;
    return 0;
}`,
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
    gradient: "from-purple-500/20 via-purple-500/10 to-purple-500/5"
  },
  {
    language: "Ruby",
    extension: "rb",
    code: 'puts "Hello, World!"',
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original.svg",
    gradient: "from-red-500/20 via-red-500/10 to-red-500/5"
  },
  {
    language: "Go",
    extension: "go",
    code: `package main

import "fmt"

func main() {
    fmt.Println("Hello, World!")
}`,
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg",
    gradient: "from-cyan-500/20 via-cyan-500/10 to-cyan-500/5"
  },
  {
    language: "Rust",
    extension: "rs",
    code: `fn main() {
    println!("Hello, World!");
}`,
    icon: "https://cdn.jsdelivr.net/npm/devicons@1.8.0/!SVG/rust.svg",
    gradient: "from-orange-500/20 via-orange-500/10 to-orange-500/5"
  },
  {
    language: "PHP",
    extension: "php",
    code: '<?php echo "Hello, World!"; ?>',
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
    gradient: "from-indigo-500/20 via-indigo-500/10 to-indigo-500/5"
  },
  {
    language: "Swift",
    extension: "swift",
    code: 'print("Hello, World!")',
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg",
    gradient: "from-orange-500/20 via-orange-500/10 to-orange-500/5"
  },
  {
    language: "Kotlin",
    extension: "kt",
    code: 'fun main() = println("Hello, World!")',
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg",
    gradient: "from-purple-500/20 via-purple-500/10 to-purple-500/5"
  },
  {
    language: "TypeScript",
    extension: "ts",
    code: 'console.log("Hello, World!");',
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    gradient: "from-blue-500/20 via-blue-500/10 to-blue-500/5"
  },
  {
    language: "C#",
    extension: "cs",
    code: `using System;

class Program {
    static void Main() {
        Console.WriteLine("Hello, World!");
    }
}`,
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
    gradient: "from-green-500/20 via-green-500/10 to-green-500/5"
  },
  {
    language: "Scala",
    extension: "scala",
    code: 'object HelloWorld extends App { println("Hello, World!") }',
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scala/scala-original.svg",
    gradient: "from-red-500/20 via-red-500/10 to-red-500/5"
  },
  {
    language: "Dart",
    extension: "dart",
    code: 'void main() { print("Hello, World!"); }',
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg",
    gradient: "from-blue-500/20 via-blue-500/10 to-blue-500/5"
  },
  {
    language: "Haskell",
    extension: "hs",
    code: 'main = putStrLn "Hello, World!"',
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/haskell/haskell-original.svg",
    gradient: "from-purple-500/20 via-purple-500/10 to-purple-500/5"
  },
  {
    language: "R",
    extension: "r",
    code: 'cat("Hello, World!")',
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg",
    gradient: "from-blue-500/20 via-blue-500/10 to-blue-500/5"
  },
  {
    language: "Perl",
    extension: "pl",
    code: 'print "Hello, World!";',
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/perl/perl-original.svg",
    gradient: "from-purple-500/20 via-purple-500/10 to-purple-500/5"
  },
  {
    language: "Lua",
    extension: "lua",
    code: 'print("Hello, World!")',
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/lua/lua-original.svg",
    gradient: "from-blue-500/20 via-blue-500/10 to-blue-500/5"
  }
] 