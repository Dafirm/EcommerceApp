import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import { NavigateFunction } from "react-router-dom";
import * as api from "../api";


export type ProductsProps = {
  formValue: any;
  navigate: NavigateFunction;
  toast: any;
  result: any;
  updatedProductData: any;
  id: string;
};

export const createProduct = createAsyncThunk(
  "product/createProduct",
  async (
    { formValue, navigate, toast }:ProductsProps,
    { rejectWithValue }
  ) => {
    try {
      const response = await api.createProduct(formValue);
      toast.success("Product Added Successfully");
      navigate("/");
      return response.data;
    } catch (err: any) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const findAll = createAsyncThunk(
  "product/findAll",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.findAll();
      return response.data;
    } catch (err: any) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const findById = createAsyncThunk(
  "product/findById",
  async (id:string, { rejectWithValue }) => {
    try {
      const response = await api.findById(id);
      return response.data;
    } catch (err: any) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const getProductsByUser = createAsyncThunk(
  "product/getProductsByUser",
  async (userId, { rejectWithValue }) => {
    try {
      const response = await api.getProductsByUser(userId);
      return response.data;
    } catch (err: any) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const deleteProduct = createAsyncThunk(
  "product/deleteProduct",
  async ({ id, toast }:ProductsProps, { rejectWithValue }) => {
    try {
      const response = await api.deleteProduct(id);
      toast.success("Tour Deleted Successfully");
      return response.data;
    } catch (err: any) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const updateProduct = createAsyncThunk(
  "product/updateProduct",
  async (
    { id, updatedProductData, toast, navigate }: ProductsProps,
    { rejectWithValue }
  ) => {
    try {
      const response = await api.updateProduct(updatedProductData, id);
      toast.success("Tour Updated Successfully");
      navigate("/");
      return response.data;
    } catch (err: any) {
      return rejectWithValue(err.response.data);
    }
  }
);
const item = {
      _id: "",
  title: "",
  description:"",
  sizes:"",
  images: "",
  categories: "",
  price: "",
  }
const productSlice = createSlice({
  name: "products",
  initialState: {
    item ,
    items: [],
    userProducts: [],

    searchedterms:"",
    error: "",
    loading: false,
    _id: "",
  },

  reducers: {
    handleSearch: (state, action) => {
      const searchBy = action.payload.toLowerCase();
      state.searchedterms = searchBy
    },
  },
  extraReducers(builder) {
    builder.addCase(createProduct.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(createProduct.fulfilled, (state, action) => {
      state.loading = false;
      state.item = action.payload;
    });
    builder.addCase(createProduct.rejected, (state) => {
      state.loading = false;
      state.error = "something went wrong";
    });

    builder.addCase(findAll.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(findAll.fulfilled, (state, action) => {
      state.loading = false;
      state.items = action.payload;
    });
    builder.addCase(findAll.rejected, (state) => {
      state.loading = false;
      state.error = "something went wrong";
    });

    builder.addCase(findById.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(findById.fulfilled, (state, action) => {
      state.loading = false;
      state.item = action.payload;
    });
    builder.addCase(findById.rejected, (state) => {
      state.loading = false;
      
      state.error = "something went wrong";
    });

    builder.addCase(getProductsByUser.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getProductsByUser.fulfilled, (state, action) => {
      state.loading = false;
      state.userProducts = action.payload;
    });
    builder.addCase(getProductsByUser.rejected, (state) => {
      state.loading = false;
      state.error = "something went wrong";
    });

    builder.addCase(deleteProduct.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(deleteProduct.fulfilled, (state, action) => {
      state.loading = false;
      const {
        arg: { id },
      } = action.meta;
      if (id) {
        state.userProducts = state.userProducts.filter(
          (item: any) => item._id !== id
        );
        state.items = state.items.filter((item: any) => item._id !== id);
      }
    });
    builder.addCase(deleteProduct.rejected, (state) => {
      state.loading = false;
      state.error = "something went wrong";
    });

    builder.addCase(updateProduct.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(updateProduct.fulfilled, (state, action) => {
      state.loading = false;
      console.log("action", action);
      const {
        arg: { id },
      } = action.meta;
      if (id) {
        state.userProducts = state.userProducts.filter((item: any) =>
          item._id ? action.payload : item
        );
        state.items = state.items.filter((item: any) =>
          item._id == id ? action.payload : item
        );
      }
    });
    builder.addCase(updateProduct.rejected, (state) => {
      state.loading = false;
      state.error = "something went wrong";
    });
  },
});
export const { handleSearch } = productSlice.actions;
export default productSlice.reducer;
