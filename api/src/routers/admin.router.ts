import express from 'express'

import {
  createAdmin,
  deleteAdmin,
  findAll,
  findById,
  updateAdmin,
} from '../controllers/admin.controller'
import authHeader from '../middlewares/authHeader'
import auth from '../middlewares/authHeader'

const router = express.Router()

router.post('/', auth, createAdmin)
router.get('/', authHeader, findAll)
router.get('/:adminId', authHeader, findById)
router.put('/:adminId', authHeader, updateAdmin)
router.delete('/:adminId', authHeader, deleteAdmin)

export default router
