type ThemeMode = "matrix" | "sunset";

interface ThemeToggleProps {
  theme: ThemeMode;
  onChange: (theme: ThemeMode) => void;
}

export function ThemeToggle({ theme, onChange }: ThemeToggleProps) {
  return (
    <div className="theme-switcher" role="group" aria-label="Selector de tema">
      <button
        type="button"
        className={`theme-option ${theme === "matrix" ? "is-active" : ""}`}
        onClick={() => onChange("matrix")}
        aria-pressed={theme === "matrix"}
      >
        Noche / Matrix
      </button>

      <button
        type="button"
        className={`theme-option ${theme === "sunset" ? "is-active" : ""}`}
        onClick={() => onChange("sunset")}
        aria-pressed={theme === "sunset"}
      >
        Día / Sunset
      </button>
    </div>
  );
}
