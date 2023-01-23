import express from 'express'
import auth from '../middlewares/authHeader'

import {
  createOrder,
  findById,
  // deleteUser,
  findAll,
  // updateUser,
  findByUserEmail,
} from '../controllers/order.controller'

const router = express.Router()

router.get('/', auth, findAll)
router.get('/:orderId', findById)
router.get('/email/:userEmail', findByUserEmail)
router.post('/', createOrder)

export default router
