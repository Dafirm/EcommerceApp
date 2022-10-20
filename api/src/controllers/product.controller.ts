import { Request, Response, NextFunction } from 'express'
import mongoose from 'mongoose'
import Product from '../models/Product'
import productService from '../services/product.service'
import { BadRequestError } from '../helpers/apiError'

// POST /products
export const createProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const {
      title,
      images,
      description,
      categories,
      size,
      price,
      shopCount,
      creator,
    } = req.body

    const product = new Product({
      title,
      images,
      description,
      categories,
      size,
      price,
      shopCount,
      creator: req.user,
    })

    await productService.create(product)
    res.status(201).json(product)
  } catch (error) {
    if (error instanceof Error && error.name == 'ValidationError') {
      next(new BadRequestError('Invalid Request', 400, error))
    } else {
      next(error)
    }
  }
}

// GET /products
export const findAll = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
      const products = await productService.findAll();

    res.json(products)
  } catch (error) {
    if (error instanceof Error && error.name == 'ValidationError') {
      next(new BadRequestError('Invalid Request', 400, error))
    } else {
      next(error)
    }
  }
}

// GET /products/:productId
export const findById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    res.json(await productService.findById(req.params.id))
  } catch (error:any) {
    if (error instanceof Error && error.name == 'ValidationError') {
      next(new BadRequestError('Invalid Request', 400, error))
    } else {
      next(error)
    }
  }
}

export const getProductsByUser = async (req: Request, res: Response) => {
  const { id } = req.params
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ message: "User doesn't exist" })
  }
  const userProducts = await Product.find({ creator: id })
  res.status(200).json(userProducts)
}

// PUT /products/:productId
export const updateProduct = async (req:Request, res:Response) => {
  const { id }:any = req.params
  const { title, description, categories, image, tags, shoptCount, size, price, shopCount } = req.body
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ message: `No tour exist with id: ${id}` })
    }

    const updatedProduct = {
      title, description, categories, image, tags, shoptCount, size, price, shopCount,
      _id: id,
    }
    await Product.findByIdAndUpdate(id, updatedProduct, { new: true })
    res.json(updatedProduct)
  } catch (error:any) {
    if (error instanceof Error && error.name == 'ValidationError') {
      next(new BadRequestError('Invalid Request', 400, error))
    } else {
      next(error)
    }
  }
}
// export const updateProduct = async (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
//   try {
//     const update = req.body
//     const productId = req.params.productId
//     const updatedProduct = await productService.update(productId, update)
//     res.status(201).json(updatedProduct)
//   } catch (error) {
//     if (error instanceof Error && error.name == 'ValidationError') {
//       next(new BadRequestError('Invalid Request', 400, error))
//     } else {
//       next(error)
//     }
//   }
// }

// DELETE /products/:productId
export const deleteProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await productService.deleteProduct(req.params.id)
    res.status(200).json({message: 'Product seleted'})
  } catch (error) {
    if (error instanceof Error && error.name == 'ValidationError') {
      next(new BadRequestError('Invalid Request', 400, error))
    } else {
      next(error)
    }
  }
}
function next(arg0: BadRequestError) {
  throw new Error('Function not implemented.')
}

