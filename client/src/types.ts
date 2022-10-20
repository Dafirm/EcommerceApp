export {};

declare global {
  interface Window {
    cloudinary: any; // whatever type you want to give. (any,number,float etc)
    gtag: (...args: any[]) => void;
  }
}
export type Product = {
  _id: string;
  name: string;
  images: string;
  description: string;
  categories: {
    strings: string;
    pipe: string;
    pacussion: string;
  };
  sizes: string[];
  price: number;
};

export type NewProduct = Partial<Product>;


export type User = {
  username: string
  email: string;
  image: string;
  password: string;
  isAdmin: boolean;
  matchPasswords: (pw: string) => Promise<boolean>;
  resetPasswordToken: undefined;
  resetPasswordExpires: any;
  getResetPasswordToken: any;
  message:any
};

export type NewUser = Partial<User>;

//user reducer types
export const SET_AUTHENTICATED='SET_AUTHENTICATED';
export const SET_UNAUTHENTICATED='SET_UNAUTHENTICATED';
export const SET_USER='SET_USER';
export const LOADING_USER='LOADING_USER';
//UI reducer types
export const SET_ERRORS='SET_ERRORS';
export const LOADING_UI='LOADING_UI';
export const CLEAR_ERRORS='CLEAR_ERRORS';

export interface IUser {
  name: string;
  email: string;
  role: string;
  _id: string;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}

export interface IGenericResponse {
  status: string;
  message: string;
}