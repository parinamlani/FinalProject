/* Defines the product entity */
export interface Product {
  id: number;
  name:string;
  email:string;
  password:string;
  dob:string;
  doj:string;
}

export interface ProductResolved {
  product: Product;
  error?: any;
}
