import { Router } from "express";

const router = Router();

router.get("/ping", (req, res) => {
  return res.json("pong");
});

export default router;
