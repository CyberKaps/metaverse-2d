import { Router, type Router as ExpressRouter } from "express";

export const userRouter: ExpressRouter = Router();

userRouter.post("/metadata", (req, res) => {
  res.json({ message: "metadata" });
});

userRouter.get("/metadata/bulk", (req, res) => {
  res.json({ message: "metadata bulk" });
});