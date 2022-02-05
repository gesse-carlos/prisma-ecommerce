import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from '../../types/Product';

interface ICartState {
  products: Product[],
  quantity: number,
};

const initialState: ICartState = {
  products: [],
  quantity: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct(state, action: PayloadAction<Product>) {
      state.products.push(action.payload);
      state.quantity += 1;
    },
    removeProduct(state, action: PayloadAction<number>) {
      state.products.filter((product) => product.id !== action.payload);
      state.products.forEach((product) => {
        if (product.id === action.payload) state.quantity -= product.quantity;
      });
    },
    increaseQuantity(state, action: PayloadAction<number>) {
      state.products.forEach((product, index) => {
        if (product.id === action.payload) {
          state.products[index].quantity += 1;
          state.quantity += 1;
        }
      });
    },
    decreaseQuantity(state, action: PayloadAction<number>) {
      state.products.forEach((product, index) => {
        if (product.id === action.payload) {
          state.products[index].quantity -= 1;
          state.quantity += 1;
        }
      });
    },
    clearCart(state) {
      state.products = [];
      state.quantity = 0;
    },
  },
});

export const cartActions = cartSlice.actions;
