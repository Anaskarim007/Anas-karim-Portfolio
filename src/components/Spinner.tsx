import { Loader2 } from "lucide-react";

export function Spinner({ label = "Loading your workspace…" }: { label?: string }) {
  return (
    <div className="flex flex-col items-center justify-center gap-3 py-24 text-muted-foreground">
      <Loader2 className="size-7 animate-spin text-primary" />
      <p className="text-sm">{label}</p>
    </div>
  );
}
