import { DayPlan } from "@/app/scheduler/page";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Calendar, Clock, Dumbbell } from "lucide-react";

interface DayCardProps {
  dayPlan: DayPlan;
  onClick: () => void;
  isSelected: boolean;
}

export function DayCard({ dayPlan, onClick, isSelected }: DayCardProps) {
  const totalExercises = dayPlan.slots.reduce(
    (total, slot) => total + slot.exercises.length,
    0
  );
  const activeSessions = dayPlan.slots.filter(
    (slot) => slot.exercises.length > 0
  ).length;

  return (
    <Card
      className={`cursorr-pointer transition-all duration-200 hover:shadow-lg bg-card/80 backdrop-blur
  border-0 shadow-md hover:scale-[1.02] ${
    isSelected ? "ring-2 ring-primary shadow-xl scale-[1.02]" : ""
  }
  `}
      onClick={onClick}
    >
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-base sm:text-lg font-semibold text-foreground">
            {dayPlan.day}
          </CardTitle>
          <Badge variant={"outline"} className="text-xs">
            <Calendar className="h-3 w-3 mr-1" />
            {dayPlan.date}
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="pt-0">
        <div className="space-y-3">
          <div className="flex items-center justify-between text-xs sm:text-sm">
            <div className="flex items-center gap-1 text-muted-foreground">
              <Clock className="h-3 sm:h-4 w-3 sm:w-4" />
              {activeSessions} session{activeSessions !== 1 ? "s" : " "}
            </div>
            <div className="flex items-center gap-1 text-muted-foreground">
              <Dumbbell className="h-3 w-3 sm:h-4 sm:w-4" />
              {totalExercises} exercise{totalExercises !== 1 ? "s" : ""}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
