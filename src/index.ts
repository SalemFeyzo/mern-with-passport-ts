import express from "express"
import dotenv from "dotenv"
import connectDB from "./config/connectDB"

dotenv.config()
connectDB()
const app = express()

app.get("/", (req, res) => {
  res.send("hello world")
})

const port = process.env.PORT || 5000
app.listen(port, () =>
  console.log(`The server is running on http://localhost:${port}`)
)
