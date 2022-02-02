import { configureStore } from "@reduxjs/toolkit";
import { cartSlice, shopSlice, themeSlice } from './reducers';

export const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    shop: shopSlice.reducer,
    theme: themeSlice.reducer,
  },
});


// https://redux-toolkit.js.org/tutorials/typescript#define-root-state-and-dispatch-types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;