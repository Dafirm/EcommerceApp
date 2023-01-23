import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../api";
import { Decoded, User } from "../../types";

export type LoginProps = {
  formValue: any;
  navigate: any;
  toast: any;
  result?: any;
};

export const login = createAsyncThunk(
  "auth/login",
  async ({ formValue, navigate, toast }: LoginProps, { rejectWithValue }) => {
    try {
      const response = await api.signIn(formValue);
      toast.success("Login Successfully");
      navigate("/");
      return response.data;
    } catch (err: any) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const register = createAsyncThunk(
  "auth/register",
  async ({ formValue, navigate, toast }: LoginProps, { rejectWithValue }) => {
    try {
      const response = await api.signUp(formValue);
      toast.success("Register Successfully");
      navigate("/");
      return response.data;
    } catch (err: any) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const googleSignIn = createAsyncThunk(
  "auth/googleSignIn",
  async ({ result, navigate, toast }: LoginProps, { rejectWithValue }) => {
    try {
      const response = await api.googleSignIn(result);
      toast.success("Google Sign-in Successfully");
      navigate("/");
       console.log("res:", result);
      return response.data;
     
    } catch (err: any) {
      return rejectWithValue(err.response.data);
    }
    
  }
);
const initUser = {
  email: "",
  firstName: "",
  hash: "",
  lastName: "",
  country:"",
  city:"",

  salt: "",
  __v: 0,
  _id: "",
};
const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: {result:initUser, token:""},
    error: "",
    loading: false,
    result: null,
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setLogout: (state, action) => {
      localStorage.clear();
      state.user = { result: initUser, token: "" };
    },
  },
  extraReducers(builder) {
    builder.addCase(login.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.loading = false;
      localStorage.setItem("profile", JSON.stringify({ ...action.payload }));
      state.user = action.payload;
    });
    builder.addCase(login.rejected, (state) => {
      state.loading = false;
      state.error = "Your email or password is incorrect";
    });
    builder.addCase(register.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(register.fulfilled, (state, action) => {
      state.user = action.payload;
      localStorage.setItem("profile", JSON.stringify({ ...action.payload }));
      state.loading = false;
    });
    builder.addCase(register.rejected, (state) => {
      state.loading = false;
      state.error = "Something went wrong";
    });
    builder.addCase(googleSignIn.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(googleSignIn.fulfilled, (state, action) => {
      state.user = action.payload;
      localStorage.setItem("profile", JSON.stringify({ ...action.payload }));
      state.loading = false;
    });
    builder.addCase(googleSignIn.rejected, (state) => {
      state.loading = false;
      state.error = "Enter a valid email";
    });
  },
});

export const { setUser, setLogout } = authSlice.actions;

export default authSlice.reducer;
