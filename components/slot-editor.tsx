"use client";
import { DayPlan, TimeSlot } from "@/app/scheduler/page";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { Clock, Plus, Save } from "lucide-react";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

interface SlotEditorProps {
  isOpen: boolean;
  onClose: () => void;
  dayPlan: DayPlan;
  onUpdate: (slots: TimeSlot[]) => void;
}

export function SlotEditor({
  isOpen,
  onClose,
  dayPlan,
  onUpdate,
}: SlotEditorProps) {
  const [slots, setSlots] = useState<TimeSlot[]>(dayPlan.slots);

  function addNewSlot() {
    const newSlot: TimeSlot = {
      id: Date.now().toString(),
      name: `Custom Slot ${slots.length + 1}`,
      time: "Custom Time",
      exercises: [],
    };
    setSlots([...slots, newSlot]);
  }

  function updateSlot(slotId: string, updatedSlot: TimeSlot) {
    setSlots((prev) =>
      prev.map((slot) => (slot.id === slotId ? updatedSlot : slot))
    );
  }

  function deleteSlot(slotId: string) {
    setSlots((prev) => prev.filter((slot) => slot.id !== slotId));
  }

  function handleSave() {
    onUpdate(slots);
    onClose();
  }
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto bg-background border-border">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-lg sm:text-xl text-foreground">
            <Clock className="h-4 w-4 sm:h-5 sm:w-5" />
            {dayPlan.day} {dayPlan.date}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6 sm:space-y-6">
          {slots.map((slot) => (
            <Card
              key={slot.id}
              className="border-0 shadow-md bg-muted/30 dark:bg-muted/20"
            >
              <CardHeader className="pb-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <CardTitle className="text-base sm:text-lg text-foreground">
                      {slot.name}
                    </CardTitle>
                    <Badge variant={"outline"} className="mt-1 text-xs">
                      {slot.time}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <Badge variant={"secondary"} className="text-xs">
                      {slot.exercises.length} exercise
                      {slot.exercises.length !== 1 ? "s" : " "}
                    </Badge>
                    {slots.length > 1 && (
                      <Button
                        variant={"outline"}
                        size={"sm"}
                        className="text-red-600 dark:text-red-400 
                        hover:text-red-700 dark:hover:text-red-300 text-xs"
                        onClick={() => deleteSlot(slot.id)}
                      >
                        Remove Slot
                      </Button>
                    )}
                  </div>
                </div>
              </CardHeader>
              <CardContent></CardContent>
            </Card>
          ))}

          <div className="flex flex-col sm:flex-row items-center justify-between pt-4 border-t border-border gap-4">
            <Button
              variant={"outline"}
              onClick={addNewSlot}
              className="flex items-center gap-2 w-full sm:w-auto"
            >
              <Plus className="h-4 w-4" />
              Add Time Slot
            </Button>

            <div className="flex items-center gap-2 w-full sm:w-auto">
              <Button
                variant={"outline"}
                onClick={onClose}
                className="flex-1 sm:flex-none "
              >
                Cancel
              </Button>
              <Button onClick={handleSave} className="flex items-center gap-2 flex-1 sm:flex-none">
                <Save className="h-4 w-4"/>
                Save Changes
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
