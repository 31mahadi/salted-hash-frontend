import { Shield } from "lucide-react";

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 border-2 border-primary mb-4 animate-pulse">
          <Shield className="h-8 w-8 text-primary" />
        </div>
        <p className="text-foreground/70">Loading...</p>
      </div>
    </div>
  );
}

