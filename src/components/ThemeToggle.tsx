import { useState } from "react";
import { Moon, Sun } from "lucide-react";

const isLight = () => document.documentElement.classList.contains("light");

export function ThemeToggle() {
  const [light, setLight] = useState(isLight);

  function flip() {
    const next = !light;
    document.documentElement.classList.toggle("light", next);
    setLight(next);
    try {
      localStorage.setItem("theme", next ? "light" : "dark");
    } catch {
      /* private mode, ignore */
    }
  }

  return (
    <button
      onClick={flip}
      aria-label={light ? "Switch to dark mode" : "Switch to light mode"}
      className="grid h-8 w-8 place-items-center rounded-full border border-line hover:border-accent"
    >
      {light ? <Moon size={15} /> : <Sun size={15} />}
    </button>
  );
}
