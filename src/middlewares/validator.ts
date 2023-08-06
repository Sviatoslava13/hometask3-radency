import { NoteSchema } from "./../schemas/schemas";
import express from "express";
export const validatorNote =
  (schema: NoteSchema) =>
  async (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    try {
      await schema.validate(req.body);
      next();
    } catch (error: unknown) {
      return res.status(400).json({ error });
    }
  };
