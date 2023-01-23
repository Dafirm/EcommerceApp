import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GiPreviousButton } from "react-icons/gi";
import { toast } from "react-toastify";
import { Product } from "types";
import * as api from "../api";

export type ProductsProps = {
  formValue?: any;
  navigate?: any;
  toast?: any;
  result?: any;
  updatedProductData?: any;
  _id?: string;
  data?: any;
  product?: {};
  products?: never[];
};
export type deleteProductsProps = {
  _id: string;
  products: never[];
  toast?: any;
  navigate?: any;
};

export const createProduct = createAsyncThunk(
  "product/createProduct",
  async (
    { formValue, navigate, toast }: ProductsProps,
    { rejectWithValue }
  ) => {
    try {
      const response = await api.createProduct(formValue);
      toast.success("Product Added Successfully");
      navigate("/dashboard");
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
  async (id: string, { rejectWithValue }) => {
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
  async ({ _id, products }: deleteProductsProps, { rejectWithValue }) => {
    try {
      const response = await api.deleteProduct(_id);
      toast.success("Product Deleted Successfully");
      return products.filter(
        (val: Product) => val._id.toLowerCase().indexOf(_id) != 0
      );
    } catch (err: any) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const updateProduct = createAsyncThunk(
  "product/updateProduct",
  async ({ formValue, _id, products }: ProductsProps, { rejectWithValue }) => {
    try {
      const response = await api.updateProduct(formValue, _id);
    
      // filter for the product you wanna update const productss =[{id:1},{id:2, name: y}]
      // make the updtae const updatedProduct = {id:2, name:x}
      // slot the updated value back return and return it as payload
      // return [...products,updatedProduct]
      toast.success("Product Updated Successfully");
      return response.data;
    } catch (err: any) {
      return rejectWithValue(err.response.data);
    }
  }
);

const item = {
  _id: "",
  title: "",
  description: "",
  size: "",
  images: "",
  category: "",
  price: "",
};

const productSlice = createSlice({
  name: "products",
  initialState: {
    item,
    products: [],
    userProducts: [],
    filteredItems: [],
    searchedterms: "",
    error: "",
    loading: false,
  },
  reducers: {
    handleSearch: (state, action) => {
      const searchBy = action.payload.toLowerCase();
      state.searchedterms = searchBy;
    },

    handleDeleteProduct: (state, action: PayloadAction<string>) => {
      state.products = state.products.filter(
        (product: { _id: any }) => product._id !== action.payload,
        console.log("idSlice:", action.payload)
      );
    },
    // handleUpdateProduct: (state, action) => {
    //   state.products.map(item => {
    //     if(item.id == action.payload._id){
    //       item.title = action.payload.ti
    //     }
    //   })
    // }
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
      state.products = action.payload;
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
      state.products = action.payload;
      // state.products.filter(
      //    (product: { _id: any }) => product._id !== action.payload);
      //   const {
      //     arg: { _id },
      //   } = action.meta;
      //   if (_id) {
      //     state.userProducts = state.userProducts.filter(
      //       (item: any) => item._id !== _id
      //     );
      //     state.products = state.products.filter((item: any) => item._id !== _id);
      //   }
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
      state.item = action.payload;
    });

    //   console.log("action", action);
    //   const {
    //     arg: { id },
    //   } = action.meta;
    //   if (id) {
    //     state.userProducts = state.userProducts.filter((item: any) =>
    //       item._id ? action.payload : item
    //     );
    //     state.items = state.items.filter((item: any) =>
    //       item._id == id ? action.payload : item
    //     );
    //   }
    //

    builder.addCase(updateProduct.rejected, (state) => {
      state.loading = false;
      state.error = "something went wrong";
    });
  },
});
export const { handleSearch, handleDeleteProduct } = productSlice.actions;
export default productSlice.reducer;
