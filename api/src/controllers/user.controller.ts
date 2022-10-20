import { Request, Response} from 'express'
import jwt from 'jsonwebtoken'

import User from '../models/User'
import { JWT_SECRET } from '../util/secrets'

// const secret = 'test'
// const bcrypt = require('bcryptjs')


// signin user


// User login api 


export const signin = async (req: Request, res: Response) => {
  const { email, password } = req.body

  try {
    const oldUser = await User.findOne({ email })
    if (!oldUser) return res.status(404).json({ message: "User doesn't exist" })

    oldUser.setPassword(req.body.password)

    const token = jwt.sign({ email: oldUser.email, id: oldUser._id }, JWT_SECRET, {
      expiresIn: '1h',
    })

    res.status(200).json({ result: oldUser, token })
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' })
    console.log(error)
  }
}




//signup user
export const signup = async (req:Request, res:Response) => {
  const { email, password, firstName, lastName } = req.body
  try {
    const oldUser = await User.findOne({ email })

    if (oldUser) {
      return res.status(400).json({ message: 'User already exists' })
    }
        const newUser = await User.create({
          firstName: req.body.firstName,
          lastName: req.body.firstName,
          email: req.body.email,
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






























// // POST /users
// export const createUser = async (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
//   try {
//     const { name, firstname, lastname, email, image, isBanned, notifications } =
//       req.body

//     const user = new User({
//       name,
//       firstname,
//       lastname,
//       email,
//       image,
//       isBanned,
//       notifications,
//     })

//     await userService.create(user)
//     res.json(user)
//   } catch (error) {
//     if (error instanceof Error && error.name == 'ValidationError') {
//       next(new BadRequestError('Invalid Request', 400, error))
//     } else {
//       next(error)
//     }
//   }
// }

// // GET /users
// export const findAll = async (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
//   try {
//     const search = req.query.search

//     const users = await userService.findAll()
//     let usersRef = [...users]

//     if (search) {
//       usersRef = usersRef.filter((user) =>
//         user.email.toLowerCase().includes(search as string)
//       )
//     }

//     res.json(usersRef)
//   } catch (error) {
//     if (error instanceof Error && error.name == 'ValidationError') {
//       next(new BadRequestError('Invalid Request', 400, error))
//     } else {
//       next(error)
//     }
//   }
// }

// // GET /users/:userId
// export const findById = async (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
//   try {
//     res.json(await userService.findById(req.params.userId))
//   } catch (error) {
//     if (error instanceof Error && error.name == 'ValidationError') {
//       next(new BadRequestError('Invalid Request', 400, error))
//     } else {
//       next(error)
//     }
//   }
// }

// // PUT /users/:userId
// export const updateUser = async (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
//   try {
//     const update = req.body
//     const userId = req.params.userId
//     const updatedUser = await userService.update(userId, update)
//     res.json(updatedUser)
//   } catch (error) {
//     if (error instanceof Error && error.name == 'ValidationError') {
//       next(new BadRequestError('Invalid Request', 400, error))
//     } else {
//       next(error)
//     }
//   }
// }

// // DELETE /users/:userId
// export const deleteUser = async (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
//   try {
//     await userService.deleteUser(req.params.userId)
//     res.status(204).end()
//   } catch (error) {
//     if (error instanceof Error && error.name == 'ValidationError') {
//       next(new BadRequestError('Invalid Request', 400, error))
//     } else {
//       next(error)
//     }
//   }
// }
// GET /users/:userId
// export const findById = async (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
//   try {
//     res.json(await userService.findById(req.params.userId))
//   } catch (error) {
//     if (error instanceof Error && error.name == 'ValidationError') {
//       next(new BadRequestError('Invalid Request', 400, error))
//     } else {
//       next(error)
//     }
//   }
// }
// export const findAll = async (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
//   try {
//     res.json(await userService.findAll())
//   } catch (error) {
//     if (error instanceof Error && error.name == 'ValidationError') {
//       next(new BadRequestError('Invalid Request', 400, error))
//     } else {
//       next(error)
//     }
//   }
// }


// export const signup = async (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
//   try {
//     const { username, email, password } = req.body
//  const user = new User({
//    username,
//    email,
//    password,
//  })

//     await userService.signup(user)
//     res.status(201).json(user)
//   } catch (error) {
//     if (error instanceof Error && error.name == 'ValidationError') {
//       next(new BadRequestError('Invalid Request', 400, error))
//     } else {
//       next(error)
//     }
//   }
// }

// export const signin = async (
//   req:Request,
//   res:Response, 
//   next:NextFunction,
//   ) => {
//   console.log('💪SIGNIN 💪: ', req.body)
//   const { email, password } = req.body
//   // if (!email || !password)
//   //   return next(new BadRequestError('Please provide Email and Password', 400))

//   try {
//     let existingUser = await User.findOne({ email }).select('+password')

//     if (!existingUser) return next(new BadRequestError("User doesn't exist", 401))

//     // const matchPsw:any = await existingUser.matchPasswords(password)
//     // if (!matchPsw) return next(new BadRequestError('Invalid Credentials', 401))

//     sendToken(existingUser, 200, res)
//   } catch (error) {
//     res.status(500).send({
//       success: false,
//       error: error,
//     })
//     next(error)
//   }
// }

// export const forgotPassword = async (
//   req:Request, 
//   res:Response, 
//   next:NextFunction
//   ) => {
//   const { email } = req.body
//   try {
//     const user = await User.findOne({ email })

//     if (!user) return next(new BadRequestError('Email could not be sent', 404))

//     const resetToken = user.getResetPasswordToken()
//     console.log(resetToken)

//     await user.save()

//     // passwordreset or resetpassword
//     const resetUrl = `http://memories-99585.web.app/resetpassword/${resetToken}`
//     const feedbackMessage = `<h1>You have requested a password reset</h1>
//       <p>Please click reset button to reset your password</p>
//       <p>${resetUrl}</p>
//       <form action=${resetUrl} clicktracking=off>
//     <input type="submit" value="Reset Password" style="background-color:#fe3d71; color: white; border: none; padding: 10px; border-radius: 20px;"/>
// </form>`

//     try {
//       await sendEmail({
//         to: user.email,
//         subject: 'Request Password Reset',
//         text: feedbackMessage,
//       })
//       res.status(200).json({ success: true, data: 'Email Sent' })
//     } catch (error) {
//       user.resetPasswordToken = undefined
//       user.resetPasswordExpires = undefined
//       console.log('ERROR OCCURRED HERE')
//       await user.save().catch((e) => {
//         console.log(e)
//       })
//       return next(new BadRequestError('Email could not be sent', 500))
//     }
//   } catch (error) {
//     next(error)
//   }
// }

// export const resetPassword = async (
//   req:Request,
//   res:Response, 
//   next:NextFunction) => {
//   const resetPasswordToken = crypto
//     .createHash("sha256")
//     .update(req.params.resetToken)
//     .digest("hex");

//   try {
//     const user = await User.findOne({
//       resetPasswordToken,
//       resetPasswordExpires: { $gt: Date.now() },
//     });

//     if (!user) {
//       console.log("INVALID");
//       return next(new BadRequestError("Invalid Reset Token", 400));
//     }
//     user.password = req.body.password;
//     user.resetPasswordToken = undefined;
//     user.resetPasswordExpires = undefined;
//     await user.save().catch;

//     res.status(201).json({ success: true, data: "Password Reset Successful" });
//   } catch (error) {
//     next(error);
//   }
// };

// // Figure out how to turn user to user.result // Done. ln 54
// const sendToken = (user:any, statusCode:any, res:Response) => {
//   const token = user.getSignedToken();
//   const { _doc, name, ...rest } = user;
//   res
//     .status(statusCode)
//     .json({ result: { _doc, name, _id: _doc._id }, success: true, token });
// };