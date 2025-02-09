import { Router } from "express";

const userRouter = Router();

userRouter.get("/", (req, res) => {
  res.json({
    message: "GET all users ",
  });
});

userRouter.get("/:id", (req, res) => {
  res.json({
    message: "GET user",
  });
});

userRouter.post("/", (req, res) => {
  res.json({
    message: "CREATE user",
  });
});

userRouter.put("/:id", (req, res) => {
  res.json({
    message: "UPDATE user",
  });
});

userRouter.delete("/:id", (req, res) => {
  res.json({
    message: "DELETE user",
  });
});

export default userRouter;
