"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Loader2, Moon, Sun } from "lucide-react";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  function changeTheme() {
    if (theme === "light") setTheme("dark");
    else setTheme("light");
  }

  // 클라이언트에서 렌더가 끝난 후에만 표시
  useEffect(() => {
    setMounted(true);
  }, [setMounted]);

  if (!mounted) {
    return (
      <button disabled className="opacity-70">
        <Loader2 className="h-4 w-4 animate-spin" />
      </button>
    );
  }

  return (
    <button onClick={changeTheme} className="opacity-70">
      {theme === "light" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}
