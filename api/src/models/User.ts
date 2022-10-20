import mongoose, { Document } from 'mongoose'
// import bcrypt from 'bcrypt'
// import jwt from 'jsonwebtoken'
import crypto from 'crypto'
// import { JWT_SECRET } from '../util/secrets'


export interface UserDocument extends Document {
  email: string
  // password: string
  googleId: string
  id: string
  firstName: string
  lastName: string
  hash: string
  salt: string
  setPassword: any
  validPassword: any
  
}

const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },

  lastName: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
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
UserSchema.methods.setPassword = function(password: any) { 
     
 // Creating a unique salt for a particular user 
    this.salt = crypto.randomBytes(16).toString('hex'); 
  
    // Hashing user's salt and password with 1000 iterations, 
     
    this.hash = crypto.pbkdf2Sync(password, this.salt,  
    1000, 64, `sha512`).toString(`hex`); 
}; 
  
// Method to check the entered password is correct or not 
UserSchema.methods.validPassword = function(password: any) { 
    var hash = crypto.pbkdf2Sync(password,  
    this.salt, 1000, 64, `sha512`).toString(`hex`); 
    return this.hash === hash; 
}; 

export default mongoose.model<UserDocument>('User', UserSchema)

// // Hash password before saving and signing user up
// UserSchema.pre("save", async function (next) {
//   try {
//     !this.isModified("password") && next();
//     const salt = await bcrypt.genSalt(12);
//     this.password = await bcrypt.hash(this.password, salt);
//     next();
//   } catch (error) {
//     console.log(error);
//   }
// });


// // compare password before Signing in
// UserSchema.methods.matchPasswords = async function (password:any) {
//   try {
//     return await bcrypt.compare(password, this.password);
//   } catch (error) {
//     console.log(error);
//   }
// };
// // Store id information in the token
// UserSchema.methods.getSignedToken = function () {
//   // DOUBLE JEOPARDY
//   return jwt.sign({ id: this._id, email: this.email },JWT_SECRET,{
//     expiresIn: process.env.JWT_EXPIRE,
//   });
// };
// // this saves the reset password token and expiry generated to the DB
// UserSchema.methods.getResetPasswordToken = function () {
//   const resetToken = crypto.randomBytes(20).toString("hex");
//   this.resetPasswordToken = crypto
//     .createHash("sha256")
//     .update(resetToken)
//     .digest("hex");

//   this.resetPasswordExpire = Date.now() + 10 * (60 * 1000);
//   return resetToken;
// };


// export default mongoose.model<UserDocument>('User', UserSchema)

