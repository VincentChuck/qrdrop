import type { Request, Response, NextFunction } from 'express';

const unknownEndpoint = (_request: Request, response: Response) => {
  response.status(400).send({ error: 'unknown endpoint' });
};

const errorHandler = (
  error: Error,
  _request: Request,
  _response: Response,
  next: NextFunction,
) => {
  console.log(error.message);

  next(error);
};

export default {
  unknownEndpoint,
  errorHandler,
};
