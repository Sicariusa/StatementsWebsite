import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface LoaderProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Loader({ className, ...props }: LoaderProps) {
  return (
    <div className={cn("animate-spin", className)} {...props}>
      <Loader2 className="w-full h-full" />
    </div>
  );
} 