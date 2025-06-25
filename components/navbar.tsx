import { Dumbbell } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

export default function Navbar() {
  return (
    <nav className="border-b bg-white/80 backdrop-blur-md sticky top-0 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 font-bold text-xl text-slate-900"
        >
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <Dumbbell className="h-5 w-5 text-white" />
          </div>
          FitScheduler
        </Link>

        <div className="flex items-center gap-6">
          <Link
            href={"/scheduler"}
            className="text-slate-600 hover:text-slate-900 font-medium transition-colors"
          >
            Scheduler
          </Link>
          <Link className="hidden md:flex" href="/scheduler">
            <Button className="rounded-lg">Get Started</Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
