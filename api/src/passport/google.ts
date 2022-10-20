import GoogleTokenStrategy from 'passport-google-id-token'
import User from '../models/User'
import { GOOGLE_CLIENT_ID } from '../util/secrets'
import { VerifiedCallback, ParsedToken } from '../util/types'

console.log('Google_Client_Id:', GOOGLE_CLIENT_ID)


export default function () {
  return new GoogleTokenStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
    },
    async (
      parsedToken: ParsedToken,
      googleId: string,
      done: VerifiedCallback
    ) => {
      try {
        const email = parsedToken.payload.email
        console.log('googleId:', googleId)
        console.log('parsedToken:', parsedToken)

        let user: any = await User.findOne({ email })
        if (!user) {
          user = new User({
            firstname: parsedToken.payload.given_name,
            lastname: parsedToken.payload.family_name,
            email: parsedToken.payload.email,
            image: parsedToken.payload.picture,
            isAmin: false,
          })
          user.save()
        }
        done(null, user)
      } catch (error) {
        done(error)
      }
    }
  )
}



// import { Strategy, ExtractJwt } from 'passport-jwt'
// import { BadRequestError } from '../helpers/apiError'
// import User from '../models/User'

// import { JWT_SECRET } from '../util/secrets'

// export default (passport: any) => {
//   passport.use(
//     new Strategy(
//       {
//         jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
//         secretOrKey: JWT_SECRET,
//       },
//       async (payload, done) => {
//         // TODO: try catch block
//         const dude = await User.findOne({ username: payload.username }).select(
//           'username'
//         )
//         if (!dude) {
//           return done(
//             new BadRequestError('HOW THE HELL DID YOU GET THE TOKEN, BASTARD!')
//           )
//         }
//         done(null, dude)
//       }
//     )
//   )
// }
