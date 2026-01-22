import { Schema } from 'mongoose';

export const ProductSchema: Schema = new Schema( {
  title: {
    type: String,
    unique: [ true, 'This title already exists.' ],
    required: [ true, 'A title is required.' ]
  },
  description: {
    type: String,
    required: [ true, 'A description is required.' ]
  },
  price: {
    type: Number,
    required: [ true, 'A price is required' ]
  }
} );
