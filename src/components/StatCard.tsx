import { ReactNode } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface StatCardProps {
  title: string;
  value: string | number;
  icon: ReactNode;
  trend?: {
    value: string;
    positive: boolean;
  };
  className?: string;
  variant?: "default" | "success" | "warning" | "danger";
}

const StatCard = ({ title, value, icon, trend, className, variant = "default" }: StatCardProps) => {
  const getVariantStyles = () => {
    switch (variant) {
      case "success":
        return "border-success/20 bg-success/5";
      case "warning":
        return "border-warning/20 bg-warning/5";
      case "danger":
        return "border-destructive/20 bg-destructive/5";
      default:
        return "";
    }
  };

  return (
    <Card className={cn("shadow-card hover:shadow-glow/20 transition-all duration-300", getVariantStyles(), className)}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
        <div className="text-muted-foreground">{icon}</div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        {trend && (
          <p className={cn(
            "text-xs flex items-center gap-1 mt-1",
            trend.positive ? "text-success" : "text-destructive"
          )}>
            <span>{trend.positive ? "↗" : "↘"}</span>
            {trend.value}
          </p>
        )}
      </CardContent>
    </Card>
  );
};

export default StatCard;