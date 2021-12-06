import express from "express"
import type { Request, Response, NextFunction } from "express"

const checkAuth = (req: Request, res: Response, next: NextFunction) => {
  if (!req.user) {
    res.redirect("http://localhost:3000/login")
  } else {
    next()
  }
}
