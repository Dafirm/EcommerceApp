export {};

declare global {
  interface Window {
    cloudinary: any; // whatever type you want to give. (any,number,float etc)
    gtag: (...args: any[]) => void;
  }
}
export type Product = {
  _id: string;
  title: string;
  images: string;
  description: string;
  categories: string;
   
  sizes: string;
  price: string;
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

export type Cart = {
  description:string
  title: string
  images:string
  categories:string
  size: string
  price:string
};

export type ProductName = Pick<Product, "title">;

export type AddToCartAction = {
  type: string;
  payload: Cart;
};

export type RemoveFromCartAction = {
  type: string;
  payload: ProductName;
};