"use client";

import { DayCard } from "@/components/day-card";
import Navbar from "@/components/navbar";
import { SlotEditor } from "@/components/slot-editor";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock } from "lucide-react";
import { useEffect, useState } from "react";

export interface exercise {
  id: string;
  name: string;
  sets: string;
  reps: string;
  notes: string;

}

export interface TimeSlot {
  id: string;
  name: string;
  time: string;
  exercises: exercise[];
}

export interface DayPlan {
  day: string;
  date: string;
  slots: TimeSlot[];
}

const daysofWeek = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const defaultSlots = [
  { id: "1", name: "Morning", time: "6:00 AM - 9:00 AM", exercises: [] },
  { id: "2", name: "Afternoon", time: "12:00 PM - 3:00 PM", exercises: [] },
  { id: "3", name: "Evening", time: "6:00 PM - 9:00 PM", exercises: [] },
];
export default function SchedulerPage() {
  const [weekPlan, setWeekPlan] = useState<DayPlan[]>([]);
  const [selectedDay, setSelectedDay] = useState<string | null>(null);
  const [isSlotEditorOpen, setIsSlotEditorOpen] = useState(false);

  useEffect(() => {
    const savedPlan = localStorage.getItem("weekPlan");

    const getThisMonday = () => {
      const today = new Date();
      const monday = new Date(
        today.setDate(today.getDate() - today.getDay() + 1)
      );
      return monday.toDateString();
    };

    if (savedPlan) {
      const parsedPlan = JSON.parse(savedPlan);

      const savedMonday = parsedPlan[0]?.weekStart || null;
      const currentMonday = getThisMonday();

      if (savedMonday === currentMonday) {
        setWeekPlan(parsedPlan);
        return;
      }
    }
    const thisMonday = new Date();
    thisMonday.setDate(thisMonday.getDate() - thisMonday.getDay() + 1);
    const weekStartStr = thisMonday.toDateString();

    const initialPlan = daysofWeek.map((day, index) => {
      const targetDate = new Date(thisMonday);
      targetDate.setDate(thisMonday.getDate() + index);

      return {
        day,
        date: targetDate.toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
        }),
        weekStart: weekStartStr, // save for weekly reset logic
        slots: defaultSlots.map((slot) => ({ ...slot, exercises: [] })),
      };
    });

    setWeekPlan(initialPlan);
  }, []);

  useEffect(() => {
    if (weekPlan.length > 0) {
      localStorage.setItem("weekPlan", JSON.stringify(weekPlan));
    }
  }, [weekPlan]);

  // const getDateForDay = (dayIndex: number) => {
  //   const today = new Date();
  //   const monday = new Date(
  //     today.setDate(today.getDate() - today.getDay() + 1)
  //   );
  //   const targetDate = new Date(monday);
  //   targetDate.setDate(monday.getDate() + dayIndex);
  //   return targetDate.toLocaleDateString("en-US", {
  //     month: "short",
  //     day: "numeric",
  //   });
  // };

  function handleDayClick(day: string) {
    setSelectedDay(day);
    setIsSlotEditorOpen(true);
  }
  function updateDayPlan(day: string, updatedSlots: TimeSlot[]) {
    setWeekPlan((prev) =>
      prev.map((dayPlan) =>
        dayPlan.day === day ? { ...dayPlan, slots: updatedSlots } : dayPlan
      )
    );
  }
  const selectedDayPlan = weekPlan.find((plan) => plan.day === selectedDay);
  const totalExercises = weekPlan.reduce(
    (total, day) =>
      total +
      day.slots.reduce((dayTotal, slot) => dayTotal + slot.exercises.length, 0),
    0
  );
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
                {totalExercises} Exercies Planned
              </Badge>
            </div>
          </div>
        </div>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-3
        sm:gap-4 mb-6 sm:mb-8"
        >
          {weekPlan.map((dayPlan) => (
            <DayCard
              key={dayPlan.day}
              dayPlan={dayPlan}
              onClick={() => handleDayClick(dayPlan.day)}
              isSelected={selectedDay === dayPlan.day}
            />
          ))}
        </div>

        <Card className="mb-6 sm:mb-8 bg-card/80 backdrop-blur border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
              <Clock className="h-4 w-4 sm:h-5 sm:w-5" />
              Weekly Summary
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-primary">
                  {totalExercises}
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground">
                  Total Exercises
                </div>
              </div>

              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-green-600 dark:text-green-400 ">
                  {
                    weekPlan.filter((day) =>
                      day.slots.some((slot) => slot.exercises.length > 0)
                    ).length
                  }
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground">
                  Active Days
                </div>
              </div>

              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-blue-600 dark:text-blue-400">
                  {weekPlan.reduce(
                    (total, day) =>
                      total +
                      day.slots.filter((slot) => slot.exercises.length > 0)
                        .length,
                    0
                  )}
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground">
                  Planned Sessions
                </div>
              </div>

              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-purple-600 dark:text-purple-400">
                  {Math.round(
                    (weekPlan.filter((day) =>
                      day.slots.some((slot) => slot.exercises.length > 0)
                    ).length /
                      7) *
                      100
                  )}
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground">
                  Week Completion
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {selectedDayPlan && (
          <SlotEditor
            isOpen={isSlotEditorOpen}
            onClose={() => setIsSlotEditorOpen(false)}
            dayPlan={selectedDayPlan}
            onUpdate={(updatedSlots) =>
              updateDayPlan(selectedDay!, updatedSlots)
            }
          />
        )}
      </div>
    </div>
  );
}
