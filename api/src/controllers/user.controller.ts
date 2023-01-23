import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'
import mongoose from 'mongoose'
import userService from '../services/user.service'
import { BadRequestError } from '../helpers/apiError'
import User from '../models/User'
import { JWT_SECRET } from '../util/secrets'

export const signin = async (req: Request, res: Response) => {
  const { email } = req.body

  try {
    const oldUser = await User.findOne({ email })
    if (!oldUser) return res.status(404).json({ message: 'User doesn\'t exist' })

    oldUser.setPassword(req.body.password)

    const token = jwt.sign(
      { email: oldUser.email, id: oldUser._id },
      JWT_SECRET,
      {
        expiresIn: '1h',
      }
    )

    res.status(200).json({ result: oldUser, token })
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' })
    console.log(error)
  }
}

//signup user
export const signup = async (req: Request, res: Response) => {
  const { email } = req.body
  try {
    const oldUser = await User.findOne({ email })

    if (oldUser) {
      return res.status(400).json({ message: 'User already exists' })
    }
    const newUser = await User.create({
      firstName: req.body.firstName,
      lastName: req.body.firstName,
      email: req.body.email,
      counrtry: req.body.country,
      city: req.body.city,
      interest: req.body.interest,
      password: req.body.password,
    })
    newUser.setPassword(req.body.password)

    const token = jwt.sign(
      { email: newUser.email, id: newUser._id },
      JWT_SECRET,
      {
        expiresIn: '1h',
      }
    )
    res.status(201).json({ newUser, token })
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' })
    console.log(error)
  }
}

export const googleSignIn = async (req: Request, res: Response) => {
  const { email, name, token, googleId } = req.body

  try {
    const oldUser = await User.findOne({ email })
    if (oldUser) {
      const result = { _id: oldUser._id.toString(), email, name }
      return res.status(200).json({ result, token })
    }

    const result = await User.create({
      email,
      name,
      googleId,
    })

    res.status(200).json({ result, token })
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' })
    console.log(error)
  }
}

// GET /users
export const findAll = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const users = await userService.findAll()

    res.json(users)
  } catch (error) {
    if (error instanceof Error && error.name == 'ValidationError') {
      next(new BadRequestError('Invalid Request', 400, error))
    } else {
      next(error)
    }
  }
}

export const findById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    res.json(await userService.findById(req.params.id))
  } catch (error: any) {
    if (error instanceof Error && error.name == 'ValidationError') {
      next(new BadRequestError('Invalid Request', 400, error))
    } else {
      next(error)
    }
  }
}

export const updateUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id }: any = req.params
  const { firstName, lastName, email, country, city, _id } = req.body
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res
        .status(404)
        .json({ message: `No product exist with id: ${id}` })
    }

    const updatedProduct = {
      firstName,
      lastName,
      email,
      country,
      city,
      _id,
    }
    await User.findByIdAndUpdate(id, updatedProduct, { new: true })
    res.json(updatedProduct)
  } catch (error: any) {
    if (error instanceof Error && error.name == 'ValidationError') {
      next(new BadRequestError('Invalid Request', 400, error))
    } else {
      next(error)
    }
  }
}

// // DELETE /products/:productId
// export const deleteProduct = async (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
//   try {
//     await userService.deleteProduct(req.params.id)
//     res.status(200).json({message: 'Product seleted'})
//   } catch (error) {
//     if (error instanceof Error && error.name == 'ValidationError') {
//       next(new BadRequestError('Invalid Request', 400, error))
//     } else {
//       next(error)
//     }
//   }
// }
// function next(arg0: BadRequestError) {
//   throw new Error('Function not implemented.')
// }
