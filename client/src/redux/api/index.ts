import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:4000/api/v1",
});

API.interceptors.request.use((req:any) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")|| '{}').token
    }`;
  }
  return req;
});

export const signIn = (formData: any) => API.post("/users/signin", formData);
export const signUp = (formData: any) => API.post("/users/signup", formData);
export const googleSignIn = (result: any) => API.post("/users/googleSignIn", result);

export const createProduct = (productData: any) => API.post("/products/", productData);
export const findAll = () => API.get("/products");
export const findById = (id: string) => API.get(`/products/${id}`);
export const deleteProduct = (id: string) => API.delete(`/products/${id}`);
export const updateProduct = (ProductData: any, id: any) =>
  API.put(`/products/${id}`, ProductData);
export const getProductsByUser = (userId: any) => API.get(`/products/userProducts/${userId}`);

