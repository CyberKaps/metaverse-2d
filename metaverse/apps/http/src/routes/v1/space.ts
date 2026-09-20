import { Router, type Router as ExpressRouter } from "express";

export const spaceRouter: ExpressRouter = Router();

spaceRouter.post("/", (req, res) => {
  
});

spaceRouter.delete("/:spaceId", (req, res) => {
  
});

spaceRouter.get("/all", (req, res) => {
  res.json({ message: "get space" });
});


spaceRouter.post("/element", (req, res) => {
  res.json({ message: "create element" });
});

spaceRouter.delete("/element", (req, res) => {
  res.json({ message: "delete element" });
});


spaceRouter.get("/:spaceId", (req, res) => {

});