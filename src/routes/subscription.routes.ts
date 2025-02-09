import { Router } from "express";

const subscriptionRouter = Router();

subscriptionRouter.get("/", (req, res) => {
  res.json({
    message: "GET all subscriptions",
  });
});

subscriptionRouter.get("/upcoming-renewals", (req, res) => {
  res.json({
    message: "GET subscription renewals",
  });
});

subscriptionRouter.get("/:id", (req, res) => {
  res.json({
    message: "GET subscription",
  });
});

subscriptionRouter.post("/", (req, res) => {
  res.json({
    message: "CREATE subscription",
  });
});

subscriptionRouter.put("/:id", (req, res) => {
  res.json({
    message: "UPDATE subscription",
  });
});

subscriptionRouter.delete("/:id", (req, res) => {
  res.json({
    message: "DELETE subscription",
  });
});

subscriptionRouter.get("/user/:id", (req, res) => {
  res.json({
    message: "Get all user subscriptions",
  });
});

subscriptionRouter.put("/:id/cancel", (req, res) => {
  res.json({
    message: "CANCEL subscription",
  });
});

export default subscriptionRouter;
