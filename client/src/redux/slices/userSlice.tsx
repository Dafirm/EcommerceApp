
// import { createSlice } from "@reduxjs/toolkit";
// import {
//   registerUser,
//   userLogin,
//   getUserDetails,
// } from "redux/Action/userAction";
// import { User } from "types";


// // initialize userToken from local storage
// const userToken = localStorage.getItem('userToken')
//   ? localStorage.getItem('userToken')
//   : null

//   export type usersState = {
//     users: User[];
//     user: User | null;
//     isLoading: boolean;
//     error: string;
//     isSuccess: boolean;
//     isError: boolean;
//   };

// const initialState = {
//   users:User[],
//   user:null,
//   loading: false,
//   userInfo: {}, // for user object
//   userToken: "", // for storing the JWT
//   error: "",
//   success: false, // for monitoring the registration process.
// };

// const userSlice = createSlice({
//   name: "user",
//   initialState,
//   reducers: {},
//   extraReducers(builder) {
//     // register user
//     builder.addCase(registerUser.pending, (state) => {
//       state.loading = true;
//       state.error = "";
//     });
//     builder.addCase(registerUser.fulfilled, (state, action) => {
//       state.loading = false;
//       state.success = true;
//     });
//     builder.addCase(registerUser.rejected, (state, action) => {
//       state.loading = false;
//       state.error = "Something went wrong";
//     });

//     // login user
//     builder.addCase(userLogin.pending, (state) => {
//       state.loading = true;
//       state.error = "";
//     });
//     builder.addCase(userLogin.fulfilled, (state, { payload }) => {
//       state.loading = false;
//       state.userInfo = payload;
//       state.userToken = payload.userToken;
//     });
//     builder.addCase(userLogin.rejected, (state, { payload }) => {
//       state.loading = false;
//       state.error = "Something went wrong";
//     });

//     // login user
//     builder.addCase(getUserDetails.pending, (state) => {
//       state.loading = true;
//       state.error = "";
//     });
//     builder.addCase(getUserDetails.fulfilled, (state, { payload }) => {
//       state.loading = false;
//       state.userInfo = payload;
      
//     });
//     builder.addCase(getUserDetails.rejected, (state, { payload }) => {
//       state.loading = false;
//       state.error = "Something went wrong";
//     });
//   },
// });

// export default userSlice.reducer;


import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "types";


interface IUserState {
  user: IUser | null;
}

const initialState: IUserState = {
  user: null,
};

export const userSlice = createSlice({
  initialState,
  name: "userSlice",
  reducers: {
    logout: () => initialState,
    setUser: (state, action: PayloadAction<IUser>) => {
      state.user = action.payload;
    },
  },
});

export default userSlice.reducer;

export const { logout, setUser } = userSlice.actions;