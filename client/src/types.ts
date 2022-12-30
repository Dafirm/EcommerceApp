export {};

export type Product = {
  
  _id: string;
  title: string;
  images: string;
  description: string;
  category: string;
  size: string;
  price: string;
  cartQuantity: number;
 
};



export type NewProduct = Partial<Product>;


export type Order = {
  product: any;
  quantity: number;
  _id: string;
  total_price: number;
  ownerId: string;
  image: string;
};

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

export type authUser = {
  userId: string;
  admin: boolean;
  id: string;
} | null;

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

// export type Cart = {
//   description:string
//   title: string
//   images:string
//   categories:string
//   size: string
//   price:string
// };

export type ProductName = Partial<Product>;
export type Cart = Pick<Product,'title' | 'images'>

export type AddToCartAction = {
  type: string;
  payload: Cart;
};

export type RemoveFromCartAction = {
  type: string;
  payload: ProductName;
};