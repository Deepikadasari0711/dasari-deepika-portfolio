import { FiMoon, FiSun } from "react-icons/fi";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { toggleTheme } from "../../features/theme/themeSlice";

export function ThemeToggle() {
  const mode = useAppSelector((state) => state.theme.mode);
  const dispatch = useAppDispatch();

  return (
    <button
      aria-label={`Switch to ${mode === "dark" ? "light" : "dark"} theme`}
      className="theme-toggle"
      onClick={() => dispatch(toggleTheme())}
      type="button"
    >
      {mode === "dark" ? <FiSun aria-hidden /> : <FiMoon aria-hidden />}
      <span>{mode === "dark" ? "Light" : "Dark"}</span>
    </button>
  );
}
