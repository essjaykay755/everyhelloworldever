import { helloWorlds } from '@/data/hello-worlds'

export function getLanguageData(slug: string) {
  const slugToLanguage: Record<string, string> = {
    'cpp': 'C++',
    'csharp': 'C#'
  }
  
  const languageName = slugToLanguage[slug] || slug
  
  return helloWorlds.find(
    (hello) => hello.language.toLowerCase() === languageName.toLowerCase()
  )
} 