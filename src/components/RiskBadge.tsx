import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type RiskLevel = "low" | "medium" | "high";

interface RiskBadgeProps {
  level: RiskLevel;
  className?: string;
}

const RiskBadge = ({ level, className }: RiskBadgeProps) => {
  const getRiskConfig = (level: RiskLevel) => {
    switch (level) {
      case "low":
        return {
          label: "🟢 Low Risk",
          className: "bg-success/10 text-success border-success/20",
        };
      case "medium":
        return {
          label: "🟡 Medium Risk",
          className: "bg-warning/10 text-warning border-warning/20",
        };
      case "high":
        return {
          label: "🔴 High Risk",
          className: "bg-destructive/10 text-destructive border-destructive/20",
        };
    }
  };

  const config = getRiskConfig(level);

  return (
    <Badge className={cn(config.className, className)}>
      {config.label}
    </Badge>
  );
};

export default RiskBadge;