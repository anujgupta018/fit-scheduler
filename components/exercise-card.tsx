"use client";
import { exercise, TimeSlot } from "@/app/scheduler/page";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Copy, Dumbbell, Edit3, Plus, Trash2 } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Textarea } from "./ui/textarea";

interface ExerciseCardProps {
  slot: TimeSlot;
  onUpdate: (updatedSlot: TimeSlot) => void;
}
console.log("Exercise card render ho rha hai");
export function ExerciseCard({ slot, onUpdate }: ExerciseCardProps) {
  const [editingExercise, setEditingExercise] = useState<string | null>(null);

  function addExercise() {
    const newExercise: exercise = {
      id: Date.now().toString(),
      name: "",
      reps: "",
      sets: "",
      notes: "",
    };
    const updatedSlot = {
      ...slot,
      exercises: [...slot.exercises, newExercise],
    };
    onUpdate(updatedSlot);
    setEditingExercise(newExercise.id);
  }

  function updateExercise(exerciseId: string, updates: Partial<exercise>) {
    const updatedSlot = {
      ...slot,
      exercises: slot.exercises.map((ex) =>
        ex.id === exerciseId ? { ...ex, ...updates } : ex
      ),
    };
    onUpdate(updatedSlot);
  }

  function deleteExercise(exerciseId: string) {
    const updatedSlot = {
      ...slot,
      exercises: slot.exercises.filter((ex) => ex.id !== exerciseId),
    };
    onUpdate(updatedSlot);
  }

  function duplicateExercise(Exercise: exercise) {
    const duplicatedExercise: exercise = {
      ...Exercise,
      id: Date.now().toString(),
      name: `${Exercise.name} (Copy)`,
    };
    const updatedSlot = {
      ...slot,
      exercises: [...slot.exercises, duplicatedExercise],
    };
    onUpdate(updatedSlot);
  }
  return (
    <div className="space-y-3 sm:space-y-4">
      {slot.exercises.map((exercised) => (
        <Card key={exercised.id} className="border border-border bg-card">
          <CardHeader className="pb-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div
                  className="w-10 sm:w-12 h-10 sm:h-12 bg-muted rounded-lg flex items-center 
                        justify-center flex-shrink-0"
                >
                  <Dumbbell className="h-5 w-5 sm:h-6 sm:w-6 text-muted-foreground" />
                </div>
                <div className="flex-1 min-w-0">
                  {editingExercise === exercised.id ? (
                    <Input
                      value={exercised.name}
                      onChange={(e) =>
                        updateExercise(exercised.id, { name: e.target.value })
                      }
                      placeholder="Exercise name"
                      className="font-semibold text-sm sm:text-base"
                      onBlur={() => setEditingExercise(null)}
                      onKeyDown={(e) =>
                        e.key === "Enter" && setEditingExercise(null)
                      }
                      autoFocus
                    />
                  ) : (
                    <CardTitle
                      className="text-sm sm:text-base cursor-pointer hover:text-primary
                    truncate"
                      onClick={() => setEditingExercise(exercised.id)}
                    >
                      {exercised.name || "Unititled Exercise"}
                    </CardTitle>
                  )}
                </div>
              </div>

              <div className="flex items-center gap-1 flex-shrink-0">
                <Button
                  variant={"ghost"}
                  size={"sm"}
                  onClick={() => setEditingExercise(exercised.id)}
                >
                  <Edit3 className="h-3 w-3 sm:h-4 sm:w-4" />
                </Button>
                <Button
                  variant={"ghost"}
                  size={"sm"}
                  onClick={() => duplicateExercise(exercised)}
                >
                  <Copy className="h-3 w-3 sm:h-4 sm:w-4" />
                </Button>
                <Button
                  variant={"ghost"}
                  size={"sm"}
                  onClick={() => deleteExercise(exercised.id)}
                  className="text-red-600 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300"
                >
                  <Trash2 className="h-3 w-3 sm:h-4 sm:w-4" />
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-4">
              <div>
                <label
                  className="text-xs sm:text-sm font-medium text-muted-foreground
                    mb-1 block"
                >
                  Sets
                </label>
                <Input
                  value={exercised.sets}
                  onChange={(e) =>
                    updateExercise(exercised.id, { sets: e.target.value })
                  }
                  placeholder="e.g. , 3"
                  className="text-sm"
                />
              </div>
              <div>
                <label className="text-xs sm:text-sm font-medium text-muted-foreground mb-1 block">
                  Reps
                </label>
                <Input
                  value={exercised.reps}
                  onChange={(e) =>
                    updateExercise(exercised.id, { reps: e.target.value })
                  }
                  placeholder="e.g. , 12"
                  className="text-sm"
                />
              </div>
              <div className="flex items-end">
                {exercised.sets && exercised.reps && (
                  <Badge variant={"secondary"} className="h-fit text-xs">
                    {exercised.sets} × {exercised.reps}
                  </Badge>
                )}
              </div>
            </div>

            <div>
              <label className="text-xs sm:text-sm font-medium text-muted-foreground
              mb-1 block">Notes</label>
              <Textarea
                value={exercised.notes}
                onChange={(e)=>updateExercise(exercised.id,{notes:e.target.value})}
                placeholder="Add notes about form , weight, progress or modifications..."
                rows={2}
                className="text-sm resize-none"
              />
            </div>
          </CardContent>
        </Card>
      ))}
      <Button
        variant={"outline"}
        onClick={addExercise}
        className="w-full border-2 border-dashed border-muted-foreground/25 hover:border-primary hover:bg-primary/5
      py-6 sm:py-8 text-sm sm:text-base"
      >
        <Plus className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
        Add Exercise
      </Button>
    </div>
  );
}
