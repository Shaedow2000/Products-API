import { ProductSchema } from "../Schema/product.ts"; 
import { model } from 'mongoose';

export const ProductModel = model( 'Product', ProductSchema );
