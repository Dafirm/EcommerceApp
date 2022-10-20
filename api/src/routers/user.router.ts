

import express from 'express'

import { NextFunction } from "express"


import { signup, signin, googleSignIn } from '../controllers/user.controller'

const router = express.Router()

// Every path we define here will get /api/v1/users prefix
router.post('/signup', signup)
router.post('/signin', signin)
router.post('/googleSignIn', googleSignIn)
// router.get('/', findAll)
// router.get('/:profile',findById )
// 

export default router

