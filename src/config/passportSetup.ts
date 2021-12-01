import passport from "passport"
import { Strategy as GoogleStrategy } from "passport-google-oauth2"
import { Error } from "mongoose"
import User from "../models/userModel"
import { IMongoDBUser } from "../types/IMongoDBUser"

passport.serializeUser((user: IMongoDBUser, done: any) => {
  return done(null, user._id)
})

passport.deserializeUser((id: string, done: any) => {
  User.findById(id, (err: Error, doc: IMongoDBUser) => {
    // Whatever we return goes to the client and binds to the req.user property
    return done(null, doc)
  })
})

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
    },
    function (
      accessToken: string,
      refreshToken: string,
      profile: any,
      cb: any
    ) {
      User.findOne(
        { googleId: profile.id },
        async (err: Error, doc: IMongoDBUser) => {
          if (err) {
            return cb(err, null)
          }

          if (!doc) {
            const newUser = new User({
              googleId: profile.id,
              username: profile.name.givenName,
            })

            await newUser.save()
            cb(null, newUser)
          }
          cb(null, doc)
        }
      )
    }
  )
)
