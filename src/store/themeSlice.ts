import { createSlice } from "@reduxjs/toolkit";
export type ThemeState = {
  theme: string;
};
export const themeSlice = createSlice({
  name: "themeSlice",
  initialState: { theme: 'light' },
  reducers: {
    changeTheme(state: ThemeState) {
      return state.theme === 'light'
        ? { theme: 'dark' }
        : { theme: 'light' };
    },
  },
});

export const themeReducer = themeSlice.reducer;
export const { changeTheme } = themeSlice.actions;
