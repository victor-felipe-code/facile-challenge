import { Request, Response, NextFunction, ErrorRequestHandler } from "express";

import { HttpStatusCode, MESSAGE_CUSTOM } from "../helpers";

type ErrorRequestMiddlewares = ErrorRequestHandler &
  Error & {
    statusCode: HttpStatusCode;
    error: {
      code: string;
      message: MESSAGE_CUSTOM;
    };
  };

export const errorDefault = async (
  error: ErrorRequestMiddlewares,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  if (error.statusCode && error.message) {
    return res.status(error.statusCode).json(error.message);
  }
  return res
    .status(HttpStatusCode.INTERNAL_SERVER)
    .json({ error: MESSAGE_CUSTOM.SERVER_ERROR });
};
