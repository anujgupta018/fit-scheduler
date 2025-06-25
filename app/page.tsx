import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { ArrowRight, Dumbbell } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20">
      <Navbar />

      {/* Hero section */}
      <section className="container mx-auto px-4 pt-20 pb-16">
        <div className="text-center max-w-4xl mx-auto">
          <div
            className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2
        rounded-full text-sm font-medium mb-6 border border-primary/20"
          >
            <Dumbbell className="h-4 w-4" />
            Transform your Fitness Journey
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Plan Your Perfect{" "}
            <span className="text-primary block">Workout week</span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Take control of your fitness with our intelligent workout scheduler.
            Plan, track and optimize your weekly training routine with ease.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href={"/scheduler"}>
              <Button
                size={"lg"}
                className="text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 rounded-xl
              shadow-lg hover:shadow-xl transition-all w-full sm:w-auto
            "
              >
                Start Planning Now
                <ArrowRight className="ml-2 h-4 sm:h-5 w-4 sm:w-5" />
              </Button>
            </Link>

            <Button
              variant={"outline"}
              size={"lg"}
              className="text-base sm:text-lg px-6 sm:px-8 
              py-4 sm:py-6 rounded-xl bg-background/80 backdrop-blur w-full sm:w-auto"
            >
              Watch Demo
            </Button>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
            Everything you need to Succeed
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Powerful features designed to help you stay consistent and achieve
            your fitness goals.
          </p>
        </div>
      </section>
    </div>
  );
}
