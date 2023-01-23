export interface ParsedToken {
  payload: {
    email: string
    email_verified: string
    name: string
    picture: string
    given_name: string
    family_name: string
    locale: string
  }
}

// interface VerifyCallback {
//   (parsedToken: ParsedToken, googleId: string, done: VerifiedCallback): void
// }

export interface VerifiedCallback {
  (error: any, user?: any, info?: any): void
}

export interface UserEntry {
  firstName: string
  lastName: string
  email: string
}
