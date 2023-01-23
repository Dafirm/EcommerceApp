import Product, { ProductDocument } from '../models/Product'
import { NotFoundError } from '../helpers/apiError'

const create = async (product: ProductDocument): Promise<ProductDocument> => {
  return product.save()
}

const findById = async (id: string): Promise<ProductDocument> => {
  const foundProduct = await Product.findById(id)
  console.log('api:', id)

  if (!foundProduct) {
    throw new NotFoundError(`Product ${id} not found`)
  }

  return foundProduct
}

const findAll = async (): Promise<ProductDocument[]> => {
  return Product.find()
}

const update = async (
  id: string,
  update: Partial<ProductDocument>
): Promise<ProductDocument | null> => {
  const foundProduct = await Product.findByIdAndUpdate(id, update, {
    new: true,
  })

  if (!foundProduct) {
    throw new NotFoundError(`Product ${id} not found`)
  }

  return foundProduct
}

const deleteProduct = async (id: string): Promise<ProductDocument | null> => {
  const foundProduct = Product.findByIdAndDelete(id)

  if (!foundProduct) {
    throw new NotFoundError(`Product ${id} not found`)
  }

  return foundProduct
}

export default {
  create,
  findById,
  findAll,
  update,
  deleteProduct,
}
