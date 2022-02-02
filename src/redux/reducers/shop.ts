import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IShopState {
  categoryId: string,
  query: string,
}

const initialState: IShopState = {
  categoryId: '',
  query: '',
}

export const shopSlice = createSlice({
  name: 'shop',
  initialState,
  reducers: {
    setCategoryId(state, action: PayloadAction<string>) {
      state.categoryId = action.payload;
    },
    setQuery(state, action: PayloadAction<string>) {
      state.query = action.payload;
    },
  },
});

export const shopActions = shopSlice.actions;
