import { Dumbbell } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import { ModeToggle } from "./mode-toggle";

export default function Navbar() {
  return (
    <nav className="border-b bg-background/80 backdrop-blur-md sticky top-0 z-50 border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 font-bold text-xl text-foreground"
        >
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <Dumbbell className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="hidden sm:block">FitScheduler</span>
        </Link>

        <div className="flex items-center gap-2 sm:gap-4">
          <Link
            href={"/scheduler"}
            className="text-muted-foreground hover:text-foreground font-medium transition-colors"
          >
            Scheduler
          </Link>

          <ModeToggle />

          <Link className="hidden md:flex" href="/scheduler">
            <Button
              variant="outline"
              className="rounded-lg text-sm sm:text-base px-3 sm:px-4"
            >
              <span className="hidden sm:inline">Get Started</span>
              <span className="sm:hidden">Start</span>
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
