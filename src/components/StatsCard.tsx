import { Card, CardContent } from "@/components/ui/card";
import { LineChart, Line, ResponsiveContainer, Tooltip, AreaChart, Area } from "recharts";
import { cn } from "@/lib/utils";

interface StatsCardProps {
  title: string;
  value: string;
  description?: string;
  data: Array<{ value: number }>;
  type?: "line" | "area";
  className?: string;
  gradient?: boolean;
  icon?: React.ReactNode;
}

const StatsCard = ({ 
  title, 
  value, 
  description,
  data, 
  type = "line",
  className,
  gradient = false,
  icon
}: StatsCardProps) => {
  return (
    <Card className={cn(
      "hover:border-primary/50 transition-colors bg-card",
      className
    )}>
      <CardContent className="pt-6">
        <div className="flex items-center justify-between mb-4">
          {icon && <div className="text-primary">{icon}</div>}
          <div className={cn("text-sm font-medium text-muted-foreground", {
            "ml-2": !!icon
          })}>{title}</div>
        </div>
        <div className="text-2xl font-bold mb-1">{value}</div>
        {description && (
          <div className="text-sm text-muted-foreground mb-4">{description}</div>
        )}
        <div className="h-[80px]">
          <ResponsiveContainer width="100%" height="100%">
            {type === "line" ? (
              <LineChart data={data}>
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="hsl(var(--primary))"
                  strokeWidth={2}
                  dot={false}
                />
                <Tooltip
                  contentStyle={{
                    background: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                  }}
                  labelStyle={{ display: "none" }}
                />
              </LineChart>
            ) : (
              <AreaChart data={data}>
                <defs>
                  {gradient && (
                    <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0}/>
                    </linearGradient>
                  )}
                </defs>
                <Area
                  type="monotone"
                  dataKey="value"
                  stroke="hsl(var(--primary))"
                  fill={gradient ? "url(#colorValue)" : "none"}
                  strokeWidth={2}
                />
                <Tooltip
                  contentStyle={{
                    background: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                  }}
                  labelStyle={{ display: "none" }}
                />
              </AreaChart>
            )}
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default StatsCard;