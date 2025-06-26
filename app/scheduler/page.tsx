import Navbar from "@/components/navbar";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "lucide-react";

export interface exercise {
  id: string;
  name: string;
  sets: string;
  reps: string;
  notes: string;
  image: string;
}

export interface TimeSlot {
  id: string;
  name: string;
  time: string;
  exercies: exercise[];
}

export interface DayPlan {
  day: string;
  date: string;
  slots: TimeSlot[];
}
export default function SchedulerPage() {
  return (
    <div className="bg-grid min-h-screen">
      <Navbar />

      <div className="container mx-auto px-4 py-8">
        <div className="mb-6 sm:mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
                Weekly Workout Planner
              </h1>
              <p className="text-muted-foreground text-sm sm:text-base">
                Plan and organise your fitness routine for the week.
              </p>
            </div>

            <div className="flex items-center gap-4">
              <Badge variant={"secondary"} className="text-xs sm:text-sm">
                <Calendar className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                Exercies Planned
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
