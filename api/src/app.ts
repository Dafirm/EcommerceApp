import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
// import session from 'express-session'
// import cookieParser from 'cookie-parser'
import passport from 'passport'
import jwt from 'jsonwebtoken'
import jwtStrategy from './passport/google'


import apiErrorHandler from './middlewares/apiErrorHandler'
import apiContentType from './middlewares/apiContentType'
import productRouter from './routers/product.router'
import userRouter from './routers/user.router'

import loginWithGoogle from './passport/google'
import { JWT_SECRET } from './util/secrets'




dotenv.config({ path: '.env' })
const app = express()

// Express configuration
app.set('port', process.env.PORT)

// Global middleware
app.use(
  cors({
    origin: '*',
  })
)
app.use(apiContentType)
app.use(express.json())


app.use(passport.initialize())
passport.use(loginWithGoogle())

// Set up routers
app.use('/api/v1/users', userRouter)
app.use('/api/v1/products', productRouter)

app.post(
  '/api/v1/users',
  passport.authenticate('google-id-token', { session: false }),
  (req, res) => {
    const customer: any = req.user

    const token = jwt.sign(
      { customerId: customer._id, isAdmin: customer.isAdmin },
      JWT_SECRET,
      {
        expiresIn: '1h',
      }
    )
    res.json({ token })
  }
)
  // TODO: check if there's a duplicate DUDE



// Custom API error handler
app.use(apiErrorHandler)

export default app
