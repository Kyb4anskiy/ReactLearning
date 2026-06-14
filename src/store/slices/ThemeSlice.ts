import { createSlice } from "@reduxjs/toolkit";

type Theme = "light" | "dark";

type ThemeState = {
  theme: Theme;
};

const initialState: ThemeState = {
  theme: "light",
};

const ThemeSlice = createSlice({
  name: "theme",
  initialState: initialState,
  reducers: {
    switchTheme: (state) => {
      state.theme = state.theme === "light" ? "dark" : "light";
      console.log(state.theme);
    },
  },
});

export const { switchTheme } = ThemeSlice.actions;
export default ThemeSlice.reducer;
