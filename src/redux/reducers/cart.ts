import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from '../../types/Product';

interface ICartState {
  products: Product[],
};

const initialState: ICartState = {
  products: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct(state, action: PayloadAction<Product>) {
      state.products.push(action.payload);
    },
    removeProduct(state, action: PayloadAction<number>) {
      state.products.filter((product) => product.id !== action.payload);
    },
    increaseQuantity(state, action: PayloadAction<number>) {
      state.products.forEach((product, index) => {
        if (product.id === action.payload) state.products[index].quantity += 1;
      });
    },
    decreaseQuantity(state, action: PayloadAction<number>) {
      state.products.forEach((product, index) => {
        if (product.id === action.payload) state.products[index].quantity -= 1;
      });
    },
    clearCart(state) { state.products = [] },
  },
});

export const cartActions = cartSlice.actions;
