


import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser, User } from "types";


// interface IUserState {
//   user: IUser | null;
// }

export type UserState = {
  userInfo: User;
  loginStatus: boolean;
  error: string;
  token: string;
};

const initialUser = {
  _id: "",
  firstName: "",
  lastName: "",
  email: "",
};

const initialState: UserState = {
  userInfo: { ...initialUser },
  loginStatus: false,
  error: "",
  token: "",
};

export const userSlice = createSlice({
  initialState,
  name: "userProp",
  reducers: {
    logout: () => initialState,
    setUser: (state, action: PayloadAction<User>) => {
      state.userInfo = action.payload;
    },

    setLoginStatus: (state, action: PayloadAction<boolean>) => {
      state.loginStatus = action.payload;
    },
    setUserInfo: (state, action: PayloadAction<User>) => {
      state.userInfo = { ...action.payload };
    },
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
  },
});

export default userSlice.reducer;

export const { logout, setUser, setLoginStatus, setUserInfo, setToken } =
  userSlice.actions;