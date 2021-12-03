import { NextFunction, Request, Response } from "express";
import rescue from "express-rescue";

import { serviceCreate, serviceGetById } from "../service";

export const controllerCreate = rescue(
  async (req: Request, res: Response, next: NextFunction) => {
    const { name } = req.body;
    const resultService = await serviceCreate(name);
    if (resultService?.created) {
      res.status(resultService.statusCode).json(resultService.created);
      return;
    }
    next(resultService);
  }
);

export const controllerGetById = rescue(
  async (req: Request, res: Response, next: NextFunction) => {
    const id = req.params?.id;
    const resultService = await serviceGetById(id);
    if (resultService?.content) {
      res.status(resultService?.statusCode).json(resultService.content);
      return;
    }
    next(resultService);
  }
);
