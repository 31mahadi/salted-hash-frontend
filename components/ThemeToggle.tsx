"use client";

import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    console.log('Current theme:', theme);
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    console.log('Switching to:', newTheme);
    setTheme(newTheme);
  };

  if (!mounted) {
    return (
      <Button
        variant="outline"
        size="sm"
        className="relative overflow-hidden"
        disabled
      >
        <div className="flex items-center gap-2">
          <Sun className="h-4 w-4" />
          <span>Theme</span>
        </div>
      </Button>
    );
  }

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={toggleTheme}
      className="relative overflow-hidden"
    >
      <div className="flex items-center gap-2">
        {theme === 'dark' ? (
          <>
            <Sun className="h-4 w-4" />
            <span>Light</span>
          </>
        ) : (
          <>
            <Moon className="h-4 w-4" />
            <span>Dark</span>
          </>
        )}
      </div>
    </Button>
  );
}
