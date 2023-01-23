import express from 'express'
import passport from 'passport'

import { login } from '../controllers/auth.controller'

const router = express.Router()

router.post(
  '/',
  (req, res, next) => {
    console.log(req.headers.id_token)
    next()
  },
  passport.authenticate('google-id-token', { session: false }),
  login
)

export default router
