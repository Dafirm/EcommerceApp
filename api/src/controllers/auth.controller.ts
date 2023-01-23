import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'
import { UnauthorizedError } from '../helpers/apiError'
import { UserDocument } from '../models/User'

export const login = (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = req.user as UserDocument
    const token = jwt.sign({ user }, process.env.JWT_SECRET as string, {
      expiresIn: '1h',
    })
    res.json({ token, user })
    return
  } catch {
    next(new UnauthorizedError('Unauthorized Request'))
  }
}
