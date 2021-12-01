import express from "express"
import passport from "passport"

const router = express.Router()

router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
)

router.get(
  "/google/callback",
  passport.authenticate(
    "google",
    { failureRedirect: "http://localhost:5000", session: true },
    (req, res) => {
      res.redirect("http://localhost:5000")
    }
  )
)

export default router
