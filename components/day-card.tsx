import { DayPlan } from "@/app/scheduler/page";
import { Card } from "./ui/card";

interface DayCardProps {
  dayPlan: DayPlan;
  onClick: () => void;
  isSelected: boolean;
}

export function DayCard({dayPlan,onClick,isSelected}:DayCardProps) {
  return <Card>
    
  </Card>;
}
