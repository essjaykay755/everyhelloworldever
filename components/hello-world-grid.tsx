"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { CodeBlock } from "./code-block";
import { HtmlCard } from "./html-card";
import Image from "next/image";
import Link from "next/link";
import { helloWorlds } from "@/data/hello-worlds";

export function HelloWorldGrid() {
  const getLanguageSlug = (language: string) => {
    const slugMap: Record<string, string> = {
      "C++": "cpp",
      "C#": "csharp",
    };
    return slugMap[language] || language.toLowerCase();
  };

  const getLanguageUrl = (language: string) => {
    return `/hello-world/${getLanguageSlug(language)}`;
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
      {helloWorlds.map((hello) => {
        const languageSlug = getLanguageSlug(hello.language);
        return (
          <Link
            key={hello.language}
            href={getLanguageUrl(hello.language)}
            className="block transition-transform hover:-translate-y-1 duration-300 ease-in-out"
          >
            <Card
              className={`overflow-hidden h-full language-card ${languageSlug}`}
            >
              <CardContent className="p-0 h-full flex flex-col">
                <div className="border-b border-border bg-muted/50 px-4 py-2 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Image
                      src={hello.icon}
                      alt={`${hello.language} logo`}
                      width={20}
                      height={20}
                      className="h-5 w-5"
                      loading="lazy"
                    />
                    <h2 className="font-semibold">{hello.language}</h2>
                  </div>
                  <span className="text-xs text-muted-foreground">
                    .{hello.extension}
                  </span>
                </div>
                <div className="flex-1 flex flex-col">
                  <CodeBlock code={hello.code} extension={hello.extension} />
                </div>
              </CardContent>
            </Card>
          </Link>
        );
      })}
      <HtmlCard />
    </div>
  );
}
