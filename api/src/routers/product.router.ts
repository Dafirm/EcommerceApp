import express from 'express'
import Product from '../models/Product'
import {
  createProduct,
  findById,
  deleteProduct,
  findAll,
  updateProduct,
} from '../controllers/product.controller'
// import ApiError from '../helpers/apiError'

const router = express.Router()
// router.get('/', findAll)
// router.get('/:productId', findById)
// router.put('/:productId', updateProduct)
// router.delete('/:productId', deleteProduct)
// router.post('/', createProduct)

// products paths

// router.get("/", async (_, res) => {
//   const items = await Item.find()
//     console.log('item:', items)
//       res.json(items)
// });

router.get('/', async (_, res) => {
  const products = await Product.find()
  console.log('product:', products)
  res.json(products)
})

router.post('/', async (req, res) => {
  const { name, description, quantity } = req.body

  const product = new Product({
    name,
    description,
    quantity,
  })

  //   const product = new Product(data)
  //   console.log('product:', product)
  await product.save()
  res.json(product)
})

export default router
