import express from 'express'
import auth from '../middlewares/authHeader'

// import { productCreateSchema } from '../middlewares/validateForms'
// import { validate } from '../middlewares/validateForms'
import {
  createProduct,
  deleteProduct,
  findAll,
  findById,
  getProductsByUser,
  updateProduct,
} from '../controllers/product.controller'

const router = express.Router()

// Every path we define here will get /api/v1/products prefix
router.post('/', auth, createProduct)
router.get('/', findAll)
router.get('/:id', findById)
router.get('/userProducts/:id', getProductsByUser)
router.patch('/:id', updateProduct)
router.delete('/:id', deleteProduct)

export default router