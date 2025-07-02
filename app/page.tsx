"use client";
import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ArrowRight,
  Calendar,
  CheckCircle,
  Clock,
  Dumbbell,
  TrendingUp,
} from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="bg-grid min-h-screen bg-gradient-to-br from-background to-muted/20">
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

          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight"
          >
            Plan Your Perfect{" "}
            <motion.span
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
              className="text-blue-900 dark:text-blue-700 block"
            >
              Workout Week
            </motion.span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 2, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.5 }}
            className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            Take control of your fitness with our intelligent workout scheduler.
            Plan, track and optimize your weekly training routine with ease.
          </motion.p>

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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card
            className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-card/80 group
           backdrop-blur"
          >
            <CardHeader className="text-center pb-4">
              <div
                className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center 
            justify-center mx-auto mb-4 group-hover:scale-110 transition-transform"
              >
                <Calendar className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <CardTitle className="text-lg sm:text-xl">
                Weekly Planning
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <CardDescription className="text-sm sm:text-base">
                Organize your workouts across the entire week with our intuitive
                calendar interface.
              </CardDescription>
            </CardContent>
          </Card>

          <Card
            className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-card/80 group
           backdrop-blur"
          >
            <CardHeader className="text-center pb-4">
              <div
                className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center 
            justify-center mx-auto mb-4 group-hover:scale-110 transition-transform"
              >
                <Clock className="text-green-600 h-6 w-6 dark:text-green-400" />
              </div>
              <CardTitle className="text-lg sm:text-xl">
                Custom Time Slots
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <CardDescription className="text-sm sm:text-base">
                Create flexible time slots that fit your schedule- morning,
                afternoon or evening.
              </CardDescription>
            </CardContent>
          </Card>

          <Card
            className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-card/80 group
           backdrop-blur"
          >
            <CardHeader className="text-center pb-4">
              <div
                className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center 
            justify-center mx-auto mb-4 group-hover:scale-110 transition-transform"
              >
                <Dumbbell className="h-6 w-6 text-purple-600 dark:text-purple-400" />
              </div>
              <CardTitle className="text-lg sm:text-xl">
                Exercise Library
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <CardDescription className="text-sm sm:text-base">
                Add detailed exercise with reps, sets and personal notes for
                each workout.
              </CardDescription>
            </CardContent>
          </Card>

          <Card
            className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-card/80 group
           backdrop-blur"
          >
            <CardHeader className="text-center pb-4">
              <div
                className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-xl flex items-center 
            justify-center mx-auto mb-4 group-hover:scale-110 transition-transform"
              >
                <TrendingUp className="h-6 w-6 text-orange-600 dark:text-orange-400" />
              </div>
              <CardTitle className="text-lg sm:text-xl">
                Progress Tracking
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <CardDescription className="text-sm sm:text-base">
                Monitor your weekly progress and stay motivated with visual
                workout summaries.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div
          className="bg-card/60 backdrop-blur rounded-3xl p-6 sm:p-8 md:p-12 shadow-xl 
       border border-border/50"
        >
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-6">
                Why Choose Our Workout Scheduler?
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 sm:h-6 w-5 sm:w-6 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground text-sm sm:text-base">
                      Stay Consistent
                    </h4>
                    <p className="text-muted-foreground text-sm sm:text-base">
                      Never miss a workout with clear weekly planning and
                      reminders.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 sm:h-6 w-5 sm:w-6 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground text-sm sm:text-base">
                      Flexible Scheduling
                    </h4>
                    <p className="text-muted-foreground text-sm sm:text-base">
                      Adapt your workouts to your lifestyle with customizable
                      time slots.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 sm:h-6 w-5 sm:w-6 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground text-sm sm:text-base">
                      Detailed Planning
                    </h4>
                    <p className="text-muted-foreground text-sm sm:text-base">
                      Plan every exercise with specific sets,reps and personal
                      notes.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="bg-gradient-to-br from-primary/10 to-primary/5 dark:from-primary/20 
            dark:to-primary/10 rounded-2xl p-6 sm:p-8 text-center border border-primary/20"
            >
              <Dumbbell className="h-12 sm:h-16 w-12 sm:w-16 text-primary mx-auto mb-4" />
              <h4 className="text-xl sm:text-2xl font-bold text-foreground mb-2">
                Ready To Start?
              </h4>
              <p className="text-muted-foreground mb-6 text-sm sm:text-base">
                Join Thousands of enthusiasts who plan their success.
              </p>
              <Link href="/scheduler">
                <Button size={"lg"} className="rounded-2xl w-full sm:w-auto ">
                  Plan Your First Week
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <footer className="container mx-auto px-4 py-8 text-center text-muted-foreground">
        <p className="text-sm sm:text-base">Made with ❤️ by Anuj</p>
      </footer>
    </div>
  );
}
