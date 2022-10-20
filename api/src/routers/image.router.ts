import { Request, Response } from 'express'

const cloudinary = require('cloudinary').v2
// import { v2 as cloudinary } from 'cloudinary'
const router = require('express').Router()
require('dotenv').config()


cloudinary.config({
  CLOUD_NAME: process.env.CLOUD_NAME,
  CLOUD_API_KEY: process.env.CLOUD_API_KEY,
  CLOUD_API_SECRET: process.env.CLOUD_API_SECRET,
})


router.delete('/:public_id', async (req: Request, res: Response) => {
  const { public_id } = req.params
  try {
    await cloudinary.uploader.destroy(public_id)
    res.status(200).send()
  } catch (error:any) {
    res.status(400).send(error.message)
  }
})

router.post('/product', async (req: Request, res: Response) => {
  const { images } = req.body
  const uploadedImgs = images.map(async (image:any) => {
    const upload = await cloudinary.uploader.upload(
      image,
      {
        upload_preset: 'unsigned_upload',
        allowed_formats: ['png', 'jpg', 'jpeg', 'svg', 'ico', 'jfif', 'webp'],
      },
      function (error:any, result:any) {
        if (error) {
          console.log(error)
        }
      }
    )
    return upload
  })

  try {
    const fulfilled = await Promise.all(uploadedImgs).then((values) => {
      return values
    })
    const publicIds = fulfilled.map((image) => {
      return image.public_id
    })
    console.log(publicIds)
    res.status(200).json(publicIds)
  } catch (err) {
    res.status(500).json(err)
  }
})

export default router
