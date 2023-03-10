import Admin, { AdminDocument } from '../models/Admin'
import { BadRequestError, NotFoundError } from '../helpers/apiError'

const createAdmin = async (admin: AdminDocument): Promise<AdminDocument> => {
  return admin.save()
}

const findById = async (adminId: string): Promise<AdminDocument> => {
  const foundAdmin = await Admin.findById(adminId)

  if (!foundAdmin) {
    throw new NotFoundError(`Admin ${adminId} not found`)
  }

  return foundAdmin
}

const findByEmail = async (email: string): Promise<AdminDocument> => {
  const foundAdmin = await Admin.findOne({ email: email })

  if (!foundAdmin) {
    throw new BadRequestError('Wrong email or password.')
  }

  return foundAdmin
}

const findAll = async (): Promise<AdminDocument[]> => {
  return Admin.find().sort({ _id: -1 })
}

const update = async (
  adminId: string,
  update: Partial<AdminDocument>
): Promise<AdminDocument | null> => {
  const foundAdmin = await Admin.findByIdAndUpdate(adminId, update, {
    new: true,
  })

  if (!foundAdmin) {
    throw new NotFoundError(`Admin ${adminId} not found`)
  }

  return foundAdmin
}

const deleteAdmin = async (adminId: string): Promise<AdminDocument | null> => {
  const foundAdmin = Admin.findByIdAndDelete(adminId)

  if (!foundAdmin) {
    throw new NotFoundError(`Admin ${adminId} not found`)
  }

  return foundAdmin
}

export default {
  createAdmin,
  findById,
  findByEmail,
  findAll,
  update,
  deleteAdmin,
}
