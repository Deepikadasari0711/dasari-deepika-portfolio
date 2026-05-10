import { createSlice } from "@reduxjs/toolkit";

type ThemeMode = "dark" | "light";

type ThemeState = {
  mode: ThemeMode;
};

const getInitialTheme = (): ThemeMode => {
  if (typeof window === "undefined") return "dark";
  const storedTheme = window.localStorage.getItem("theme-mode");
  if (storedTheme === "dark" || storedTheme === "light") return storedTheme;
  return "dark";
};

const initialState: ThemeState = {
  mode: getInitialTheme(),
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme(state) {
      state.mode = state.mode === "dark" ? "light" : "dark";
      window.localStorage.setItem("theme-mode", state.mode);
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
