import mongoose, { Document } from 'mongoose'

import crypto from 'crypto'

export interface UserDocument extends Document {
  email: string
  // password: string
  googleId: string
  id: string
  firstName: string
  lastName: string
  country: string
  city: string
  interest: string
  hash: string
  salt: string
  setPassword: any
  validPassword: any
}

const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
  },

  lastName: {
    type: String,
  },

  email: {
    type: String,
  },

  country: {
    type: String,
  },
  city: {
    type: String,
  },
  interest: {
    type: String,
  },

  // password: {
  //   type: String,
  //   required: false,
  // },
  googleId: {
    type: String,
    required: false,
  },
  id: {
    type: String,
  },
  hash: String,
  salt: String,
})

//  Method to set salt and hash the password for a user
UserSchema.methods.setPassword = function (password: any) {
  // Creating a unique salt for a particular user
  this.salt = crypto.randomBytes(16).toString('hex')

  // Hashing user's salt and password with 1000 iterations,

  this.hash = crypto
    .pbkdf2Sync(password, this.salt, 1000, 64, 'sha512')
    .toString('hex')
}

// Method to check the entered password is correct or not
UserSchema.methods.validPassword = function (password: any) {
  const hash = crypto
    .pbkdf2Sync(password, this.salt, 1000, 64, 'sha512')
    .toString('hex')
  return this.hash === hash
}

export default mongoose.model<UserDocument>('User', UserSchema)
