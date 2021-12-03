import console from "console";
import { NextFunction, Request, Response } from "express";
import rescue from "express-rescue";

import { serviceCreate, serviceGetById } from "../service";

export const controllerCreate = rescue(
  async (req: Request, res: Response, next: NextFunction) => {
    const { name } = req.body;
    const resultService = await serviceCreate(name);
    console.log("CONTROLLER  CREATE ------   ", resultService);
    if (resultService && resultService.created) {
      console.log("CONTROLLER  CREATE ------ IF  ", resultService);

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
    console.log("CONTROLLER  get ------   ", resultService);
    if (resultService && resultService.content) {
      console.log("CONTROLLER  get ------  IF ", resultService);
      res.status(resultService?.statusCode).json(resultService.content);
      return;
    }
    next(resultService);
  }
);
