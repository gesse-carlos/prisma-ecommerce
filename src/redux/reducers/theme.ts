import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { dark, light } from "../../styles/themes";

interface ITheme {
  title: string;

  colors: {
      primary: string;
      secondary: string;
      tertiary: string;

      white: string;
      black: string;
      gray: string;

      success: string;
      info: string;
      warning: string;
  };
};

const initialState: ITheme = dark;

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme (state) {
      if (state.title === 'dark') {
        return state = light;
      }
      return state = dark;
    }
  },
});

export const themeActions = themeSlice.actions;
