import express from 'express'
const router = express.Router()

import Order from '../models/Order'
import Product from '../models/Product'
import ApiError from '../helpers/apiError'

router.get('/', async (req, res) => {
  const orders = await Order.find().populate('products')

  res.json(orders)
})
router.post('/', async (req, res) => {
  const { name, products } = req.body

  const order = new Order({
    name,
    products,
  })

  //   const product = new Product(data)
  //   console.log('product:', product)
  await order.save()
  res.json(order)
})

export default router
