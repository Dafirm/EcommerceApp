import mongoose, { Document } from 'mongoose'

export type ProductDocument = Document & {
  title: string
  images: string
  description: string
  categories: string
  size: string
  price: string
  creator:string
  shopCount: {
    type: number
  }
  
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
  
  categories: {
    type:String,
    required: true,
  },

  size: String,
  creator: String,

  price: String,
})

export default mongoose.model<ProductDocument>('Product', productSchema)
