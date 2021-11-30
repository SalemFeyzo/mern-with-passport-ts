import express from "express"
import dotenv from "dotenv"
dotenv.config()
import cors from "cors"
import session from "express-session"
import passport from "passport"
import "./config/passportSetup"

const app = express()

// Config middlewares
app.use(express.json())
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
)

app.set("trust proxy", 1)

app.use(
  session({
    secret: process.env.EXPRESS_SESSION_SECRET,
    resave: true,
    saveUninitialized: true,
    cookie: {
      sameSite: "none",
      secure: true,
      maxAge: 1000 * 60 * 60 * 24 * 7, // One Week
    },
  })
)

app.use(passport.initialize())
app.use(passport.session())

//routes
app.get("/", (req, res) => {
  res.send("Api is running...")
})

const port = process.env.PORT || 5000
app.listen(port, () =>
  console.log(`The server is running on http://localhost:${port}`)
)
