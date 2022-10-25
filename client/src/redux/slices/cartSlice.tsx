import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import * as api from "../api";
import { AddToCartAction, Cart, RemoveFromCartAction } from "../../types";


export const findById = createAsyncThunk(
  "product/findById",
  async (id, { rejectWithValue }) => {
    try {
      const response = await api.findById(id);
      return response.data;
    } catch (err: any) {
      return rejectWithValue(err.response.data);
    }
  }
);


type CartState = {
  items: Cart[];
};
const initialState: CartState = {
  items: [],
};
export const CartAdd = createSlice({
  name: "Cart",
  initialState,
  reducers: {
    addToCart: (state, action: AddToCartAction) => {
            const { title, images, description, categories, size, price } =
              action.payload;
            const newCart = { title, images, description, categories, size, price };

      const isDuplicate = state.items.some(
        (item) => item.title === newCart.title
      );
      if (isDuplicate) return;

      state.items = [...state.items, newCart];
    },
    removeFromCart: (state, action: RemoveFromCartAction) => {
      const filteredItems = state.items.filter(
        (item) => item.title !== action.payload.title
      );
      state.items = filteredItems;
    },
  },
});

export const { addToCart, removeFromCart } = CartAdd.actions;
export default CartAdd.reducer;

