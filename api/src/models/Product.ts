import mongoose, { Document } from 'mongoose'

export type ProductDocument = Document & {
  title: string
  images: string
  description: string
  category: string
  size: number
  price: number
  creator: string
  shopCount: number
}

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    index: true,
    required: true,
  },
  images: {
    type: String,
    required: true,
  },
  shopCount: {
    type: Number,
  },

  category: {
    type: String,
    required: true,
  },
  creator: String,

  price: {
    type: Number,
    required: true,
  },

  size: {
    type: Number,
    required: true,
  },
  description: String,
})

export default mongoose.model<ProductDocument>('Product', productSchema)
