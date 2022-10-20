import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'
import User from '../models/User'


import { ForbiddenError } from '../helpers/apiError'
import { JWT_SECRET } from '../util/secrets'





const auth = async (req: Request, res: Response, next: NextFunction)=> {
  try {
    const authorizationHeader = req.headers.authorization
    if (authorizationHeader) {
      console.log('authorizationHeader:', authorizationHeader)
      const token = authorizationHeader.split(' ')[1]
      const isCustomAuth = token.length < 500
        let decodedUser:any

        if (token && isCustomAuth) {
      decodedUser = jwt.verify(token, JWT_SECRET)

      // const decodedUser = jwt.verify(token, JWT_SECRET)
      console.log('decodedUser:', decodedUser)
      

      req.user = decodedUser?.id

      
    } else {
      decodedUser = jwt.decode(token)
      const googleId = decodedUser?.sub.toString()
      const user = await User.findOne({ googleId })
      req.user = user?._id
    }
    return next()
    
  } 
  }catch (error:any) {
    throw new ForbiddenError()}

  }
export default auth;