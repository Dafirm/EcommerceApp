import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const setCart = () => {
  if (!localStorage.getItem("cart")) {
    const items: [] = [];
    const count = 0;

    const paid = false;
    return { items, count, paid };
  }

  const cart = JSON.parse(localStorage.getItem("cart") || "[]");

  const items: [] = cart.items;
  const count: number = items.length || 0;
  const paid: boolean = cart.paid;

  return { items, count, paid };
};

export type CartProduct = {
  items: any;
  _id: string;
  title: string;
  images: string;
  description: string;
  categories: string;
  sizes: string;
  price: string;
  cartQuantity: number;
  count?:number
};

export interface CartState {
  items: CartProduct[];
  count: number;
  paid: boolean;
}

const initialState: CartState = {
  items: setCart().items || [],
  count: setCart().count || 0,
  paid: setCart().paid || false,
};





export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state: CartState, action: PayloadAction<CartProduct>) => {
      state.items = [...state.items, action.payload];
      state.count += 1;
      state.paid = false;
      localStorage.setItem(
        "cart",
        JSON.stringify({ items: state.items, paid: state.paid })
      );
      console.log("addToCart:", addToCart);
    },
    // removeFromCart: (state: CartState, action: PayloadAction<string>) => {
    //   state.items = state.items.filter(
    //     (item) => item.id !== action.payload
    //   );
    //   state.count -= 1;
    //   localStorage.setItem("cart", JSON.stringify({ items: state.items }));
    // },
    removeFromCart: (
      state: CartState,
      action: PayloadAction<{ _id: String; removeAll?: boolean }>
    ) => {
      // state.items = [...state.items, action.payload];
      // if state.count is 1
      // remove the item
      // and will not decrement
        state.count -= 1;
      
      if (state.count > 0) {
        // reduce total price
        state.paid = false;
        localStorage.setItem(
          "cart",
          JSON.stringify({ items: state.items, paid: state.paid })
        );
      }
      console.log(state.items.length)
      if (state.count === 0 || action.payload.removeAll) {
        const newList = state.items.filter(
          (item) => item._id !== action.payload._id
        );
        console.log(newList)
        state.items = newList;
        state.count = 0;
        localStorage.setItem(
          "cart",
          JSON.stringify({ items: state.items, paid: state.paid })
        );
      }

      //console.log("removeFromCart:", removeFromCart);
    },
    emptyCart: (state: CartState, action: PayloadAction<CartProduct>) => {
      state.items = [];
      state.count = 0;
      state.paid = false;
      localStorage.setItem(
        "cart",
        JSON.stringify({ items: state.items, paid: state.paid })
      );
      console.log("emptyCart:", emptyCart);
    },
    setPaid: (state: CartState, action: PayloadAction<boolean>) => {
      state.paid = action.payload;
      localStorage.setItem(
        "cart",
        JSON.stringify({ items: state.items, paid: state.paid })
      );
    },
  },
});

export const { addToCart, removeFromCart, emptyCart, setPaid } =
  cartSlice.actions;

export default cartSlice.reducer;
