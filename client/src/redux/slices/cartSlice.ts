

// import { createSlice, PayloadAction, createSelector } from "@reduxjs/toolkit";
// import { RootState } from "redux/store";

// export interface CartState {
//   items: {[_id: string]: number}

// }

// const initialState: CartState ={
//   items: {}

// }

// const cartSlice = createSlice({
//   name: "cart",
//   initialState,
//   reducers: {
//     addToCart(state, action: PayloadAction<string>) {
//       const _id = action.payload;

//       if(state.items[_id]){
//         state.items[_id]++;
//       }else{
//         state.items[_id] = 1;
//       }
//           localStorage.setItem("cart", JSON.stringify({ items: state.items }));
//     }

//   }
// });

// export const { addToCart } = cartSlice.actions;

// export default cartSlice.reducer;

// export function getNumItems(state: RootState){
//   let numItems = 0;
//   for (let _id in state.cart.items){
//     numItems += state.cart.items[_id];
//   }
//   return numItems;
// }

// export const getMemorizedNumItems = createSelector(
//   (state: RootState) => state.cart.items,
//   (items) => {
//     console.log("calling getMemorizedNumItems")

//     let numItems = 0;
//     for (let _id in items) {
//       numItems += items[_id];

//     }
//     return numItems;
//   }
// )












import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "redux/store";
import { Product } from "types";

const setCart = () => {
  if (!localStorage.getItem("cart")) {
    const items: [] = [];
    const cartQuantity = 0;
    const total = 0;
    const quantity = 0;
    const cartPrice = 0;

    return { items, cartPrice, cartQuantity, total, quantity };
  }

  const cart = JSON.parse(localStorage.getItem("cart") || "[]");

  const items: [] = cart.items;
  const cartQuantity: number = items.length || 0;
  const total: number = items.length || 0;
  const quantity: number = items.length || 0;
  const cartPrice: number = items.length || 0;

  return { items, cartQuantity, cartPrice, quantity, total };
};
export interface CartProduct extends Product {
  amount: number;
  // item: [];
  items: { [_id: string]: number };
  //count: number;
  total: number;
  paid: boolean;
  quantity: number;
  cartQuantity: number;
  cartTotalQuantity: number;
  cartTotalAmount: number;
  cartPrice: number;
  _id: any;
  title: string;
  images: string;
  description: string;
  categories: string;
  size: string;
  price: string;
}

export interface CartState {
  items: { [_id: string]: number };
  //count: number;
  total: number;
  quantity: number;
  paid: boolean;
  amount: number;
  cartQuantity: number;
  cartTotalQuantity: number;
  cartTotalAmount: number;
  cartPrice: number;
  cartItem: {};
}

const initialState: CartState = {
  items: {},
  //count: setCart().count || 0,
  paid: false,
  total: 0,
  quantity: 0,
  cartQuantity: 0,
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
  cartPrice: 0,
  amount: 0,
  cartItem: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<string>) {
      const _id = action.payload;

      if (state.items[_id]) {
        state.items[_id]++;
      } else {
        state.items[_id] = 1;
      }
      localStorage.setItem("cart", JSON.stringify({ items: state.items }));
    },
  },
});

export const getcartProducts = (state: RootState) => state.cart;
//export const getcartTotalPrice = (state: RootState) => state.cart.reduce((acc: any, next: { amount: any; price: any; }) => acc += (next.amount * next.price) ,0);
export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;

export const getMemorizedNumItems = createSelector(
  (state: RootState) => state.cart.items,
  (items) => {
    console.log("calling getMemorizedNumItems");

    let numItems = 0;
    for (let _id in items) {
      numItems += items[_id];
    }
    return numItems;
  }
);





