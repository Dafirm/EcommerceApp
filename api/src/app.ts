import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'

import passport from 'passport'

import apiErrorHandler from './middlewares/apiErrorHandler'
import apiContentType from './middlewares/apiContentType'
import productRouter from './routers/product.router'
import userRouter from './routers/user.router'
import adminRouter from './routers/admin.router'

import loginWithGoogle from './passport/google'

import authRouter from './routers/auth.router'

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
app.use('/api/v1/admins', adminRouter)
app.use('/api/v1/auth', authRouter)

// Custom API error handler
app.use(apiErrorHandler)

export default app
