import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {},
});


// https://redux-toolkit.js.org/tutorials/typescript#define-root-state-and-dispatch-types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;