import User, { UserDocument } from '../models/User'
import { NotFoundError } from '../helpers/apiError'
import { UserEntry } from '../util/types'

const createUser = async (user: UserEntry): Promise<UserDocument> => {
  const newUser = new User(user)
  return await newUser.save()
}

const signup = async (user: UserDocument): Promise<UserDocument> => {
  return user.save()
}

const findById = async (userId: string): Promise<UserDocument> => {
  const foundUser = await User.findById(userId)

  if (!foundUser) {
    throw new NotFoundError(`User ${userId} not found`)
  }

  return foundUser
}

const findAll = async (): Promise<UserDocument[]> => {
  return User.find()
}

const findUserByEmail = async (email: string): Promise<UserDocument | null> => {
  const user = await User.findOne({ email })

  if (!user) {
    return null
  }

  return user
}

const update = async (
  userId: string,
  update: Partial<UserDocument>
): Promise<UserDocument | null> => {
  const foundUser = await User.findByIdAndUpdate(userId, update, {
    new: true,
  })

  if (!foundUser) {
    throw new NotFoundError(`User ${userId} not found`)
  }

  return foundUser
}

const deleteUser = async (userId: string): Promise<UserDocument | null> => {
  const foundUser = User.findByIdAndDelete(userId)

  if (!foundUser) {
    throw new NotFoundError(`User ${userId} not found`)
  }

  return foundUser
}

export default {
  signup,
  findById,
  findAll,
  update,
  deleteUser,
  findUserByEmail,
  createUser,
}
