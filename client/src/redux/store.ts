import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import productReducer from "../redux/slices/productSlice"
import userReducer from "./slices/userSlice";
import AuthReducer from "./slices/authSlice";
export const store = configureStore({
  reducer: {
    
    auth: AuthReducer,
    userState: userReducer,
    product: productReducer,
  },
  devTools: process.env.NODE_ENV === "development",
  
});


export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
