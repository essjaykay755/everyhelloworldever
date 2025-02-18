import Link from "next/link";
import { ChevronLeft } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-primary/10">
      <div className="container max-w-3xl py-12">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-6"
        >
          <ChevronLeft className="h-4 w-4" />
          Back to Home
        </Link>
        <h1 className="text-3xl font-bold mb-6">About Hello World Universe</h1>
        <div className="prose dark:prose-invert">
          <p>
            Welcome to Hello World Universe, where we take the most sacred
            tradition in programming - printing &ldquo;Hello, World!&rdquo; -
            way too seriously. 🌎
          </p>
          <p>
            Our mission? To boldly go where every programmer has gone before,
            but to do it with style, syntax highlighting, and a dash of humor.
          </p>
          <h2>Why Hello World?</h2>
          <p>
            Because &ldquo;Goodbye World&rdquo; was too depressing, and
            &ldquo;Hey Universe&rdquo; felt a bit too casual. Plus, it&rsquo;s
            the only program that works 60% of the time, every time!
          </p>
          <p>
            Think of us as your friendly neighborhood programming guide, except
            instead of teaching you how to fight crime, we&rsquo;re showing you
            how to greet the world in every programming language imaginable.
          </p>
          <h2>Our Collection</h2>
          <p>
            From the ancient scrolls of COBOL to the hip new languages that
            probably got invented while you were reading this, we&rsquo;ve got
            them all. Each example comes with:
          </p>
          <ul>
            <li>
              Syntax highlighting (because black and white is so last century)
            </li>
            <li>
              Copy functionality (for those &ldquo;I totally wrote this
              myself&rdquo; moments)
            </li>
            <li>
              Zero bugs guaranteed* (*terms and conditions apply, void where
              prohibited)
            </li>
          </ul>
          <h2>The HTML Incident 🤫</h2>
          <p>
            Oh, and about that HTML card that keeps trying to sneak into our
            collection... Let&rsquo;s just say HTML had a bit too much coffee
            one day and decided it was a programming language. We&rsquo;ve tried
            to explain that it&rsquo;s a markup language, but it just
            won&rsquo;t listen.
          </p>
          <p>
            Every time you visit, it attempts to join the cool kids&rsquo; club,
            only to be met with our security system (which is really just a big
            red X and some dramatic effects). Poor HTML gets so emotional about
            it, it even changes its emoji from 🤓 to 😢.
          </p>
          <p>
            We&rsquo;ve considered letting it stay, but then XML and Markdown
            started hanging around the parking lot with their own &ldquo;Hello,
            World!&rdquo; examples, and we had to draw the line somewhere.
            Sorry, HTML, maybe try learning some JavaScript and come back?
          </p>
          <h2>Fun Facts</h2>
          <p>
            Did you know? If you printed &ldquo;Hello, World!&rdquo; in every
            programming language we support, you&rsquo;d have enough code to...
            well, print &ldquo;Hello, World!&rdquo; in every programming
            language we support. Mind-blowing, right? 🤯
          </p>
          <p>
            Join us in our quest to make the world a more welcoming place, one
            print statement at a time. Remember: in a world full of complex
            algorithms and design patterns, sometimes all you need is a good old
            &ldquo;Hello, World!&rdquo; to brighten your day.
          </p>
          <p className="text-sm italic">
            No computers were harmed in the making of this website. Though a few
            semicolons may have been misplaced, and one HTML file&rsquo;s
            feelings were slightly bruised.
          </p>
        </div>
      </div>
    </div>
  );
}
