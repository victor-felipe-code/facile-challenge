import express, { Request, Response } from "express";

import { controllerCreate, controllerGetById } from "./controller";

const router = express.Router();

router.get("/", (req: Request, res: Response) => {
  res.status(200).json({ message: "OK" });
});

router.post("/encrypts", controllerCreate);
router.get("/encrypts/:id", controllerGetById);

export { router };
